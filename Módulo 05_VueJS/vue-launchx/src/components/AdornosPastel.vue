<template>
        <div class="form-group">
           <label>Elige los adornos que quieres en tu pastel</label><br>
            <input class="messageCheckbox" type="checkbox" id="adorno1" name="adorno1" value="Chispitas">
            <label for="adorno1"> Chispitas - $10</label><br>
            <input class="messageCheckbox" type="checkbox" id="adorno2" name="adorno2" value="Figuras">
            <label for="adorno2"> Figuras - $50</label><br>
            <input class="messageCheckbox" type="checkbox" id="adorno3" name="adorno3" value="Fruta">
            <label for="adorno3"> Fruta - $25</label><br>
            <input class="messageCheckbox" type="checkbox" id="adorno4" name="adorno4" value="Ferrero">
            <label for="adorno4"> Chocolates Ferrero - $70</label><br>
        </div>
</template>
<script>
export default {
  name: 'AdornosPastel'
}
</script>