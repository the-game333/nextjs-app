import dynamic from 'next/dynamic';
// material-ui
import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
// vs code npm
// import SyntaxHighlighter from 'react-syntax-highlighter';
// // @ts-ignore
// const { docco } = dynamic(() => import('react-syntax-highlighter/dist/esm/styles/hljs'), { ssr: false });

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// =============================|| LANDING - Language PAGE ||============================= //
const style = dark;

const PreTag = ({ children }: any) => (
    <SyntaxHighlighter language="javascript" style={style}>
        {children}
    </SyntaxHighlighter>
);
const LanguageCodeTypePage = () => {
    // const codeString = "import { Novu } from '@novu/node';\n" +
    //     "const novu = new Novu(process.env.NOVU_API_KEY);\n" +
    //     "await novu.trigger('<NOTIFICATION_TEMPLATE_TRIGGER_ID>',\n" +
    //     "{\n" +
    //     "to: {\n" +
    //     "subscriberId: '<UNIQUE_SUBSCRIBER_IDENTIFIER>',\n" +
    //     "email: 'john@doemail.com',\n" +
    //     "firstName: 'John',\n" +
    //     "lastName: 'Doe',\n" +
    //     "},\n" +
    //     "payload: {\n" +
    //     "name: 'Hello World',\n" +
    //     "organization: {\n" +
    //     "logo: 'https://happycorp.com/logo.png',\n" +
    //     "},\n" +
    //     "},\n" +
    //     "}\n" +
    //     ");\n";
    const codeString = 
    "import { Novu } from '@novu/node';\n"+
    "const novu = new Novu(process.env.NOVU_API_KEY);\n"+
    "await novu.trigger('<NOTIFICATION_TEMPLATE_TRIGGER_ID>',\n"+
        "{\n"+
            "to: {\n"+
                "subscriberId: '<UNIQUE_SUBSCRIBER_IDENTIFIER>',\n"+
                "email: 'john@doemail.com',\n"+
                "firstName: 'John',\n"+
                "lastName: 'Doe',\n"+
            "},\n"+
            "payload: {\n"+
                "name: 'Hello World,'\n"+
                "organization: {\n"+
                    "logo: 'https://happycorp.com/logo.png',\n"+
                "},\n"
            "},\n"+
        "}\n"+
    ");";
    return (
        <Container>
            <Grid container spacing={gridSpacing} alignItems={'center'}>
                <Grid item md={7} sm={12}>
                    {/* <Box sx={{ minWidth: "100%", minHeight: "500px", backgroundColor: "black", borderRadius: "20px" }} > */}
                        <PreTag>{codeString}</PreTag>
                    {/* </Box> */}
                </Grid>
                <Grid item md={5} sm={12} display={'flex'} flexDirection={'column'} gap={"20px"}>
                    <Grid item xs={12} textAlign={'left'}>
                        <Typography variant="h1" fontSize={"3rem"}>An infrastructure that speaks your language</Typography>
                    </Grid>
                    <Grid item xs={12} textAlign={'left'}>
                        <Typography variant="h2" fontWeight={'unset'}>
                            Community built server-side SDK's for your preferred programming language
                        </Typography>
                    </Grid>
                    <Grid item xs={12} textAlign={'left'} display={'flex'} gap={"15px"}>
                        <Button variant='outlined' color='inherit' size='large'>
                            View Sdks
                        </Button>
                        <Button variant='outlined' color='inherit' size='large'>
                            Read Docs
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{ mt: 15 }} />
        </Container>
    );
};
export default LanguageCodeTypePage;
