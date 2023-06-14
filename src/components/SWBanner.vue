<template>
    <div class="containerBanner">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png" alt="STAR WARS">
    </div>
</template>

<script>
export default {
    name: 'sw-banner',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .containerBanner{
        width: 60%;
        height: 80vh;
        margin: 0 auto;
    }
    img{
        width: 100%;
    }
</style>