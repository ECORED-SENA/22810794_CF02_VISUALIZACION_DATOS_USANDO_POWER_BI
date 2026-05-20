<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Ciclo de validación y mejora
    p.mb-5 En esta unidad temática se desarrollan los criterios y prácticas para la validación técnica de soluciones de visualización de datos. El propósito es comprender la validación como un proceso de mejora continua que garantiza la confiabilidad, coherencia y utilidad de los reportes y tableros construidos, de acuerdo con los requerimientos del caso orientador.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.1  La validación como parte del ciclo de vida de la solución
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img155.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La construcción de un reporte o tablero no representa el cierre del proceso analítico. Una solución de analítica descriptiva solo adquiere valor cuando la información presentada es confiable, comprensible y funcional para el usuario final. En este contexto, la validación se entiende como un proceso sistemático que permite detectar errores, inconsistencias y oportunidades de mejora antes de la entrega o publicación de la solución.
        br
        br
        p.mb-0 Para comprender su alcance, es importante reconocer que el ciclo de validación se estructura en dimensiones que deben evaluarse de manera articulada, ya que una falla en cualquiera de ellas afecta la calidad del resultado final. A continuación, se presentan las principales dimensiones del ciclo de validación.
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_3.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img156.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Datos
            p.mb-0.text-center Verifica la integridad, consistencia y confiabilidad de la información utilizada en el reporte o tablero.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_3.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img157.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Funcionamiento de la solución
            p.mb-0.text-center Comprueba que los elementos interactivos, filtros, segmentadores y visualizaciones respondan correctamente a las acciones del usuario.
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .box___style_3.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img158.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Usabilidad del reporte o tablero
            p.mb-0.text-center Evalúa si la solución facilita la comprensión, navegación e interpretación de la información por parte del usuario final.
    p.mb-0 La validación no se limita a comprobar si el reporte tiene una buena presentación. También implica verificar si responde correctamente a los requerimientos, si los cálculos son consistentes y si la interacción facilita el análisis. En este sentido, el ciclo de validación no es un evento único, sino un proceso iterativo de control de calidad. Este proceso se desarrolla en dos frentes principales: la validación de la integridad de los datos y la validación de la experiencia de usuario.    
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.2  Validación de la integridad de los datos
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1(data-aos="fade-right").mb-3
          p.mb-0 La validación de la integridad de los datos es una etapa esencial antes de compartir un reporte o tablero. Su propósito es garantizar que los resultados presentados en la solución coincidan con la realidad de la base de datos y respondan de manera confiable a los requerimientos del análisis.
        p.mb-0 Para lograrlo, es necesario aplicar verificaciones técnicas que permitan identificar inconsistencias, errores de cálculo o problemas en la estructura del modelo. A continuación, se presentan los principales criterios de validación de la integridad de los datos. 
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img159.png", alt="").m-auto
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cuadre de cifras
                p.mb-0 Consiste en comparar el resultado de medidas DAX con consultas directas en SQL, reportes maestros o fuentes oficiales, para verificar que los valores coincidan.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img160.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Coherencia de totales, promedios y conteos
                p.mb-0 Implica realizar cálculos de contraste de forma manual o con herramientas de apoyo, como hojas de cálculo, para confirmar que los resultados del tablero sean correctos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img161.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Pruebas de estrés de filtros
                p.mb-0 Permiten verificar que las medidas respondan correctamente ante combinaciones poco frecuentes de filtros, evitando resultados vacíos o errores de cálculo.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img162.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Validación de relaciones
                p.mb-0 Permite comprobar que no existan registros sin correspondencia entre tablas, lo que podría afectar la precisión de las métricas.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img163.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Optimización del modelo
                p.mb-0 Implica revisar el rendimiento del reporte, identificar recursos lentos y ajustar medidas o visualizaciones que afecten la carga de la solución.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img164.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Control de calidad adicional
                p.mb-0 Incluye verificar la ausencia de duplicaciones no justificadas, el tratamiento adecuado de valores nulos o atípicos y la consistencia entre métricas relacionadas.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img165.png', alt='' style="max-width: 500px").m-auto
    p.mb-0 En el caso orientador de la institución de servicios, esta validación implica comprobar que el total de atenciones coincida con el conteo real de registros, que los tiempos promedio excluyan valores fuera de rango y que la segmentación por sede no genere duplicaciones. La integridad de los datos constituye la base de la confianza en la solución, ya que garantiza que la información presentada sea consistente, precisa y útil para la toma de decisiones.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.3 Validación de usabilidad (UX) y #[i feedback]
    .box___style_7.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1.fit___box_container
          p La validación de usabilidad permite comprobar si el dashboard facilita una interacción clara, intuitiva y útil para el usuario final. Una solución puede ser técnicamente correcta desde el punto de vista de los datos, pero perder valor si el usuario no logra interpretar la información o navegar el reporte con facilidad.
          p.mb-0 Por esta razón, la validación de la experiencia de usuario debe formar parte del ciclo de mejora continua, con el fin de identificar barreras de uso, dificultades de interpretación y oportunidades de ajuste. 
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img166.png', alt='').m-auto
    p.mb-5 A continuación, se presentan los principales criterios y prácticas para validar la usabilidad de una solución de visualización.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img167.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Pruebas de usuario").ajuste-cajaAcordion
            p.mb-3 Consisten en observar cómo interactúa un usuario final con el tablero sin instrucciones previas. Permiten identificar dificultades de navegación, comprensión o localización de información.
          .row(titulo="Protocolo de cinco segundos").ajuste-cajaAcordion
            p.mb-3 Permite evaluar si la estructura inicial del tablero comunica de forma inmediata los indicadores más relevantes y el estado general del proceso analizado.
          .row(titulo="Visibilidad del estado").ajuste-cajaAcordion
            p.mb-3 Verifica si el usuario reconoce con facilidad los filtros aplicados, las selecciones activas y el contexto de análisis.
          .row(titulo="Consistencia de la interfaz").ajuste-cajaAcordion
            p.mb-3 Evalúa si botones, filtros, colores y elementos de navegación mantienen un comportamiento uniforme en todo el reporte.
    .row.align-items-center.mb-5
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
          .row(titulo="Prevención de errores").ajuste-cajaAcordion
            p.mb-3 Verifica si el tablero incluye ayudas contextuales, descripciones o recursos complementarios que faciliten la comprensión de métricas complejas.
          .row(titulo="Claridad visual").ajuste-cajaAcordion
            p.mb-3 Comprueba la legibilidad de títulos, etiquetas, escalas y elementos gráficos.
          .row(titulo="Jerarquía y carga visual").ajuste-cajaAcordion
            p.mb-3 Evalúa si la información está organizada de forma lógica, sin saturación ni elementos que dificulten la lectura.
          .row(titulo="Facilidad de interpretación").ajuste-cajaAcordion
            p.mb-3 Permite comprobar si el usuario puede comprender la información y obtener conclusiones sin requerir explicaciones externas.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img176.png", alt="" ).m-auto
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0
        .box___style_1.fit___box_1(data-aos="fade-right").mb-3
          p En el caso orientador, esta validación implica comprobar que, al seleccionar una sede, todas las métricas y gráficos se actualicen de manera coherente, que los mapas reflejen correctamente la selección (cuando apliquen) y que no existan resultados contradictorios entre páginas.
          p.mb-0 También se debe verificar que el usuario pueda identificar rápidamente los indicadores clave, comprender qué representa cada gráfico, navegar el reporte sin confusión y obtener conclusiones de manera ágil. La validación de usabilidad asegura que la información llegue al usuario de forma clara, coherente y útil para la toma de decisiones.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img168.png", alt="").m-auto
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.4 Ciclo de mejora continua (iteración)
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img169.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La validación de una solución de visualización no finaliza con la entrega del reporte o tablero. Los requerimientos del negocio, las necesidades de los usuarios y las condiciones del entorno pueden cambiar con el tiempo, por lo que la solución debe mantenerse actualizada, flexible y escalable.
        br 
        br
        p.mb-0 En este contexto, la mejora continua se entiende como un proceso de ajuste permanente que permite optimizar el desempeño del tablero, incorporar nuevas necesidades de análisis y fortalecer la experiencia del usuario.
    p.mb-5 A continuación, se presentan las principales acciones que hacen parte del ciclo de mejora continua.
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Recolección de hallazgos
                p.mb-0 Consiste en identificar dudas frecuentes de los usuarios, necesidades emergentes de información y nuevas preguntas de negocio que permitan ajustar la solución.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img170.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ajuste de medidas
                p.mb-0 Implica refinar la lógica de las medidas DAX para responder a nuevos escenarios, cambios en reglas de negocio o requerimientos adicionales de análisis.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img171.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Refactorización del modelo
                p.mb-0 Permite optimizar el modelo de datos mediante la eliminación de tablas, columnas o relaciones innecesarias, con el fin de mejorar el rendimiento del reporte.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img172.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Control de versiones
                p.mb-0 Consiste en documentar los cambios realizados en cada actualización para mantener la trazabilidad, facilitar ajustes futuros y asegurar el control del proyecto.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img173.png', alt='' style="max-width: 500px").m-auto
    p.mb-0 La mejora continua permite que el dashboard conserve su utilidad a lo largo del tiempo, se adapte a nuevos requerimientos y mantenga su valor como herramienta de análisis y apoyo a la toma de decisiones. El ciclo de validación y mejora consolida el proceso de construcción de soluciones de visualización de datos. Al verificar la integridad, el funcionamiento y la usabilidad de los reportes y tableros, se garantiza que la información presentada sea confiable, clara y útil para la toma de decisiones.

</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
