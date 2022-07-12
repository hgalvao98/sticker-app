<script>
import MainQs from "./pages/MainQs.vue";
import Payment from "./pages/Payment.vue";
import Confirmation from "./pages/Confirmation.vue";
export default {
  data() {
    return {
      showFirst: "",
      activePhase: 1,
    };
  },
  ready: function () {
    console.log("ready");
  },
  methods: {
    goToStep: function (step) {
      if (step < 4) {
        this.activePhase = step;
      } else {
        this.activePhase = 1;
      }
    },
    showText: function () {
      if (this.activePhase == 1) {
        return "Proximo";
      } else if (this.activePhase == 2) {
        return "Pagar";
      } else {
        return "Concluir";
      }
    },
  },
  components: { MainQs, Payment, Confirmation },
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
      <MainQs v-if="activePhase == 1" />
      <Payment v-if="activePhase == 2" />
      <Confirmation v-if="activePhase == 3" />
      <div class="form__send">
        <button
          type="submit"
          class="form__send__button"
          @click.prevent="goToStep(activePhase + 1)"
        >
          {{ showText() }}
        </button>
      </div>
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
