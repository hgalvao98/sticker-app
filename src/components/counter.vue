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
.button__counter {
  width: 35px;
  height: 35px;
  background-color: #2f3676;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: none;
}

.button__counter:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.count {
  margin: 0 10px;
  padding: 2px 20px;
  background-color: #dce2e8;
  border: 1px solid #2f3676;
  border-radius: 5px;
  display: flex;
  align-items: center;
}
</style>
