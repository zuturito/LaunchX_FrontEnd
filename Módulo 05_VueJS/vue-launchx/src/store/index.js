import { createStore } from 'vuex'

export default createStore({
  state: {
    chispitas: 100,
    figuras: 100,
    fruta: 100,
    ferreros: 100,
    pedidos_total: 0,
    ingresos_total: 0
  },
  getters: {
    realizarPedido(state) {
      return state.chispitas;
    }
  },
  mutations: {
    realizarPedido(state, valor1){
      switch(valor1){
        case 'Chispitas':
          state.chispitas -= 5;
        break;
        case 'Figuras':
          state.figuras -= 1;
        break;
        case 'Fruta':
          state.fruta -= 3;
        break;
        case 'Ferrero':
          state.ferreros -= 12;
        break;
      }
    }
  },
  actions: {
    async realizarPedido() { 
      const nombre = document.getElementById("nombre").value;
      const apellido = document.getElementById("apellido").value;
      const correo = document.getElementById("correo").value;
      const telefono = document.getElementById("telefono").value;
      const direccion = document.getElementById("dir").value;
      const codigo = document.getElementById("cp").value;
      const areaTextual = document.getElementById("areatext").value;
      const checkedValue = document.querySelector('.messageCheckbox:checked').value;
      const checkedValue2 = document.querySelector('.messageCheckbox2:checked').value;
      console.log(nombre,apellido,correo,telefono,direccion,codigo,areaTextual,checkedValue, checkedValue2);
      this.commit("realizarPedido", checkedValue);
    }
  },
  modules: {
  }
})
