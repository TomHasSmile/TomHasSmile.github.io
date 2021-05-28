if (cookieIs("drkm","true")) {
    document.getElementById("main").classList.toggle("dark-mode")
} else {
    setCookie("drkm","false")
}

function toggledarkmode()
{
    if (cookieIs("drkm","true")) {
        setCookie("drkm","false")
    } else {
        setCookie("drkm","true")
    }
    document.getElementById("main").classList.toggle("dark-mode")
}