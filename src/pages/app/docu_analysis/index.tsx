import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Paper, Stack, Typography, Button, } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
// file module imports
import { FileUploader } from "react-drag-drop-files";

import { useState } from 'react';
// ==============================|| Documnet Analysis ||============================== //
import { documentSubmit } from 'actions/application';
const DocmumentAnalysis = () => {
    const theme = useTheme();

    // ================ | Add Source Modal | =============
    /* file drag and drop*/
    const [file, setFile] = useState<File | undefined>(undefined);
    const fileTypes = ["pdf"];
    const fileHandleChange = (file: any) => {
        setFile(file);
    };
    const submitFile = async () => {
        const data = new FormData();
        data.append('file', file || "");
        await documentSubmit(data);
    }
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} lg={12} md={12}>
                <Paper sx={{ width: '100%', p: 5 }}>
                    <Stack justifyContent={"center"} spacing={3} p={1} sx={{
                        '& label': {
                            height: "200px !important",
                            width: "100%"
                        },
                        '& span': {
                            fontSize: "1rem !important"
                        },
                        '& svg': {
                            display: "none !important"
                        },
                        '& label div span:nth-child(2)': {
                            display: "none !important"
                        }
                    }}>
                        <Typography variant='h4'>
                            Document Upload
                        </Typography>
                        <Typography variant='body1'>
                            File
                        </Typography>
                        <FileUploader
                            multiple={false}
                            handleChange={fileHandleChange}
                            name="file"
                            types={fileTypes}
                            maxSize={1000}
                            label={`Drag 'n' drop some files here,or click to select files.Maxinum size of each file is 250MB`}
                            id="file"
                        />
                        <Typography variant='body2'>
                            File to be processed
                        </Typography>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"flex-start"}>
                        <Button variant='contained' onClick={submitFile}>Submit</Button>
                    </Stack>
                </Paper>
            </Grid>
        </Grid >
    );
};
DocmumentAnalysis.Layout = 'authGuard';
export default DocmumentAnalysis;