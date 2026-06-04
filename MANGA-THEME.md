# 🎌 Tema Manga Japonés - AkumaSite

## Descripción General

Este sitio web utiliza un tema inspirado en el **manga japonés**, con elementos visuales característicos del estilo de cómic japonés, incluyendo bordes gruesos, efectos de tinta, patrones de screentone, y tipografía de impacto.

## 🎨 Paleta de Colores

### Colores Base (Manga)
- **manga-black**: `#0a0a0a` - Negro principal
- **manga-deep-black**: `#000000` - Negro puro
- **manga-ink**: `#1a1a1a` - Tinta
- **manga-dark-gray**: `#2d2d2d` - Gris oscuro
- **manga-medium-gray**: `#6b6b6b` - Gris medio
- **manga-light-gray**: `#a8a8a8` - Gris claro
- **manga-paper**: `#f5f5f0` - Papel manga
- **manga-cream**: `#fffef7` - Crema
- **manga-white**: `#ffffff` - Blanco puro

### Colores de Acento (Accent)
- **accent-red**: `#d32f2f` - Rojo principal
- **accent-blood-red**: `#b71c1c` - Rojo sangre
- **accent-bright-red**: `#ff1744` - Rojo brillante
- **accent-dark-red**: `#8b0000` - Rojo oscuro

### Colores de Tono (Tone)
- **tone-dot-light**: `#e8e8e8` - Puntos claros
- **tone-dot-medium**: `#c4c4c4` - Puntos medios
- **tone-dot-dark**: `#9e9e9e` - Puntos oscuros

## 🖋️ Clases CSS Personalizadas

### Efectos de Screentone (Puntos Característicos del Manga)

```html
<!-- Screentone claro -->
<div class="screentone-light">...</div>

<!-- Screentone medio -->
<div class="screentone-medium">...</div>

<!-- Screentone oscuro -->
<div class="screentone-dark">...</div>
```

### Paneles de Manga

```html
<!-- Panel básico con borde grueso y sombra -->
<div class="manga-panel">
  Contenido del panel
</div>

<!-- Panel con efecto de inclinación -->
<div class="manga-panel-skewed">
  Contenido del panel inclinado
</div>

<!-- Panel con efecto de zoom al hover -->
<div class="manga-panel manga-zoom">
  Contenido con efecto zoom
</div>
```

### Burbujas de Diálogo

```html
<!-- Burbuja de diálogo estilo manga -->
<div class="speech-bubble">
  ¡Texto de diálogo!
</div>
```

### Texto de Impacto (Onomatopeyas)

```html
<!-- Texto de impacto con fondo -->
<h1 class="impact-text">BOOM!</h1>

<!-- Texto de impacto solo con borde -->
<h1 class="impact-text-outline">POW!</h1>

<!-- Texto con borde negro (típico de manga) -->
<p class="manga-text-outline">Texto con borde negro</p>
```

### Botones Estilo Manga

```html
<!-- Botón blanco con borde negro -->
<button class="manga-button">Botón Normal</button>

<!-- Botón rojo con borde negro -->
<button class="manga-button-red">Botón de Acción</button>
```

### Efectos Especiales

```html
<!-- Líneas de velocidad -->
<div class="speed-lines">
  Contenido con líneas de velocidad
</div>

<!-- Líneas de acción -->
<div class="action-lines">
  Contenido con líneas de acción
</div>

<!-- Líneas de enfoque radiales -->
<div class="focus-lines">
  Contenido con líneas de enfoque
</div>

<!-- Efecto de tinta salpicada -->
<div class="ink-splatter">
  Contenido con efecto de tinta
</div>

<!-- Fondo de papel manga con textura -->
<div class="manga-paper">
  Contenido con textura de papel
</div>
```

### Animaciones

```html
<!-- Animación de aparición de panel -->
<div class="panel-appear">
  Panel que aparece con animación
</div>

<!-- Animación de zoom -->
<div class="manga-zoom">
  Elemento que hace zoom al hover
</div>
```

## 🎭 Sombras Manga (Tailwind)

El tema incluye sombras personalizadas de Tailwind:

```html
<!-- Sombra pequeña -->
<div class="shadow-manga-sm">...</div>

<!-- Sombra normal -->
<div class="shadow-manga">...</div>

<!-- Sombra grande -->
<div class="shadow-manga-lg">...</div>

<!-- Sombra extra grande -->
<div class="shadow-manga-xl">...</div>

<!-- Sombra interna -->
<div class="shadow-inset-manga">...</div>
```

## 📏 Bordes Personalizados

```html
<!-- Bordes de 3px, 5px, 6px -->
<div class="border-3">...</div>
<div class="border-5">...</div>
<div class="border-6">...</div>
```

## 🔤 Tipografía

El tema usa las siguientes fuentes:

- **Títulos de Impacto**: Impact, Haettenschweiler, Arial Black
- **Texto General**: Arial, Helvetica, sans-serif
- **Fuentes Google**: Bangers, Permanent Marker, Rock Salt (cargadas en BaseLayout)

Clases de fuente disponibles:
- `font-manga` - Para títulos de impacto
- `font-manga-text` - Para texto normal

## 🎨 Uso de Colores en Tailwind

```html
<!-- Fondo -->
<div class="bg-manga-black">Fondo negro</div>
<div class="bg-manga-cream">Fondo crema</div>
<div class="bg-accent-red">Fondo rojo</div>

<!-- Texto -->
<p class="text-manga-black">Texto negro</p>
<p class="text-manga-light-gray">Texto gris claro</p>
<p class="text-accent-red">Texto rojo</p>

<!-- Bordes -->
<div class="border-manga-black">Borde negro</div>
<div class="border-accent-red">Borde rojo</div>
```

## 🎯 Ejemplos de Uso Completo

### Tarjeta de Producto Estilo Manga

```html
<div class="manga-panel manga-zoom p-6">
  <h3 class="text-2xl font-black uppercase text-manga-black mb-4">
    Producto
  </h3>
  <p class="text-manga-dark-gray font-medium mb-4">
    Descripción del producto con estilo manga.
  </p>
  <button class="manga-button-red w-full">
    ⚡ Comprar Ahora
  </button>
</div>
```

### Sección Hero Estilo Manga

```html
<section class="py-20 relative overflow-hidden focus-lines">
  <div class="absolute inset-0 screentone-light opacity-10"></div>
  <div class="max-w-7xl mx-auto px-4 relative z-10">
    <h1 class="text-6xl font-black text-manga-black mb-6 impact-text">
      <span class="inline-block transform -skew-x-6 bg-accent-red px-6 py-2 shadow-manga-lg border-5 border-manga-black">
        Título Principal
      </span>
    </h1>
    <div class="speech-bubble mx-auto max-w-xl">
      <p class="text-xl text-manga-black font-bold">
        ¡Mensaje importante!
      </p>
    </div>
  </div>
</section>
```

### Botones de Acción

```html
<div class="flex gap-4">
  <button class="manga-button-red px-8 py-3">
    ⚡ Acción Principal
  </button>
  <button class="manga-button px-8 py-3">
    📋 Acción Secundaria
  </button>
</div>
```

## 🚀 Consejos de Diseño

1. **Usa bordes gruesos**: Los bordes de 3-6px son característicos del manga
2. **Contraste alto**: Blanco y negro con toques de rojo
3. **Tipografía bold**: Usa pesos de fuente bold/black para títulos
4. **Mayúsculas**: Los títulos en mayúsculas se ven más impactantes
5. **Emojis**: Añaden un toque visual rápido y expresivo
6. **Patrones de screentone**: Úsalos con opacidad baja para fondos sutiles
7. **Sombras duras**: Las sombras manga son sólidas, no difuminadas
8. **Efectos con moderación**: No sobrecargues con efectos especiales

## 📝 Archivos del Tema

- **Configuración Tailwind**: `tailwind.config.mjs`
- **Estilos Globales**: `src/styles/manga-global.css`
- **Layout Base**: `src/layouts/BaseLayout.astro`

## 🔄 Actualizaciones Futuras

Ideas para expandir el tema:
- Más variaciones de burbujas de diálogo
- Efectos de onomatopeyas animadas
- Más patrones de screentone
- Transiciones de panel a panel
- Efectos de "líneas de concentración"
- Más variaciones de sombras manga

---

**¡Disfruta creando con el estilo manga! ⚡🎌**
