var arr  = ["mangos", "bananas", "oranges"];


// var newFruit = arr.push("Guava");

// arr.forEach(function (item, index) {
// 	console.log(item, index, );
// });
// console.log("Item removed");
// var newFruit= arr.pop();
// arr.forEach(function (item, index) {
// 	console.log(item, index);
// });
// console.log("Item removed from front");
// arr.shift();// to remove from front
// arr.forEach(function (item, index) {
// 	console.log(item, index);
// });

// console.log("Item add from front");
// arr.unshift('strawbery');// to remove from front
// arr.forEach(function (item, index) {
// 	console.log(item, index);
// });


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
	if(this.status == 200 && this.readyState == 4){
		var myObj = JSON.parse(this.responseText);
		document.etElementById(demo).innerHTML = myObj.Name;
	}
};
xmlhttp.open("GET", "json.txt", true);
xmlhttp.send();

// arr.unshift("guava");
// arr.unshift("strawberry");
// arr.unshift("plum");
// arr.push("apricot");
// arr.forEach(function (item, index) {
// 	console.log(item, index);
// });


// console.log("Array after removing 2 items");
// var pos = arr.indexOf("strawberry");
// var n= 2;
// var itemRemove = arr.splice(pos, n);
// arr.forEach(function(item, index, array){
// 	console.log(item, index);
// });


// var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
// document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;