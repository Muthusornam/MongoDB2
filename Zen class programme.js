use zen

//User
db.createCollection('user');
db.user.insert([{
    "id": "1",
    "firstname": "Babykala",
    "lastname": "Muthu",
    "date_of_birth": "18-jul-2000",
    "address": "chennai",
    "email_id": "babykala@gmail.com",
    "phone_no": "9876543210",
    "qualification": "M.E",
    "working_status": "no",
    "course_name": "full stack",
    "mentor": "mentor 1",
    "placed_status": "yes"
},

{
    "id": "2",
    "firstname": "Vinosh",
    "lastname": "Mani",
    "date_of_birth": "08-dec-1990",
    "address": "chennai",
    "email_id": "vinsoh@gmail.com",
    "phone_no": "9334543210",
    "qualification": "M.Tech",
    "working_status": "yes",
    "course_name": "Data science",
    "mentor": "mentor 2",
    "placed_status": "yes"
},

{
    "id": "3",
    "firstname": "Divya",
    "lastname": "Sivakumar",
    "date_of_birth": "03-dec-1992",
    "address": "bangalore",
    "email_id": "divy@gmail.com",
    "phone_no": "9600554488",
    "qualification": "B.E",
    "working_status": "yes",
    "course_name": "full stack",
    "mentor": "mentor 3",
    "placed_status": "yes"
},

{
    "id": "4",
    "firstname": "Mani",
    "lastname": "Muthu",
    "date_of_birth": "10-jun-1993",
    "address": "bangalore",
    "email_id": "mani@gmail.com",
    "phone_no": "9600359944",
    "qualification": "M.E",
    "working_status": "yes",
    "course_name": "cloud computing",
    "mentor": "mentor 4",
    "placed_status": "no"
},

{
    "id": "5",
    "firstname": "Devi",
    "lastname": "Kumar",
    "date_of_birth": "03-jan-1994",
    "address": "coimbatore",
    "email_id": "devi@gmail.com",
    "phone_no": "9600554466",
    "qualification": "B.Sc",
    "working_status": "no",
    "course_name": "full stack",
    "mentor": "mentor 1",
    "placed_status": "yes"
}]);


//Codekata
db.createCollection('codekata');
db.codekata.insert([{
    "user_id": "1",
    "level": "absolute beginner",
    "total_no_of_problems": 30,
    "no_of_problems_solved": 30
},
{
    "user_id": "1",
    "level": "Array",
    "total_no_of_problems": 300,
    "no_of_problems_solved": 150
},
{
    "user_id": "2",
    "level": "Array",
    "total_no_of_problems": 300,
    "no_of_problems_solved": 180
},
{
    "user_id": "3",
    "level": "String",
    "total_no_of_problems": 200,
    "no_of_problems_solved": 80
},
{
    "user_id": "4",
    "level": "String",
    "total_no_of_problems": 200,
    "no_of_problems_solved": 170
},
{
    "user_id": "5",
    "level": "Array",
    "total_no_of_problems": 300,
    "no_of_problems_solved": 270
},
{
    "user_id": "1",
    "level": "String",
    "total_no_of_problems": 200,
    "no_of_problems_solved": 170
}]
);

//Attendance
db.createCollection('attendance');
db.attendance.insert([{
    "user_id": "1",
    "topic_id": "1",
    "status": "present",
    "date": "2020-10-16"
},
{
    "user_id": "2",
    "topic_id": "2",
    "status": "present",
    "date": "2020-12-03"
},
{
    "user_id": "3",
    "topic_id": "1",
    "status": "absent",
    "date": "2020-10-18"
},
{
    "user_id": "4",
    "topic_id": "1",
    "status": "present",
    "date": "2020-11-18"
},
{
    "user_id": "2",
    "topic_id": "1",
    "status": "absent",
    "date": "2020-11-24"
},
{
    "user_id": "5",
    "topic_id": "2",
    "status": "present",
    "date": "2020-10-28"
}]);


//Topics
db.createCollection('topics');
db.topics.insert([{
    "topic_id": "1",
    "topic_name": "Javascript",
    "topics_taken": "Sivaranjini",
    "month": "november"
},
{
    "topic_id": "2",
    "topic_name": "HTML",
    "topics_taken": "Kumar",
    "month": "october"
},
{
    "topic_id": "3",
    "topic_name": "CSS",
    "topics_taken": "Deepika",
    "month": "january"
},
{
    "topic_id": "4",
    "topic_name": "Reactjs",
    "topics_taken": "Sivaranjini",
    "month": "february"
},
{
    "topic_id": "5",
    "topic_name": "MySQL",
    "topics_taken": "Gopinath",
    "month": "march"
},
{
    "topic_id": "6",
    "topic_name": "MongoDB",
    "topics_taken": "Sivaranjini",
    "month": "april"
}]
);

//Tasks
db.createCollection('tasks');
db.tasks.insert([{
    "user_id": "1",
    "task_id": "1",
    "topic_id": "1",
    "task_name": "functions and array in js",
    "date": "2020-11-05",
    "submitted_status": "yes"
},
{
    "user_id": "2",
    "task_id": "1",
    "topic_id": "1",
    "task_name": "functions and array in js",
    "date": "2020-11-15",
    "submitted_status": "yes"
},
{
    "user_id": "2",
    "task_id": "2",
    "topic_id": "2",
    "task_name": "html design page",
    "date": "2020-10-18",
    "submitted_status": "yes"
},
{
    "user_id": "3",
    "task_id": "2",
    "topic_id": "2",
    "task_name": "html design page",
    "date": "2020-10-25",
    "submitted_status": "no"
},
{
    "user_id": "5",
    "task_id": "3",
    "topic_id": "3",
    "task_name": "Design page using html and css",
    "date": "2020-12-15",
    "submitted_status": "yes"
},
{
    "user_id": "4",
    "task_id": "2",
    "topic_id": "2",
    "task_name": "html design page",
    "date": "2020-10-18",
    "submitted_status": "no"
},
{
    "user_id": "2",
    "task_id": "4",
    "topic_id": "4",
    "task_name": "crud application using formik reactjs",
    "date": "2020-12-28",
    "submitted_status": "yes"
}]
);

//company_drives
db.createCollection('company_drives');
db.company_drives.insert([{
    "company_id": "1",
    "company_name": "tcs",
    "date": "2020-11-15",
    "eligibility_criteria": "80%",
    "no_of_students_appeared": "25",
    "no_of_students_placed": "22",
},
{
    "company_id": "2",
    "company_name": "amazon",
    "date": "2020-10-18",
    "no_of_students_appeared": "32",
    "no_of_students_placed": "28",
},
{
    "company_id": "3",
    "company_name": "freshworks",
    "date": "2020-10-28",
    "no_of_students_appeared": "25",
    "no_of_students_placed": "23",
},
{
    "company_id": "4",
    "company_name": "codingmart",
    "date": "2020-11-29",
    "no_of_students_appeared": "35",
    "no_of_students_placed": "30",
},
{
    "company_id": "5",
    "company_name": "flipkart",
    "date": "2020-12-19",
    "no_of_students_appeared": "22",
    "no_of_students_placed": "21",
}]
);

//Mentors
db.createCollection('mentors');
db.mentors.insert([{
    "mentor_id": "1",
    "mentor_name": "mentor 1",
    "topics_taken": "Javascript,HTML&CSS",
    "no_of_mentees": "30"
},
{
    "mentor_id": "2",
    "mentor_name": "mentor 2",
    "topics_taken": "Python,Database",
    "no_of_mentees": "35"
},
{
    "mentor_id": "3",
    "mentor_name": "mentor 3",
    "topics_taken": "ReactJS",
    "no_of_mentees": "30"
},
{
    "mentor_id": "4",
    "mentor_name": "mentor 4",
    "topics_taken": "Node JS",
    "no_of_mentees": "32"
},
{
    "mentor_id": "5",
    "mentor_name": "mentor 5",
    "topics_taken": "AWS",
    "no_of_mentees": "28"
},
{
    "mentor_id": "6",
    "mentor_name": "mentor 6",
    "topics_taken": "AWS",
    "no_of_mentees": "28"
},
{
    "mentor_id": "7",
    "mentor_name": "mentor 7",
    "topics_taken": "AWS",
    "no_of_mentees": "28"
},
{
    "mentor_id": "8",
    "mentor_name": "mentor 8",
    "topics_taken": "AWS",
    "no_of_mentees": "28"
},
{
    "mentor_id": "9",
    "mentor_name": "mentor 9",
    "topics_taken": "AWS",
    "no_of_mentees": "28"
},
{
    "mentor_id": "10",
    "mentor_name": "mentor 10",
    "topics_taken": "AWS",
    "no_of_mentees": "28"
}]);


//All the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.company_drives.find({$and:[{date:{$gte:('2020-10-15')}},{date:{$lte:('2020-10-31')}}]});

//All the company drives and students who are appeared for the placement
db.company_drives.find();

// number of problems solved by the user in codekata
db.codekata.aggregate(
    [{$group:{
    _id:'$user_id',
    NoOfProblemsSolved:{$sum:"$no_of_problems_solved"}}},
    ])

//all the mentors with who has the mentee's count more than 15
db.mentors.find({no_of_mentees:{$gt:'15'}});

//number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.attendance.find({$and:[{date:{$gte:('2020-10-15')}},{date:{$lte:('2020-10-31')}}]});
