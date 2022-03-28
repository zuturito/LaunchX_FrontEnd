<template>
<div class="contenedor col-lg-12">
        <div class="titulo-principal text-left mb-4">
          <h1>Pedidos personalizados</h1>
          <div class="single_line"></div>
          <p>Ingresa los datos del siguiente formulario:</p>
          </div> 
      </div>
      <div>
        <div class="container">
          <div>
            <DatosPersonales/>
            <CaracteristicasPastel/>
            <SaboresPastel/>
            <AdornosPastel/>
         <div class="form-group">
           <div class="custom-control custom-checkbox">
             <input type="checkbox" class="custom-control-input" id="checkDatos" required>
             <label class="custom-control-label" for="checkDatos">Mi pedido es correcto y deseo realizar una compra.</label>
           </div>
           <div class="invalid-feedback">
             Debes estar de acuerdo con tu pedido antes de realizarlo.
           </div>
         </div>
         <br>
         <button @click="$store.dispatch('realizarPedido')">Realizar pedido</button><br>
         </div></div>   
      </div>
</template>
<script>
import DatosPersonales from '../components/DatosPersonales.vue';
import CaracteristicasPastel from '../components/CaracteristicasPastel.vue';
import SaboresPastel from '../components/SaboresPastel.vue';
import AdornosPastel from '../components/AdornosPastel.vue';

export default {
  name: 'MisPedidos',
  components: {
    DatosPersonales,
    CaracteristicasPastel,
    SaboresPastel,
    AdornosPastel
  },
}
</script>