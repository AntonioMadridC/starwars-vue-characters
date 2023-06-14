<template>
  <div class="container">
    <h1>Contacto</h1>
    <p>Para contactarnos puedes escribirnos</p>
    <form class="" action="">
      <div class="input-group">
        <label for="Nombre">Nombre completo:</label>
        <input type="text" />
      </div>
      <div class="input-group">
        <label for="correo">Correo electrónico:</label>
        <input type="text" />
      </div>
      <div class="input-group">
        <label for="message">Mensaje:</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <button class="btn">Enviar</button>
    </form>
  </div>
</template>




<script>
export default {
  name: "contacto-name",
  data: function () {
    return {};
  },
};
</script>




<style scoped>
.container {
  width: 60%;
  max-width: 600px;
  margin: 0 auto;
  color: whitesmoke;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.input-group input {
  width: 60%;
}

h1 {
  text-align: center;
}

p {
  text-align: center;
  margin-bottom: 40px;
}

form {
    text-align: start;
}

.btn {
  background-color: #29b129;
  color: whitesmoke;
  display: inline-block;
  width: 25%;
  padding: 10px;
  margin-top: 10px;
}
</style>