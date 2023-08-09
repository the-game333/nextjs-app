import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import EarningCard from '../../components/dashboard/Default/EarningCard';
import PopularCard from '../../components/dashboard/Default/PopularCard';
import TotalOrderLineChartCard from '../../components/dashboard/Default/TotalOrderLineChartCard';
import TotalIncomeDarkCard from '../../components/dashboard/Default/TotalIncomeDarkCard';
import TotalIncomeLightCard from '../../components/dashboard/Default/TotalIncomeLightCard';
import TotalGrowthBarChart from '../../components/dashboard/Default/TotalGrowthBarChart';
import { gridSpacing } from '../../store/constant';
import ScrollDialog from 'pages/on-boarding';
import IsFormFilled from 'components/dashboard/Default/IsFormFilled';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const [isFilled, setIsFilled] = useState(false);

  return (
    <Grid container spacing={gridSpacing}>
      <ScrollDialog setIsFilled={setIsFilled} />
      {/* {isFilled && (<></>)} */}
      <Grid item xs={12}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <IsFormFilled />
        </Grid>
        <Grid container spacing={gridSpacing} sx={{ paddingTop: '10px' }}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
Dashboard.Layout = 'dashboardLayout';
export default Dashboard;
