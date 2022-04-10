

const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('data/schools.db')


exports.home = function(request, response){

    response.render("home")
}

exports.schools = function(request, response){

    db.all("SELECT * from schools", function(err, rows) {

        response.render("schools", {rows})
    })

}

exports.students = function(request, response){

    db.all("SELECT * from students", function(err, rows) {

        response.render("students", {rows})
    })

}


exports.courses = function(request, response){

    db.all("SELECT * from courses", function(err, rows) {

        response.render("courses", {rows})
    })


}

exports.clubs = function(request, response){

    db.all("SELECT * from clubs", function(err, rows) {

        response.render("clubs", {rows})
    })

}


exports.schoolStudents = function (request, response) {

    db.all("SELECT * from schools join students on students.school_id = ? and schools.school_id = ?", request.params.schoolID, request.params.schoolID, function (err, rows) {

        response.render("schoolStudents", {rows})
    })

}


exports.studentsEnrolled = async function(request, response){

    db.all("SELECT * from students join grades on students.student_number = grades.student_id where course_code = ?", request.params.courseCode, function(err, rows) {

        response.render("studentsEnrolled", {rows})
    })

}



exports.studentInfo = function(request, response){

    db.all("SELECT * from students join schools on students.school_id = schools.school_id where student_number = ?", request.params.studentID, function(err, rows) {

        response.render("studentInfo", {rows})
    })

}



exports.clubInfo = function(request, response){

    db.all("select * from clubs join participates_in pi on clubs.club_id = pi.club_id join students on student_id = students.student_number where clubs.club_id = ?", request.params.clubID, request.params.schoolID, function(err, rows) {

        response.render("clubInfo", {rows})
    })

}



