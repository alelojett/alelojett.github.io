// Shared dataLayer name used by all GTM containers
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': 'gtm.js',
    'gtm.start': new Date().getTime()
});

// List of GTM container IDs to load
const gtmContainerIDs = [
    'GTM-W9M7L2RV', // Iohan
    'GTM-MZKXDKWP', // Omar
    'GTM-P4T82SZ2', // Valeria
    'GTM-K2W4BZGL'  // Alexis
];

// Function to inject GTM <script> tags into <head>
function insertGTMScripts() {
    const head = document.head;
    gtmContainerIDs.forEach(id => {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
        head.insertBefore(script, head.firstChild);
    });
}

// Function to inject GTM <noscript> fallback into <body>
function insertGTMNoscripts() {
    const body = document.body;
    gtmContainerIDs.forEach(id => {
        const noscript = document.createElement('noscript');
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.googletagmanager.com/ns.html?id=${id}`;
        iframe.height = "0";
        iframe.width = "0";
        iframe.style.display = "none";
        iframe.style.visibility = "hidden";
        noscript.appendChild(iframe);
        body.insertBefore(noscript, body.firstChild);
    });
}

// Wait until DOM is ready before injecting GTM
function initializeGTM() {
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

initializeGTM();