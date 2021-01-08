

console.clear()


var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];
var pizzaVegetableParts = ['pepper', 'onion'];
var pizzaParts = pizzaMeatParts.concat(pizzaVegetableParts);
console.log(pizzaParts)




console.log( Add(1,3) )

var addFunction = function(x, y){
    return x + y;
};
var c = addFunction(5, 10);
console.log(c)


var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];
var pizzaVegetableParts = ['pepper', 'onion'];
var pizzaParts = pizzaMeatParts.concat(pizzaVegetableParts);
console.log(pizzaParts)


var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];
var baconIndex = pizzaMeatParts.indexOf('bacon');
console.log(baconIndex)


var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];
var meatParts = pizzaMeatParts.join(";");
console.log(meatParts)





var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];
var newLength = pizzaMeatParts.push('prosciutto');
console.log(pizzaMeatParts)
console.log("-------------------------------------")



var pizzaMeatParts = ['pepperoni', 'ham', 'bacon', 'meatball', 'prosciutto'];
var mySlice = pizzaMeatParts.slice(0,3);
console.log(mySlice)
console.log("-------------------------------------")


var pizzaMeatParts = ['pepperoni', 'ham', 'bacon', 'arrivage', 'meatball', 'prosciutto'];
pizzaMeatParts.sort();
console.log(pizzaMeatParts)
console.log("-------------------------------------")


var pizzaMeatParts = ['pepperoni', 'ham', 'bacon', 'meatball', 'prosciutto'];
var mySlice = pizzaMeatParts.splice(1,0,'spam');
console.log(pizzaMeatParts)


console.clear()

var pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];
var newLength = pizzaMeatParts.unshift('prosciutto');
console.log(pizzaMeatParts)


if(isNaN(NaN)){
    console.log("The value is NaN");
}



function Add(x, y) {
    return x + y;
}
