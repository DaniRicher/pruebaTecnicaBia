This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Prueba técnica Bia

Para resolver el reto, propuse una arquitectura modular utilizando Next.js en la versión 15 siguiendo alguna de las directrices del framework

## Estructura del proyecto

Font: Se utilizo nunitoSans estas fuentes ya vienen en Next.js.

lib/: configuraciones y utilidades globales, como fontawesome.ts para la gestión de iconos.

src/app/: Contiene las páginas, layouts y rutas del proyecto.

home/countries: Página principal que muestra el listado de países.

home/country/[name]: Ruta dinámica para mostrar el detalle de un país.

src/components/: Componentes reutilizables que pueden usarse en distintas partes del proyecto (como Header, ButtonBack, DarkMenuToggle).

src/countries/: Módulo específico del dominio “países”, que incluye:

src/countries/components: Componentes que solo tienen sentido en el contexto de países (como CountryCard y CountryGrid).

interfaces: tipado TypeScript para las respuestas de la API.

##  Generalidades de cómo se resolvió

Consumo de API: Utilicé la forma nativa de javascript para hacer peticiones.

Componentes: Creé componentes reutilizables como CountryCard, CountryGrid, Header, ButtonBack y DarkMenuToggle para poder tener mas control sobre los componentes.

Dark mode: Implemente el botón opcional de darkMode

Responsive design: La maquetación está pensada para adaptarse a dispositivos móviles y escritorios.

Tipado: Se definieron interfaces TypeScript para tipar correctamente las respuestas de la API.

Estilo: Se agregaron estilos globales y específicos por componente para mantener coherencia visual.
