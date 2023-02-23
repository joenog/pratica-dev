// script destaques
function entrou() {
    let destaq = document.querySelector('.destaq')
    let btnright = document.querySelector('#btnright')
    let btnleft = document.querySelector('#btnleft')

        document.querySelector('.destaq').scrollLeft += 180;
    }

    function  entrouL() {
        document.querySelector('.destaq').scrollLeft -= 180;
    }

// script dicas

function clicouDicas() {
    let dicas = document.querySelector('.dicas');
    let btn = document.querySelector('#showhide');

        if (dicas.style.display === 'none') {
            dicas.style.display = 'block';
        } else {
            dicas.style.display = 'none';
        }
    }
