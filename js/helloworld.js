var person = {name:"a", age:0,occupation:"a"}

function displayPerson(){
	return person.name + ", " + person.age + ", " + person.occupation;
}

function createPerson(name, age, occupation){
	if(name.text =="" || age < 0 || occupation.text == ""){
		alert("Invalid Inputs");
	} else {
		person.name = name.text;
		person.age = age;
		person.occupation=occupation.text;
		alert(displayPerson());
	}
}

function editPerson(name, age, occupation){
	if(name != person.name && name != "")
		person.name= name;
	if(age != person.age)
		person.age = age;
	if(occupation != person.occupation && occupation != "")
		person.occupation=occupation;
	var personDetails = displayPerson();
	alert("Updated person " + personDetails);
}