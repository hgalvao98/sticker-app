<script>
import Counter from "../components/counter.vue";
export default {
  data() {
    return {
      stickers: [],
      info: this.info,
      observations: "",
    };
  },
  props: ["info"],
  methods: {
    getInfo: function () {
      this.info.stickers = this.stickers;
      this.info.obs = this.observations;
      console.log(this.info);
    },
  },
  components: { Counter },
};
</script>

<template>
  {{ getInfo() }}
  <form class="form" v-on:submit.prevent="onSubmit">
    <div class="form__question">
      <label class="form__question__title" required for=""
        >Quais adesivos:</label
      >
      <div class="form__question__sticker">
        <input
          type="checkbox"
          v-model="stickers"
          value="React"
          name="React"
        /><label>React</label>
      </div>
      <div class="form__question__sticker">
        <input
          type="checkbox"
          v-model="stickers"
          value="Vue"
          name="Vue"
        /><label>Vue</label>
      </div>
      <div class="form__question__sticker">
        <input
          type="checkbox"
          v-model="stickers"
          value="Angular"
          name="Angular"
        /><label>Angular</label>
      </div>
    </div>
    <div class="form__question">
      <Counter v-bind:info="info" />
    </div>
    <div class="form__question">
      <label class="form__question__title">Observações</label>
      <textarea
        v-model="observations"
        class="form__textarea"
        rows="8"
        cols="50"
        placeholder="Alguma dúvida? Recado?"
      ></textarea>
    </div>
  </form>
</template>

<style>
.form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 15px 30px;
}

.form__question {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form__question__title {
  font-weight: 700;
  font-size: 1.1rem;
}

.form__question__sticker > label {
  margin-left: 5px;
}

textarea {
  background-color: #dce3e9;
  border-radius: 5px;
  border: 1px solid #2f3676;
  padding: 10px;
}
</style>
