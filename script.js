//complete this code
class Animal {
	 private _species: string;

    constructor(species: string) {
        this._species = species;
    }

    // Getter for species
    get species(): string {
        return this._species;
    }

    // Method to make a sound
    makeSound(): void {
        console.log("Animal sound");
    }
}

class Dog extends Animal {
	constructor(){
		super("Dog");
	}
	 bark(): void {
        console.log("woof");
    }
}

class Cat extends Animal {
	constructor(){
		super("cat");
	}
	 purr(): void {
        console.log("purr");
    }
	
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
