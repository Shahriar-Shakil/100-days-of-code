
//Use getters and setters to Control Access to an Object

/*const person={
	firstName:"",
	lastName:"",
	get fullName(){
		return `${person.firstName} ${person.lastName}`
	},
	set fullName(value){
const parts = value.split(' ');
this.firstName = parts[0];
this.lastName = parts[1];
	}
}
person.fullName = "Shahriar Shakil"
console.log(person);*/

/*
const name = "shahriar shakil";
const str = name.split(" ");
console.log(str[1])
*/
//this keyword

/*const video = {
	title: "a",
	play(){
		console.log(this)
	}
};
video.stop = function(){
	console.log(this)
}
video.stop();
*/
/*const video = {
	title: "a",
	play(){
		console.log(this)
	}
};
function Video(title){
	this.title = title;
	console.log(this)
}
const v=new Video("a");
*/

//constructor and classes

/*function person(name,address,age){
	this.name = name;
	this.address = address;
	this.age = age;
}

const rahim = new person("Rahim","Dhaka",23);

const print = `HIS NAME IS ${rahim.name} he lives in ${rahim.address}
he is ${rahim.age} years old`

document.write(print);
*/

/*import { name } from "js.js";
console.log(name);

*/
