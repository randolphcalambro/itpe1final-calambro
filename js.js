alert("registration complete!");

document.getElementById("registrationform").addEventListener("register",function(event){
event.preventDefault();

window.location.href="welcome.html";
});
