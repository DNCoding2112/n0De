const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const blogRoutes=require('./routes/blogRoutes')

//express app
const app= express();

//connect to mongodb
const dbURI='mongodb+srv://devilninja:Greatchamp92@cluster0.h84f3nd.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI)
.then((result)=>app.listen(3000))
.catch((err)=>console.log(err));

//register view engine
app.set('view engine', 'ejs');

//listen for requests
// app.listen(3000);

//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(morgan('tiny'));

//mongoose and mongo sandbox routes
/*app.get('/add-blog',(req,res)=>{
    const blog=new Blog({
        title:'new blog 2',
        snippet:'about my new blog',
        body:'more about my new blog'
    });

    blog.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    });
})*/

app.get('/all-blogs', (req,res) => {
    Blog.find()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    });
});

app.get('/single-blog', (req,res)=>{
    Blog.findById("6643321b396d559857148972")
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    });
})

//blog routes
app.use('/blogs', blogRoutes);

// app.use((req,res,next)=>{
//     console.log('new request made');
//     console.log('host: ', req.hostname);
//     console.log('path:', req.path);
//     console.log('method: ', req.method);
//     next(); 
// })

app.get('/', (req,res)=>{
    res.redirect('/blogs');
})

// const blogs=[
//     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//     {title: 'How to defeat Bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
// ];
// // res.send('<p>home page</p>');
// // res.sendFile('./views/index.html',{root:__dirname});
// res.render('index', {title: 'Home' , blogs});



// app.use((req,res,next)=>{
//     console.log('onto the next middleware');
//     next(); 
// })


app.get('/about', (req,res)=>{
    // res.send('<p>about page</p>');
    // res.sendFile('./views/about.html',{root:__dirname});
    res.render('about', {title: 'About' });    
})

//redirects
/*app.get('/about-us', (req,res)=>{
    res.redirect('./views/about.html',{root:__dirname});
})*/

//404 page(use is a (like default in switch)default method which always executes, but only if code reaches here, that is, only if no res is sent out till here.
app.use( (req,res)=>{
    // res.status(404).sendFile('./views/404.html',{root:__dirname});
    res.status(404).render('404',  {title: '404' });
})

//for direct node in ejs
//<% const name = 'mario' %>
//<p><%= name%></p> 