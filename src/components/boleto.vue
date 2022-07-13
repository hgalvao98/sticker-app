<template>
  <div class="boleto">
    <h1 class="boleto__title">Boleto gerado!</h1>
    <p class="boleto__instructions">
      Você tem até 60 dias para pagar o boleto antes que ele vença.
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
  text-align: center;
  background-color: #2f3576;
  padding: 10px;
  border-radius: 5px;
  color: white;
  gap: 10px;
}

.boleto__info {
  text-align: center;
  border-top: 1px solid white;
  padding-top: 10px;
}

.boleto__code {
  margin-top: 10px;
  padding: 2px 10px;
  background-color: #dce3e9;
  border: 1px solid #2f3676;
  border-radius: 5px;
  color: black;
}

a {
  color: white;
}
</style>
