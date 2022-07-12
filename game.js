let canva = document.getElementById('canva');
let label = document.getElementById('label1');
let labels = document.getElementsByClassName('find');

let points = [[870,135],[625,40],[485,404]];

let holst = canva.getContext('2d');
let image = new Image();
let pattern;
image.src = "room.jpg";

image.onload = function()
{
    pattern = holst.createPattern(image,"no-repeat");
}
canva.onmousedown = function(e)
{
    let x  = e.clientX;
    let y = e.clientY;
    for (let i=0; i<3; i++)
    {
        if (x<points[i][0]+40 && x>points[i][0]-40 &&
            y<points[i][1]+40 && y>points[i][1]-40)
            {

                //alert("Нашел");
                labels[i].style.color = "red";
                labels[i].style.textDecoration = "line-through";
            }
    }
}
canva.onmousemove = function(e)
{
   // console.log(e);
   let x  = e.clientX;
   let y = e.clientY;
   holst.fillStyle = "black";
   holst.fillRect(0,0,1280,800);
   holst.fillStyle = pattern;
   holst.beginPath()
   holst.moveTo(x,y);
   holst.arc(x,y,40,0,360);
   holst.closePath();
   holst.fill();
   label.innerHTML = e.clientX+":"+e.clientY;
}