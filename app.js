const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();

//app.use(express.json());


app.set('view engine','ejs')

// what does this line do?
app.use(express.static('./public'))

app.listen(PORT, () => {
    console.log('Server is listening on port:', PORT);
})

app.get('/', (req, res)=>{
    res.send('Welcome')
});

app.get('/test', (req, res)=>{
    res.send("oh hi")
});

app.post('/post', (req, res) =>{
    res.send('POSt method')
});

// parameter 
app.get('/test/:username/:password', (req, res)=>{
    res.render("index", {name:"Owais"})
});

app.get('/profile', (req, res)=>{
    res.render("profile")
})

app.delete('/del', (req, res)=>{
    res.send('Delete method')
});

