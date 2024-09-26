import { Pet } from "./Pet.js";

export class Cat extends Pet {
    constructor(name, furColor) {
        super(furColor, name);

        this.sound = 'meow';
        this.catchedFish = 0;
    }

    catchFish(count) {
        if (count === undefined) {
            this.catchedFish++;
            return `${this.name} pagavo zuvi.`;
        }

        if (typeof count !== 'number'
            || !isFinite(count)
            || count < 0
        ) {
            return `${this.name} gali gaudyti tik normalu kieki zuvi.`;
        }

        return `${this.name} pagavo ${count} zuvis.`;
    }
}
