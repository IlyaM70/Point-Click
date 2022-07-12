let canva = document.getElementById("canva");
let holst = canva.getContext("2d");
//holst.fillStyle = "red";
//holst.fillStyle = "#FFAA20";
// holst.fillStyle = "rgb(255,0,255)";
// holst.strokeStyle = "blue";

//holst.fillRect(100,100,100,100);
//holst.strokeRect(200,200,100,100);

// holst.beginPath();
// holst.moveTo(200,200);
// holst.lineTo(100,100);
// holst.lineTo(100,300);
// holst.lineTo(200,200);
// //holst.stroke();
// holst.moveTo(400,400);
// holst.arc(400,400,50,60,30,false);
// holst.fill();
// holst.closePath();

// let image = new Image(200,200);
// image.onload =  function()
// {
//     holst.drawImage(image,200,200,200,100);
    
// }
// image.src = "1.jpg";

let image = new Image();
image.onload =  function()
{
    let pattern = holst.createPattern(image,'repeat');
    holst.fillStyle = pattern;
    holst.fillRect(20,20,500,500);
    
}
image.src = "1.jpg";