<template>
  <div>
    <h1>Personajes</h1>
    <button @click="getData" class="btn btn-warning">Mostrar Personajes</button>
    <div class="containerPersonajes">
      <button
        class="btnPersonaje"
        v-for="(personaje, index) in personajes"
        :key="index"
        @click="redirect(personaje.url)"
      >
        {{ personaje.name }}
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "personajes-view",
  // props: {},
  data: function () {
    return {
        personajes:[],
        page:1
    };
  },
  // computed: {},
  methods: {
    getData(){
        axios.get(`https://swapi.dev/api/people?page=${this.page}`)
        .then(json=>{
            let results = json.data.results
            results.forEach(personaje => {
                this.personajes.push(personaje)
                /* this.redirect(personaje.url)  */               
            });
            console.log(this.personajes);
            this.page++
        })
    },
    redirect(url){
        let index = ((url).match(/\d+/))[0]
        this.$router.push(`/personajes/${index}`)
    },
  }
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
.containerPersonajes {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 90%;
  margin: 0 auto;
  gap: 2px;
}
.btnPersonaje {
  background: transparent;
  color: #fffe0e;
  font-weight: bold;
  border: 1px solid white;
}
</style>