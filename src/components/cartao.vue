<script>
const alert = () => {
  alert("Card saved!");
};
</script>

<template>
  <div class="card">
    <h1 class="card__title">Cartão de crédito</h1>
    <form v-on:submit="alert">
      <div class="form__field">
        <label>Numero do cartão</label>
        <input required />
      </div>
      <div class="form__field">
        <label>Nome no cartão</label>
        <input required type="text" />
      </div>
      <div class="form__field">
        <label>Data de vencimento</label>
        <input required type="date" />
      </div>
      <div class="form__field">
        <label>CVV</label>
        <input required type="password" maxlength="3" />
      </div>
      <button>submit</button>
    </form>
  </div>
</template>

<style>
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border: 1px solid #2f3676;
  padding: 10px;
  border-radius: 5px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form__field {
  display: flex;
  width: 100%;
  flex-direction: column;
}
</style>
