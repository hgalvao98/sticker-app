<script>
export default {
  data() {
    return {
      random: Math.floor(Math.random() * 10000000) + 1,
    };
  },
};
</script>

<template>
  <div class="confirmation">
    <h1>Parabéns, sua compra foi aprovada!</h1>
    <p>Numero do pedido: #{{ random }}</p>
    <p>Para realizar outra compra clique em "Concluir"</p>
  </div>
</template>

<style>
.confirmation {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 30px 30px;
  text-align: center;
  background-color: white;
  border-radius: 5px;
}
</style>
