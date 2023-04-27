// material-ui
import { Button, Container, Divider, Grid, Typography } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';


import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
// =============================|| LANDING - Language PAGE ||============================= //
const style = a11yDark;

const LanguageCodeTypePage = () => {
    const [language, setLanguage] = useState("javascript");
    const [selectedLanguge, setSelectedLanguge] = useState(0);
    const theme = useTheme();
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
    ]
    return (
        <Container>
            <Grid container spacing={gridSpacing} alignItems={'center'} paddingBottom={15} gap={"10px"} sx={{
                [theme.breakpoints.down("sm")]: {
                    justifyContent: "center"
                }
            }}>
                <Grid item md={6} sm={11} sx={{ backgroundColor: "black", borderRadius: "20px" }}>
                    <Grid container gap={"5px"}>
                        <Button variant={selectedLanguge === 0 ? 'contained' : 'outlined'} color={selectedLanguge === 0 ? "primary" : 'inherit'} sx={{ borderRadius: "20px" }} onClick={() => setSelectedLanguge(0)}>node.js</Button>
                        <Button variant={selectedLanguge === 1 ? 'contained' : 'outlined'} color={selectedLanguge === 1 ? "primary" : 'inherit'} sx={{ borderRadius: "20px" }} onClick={() => setSelectedLanguge(1)}>Ruby</Button>
                        <Button variant={selectedLanguge === 2 ? 'contained' : 'outlined'} color={selectedLanguge === 2 ? "primary" : 'inherit'} sx={{ borderRadius: "20px" }} onClick={() => setSelectedLanguge(2)}>Python</Button>
                        <Button variant={selectedLanguge === 3 ? 'contained' : 'outlined'} color={selectedLanguge === 3 ? "primary" : 'inherit'} sx={{ borderRadius: "20px" }} onClick={() => setSelectedLanguge(3)}>php</Button>
                        <Button variant={selectedLanguge === 4 ? 'contained' : 'outlined'} color={selectedLanguge === 4 ? "primary" : 'inherit'} sx={{ borderRadius: "20px" }} onClick={() => setSelectedLanguge(4)}>kotlin</Button>
                        <Button variant={selectedLanguge === 5 ? 'contained' : 'outlined'} color={selectedLanguge === 5 ? "primary" : 'inherit'} sx={{ borderRadius: "20px" }} onClick={() => setSelectedLanguge(5)}>curl</Button>
                        <Button variant={selectedLanguge === 6 ? 'contained' : 'outlined'} color={selectedLanguge === 6 ? "primary" : 'inherit'} sx={{ borderRadius: "20px" }} onClick={() => setSelectedLanguge(6)}>go</Button>
                    </Grid>
                    <Grid item sx={{
                        '& pre': {
                            backgroundColor: "transparent !important",
                            width: "100%",
                            [theme.breakpoints.down("sm")]: {
                                maxWidth: "300px",
                            }
                        }
                    }}>
                        <SyntaxHighlighter
                            language={language}
                            style={style}
                            showLineNumbers={true}
                            wrapLongLines={true}
                            wrapLines={true}
                            lineProps={lineNumber => ({
                                style: { cursor: 'pointer' },
                            })}
                        >
                            {codeStrings[selectedLanguge]}
                        </SyntaxHighlighter>
                    </Grid>
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
            {/* <Divider sx={{ mt: 15, backgroundColor: "transparent" }} /> */}
        </Container>
    );
};
export default LanguageCodeTypePage;
