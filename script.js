

const showInput = () => {
    const template = document.getElementsByTagName("template")[0];
    const inputDiv = template.content.getElementById("input");
    document.body.appendChild(inputDiv.cloneNode(true));
    document.getElementById("botton").addEventListener('click', showGame);
}
const showGame = () => {
    if (document.getElementById("input")) {
        document.getElementById("input").remove();
    }
    const template = document.getElementsByTagName("template")[0];
    const playDiv = template.content.getElementById("play");
    document.body.appendChild(playDiv.cloneNode(true));
}
const conty = () => {
    let counter = localStorage.getItem("counter");
    if(counter === undefined){
        counter = 0;
    }
    else{
        counter = JSON.parse(counter);
    }
    counter++;
    localStorage.setItem("counter",JSON.stringify(counter));
    console.log(counter);
    document.getElementById("result").textContent = counter;
}
document.addEventListener('DOMContentLoaded', showInput);
