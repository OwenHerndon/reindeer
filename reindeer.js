//Your task is to loop through all the reindeer in the array, 
//and add the name of the reindeer to the single HTML <div> 
//element provided. The name of the reindeer should be 
//prepended with the corresponding color from the other array.

var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");
hohohoElement.innerHTML = "<ul id='reinlist'/>"
var reinList = document.getElementById("reinlist");

//array of deer names
//write to console deer names
console.log(reindeer);

//for loop array of deer color
//match deer names to color
//write to console deer names with color
for (var i = 0; i < reindeer.length; i++) 
{
	console.log(reindeer[i]);
	//for (var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
	//hohohoElement.innerHTML += "<li>" + colors[i] + " " + reindeer[i];
	reinList.innerHTML  += "<li>" + colors[i] + " " + reindeer[i] + "</li>";
//}
}


//for (var i = 0; i < colors.length; i++) {
//	console.log(colors[i]);
//}