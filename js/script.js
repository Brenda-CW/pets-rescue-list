const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

//Factory function that will create multiple pets with their properties and methods
const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzzzz...`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play.");
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} loves to play!!`);
        this.isTired += 1;
      }
    }
  };
  return pet; //!!Have to have the return or when creating objects will give error of undefined
};

//creating pet objects using the factory function
const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cloe = createPet("Cloe", "rat");
const francine = createPet("Francine", "turtle");

//console.log(sora, clover, baxter, cloe, francine);
//clover.sleep();
//baxter.play();
//console.log(clover, baxter);

clover.isTired = 8;
francine.isTired = 9;

//Putting all the pet objects into an array
const allPets = [sora, clover, baxter, cloe, francine];
console.log(allPets);

//Looping through the array to update each pet objects status and show it on the page
const showPets = function (petArray) {
  pets.innerHTML = ""; //empties any content in the html
  for (let pet of petArray) {
    //creating a new variable of status
    let status = "ready to play!";
    if (pet.isTired >= 7) {
      status = "sleeping";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span>, the ${pet.species} is ${status}`;
    //status is a new variable defined in this function so does not need the pet object to access it
    pets.append(li);
  }
};

statusButton.addEventListener("click", function () {
  showPets(allPets);
});
