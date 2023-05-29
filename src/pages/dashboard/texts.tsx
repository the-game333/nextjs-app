import { InputLabel, MenuItem, Select, SelectChangeEvent, Slider, TextField } from '@mui/material';
import { toNumber } from 'lodash';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const ChatComp = (props: { sender: string; message: string; key: number }) => {
  return (
    <div className={`p-4 pt-1 rounded-lg`} key={props.key}>
      <p className="font-black opacity-70">{props.sender}</p>
      <ReactMarkdown>{props.message}</ReactMarkdown>
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
    models: ['claude-v1', 'claude-instant-v1']
  },
  {
    name: 'Cohere',
    models: ['command', 'command-light']
  }
];

const texts = () => {
  const [textBox, setTextBox] = useState('');
  const [chatBot, setChatBot] = useState(ChatBots[0].name);
  const [chatBotIndex, setChatBotIndex] = useState(0);
  const [menuBtnActive, setMenuBtnActive] = useState(false);
  const [temperature, setTemperature] = useState(0.7);
  const [tokens, setTokens] = useState(1000);
  const [messages, setMessages] = useState<{ sender: string; message: string }[]>([]);
  const [currentModel, setCurrentModel] = useState(ChatBots[0].models[0]);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextBox(event.target.value);
  };

  const chatBotSelector = (event: SelectChangeEvent) => {
    const index = ChatBots.findIndex((item) => item.name === event.target.value);
    setChatBotIndex(index);
    setChatBot(ChatBots[index].name);
    setCurrentModel(ChatBots[index].models[0]);
    console.log(event.target.value);
  };

  const chatModelSelector = (event: SelectChangeEvent) => {
    setCurrentModel(event.target.value);
  };

  const handleMenuButton = () => {
    setMenuBtnActive(!menuBtnActive);
  };

  function TempSlider(value: number) {
    setTemperature(value);
    return `${value}`;
  }

  function TokenSlider(value:number){
    setTokens(value);
    return `${value}`
  }

  const handleSendMessage = async () => {
    const newMessage = { sender: 'You', message: textBox };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    const data = {
      prompt: textBox,
      model: currentModel,
      temperature: temperature,
      max_tokens: tokens
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
    <div className="flex h-[80%] flex-col lg:flex-row">
      
      <div className=' flex-1 m-4 h-full  relative'>
        <div className="flex flex-col h-[38rem] overflow-y-auto bg-white p-2 rounded-xl ">
          {messages.map((mess, index) => (
            <ChatComp sender={mess.sender} message={mess.message} key={index} />
            ))}
            </div>

        <div className="flex mt-2 z-[9999]">
          <TextField
            id="standard-multiline-flexible"
            multiline
            maxRows={4}
            variant="standard"
            value={textBox}
            placeholder="Write your prompt here"
            onChange={handleInputChange}
            className="w-full bg-white p-2 rounded-l-xl"
          />
          <button
            onClick={handleSendMessage}
            className="bg-dark-blue px-4 py-2 text-white font-semibold text-lg rounded-none lg:rounded-r-xl"
            disabled={textBox == '' ? true : false}
          >
            Send
          </button>

      <button onClick={handleMenuButton} className={`w-12 bg-dark-blue text-white rounded-r-xl block lg:hidden`}><MenuIcon /></button>
        </div>
      </div>

      {/* Chat Bot Selector */}
      <div className={`w-48 mx-0 my-4 lg:mx-4 bg-white rounded-xl p-4 fixed right-0 lg:static ${menuBtnActive ? 'block' : 'hidden lg:block'}`}>
        {/* Bot Selector */}
        <div className="mt-4">
          <InputLabel id="chatBot-select-label" className="">
            Chat Engine
          </InputLabel>
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
        <div className="mt-4">
          <InputLabel id="chatBot-model-label" className="">
            Engine Model
          </InputLabel>
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

        {/* Advanced Menu */}

        {/* Temperature Slider */}
        <div className="w-32 lg:w-full mt-0 lg:mt-4">
          <p className="">Temperature</p>
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
        <div className="w-32 lg:w-full mt-0 lg:mt-4">
          <p className="">Max Length</p>
          <Slider
            aria-label="Length"
            defaultValue={1000}
            getAriaValueText={TokenSlider}
            valueLabelDisplay="auto"
            marks
            min={100}
            max={4000}
          />
        </div>
      </div>
    </div>
  );
};
texts.Layout = 'authGuard';
export default texts;
