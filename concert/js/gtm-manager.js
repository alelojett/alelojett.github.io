// Configuración de GTM tags
const gtmConfig = [
    {
        id: 'GTM-5SGFTGB9',
        name: 'Iohan'
    },
    {
        id: 'GTM-5L7MRV3S',
        name: 'Omar'
    },
    {
        id: 'GTM-5V4G2KHR',
        name: 'Valeria'
    },
    {
        id: 'GTM-K2W4BZGL',
        name: 'Alexis'
    }
];

// Inicializar dataLayer
window.dataLayer = window.dataLayer || [];

// Función para insertar los scripts de GTM en el head
function insertGTMScripts() {
    const head = document.head;
    
    gtmConfig.forEach(config => {
        // Crear el script de GTM
        const script = document.createElement('script');
        script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${config.id}');`;
        
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
        iframe.src = `https://www.googletagmanager.com/ns.html?id=${config.id}`;
        iframe.height = "0";
        iframe.width = "0";
        iframe.style.display = "none";
        iframe.style.visibility = "hidden";
        noscript.appendChild(iframe);
        body.insertBefore(noscript, body.firstChild);
    });
}

// Inicializar GTM inmediatamente
insertGTMScripts();
insertGTMNoscripts(); 