import { Pet } from "./Pet.js";

export class Dog extends Pet {
    constructor(name, furColor) {
        super(furColor, name);

        this.sound = 'bark';
        this.eatenBones = 0;
        this.savedBones = 0;
    }

    takeBones(bonesCount) {
        if (typeof bonesCount !== 'number'
            || !isFinite(bonesCount)
            || bonesCount < 0
        ) {
            return 'Duodamu kaulu kiekis turi buti normalus skaicius.';
        }

        this.savedBones += bonesCount;

        return `${this.name} gavo ${bonesCount} kaulu ir dabar ju turi ${this.savedBones} vienetus.`;
    }

    eatBone() {
        if (this.savedBones === 0) {
            return `${this.name} negali valgyti kaulu, nes ju neturi.`;
        }

        if (this.savedBones >= 1) {
            this.eatenBones++;
            this.savedBones--;

            return `${this.name} suvalge 1 kaula.`;
        }

        const bonesLeft = this.savedBones;
        this.eatenBones += this.savedBones;
        this.savedBones = 0;

        return `${this.name} suvalge ${bonesLeft} kaulo.`;
    }

    bonesLeft() {
        if (this.savedBones === 0) {
            return `${this.name} neturi kaulu.`;
        }

        return `${this.name} turi ${this.savedBones} kaulu.`;
    }
}