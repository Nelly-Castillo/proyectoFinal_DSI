window.addEventListener("load", function(){
    const boton_login = document.getElementById("boton-de-login");
    boton_login.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let user = document.getElementById("user").value;
        let passw = document.getElementById("passw").value;

        let formData = new FormData();
        formData.append("user", user);
        formData.append("pass", passw);

        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            
    }
    xhttp.open("POST", "servidor/login.php");
    xhttp.send(formData);
    });
    
});