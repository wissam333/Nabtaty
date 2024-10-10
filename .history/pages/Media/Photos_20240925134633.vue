<template>
    <lightgallery
        :settings="{ speed: 500, plugins: plugins }"
        :onInit="onInit"
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

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import Lightgallery from 'lightgallery/vue';
    import lgThumbnail from 'lightgallery/plugins/thumbnail';
    import lgZoom from 'lightgallery/plugins/zoom';

    // If you are using scss you can skip the css imports below and use scss instead
    import styles from 'lightgallery/scss/lightgallery.scss';

    @Options({
        components: {
            Lightgallery,
        },
        data: () => ({
            plugins: [lgThumbnail, lgZoom],
        }),
        methods: {
            onInit: () => {
                console.log('lightGallery has been initialized');
            },
            onBeforeSlide: () => {
                console.log('calling before slide');
            },
        },
    })
    export default class App extends Vue {}
</script>
<style lang="css" scoped>
    @import 'lightgallery/css/lightgallery.css';
    @import 'lightgallery/css/lg-thumbnail.css';
    @import 'lightgallery/css/lg-zoom.css';
</style>
