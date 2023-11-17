// Deklarasi Variabel
const img = document.getElementById('img');
let posx = parseInt(getComputedStyle(img).right, 10);




// Fungsi Kegiatan
function kekanan() {
    img.style.right= (posx - 10) + "px";
    posx = parseInt(getComputedStyle(img).right, 10);
}

function kekiri() {
    img.style.right= (posx + 10) + "px";
    posx = parseInt(getComputedStyle(img).right, 10);
}

function loncat() {
    img.style.top = '-250px'
    setTimeout(() => {
        img.style.top = '0px' 
      }, 900) 
}




// Code Untuk Kegiatan Gim
document.addEventListener("keydown", function(event) {
    event.preventDefault();
    const key = event.key; 
    switch (key) { 

        
        case "ArrowLeft":
        kekiri()
        break;
        
        case "ArrowRight":
        kekanan()
        break;
        
        case "ArrowUp":
        break;
      
        case "ArrowDown":
        
        break;

        case " ":
        loncat() 

        break;

        case "A":
        kekiri()
        break;
        
        case "D":
        kekanan()
        break;
        
        case "W":
        
        break;
      
        case "S":
        
        break;
    }
});