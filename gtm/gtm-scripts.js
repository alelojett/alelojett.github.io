// Configuración de contenedores GTM
const gtmContainers = [
    {
        id: 'GTM-K2W4BZGL',
        name: 'dataLayer1'  // DataLayer para Alexis
    },
    {
        id: 'GTM-W9M7L2R',
        name: 'dataLayer2'  // DataLayer para Iohan
    },
    {
        id: 'GTM-MZKXDKWP',
        name: 'dataLayer3'  // DataLayer para Omar
    },
    {
        id: 'GTM-P4T82SZ2',
        name: 'dataLayer4'  // DataLayer para Valeria
    }
];

// Función para inicializar un contenedor GTM
function initGTM(container) {
    (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
    })(window,document,'script',container.name,container.id);
}

// Función para generar los noscript
function generateNoscriptTags() {
    const noscriptContainer = document.createElement('div');
    noscriptContainer.id = 'gtm-noscript-container';
    
    gtmContainers.forEach(container => {
        const noscript = document.createElement('noscript');
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.googletagmanager.com/ns.html?id=${container.id}`;
        iframe.height = '0';
        iframe.width = '0';
        iframe.style.display = 'none';
        iframe.style.visibility = 'hidden';
        
        noscript.appendChild(iframe);
        noscriptContainer.appendChild(noscript);
    });
    
    // Insertar los noscript justo después de la apertura del body
    document.body.insertBefore(noscriptContainer, document.body.firstChild);
}

// Inicializar todos los contenedores
gtmContainers.forEach(container => {
    initGTM(container);
});

// Generar los noscript cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generateNoscriptTags);
} else {
    generateNoscriptTags();
} 