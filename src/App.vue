<script>
import MainQs from "./pages/MainQs.vue";
import Payment from "./pages/Payment.vue";
import Confirmation from "./pages/Confirmation.vue";
export default {
  data() {
    return {
      showFirst: "",
      activePhase: 1,
      information: [],
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
          v-if="activePhase == 2"
          type="submit"
          class="form__send__button"
          @click.prevent="goToStep(activePhase - 1)"
        >
          Voltar
        </button>
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
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  /* padding: 10px 0; */
  justify-content: center;
}

.main {
  background-color: #f1f1f1;
  border-radius: 5px;
  min-height: fit-content;
  position: relative;
  width: 100%;
}

.header {
  background-color: #2f3576;
  height: 160px;
  border-radius: 5px 5px 60% 50%;
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  position: relative;
}

.header__text {
  color: white;
  font-size: 20px;
  font-weight: lighter;
  max-width: 55%;
}

svg {
  height: 120px;
  width: 120px;
}

.box {
  position: absolute;
  right: 30px;
}

.bold {
  font-weight: 700;
}

.form__send {
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: #dce3e8;
  height: 120px;
  border-radius: 0 0 5px 5px;
}

.form__send button {
  background-color: #2f3676;
  color: white;
  text-transform: uppercase;
  padding: 10px 24px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
}

.form__send button:last-of-type {
  position: absolute;
  right: 0;
  margin-right: 30px;
}

button:hover {
  transform: scale(1.1);
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  .main {
    width: 100%;
  }
}

@media only screen and (min-width: 800px) and (max-width: 1024px) {
  .main {
    width: 80%;
  }

  .box {
    right: 60px;
  }

  .header__text {
    width: 30%;
  }
}

@media only screen and (min-width: 1024px) {
  .main {
    width: 40%;
  }

  .box {
    right: 60px;
  }

  .header__text {
    width: 30%;
  }
}
</style>
