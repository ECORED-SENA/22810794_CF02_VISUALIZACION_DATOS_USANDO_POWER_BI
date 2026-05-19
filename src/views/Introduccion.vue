<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 La visualización de datos se ha consolidado como uno de los principales medios para comunicar información y respaldar la toma de decisiones en las organizaciones. A través de gráficos, indicadores y tableros, los datos adquieren sentido y facilitan la comprensión de comportamientos, tendencias y resultados de manera clara y oportuna.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1(data-aos="fade-right")
          p.mb-0 En este componente formativo, se profundiza en el uso de una herramienta especializada para la construcción de soluciones de analítica descriptiva, entendiendo que la tecnología constituye un medio para materializar el análisis previamente estructurado. El énfasis se centra en transformar datos organizados en información visual comprensible y útil. El abordaje se desarrolla desde una perspectiva práctica y técnica, integrando la preparación de datos, la selección pertinente de visualizaciones y la construcción de reportes coherentes con los requerimientos del cliente.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro/img1.png", alt="").m-auto
    .row.justify-content-center.align-items-center
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/intro/img2.png", alt="").m-auto
      .col-xl
        .box___style_1.fit___box_1(data-aos="fade-left")
          p.mb-0 Asimismo, se incorpora la validación de la solución como un proceso fundamental para garantizar su integridad, funcionamiento y usabilidad. De esta manera, el componente permite consolidar el proceso iniciado en el componente anterior, llevando el análisis desde el modelo de datos hasta una solución visual validada, lista para respaldar la toma de decisiones en contextos reales.

</template>

<script>
export default {
  name: 'Introduccion',
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
