const app = Vue.createApp({
    /* template: `
    <h1>Hola Mundo</h1>
    <p>{{ false }}</p>
    ` */
    data() {
        return {
            message: 'Hola Mundo!!!',
            quote: "I'm Batman",
            author: 'Bruce Wayne'
        }
    },
    methods: {
        changeQuote(){
            console.log("Hola mundo");
            this.author = "Alba";
            this.capitalize();
        },
        capitalize(){
            this.quote = this.quote.toUpperCase();
        }
    }



})

/*
Hay dos tipos de programación (Vue3):

OPTIONS API:
- Diferentes opciones que se pueden mandar dentro del createApp
- Entre ellas se encuentran: template, methods, watch...

COMPOSITION API

*/


app.mount('#myApp'); // Montamos la aplicación en el index.html