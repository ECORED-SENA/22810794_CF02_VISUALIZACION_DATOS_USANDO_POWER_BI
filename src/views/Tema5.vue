<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Caja de herramientas de visualización
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p En este numeral se analizan los principales elementos de la caja de herramientas de visualización, comprendiendo su función, criterios de selección y uso adecuado dentro de una solución de analítica descriptiva. El propósito es reconocer cómo elegir y combinar visualizaciones de manera coherente con los indicadores, las preguntas analíticas y el contexto del caso orientador, evitando errores que afecten la interpretación de la información.
        .box___style_1.fit___box_1-4(data-aos="fade-right").mb-3
          p.mb-0 La visualización de datos cumple una doble función dentro de una solución de #[i Business Intelligence]: facilitar el análisis de la información y comunicar resultados de manera clara para apoyar la toma de decisiones. Por esta razón, la selección de visualizaciones no debe responder a preferencias estéticas, sino a la naturaleza del dato, al tipo de análisis requerido y a la pregunta analítica que se desea resolver.
        p.mb-0 Una visualización inadecuada puede distorsionar el mensaje, incluso cuando los datos y los cálculos sean correctos. En consecuencia, es necesario seleccionar cada recurso gráfico con criterios técnicos y analíticos.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img115.png", alt="").m-auto
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Clasificación general de las visualizaciones
    p.mb-5 Desde una perspectiva analítica, las visualizaciones pueden agruparse según el propósito que cumplen dentro del análisis de datos. Esta clasificación permite identificar qué recurso resulta más pertinente según la información que se desea interpretar.
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Comparación
                p.mb-0 Permiten contrastar valores entre categorías o periodos. Incluyen gráficos de barras, columnas y barras agrupadas o apiladas. Se utilizan cuando la pregunta analítica busca identificar diferencias de magnitud.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img116.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tendencia
                p.mb-0 Permiten analizar el comportamiento de una variable a lo largo del tiempo. Incluyen gráficos de líneas y áreas simples o apiladas. Son útiles para identificar aumentos, disminuciones y patrones temporales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img117.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Distribución
                p.mb-0 Permiten analizar cómo se distribuyen los valores de una variable. Incluyen histogramas y diagramas de cajas y bigotes. Se emplean para detectar dispersión, concentraciones y valores atípicos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img118.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Composición
                p.mb-0 Permiten representar cómo un total se distribuye en partes. Incluyen gráficos circulares, anillos y barras apiladas al 100 %. Son útiles cuando el análisis se enfoca en proporciones relativas.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img119.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Relación
                p.mb-0 Permiten analizar el comportamiento conjunto entre dos o más variables. Incluyen gráficos de dispersión y de burbujas. Son adecuados para identificar correlaciones o relaciones entre variables.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img120.png', alt='' style="max-width: 500px").m-auto
    .color___box_1
      .px-5
        p.mb-5 Esta clasificación permite seleccionar visualizaciones más pertinentes según la pregunta analítica, mejorar la comprensión de los datos y fortalecer la calidad del análisis dentro del #[i dashboard].
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 11.
              span Ejemplo de los tipos de visualizaciones disponibles de manera nativa en Power BI
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img121.png', alt='Panel de visualizaciones nativas de Power BI que reúne gráficos de barras, columnas, líneas, áreas, dispersión, mapas, tablas, matrices, tarjetas e indicadores para análisis de comparación, tendencia, distribución, relación y composición. ').m-auto
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
          .col
            h3 Visualizaciones geográficas (mapas)
    p.mb-5 Las visualizaciones geográficas permiten representar información asociada a un territorio, facilitando el análisis de patrones espaciales, concentraciones y diferencias por ubicación. Su uso es pertinente cuando la pregunta analítica busca identificar dónde ocurre un fenómeno y cómo se distribuye en zonas, regiones, sedes o áreas de influencia. Para comprender su aplicación dentro de una solución de analítica descriptiva, a continuación, se presentan sus principales usos, criterios y recomendaciones.
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Propósito analítico")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img122.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Propósito analítico
            p.mb-0 Permiten analizar la distribución territorial de datos y comprender comportamientos según la ubicación geográfica.
      .py-3.py-md-4(titulo="Usos comunes")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img123.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Usos comunes
            p.mb-0 Se emplean para comparar indicadores por ciudad, sede o región; identificar zonas con mayor demanda; y analizar la distribución territorial de eventos o servicios.
      .py-3.py-md-4(titulo="Tipos de análisis")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img124.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Tipos de análisis
            p.mb-0 Facilitan el análisis de distribución espacial, comparación entre territorios y evaluación de cobertura o alcance de eventos en determinadas áreas.
      .py-3.py-md-4(titulo="Requisitos previos")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img125.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Requisitos previos
            p.mb-0 Es necesario contar con un campo geográfico confiable, como ciudad, municipio, latitud, longitud o código geográfico, que garantice precisión en la representación.
      .py-3.py-md-4(titulo="Buenas prácticas")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img126.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Buenas prácticas
            p.mb-0 Se recomienda utilizar agregaciones claras, como conteos, tasas o promedios; incluir etiquetas y leyendas comprensibles; y emplear mapas solo cuando la ubicación aporte valor al análisis.
      .py-3.py-md-4(titulo="Errores frecuentes")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img127.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Errores frecuentes
            p.mb-0 Debe evitarse el uso de datos geográficos ambiguos, la sobrecarga de categorías sin jerarquía y el uso de mapas como recurso decorativo sin relación con una pregunta analítica.
    p.mb-0 El uso adecuado de visualizaciones geográficas permite enriquecer el análisis territorial y fortalecer la interpretación de patrones espaciales relevantes para la toma de decisiones.

</template>

<script>
export default {
  name: 'Tema5',
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
