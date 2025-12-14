# Guía de Personalización del Portfolio

Esta guía te ayudará a personalizar tu portfolio paso a paso.

## 🎯 Paso 1: Información Personal

### Cambiar tu nombre
Archivo: `index.html` (línea 38)
```html
<h1 class="hero-name">Tu Nombre</h1>
```
Reemplaza "Tu Nombre" por tu nombre completo.

### Cambiar tu título/profesión
Archivo: `index.html` (línea 39)
```html
<p class="hero-subtitle">// Web Designer<br>Art Director</p>
```
Modifica según tu profesión (ej: "// Frontend Developer<br>UI/UX Designer")

### Actualizar email de contacto
Archivo: `index.html` (línea 147)
```html
<a href="mailto:tu@email.com" class="btn-contact">Contáctame</a>
```
Cambia "tu@email.com" por tu email real.

## 🎨 Paso 2: Colores

### Cambiar el color de acento
Archivo: `css/styles.css` (línea 12)
```css
--color-accent: #ff0000;  /* Rojo por defecto */
```

**Opciones sugeridas:**
- Azul: `#0066ff`
- Verde: `#00ff88`
- Púrpura: `#8800ff`
- Naranja: `#ff6600`
- Rosa: `#ff0088`

### Cambiar fondo del Hero
Si prefieres un color sólido en lugar de imagen:
Archivo: `css/styles.css` (línea 120-122)
```css
.hero-image {
    background: #2c3e50;  /* Color sólido */
    /* Comenta o elimina las líneas de background-image */
}
```

## 📸 Paso 3: Imágenes

### Agregar tu foto de perfil
1. Guarda tu imagen en `images/hero-image.jpg`
2. Dimensiones recomendadas: 1920x1080px
3. Se aplicará filtro de escala de grises automáticamente

### Agregar imágenes de proyectos
1. Guarda imágenes en `images/`
2. En `index.html`, busca la sección Projects (línea 120+)
3. Agrega el estilo inline:
```html
<div class="project-image" style="background-image: url('images/mi-proyecto.jpg');"></div>
```

## 🔗 Paso 4: Redes Sociales

Archivo: `index.html` (líneas 20-32)
```html
<a href="https://linkedin.com/in/tu-usuario" class="social-link">
<a href="https://twitter.com/tu-usuario" class="social-link">
<a href="https://instagram.com/tu-usuario" class="social-link">
```

Agrega más redes sociales si lo deseas:
```html
<a href="https://github.com/tu-usuario" class="social-link">
    <i class="fab fa-github"></i>
    <span>GitHub</span>
</a>
```

## 📝 Paso 5: Contenido de Secciones

### About Section
Archivo: `index.html` (líneas 45-52)
Personaliza tu descripción profesional.

### Services Section
Archivo: `index.html` (líneas 58-130)
Modifica los servicios que ofreces:
- Cambia títulos
- Actualiza descripciones
- Añade o elimina servicios

### Projects Section
Archivo: `index.html` (líneas 135-155)
Para cada proyecto, actualiza:
```html
<h3>Nombre del Proyecto</h3>
<p>Branding, Web Design</p>
```

## 🔤 Paso 6: Tipografía

### Cambiar la fuente
Archivo: `css/styles.css` (línea 19)
```css
font-family: 'Tu Fuente', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Fuentes de Google Fonts recomendadas:**
1. Inter: moderna y limpia
2. Poppins: bold y llamativa
3. Montserrat: elegante
4. Work Sans: profesional

Agrega en `index.html` (dentro de `<head>`):
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;900&display=swap" rel="stylesheet">
```

## 📱 Paso 7: Navegación

Archivo: `index.html` (líneas 11-17)
Personaliza los enlaces del menú:
```html
<li><a href="#about">Sobre Mí</a></li>
<li><a href="#design">Servicios</a></li>
```

## ✨ Paso 8: Animaciones

### Desactivar cursor personalizado
Si no quieres el cursor personalizado, comenta en `js/script.js`:
```javascript
// Líneas 38-51 - Comentar todo el bloque del cursor
```

### Ajustar velocidad de animaciones
Archivo: `css/styles.css`
Busca `transition` y modifica el tiempo:
```css
transition: all 0.3s;  /* Cambia 0.3s por el tiempo deseado */
```

## 🎬 Paso 9: Meta Tags y SEO

Archivo: `index.html` (líneas 4-6)
```html
<meta name="description" content="Tu descripción aquí - máximo 160 caracteres">
<title>Tu Nombre - Portfolio</title>
```

Agrega más meta tags:
```html
<meta name="keywords" content="diseñador web, portfolio, tu nombre">
<meta name="author" content="Tu Nombre">
<meta property="og:title" content="Tu Nombre - Portfolio">
<meta property="og:description" content="Tu descripción">
<meta property="og:image" content="images/preview.jpg">
```

## 🚀 Paso 10: Deploy

### Opción 1: GitHub Pages
1. Sube tu proyecto a GitHub
2. Ve a Settings > Pages
3. Selecciona la rama main
4. Tu sitio estará en: `https://tu-usuario.github.io/tu-repo`

### Opción 2: Netlify
1. Arrastra la carpeta del proyecto a netlify.com/drop
2. Tu sitio estará publicado en segundos

### Opción 3: Vercel
1. Importa desde GitHub
2. Deploy automático

## 💡 Tips Finales

1. **Optimiza las imágenes** antes de subirlas (usa TinyPNG)
2. **Prueba en diferentes navegadores** (Chrome, Firefox, Safari)
3. **Verifica la versión móvil** en dispositivos reales
4. **Actualiza regularmente** con nuevos proyectos
5. **Añade Google Analytics** para ver visitantes

## 🆘 Problemas Comunes

### Las imágenes no se ven
- Verifica que la ruta sea correcta: `images/nombre-imagen.jpg`
- Revisa que el nombre del archivo coincida exactamente (mayúsculas/minúsculas)

### Los colores no cambian
- Limpia la caché del navegador (Ctrl+F5)
- Verifica que estés editando el archivo correcto

### El menú no funciona
- Asegúrate de que los `href` coincidan con los `id` de las secciones
- Ejemplo: `<a href="#about">` debe apuntar a `<section id="about">`

---

¿Necesitas ayuda? Revisa los comentarios en el código o consulta la documentación.

