<script>
import Pix from "../components/pix.vue";
import Boleto from "../components/boleto.vue";
import Cartao from "../components/cartao.vue";
export default {
  data() {
    return {
      showFirst: "",
    };
  },
  props: ["info"],
  components: { Pix, Boleto, Cartao },
  methods: {
    addToInfo: function () {
      this.info.pay = this.showFirst;
    },
  },
};
</script>

<template>
  {{ addToInfo() }}
  <form class="payment" v-on:submit.prevent="onSubmit">
    <div class="form__question">
      <label class="form__question__title">Tipo de pagamento:</label>
      <label class="form__options"
        ><input type="radio" required v-model="showFirst" value="pix" />Pix
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="icon bi bi-qr-code"
          viewBox="0 0 16 16"
        >
          <path d="M2 2h2v2H2V2Z" />
          <path d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z" />
          <path d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z" />
          <path
            d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z"
          />
          <path d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z" />
        </svg>
      </label>
      <label class="form__options"
        ><input type="radio" v-model="showFirst" value="boleto" />Boleto
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="icon bi bi-upc-scan"
          viewBox="0 0 16 16"
        >
          <path
            d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"
          />
        </svg>
      </label>
      <label class="form__options"
        ><input type="radio" v-model="showFirst" value="cartao" />Cartao de
        crédito
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="icon bi bi-credit-card"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"
          />
          <path
            d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"
          />
        </svg>
      </label>
    </div>

    <div class="form__payment" v-if="showFirst === 'pix'"><Pix /></div>
    <div class="form__payment" v-else-if="showFirst === 'boleto'">
      <Boleto />
    </div>
    <div class="form__payment" v-else-if="showFirst === 'cartao'">
      <Cartao />
    </div>
    <div class="form__payment" v-else-if="showFirst === ''">
      Selecione algum tipo de pagamento
    </div>
  </form>
</template>

<style>
.payment {
  padding: 10px 30px;
}

.icon {
  height: 20px;
  width: 20px;
  margin: 10px 10px;
}

label > input {
  margin-right: 5px;
}

.form__options {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.form__payment {
  margin: 20px 0;
}
</style>
