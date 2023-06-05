import { AudioFile } from '@mui/icons-material';
import { MenuItem, Select, SelectChangeEvent, Tooltip } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import { FaClipboard } from 'react-icons/fa';


const voice = () => {
  const EngineName: string[] = ['Open AI', 'Assembly AI', 'Eleven Labs', 'Deepgram AI'];
  const Models: { [key: string]: string[] } = {
    'Open AI': ['whisper-1'],
    'Assembly AI': ['whisper-1'],
    'Eleven Labs': ['whisper-1'],
    'Deepgram AI': ['general','meeting', 'phonecall','voicemail','finance','conversationalai','video','wisper'],
  }
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');
  const [engineSelected, setSelectEngine] = useState(EngineName[0]);
  const [model, setModel] = useState(Models[engineSelected][0])
  const [text, setText] = useState('');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('name', selectedFile.name)
      console.log(formData.append);
      console.log(selectedFile.name)
      const url = "http://localhost:2000/api/voice/whisperai"
      const body = {
        method: 'POST',
        body: formData,

      }
      const res = await fetch(url, body);
      const json = await res.text()
      setText(json);
      console.log(json)
    }

  };

  const EngineSelector = (event: SelectChangeEvent) => {
    setSelectEngine(event.target.value);
    setModel(Models[event.target.value][0])
  };

  const ModelSelector = (event: SelectChangeEvent) => {
    setModel(event.target.value);
  };

  return (
    <div className="relative">
      <div className="w-[30rem] bg-white rounded-lg text-center p-4">
        <label className="grid grid-cols-1 gap-2 text-xl">
          Upload Audio File
          <Tooltip title="Upload mp3 file to transcribe it.">
            <AudioFile sx={{ fontSize: '32px' }} className="mx-auto" />
          </Tooltip>
          <input type="file" onChange={handleFileChange} className=" px-2 hidden" />
          <span className="opacity-80">{fileName}</span>
        </label>
        <button onClick={handleUpload} className="my-4 border py-2 px-3 rounded-lg bg-dark-blue text-white font-semibold">
          Upload
        </button>

        <hr />

        <div>
          <div className="flex justify-between">
            <p className="my-4">Transcribbed Text</p>
            <Tooltip title="Copy to clipboard">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(text);
                }}
                className=""
              >
                <FaClipboard style={{ height: '16px', marginTop: 'auto', marginBottom: 'auto' }} />
              </button>
            </Tooltip>
          </div>
          <p className='text-left mt-4'>{text}</p>
        </div>
      </div>

      {/* SideBar */}
      <div className="absolute right-0 w-[30rem] bg-white rounded-lg h-[40rem] top-0 overflow-y-auto p-2">
        <h3 className="text-2xl font-bold m-2">Configuration</h3>
        <hr className="opacity-80" />

        {/* Engine Selector */}
        <div className="m-4">
          <label>
            <span className="mr-4 text-xl"> Engine </span>
            <Select labelId="chatBot-select-label" id="chatBot-select" value={engineSelected} onChange={EngineSelector} autoWidth>
              {/* Options of the selector  */}
              {EngineName.map((engine, index) => (
                <MenuItem key={index} value={engine}>
                  {engine}
                </MenuItem>
              ))}
            </Select>
          </label>
        </div>

        {/* Model Selector */}
        <div className="m-4">
          <label>
            <span className="mr-5 text-xl"> Model </span>
            <Select labelId="chatBot-select-label" id="chatBot-select" value={model} onChange={ModelSelector} autoWidth>
              {/* Options of the selector  */}
              {Models[engineSelected].map((model, index) => (
                <MenuItem key={index} value={model}>
                  {model}
                </MenuItem>
              ))}
            </Select>
          </label>
        </div>
      </div>
    </div>
  );
};
voice.Layout = 'authGuard';
export default voice;
