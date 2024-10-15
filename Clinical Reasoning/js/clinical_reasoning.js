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






  
function loadLectureList(filePath) {

  openNav()

  const nav = document.querySelector('.SSP-list-specific')

  fetch(filePath)
    .then(res=>res.text())
    .then(data=>{
      nav.innerHTML = data
    })
}
  
  function openNav() {
      document.getElementById("ssp-list-specific").style.display = "block";
      document.getElementById("text").style.display = "none";
    }
    
    function closeNav() {
      document.getElementById("ssp-list-specific").style.display = "none";
      document.getElementById("text").style.display = "block";
    }