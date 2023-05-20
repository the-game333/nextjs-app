import {
  Button,
  Grid,
  ImageList,
  ImageListItem,
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

// const ImageContainer = styled('div') => ({
//   position: relative;
//   display: inline-block;
// })

const ImageContainer = styled('div')`
  position: relative;
  display: inline-block;
`;

const DownloadBtn = styled('a')`
  position: absolute;
  top: 10px; /* Adjust the top position as needed */
  left: 10px; /* Adjust the left position as needed */
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

  const breakpoints = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4
  };

  // const imageArray = Array(numImages).fill(imageData)

  const handleToggle = (event: React.MouseEvent<HTMLElement>, newMode: string) => {
    setMode(newMode);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(mode);
    // console.log(prompt);
    // console.log(sizes[imageSize]);
    if (mode == 'dalle') {
      // console.log('Dalle hit')
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
    }
    // console.log(mode);

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

  function size(value: number) {
    console.log(sizes[value][0]);
    setImageSize(value);
    return `${sizes[value]}`;
  }

  function numImageSlider(value: number) {
    setNumImages(value);
    return `${value}`;
  }

  const handleDownload = async (image: string, index:number) => {
    try {
      if (mode == 'dalle') {
        const response = await fetch(image);
        const blob = await response.blob();
        const blobURL = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = blobURL;
        link.download = `${prompt}-${index}.jpg`
        link.click()
        URL.revokeObjectURL(blobURL);
      } else if(mode == 'dream'){
          const base64Img = image;
          const byteChar = atob(base64Img);
          
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={4}>
        <Grid item md={3}>
          <form onSubmit={handleSubmit}>
            <ToggleButtonGroup color="primary" value={mode} exclusive onChange={handleToggle} aria-label="Platform">
              <ToggleButton value={'dream'}>DreamStudio AI</ToggleButton>
              <ToggleButton value={'dalle'}>Dall.E 2</ToggleButton>
            </ToggleButtonGroup>

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
              <p style={{ textAlign: 'center', marginTop: '24px' }}>
                {sizes[imageSize][0]} {sizes[imageSize][1]}
              </p>
              <Slider
                aria-label="Image Size"
                defaultValue={4}
                getAriaValueText={size}
                step={1}
                marks
                min={0}
                max={8}
                track={false}
                size="small"
                style={{ width: 'full', display: 'block', marginTop: '2px' }}
              />
              <p style={{ textAlign: 'center', marginTop: '24px' }}>Number of images</p>
              <Slider
                aria-label="Image Number"
                defaultValue={5}
                getAriaValueText={numImageSlider}
                step={1}
                marks
                min={1}
                max={9}
                valueLabelDisplay="auto"
                size="small"
                style={{ width: 'full', display: 'block', marginTop: '2px' }}
              />

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
                {mode == 'dream' ? (
                  <img src={imgLoaded ? `data:image/jpeg;base64,${item}` : `${item}`} alt={prompt} loading="lazy" />
                ) : (
                  <img src={`${item}`} srcSet={`${item}`} alt={prompt} loading="lazy" />
                )}
                <DownloadBtn href={`data:image/png;base64,${item}`} download={`${prompt}-${index}.png`}>
                  Download
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
