<script>
export default {
  data() {
    return {
      random: Math.floor(Math.random() * 10000000) + 1,
      stickers: this.info.stickers,
    };
  },
  props: ["info"],
  methods: {
    getPay: function () {
      if (this.info.pay === "") {
        return "Pagamento não selecionado";
      } else {
        return this.info.pay;
      }
    },
    getObs: function () {
      if (this.info.obs === "") {
        return "Sem observações";
      } else {
        return this.info.obs;
      }
    },
  },
};
</script>

<template>
  <div class="confirmation">
    <h1 v-if="this.info.pay === ''">
      Sua compra com
      <span class="payment__type">{{ getPay() }}</span> foi negada!
    </h1>
    <h1 v-if="this.info.pay">
      Sua compra com <span class="payment__type">{{ getPay() }}</span> foi
      aprovada!
    </h1>
    <p>Numero do pedido: #{{ random }}</p>
    <p>Seu pedido inclui {{ this.info.qnt }} adesivo(s) de:</p>
    <ul v-if="this.info.stickers.length > 0">
      <li v-for="sticker in stickers">{{ sticker }}</li>
    </ul>
    <p v-if="this.info.stickers.length == 0">Nenhum adesivo selecionado!</p>
    <h3>Observações:</h3>
    <p>{{ getObs() }}</p>
    <p class="confirmation__cta">
      Para realizar outra compra clique em "Concluir"
    </p>
  </div>
</template>

<style>
.confirmation {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 30px 30px;
  text-align: center;
  background-color: white;
  border-radius: 5px;
}

.payment__type {
  color: #2f3576;
  text-transform: uppercase;
  text-decoration: underline;
}

ul {
  width: 10%;
  margin: 0 auto;
}

.confirmation__cta {
  padding-top: 10px;
  border-top: 1px solid black;
}
</style>
