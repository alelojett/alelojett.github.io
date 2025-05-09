## Implementación de Analytics

### Google Tag Manager
- El código de GTM está centralizado en `gtm/gtm-scripts.html`
- Se carga dinámicamente en todas las páginas mediante fetch
- ID de Contenedor: `GTM-XXXXXX`

### Eventos Implementados
1. **Selección de Boleto** (`select_item`)
   - Disparador: Click en botón "Comprar"
   - Parámetros:
     - `item_name`: Tipo de boleto (General/VIP)
     - `item_category`: "Tickets"
     - `price`: Precio del boleto
     - `currency`: "USD"

## Ruta para entrar a la pagina:
https://alelojett.github.io

## Páginas y Funcionalidades

### Página Principal (index.html)
- Muestra opciones de boletos disponibles
- Implementa tracking de clicks en botones de compra
- Tipos de boletos:
  - General: $50
  - VIP: $150

### Página de Checkout (checkout.html)
- Formulario de compra
- Captura información del comprador
- Validación de campos requeridos

### Página de Confirmación (thank-you.html)
- Muestra resumen de la compra
- Confirma la transacción al usuario
- Muestra detalles del pedido

## Configuración del Proyecto

### Requisitos Previos
1. Cuenta de Google Tag Manager
2. Cuenta de Google Analytics 4
3. Servidor web para alojar los archivos

### Instalación
1. Clonar el repositorio
2. Actualizar el ID de GTM en `gtm/gtm-scripts.html`
3. Verificar que todas las rutas de archivos sean correctas
4. Subir al servidor web

### Verificación de Implementación
1. Usar Vista previa de GTM para verificar la implementación
2. Comprobar en GA4:
   - Eventos personalizados
   - Conversiones
   - Informes en tiempo real

## Mantenimiento
- Revisar periódicamente el debug view de GA4
- Verificar que los eventos se registren correctamente
- Actualizar los scripts de GTM según sea necesario

## Seguridad
- No se almacenan datos sensibles de usuarios
- Los datos de analytics se manejan según políticas de privacidad de Google
- Implementación de noscript para usuarios sin JavaScript

## Soporte
Para preguntas o problemas relacionados con la implementación de analytics, contactar al equipo de desarrollo.

## Licencia
© 2025 Concierto Estelar. Todos los derechos reservados.
