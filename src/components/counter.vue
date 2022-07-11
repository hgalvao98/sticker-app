<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <div class="form__question">
    <label class="form__question__title">Quantos adesivos de cada?</label>
    <div class="form__counter">
      <button @click="count--">-</button>
      <span class="count">{{ count }}</span>
      <button @click="count++">+</button>
    </div>
  </div>
</template>
