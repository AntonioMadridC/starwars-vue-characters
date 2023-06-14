<template>
  <div class="containerPersonaje">
    <div class="labelPersonaje">Nombre:</div>
    <div class="infoPersonaje">{{personaje.name}}</div>
    <div class="labelPersonaje">Género</div>
    <div class="infoPersonaje">{{personaje.gender}}</div>
    <div class="labelPersonaje">Altura</div>
    <div class="infoPersonaje">{{personaje.height}}</div>
    <div class="labelPersonaje">Número de Películas</div>
    <div class="infoPersonaje">{{personaje.films.length}}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "personaje-view",
  props: {
    id:{
      type:String,
      required: true
    }

  },
  data: function () {
    return {
        personaje:{
            name:"",
            gender:"",
            height:"",
            films:[]
        }

    };
  },
  computed: {
    /* id(){
        return this.$route.params.id
    } */
  },
  methods: {
    getPersonaje(){
        axios.get(`https://swapi.dev/api/people/${this.id}`)
        .then(result=>{
            this.personaje=result.data
        })
    }
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  created(){
    this.getPersonaje()
  }
  // -- End Lifecycle Methods
};
</script>

<style scoped>
.containerPersonaje{
    width: 40%;
    margin: 0 auto;
    border: 2px solid #747474;
}
.labelPersonaje{
    background: #747474;
    color: #fffe0e;
    padding: 5px;
}
.infoPersonaje{
    color: white;
    padding: 5px;
}
</style>