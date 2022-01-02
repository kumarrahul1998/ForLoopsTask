// Assignment 2

var data =['rahul','mokshita','nisha','tannu','kapil'],
jsonRawData = JSON.stringify(data),
jsonData= JSON.parse(jsonRawData);

// 1. for Loop 

for(let i=0;i<jsonData.length;i++){
    console.log(jsonData[i]);
}


// 2. for in Loop

for(let i in jsonData){
    console.log(jsonData[i])
}

// 3. for of Loop 

for(let i of jsonData){
    console.log(i)
}

// 4. forEach Loop 

jsonData.forEach(i=>{
    console.log(i);
})

// My resume data in json 

var resume={ }

resume.Name="Rahul Kumar"
resume.Profile="Full Stack MERN stack Developer" 
resume.Age= 24
resume.Degree = "B.tech ECE"
resume.Experience = `Innocapture Consultancy Services Pvt Ltd
October 1, 2019 - January 1,2020
Research Intern
Draggital IT Solutions LLP
February 23 , 2021 - May 23 ,2021
MERN Developer
Reservefree Pvt Ltd (check-in)
May 27, 2021 - July 27,2021
MERN Developer
Software Developer at Applicate AI
September 1 - Present`;
resume.Education=`Delhi United Christian Senior Secondary School
2013
10th
7.8
Delhi United Christian Senior Secondary School
2015
12th
74.1%
Mahavir Swami Institute of Technology
2020
B.tech in ECE
76.8`
resume.Skills=`Html
CSS
Javascript
React js
Nodejs
MongoDB and Mongoose
Redux and redux thunk
Basic material ui , ant design
and bootstrap
Git and Github
IoT using Raspberry pi
C/C++
Python
Embedded Systems using AVR
PCB Circuit Design
AWS elastic beanstalk`
resume.Objective=`I am a MERN stack Web developer. I have worked on
several MERN projects such as admin panel for Draggital
,admin panel for ultra luxury floors and PWA app for
checkin . I have well versed knowledge of react js as I love
it. I am looking for a company which can enhance my
knowledge of MERN.`


var jsonResume = JSON.stringify(resume);
console.log(jsonResume);


// Assignment By - Rahul Kumar
// Batch - B26 weekends