const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const server = express();
const TeacherRoutes = require("./Routes/TeacherRoutes")
const ChildrenRoutes = require("./Routes/ChildRoutes")
const ClassRoutes = require("./Routes/ClassRoutes")



//will enable all requests
server.use(cors())

server.listen(8080, () => {
    console.log("listening ......");
});
server.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// --------------- Body Parser 
server.use(express.json());
// ---------------  

// --------------- Routes 
server.use(TeacherRoutes)
server.use(ChildrenRoutes)
server.use(ClassRoutes)
// ---------------

// not found layer --> in case user enterd wrong url
server.use((req, res) => {

    res.status(404).json("Page Not Found");
})

// error mw  --> act like catch 
server.use((error, req, res, next) => {
    res.status(error.status || 500).json({ Error: "" + error })
})


//---------------------------------------------------------------------
// old layers
// logging mw
// server.use((req, res, next) => {

//     console.log("Successfully Entered");
//     // res.status(200).json({ "success": "Successfully Entered" })

//     next();
// })

// auth layer
// server.use((req, res, next) => {
//     if (req.url == '/home') {
//         //   res.status(200).json({ "success": "In Home Page" })

//     } else {
//         next();
//         // next(new Error('Something went wrong'))

//     }

// });