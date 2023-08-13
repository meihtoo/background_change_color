const generateBtn = document.getElementById("generateBtn");

generateBtn.onclick = () =>
{
    document.body.style.backgroundColor = generateColorCode();
}

const generateColorCode = () =>
{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`;
}

setInterval ( ()=>
{
    document.body.style.backgroundColor = generateColorCode();
},1000);