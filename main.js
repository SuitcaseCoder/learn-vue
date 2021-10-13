const { VueElement } = require("vue");

const HelloVueApp = {
    data() {
        return {
            message: 'Hello Vue!!'
        }
    }
}

VueElement.createApp(HelloVueApp).mount('#hello-vue');