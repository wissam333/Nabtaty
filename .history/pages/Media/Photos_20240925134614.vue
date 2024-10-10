<template>
    <lightgallery
        :onBeforeSlide="onBeforeSlide"
    >
        <a href="img/img1.jpg">
            <img alt="img1" src="img/thumb1.jpg" />
        </a>
        <a href="img/img2.jpg">
            <img alt="img2" src="img/thumb2.jpg" />
        </a>
        ...
    </lightgallery>
</template>
@Options({
    components: {
        Lightgallery,
    },
    methods: {
        onBeforeSlide: (detail) => {
            const { index, prevIndex } = detail;
            console.log(index, prevIndex);
        },
    },
})
export default class App extends Vue {}
