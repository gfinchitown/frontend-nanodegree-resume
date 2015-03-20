//Bio Object
var bio = {
	"name": "Gary Ford",
	"role": "Front-end Developer",
	"bioPic": "images/Face1.jpg",
	"contacts": {
		"cellNumber": "562-508-1436",
		"email": "gfinchitown@me.com",
		"twitter": "@gfinchitown",
		"github": "gfinchitown",
		"location": "Long Beach, CA"
		},
	"skills": ["HTML", "CSS", "JavaScript", "Graphic Production", "Adobe Creative Suite (CC)", "Sublime Text", "Coda 2", "Emmet", "Twitter Bootstrap", "Wordpress (basics)", "Chrome Developer Tools", "MAMP", "Git", "Github", "Microsoft Word & Excel", "Quickbooks", "Sage Business Works"],
	"welcomeMessage": "Thank you for visiting my online resume"
}


//Work Object
var work = {
	"jobs": [
		{
			"employer": "Self-Employed",
			"title": "Freeelance Web Developer",
			"years": "February 2014 to Present",
			"location": "Long Beach, CA",
			"description": "Designed and coded websites for clients representing numerous industries including graphic design, photography and acting.",
			"url": "index.html"
		},
		{
			"employer": "Lather Chicago",
			"title": "Stylist",
			"years": "July 2011 to January 2012",
			"location": "Chicago, IL",
			"description": "Men's and womens haircuts and haircoloring.",
			"url": "http://latherchicago.net/"
		},
		{
			"employer": "The Quarasan Group",
			"title": "Production Coordinator",
			"years": "September 2001 to April 2004",
			"location": "Chicago, IL",
			"description": "Coordinated digital workflow of images and traditional artwork from image aquisition to page production.",
			"url": "http://quaracore.com/"
		}
	]
}


//Project Object
var projectImages = ["images/brashPuppy.jpg", "images/tiago.jpg", "images/felines.jpg"];
var projects = {
	"projects": [
		{
			"title": "Brash Puppy Creative",
			"date": "February 2014",
			"description": "Website for Brash Puppy Creative",
			"image": projectImages[0],
			"url": "http://brashpuppycreative.bitballoon.com"
		},
		{
			"title": "Tiago Ferreira",
			"date": "October 2014",
			"description": "Website for Tiago Ferreira - Hollywood Actor",
			"image": projectImages[1],
			"url": "http://www.tiagomsferreira.com"
		},
		{
			"title": "Badass Felines",
			"date": "August 2014",
			"description": "Side project website of Badass Felines",
			"image": projectImages[2],
			"url": "http://badassfelines.bitballoon.com"
		}
	]
}


//Education Object
var education = {
	"schools": [
		{
			"name": "Truman College",
			"location": "Chicago, IL",
			"major": "Bookkeeping & Quickbooks Certification",
			"date": 2010,
			"url": "https://www.ccc.edu/colleges/truman/pages/default.aspx"
		},
		{
			"name": "George Washington University",
			"location": "Washington D.C.",
			"major": "Graphic Communications & Publishing",
			"date": 1995,
			"url": "http://www.gwu.edu/"
		}
	],
	"online_courses": [
		{
			"title": "Front-end Web Developer Nanodegree",
			"school": "Udacity",
			"date": "February 2015 to Present",
			"url": "https://www.udacity.com/course/nd001"
		},
		{
			"title": "Front-end Web Developer Track",
			"school": "Treehouse",
			"date": "November 2013 to Present",
			"url": "http://teamtreehouse.com/"
		},
		{
			"title": "HTML, CSS, JavaScript & jQuery",
			"school": "Codecademy",
			"date": "November 2013 to August 2014",
			"url": "http://www.codecademy.com/"
		}
	]
}


//Header, Bio & Footer content
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedCell = HTMLmobile. replace("%data%", bio.contacts.cellNumber);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#header").append(formattedBioPic).prepend(formattedRole).prepend(formattedName);
	$("#topContacts").append(formattedCell).append(formattedEmail).append(formattedTwitter).append(formattedGithub).append(formattedLocation);

	$("#footerContacts").append(formattedCell).append(formattedEmail).append(formattedTwitter).append(formattedGithub);

	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMessage);

	//Skills at a glance content
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (var i = 0; i < bio.skills.length; i++) {
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").prepend(formattedSkills);
		}
	}
}
bio.display();


//Work Experience content
work.display = function() {
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);


	var jobEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var jobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var jobCity = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var jobYears = HTMLworkDates.replace("%data%", work.jobs[job].years);
	var jobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	var formattedEmployerTitle = jobEmployer + jobTitle;

	$(".work-entry:last").append(formattedEmployerTitle).append(jobCity).append(jobYears).append(jobDescription);
	$(".work-entry:last a").attr("href", work.jobs[job].url);
	}
}
work.display();


//Projects content
projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var projectDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
		var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var projectUrl = HTMLprojectImage.replace("%data%", projects.projects[project].image);

		$(".project-entry:last").append(projectTitle).append(projectDate).append(projectDescription).append(projectUrl);
		$(".project-entry:last a").attr("href", projects.projects[project].url);

	}
}
projects.display();


//Education content
education.display = function() {
	for(schools in education.schools) {
		$("#education").append(HTMLschoolStart);

		var schoolName = HTMLschoolName.replace("%data%", education.schools[schools].name);
		var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
		var schoolDates = HTMLschoolDates.replace("%data%", education.schools[schools].date);
		var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[schools].major);

		$(".education-entry:last").append(schoolName).append(schoolLocation).append(schoolDates).append(schoolMajor);
		$(".education-entry:last a").attr("href", education.schools[schools].url);
	}

	$("#education").append(HTMLonlineClasses);

	for(courses in education.online_courses) {
		$("#education").append(HTMLschoolStart);

		var courseTitle = HTMLonlineTitle.replace("%data%", education.online_courses[courses].title);
		var onlineSchool = HTMLonlineSchool.replace("%data%", education.online_courses[courses].school);
		var courseDate = HTMLonlineDates.replace("%data%", education.online_courses[courses].date);
		var courseUrl = HTMLonlineURL.replace("%data%", education.online_courses[courses].url);
		var formattedTitleSchool = courseTitle + onlineSchool;

		$(".education-entry:last").append(formattedTitleSchool).append(courseDate).append(courseUrl);
		$(".education-entry:last a").attr("href", education.online_courses[courses].url);
	}
}
education.display();


$("#mapDiv").append(googleMap);




