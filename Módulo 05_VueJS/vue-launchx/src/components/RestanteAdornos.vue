<template>
    <div class="titulo-principal text-left mb-4">
          <h1>Administración del pastelero</h1>
          <div class="single_line"></div>
          <p>En este apartado se muestra la cantidad de material disponible.</p>
          <h4>Material disponible</h4>
          <div class="demo-charts mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
            <label>Chispitas</label>
            <svg fill="currentColor" width="200px" height="200px" viewBox="0 0 1 1" class="demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop">
              <use xlink:href="#piechart" mask="url(#piemask)" />
              <text x="0.5" y="0.5" font-family="Roboto" font-size="0.3" fill="#888" text-anchor="middle" dy="0.1">{{ $store.getters.realizarPedido }} <tspan font-size="0.2" dy="-0.07">%</tspan></text>
            </svg>
            <label>Figuras</label>
            <svg fill="currentColor" width="200px" height="200px" viewBox="0 0 1 1" class="demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop">
              <use xlink:href="#piechart2" mask="url(#piemask)" />
              <text x="0.5" y="0.5" font-family="Roboto" font-size="0.3" fill="#888" text-anchor="middle" dy="0.1">{{ $store.state.figuras }}<tspan dy="-0.07" font-size="0.2">%</tspan></text>
            </svg>
            <label>Fruta</label>
            <svg fill="currentColor" width="200px" height="200px" viewBox="0 0 1 1" class="demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop">
              <use xlink:href="#piechart3" mask="url(#piemask)" />
              <text x="0.5" y="0.5" font-family="Roboto" font-size="0.3" fill="#888" text-anchor="middle" dy="0.1">{{ $store.state.fruta }}<tspan dy="-0.07" font-size="0.2">%</tspan></text>
            </svg>
            <label>Ferreros</label>
            <svg fill="currentColor" width="200px" height="200px" viewBox="0 0 1 1" class="demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop">
              <use xlink:href="#piechart4" mask="url(#piemask)" />
              <text x="0.5" y="0.5" font-family="Roboto" font-size="0.3" fill="#888" text-anchor="middle" dy="0.1">{{ $store.state.ferreros }}<tspan dy="-0.07" font-size="0.2">%</tspan></text>
            </svg>
          </div>
        </div>
</template>
<script>
export default {
  name: 'RestanteAdornos',
  computed: {
    realizarPedido: {
      get(){
        return this.$store.state.chispitas;
      }
    }
  },
  
}
</script>