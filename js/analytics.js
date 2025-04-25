// Función para enviar eventos a GA4
function sendGAEvent(eventName, eventParams) {
    // Verifica si gtag está disponible
    if (typeof gtag === 'function') {
        gtag('event', eventName, eventParams);
    } else {
        console.warn('GTM no está inicializado correctamente');
    }
}

// Función para manejar los clicks en botones de compra
function trackPurchaseClick(ticketType, price) {
    sendGAEvent('select_item', {
        item_name: `Boleto ${ticketType}`,
        item_category: 'Tickets',
        price: price,
        currency: 'USD'
    });
}

// Agregar event listeners cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones de compra
    const buyButtons = document.querySelectorAll('.buy-button');
    
    // Agregar event listener a cada botón
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const ticketType = this.getAttribute('onclick').includes('vip') ? 'VIP' : 'General';
            const price = ticketType === 'VIP' ? 150 : 50;
            
            trackPurchaseClick(ticketType, price);
        });
    });
});
