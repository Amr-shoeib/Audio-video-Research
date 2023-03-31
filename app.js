const express = require('express'); // import the express package
const app = express(); // create an express app
const subtitle = require('subtitle');


const port = process.env.PORT || 3001;

app.use(express.static('public', { extensions: ['ogg'] }));
app.use(express.static('public', { extensions: ['vtt'] }));
app.use(express.static('public', { extensions: ['mp4'] }));



// Serve static files from the public directory
app.use(express.static('public'));

// this is a route handler -> listen for incoming requests and send back a response
// this is the root route -> expects to render an index page
app.get('/', (req, res) => {
    // this is pointing at index.html -> shared team page
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res) => {

  // const audioPath = '/nose.ogg';
  // const captionPath = '/toes.vtt';
  // const audioLabel = 'Head, Shoulders, knees and toes song';
  // const subtitles = subtitle.parse(req.get(captionPath));
  // res.render('audio', { audioPath, captionPath, audioLabel, subtitle });

    res.sendFile(__dirname + '/contact.html');
});


app.get('/video', (req, res) => {
  const videoPath = '/toes.mp4';
  const captionPath = '/toes.vtt';
  const videoLabel = 'Head, Shoulders, Knees and Toes';
  const subtitles = subtitle.parse(req.get(captionPath));
  // res.render('video', { videoPath, captionPath, videoLabel });
  res.sendFile(__dirname + '/video.html');
});

// set up the server to listen for incoming connections at this port 
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
