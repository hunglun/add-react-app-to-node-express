const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // Choose the port you want to use for the server
const { exec } = require("child_process");

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.get('/data', (req, res) => {
  res.send({ 1: "hello" });
});

app.get('/list_files', (req, res) => {

  exec("ls -la", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    res.send(stdout);
  });

});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});