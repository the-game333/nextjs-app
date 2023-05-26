import React, { ChangeEvent, useState } from 'react';

const ChatComp = (props: { sender: string; message: string }) => {
  return (
    <div className={`max-w-xs p-4 pt-1  text-white m-4 rounded-lg ${props.sender == 'You' ? 'bg-infra-yellow ml-auto' : 'bg-dark-blue ml-0'}`}>
      <p>{props.sender}</p>
      <p className="text-lg">{props.message}</p>
    </div>
  );
};

const messages: { sender: string; message: string }[] = [
  {
    sender: 'OpenAI',
    message:
      'Consequat pariatur laboris proident culpa aliquip exercitation sint. Consequat pariatur laboris proident culpa aliquip exercitation sint.'
  },
  {
    sender: 'You',
    message:
      'Consequat pariatur laboris proident culpa aliquip exercitation sint. Consequat pariatur laboris proident culpa aliquip exercitation sint.'
  },
  {
    sender: 'OpenAI',
    message:
      'Consequat pariatur laboris proident culpa aliquip exercitation sint. Consequat pariatur laboris proident culpa aliquip exercitation sint.'
  },
  {
    sender: 'You',
    message:
      'Consequat pariatur laboris proident culpa aliquip exercitation sint. Consequat pariatur laboris proident culpa aliquip exercitation sint.'
  }
];

const texts = () => {
    const [textBox, setTextBox] = useState("Write your prompt here")

    const handleInputChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        setTextBox(event.target.value)
    }

    const handleSendMessage = () => {
        messages.push({sender: "You", message: textBox})
        setTextBox("Write your prompt here")
    }
  return (
    <div className='min-h-screen grid grid-cols-1 content-end '>
      <div className='h-full overflow-auto mb-24'>
        {messages.map((mess, index) => (
          <ChatComp sender={mess.sender} message={mess.message} />
        ))}
      </div>

      <div className="fixed bottom-0 left-[20%] right-[10%] p-4 flex ">
      <textarea
        value={textBox}
        onChange={handleInputChange}
        placeholder="Type your message..."
        className="w-full text-lg pt-4 px-4 rounded-l-xl resize-y h-16 "
      ></textarea>
        <button
          onClick={handleSendMessage}
          className="bg-dark-blue rounded-r-xl px-4 py-2 text-white font-semibold text-lg "
        >
          Send
        </button>
      </div>
    </div>
  );
};
texts.Layout = 'authGuard';
export default texts;
