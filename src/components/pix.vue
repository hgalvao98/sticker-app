<template>
  <div class="pix">
    <img class="pix__logo" src="../assets/imgs/logopix.jpg" />
    <div class="pix__info">
      <img class="pix__qr" src="../assets/imgs/randomqr.png" />
      <div class="pix__instructions">
        <div>
          <h4 class="pix__instructions__title">Pague com pix</h4>
          <ol>
            <li>Abra o aplicativo do seu banco</li>
            <li>Escolha pagar com QR Code</li>
            <li>Aponte a camera para o código</li>
          </ol>
        </div>
        <p class="pix__cnpj">Chave de CNPJ</p>
        <p class="pix__cnpj">93.394.110/0001-66</p>
      </div>
    </div>
  </div>
</template>
<style>
.pix {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
}

.pix__logo {
  width: 100px;
}

.pix__qr {
  width: 150px;
  height: 150px;
  border: 1px solid black;
}

.pix__info {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

.pix__cnpj {
  margin-top: 10px;
  text-align: center;
}

.pix__cnpj:last-of-type {
  padding: 2px 10px;
  background-color: #dce3e9;
  border: 1px solid #2f3676;
  border-radius: 5px;
}
</style>
