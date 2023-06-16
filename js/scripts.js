const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            pageTitle: 'HELLO WORLD FROM VUE!!',
            picture: {
                src: 'https://picsum.photos/900/500',
                alt: 'a random pic from Lorem Picsum'
            }
        };
    }
})

app.mount('#root');