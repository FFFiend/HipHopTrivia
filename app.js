const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();

//app.use(express.json());

app.listen(PORT, () => {
    console.log('Server is listening on port:', PORT);
})

app.get('/', (req, res)=>{
    res.send('Get method')
});

app.get('/test', (req, res)=>{
    res.send("oh hi")
});

app.post('/post', (req, res) =>{
    res.send('POSt method')
});

app.put('/put', (req, res)=>{
    res.send('Put method')
});

app.delete('/del', (req, res)=>{
    res.send('Delete method')
});

