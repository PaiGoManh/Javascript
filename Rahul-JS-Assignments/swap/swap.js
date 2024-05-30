{
    function swap(){
        let a=parseInt(document.getElementById("f1").value);
        let b=parseInt(document.getElementById("f2").value);
            a = a + b;
            b = a - b;
            a = a - b;
        document.getElementById("demo").innerHTML=`after Swapping a: ${a} <br> after swaping b :${b} `;
    }
}