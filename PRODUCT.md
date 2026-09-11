# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Marcas urbanas/streetwear, sellos musicales y organizadores de eventos/festivales (ej. Ghetto Running Club, Zero, Lumen Records, Festival Óxido, Sonora) que buscan comisionar producción audiovisual y fotográfica con una estética editorial marcada. Llegan al sitio evaluando si el estilo visual de Low Exposure encaja con su marca antes de contactar.

## Product Purpose

Portafolio de una sola página para Low Exposure (Jon Franco), productor audiovisual y fotógrafo en Medellín. Existe para mostrar trabajo seleccionado (videoclips, campañas de marca, sesiones fotográficas, fotografía 3D) y convertir a quien lo visita en un contacto directo (email, Instagram, WhatsApp).

## Positioning

Dirección de color y grading distintivo como firma — cada proyecto lleva una paleta saturada y con carácter, no un look genérico de plantilla. Esto se extiende a fotografía 3D como parte del servicio, algo que la mayoría de productores/fotógrafos de este segmento no ofrece.

## Operating Context

Sitio estático de una sola página (TanStack Start + React + Tailwind v4), bilingüe (ES/EN) con toggle en el nav. Sin CMS ni backend: el contenido (proyectos, copy) vive hardcodeado en `src/routes/index.tsx`. Contacto vía mailto, Instagram y WhatsApp — no hay formulario ni backend de leads.

## Capabilities and Constraints

- Servicios confirmados: dirección y producción audiovisual, dirección de fotografía y cámara, color y post-producción, **fotografía 3D**.
- Trabajo mostrado hoy: 1 videoclip musical (Lumen Records), 2 campañas de marca (Abalas/Ghetto Running Club, Zero), 2 sesiones fotográficas (Strange Girl, Skate), más 2 tarjetas de "Trabajos seleccionados" sin imagen propia aún (Contenido Redes/Sonora, Campañas/Festival Óxido — usan solo gradiente de acento, no fotos reales).
- Sin testimonios, precios, ni casos de estudio con métricas — no inventar estos datos.
- Imágenes de proyectos son fotografía real de sesiones/campañas (no placeholders); deben tratarse como evidencia real, no reemplazarse por stock.

## Brand Commitments

- Nombre de marca: **Low Exposure**. Wordmark actual en mayúsculas en el nav ("LOW EXPOSURE").
- Contacto: low3xposure@gmail.com, Instagram @low_3xposure, WhatsApp.
- Imagen `src/assets/hero-fluid.png` (colores fluidos tipo tinta/aurora — naranjas, rojos, azules, verdes sobre negro) es referencia estética vinculante explícita del usuario, no solo asset decorativo: debe ser el hilo conductor de la identidad visual de todo el sitio.
- Titular actual ("Historias que se derraman en color") apunta directamente a esa metáfora de fluidos/color — preservar el espíritu si el copy se ajusta.

## Evidence on Hand

- Fotografía real de campañas y sesiones en `src/assets/` (JPG/WEBP, resolución completa).
- `src/styles.css` ya define un sistema de tokens en OKLCH derivado del hero (magenta, cyan, lime, amber, violet) con utilidades `text-spectrum`, `bg-spectrum`, `glow`, `card-fluid` — evidencia de una dirección visual iniciada pero subutilizada fuera del hero.
- Sin testimonios, prensa, ni casos de estudio con resultados — ausencia a respetar, no rellenar con contenido inventado.

## Product Principles

1. El color con carácter (derivado de hero-fluid.png) es la firma de marca — debe sentirse presente en todo el sitio, no solo en el hero.
2. La fotografía real es la prueba del trabajo — el diseño debe realzarla, nunca competir con ella ni taparla con efectos.
3. Servicio integral: de la idea a la post-producción en una sola mano, incluyendo fotografía 3D como diferenciador real.
4. Bilingüe por diseño (ES/EN) — cualquier cambio de layout debe funcionar en ambos idiomas sin romper jerarquía.
5. Sitio ligero de una sola página sin backend — las mejoras deben mantenerse dentro de ese modelo (sin asumir CMS, base de datos o autenticación).
