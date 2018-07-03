const express = require('express');
const app = express();
var ip = '127.0.0.1';

app.get('/', (req, res) => res.send('Hello World!'));

app.use(express.static('/Users/student/Desktop/hrsf99-chatterbox-server/client/'));

app.listen(8000, () => console.log('Example app listening http://127.0.0.1:8000/'));