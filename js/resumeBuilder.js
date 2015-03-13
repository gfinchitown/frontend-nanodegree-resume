//Header content: pic, name & role
var formattedBioPic = HTMLbioPic.replace("%data%", "images/Face1.jpg");
var formattedName = HTMLheaderName.replace("%data%", "Gary Ford");
var formattedRole = HTMLheaderRole.replace("%data%", "Front-end Web Developer");

$("#header").prepend(formattedBioPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


//Bio Object
var bio = {
	"name": "Gary Ford",
	"role": "Front-end Developer",
	"contacts": {
		"email": "gfinchitown@me.com",
		"twitter": "https://twitter.com/gfinchitown",
		"github": "https://github.com/gfinchitown",
		"location": "Long Beach, CA"
	},
	"welcomeMessage": "Thank you for visiting my online resume",
	"skills": [
		"HTML", "CSS", "JavaScript", "Graphic Production"
		],
	"bioPic": "images/Face1.jpg"
}

//Education Object
var education = {
	"schools": [
		{
			"name": "Loyola University",
			"location": "Chicago, IL",
			"major": "Introduction to Programming",
			"date": 2000
		},
		{
			"name": "George Washington University",
			"location": "Washington D.C.",
			"major": "Publishing",
			"date": 1995
		}
	],
	"online_courses": [
		{
			"title": "Front-end Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "February 2015 to Present",
			"url": "https://www.udacity.com/course/nd001"
		},
		{
			"title": "Front-end Web Developer Course",
			"school": "Treehouse",
			"dates": "November 2013 to Present",
			"url": "https://www.udacity.com/course/nd001"
		}
	]
}

//Work Object
var work = {
	"jobs": [
		{
			"employer": "Self-Employed",
			"title": "Freeelance Web Developer",
			"years": "February 2014 to Present",
			"location": "Long Beach, CA",
			"description": "Designed and coded websites for clients representing numerous industries including graphic design, photography and acting."
		},
		{
			"employer": "The Quarasan Group",
			"title": "Production Coordinator",
			"years": "September 2001 to April 2004",
			"location": "Chicago, IL",
			"description": "Coordinated digital workflow of images and traditional artwork from image aquisition to page production."
		}
	]
}

//Project Object
var projectImages = ["http://brashpuppycreative.bitballoon.com", "http://www.tiagomsferreira.com", "http://badassfelines.bitballoon.com"];
var projects = {
	"projects": [
		{
			"title": "Brash Puppy Creative",
			"date": "February 2014",
			"description": "Website for Brash Puppy Creative",
			"image": projectImages[0]
		},
		{
			"title": "Tiago Ferreira",
			"date": "October 2014",
			"description": "Website for Tiago Ferreira - Hollywood Actor",
			"image": projectImages[1]
		},
		{
			"title": "Badass Felines",
			"date": "August 2014",
			"description": "Side project website of Badass Felines",
			"image": projectImages[2]
		}
	]
}

//Skills at a glance content
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for (i = 0; i < 4; i ++) {
		var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);
		$('#skills').append(formattedSkills);
	}
}

//Work Experience content
function displayWork() {
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var jobEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var jobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var jobCity = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var jobYears = HTMLworkDates.replace("%data%", work.jobs[job].years);
	var jobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	var formattedEmployerTitle = jobEmployer + jobTitle;
	$(".work-entry:last").append(formattedEmployerTitle).append(jobCity).append(jobYears).append(jobDescription);
	}
}

displayWork();

//Projects content
projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var projectDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
		var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var projectUrl = HTMLprojectImage.replace("%data", projects.projects[project].image);

		$(".project-entry:last").append(projectTitle).append(projectDate).append(projectDescription).append(projectUrl);
	}
}

projects.display();


$("#mapDiv").append(googleMap);




