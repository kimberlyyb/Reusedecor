document.addEventListener("DOMContentLoaded", () => {
    const payWithCardButton = document.getElementById('pay-with-card');
    const payWithPixButton = document.getElementById('pay-with-pix');
    const payWithBoletoButton = document.getElementById('pay-with-boleto');

    const cardPaymentForm = document.getElementById('card-payment-form');
    const pixPaymentForm = document.getElementById('pix-payment-form');
    const boletoPaymentForm = document.getElementById('boleto-payment-form');

    const cardNumberInput = document.getElementById('card-number-input');
    const cardNameInput = document.getElementById('card-name-input');
    const cardExpiryInput = document.getElementById('card-expiry-input');
    const cardCvcInput = document.getElementById('card-cvc-input');

    const cardNumber = document.querySelector('.card-number');
    const cardName = document.querySelector('.card-name');
    const cardExpiry = document.querySelector('.card-expiry');
    const cardCvc = document.querySelector('.card-cvc');

    const cardPreview = document.querySelector('.card-preview');
    const cardFront = document.querySelector('.card-front');
    const cardBack = document.querySelector('.card-back');

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
