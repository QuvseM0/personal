
document.getElementById("go").addEventListener("click", e => {
    let submit = document.getElementById("nome").value
    localStorage.setItem("submit", submit)
    window.location.href  = "jafotes.html"
    
})