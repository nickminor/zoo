class Alligator {
    constructor(
        name = 'Albert'
        color = 'Green'
        gender = 'Male'
        weight = 100
        tailLengthInch = 15
        teethSize = 'Big',
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
    }
    eat(food) {
        console.log('Chomp Chomp')
    }
    speak(noise) {
        alert('The Alligator says, "Rawr"')
    }
}

export default Alligator;