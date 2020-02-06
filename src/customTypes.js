/**
 * student features ==>
 * @typedef {Object} Student
 * @property {number} id - student ID
 * @property {string} name - student name
 * @property {string } lastName - student last name
 * @property {number}  age - student age
 * @property {Array} hobbies - student hobbies
 * @property {string| number} [nationality] - student nationality (optional)
 * @property {boolean} isSmart - is the student smart ?
 */

/**
 * @type {Student}
 */
const studentX = {
  id: 12,
  name: "Jon",
  lastName: "Steve",
  age: 25,
  hobbies: ["foot", "swimming"],
  isSmart: true
};

/**
 *  == class to create a person object ==
 *
 */

class Person {
  /**
   * @param {Object} personInfo --information about the person
   */
  constructor(personInfo) {
    /**
     * @property {string} name -- name of the person
     * @property{ number } age -- age of the person
     */
    this.name = personInfo.name;
    this.age = personInfo.age;
  }

  /**
   * @property {function} greeting - greeting function
   * @returns  {string}
   */
  greeting() {
    return " hello guys";
  }
}

/**
 *  == person 1 ==
 * See {@link Person}
 */
const person1 = new Person({ name: "steve", age: 23 });
