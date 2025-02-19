



function toggleNav() {
var sidenav = document.getElementById("mySidenav");
// Toggle the display property between 'block' and 'none'
if (sidenav.style.display === "block") {
sidenav.style.display = "none";  // Close the sidenav
} else {
sidenav.style.display = "block";  // Open the sidenav
}
}

function loadLectureList(filePath) {

  const nav = document.querySelector('.sidenav')

  fetch(filePath)
    .then(res=>res.text())
    .then(data=>{
      nav.innerHTML = data
    })

    toggleNav();
}

function openNav() {
    document.getElementById("mySidenav").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
  }

  function openModal(image) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('img01');
    var captionText = document.getElementById('caption');
    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
}


function closeModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = "none";
}


