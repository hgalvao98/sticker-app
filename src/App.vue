<script>
import Counter from "./components/counter.vue";
export default {
  data() {
    return {
      showFirst: "",
    };
  },
  components: { Counter },
};
</script>

<template>
  <div class="background">
    <div class="main">
      <div class="header">
        <h1>Formulário para compra de Pacote de adesivos</h1>
        <span><img src="" alt="" /></span>
      </div>
      <form class="form" v-on:submit.prevent="onSubmit">
        <div class="form__question">
          <label class="form__question__title" for="">Quais adesivos:</label>
          <div>
            <input type="checkbox" value="React" name="React" /><label
              >React</label
            ><br />
            <input type="checkbox" value="Vue" name="Vue" /><label>Vue</label
            ><br />
            <input type="checkbox" value="Angular" name="Angular" /><label>
              Angular</label
            ><br />
          </div>
        </div>
        <div class="form__question">
          <Counter />
        </div>
        <div class="form__question">
          <label class="form__question__title">Observações</label>
          <textarea
            class="form__textarea"
            rows="8"
            cols="50"
            placeholder="Alguma dúvida? Recado?"
          ></textarea>
        </div>
        <div class="form__question">
          <label class="form__question__title">Tipo de pagamento:</label>
          <label
            ><input type="radio" v-model="showFirst" value="pix" />Pix</label
          ><br />
          <label
            ><input
              type="radio"
              v-model="showFirst"
              value="boleto"
            />Boleto</label
          ><br />
          <label
            ><input type="radio" v-model="showFirst" value="cartao" />Cartao de
            Credito</label
          >
        </div>

        <div v-if="showFirst === 'pix'">Pix</div>
        <div v-else-if="showFirst === 'boleto'">Boleto</div>
        <div v-else-if="showFirst === 'cartao'">Cartao de Credito</div>
        <div v-else-if="showFirst === ''">
          Selecione algum tipo de pagamento
        </div>

        <div class="form__send">
          <button class="form__send__button">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.background {
  background-color: #8a2be2;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main {
  width: 30%;
  margin: auto auto;
  background-color: #f2f2f2 !important;
  height: 90%;
  padding: 20px 40px;
}

.form {
  background-color: #f2f2f2;
}

.form__textarea {
}

.form__question {
  display: flex;
  flex-direction: column;
}

.form__question__title {
  font-size: 18px;
  font-weight: 700;
}

.form__counter {
  display: flex;
  flex-direction: row;
}

.form__send {
  background-color: #dce3e8;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.form__send__button {
  margin: 0 20px;
  background-color: #2f3676;
  height: 30px;
  color: white;
  padding: 2px 20px;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  border-radius: 5px;
}

.count {
  margin: 0 10px;
  padding: 2px 20px;
  background-color: #dce2e8;
  border: 1px solid #2f3676;
  border-radius: 5px;
}
</style>
