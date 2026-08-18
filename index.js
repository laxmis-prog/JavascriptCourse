

let username;
 document.getElementById("mySubmit").onclick = function() {
   username = document.getElementById("myText").value;
   document.getElementById("myH1").textContent = `Hello ${username}`
 }


 let userEmail;
 document.getElementById("mysend").onclick = function () {
  userEmail = document.getElementById("myTextt").value;
  document.getElementById("myH2").textContent = `Hello ${userEmail}`
 }



 




