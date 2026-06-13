<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Conexión, importación y preparación inicial de datos
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1.fit___box_1-1(data-aos="fade-right").mb-3
          p.mb-0 En este apartado se abordan los criterios y procesos necesarios para conectar fuentes de datos, importar información y realizar una preparación inicial orientada a la analítica descriptiva. Esta fase permite transformar datos dispersos en información estructurada y confiable, lista para alimentar reportes y tableros de manera consistente con los requerimientos del caso de análisis.
        p.mb-0 La preparación de datos constituye un proceso técnico clave para garantizar que la solución responda con precisión a las necesidades de información, reduzca errores y facilite el mantenimiento posterior.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img29.png", alt="").m-auto
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Preparación de datos como puente entre el modelo y la visualización
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img30.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p En una solución de visualización desarrollada con Power BI, la fase de conexión y preparación de datos representa el vínculo entre lo definido conceptualmente (requerimientos, fuentes y modelo de datos) y los productos analíticos finales, como indicadores, reportes y tableros.
        br
        br
        p.mb-0 En esta etapa se aplica el enfoque ETL (#[i Extract, Transform, Load]) desde una perspectiva práctica. Esto implica obtener la información desde distintas fuentes, depurarla, estructurarla y dejarla lista para el análisis, garantizando coherencia, calidad y consistencia en las medidas e indicadores. 
    p.mb-5 Una preparación inicial adecuada aporta beneficios concretos al proyecto:
    .fondo___carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img31.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img32.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Conexión adecuada de fuentes
                p.mb-0.text-center Permite integrar información desde sistemas, archivos y servicios externos de forma ordenada.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img33.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Estandarización de datos
                p.mb-0.text-center Facilita la unificación de formatos, nombres y estructuras entre diferentes orígenes.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img34.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Control de calidad
                p.mb-0.text-center Reduce errores, duplicidades, valores nulos y datos inconsistentes.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img35.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Trazabilidad de la información
                p.mb-0.text-center Permite identificar el origen de los datos y documentar transformaciones realizadas.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img36.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Preparación para indicadores
                p.mb-0.text-center Asegura que las medidas y segmentaciones respondan al objetivo del análisis.
        p.mb-5 Una preparación rigurosa reduce reprocesos, evita inconsistencias en los indicadores y fortalece la confianza del usuario en la solución. En este sentido, la calidad y la gobernanza de los datos se convierten en un requisito funcional del proyecto, más que en un componente técnico opcional.
    .box___style_5.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img37.png', alt='').m-auto
        .col-xl.fit___box_container
          h5 Caso orientador
          p.mb-0 Una institución prestadora de servicios requiere analizar el comportamiento de la atención, considerando el volumen de atenciones, distribución por sede y servicio y tiempos promedio de respuesta. Antes de iniciar la conexión de datos, es importante identificar claramente las fuentes disponibles y su función dentro del modelo analítico.
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_3.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img38.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Sistema de atención
            p.mb-0.text-center Registros de eventos de atención almacenados en una base de datos operativa.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_3.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img39.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Catálogo de servicios
            p.mb-0.text-center Archivo extraído desde otra aplicación en formato JSON, con información de servicios ofrecidos.
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .box___style_3.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img40.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Catálogo de sedes	
            p.mb-0.text-center Archivo tabular (Excel o CSV) con datos de sedes y puntos de atención.
    p.mb-0 #[b Objetivo analítico]: soportar analítica descriptiva y tableros con segmentación por tiempo, sede y servicio, garantizando consistencia entre la estructura de datos y los requerimientos definidos para la solución.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Conexión a datos
    p.mb-5 La conexión a datos no debe entenderse como un paso mecánico; se trata de una decisión que condiciona rendimiento, mantenimiento, actualización y gobernanza.
    figure(data-aos="zoom-in").mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/gezYHpqSPMI" title="Cargar datos de análisis" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.fit___figcaption-video(data-aos="zoom-in") #[b Video]. Cargar datos de análisis.
    .box___style_4.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img41.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 dataSetCasodeUsoOrientador
          p.mb-0 Se invita a revisar la carpeta  #[b dataSetCasodeUsoOrientador], base del  tutorial orientado al análisis y visualización de datos relacionados con sedes, servicios y atenciones. 
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/dataSetCasodeUsoOrientador.zip')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Conexión, importación y preparación inicial de datos
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p #[b La conexión, importación y preparación inicial de datos] constituyen una etapa determinante en la construcción de soluciones de visualización confiables con Power BI. La calidad del análisis no depende únicamente de la herramienta utilizada, sino de las decisiones técnicas adoptadas al integrar, estandarizar y depurar información proveniente de distintas fuentes.
        .box___style_2(data-aos="zoom-in").mb-3
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img42.jpg', alt='').m-auto
            .col-xl.fit___box_container
              p.mb-0 Esta fase permite transformar datos dispersos en una base estructurada, consistente y apta para el análisis. Por ello, la preparación inicial no debe entenderse como una tarea operativa aislada, sino como un proceso que asegura la confiabilidad de los resultados analíticos. 
        p.mb-0 A continuación, se presentan los elementos que consolidan la calidad de los datos en esta etapa:
      .col-xl-auto.col-md-9(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img43.png', alt='').m-auto
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Integración de fuentes
                p.mb-0 Permite consolidar información procedente de sistemas, archivos y servicios externos bajo una estructura común.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img44.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Estandarización de datos
                p.mb-0 Facilita la unificación de formatos, categorías, nombres y tipos de campos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img45.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Depuración de inconsistencias
                p.mb-0 Reduce errores, duplicidades, vacíos y registros atípicos que afectan los indicadores.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img46.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Homologación con catálogos
                p.mb-0 Garantiza correspondencia entre servicios, sedes y demás dimensiones del modelo.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img47.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tipificación correcta de campos
                p.mb-0 Asegura que fechas, valores numéricos y categorías se comporten adecuadamente en filtros y cálculos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img48.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Trazabilidad y consistencia
                p.mb-0 Permite conocer el origen de la información y mantener control sobre las transformaciones realizadas.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img49.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 El caso orientador permite reconocer cómo los datos, una vez preparados, adquieren coherencia para soportar segmentaciones por tiempo, sede y servicio. La homologación de categorías, la correcta tipificación de campos y la validación de correspondencia con catálogos permiten que los indicadores reflejen de manera fiel la realidad que se desea analizar.
    .row.justify-content-center.align-items-center
      .col-xl.mb-4.mb-lg-0
        .box___style_6(data-aos="zoom-in")
          p.mb-0 No obstante, disponer de datos preparados no es suficiente para responder preguntas analíticas de manera flexible y precisa. Para transformar los datos en métricas, indicadores y cálculos que aporten valor, se requiere un lenguaje que permita expresar reglas de negocio, realizar agregaciones y aplicar lógica analítica sobre el modelo de datos.
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img50.jpg', alt='').m-auto
      .col-xl
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img51.svg', alt='' style="max-width: 80px")
        p.mb-0 En este contexto, el siguiente apartado introduce #[i Data Analysis Expressions] como el lenguaje que permite definir medidas, cálculos y expresiones analíticas sobre los datos preparados. De esta manera, se avanza desde una base de datos consistente hacia la construcción de indicadores que darán sentido a las visualizaciones y tableros desarrollados posteriormente.

</template>

<script>
export default {
  name: 'Tema2',
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
