const express = require("express");
const cors = require('cors');
const app = express();
const router = express.Router();
const ipo = require("./ipo.json");

const corsOptions = {
    origin: 'http://localhost:3006', // Allow requests from this domain
    methods: 'GET,POST,PUT,DELETE',  // Allowed HTTP methods
    allowedHeaders: 'Content-Type,Authorization' // Allowed headers
};


app.use(cors(corsOptions));
app.use(express.json()); // Built-in middleware for parsing JSON
app.use(express.urlencoded({ extended: true })); 


// Define routes after middleware
router.get('/ipo', (req, res) => {
    res.send(ipo)
});

router.get('/ipo/:id', (req, res , next) => {
    
    let ipos = ipo.ipos
    // res.send(ipo)
    let ipoDetails = ipos.find(el => el.id == req.params.id)
    if (ipoDetails) {
        res.send(ipoDetails)
    } else {
        const error = new Error();
        error.message= "Not Found"
        error.status = 404; 
        console.log(error)
        next(error)
    }
});



// Use the router in the application
app.use('/api', router);  // Connect the router to the app

router.use((err, req, res, next) => {
   
    if (err.status && err.message) {
        console.log(err)
        res.status(err.status).send(err)
    } else {
        res.status(500).send("something broke! , we are looking into it")
    }
   
})

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});
