var message = "Hello World!";

function square(num){
	return num*num;
}

function sum(num1, num2, num3){
	return num1+num2+num3;
}

var person = {
	name:"Fraser",
	age:22,
	occupation:"Software Developer"
	}

function displayPerson(){
	return person.name+", " + person.age + ", " + person.occupation;
}

function incrementAge(){
	person.age++;
	alert(displayPerson());
}

alert(displayPerson());
console.log(displayPerson());
document.write(displayPerson());

