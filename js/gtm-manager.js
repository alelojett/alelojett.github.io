// Configuración de GTM tags
const gtmConfig = [
    {
        id: 'GTM-W9M7L2RV',
        name: 'Iohan',
        dataLayer: 'dataLayerIohan'
    },
    {
        id: 'GTM-MZKXDKWP',
        name: 'Omar',
        dataLayer: 'dataLayerOmar'
    },
    {
        id: 'GTM-P4T82SZ2',
        name: 'Valeria',
        dataLayer: 'dataLayerValeria'
    },
    {
        id: 'GTM-K2W4BZGL',
        name: 'Alexis',
        dataLayer: 'dataLayerAlexis'
    }
];

// Inicializar dataLayers y configurar eventos iniciales
gtmConfig.forEach(config => {
    window[config.dataLayer] = window[config.dataLayer] || [];
    window[config.dataLayer].push({
        'event': 'gtm.js',
        'gtm.start': new Date().getTime()
    });
});

// Función para insertar los scripts de GTM en el head
function insertGTMScripts() {
    const head = document.head;
    
    gtmConfig.forEach(config => {
        // Crear el script de GTM
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtm.js?id=${config.id}&l=${config.dataLayer}`;
        
        // Insertar el script al principio del head
        head.insertBefore(script, head.firstChild);
    });
}

// Función para insertar los noscript de GTM en el body
function insertGTMNoscripts() {
    const body = document.body;
    
    gtmConfig.forEach(config => {
        const noscript = document.createElement('noscript');
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.googletagmanager.com/ns.html?id=${config.id}&l=${config.dataLayer}`;
        iframe.height = "0";
        iframe.width = "0";
        iframe.style.display = "none";
        iframe.style.visibility = "hidden";
        noscript.appendChild(iframe);
        body.insertBefore(noscript, body.firstChild);
    });
}

// Función para inicializar GTM
function initializeGTM() {
    // Asegurarse de que el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            insertGTMScripts();
            insertGTMNoscripts();
        });
    } else {
        insertGTMScripts();
        insertGTMNoscripts();
    }
}

// Inicializar GTM
initializeGTM(); 