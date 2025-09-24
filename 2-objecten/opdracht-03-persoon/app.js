// Person object
const person = {
  name: "Ugurcan",
  age: 17,
  birthDate: "200-09-21",
  gender: "Male",
  isAlive: true,
  hobbies: ["being fat","gaming","hate the outside world"],

  changeName: function(newName) {
    this.name = newName;
    displayPerson();
  },
  changeIsAlive: function(status) {
    this.isAlive = status;
    displayPerson();
  },
  addHobby: function(newHobby) {
    this.hobbies.push(newHobby);
    displayPerson();
  }
};


function displayPerson() {
  const container = document.getElementById("person");
  container.innerHTML =
    "<p><strong>Name:</strong> " + person.name + "</p>" +
    "<p><strong>Age:</strong> " + person.age + "</p>" +
    "<p><strong>Birthdate:</strong> " + person.birthDate + "</p>" +
    "<p><strong>Gender:</strong> " + person.gender + "</p>" +
    "<p><strong>Alive:</strong> " + (person.isAlive ? "Yes" : "No") + "</p>" +
    "<p><strong>Hobbies:</strong> " + person.hobbies.join(", ") + "</p>";

    console.log
}


displayPerson();
