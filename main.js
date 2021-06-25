menu_list_array = ["Veg Margherita Pizza", "Veg Extravanga Pizza", "Chicken Tandoori Pizza", "Veg Supreme Pizza", "Paneer Tikka Pizza", "Deluxe Veggie Pizza"];

function getmenu(){
var htmldata;
htmldata "<ol class='menulist'>"
menu_list_array.sort();
for (var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+ '<div class="card">'

    +'<img src="images/pizzamg.png"/>'
    htmldata=htmldata+'<li>' + menu_list_array[i] + '<li>';
}
htmldata=htmldata+ '<li>' + menu_list_array[i] + '<li>'
document.getElementById("display_menu").innerHTML= htmldata;

function add_item(){
var htmldata;
//Complete the code
}

function add_top(){
    var item=document.getElementById("add_item").value;
}