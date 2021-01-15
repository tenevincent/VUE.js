var sharedData = {
    value: 1
};
var app1 = new Vue({
    el: '#app1',
    data: {
        shared: sharedData,
        private: {}
    },
    methods: {
        increaseA: function() {
            this.$data.shared.value++;
        },
        decreaseA: function() {
            sharedData.value--;
        }
    },
    template: `
            <div style="border:2px solid green">
            <h1>App 1 Shared Value: {{shared.value}}</h1>
            <button v-on:click="increaseA">+</button>
            <button v-on:click="decreaseA">-</button>
            </div>
            `
});
var app2 = new Vue({
    el: '#app2',
    data: {
        shared: sharedData,
        private: {}
    },
    methods: {
        increase: function() {
            this.$data.shared.value++;
        },
        decrease: function() {
            sharedData.value--;
        }
    },
    template: `
            <div  style="border:2px solid blue; margin-top:20px">
            <h1>App 2 Shared Value: {{shared.value}}</h1>
            <button v-on:click="increase">+</button>
            <button v-on:click="decrease">-</button>
            </div>
            `
});