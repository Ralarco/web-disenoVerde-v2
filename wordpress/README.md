# Diseño Verde - Módulos HTML para Elementor

## ¿Cómo usar estos archivos?

Cada archivo `.html` contiene una sección completa del sitio web con **todos los estilos CSS incrustados** (dentro de `<style>`) y **JavaScript** (dentro de `<script>`), listos para ser copiados directamente en un módulo HTML de Elementor.

### Instrucciones:

1. En tu página de Elementor, agrega un widget **"HTML"** (o "Código HTML personalizado")
2. Abre el archivo `.html` correspondiente a la sección que quieres agregar
3. Copia **TODO** el contenido del archivo (Ctrl+A, Ctrl+C)
4. Pégalo dentro del widget HTML de Elementor
5. Repite para cada sección en el orden indicado

### Orden de las secciones:

| # | Archivo | Sección |
|---|---------|---------|
| 0 | `00_base-fonts.html` | **Cargar primero** - Fuentes y estilos base globales |
| 1 | `01_header.html` | Barra de navegación superior fija |
| 2 | `02_hero.html` | Sección hero con video de fondo |
| 2b| `02b_politica-resumen.html` | Invitación a Política de Calidad |
| 3 | `03_servicios.html` | Tarjetas de servicios |
| 4 | `04_about.html` | Sección "Pasión por el verde" |
| 4b| `04_about_v2.html` | Sección "Misión" (alternativa con imagen de fondo) |
| 5 | `05_contacto.html` | Formulario de contacto |
| 6 | `06_footer.html` | Pie de página |
| 7 | `07_politica-calidad.html` | Página: Política de Calidad Integrada (SGI) |

### Notas importantes:

- **`00_base-fonts.html`** debe ir PRIMERO. Contiene las fuentes Google Fonts, los iconos y las variables CSS globales que usan todas las secciones.
- Cada sección incluye sus propios estilos para ser independiente, pero depende de las fuentes del archivo base.
- Los dividers (separadores curvos SVG) están incluidos al inicio/final de cada sección según corresponda.
- Las imágenes usan URLs absolutas o rutas que deberás actualizar según tu instalación de WordPress.
- El video del hero (`hero_video.mp4`) deberá subirse a tu biblioteca de medios de WordPress y actualizar la URL.

### Imágenes a subir a WordPress:

Sube estas imágenes a tu biblioteca de medios y reemplaza las rutas en los archivos:
- `images/hoja.svg` - Logo animado del splash
- `images/logo-footer.png` - Logo del header
- `images/contact_section_img.jpg` - Imagen de la sección contacto
- `video/hero_video.mp4` - Video del hero
