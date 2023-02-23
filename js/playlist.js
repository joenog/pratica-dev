// playlis html
let secPlaylist = document.querySelector('.secPlaylist');

function clicou() {
let playlist = document.querySelector('.playlisthtml');
let bnt = document.querySelector('#showhide');

    if (playlist.style.display === 'block') {
        playlist.style.display = 'none'
        secPlaylist1.style.display = 'block'
        secPlaylist2.style.display = 'block'
    } else {
        playlist.style.display = 'block'
        secPlaylist1.style.display = 'none'
        secPlaylist2.style.display = 'none'
    }
}  
    
//playlist logica dep rogramção

let secPlaylist1 = document.querySelector('.secPlaylist1');

function clicoulogica() {
let playlist_logica = document.querySelector('.playlistlogica')
let btnlogica = document.querySelector('.showlogica')

    if (playlist_logica.style.display === 'block') {
        playlist_logica.style.display = 'none'
        secPlaylist.style.display = 'block'
        secPlaylist2.style.display = 'block'
    } else {
        playlist_logica.style.display = 'block'
        secPlaylist.style.display = 'none'
        secPlaylist2.style.display = 'none'
    }
}  

//playlist javascript
let secPlaylist2 = document.querySelector('.secPlaylist2');

function clicouJscript() {
let playlistJscript = document.querySelector('.playlistJscript')
let btnJscript = document.querySelector('.showJscript')

    if (playlistJscript.style.display === 'block') {
        playlistJscript.style.display = 'none'
        secPlaylist.style.display = 'block'
        secPlaylist1.style.display = 'block'
    } else {
        playlistJscript.style.display = 'block'
        secPlaylist.style.display = 'none'
        secPlaylist1.style.display = 'none'
    }
}  