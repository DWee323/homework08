/*
const box_1_on_click = (event) => {
    console.log("Box clicked!");
    console.log(event);//consolig the whole event parameter ! 
    //console보면 뭔말인지 알거야: the type of the event is "MouseEvent"
    //  console.log(event.target);
    //  event.target.innerText = "clikced";
    //  console.log(element.style);
   let element = event.target;
   console.log(element.style.backgroundColor);
   element.style.backgroundColor = "red";
   console.log(element.style.backgroundColor);
};
//event listener: varName.addEventListener(event, functionToCall)
box_1.addEventListener("click", box_1_on_click);
*/

/*
const box_1_on_click = (event) => {
    console.log("Box clicked!");
    console.log(event);
    let element = event.target;
    let box_color = element.style.backgroundColor;
    console.log(box_color);    
    c
};
//event listener: varName.addEventListener(event, functionToCall)
box_1.addEventListener("click", box_1_on_click);
*/



//Select the HTML element with the ID of box-1. Add an event listener when the user's mouse clicks on said HTML element, the box-1's background changes to red
let box_1 = document.getElementById("box-1");

const box_1_on_click = (event) => {
    let element = event.target;
    element.style.backgroundColor = "red";
};

box_1.addEventListener("click", box_1_on_click);

//Select the HTML element with the ID of box-2. Add an event listener when the user's mouse double clicks on said HTML element, the box-2's background changes from transparent (nothing) to blue. If the user double click's again, the background should change to green. If the user double click's again, the background should change back to blue. That means, the order should be transparent to blue to green to repeating between blue and green.
let box_2 = document.getElementById("box-2");

const box_2_on_double_click = (event) => {
    let element = event.target;
    if (element.style.backgroundColor === "" || element.style.backgroundColor === "green") {
        element.style.backgroundColor = "blue";
    } else {
        element.style.backgroundColor = "green";
    }
};

box_2.addEventListener("dblclick", box_2_on_double_click);

//Select the HTML element with the ID of box-3. Add one or more event listeners when the user's mouse is mouse down on said HTML element, the box-2's background changes from transparent (nothing) to orange. On mouse up it should change to pink. That means, the order should be transparent to orange to pink to repeating between orange and pink. Hint: The easy way is to add two event listeners.
//mousedown: A pointing device button is pressed on an element.
//mouseup: A pointing device button is released over an element.
let box_3 = document.getElementById("box-3");

const box_3_on_mouse_down = (event) => {
    let element = event.target;
    element.style.backgroundColor = "orange";
};

box_3.addEventListener("mousedown", box_3_on_mouse_down);

const box_3_on_mouse_up = (event) => {
    let element = event.target;
    element.style.backgroundColor = "pink";
};

box_3.addEventListener("mousedown", box_3_on_mouse_down);
box_3.addEventListener("mouseup", box_3_on_mouse_up);

//Select the HTML element with the ID of box-4, box-5, box-6. Add one or more event listeners when the user's mouse is over (enter) said HTML elements. When the mouse is over the html element, it's background color should change to cyan. When the user mouse is no longer over the HTML elements (leave), the background color should change to teal. Hint: The easy way is to add multiple event listeners.
//mouseover: A pointing device is moved onto the element that has the listener attached or onto one of its children.s
//mouseuleave: A pointing device is moved off the element that has the listener attached.
let box_4 = document.getElementById("box-4");
let box_5 = document.getElementById("box-5");
let box_6 = document.getElementById("box-6");

//they are originally transparent(no color)
const box_456_on_mouse_over = (event) => {
    let element = event.target;
    element.style.backgroundColor = "cyan";
};

box_4.addEventListener("mouseover", box_456_on_mouse_over);
box_5.addEventListener("mouseover", box_456_on_mouse_over);
box_6.addEventListener("mouseover", box_456_on_mouse_over);

const box_456_on_mouse_leave = (event) => {
    let element = event.target;
    element.style.backgroundColor = "teal";
};

box_4.addEventListener("mouseleave", box_456_on_mouse_leave);
box_5.addEventListener("mouseleave", box_456_on_mouse_leave);
box_6.addEventListener("mouseleave", box_456_on_mouse_leave);

//select the HTML element with the ID of box-7, box-8, box-9. Add one or more event listeners when the user's mouse is moving within said HTML elements (hint: move). Whenever the event listener is triggered, switch between the background colors of "fuchsia" and "gold". Note: This one will look crazy.
//mousemove: A pointing device is moved over an element. (Fired continously as the mouse moves.)
let box_7 = document.getElementById("box-7");
let box_8 = document.getElementById("box-8");
let box_9 = document.getElementById("box-9");

//they are originally transparent(no color)
const box_789_on_mouse_move = (event) => {
    let element = event.target;   
    if (element.style.backgroundColor === "" || element.style.backgroundColor === "gold") {
        element.style.backgroundColor = "fuchsia";
    } else {
        element.style.backgroundColor = "gold";
    }
    console.log(element.style.backgroundColor);
};

box_7.addEventListener("mousemove", box_789_on_mouse_move);
box_8.addEventListener("mousemove", box_789_on_mouse_move);
box_9.addEventListener("mousemove", box_789_on_mouse_move);