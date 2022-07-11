<script>
import Counter from "./components/counter.vue";
import Boleto from "./components/boleto.vue";
import Pix from "./components/pix.vue";
import Cartao from "./components/cartao.vue";
export default {
  data() {
    return {
      showFirst: "",
    };
  },
  components: { Counter, Boleto, Pix, Cartao },
};
</script>

<template>
  <div class="background">
    <div class="main">
      <div class="header">
        <p class="header__text">
          Formulário para compra de
          <br /><span class="bold">Pacote de adesivos</span>
        </p>
        <span class="box"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height="160"
            fill="#191847"
            class="bi bi-box-seam"
            viewBox="0 0 16 16"
          >
            <path
              d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"
            />
          </svg>
        </span>
      </div>
      <form class="form" v-on:submit.prevent="onSubmit">
        <div class="form__question">
          <label class="form__question__title" for="">Quais adesivos:</label>
          <div class="form__question__sticker">
            <input type="checkbox" value="React" name="React" /><label
              >React</label
            >
          </div>
          <div class="form__question__sticker">
            <input type="checkbox" value="Vue" name="Vue" /><label>Vue</label>
          </div>
          <div class="form__question__sticker">
            <input type="checkbox" value="Angular" name="Angular" /><label
              >Angular</label
            >
          </div>
        </div>
        <div class="form__question">
          <Counter />
        </div>
        <div class="form__question">
          <label class="form__question__title">Tipo de pagamento:</label>
          <label
            ><input type="radio" v-model="showFirst" value="pix" />Pix
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-qr-code"
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
          <label
            ><input type="radio" v-model="showFirst" value="boleto" />Boleto
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-upc-scan"
              viewBox="0 0 16 16"
            >
              <path
                d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"
              />
            </svg>
          </label>
          <label
            ><input type="radio" v-model="showFirst" value="cartao" />Cartao de
            Credito
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-credit-card"
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

        <div class="form__question">
          <label class="form__question__title">Observações</label>
          <textarea
            class="form__textarea"
            rows="8"
            cols="50"
            placeholder="Alguma dúvida? Recado?"
          ></textarea>
        </div>

        <div class="form__send">
          <button type="submit" class="form__send__button">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.background {
  background-color: #8a2be2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.main {
  width: 50%;
  background-color: #f2f2f2;
  min-height: 90%;
  margin: 20px 0;
  border-radius: 5px;
}

@media only screen and (min-width: 1600px) {
  .main {
    width: 30%;
  }
}

@media only screen and (max-width: 900px) {
  .box {
    display: none;
  }
}

.header {
  width: 100%;
  height: 200px;
  display: flex;
  padding: 30px;
  color: white;
  font-size: 25px;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  border-radius: 5px 5px 55% 20%;
  background-color: #2f3575;
}

.header__text {
  width: 40%;
}

@media only screen and (max-width: 1080px) {
  .header__text {
    width: 50%;
  }
}

.box {
  position: absolute;
  right: 11%;
}

.bold {
  font-weight: 700;
}

input {
  margin-right: 10px;
}

input,
textarea {
  background-color: #dce2e8;
  border: 1px solid #2f3676;
  border-radius: 5px;
}

textarea {
  padding: 10px;
}

.form__question,
.form__payment {
  display: flex;
  flex-direction: column;
  margin: 20px 40px;
  gap: 10px;
}

.form__question__title {
  font-size: 18px;
  font-weight: 700;
}

.form__question__sticker {
  display: flex;
  flex-direction: row;
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
  border-radius: 0 0 5px 5px;
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

.form__send__button:hover {
  transform: scale(1.1);
  cursor: pointer;
}
</style>
