<template>
        <div class="col-md-4 mb-3">
            <label>¿Qué sabor quieres en tu pastel?</label><br>
            <input class="messageCheckbox2" type="checkbox" id="sabor1" name="sabor1" value="Chocolate">
            <label for="sabor1"> Chocolate</label><br>
            <input class="messageCheckbox2" type="checkbox" id="sabor2" name="sabor2" value="Vainilla">
            <label for="sabor2"> Vainilla</label><br>
            <input class="messageCheckbox2" type="checkbox" id="sabor3" name="sabor3" value="Fresa">
            <label for="sabor3"> Fresa</label><br>
            <input class="messageCheckbox2" type="checkbox" id="sabor4" name="sabor4" value="3 Leches">
            <label for="sabor3"> 3 Leches</label><br>
        </div>
</template>
<script>
export default {
  name: 'SaboresPastel'
}
</script>