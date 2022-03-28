<template>
          <div class="contenedor col-lg-12">
        <div class="titulo-principal text-left mb-4">
          <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="mask flex-center">
                  <div class="container">
                    <div class="row align-items-center">
                      <div class="col-md-7 col-12 order-md-1 order-2">
                        <h4 class="tituCarru">Deliciosos pasteles para todos</h4>
                        <p class="textoCarru">En nuestra pastelería amamos hornear lo que más te gusta, disfruta del catálogo.</p>
                        <router-link to="/pasteles" class="nav-link">Ver los pasteles</router-link> </div>
                      <div class="col-md-5 col-12 order-md-2 order-1"><img src="https://cdn.pixabay.com/photo/2021/06/25/18/14/cake-6364361_960_720.png" class="mx-auto" alt="slide"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="mask flex-center">
                  <div class="container">
                    <div class="row align-items-center">
                      <div class="col-md-7 col-12 order-md-1 order-2">
                        <h4>Personaliza tu pastel</h4>
                        <p>Si nuestro catálogo no te convence, arma tu idea en un clic.</p>
                        <router-link to="/pedidos" class="nav-link">Pedidos</router-link> </div>
                      <div class="col-md-5 col-12 order-md-2 order-1"><img src="https://cdn.pixabay.com/photo/2017/02/25/15/06/cupcake-2097943_960_720.png" class="mx-auto" alt="slide"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a> </div>
          <!--slide end--> 
          <h1>Pastelería: Las delicias de la abuela</h1>
          <div class="single_line"></div>
          <p>Bienvenido a las delicias de la abuela, una pastelería con mucho sabor tradicional.</p>
          </div>
          <img class="logo" src="../assets/img/logo.png">
      </div>
</template>
<script>
export default {
  name: 'BienvenidaPag'
}
</script>