const header = document.querySelector('.header')
fetch('../../../../Templates/html-templates/header.html')
.then(res=>res.text())
.then(data=>{
    header.innerHTML = data
})