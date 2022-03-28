<template>
<div class="contenedor col-lg-12">
        <div class="titulo-principal text-left mb-4">
          <h1>Nuestro catálogo de productos</h1>
          <div class="single_line"></div>
        </div>
        <p>Puedes elegir algún producto de nuestros pasteles disponibles. Si deseas un pastel personalizado, ingresa al 
            apartado de <router-link to="/pedidos">pedidos</router-link>.</p>
        <PastelesPrice/>
</div>
</template>
<script>
import PastelesPrice from '../components/PastelesPrice.vue';

export default {
  name: 'PastelesCatalogo',
  components: {
    PastelesPrice
  },
}
</script>