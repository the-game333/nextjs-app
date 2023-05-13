// material-ui
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, Divider, Grid, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// project imports
import { gridSpacing } from 'store/constant';
import BaseCard from '../../components/dashboard/Explore/BaseCard';

// ==============================|| Default DASHBOARD ||============================== //




const Explore = () => {
    const theme = useTheme();
    const [selectedBtn, setSelectedBtn] = useState("All");
    const [cardList, useCardList] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    const [isLoading, setLoading] = useState(true);

    const headerButtons = [
        "All",
        "App",
        "DDD",
        "Test-child",
        "ChatGPT",
        "Image",
    ]

    useEffect(() => {
        setLoading(false);
        console.log(cardList.length, "length");
    }, []);
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} lg={12} md={12} display={'flex'} justifyContent={'space-between'} gap={1}>
                <Grid item xs={12} lg={6} md={6} display={'flex'} gap={1}>
                    {headerButtons.map(item => <Button key={item} onClick={() => setSelectedBtn(item)} sx={{ borderRadius: "10px" }} variant={selectedBtn === item ? 'contained' : 'outlined'}>{item}</Button>)}
                </Grid>
                <Grid item xs={12} lg={4} md={4} display={'flex'} justifyContent={'flex-end'} gap={1}>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                        <IconButton sx={{ p: '10px' }} aria-label="menu">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Request Template"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Paper>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={12} md={12} >
                <Grid container spacing={gridSpacing}>
                    {cardList.map((item, i) =>
                        <Grid item key={i} lg={2.4} md={3} sm={4} xs={12}>
                            <BaseCard isLoading={isLoading} />
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
};
Explore.Layout = 'authGuard';
export default Explore;