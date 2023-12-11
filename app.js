const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();

const user = require("models/User")

app.use(express.json());

// for template HTMLs
app.set('view engine','ejs')

// what does this line do?
// uses described folder for static resources
app.use(express.static('./public'))

// listening to port
app.listen(PORT, () => {
    console.log('Server is listening on port:', PORT);
})

// main page, lol
app.get('/', (req, res)=>{
    res.send('Welcome')
});

// messing around in routes here
app.get('/test', (req, res)=>{
    res.send("oh hi")
});

app.post('/post', (req, res) =>{
    res.send('POSt method')
});

// parameter passing thru URL
app.get('/test/:username/:password', (req, res)=>{
    res.render("index", {name:"Owais"})
});

// testing profile creation ejs  
app.get('/profile', (req, res)=>{
    res.render("profile")
})

app.delete('/del', (req, res)=>{
    res.send('Delete method')
});

app.post("/create", async function (req, res){
    // idea is collect info from DOM 
    let this_user = await user.create({
        username: req.body.username,
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        age: req.body.age
    });
})