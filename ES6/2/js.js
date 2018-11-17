
		/*const a = {
  start: { x: 5, y: 6},
  end: { x: 6, y: -9 }
};
const { start : { x: m, y: n}} = a;
console.log(m,n); // 5, 6*/

//Use Destructuring Assignment to Assign Variables from Nested Objects

/*const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const {tomorrow:{max: maxOfTomorrow}}=forecast // change this line
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
*/
/*const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
 const [a, b, ...arr] = list; 
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];*/

/*const profileData = {
	name:"Shahriar",
	age: 23,
	nationality:"Bangladeshi",
	location: "Dhaka"
}
 const profileUpdate =function(profileData){
 	const {name,age,nationality,location}= profileData;
  return "my name is "+name;
 }
  const profileUpdate =({name,age,nationality,location})=>"my name is "+name;
 	
 	/*const {name,age,nationality,location}= profileData
 
  const proUp = profileUpdate(profileData); //my name is shahriar
  console.log(proUp);
*/

/*const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return function half({max,min}) {
    // use function argument destructuring
    return (stats.max + stats.min) / 2.0;
  };
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015*/

/*const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
    
  
};
document.write(person.sayHello());*/

//ES6: Use class Syntax to Define a Constructor Function

/*function makeClass() {
  "use strict";
  
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'*/

//import export

 //export const name = "shakil"; //export variable

//export { capitalizeString } // export function

/* function add(x,y){
  return x+y;
}
console.log(add(4,5))*/
