const nome = document.querySelectorAll(".nome")

nome.forEach(e => {
    e.textContent = localStorage.getItem("submit")

})

document.getElementById('back-button').addEventListener('click', function() {
    
    window.location.href = 'index.html'; // Redirect back to the first page
});