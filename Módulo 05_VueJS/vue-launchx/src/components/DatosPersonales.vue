<template>
<label class="titulos">Datos personales</label>
         <div class="form-row">
           <div class="col-md-4 mb-3">
             <label for="nombre">Nombre</label>
             <input type="text" class="form-control" id="nombre" placeholder="Ingresa tu nombre" required>
           </div>
           <div class="col-md-4 mb-3">
             <label for="apellido">Apellido</label>
             <input type="text" class="form-control" id="apellido" placeholder="Ingresa tu apellido" required>
           </div>
           <div class="col-md-4 mb-3">
            <label for="correo">Correo</label>
            <input type="email" class="form-control" id="correo" placeholder="Ingresa tu correo" required>
          </div>
          <div class="col-md-4 mb-3">
            <label for="telefono">Teléfono</label>
            <input type="tel" class="form-control" id="telefono" placeholder="Ingresa tu teléfono" required>
          </div>
          <div class="col-md-4 mb-3">
            <label for="dir">Dirección</label>
            <input type="text" class="form-control" id="dir" placeholder="Ingresa tu Dirección" required>
          </div>
          <div class="col-md-4 mb-3">
            <label for="cp">C.P.</label>
            <input type="text" class="form-control" maxlength="5" id="cp" placeholder="Ingresa tu código postal" required>
          </div>
         </div>
</template>
<script>
export default {
  name: 'DatosPersonales'
}
</script>