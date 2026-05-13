<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Construcción y validación de soluciones de visualización de datos con Power BI',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los procesos de conexión, preparación, análisis, visualización y validación de datos en Power BI, aplicando criterios técnicos y analíticos para la construcción de soluciones de analítica descriptiva.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'En una solución de analítica descriptiva, Power BI se utiliza principalmente para:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Almacenar datos transaccionales de aplicativos corporativos o CMR.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ejecutar procesos ETL completos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Analizar y visualizar información para apoyar decisiones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplazar sistemas operativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'La correcta configuración inicial del entorno de Power BI permite:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir la cantidad de visualizaciones para ser más eficiente y mejorar la experiencia de usuario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mejorar la coherencia, el rendimiento y el mantenimiento de la solución.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Evitar el uso de métricas que desborden el procesamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la necesidad de validación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'La preparación inicial de datos tiene como objetivo principal:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar consistencia y calidad de la información para el análisis.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Diseñar visualizaciones finales amigables enfocándose a la experiencia de usuario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Construir <em>dashboards</em> estratégicos con gráficos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Publicar reportes y actualizarlo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'El perfilamiento de datos permite identificar:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Tipos de gráficos disponibles para mostrar informes más consolidados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Errores de visualización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Calidad, nulos, duplicados y rangos de los datos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reglas de negocio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'El lenguaje DAX se utiliza principalmente para:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Importar datos desde diferentes fuentes de información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diseñar interfaces gráficas más dinámicas y amigables.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Validar la usabilidad del reporte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir métricas y cálculos analíticos sobre el modelo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'Una medida en DAX se caracteriza por:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Calcularse dinámicamente según el contexto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Representar una fila específica calculada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Definir relaciones entre tablas a través de sus campos claves y foráneos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Almacenarse como valor fijo en la tabla.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'El contexto de filtro en DAX se refiere a:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El orden de las filas en una tabla.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El conjunto de filtros que afectan el cálculo de una métrica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El tipo de dato de una columna calculada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La estructura del modelo, según las reglas para Bases de datos dimensionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: 'El descubrimiento de datos consiste principalmente en:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Crear gráficos sin análisis previo, como estrategia de metodologías ágiles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Publicar reportes automáticamente a través de Power BI.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Validar licencias de Power BI.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Explorar e interpretar métricas para identificar patrones y comportamientos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'Un <em>dashboard</em> se define como:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una base de datos analítica optimizada para realizar consultas rápidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un repositorio documental que almacena datos y archivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una interfaz visual orientada a comunicar indicadores clave.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un conjunto de archivos de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'Un <em>dashboard</em> analítico se caracteriza por:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mostrar solo indicadores diarios dejando a un lado datos históricos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permitir exploración, comparación y segmentación de información.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'No permitir interacción y ser estático.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ser exclusivamente estratégico y del nivel de decisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'La caja de herramientas de visualización incluye:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gráficos, tablas, indicadores y segmentadores.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente gráficos nativos de Power BI Desktop.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reglas de negocio para implementar medidas y datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Lenguajes de programación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: 'Las visualizaciones geográficas se utilizan cuando:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se desea analizar valores numéricos sin contexto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La ubicación no aporta valor al análisis.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La pregunta analítica involucra territorio o localización.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Se limita a comparar promedios simples entre zonas geográficas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'Un error frecuente en visualización es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Usar títulos claros que sinteticen contenido del reporte.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Priorizar claridad y comunicación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Utilizar gráficos sin relación con la pregunta analítica.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Limitar el número de colores que contenga una unidad gráfica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Un reporte en Power BI se diferencia de un <em>dashboard</em> porque:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No contiene gráficos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No usa métricas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No requiere validación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Permite más detalle y exploración en varias páginas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: 'La narrativa visual en un reporte busca:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumentar la cantidad de gráficos que contengan la misma información, pero en varias maneras para ser más claros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Guiar la interpretación de la información.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar filtros para mejorar experiencia de usuario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar métricas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: 'La validación de integridad de datos se enfoca en:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La coherencia y exactitud de los valores mostrados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El diseño visual y mejorar la interactividad gráfica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La estética del tablero y manejo del tamaño de fuentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La velocidad de carga.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: 'La validación de usabilidad evalúa principalmente:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El licenciamiento de la herramienta y las versiones de Power BI.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El volumen de datos y la optimización del proceso de consultas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El tipo de gráfico y variabilidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La facilidad de comprensión e interacción del usuario.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'En un reporte, el total de atenciones cambia incorrectamente al aplicar un filtro por sede. ¿Qué aspecto debe revisarse primero?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La definición de la métrica en DAX y su contexto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El color y diseño del gráfico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El título del reporte, así como la revisión de la interactividad entre diferentes páginas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El tamaño de la visualización y verificar el tiempo de carga.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Un usuario no logra identificar rápidamente los indicadores clave en un tablero. ¿Qué dimensión de validación está fallando?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Integridad de datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Funcionamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Usabilidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Licenciamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'Un mapa se incluye en un <em>dashboards</em>, pero no aporta información relevante para la toma de decisiones. ¿Cuál fue el error principal?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Falta de datos que den información de ubicación como coordenadas o nombres de ciudades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Uso de una visualización sin una pregunta analítica asociada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Exceso de métricas que impiden tener claridad de la información presentada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Falta de filtros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
