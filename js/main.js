var numImg = 1;

function alternarImg() {
    let capa = null;
    capa = document.getElementById('capa');

    if(numImg == 1) {
        capa.src = 'img/giroflex2.jpg';
        numImg = 2;
    } else {
        capa.src = 'img/giroflex1.jpg';
        numImg = 1;
    }

    console.log(numImg);    
}

function alternarAutomstico() {
    window.setInterval(()=>{
        alternarImg();
    }, 500);
}