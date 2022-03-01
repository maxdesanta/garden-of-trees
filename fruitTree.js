class Tree {
    // constructor
    constructor(treeMatrueAge,treeLimitAge,treeStopAge) {
        this._age = 0;
        this._height = 0;
        this._fruits = [];
        this._harvested = '';
        this._healthStatus = true;
        this._MatrueAge = treeMatrueAge;
        this._limitAge = treeLimitAge;
        this._stopAge = treeStopAge;
    }

    // getter
    get height() {
        return this._height;
    }

    get age() {
        return this._age;
    }

    get fruits() {
        return this._fruits;
    }

    get harvested() {
        return this._harvested;
    }

    get matureAge() {
        return this._matureAge;
    }

    get limitAge() {
        return this._limitAge;
    }

    get stopAge() {
        return this._stopAge;
    }

    // method
    grow() {
        let addHeight = 0;
        this.age++;

        if (this.age < this.limitAge) {
            addHeight = Math.round(Math.random() * 100) / 100;
            this.height += addHeight;
        }

        if (this.age > this.stopAge) {
            this.healthStatus = false;
        }

        return this;
    }

    produce() {
        if ( this.age >= this.matureAge) {
            let fruitsTotal = Math.ceil(Math.random() * 100);

            for (let i = 1; i <= fruitsTotal; i++) {
                this.fruits.push(new Fruit(Math.random()));
            }
        }
    }

    harvest() {

    }
}

// class fruit
class Fruit {
    constructor(num) {
        this.quality = setQuality(num);
    }

    setQuality(num) {
        if (num > Math.random()){
            this.quality = 'segar';
        } 
        if (num < Math.random()) {
            this.quality = 'busuk';
        }
        return this.quality;
    }
}