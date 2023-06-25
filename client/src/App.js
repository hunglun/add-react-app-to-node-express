import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


const RemoteData = () => {
  const [responseContent, setResponseContent] = useState('');
  const [listedFiles, setListedFiles] = useState('');
  const [listedRemoteFiles, setListedRemoteFiles] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data');
        const data = await response.text();
        setResponseContent(data);

        const response2 = await fetch('/list_files');
        const data2 = await response2.text();
        setListedFiles(data2);

        const response3 = await fetch('/list_remote_files');
        const data3 = await response3.text();
        setListedRemoteFiles(data3);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>HTTP Response Content</h1>
      <pre>{responseContent}</pre>
      <pre>{listedFiles}</pre>
      <pre>{listedRemoteFiles}</pre>

    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <RemoteData />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
