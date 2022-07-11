<template>
  <div class="boleto">
    <h1 class="boleto__title">Boleto gerado</h1>
    <p class="boleto__instructions">
      Você tem até 60 dias para pagar o boleto antes que ele vença
    </p>
    <div class="boleto__info">
      <a class="boleto__copy" href="#">Copiar codigo</a>
      <p class="boleto__code">
        34191.79001 01043.510047 91020.150008 5 90430026000
      </p>
    </div>
  </div>
</template>
<style>
.boleto {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: 1px solid #2f3676;
  padding: 10px;
  border-radius: 5px;
}

.boleto__info {
  margin: 0 auto;
  text-align: center;
  background-color: #2f3676;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

.boleto__code {
  margin-top: 10px;
  border-top: 1px solid black;
  padding-top: 10px;
}

a {
  text-decoration: none;
  color: white;
}
</style>
