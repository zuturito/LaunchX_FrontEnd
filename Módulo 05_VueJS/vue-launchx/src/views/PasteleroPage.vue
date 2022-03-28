<template>
<div class="contenedor col-lg-12">
    <RestanteAdornos/>
    <PedidosRealizados/>
</div>
</template>
<script>
import RestanteAdornos from '../components/RestanteAdornos.vue';
import PedidosRealizados from '../components/PedidosRealizados.vue';

export default {
  name: 'PasteleroPage',
  components: {
    RestanteAdornos,
    PedidosRealizados
  },
}
</script>