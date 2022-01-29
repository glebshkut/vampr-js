class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name) {
      return this;
    } 
    for (const off of this.offspring) {
      let temp = off.vampireWithName(name);
      if (temp) {
        return temp;
      }
    }
    
    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let count = 0; // 1

    for (const off of this.offspring) {
      count += 1 + off.totalDescendents;
    }

    return count;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {

  }

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let currentVampire = this;
    let count = 0;
    while(currentVampire.creator) {
      currentVampire = currentVampire.creator;
      count++;
    }
    return count;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    
  }

  // Returns the total number of vampires that exist
  get count() {
    
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

    let currentVampire1 = this;
    const arr1 = [this];
    let currentVampire2 = vampire;
    const arr2 = [vampire];
    while(currentVampire1.creator) {
      arr1.push(currentVampire1.creator);
      currentVampire1 = currentVampire1.creator;
    }
    while(currentVampire2.creator) {
      arr2.push(currentVampire2.creator);
      currentVampire2 = currentVampire2.creator;
    }

    for (const ans1 of arr1) {
      for (const ans2 of arr2) {
        if (ans1.name === ans2.name) {
          return ans1;
        }
      }
    }
    // create two loops for two arrays and check if the same name is found
  }
}

module.exports = Vampire;

