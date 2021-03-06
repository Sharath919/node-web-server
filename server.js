const express = require('express');
const hbs = require('hbs');

let app = express();
const port = process.env.PORT || 3000 ;

app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');
app.use(express.static(__dirname+'/public'));
// app.get('/',(req,res)=>{
//     res.send({
//         "book_name":"harry potter",
//         cost:"45",
//         ebook:"available",
//         areas:{
//             name:'author',
//             description:"bla bal lskdjf lk"
//         }
//     })
// })
app.get('/',(req,res)=>{
    res.render('home.hbs',{
        heading:"welcome to sharaths website"
    })
})
app.get('/about',(req,res)=>{
    //res.send('<h1>about page</h1>');
    res.render('about.hbs',{
        date : new Date().getFullYear(),
        heading:"welcome"
    });
})
app.get('/projects',(req,res)=>{
    res.render('projects.hbs',{
        heading:"welcome to my portforlio"
    })
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});