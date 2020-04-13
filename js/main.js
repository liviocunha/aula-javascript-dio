//var name = "Lívio Cunha";
//var age = 29;
//var age2 = 10;
//var phrase = "Japan is the best in soccer team."
//alert(name + " is " + age + " age.");
//alert(age + age2);
//console.log(name);
//console.log(age + age2);
//console.log(phrase.replace("Japan", "Brazil"));
//console.log(phrase.toUpperCase());
//console.log(phrase.toLowerCase());
//alert(phrase.replace("Japan", "Brazil"));

//var list = ["apple", "pear", "orange"]
//list.push("grape")
//list.pop();
//console.log(list.length);
//console.log(list);
//console.log(list.reverse());
//console.log(list.toString());
//console.log(list.toString()[0]);
//console.log(list.join(" - "));
//console.log(list[1]);

//var fruit = {name:"apple", color:"red"};
//console.log(fruit);
//console.log(fruit.name);
//console.log(fruit.color);

/*
var fruits = [{name:"apple", color:"red"}, {name:"grape", color:"purple"}];
//console.log(fruits);
//console.log(fruits[1].name);
console.log(fruits.color);
*/
/*
var age = prompt("How old are you?");
//var age = 18;
if (age >= 18){
	alert("To be of age.");
}else{
	alert("To be under age.");
};
*/

/*
var count = 0;
while (count < 5){
	console.log(count);
	alert(count);
	count++;
};
*/
/*
var count;
for (count=1; count <=5; count++){
	alert(count);
};
*/
/*
var d = new Date();
//alert(d);
//alert(d.getMonth()+1);
//alert(d.getDate());
//alert(d.getMinutes());
//alert(d.getHours());
*/

/*
function soma(n1, n2) {
	return n1 + n2;
}

alert(soma(5,10));
*/
/*
function setReplace(phrase, name, new_name){
	return phrase.replace(name, new_name);
}

alert(setReplace("Go Japan", "Japan", "Brazil"))
*/
/*
function validateAge(age){
	var validate;
	if (age >= 18){
		return true;
	}else{
		return false;
	};
};

var age = prompt("How old are you?");
console.log(validateAge(age));
*/

/*
function clicked(argument) {
	alert("Thank you for click.");
}
*/

function clicked() {
	document.getElementById("thank").innerHTML = "<b>Thank you for click.</b>";
	//console.log(document.getElementById("thank"));
}

function redirect() {
	//window.open("http://google.com");
	window.location.href = "http://google.com";
}

function change(element) {
	//document.getElementById("mousemove").innerHTML = "Thank you for mouse move.";
	element.innerHTML = "Thank you for mouse move.";
}

function back(element) {
	//document.getElementById("mousemove").innerHTML = "Mouse over here.";
	element.innerHTML = "Mouse over here.";
}

function load() {
	alert("Welcome to My Page.")
}

function functionChange(element) {
	console.log(element.value)
}