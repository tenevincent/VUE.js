var app = new Vue({
    el: '#app',
    data: {
        propertyName: 'Hello from Getting to Know Vue.js!',
        emptyObject: {},
        emptyString: "",
        nullProperty: null,
        someHTML: '<h1 style="color:#41b883; background-color:#35495e;"> Getting to Know Vue.js < /h1>'
    },
    methods: {
        userClickedAButton: function() {
            // Do Something Cool and Meaningful here!!!
            console.log('Something Cool!');
        }
    },
    computed: {
        capitalizedText: function() {
            return this.text.toUpperCase();
        }
    }


});