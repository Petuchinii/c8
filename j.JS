var MouseEvents= "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementbyId("lienzo");
ctx=canvas.getContext("2d");
color="blue";
width_of_line=1;

canvas.addElementListener("mousedown", my_mousedown);
function my_mousedown(e) 
{
    color = document.getElementById("color").value; width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mouseDown";
}

canvas.addElementListener("mousemove", my_mosemove);
function my_mosemove (e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;
        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
}
canvas.addElementListener("mouseup" , my_mouseup);
function my_mouseup (e) {
    mouseEvent= "mouseup";
}
canvas.addElementListener("mouseleave" , my_mouseleave);
function my_mouseleave (e) {
    mouseEvent= "mouseleave";
}