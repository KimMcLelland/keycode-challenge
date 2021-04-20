document.addEventListener("keypress", () => {

    document.getElementById("number1").innerHTML = "";
    document.getElementById("number2").innerHTML = "";
    document.getElementById("number3").innerHTML = "";

    let number1 = document.createTextNode(event.key);
    let element1 = document.getElementById("number1");
    element1.appendChild(number1);

    let number2 = document.createTextNode(event.code);
    let element2 = document.getElementById("number2");
    element2.appendChild(number2);
    
    let number3 = document.createTextNode(event.which);
    let element3 = document.getElementById("number3");
    element3.appendChild(number3);   
})

