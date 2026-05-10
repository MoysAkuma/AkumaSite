# AkumaSite - Personal Portfolio

Sitio web personal construido con Astro y Tailwind CSS, desplegado en GitHub Pages.

## 🚀 Características

- ✨ Diseño moderno y responsive
- 🎨 Tailwind CSS para estilos
- 📝 Contenido editable mediante archivos JSON
- 🚀 Deploy automático a GitHub Pages
- 📱 Totalmente responsive
- ⚡ Rendimiento optimizado con Astro
- 🎯 Sin backend - 100% estático

## 📁 Estructura del Proyecto

```
/
├── public/              # Archivos estáticos
│   └── favicon.svg
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   └── PageHeader.astro
│   ├── data/           # Archivos JSON con contenido editable
│   │   ├── profile.json
│   │   ├── portfolio.json
│   │   ├── projects.json
│   │   ├── services.json
│   │   └── hobbies.json
│   ├── layouts/        # Layouts de página
│   │   └── BaseLayout.astro
│   └── pages/          # Páginas del sitio
│       ├── index.astro
│       ├── portfolio.astro
│       ├── projects.astro
│       ├── services.astro
│       └── hobbies.astro
├── astro.config.mjs
├── tailwind.config.mjs
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

## 📝 Personalización


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
git remote add origin https://github.com/tuusuario/AkumaSite.git
git push -u origin main
```

3. Ve a Settings → Pages en tu repositorio de GitHub
4. En "Source", selecciona "GitHub Actions"
5. El workflow se ejecutará automáticamente y tu sitio estará disponible en `https://tuusuario.github.io/AkumaSite`

### Deploy Manual

```bash
npm run build
# Sube el contenido de la carpeta dist/ a tu servidor
```

## 🎨 Personalizar Colores

Edita `tailwind.config.mjs` para cambiar la paleta de colores:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Personaliza tus colores aquí
      },
    },
  },
}
```

## 📦 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye el sitio para producción
- `npm run preview` - Previsualiza el build de producción

## 🌐 Tecnologías

- [Astro](https://astro.build/) - Framework web
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [GitHub Pages](https://pages.github.com/) - Hosting

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo para tu propio sitio personal.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría realizar.

---

Hecho con ❤️ usando Astro y Tailwind CSS
