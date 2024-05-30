let student = [];

function enterData() {
    let getName = document.getElementById("sname").value;
    student.push(getName);
    document.getElementById("cname").innerHTML = getName;
    document.getElementById("sname").value = "";
}

function array(){
    document.getElementById("cname").innerHTML = "All entered names: " + student.join(", ");
}

function Check(){
    checkname=document.getElementById("sname").value;

    for(let i=0;i<student.length;++i){
        if(checkname === student[i]){
            find = true;
            break;
        }
    }
    if (find) {
        document.getElementById("fname").innerHTML = `${checkname} is in the Array list`;
    } else {
        document.getElementById("fname").innerHTML = "Not Found";
    }
}