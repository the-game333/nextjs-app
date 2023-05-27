import { InputLabel, MenuItem, Select, SelectChangeEvent, Slider, TextField } from '@mui/material';
import { toNumber } from 'lodash';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const ChatComp = (props: { sender: string; message: string; key: number }) => {
  return (
    <div className={`p-4 pt-1 rounded-lg`} key={props.key}>
      <p className="font-black opacity-70">{props.sender}</p>
      <p className="text-lg">{props.message}</p>
      <hr />
    </div>
  );
};

const ChatBots: { name: string; models: string[] }[] = [
  {
    name: 'Open AI',
    models: ['chatgpt', 'gpt3']
  },
  {
    name: 'Anthropic',
    models: ['claude-v1', 'claude-instant-v1.1']
  },
  {
    name: 'Cohere',
    models: ['command', 'Command-light']
  }
];

const texts = () => {
  const [textBox, setTextBox] = useState('');
  const [chatBot, setChatBot] = useState(ChatBots[0].name);
  const [chatBotIndex, setChatBotIndex] = useState(0);
  const [menuBtnActive, setMenuBtnActive] = useState(false);
  const [temperature, setTemperature] = useState(0.7)
  const [messages, setMessages] = useState<{ sender: string; message: string }[]>([]);
  const [currentModel, setCurrentModel] = useState(ChatBots[0].models[0]);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextBox(event.target.value);
  };

  const chatBotSelector = (event: SelectChangeEvent) => {
    const index = ChatBots.findIndex((item) => item.name === event.target.value)
    setChatBotIndex(index)
    setChatBot(ChatBots[index].name);
    setCurrentModel(ChatBots[index].models[0])
    console.log(event.target.value);
  };

  const chatModelSelector = (event: SelectChangeEvent) => {
    setCurrentModel(event.target.value);
  };

  const handleMenuButton = () => {
    setMenuBtnActive(!menuBtnActive);
  };

  function TempSlider(value:number){
    setTemperature(value)
    return `${value}`
  }

  const handleSendMessage = async () => {
    const newMessage = { sender: 'You', message: textBox };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    const data = {
      prompt: textBox,
      model: currentModel,
      temperature: temperature
    };
    setTextBox('');

    const reqOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    let url = '';
    switch (chatBot) {
      case 'Open AI':
        url = 'http://localhost:2000/api/text/openai';
        console.log(url);
        break;
      case 'Anthropic':
        url = 'http://localhost:2000/api/text/anthropic';
        console.log(url);
        break;
      case 'Cohere':
        url = 'http://localhost:2000/api/text/cohere';
        console.log(url);
        break;
      default:
        console.log('Case not working');
        break;
    }
    console.log(url);

    const res = await fetch(url, reqOptions);
    const body = await res.text();
    const serverMess = { sender: chatBot, message: body };
    setMessages((prevMessages) => [...prevMessages, serverMess]);
    console.log(serverMess);
  };

  return (
    <div className="">
      {/* Chat Bot Selector */}
      <div className="flex justify-between bg-white rounded-lg p-4 w-full">
        <div className="flex">
          {/* Bot Selector */}
          <div className="mx-4">
            <InputLabel id="chatBot-select-label">Chat Engine</InputLabel>
            <Select
              labelId="chatBot-select-label"
              id="chatBot-select"
              value={chatBot}
              label="Chat Engine"
              onChange={chatBotSelector}
              autoWidth
            >
              {/* Options of the selector  */}
              {ChatBots.map((bot, index) => (
                <MenuItem key={index} value={bot.name}>
                  {bot.name}
                </MenuItem>
              ))}
            </Select>
          </div>

          {/* Model Selector */}
          <div className="mx-4">
            <InputLabel id="chatBot-model-label">Engine Model</InputLabel>
            <Select
              labelId="chatBot-model-label"
              id="chatbot-model-select"
              value={currentModel}
              label="Engine Model"
              onChange={chatModelSelector}
              autoWidth
            >
              {/* Options of the selector  */}
              {ChatBots[toNumber(chatBotIndex)].models.map((model, index) => (
                <MenuItem key={index} value={model}>
                  {model}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>

        {/* Advanced Menu */}
        <div className="">
          <button onClick={handleMenuButton} className="my-auto relative">
            <MenuIcon sx={{ height: '28px', marginTop: 'auto', marginBottom: 'auto' }} />
          </button>
          <div className={`${menuBtnActive ? 'absolute right-12' : 'hidden'} bg-white p-4 border-2 border-grey rounded-sm z-[9999]`}>
            <p className='text-lg opacity-70'>Advanced Settings</p>
            <hr className='-mt-2'/>
            {/* Temperature Slider */}
            <div className='w-44'>
              <p className=''>Temperature</p>
              <Slider
                aria-label="Temperature"
                defaultValue={0.7}
                getAriaValueText={TempSlider}
                valueLabelDisplay="auto"
                step={0.1}
                marks
                min={0.1}
                max={2}
              />
            </div>

              {/* Max Token Count */}

          </div>
        </div>
      </div>

      <div className="h-full overflow-auto mb-24  grid grid-cols-1 content-end bg-white">
        <div className="w-[40%] mx-auto">
          {messages.map((mess, index) => (
            <ChatComp sender={mess.sender} message={mess.message} key={index} />
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-[20%] right-[10%] p-4 flex z-[9999]">
        <TextField
          id="standard-multiline-flexible"
          multiline
          maxRows={4}
          variant="standard"
          value={textBox}
          placeholder='Write your prompt here'
          onChange={handleInputChange}
          className='w-full text-lg pt-4 px-4 rounded-l-xl resize-y h-16 bg-white'
        />
        <button onClick={handleSendMessage} className="bg-dark-blue rounded-r-xl px-4 py-2 text-white font-semibold text-lg !border-0">
          Send
        </button>
      </div>
    </div>
  );
};
texts.Layout = 'authGuard';
export default texts;
