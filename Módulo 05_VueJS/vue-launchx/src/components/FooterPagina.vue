<template>
<footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>Acerca</h6>
            <p class="text-justify">Página para LaunchX.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Menú</h6>
            <ul class="footer-links menuref">
              <li><router-link to="/" class="nav-link">Página prinicpal</router-link></li>
              <li><router-link to="/pasteles" class="nav-link">Nuestros pasteles</router-link></li>
              <li><router-link to="/pedidos" class="nav-link">Realiza tu pedido</router-link></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Horarios</h6>
            <ul class="footer-links">
              <li>De Lunes a Viernes</li>
              <li>de 9:00 a.m. a 18:00 p.m.</li>
            </ul>
          </div>
        </div>
        <hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text"><b>Ubícanos en</b>: Dirección Feliz #45 CP.91910. <b>Teléfono de contacto</b>: 55-00-11-22</p>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa-brands fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa-brands fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa-brands fa-youtube"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
</footer>
</template>