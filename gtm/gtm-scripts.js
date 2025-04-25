// Configuración de contenedores GTM
const gtmContainers = [
    'GTM-K2W4BZGL',
    'GTM-XXXXXXX' // Reemplaza con tu segundo ID de GTM
];

// Función para inicializar un contenedor GTM
function initGTM(containerId) {
    (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer',containerId);
}

// Función para generar los noscript
function generateNoscriptTags() {
    const noscriptContainer = document.createElement('div');
    noscriptContainer.id = 'gtm-noscript-container';
    
    gtmContainers.forEach(containerId => {
        const noscript = document.createElement('noscript');
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.googletagmanager.com/ns.html?id=${containerId}`;
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
gtmContainers.forEach(containerId => {
    initGTM(containerId);
});

// Generar los noscript cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', generateNoscriptTags); 