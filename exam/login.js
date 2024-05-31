function login() {
    const user = document.getElementById('user1').value;
    const pass = document.getElementById('pass1').value;

    const storeduser = localStorage.getItem('user');
    const storedpass = localStorage.getItem('pass');

        if(user==storeduser && pass==storedpass){
            alert("User is already registered");
        }else{
            alert("Please enter valid username and password");
        }

}