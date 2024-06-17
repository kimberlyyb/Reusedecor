document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos necessários
    const incrementButtons = document.querySelectorAll('.increment');
    const decrementButtons = document.querySelectorAll('.decrement');
    const removeButtons = document.querySelectorAll('.remove');
    const subtotalElement = document.querySelector('.subtotal');
    const totalElement = document.querySelector('footer .total');

    // Função para atualizar o total de um produto
    function updateProductTotal(row) {
        const priceElement = row.querySelector('.price');
        const quantityElement = row.querySelector('.quantity');
        const totalElement = row.querySelector('.total');
        const price = parseFloat(priceElement.textContent.replace('R$', '').replace(',', '.'));
        const quantity = parseInt(quantityElement.textContent);
        const total = (price * quantity).toFixed(2).replace('.', ',');
        totalElement.textContent = `R$ ${total}`;
    }

    // Função para atualizar o subtotal e o total geral
    function updateCartTotal() {
        const rows = document.querySelectorAll('tbody tr');
        let subtotal = 0;

        rows.forEach(row => {
            const totalElement = row.querySelector('.total');
            const total = parseFloat(totalElement.textContent.replace('R$', '').replace(',', '.'));
            subtotal += total;
        });

        const formattedSubtotal = subtotal.toFixed(2).replace('.', ',');
        subtotalElement.textContent = `R$ ${formattedSubtotal}`;
        totalElement.textContent = `R$ ${formattedSubtotal}`;
    }

    // Adiciona eventos aos botões de incremento
    incrementButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const quantityElement = event.target.closest('.qty').querySelector('.quantity');
            let quantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = ++quantity;

            const row = event.target.closest('tr');
            updateProductTotal(row);
            updateCartTotal();
        });
    });

    // Adiciona eventos aos botões de decremento
    decrementButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const quantityElement = event.target.closest('.qty').querySelector('.quantity');
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantityElement.textContent = --quantity;
            }

            const row = event.target.closest('tr');
            updateProductTotal(row);
            updateCartTotal();
        });
    });

    // Adiciona eventos aos botões de remoção
    removeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const row = event.target.closest('tr');
            row.remove();
            updateCartTotal();
        });
    });

    // Inicializa os totais do carrinho
    updateCartTotal();
});
