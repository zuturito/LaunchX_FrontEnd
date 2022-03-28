<template>
    <div>
    <h3>Cantidad de pedidos realizados</h3>
            <div class="slidecontainer">
              <output>Total: {{ $store.state.pedidos_total }}</output><br>
              <output>Total de ingresos por adornos: ${{ $store.state.ingresos_total }} </output>
              <!--input type="range" min="1" max="100" value="50" class="slider" id="myRange"-->
            </div>
    </div>
    <div class="titulo-principal text-left mb-4">
          <h1>Pedidos de los clientes</h1>
          <div class="single_line"></div>
          <p>En este apartado se muestran los pedidos de los clientes.</p>
          </div>
          <div class="row col-md-12 col-md-offset-2 custyle">
            <table class="table table-striped custab">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Nombre del cliente</th>
                    <th>Pedido</th>
                    <th>Cobro</th>
                    <th>Dirección de envío</th>
                    <th>Estado actual</th>
                    <th>Teléfono</th>
                    <th>Correo</th>
                    <th class="text-center">Acciones</th>
                </tr>
            </thead>
                    <tr>
                        <td>1</td>
                        <td>Fernando Gutiérrez</td>
                        <td>CheeseCake</td>
                        <td>$200</td>
                        <td>Calle #45 Av. Zarigueya</td>
                        <td>01010101</td>
                        <td>elcorreo@correo.com</td>
                        <td>Completado <i class="fa-solid fa-check"></i></td>
                        <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="fa fa-edit"></span> </a> <a href="#" class="btn btn-danger btn-xs"><span class="fa-solid fa-xmark"></span> </a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Mariana Ortega</td>
                        <td>Personalizado: Fresa, Frutas, Pastel en forma de corazón</td>
                        <td>$250</td>
                        <td>Calle Hidalgo #4</td>
                        <td>01010505</td>
                        <td>micorreo@correo.com</td>
                        <td>En proceso <i class="fa-solid fa-clock"></i> </td>
                        <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="fa fa-edit"></span> </a> <a href="#" class="btn btn-danger btn-xs"><span class="fa-solid fa-xmark"></span></a></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Juan Escutia</td>
                        <td>Pastel personal</td>
                        <td>$90</td>
                        <td>Prolong. Fernando #98</td>
                        <td>45454545</td>
                        <td>pastel_correo@correo.com</td>
                        <td>Cancelado <i class="fa-solid fa-ban"></i> </td>
                        <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="fa fa-edit"></span> </a> <a href="#" class="btn btn-danger btn-xs"><span class="fa-solid fa-xmark"></span> </a></td>
                    </tr>
            </table>
            </div>
</template>
<script>
export default {
  name: 'PedidosRealizados',
}
</script>