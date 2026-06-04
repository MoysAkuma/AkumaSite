# AkumaSite - Personal Portfolio

Sitio web personal construido con Astro y Tailwind CSS, desplegado en GitHub Pages.

**🎌 NUEVO: Tema inspirado en Manga Japonés** - Diseño único con bordes gruesos, efectos de tinta, patrones de screentone y tipografía de impacto característicos del manga.

## 🚀 Características

- ✨ Diseño moderno y responsive
- 🎌 **Tema inspirado en manga japonés** con efectos visuales únicos
- 🎨 Tailwind CSS personalizado con colores y utilidades manga
- 📝 Contenido editable mediante archivos JSON
- 🚀 Deploy automático a GitHub Pages
- 📱 Totalmente responsive
- ⚡ Rendimiento optimizado con Astro
- 🎯 Sin backend - 100% estático
- 💥 Efectos especiales: paneles manga, burbujas de diálogo, texto de impacto

## 🎌 Tema Manga

Este sitio utiliza un sistema de diseño inspirado en el manga japonés que incluye:

- **Paneles estilo manga** con bordes gruesos y sombras características
- **Burbujas de diálogo** para destacar mensajes
- **Texto de impacto** (onomatopeyas) para títulos dramáticos
- **Patrones de screentone** (puntos característicos del manga)
- **Paleta de colores** blanco/negro con acentos rojos
- **Efectos especiales** como líneas de velocidad y líneas de acción
- **Botones manga** con sombras sólidas y bordes definidos

### Ver la Guía de Estilos

Visita `/manga-guide` en tu sitio para ver todos los componentes y estilos disponibles, o consulta [MANGA-THEME.md](./MANGA-THEME.md) para documentación completa.

## 📁 Estructura del Proyecto

```
/
├── public/              # Archivos estáticos
│   └── favicon.svg
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── PageHeader.astro
│   │   └── MangaStyleGuide.astro  # Guía de estilos manga
│   ├── data/           # Archivos JSON con contenido editable
│   │   ├── profile.json
│   │   ├── portfolio.json
│   │   ├── projects.json
│   │   ├── services.json
│   │   └── hobbies.json
│   ├── layouts/        # Layouts de página
│   │   └── BaseLayout.astro
│   ├── styles/         # Estilos globales
│   │   └── manga-global.css  # Estilos del tema manga
│   └── pages/          # Páginas del sitio
│       ├── index.astro
│       ├── portfolio.astro
│       ├── projects.astro
│       ├── services.astro
│       ├── hobbies.astro
│       └── manga-guide.astro  # Guía de estilos
├── astro.config.mjs
├── tailwind.config.mjs  # Configuración con tema manga
├── MANGA-THEME.md      # Documentación del tema manga
└── package.json
```

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/MoysAkuma/AkumaSite.git
cd AkumaSite
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## 🎨 Personalizar el Tema Manga

### Cambiar Colores

Edita `tailwind.config.mjs` para personalizar la paleta de colores manga:

```javascript
theme: {
  extend: {
    colors: {
      manga: {
        black: '#0a0a0a',
        // Personaliza más colores aquí
      },
      accent: {
        red: '#d32f2f',
        // Cambia el color de acento principal
      },
    },
  },
}
```

### Usar Clases Manga

Ejemplos de clases disponibles:

```html
<!-- Panel estilo manga -->
<div class="manga-panel">Contenido</div>

<!-- Botón manga -->
<button class="manga-button-red">⚡ Acción</button>

<!-- Texto de impacto -->
<h1 class="impact-text">BOOM!</h1>

<!-- Burbuja de diálogo -->
<div class="speech-bubble">¡Hola!</div>

<!-- Efectos de fondo -->
<div class="screentone-light">Con patrón de puntos</div>
```

Consulta [MANGA-THEME.md](./MANGA-THEME.md) para ver todas las clases y ejemplos.

## 📝 Personalización de Contenido


### 2. Información Personal

Edita `src/data/profile.json`:
```json
{
  "name": "Tu Nombre",
  "title": "Tu Título",
  "email": "tu@email.com",
  // ...
}
```

### 3. Portfolio

Edita `src/data/portfolio.json` para añadir o modificar trabajos.

### 4. Proyectos

Edita `src/data/projects.json` para añadir tus proyectos de código abierto.

### 5. Servicios

Edita `src/data/services.json` para personalizar los servicios que ofreces.

### 6. Hobbies

Edita `src/data/hobbies.json` para mostrar tus intereses personales.

## 🚀 Deploy a GitHub Pages

### Método Automático (Recomendado)

1. Crea un repositorio en GitHub
2. Sube tu código:
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/MoysAkuma/AkumaSite.git
git push -u origin main
```

3. Ve a Settings → Pages en tu repositorio de GitHub
4. En "Source", selecciona "GitHub Actions"
5. El workflow se ejecutará automáticamente y tu sitio estará disponible en `https://MoysAkuma.github.io/AkumaSite`

### Deploy Manual

```bash
npm run build
# Sube el contenido de la carpeta dist/ a tu servidor
```

## 📦 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo en http://localhost:4321
- `npm run build` - Construye el sitio para producción
- `npm run preview` - Previsualiza el build de producción

## 🌐 Tecnologías

- [Astro](https://astro.build/) - Framework web
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [GitHub Pages](https://pages.github.com/) - Hosting
- Tema Manga personalizado con efectos CSS únicos

## 🎯 Rutas del Sitio

- `/` - Página de inicio
- `/portfolio` - Galería de trabajos
- `/projects` - Proyectos de código abierto
- `/services` - Servicios ofrecidos
- `/hobbies` - Intereses personales

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo para tu propio sitio personal.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría realizar.

---

Hecho con ❤️ usando Astro y Tailwind CSS
