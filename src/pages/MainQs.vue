<script setup>
import Counter from "../components/counter.vue";
</script>

<template>
  <form class="form" v-on:submit.prevent="onSubmit">
    <div class="form__question">
      <label class="form__question__title" for="">Quais adesivos:</label>
      <div class="form__question__sticker">
        <input type="checkbox" required value="React" name="React" /><label
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
      <label class="form__question__title">Observações</label>
      <textarea
        class="form__textarea"
        rows="8"
        cols="50"
        placeholder="Alguma dúvida? Recado?"
      ></textarea>
    </div>
  </form>
</template>
