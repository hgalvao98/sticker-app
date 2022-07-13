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
  <label class="form__question__title">Quantos adesivos de cada?</label>
  <div class="form__counter">
    <button class="button__counter" @click="count--">-</button>
    <span class="count">{{ count }}</span>
    <button class="button__counter" @click="count++">+</button>
  </div>
</template>

<style>
.form__counter {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.button__counter {
  color: white;
  background-color: #2f3676;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 5px;
}

.count {
  margin: 0 10px;
  padding: 5px 20px;
  background-color: #dce3e9;
  border: 1px solid #2f3676;
  border-radius: 5px;
}
</style>
