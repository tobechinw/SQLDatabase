const http = require('http');
const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');


const app = express()
app.set("view engine", "pug");
app.use('/views', express.static("views"))
app.use(express.static("public"))
app.use('/image', express.static("image"))

const PORT = process.env.PORT || 3000

const routes = require('./routes/index')

app.get('/', routes.home);
app.get('/schools', routes.schools);
app.get('/students', routes.students);
app.get('/courses', routes.courses);
app.get('/clubs', routes.clubs);
app.get('/clubs/:clubID', routes.clubInfo)
app.get('/schools/:schoolID', routes.schoolStudents)
app.get('/courses/:courseCode', routes.studentsEnrolled)
app.get('/students/:studentID', routes.studentInfo)

app.listen(PORT, err => {
    if(err) console.log(err)

    else {
        console.log(`Server listening on port: ${PORT} CTRL: -C to stop`)
        console.log(`http://localhost:3000/`)
    }
})