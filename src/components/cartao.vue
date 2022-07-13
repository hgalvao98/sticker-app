<script>
export default {
  methods: {
    saveCard: function () {
      alert("Cartão Aceito. Clique em Pagar para continuar");
    },
  },
};
</script>

<template>
  <div class="card">
    <h1 class="card__title">Cartão de crédito</h1>
    <form v-on:submit="saveCard">
      <div class="form__field">
        <label>Numero do cartão</label>
        <input required minlength="16" type="number" />
      </div>
      <div class="form__field">
        <label>Nome no cartão</label>
        <input required type="text" minlength="3" />
      </div>
      <div class="form__field--2">
        <div class="form__field">
          <label>Data de vencimento</label>
          <input required type="date" min="2022-07-12" />
        </div>
        <div class="form__field">
          <label
            >CVV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="icon--lock bi bi-shield-lock"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"
              />
              <path
                d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"
              />
            </svg>
          </label>
          <input required type="password" maxlength="3" />
        </div>
      </div>
      <button class="card__button" type="submit">Save Card</button>
    </form>
  </div>
</template>

<style>
.card {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  gap: 10px;
}

.card__title {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form__field {
  display: flex;
  flex-direction: column;
}

.icon--lock {
  height: 20px;
  width: 20px;
}

.form__field input {
  border-radius: 5px;
  border: 1px solid black;
  padding: 2px;
  margin-top: 10px;
  width: 100%;
}

.form__field label {
  font-weight: 600;
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
}

.form__field--2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  gap: 6px;
}

.card__button {
  color: white;
  background-color: #2f3676;
  border: none;
  width: 30%;
  padding: 6px 10px;
  border-radius: 5px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

@media only screen and (min-width: 800px) {
  .card {
    width: 50%;
    margin: 0 auto;
  }
}
</style>
