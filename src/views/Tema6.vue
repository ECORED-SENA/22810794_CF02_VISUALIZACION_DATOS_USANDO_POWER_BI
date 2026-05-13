<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Elementos clave de la caja de herramientas de visualización
    p.mb-5 Un analista avanzado no solo elige un gráfico; también diseña la experiencia de usuario (UX) y la lógica de filtrado que ocurre detrás de cada clic.  La efectividad de un #[i dashboard] no radica en la cantidad de visuales, sino en la #[b intencionalidad] de su uso y su #[b interactividad]. Cada elemento debe responder a una pregunta de negocio específica y guiar al usuario en la exploración de los datos.
    .color___box_1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-4
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 12.
              span Caja de herramientas de visualización en Power BI
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img128.png', alt='Esquema de la caja de herramientas de visualización con gráficos, tablas, matrices, indicadores, segmentadores y filtros. ').m-auto
        p.mb-5 Dentro de una solución de visualización, la caja de herramientas no se limita al uso de gráficos. También integra otros elementos que cumplen funciones complementarias dentro del análisis y la interacción con la información. La articulación adecuada de estos recursos permite construir soluciones más claras, útiles y orientadas a los requerimientos del usuario. A continuación, se presentan los principales elementos que conforman esta caja de herramientas.
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Gráficos")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img129.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Gráficos
            p.mb-0 Permiten representar métricas y comportamientos de manera sintética, facilitando el análisis de tendencias, comparaciones, distribuciones o relaciones.
      .py-3.py-md-4(titulo="Tablas y matrices")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img130.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Tablas y matrices
            p.mb-0 Presentan información numérica estructurada con mayor nivel de detalle. Son útiles para consultar valores específicos, desagregar información y complementar el análisis general.
      .py-3.py-md-4(titulo="Indicadores (tarjetas)")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img131.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Indicadores (tarjetas)
            p.mb-0 Permiten destacar valores clave de alto nivel, como totales, promedios o porcentajes. Facilitan una lectura rápida del estado general del proceso analizado.
      .py-3.py-md-4(titulo="Segmentadores")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img132.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Segmentadores
            p.mb-0 Permiten al usuario interactuar con la información mediante la selección de categorías, periodos o dimensiones específicas.
      .py-3.py-md-4(titulo="Filtros")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img133.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Filtros
            p.mb-0 Permiten restringir el análisis según criterios definidos, mejorando la precisión de la consulta y la exploración de los datos.
    p.mb-0 Cada uno de estos elementos cumple una función específica dentro de la solución de visualización y debe utilizarse de manera intencional, de acuerdo con la pregunta analítica, el tipo de información disponible y el objetivo del análisis.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Gráficos: la narrativa visual dinámica
    p.mb-5 Los gráficos cumplen una función central dentro de una solución de visualización, ya que no solo permiten representar datos, sino también facilitar la interpretación, orientar el análisis y apoyar la exploración de la información. Su valor radica en la capacidad de convertir métricas y relaciones numéricas en una narrativa comprensible para el usuario. Para aprovechar su potencial, es importante seleccionar el tipo de gráfico según el mensaje analítico que se desea comunicar e incorporar funcionalidades que fortalezcan la interacción con los datos.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img134.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Comparación").ajuste-cajaAcordion
            p.mb-3 Los gráficos de barras y columnas permiten contrastar valores entre categorías. También pueden emplearse gráficos de bala (#[i bullet charts]) cuando se requiere comparar un resultado frente a una meta o valor esperado.
          .row(titulo="Evolución").ajuste-cajaAcordion
            p.mb-3 Los gráficos de líneas y áreas permiten analizar cambios a lo largo del tiempo. Los gráficos de cinta facilitan identificar variaciones en posiciones o cambios de ranking entre periodos.
          .row(titulo="Distribución").ajuste-cajaAcordion
            p.mb-3 Los histogramas, diagramas de dispersión y gráficos de cajas permiten analizar dispersión, concentración de datos y presencia de valores atípicos.
          .row(titulo="Composición y jerarquía").ajuste-cajaAcordion
            p.mb-3 Los #[i treemaps], gráficos de cascada y gráficos de rectángulos apilados permiten representar proporciones, cambios acumulados y estructuras jerárquicas.
          .row(titulo="Relación").ajuste-cajaAcordion
            p.mb-3 Los diagramas de dispersión con línea de tendencia y los mapas térmicos permiten analizar comportamientos conjuntos y posibles correlaciones entre variables.
    .row.align-items-center.mb-5
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
          .row(titulo="Navegación jerárquica (<em>drill-down / drill-up</em>)").ajuste-cajaAcordion
            p.mb-3 Permite explorar distintos niveles de detalle, por ejemplo, pasar de año a mes o de sede a consultorio mediante una sola interacción.
          .row(titulo="Navegación de detalle (<em>drill-through</em>)").ajuste-cajaAcordion
            p.mb-3 Permite acceder a una página específica con mayor nivel de detalle a partir de la selección de un dato en el gráfico principal.
          .row(titulo="Información contextual emergente (<em>report page tooltips</em>)").ajuste-cajaAcordion
            p.mb-3 Permite presentar información complementaria o micrográficos al pasar el cursor sobre un dato, sin recargar el panel principal.
          .row(titulo="Títulos dinámicos").ajuste-cajaAcordion
            p.mb-3 Permiten ajustar automáticamente el texto de los títulos según los filtros o segmentaciones aplicadas, mejorando la claridad del análisis.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img175.png", alt="" ).m-auto
    p.mb-5 El uso intencional de estos recursos permite que los gráficos cumplan una función analítica y comunicativa, facilitando una exploración más profunda y una mejor comprensión de la información.
    .color___box_1
      .px-5
        .row.justify-content-center.mb-0
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 13.
              span Gráficos: la navegación visual dinámica
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img135.png', alt='Ilustración sobre el uso de gráficos en Power BI para representar comparaciones, tendencias, distribuciones, relaciones y composiciones, con opciones de interacción como navegación jerárquica, filtros cruzados y exploración de detalles. ').m-auto
        <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
        Separador
        #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.2  Tablas y matrices: el detalle estructurado y flexible
    p.mb-5 Las tablas y matrices cumplen un papel fundamental dentro de una solución de visualización, ya que permiten validar datos, revisar detalles específicos y profundizar en el análisis con mayor nivel de granularidad. Su valor no se limita a presentar información en formato tabular, sino que también radica en su capacidad para organizar, resumir y contextualizar datos de manera flexible. A continuación, se presentan sus principales características y funcionalidades dentro del análisis.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img136.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Tabla").ajuste-cajaAcordion
            p.mb-3 Presenta una lista plana de datos y permite revisar el detalle de registros específicos. Es útil para consultar información puntual, como listas de atenciones con datos de paciente, médico o costo.
          .row(titulo="Matriz").ajuste-cajaAcordion
            p.mb-3 Permite estructurar información de manera multidimensional, organizando jerarquías en filas y columnas. Facilita la consulta de totales, subtotales y cruces de variables, como atenciones por regional y sede frente a tipo de servicio.
          .row(titulo="Formato condicional").ajuste-cajaAcordion
            p.mb-3 Permite aplicar colores, iconos o barras de datos para resaltar valores críticos, tendencias o niveles de cumplimiento dentro de las celdas. Esto facilita la interpretación rápida de la información.
          .row(titulo="<em>Sparklines</em>").ajuste-cajaAcordion
            p.mb-3 Permiten incorporar minigráficos dentro de celdas para representar tendencias históricas sin salir del detalle numérico principal.
          .row(titulo="Medidas DAX en matrices").ajuste-cajaAcordion
            p.mb-3 Permiten calcular subtotales y totales dinámicos según el contexto de filtro de cada fila, columna o celda. Esto fortalece la precisión y flexibilidad del análisis.    
    p.mb-5 El uso adecuado de tablas y matrices permite complementar los recursos gráficos, fortalecer la validación de la información y facilitar análisis más detallados dentro del #[i dashboard]. 
    .color___box_1
      .px-5
        .row.justify-content-center.mb-0
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 14.
              span Tablas vs. matrices
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img137.png', alt='Comparación visual entre tablas y matrices en Power BI que destaca el detalle de registros, la organización por filas y columnas, la jerarquización de datos, los subtotales y la capacidad de análisis multidimensional. ').m-auto
        <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
        Separador
        #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.3 Indicadores (tarjetas)
    p Los indicadores o tarjetas son elementos de alta jerarquía dentro de un dashboard, ya que permiten comunicar de manera inmediata el estado de una métrica clave. Su función principal es facilitar una lectura rápida del desempeño, apoyar la toma de decisiones y orientar la atención del usuario hacia los datos más relevantes.
    p.mb-5 A continuación, se presentan los principales tipos y configuraciones de tarjetas que fortalecen el análisis.
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tarjetas KPI
                p.mb-0 Permiten presentar un valor principal acompañado de elementos de contexto, como semaforización por colores y líneas de tendencia. Esto facilita comparar el resultado actual frente a una meta o periodo anterior.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img138.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tarjetas con medidas dinámicas
                p.mb-0 Permiten que el título o el valor cambie automáticamente según los filtros aplicados. Por ejemplo, ajustar el contenido según la sede, el servicio o el periodo seleccionado.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img139.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Formato de valores grandes
                p.mb-0 Permite escalar automáticamente unidades numéricas para facilitar la lectura, utilizando miles, millones o billones según corresponda. Esto mejora la comprensión de cifras extensas.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img140.png', alt='' style="max-width: 500px").m-auto
    p.mb-0 El uso adecuado de tarjetas permite priorizar la información clave y fortalecer la lectura inicial del #[i dashboard].
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.4 Segmentadores: control intuitivo de la experiencia de usuario (UX)
    p.mb-5 Los segmentadores son elementos interactivos que permiten al usuario controlar la información presentada en el #[i dashboard]. Su diseño y configuración influyen de manera directa en la experiencia de uso y en la facilidad para explorar los datos.
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_3.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img141.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Sincronización de segmentadores
            p.mb-0.text-center Permite que un mismo criterio de selección afecte de manera coherente varias páginas del reporte.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_3.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img142.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Jerarquías de segmentadores
            p.mb-0.text-center Permite organizar filtros en niveles, por ejemplo: regional, ciudad, sede y consultorio.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_3.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img143.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Parámetros de campo
            p.mb-0.text-center Permiten al usuario cambiar dinámicamente la dimensión de análisis en un mismo recurso gráfico.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .box___style_3.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img144.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Selección única o múltiple
            p.mb-0.text-center Permite definir si el usuario puede elegir un solo valor o varios al mismo tiempo, según la necesidad del análisis.
    p.mb-0 Una configuración adecuada de segmentadores mejora la navegación y facilita análisis más flexibles y personalizados.
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.5  Filtros: la segmentación invisible del análisis
    p.mb-5 Los filtros son mecanismos que permiten restringir la información analizada según criterios específicos. Aunque no siempre son visibles para el usuario final, cumplen una función fundamental en el control del reporte, la precisión del análisis y la seguridad de la información. A continuación, se presentan los principales niveles y tipos de filtros utilizados en soluciones de visualización.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img145.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Filtros de visual").ajuste-cajaAcordion
            p.mb-3 Se aplican a un recurso específico dentro del #[i dashboard], permitiendo controlar el alcance de un gráfico o tabla en particular.
          .row(titulo="Filtros de página").ajuste-cajaAcordion
            p.mb-3 Afectan todos los elementos contenidos en una misma página del reporte.
          .row(titulo="Filtros de reporte").ajuste-cajaAcordion
            p.mb-3 Se aplican de forma global a todas las páginas del reporte.
          .row(titulo="Filtros <em>Top</em> N").ajuste-cajaAcordion
            p.mb-3 Permiten mostrar automáticamente los elementos con mayor relevancia según una métrica definida, como las 10 sedes con mayores atenciones.
          .row(titulo="Seguridad a nivel de fila (RLS)").ajuste-cajaAcordion
            p.mb-3 Permite restringir el acceso a la información según roles y reglas definidas en DAX. Esto garantiza que cada usuario consulte únicamente los datos autorizados.
    p.mb-5 La correcta configuración de filtros fortalece la consistencia del análisis, mejora el control de la información y garantiza una experiencia de uso segura y pertinente.
    .color___box_1
      .px-5
        .row.justify-content-center.mb-0
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 15.
              span Indicadores (Tarjetas), segmentadores y filtros
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img146.png', alt='Esquema de elementos de control y análisis en Power BI que incluye tarjetas de indicadores clave, segmentadores para selección de categorías o periodos, y filtros aplicados a visualizaciones, páginas o reportes completos. ').m-auto
        <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
        Separador
        #t_6_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.6 Criterios para seleccionar una visualización adecuada
    p.mb-5 La selección de una visualización debe responder al tipo de información disponible, al objetivo del análisis y al perfil del usuario que interpretará los resultados. Aplicar criterios de selección desde el inicio permite evitar recursos gráficos confusos y fortalecer la utilidad del reporte. A continuación, se presentan algunos criterios orientadores para elegir una visualización adecuada.
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___card_sinbordes.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img147.png', alt="" ).m-auto
            h4.text-center Tipo de dato
            .box___card_sinbordes_p
              p.mb-0.text-center ¿Se trata de valores numéricos, categorías o fechas?
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___card_sinbordes.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img148.png', alt="" ).m-auto
            h4.text-center Pregunta analítica
            .box___card_sinbordes_p
              p.mb-0.text-center ¿Se desea comparar, analizar tendencia, proporción o relación?
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___card_sinbordes.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img149.png', alt="" ).m-auto
            h4.text-center Nivel de detalle
            .box___card_sinbordes_p
              p.mb-0.text-center ¿Se requiere una visión general o un análisis detallado?
      .col-xl-3.col-md-9(data-aos="fade-left")
        .box___card_sinbordes.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img150.png', alt="" ).m-auto
            h4.text-center Usuario
            .box___card_sinbordes_p
              p.mb-0.text-center ¿Quién interpretará la información y con qué propósito?
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img151.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Aplicar estos criterios facilita la construcción de reportes más claros, pertinentes y alineados con los requerimientos del análisis.
        br 
        br
        p.mb-0 Para fortalecer la comprensión del uso adecuado de las visualizaciones y la construcción de reportes, es importante reconocer los errores más frecuentes, la relación entre los componentes del modelo analítico y las buenas prácticas de diseño.
    .fit___width_final  
      .fondo___slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Errores frecuentes en el uso de visualizaciones
                  p.mb-0 Entre los errores más comunes se encuentran utilizar gráficos circulares con demasiadas categorías, presentar múltiples métricas en un mismo gráfico sin claridad, usar colores sin significado analítico, repetir la misma información en distintos recursos gráficos, no alinear la visualización con el indicador, sobrecargar una página con demasiados elementos, no definir un propósito claro por página y diseñar reportes sin considerar al usuario final. Estos errores afectan la comprensión de la información y pueden conducir a interpretaciones incorrectas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img152.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Relación entre visualización, DAX y modelo de datos
                  p.mb-0 Las visualizaciones dependen de la correcta definición de métricas mediante DAX, de la coherencia del modelo de datos y del contexto de filtro aplicado. Aunque un recurso gráfico esté bien diseñado, puede presentar resultados erróneos si los cálculos o las relaciones del modelo no son consistentes. Por ello, la visualización debe construirse en articulación con las etapas previas del análisis.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img153.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Buenas prácticas en la construcción de reportes
                  p.mb-0 Se recomienda priorizar la claridad sobre la cantidad de gráficos, evitar duplicar información entre páginas, limitar el uso de colores y tipografías, mantener consistencia visual en todo el reporte y evaluar la experiencia desde la perspectiva del usuario final. Estas prácticas fortalecen la usabilidad, mejoran la interpretación de los resultados y aumentan la confianza en la información presentada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img154.png', alt='' style="max-width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema6',
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
