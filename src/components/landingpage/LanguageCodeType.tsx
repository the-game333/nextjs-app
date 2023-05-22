// material-ui
import { Box, Button, Container, Grid, InputBase, Paper, Typography } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// third party
import { motion } from 'framer-motion';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
// =============================|| LANDING - Language PAGE ||============================= //
const style = a11yDark;

const LanguageCodeTypePage = () => {
  const [language] = useState('javascript');
  const [selectedLanguge, setSelectedLanguge] = useState(0);
  const theme = useTheme();

  const [text, setText] = useState('COPY');
  const copy = () => {
    navigator.clipboard.writeText('npx install infrahive-upcoming');
    setText('COPIED!');
    setTimeout(() => {
      reasync();
    }, 1500);
  };
  const reasync = () => {
    setText('COPY');
  };
  const codeStrings = [
    `import { Novu } from '@novu/node';
const novu = new Novu(process.env.NOVU_API_KEY);
await novu.trigger('<NOTIFICATION_TEMPLATE_TRIGGER_ID>' {
    to: {
        subscriberId: '<UNIQUE_SUBSCRIBER_IDENTIFIER>',
        email: 'john@doemail.com',
        firstName: 'John',
        lastName: 'Doe',
    },
    payload: {
        name: 'Hello World'
        organization: {
            logo: 'https://happycorp.com/logo.png',
        }
    },
});`,
    `require 'novu';

client = Novu::Client.new('NOVU_API_KEY')

body = {
    name: "<NOTIFICATION_TEMPLATE_TRIGGER_ID>",
    payload: {
        name: "Hello World",
        organization: {
            logo: "https://happycorp.com/logo.png",
        },
    },
    to: {
        firstName: "John",
        lastName: "Doe",
        email: "john@doemail.com",
        phone: "07983882199",
    },
}.to_json

client.trigger_event(body)`,
    `from novu.api import EventApi

event_api = EventApi("https://api.novu.co/api/", "<NOVU_API_KEY>")
event_api.trigger(
    name="<NOTIFICATION_TEMPLATE_TRIGGER_ID>",
    recipients="<YOUR_SUBSCRIBER_ID>",
    payload={
      'name': 'Hello World',
      'organization': {
        'logo': 'https://happycorp.com/logo.png'
      }
    },
)
  `,
    `use Novu\SDK\Novu;

$novu = new Novu(<NOVU_API_KEY>);

$novu->triggerEvent([
  'name' => '<NOTIFICATION_TEMPLATE_TRIGGER_ID>',
  'payload' => [
    'name' => 'Hello World',
    'organization' => [
			'logo': 'https://happycorp.com/logo.png',
		],
  ],
  'to' => [
      'subscriberId' => '<UNIQUE_SUBSCRIBER_IDENTIFIER>',
      'phone' => '07983882186',
      'email' => 'john@doemail.com',
      'firstName' => 'John',
      'lastName'  => 'Doe',
  ]
]);`,
    `import co.novu.Novu
import co.novu.extensions.subscribers
import co.novu.dto.request.TriggerEventRequest
import co.novu.dto.request.SubscriberRequest

fun main() {
    val novu = Novu(apiKey = "NOVU_API_KEY")

    novu.trigger(TriggerEventRequest.Companion.invoke
        ( 
            name = "<NOTIFICATION_TEMPLATE_TRIGGER_ID>",
            to = SubscriberRequest(
                    subscriberId = "harry_potter"
                    firstName = "Harry",
                    lastName = "Potter",
                    phone = "97X98XX98X1",
                    email = "email@email.com",
                    loacal = "locale",
                    avatar = "avatar",
            ),
            payload = mapOf("name" to "Hello World")
        )
    )
} 
  `,
    `curl -X POST
  -H "Content-Type: application/json"
  -H "Authorization: ApiKey REPLACE_WITH_API_KEY"
  -d '{
    "name": "<NOTIFICATION_TEMPLATE_TRIGGER_ID>",
    "payload": {
      "name": "Hello World"
    },
    "to": {
      "subscriberId": "<UNIQUE_SUBSCRIBER_IDENTIFIER>",
      "email": "john@doemail.com",
      "firstName": "John",
      "lastName": "Doe",
    }
  }' `,
    `import (
        "context"
        "fmt"
        novu "github.com/novuhq/go-novu/lib"
        "log"
    )

subscriberID := "<UNIQUE_SUBSCRIBER_IDENTIFIER>"
apiKey := "<NOVU_API_KEY>"
eventId := "<NOTIFICATION_TEMPLATE_TRIGGER_ID>"

ctx := context.Background()
to := map[string]interface{}{
    "lastName":     "Doe",
    "firstName":    "John",
    "subscriberId": subscriberID,
    "email":        "john@doemail.com",
}

payload := map[string]interface{}{
    "name": "Hello World",
    "organization": map[string]interface{}{
    "logo": "https://happycorp.com/logo.png",
    },
}

data := novu.ITriggerPayloadOptions{To: to, Payload: payload}
novuClient := novu.NewAPIClient(apiKey, &novu.Config{})

resp, err := novuClient.EventApi.Trigger(ctx, eventId, data)
if err != nil {
    log.Fatal("novu error", err.Error())
    return
}

fmt.Println(resp)`
  ];
  return (
    <Container>
      <Grid
        container
        spacing={gridSpacing}
        alignItems={'center'}
        paddingBottom={15}
        gap={'10px'}
        sx={{
          [theme.breakpoints.down('sm')]: {
            justifyContent: 'center'
          }
        }}
      >
        <Grid
          item
          md={6}
          sm={11}
          sx={{ backgroundColor: 'black', borderRadius: '20px', paddingLeft: '10px !important', paddingRight: '10px !important' }}
        >
          <Grid container gap={'5px'}>
            <Button
              variant={selectedLanguge === 0 ? 'contained' : 'outlined'}
              color={selectedLanguge === 0 ? 'primary' : 'inherit'}
              sx={{ borderRadius: '20px' }}
              onClick={() => setSelectedLanguge(0)}
            >
              node.js
            </Button>
            <Button
              variant={selectedLanguge === 1 ? 'contained' : 'outlined'}
              color={selectedLanguge === 1 ? 'primary' : 'inherit'}
              sx={{ borderRadius: '20px' }}
              onClick={() => setSelectedLanguge(1)}
            >
              Ruby
            </Button>
            <Button
              variant={selectedLanguge === 2 ? 'contained' : 'outlined'}
              color={selectedLanguge === 2 ? 'primary' : 'inherit'}
              sx={{ borderRadius: '20px' }}
              onClick={() => setSelectedLanguge(2)}
            >
              Python
            </Button>
            <Button
              variant={selectedLanguge === 3 ? 'contained' : 'outlined'}
              color={selectedLanguge === 3 ? 'primary' : 'inherit'}
              sx={{ borderRadius: '20px' }}
              onClick={() => setSelectedLanguge(3)}
            >
              php
            </Button>
            <Button
              variant={selectedLanguge === 4 ? 'contained' : 'outlined'}
              color={selectedLanguge === 4 ? 'primary' : 'inherit'}
              sx={{ borderRadius: '20px' }}
              onClick={() => setSelectedLanguge(4)}
            >
              kotlin
            </Button>
            <Button
              variant={selectedLanguge === 5 ? 'contained' : 'outlined'}
              color={selectedLanguge === 5 ? 'primary' : 'inherit'}
              sx={{ borderRadius: '20px' }}
              onClick={() => setSelectedLanguge(5)}
            >
              curl
            </Button>
            <Button
              variant={selectedLanguge === 6 ? 'contained' : 'outlined'}
              color={selectedLanguge === 6 ? 'primary' : 'inherit'}
              sx={{ borderRadius: '20px' }}
              onClick={() => setSelectedLanguge(6)}
            >
              go
            </Button>
          </Grid>
          <Grid
            item
            sx={{
              position: 'relative',
              '& pre': {
                backgroundColor: 'transparent !important',
                width: '100%',
                [theme.breakpoints.down('sm')]: {
                  maxWidth: '300px'
                }
              }
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                backgroundImage: `url(/assets/images/landing/background-blur.jpg)`,
                backgroundSize: '100% 100%',
                borderRadius: '15px',
                // opacity:"0.95",
                width: '100%',
                height: '99%',
                display: 'flex'
              }}
            >
              <Typography variant="h1" fontSize={'3rem'} margin={'auto'} sx={{}}>
                Upcoming
              </Typography>
            </Box>
            <SyntaxHighlighter
              language={language}
              style={style}
              showLineNumbers={true}
              wrapLongLines={true}
              wrapLines={true}
              lineProps={(lineNumber) => ({
                style: { cursor: 'pointer' }
              })}
            >
              {codeStrings[selectedLanguge]}
            </SyntaxHighlighter>
          </Grid>
        </Grid>
        <Grid item md={5} sm={12} display={'flex'} flexDirection={'column'} gap={'20px'}>
          <Grid item xs={12} textAlign={'left'}>
            <Typography variant="h1" fontSize={'3rem'}>
              An <span style={{ color: 'rgb(253, 224, 71)' }}> Infrastructure</span> that{' '}
              <span style={{ color: 'rgb(253, 224, 71)' }}> speaks</span> with your{' '}
              <span style={{ color: 'rgb(253, 224, 71)' }}> developers</span> in their{' '}
              <span style={{ color: 'rgb(253, 224, 71)' }}> language</span>
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign={'left'}>
            <Typography variant="h2" fontWeight={'unset'}>
              Full control over the infrastructure with server-side SDK's for your preferred programming language
            </Typography>
          </Grid>
          {/* <Grid item xs={12} textAlign={'left'} display={'flex'} gap={'15px'}>
            <Button variant="outlined" color="inherit" size="large">
              View Sdks
            </Button>
            <Button variant="outlined" color="inherit" size="large">
              Read Docs
            </Button>
          </Grid> */}
          <Grid item xs={12} sx={{ my: 3.25 }} textAlign={'center'}>
            <motion.div
              initial={{ opacity: 0, translateY: 550 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 30,
                delay: 0.4
              }}
            >
              <Box
                sx={{
                  backgroundImage: 'linear-gradient(90.13deg,rgb(254, 249, 195) .11%,rgb(253, 224, 71) 25.06%,rgb(234, 179, 8) )',
                  width: 400,
                  borderRadius: '10px',
                  padding: '2px',
                  margin: 'auto',
                  [theme.breakpoints.down('md')]: {
                    width: '100%'
                  }
                }}
              >
                <Paper
                  component="form"
                  sx={{
                    p: '8px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%'
                  }}
                >
                  <NavigateNextIcon />
                  <InputBase
                    sx={{ ml: 1, flex: 1, fontSize: '1.2rem' }}
                    // inputProps={{ 'aria-label': 'search google maps' }}
                    defaultValue={'npx install infrahive-upcoming'}
                    readOnly
                  />
                  <Button
                    variant="contained"
                    color="inherit"
                    type="button"
                    sx={{ p: '10px', color: 'black' }}
                    aria-label="copy"
                    onClick={copy}
                  >
                    {text}
                  </Button>
                </Paper>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Grid>
      {/* <Divider sx={{ mt: 15, backgroundColor: "transparent" }} /> */}
    </Container>
  );
};
export default LanguageCodeTypePage;
