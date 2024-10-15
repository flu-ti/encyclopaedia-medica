
const nav = document.querySelector('.sidenav')
fetch('../../../lecturelist.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML = data
})

const head = document.querySelector('.header')
fetch('../header.html')
.then(res=>res.text())
.then(data=>{
    head.innerHTML = data
})



function toggleNav() {
var sidenav = document.getElementById("mySidenav");
// Toggle the display property between 'block' and 'none'
if (sidenav.style.display === "block") {
sidenav.style.display = "none";  // Close the sidenav
} else {
sidenav.style.display = "block";  // Open the sidenav
}
}

function openNav() {
    document.getElementById("mySidenav").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
  }