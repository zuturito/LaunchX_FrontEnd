<template>
    <label class="titulos">Características de tu pastel</label>
         <div class="form-row">
           <div class="col-md-6 mb-3">
             <label for="textodescript">Descripción de tu pastel</label>
             <textarea id="areatext" name="areatext" rows="4" cols="50"></textarea>
             <div>
               <label>En caso de contar con una imagen o dibujo de tu solicitud, adjúntala al pedido.</label>
               <input type="file" class="form-control" id="textodescript">
             </div>
           </div>
         </div>
</template>
<script>
export default {
  name: 'CaracteristicasPastel'
}
</script>