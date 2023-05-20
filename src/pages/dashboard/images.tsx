import {
  Button,
  Grid,
  ImageList,
  ImageListItem,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slider,
  TextField,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
  createTheme
} from '@mui/material';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import styled from '@emotion/styled';
import { positions } from '@mui/system';
import { toNumber } from 'lodash';
import { Download } from '@mui/icons-material';

const DownloadBtn = styled('a')`
  position: absolute;
  top: 10px; /* Adjust the top position as needed */
  right: 10px; /* Adjust the left position as needed */
  background-color: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #000000;
  font-weight: bold;
`;

const images = () => {
  const sizes: string[][] = [
    ['7:4', '896x512'],
    ['3:2', '768x512'],
    ['4:3', '683x512'],
    ['5:4', '640x512'],
    ['1:1', '512x512'],
    ['4:5', '512x640'],
    ['3:4', '512x683'],
    ['2:3', '512x768'],
    ['4:7', '512x896']
  ];
  const [mode, setMode] = useState('dream');
  const [prompt, setPrompt] = useState('Write your prompt here');
  const [numImages, setNumImages] = useState(4);
  const [imageSize, setImageSize] = useState(4);
  const [imageArray, setImageArray] = useState<string[]>([]);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    let imageData = '/placeholder.png';
    const newArray: string[] = Array(numImages).fill(imageData);

    setImageArray(newArray);
    setImgLoaded(false);
  }, [numImages]);
  const theme = createTheme({
    palette: {
      primary: {
        main: '#9478cb'
      }
    }
  });
  const numOfImages = [];
  for (let i = 1; i <= 10; i++) {
    numOfImages.push(i);
  }
  const breakpoints = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4
  };

  const handleToggle = (event: SelectChangeEvent) => {
    setMode(event.target.value);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Dalle API
    if (mode == 'dalle') {
      setImgLoaded(false);
      const data = {
        prompt: prompt,
        num_outputs: numImages,
        size: sizes[imageSize][1]
      };

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };
      const response = await fetch('http://localhost:2000/api/image/dalle', requestOptions);
      // console.log(await response.json())
      const res = await response.json();
      console.log(res);
      setImageArray(res);
      setImgLoaded(true);
    }

    // StabilityAI API
    if (mode == 'dream') {
      setImgLoaded(false);
      console.log('Dream API Hit');
      const [width, height] = sizes[imageSize][1].split('x');
      const data = {
        prompt: prompt,
        cfg_scale: 7,
        cgp: 'NONE',
        height: toNumber(height),
        width: toNumber(width),
        samples: numImages,
        steps: 50,
        style: 'neon-punk'
      };
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };
      const response = await fetch('http://localhost:2000/api/image/dream', requestOptions);
      // console.log(await response.json())
      const res = await response.json();
      console.log(res);
      setImageArray(res);
      setImgLoaded(true);
    }
  };

  const sizeHandler = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    setImageSize(toNumber(event.target.value));
    // return `${sizes[value]}`;
  };

  const numImageSlider = (event: SelectChangeEvent) => {
    setNumImages(toNumber(event.target.value));
    // return `${value}`;
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={4}>
        <Grid item md={3}>
          <form onSubmit={handleSubmit}>
            <InputLabel id="engine-select-label">Engine</InputLabel>
            <Select
              labelId="engine-select-label"
              id="engine-select"
              value={mode}
              label="Engine"
              onChange={handleToggle}
              //  sx={{width: "full"}}
              autoWidth
            >
              <MenuItem value={'dream'}>DreamStudio AI</MenuItem>
              <MenuItem value={'dalle'}>Dalle AI</MenuItem>
            </Select>

            <div style={{ marginTop: '24px' }}>
              <TextField
                id="prompt"
                label="Prompt"
                multiline
                rows={6}
                defaultValue="Write your prompt here"
                fullWidth={true}
                onChange={handleChange}
                value={prompt}
              />

              <div style={{display:'flex', justifyContent: 'space-between'}}>
                <div>
                  <InputLabel id="image-size-select-label">Image Size</InputLabel>
                  <Select
                    labelId="image-size-select-label"
                    id="image-select"
                    value={imageSize.toString()}
                    label="Image Size"
                    onChange={sizeHandler}
                    autoWidth
                  >
                    {sizes.map((size, index) => (
                      <MenuItem key={index} value={index}>
                        {size[0]} {size[1]}
                      </MenuItem>
                    ))}
                  </Select>
                </div>

                <div>
                  <InputLabel id="image-number-select-label">Number</InputLabel>
                  <Select
                    labelId="image-number-select-label"
                    id="image-number-select"
                    value={numImages.toString()}
                    label="Number of Images"
                    onChange={numImageSlider}
                    autoWidth
                  >
                    {numOfImages.map((num, index) => (
                      <MenuItem value={num} key={index}>
                        {num}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              </div>

              <Button variant="contained" endIcon={<EmojiObjectsIcon />} sx={{ marginTop: '24px' }} fullWidth={true} type="submit">
                Imagine
              </Button>
            </div>
          </form>
        </Grid>

        <Grid item md={9} gap={8}>
          <ImageList sx={{ width: 'full', height: 'full' }} cols={3}>
            {imageArray.map((item, index) => (
              <ImageListItem
                key={index}
                style={{
                  borderWidth: '2px',
                  borderImage: 'linear-gradient(to bottom right, white, yellow) 1',
                  borderStyle: 'solid',
                  position: 'relative'
                }}
              >
               
                  <img src={imgLoaded ? `data:image/jpeg;base64,${item}` : `${item}`} alt={prompt} loading="lazy" />
              
                  <DownloadBtn href={`data:image/png;base64,${item}`} download={`${prompt}-${index}.png`}>
                    <Download />
                  </DownloadBtn>
               
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
images.Layout = 'authGuard';
export default images;
