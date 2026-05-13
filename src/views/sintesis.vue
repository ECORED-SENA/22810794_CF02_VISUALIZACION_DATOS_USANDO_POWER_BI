<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis del componente formativo sobre visualización de datos con Power BI que organiza el proceso completo en seis áreas: entorno Power BI, preparación de datos, lenguaje DAX, arquitectura del dashboard, caja de herramientas de visualización y ciclo de validación y mejora. Incluye componentes de Power BI, fuentes de datos, tipos de cálculos DAX, contextos y funciones clave, elementos de diseño de dashboards, tipos de gráficos, tablas, matrices, indicadores, segmentadores, filtros, mapas geográficos y criterios de validación técnica, usabilidad y optimización del modelo. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
