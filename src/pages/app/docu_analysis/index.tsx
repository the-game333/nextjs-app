import { useEffect, useState } from 'react';
import { useSelector } from 'store';
import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Paper, Stack, Typography, Button, TableHead, TableRow, TableCell, Checkbox, TableSortLabel, Box, Toolbar, TableContainer, Table, TableBody, IconButton, } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

// project imports
import { gridSpacing } from 'store/constant';
import snackbar from 'utils/snackbar';
// file module imports
import { FileUploader } from "react-drag-drop-files";
// action imports
import { documentSubmit, loadAlldocuments } from 'actions/application';
import { useRouter } from 'next/router';
// ==============================|| Documnet Analysis ||============================== //

const DocmumentAnalysis = () => {
    const theme = useTheme();
    const router = useRouter();
    const user = useSelector(state => state.auth.user);

    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('primary_keywords');
    const [selected, setSelected] = useState([]);
    const [rows, setRows] = useState([]);

    const email = user.email;
    // const email = "holy.dev.902@gmail.com";
    /* file drag and drop*/
    const [file, setFile] = useState<File | undefined>(undefined);
    const fileTypes = ["pdf", "txt"];

    const fileHandleChange = (file: any) => {
        setFile(file);
    };
    const submitFile = async () => {
        if (!file) {
            snackbar("Please select the file.", "error")
            return;
        }
        const data = new FormData();
        data.append('file', file || "");
        data.append('email', email);
        const result = await documentSubmit(data);
        if (result.status == 200) {
            snackbar("File Uploaded successfully.");
            setFile(undefined);
            init();
        }
    }
    const init = async () => {
        const result = await loadAlldocuments(email);
        setRows(result.data);
    }
    useEffect(() => {
        init();
    }, []);

    // display the table
    const goChatGPT = async (filename: String) => {
        router.push(`/app/chatGPT/${filename}`);
    }

    const headCells = [
        {
            id: 'number',
            numeric: true,
            disablePadding: true,
            label: 'No',
        },
        {
            id: 'filename',
            numeric: true,
            disablePadding: false,
            label: 'File Name',
        },

        {
            id: 'action',
            numeric: true,
            disablePadding: false,
            label: 'Action',
        },
    ];

    const EnhancedTableHead = (props: any) => {
        const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
            props;
        const createSortHandler = (property: any) => (event: any) => {
            onRequestSort(event, property);
        };

        return (
            <TableHead>
                <TableRow>
                    {headCells.map((headCell) => (
                        <TableCell
                            key={headCell.id}
                            align={"center"}
                            // align={headCell.numeric ? 'right' : 'left'}
                            padding={headCell.disablePadding ? 'none' : 'normal'}
                            sortDirection={orderBy === headCell.id ? order : false}
                        >
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                            >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        );
    }
    const EnhancedTableToolbar = (props: any) => {
        const { numSelected } = props;
        return (
            <Toolbar
                sx={{
                    pl: { sm: 2 },
                    pr: { xs: 1, sm: 1 },
                    justifyContent: "flex-start"
                }}
            >
                <Stack direction={"row"} sx={{ width: numSelected > 0 ? "40%" : "30%" }} justifyContent={"flex-start"} gap={"5px"}>
                    Your files
                </Stack>
            </Toolbar>
        );
    }
    EnhancedTableToolbar.propTypes = {
        numSelected: PropTypes.number.isRequired,
    };
    EnhancedTableHead.propTypes = {
        numSelected: PropTypes.number.isRequired,
        onRequestSort: PropTypes.func.isRequired,
        onSelectAllClick: PropTypes.func.isRequired,
        order: PropTypes.oneOf(['asc', 'desc']).isRequired,
        orderBy: PropTypes.string.isRequired,
        rowCount: PropTypes.number.isRequired,
    };

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
                            maxSize={1}
                            label={`Drag 'n' drop some files here,or click to select files.Maxinum size of each file is 1MB`}
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
            <Grid item xs={12} lg={12} md={12}>
                <Paper sx={{ width: '100%' }}>
                    <EnhancedTableToolbar numSelected={selected.length} />
                    <TableContainer>
                        <Table
                            // sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                        >
                            <EnhancedTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={() => { }}
                                onRequestSort={() => { }}
                                rowCount={rows.length}

                            />
                            <TableBody>
                                {rows.map((item: any, i) =>
                                    <TableRow
                                        hover
                                        aria-checked={false}
                                        tabIndex={-1}
                                        sx={{ cursor: 'pointer' }}
                                        key={i}
                                    >
                                        <TableCell
                                            align='center'
                                        >
                                            {i + 1}
                                        </TableCell>
                                        <TableCell
                                            align='center'
                                        >
                                            {item.orignal_name}
                                        </TableCell>
                                        <TableCell
                                            align="center">
                                            <Button onClick={() => goChatGPT(item.filename)} variant='contained'>
                                                Open chatGPT
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
        </Grid >
    );
};
DocmumentAnalysis.Layout = 'authGuard';
export default DocmumentAnalysis;