// material-ui
import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';


// ==============================|| customer Tooltip Button ||============================== //

const TooltipButton = ({ text, image }: { text: String, image: String }) => {
    const theme = useTheme();
    // const router = useRouter();

    return (
        <Stack direction={"row"} alignItems={"center"} gap = {"10px"}>
            <Box
                sx={{
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                    borderRadius: "50%",
                    backgroundColor: "#404040"
                }}
            >
                <Box component={'img'} src={`/assets/images/customers/${image}.svg`} width={"100%"} height={"auto"} />
            </Box>
            <Typography variant='h4'>{text}</Typography>
        </Stack>
    );
};

export default TooltipButton;
