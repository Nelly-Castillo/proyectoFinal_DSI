window.addEventListener("load", function(){
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let user = document.getElementById("user").value;
        let passw = document.getElementById("passw").value;

        let formData = new FormData();

        formData.append("nombre_usuario", user);
        formData.append("contrasena", passw);


        const xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);
            }
        };

        
        xhttp.open("POST", "../servidor/login.php");
        xhttp.send();
    });
    
});