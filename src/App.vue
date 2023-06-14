<template>
  <div id="app">
    <nav class="navbar justify-content-start p-3" style="background-color: #fffe0e;">
      <router-link class="px-2" to="/">Inicio</router-link> |
      <router-link class="px-2" to="/personajes">Personajes</router-link> |
      <router-link class="px-2" to="/contacto">Contacto</router-link>
    </nav>
    <my-nav></my-nav>

    <transition name="router-anim" mode="out-in"> <router-view/> </transition>
  </div>
</template>

<script>
import MyNav from "./components/MyNav.vue";
export default {
  name: "component-name",
  // props: {},
  data: function () {
    return {};
  },
  // computed: {},
  //methods: {}
  // watch: {},
  components: {
    MyNav,
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style>
body {
  background: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #742d30;
}

nav a.router-link-exact-active {
  color: #42b983;
}
h1 {
  color: #fffe0e;
}

.router-anim-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.5s;
  opacity: 0;
}

.router-anim-leave-active {
  animation: going 0.5s;
}

@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes going {
  0% {
    transform: translateX(0px);
  }

  100% {
    transform: translateX(-50px);
    opacity: 0;
  }
}
</style>
