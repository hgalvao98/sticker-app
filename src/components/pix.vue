<template>
  <div class="pix">
    <img class="pix__logo" src="../assets/imgs/logopix.jpg" />
    <div class="pix__info">
      <img class="pix__qr" src="../assets/imgs/randomqr.JPG" />
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
  align-items: flex-start;
  gap: 20px;
  border: 1px solid #2f3676;
  padding: 10px;
  border-radius: 5px;
}

.pix__logo {
  width: 200px;
}

.pix__qr {
  width: 100px;
}

.pix__info {
  display: flex;
  flex-direction: row;
  gap: 40px;
}

.pix__cnpj {
  text-align: center;
  margin-top: 6px;
}

.pix__cnpj:last-of-type {
  background-color: #dce2e8;
  border: 1px solid #2f3676;
  border-radius: 5px;
}
</style>
