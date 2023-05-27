let div = document.getElementsByTagName("div")[0];
let element = document.createElement("h1");
element.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`

div.append(element);

document.body.append(div);

window.onresize = function(){
    element.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}

