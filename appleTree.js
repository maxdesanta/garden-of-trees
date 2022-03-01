'use strict'

class AppleTree {
    // constructor
    constructor(tree_name,tree_age,tree_height,treeMatrueAge,treeHealthStatus,treeLimitAge,treeStopAge) {
        this._name = tree_name;
        this._age = tree_age;
        this._height = tree_height;
        this._fruits = [];
        this.harvested = '';
        this._healthStatus = treeHealthStatus;
        this._MatrueAge = treeMatrueAge;;
        this._limitAge = treeLimitAge;
        this._stopAge = treeStopAge;
    }

    // getter
    get name() {
        return this._name;
    }

    get age() {
        return this._age; 
    }

    get height() {
        this._height;
    }

    get fruits() {
        return this._fruits;
    }

    get healthStatus() {
        return this._healthStatus;
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

    // setter
    set age(value) {
        this._age = value;
    }

    // grow
    grow() {
        this._age++;
        /*
         * buatlah sebuah kondisi jika kalau umur pohon lebih besar atau sama dengan dari limit umur limit-nya maka pohon tidak sehat
         * jika umur pohon lebih kecil dari umur pohon berhenti tumbuh, maka pohon bertambah tinggi secara random
         * tinggi pohon dibulatkan ke bulatan terbesar
        */
        if (this._age <= this._limitAge ) {
            const pertumbuhan = Math.ceil(Math.random() * this._height);
            return this._height + pertumbuhan;
        } else {
            console.log('pohon ini sudah mati');
        }
    }

    // produce some fruits
    produceFruits() {
        /* 
          * jika pohon ini sudah mencapai umur yang matang (mature) atau lebih besar dari umur matangnya, maka pohon akan berbuah 
          * buat kelas buah di luar kelas pohon
          * hasil buah akan disimpan di dalam seperti fruit
        */
    }
    
    // get some fruit
    harvest() {
        /*
         * menentukan jumlah seluruh buah
        */
    }
}

const pohonMangga = new AppleTree('pohon apel', 30, 150, true, 50, 100, 100);

console.log(pohonMangga.grow());