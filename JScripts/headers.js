var iconheader = '<li><img style="float: left;" src="C:\Users\Tomas Velez\Documents\GitHub\TomHasSmile.github.io\Assets\favicon.io" alt="icon"></li>'
var finalheader = ''
var headers = document.getElementById('header')
var pages = [ 
    "Home",
    "Andec",
    "Posts",
    //"AndecTestBotStatus",
]

var enabled = false
function button() {
    enabled = !enabled
    if (enabled) {
        CreateHeaders()
    } else {
        headers.innerHTML = iconheader
    }
}

function onhover(buttonname) {
    //console.log(buttonname)
    //button:: onmouseover="onhover('+String(page)+')"
}

function CreateHeaders() { // Creates the headers
    function NewButton(page,name) { // Creates a new button
        return '<li><a href="'+document.location.protocol+'//'+document.location.host+'/'+page+'">'+name+'</a></li>'
    }

    for (var i = 0; i < pages.length; i++) {
        finalheader = finalheader + NewButton(pages[i],pages[i])
    }

    headers.innerHTML = '<div class="bar" style="height:45px;"></div>'+iconheader+'<div>'+finalheader+'</div>'
    finalheader = ''
}

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile || document.documentElement.clientWidth <= 550) { // if user is mobile create custom button
    iconheader = '<li><button style="display:contents;" onclick=button()><img src="'+document.location.host+'/favicon.ico" alt="icon button"></button></li>'
    headers.innerHTML = iconheader
} else {
    CreateHeaders()
}