function submit() {
    const name = document.getElementById('name').value;
    const film = document.getElementById('film').value;
    const tickets = document.getElementById('tickets').value;
    document.getElementById("ticket").innerHTML=`${name} booked ${tickets} ticket(s) for ${film}`;

}   