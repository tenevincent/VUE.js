import Vue from 'vue'
import App from './App.vue'
import mathOperation from './maths/sum'
import { multiply, subtract, divide, addieren as add, mean, asyncAdd } from "./maths/operations";




Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app')



console.clear();
console.log("This is also a statement");


function messageFunction(name, weather) {
    let message = "Hello, Adam";
    if (weather == "sunny") {
        let message = "It is a nice day";
        console.log(message);
    } else {
        let message = "It is" + weather + "today";
        console.log(message);
    }
    console.log(message);
}

messageFunction("Adam", "raining");


let values = [10, 20, 30, 40, 50];
let total = mathOperation(values);
console.log(`the total is ${total}`);


console.log(`Sum: ${mathOperation(values)}`);
console.log(`Multiply: ${multiply(values)}`);
console.log(`Subtract: ${subtract(1000, values)}`);
console.log(`Divide: ${divide(1000, 10)}`);
console.log(`Add: ${add(10, 10)}`);
console.log(`Sum: ${mean(10, 10)}`);



total = asyncAdd(values).then(() => {
    console.log(`Main Total: ${total}`);
}).catch(() => console.log("An error has occured!"));