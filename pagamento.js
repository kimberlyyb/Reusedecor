document.addEventListener("DOMContentLoaded", () => {
   let payWithCardButton = document.getElementById('pay-with-card');
   let payWithPixButton = document.getElementById('pay-with-pix');
   let payWithBoletoButton = document.getElementById('pay-with-boleto');

   let cardPaymentForm = document.getElementById('card-payment-form');
   let pixPaymentForm = document.getElementById('pix-payment-form');
   let boletoPaymentForm = document.getElementById('boleto-payment-form');

   let cardNumberInput = document.getElementById('card-number-input');
   let cardNameInput = document.getElementById('card-name-input');
   let cardExpiryInput = document.getElementById('card-expiry-input');
   let cardCvcInput = document.getElementById('card-cvc-input');

   let cardNumber = document.querySelector('.card-number');
   let cardName = document.querySelector('.card-name');
   let cardExpiry = document.querySelector('.card-expiry');
   let cardCvc = document.querySelector('.card-cvc');

   let cardPreview = document.querySelector('.card-preview');
   let cardFront = document.querySelector('.card-front');
   let cardBack = document.querySelector('.card-back');

    payWithCardButton.addEventListener('click', () => {
        cardPaymentForm.classList.add('active');
        pixPaymentForm.classList.remove('active');
        boletoPaymentForm.classList.remove('active');
    });

    payWithPixButton.addEventListener('click', () => {
        cardPaymentForm.classList.remove('active');
        pixPaymentForm.classList.add('active');
        boletoPaymentForm.classList.remove('active');
    });

    payWithBoletoButton.addEventListener('click', () => {
        cardPaymentForm.classList.remove('active');
        pixPaymentForm.classList.remove('active');
        boletoPaymentForm.classList.add('active');
    });

    cardNumberInput.addEventListener('input', (e) => {
        cardNumber.textContent = e.target.value || '0000 0000 0000 0000';
    });

    cardNameInput.addEventListener('input', (e) => {
        cardName.textContent = e.target.value.toUpperCase() || 'NOME NO CARTÃO';
    });

    cardExpiryInput.addEventListener('input', (e) => {
        cardExpiry.textContent = e.target.value || '00/00';
    });

    cardCvcInput.addEventListener('focus', () => {
        cardPreview.classList.add('flip');
    });

    cardCvcInput.addEventListener('blur', () => {
        cardPreview.classList.remove('flip');
    });

    cardCvcInput.addEventListener('input', (e) => {
        cardCvc.textContent = e.target.value || 'CVC';
    });

    document.getElementById('card-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Pagamento com cartão processado com sucesso!');
    });

    document.getElementById('pix-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const pixKey = document.getElementById('pix-key-input').value;
        document.getElementById('pix-qrcode').textContent = 'QR Code gerado para a chave PIX: ' + pixKey;
    });

    document.getElementById('boleto-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome-input').value;
        const cpf = document.getElementById('cpf-input').value;
        document.getElementById('boleto').textContent = 'Boleto gerado para ' + nome + ' (CPF: ' + cpf + ')';
    });
});
