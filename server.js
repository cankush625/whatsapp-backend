import express from 'express';

// app config
const app = express();
const port = process.env.PORT || 9000;

// api route
app.get('/', (req, res) => res.status(200).send('hello, world'));

// listner
app.listen(port, () => console.log(`Listening on localhost: ${port}`));