/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const handBag = {
    name: "office", 
    color: "red", 
    weight: 7, 
    type: "officeHandBag", 
    handles : {
        attached: true, 
        external: true
    }, 
    height: 10,
};

var handbagHeight = "height";

console.log(handBag);
console.log(handBag.color);
console.log(handBag.handles.attached)
console.log(handBag[handbagHeight]);