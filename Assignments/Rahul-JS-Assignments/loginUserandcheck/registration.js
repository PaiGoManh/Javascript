function register() {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    if(user && pass){
        localStorage.setItem("user",user);
        localStorage.setItem("pass",pass);
        alert("register succesfully");
        window.location.href ="login.html"
    } else{
        alert("not succes");
    }


}