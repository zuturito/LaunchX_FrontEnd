<template>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
          <router-link to="/" class="navbar-brand">
            <img  class='logoBarra' src='./assets/img/logo.png' alt='logo' >
          </router-link>
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/pasteles" class="nav-link">Nuestros pasteles</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/pedidos" class="nav-link">Realiza tu pedido</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link">Página del pastelero</router-link>
          </li>
        </ul>
      </nav>
      <router-view></router-view>
  <FooterPagina/>  
</template>

<script>
import FooterPagina from './components/FooterPagina.vue';

export default {
  name: 'App',
  components: {
    FooterPagina
  },
  mounted() {
    let externalScript = document.createElement('script');
    let externalScript2 = document.createElement('script');
    let externalScript3 = document.createElement('script');
    externalScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js');
    externalScript2.setAttribute('src', 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js');
    externalScript3.setAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js');
    document.head.appendChild(externalScript);
    document.head.appendChild(externalScript2);
    document.head.appendChild(externalScript3);
  },
}
</script>

<style>
@import './assets/css/estilo.css';
@import 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css';
@import 'https://use.fontawesome.com/releases/v6.0.0/css/all.css';
</style>
