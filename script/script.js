

var projectLinks = document.querySelectorAll("#portfolio div div a");

var projects = document.querySelectorAll("#projects div")

for (let project of projects){
    project.className = "invisible";
};

function giveAlert(event){
    event.preventDefault();
    alert("Sorry, this project is not ready yet.")
};

for (let link of projectLinks){
    link.addEventListener("click",function(){


        for (let project of projects){
            project.className = "invisible";
        };

        let projectID = link.getAttribute("href");


        document.querySelector(projectID).className = "visible";
        document.querySelector("#projects").style.backgroundColor = "#41766f";

    });
}

