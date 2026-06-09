# Archivo de Referencias y Atribuciones (REFERENCIAS.md)

## Universidad de Costa Rica
**Sede Regional de Guanacaste | Recinto de Liberia** **Carrera:** Bachillerato en Informática Empresarial  
**Curso:** IF7102 - Multimedios (Ciclo I-2026)  
**Docente:** Lic. Alonso Chavarría Cubero  
**Estudiante:** Steven Rodríguez  
**Proyecto:** Warehouse CR — Aplicación Web Multimedia (Opción 7)

---

## 1. Declaración de Autoaprendizaje del Framework (React)
Como parte del componente de investigación autónoma del proyecto, se seleccionó **React** como el framework JavaScript para la arquitectura de la aplicación. Los siguientes recursos oficiales y documentación técnica fueron consultados para dominar los conceptos clave de reactividad, ciclo de vida y manipulación del DOM:

### 1.1. Recursos de Video en Español (Apoyo Visual)
Para complementar la documentación oficial y consolidar la comprensión práctica de React, se consultaron los siguientes tutoriales en YouTube:

* **[Fazt]**
    * **Video:** "[
Curso de Reactjs desde Cero para principiantes 2022]"
    * **Enlace:** [https://youtu.be/rLoWMU4L_qE?si=2h55a33rq7jRLEMm](URL)
    * **Aporte al proyecto:** [Me ayudo a recordar cosas de React, que yo habia aprendido en el pasado.].

* **[Midudev]**
    * **Video:** "[
Curso Tailwind CSS 4 desde cero]"
    * **Enlace:** [https://youtu.be/R5EXap3vNDA?si=49oP3e4tSh-oF_hS](URL)
    * **Aporte al proyecto:** [Reforce mi conocimiento ya previo de Tailwind].

* **Documentación Oficial de React (React Docs):** Consultada para comprender la arquitectura basada en componentes, el flujo de datos unidireccional y el manejo de propiedades (`props`).
    * *Enlace:* [https://react.dev/](https://react.dev/)
* **Manejo de Estados con `useState` y Efectos con `useEffect`:** Utilizados para la carga asíncrona del inventario local (`productos.json`), filtrado dinámico de equipo de BJJ/MMA y control del estado del carrito de compras.
    * *Enlace de referencia:* [https://react.dev/reference/react/useState](https://react.dev/reference/react/useState)
* **Manipulación del DOM con `useRef`:** Documentación técnica esencial para el aislamiento acústico en el componente de testimonios, asegurando que un clip de audio se pause automáticamente cuando otro inicia su reproducción.
    * *Enlace de referencia:* [https://react.dev/reference/react/useRef](https://react.dev/reference/react/useRef)
* **Guía de Inicio de Vite:** Utilizada para el andamiaje del proyecto y la configuración del entorno de desarrollo ágil para React.
    * *Enlace:* [https://vite.dev/guide/](https://vite.dev/guide/)

---

## 2. Documentación y Estilos de Interfaz
* **Tailwind CSS (v4 / v3):** Documentación oficial consultada para la implementación del diseño *Dark Luxury*, manejo de layouts responsivos mediante utilidades de cuadrícula (`grid`), transiciones suaves y ajustes avanzados de encuadre multimedia.
    * *Enlace:* [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
    * *Concepto específico:* Uso de propiedades de ajuste de objetos (`object-cover`, `object-top` y posicionamientos arbitrarios como `object-[50%_15%]`) para corregir el recorte visual de elementos críticos en videos de fondo responsivos.

---

## 3. Recursos Multimedia y Licencias
Para cumplir con los lineamientos multimedia de la Opción 7 del proyecto, se incorporaron elementos de video, audio e imágenes bajo licenciamientos abiertos, libres de derechos de autor o de uso académico:

### A. Video del Hero (`hero-bg.mp4`)
* **Fuente:** [OpenHero](https://openhero.art/)

* **Licencia:** Licencia OpenHero (Gratuito para uso personal y comercial, no requiere atribución obligatoria pero se registra para efectos académicos).
* **Ajuste Técnico:** Modificado mediante CSS/Tailwind para anclarse en la parte superior (`object-top`) 

### B. Clips de Audio de los Testimonios (`testimonio1.mp4`, `testimonio2.mp4`)
* **Fuente:** Grabación propia 
* **Descripción:** Audios cortos en formato MP4 que simulan los "Reportes de Campo" de atletas de Jiu-Jitsu Brasileño (BJJ) y Artes Marciales Mixtas (MMA) validando la resistencia de los gish y rashguards de Warehouse CR.
* **Licencia:** Distribución libre / Producción propia dedicada al proyecto académico.

### C. Iconografía y Fuentes
* **Iconos SVG:** Diseñados directamente mediante vectores inline / tomados de la librería Heroicons.
    * *Licencia:* MIT.
* **Tipografía de Interfaz (Inter / Roboto):** Cargada a través de fuentes seguras del sistema y configurada en `index.css`.
    * *Licencia:* SIL Open Font License.

---

## 4. Declaración del Uso de Inteligencia Artificial (IA)
Se declara de manera transparente el uso de modelos de Inteligencia Artificial (Gemini) como herramientas de apoyo técnico.

### Áreas de Soporte de la IA:
1.  **Exploración de Conceptos y Lógica Reactiva:** Soporte estructural para abstraer la validación del formulario de contacto sin depender de librerías pesadas como Formik o Yup, manteniendo el código limpio y nativo.
2.  **Solución de Errores del Intérprete/Compilador:** Apoyo en el análisis de problemas de renderizado y el control de flujos de audio usando referencias reactivas (`useRef`) para evitar colisiones de sonido en el DOM.
3.  **Optimización del Diseño Responsivo:** Asistencia en el uso de clases utilitarias arbitrarias de Tailwind para solucionar problemas de encuadre en elementos multimedia absolute-positioned (como la corrección visual del video en el componente `Hero.jsx`).

*Nota: Todo el código generado bajo este soporte ha sido analizado, comprendido y modificado por el estudiante para alinearse a los requisitos específicos de Warehouse CR y los estándares técnicos universitarios de la UCR.*
