<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Descubrimiento de datos y conceptos de #[i dashboards]
    p.mb-5 En esta unidad se abordan los principios del descubrimiento de datos y los conceptos fundamentales de los #[i dashboards] como elementos clave para transformar métricas y cálculos en información comprensible. El propósito es comprender cómo formular preguntas analíticas, seleccionar indicadores relevantes y estructurar tableros que apoyen la toma de decisiones de acuerdo con los requerimientos del caso.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Del cálculo al análisis: el descubrimiento de datos
    p.mb-5 Una vez que los datos se encuentran preparados y se han definido métricas mediante expresiones analíticas, el siguiente paso consiste en explorar e interpretar la información. Este proceso se conoce como descubrimiento de datos y permite identificar patrones, comportamientos, tendencias y relaciones relevantes dentro del conjunto de datos. Para comprender su alcance, es importante tener en cuenta que el descubrimiento de datos no se limita al uso de representaciones gráficas. Este proceso implica:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            p.mb-0.text-center #[b Interpretar métricas dentro de su contexto.]
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            p.mb-0.text-center #[b Contrastar resultados entre dimensiones.]
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            p.mb-0.text-center #[b Formular nuevas preguntas a partir de los datos. ]
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            p.mb-0.text-center #[b Validar supuestos del negocio. ]
    p.mb-5 Este proceso conecta de manera directa los cálculos definidos en DAX con el análisis que posteriormente se integrará en los tableros.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Preguntas analíticas como punto de partida del #[i dashboard]
    p.mb-5 Un #[i dashboard] efectivo no inicia con gráficos, sino con preguntas analíticas claras. Estas preguntas se derivan de los requerimientos del cliente y orientan la selección de indicadores, métricas y recursos de análisis. En el caso orientador, las preguntas analíticas permiten enfocar la exploración de los datos y definir qué información resulta relevante para la toma de decisiones. A continuación, se presentan algunos ejemplos:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___card_sinbordes.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img99.png', alt="" ).m-auto
            h4.text-center ¿Cómo se comporta el volumen de atenciones en el tiempo?
            .box___card_sinbordes_p
              p.mb-0.text-center Identificar tendencias, estacionalidades o cambios en la demanda.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___card_sinbordes.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img100.png', alt="" ).m-auto
            h4.text-center ¿Qué sedes concentran mayor demanda?
            .box___card_sinbordes_p
              p.mb-0.text-center Comparar la distribución de atenciones entre sedes.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___card_sinbordes.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img101.png', alt="" ).m-auto
            h4.text-center ¿Qué servicios presentan mayores tiempos de atención?
            .box___card_sinbordes_p
              p.mb-0.text-center Detectar posibles cuellos de botella o necesidades de mejora.
      .col-xl-3.col-md-9(data-aos="fade-left")
        .box___card_sinbordes.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img102.png', alt="" ).m-auto
            h4.text-center ¿Existen variaciones significativas entre periodos?
            .box___card_sinbordes_p
              p.mb-0.text-center Analizar cambios en el comportamiento del servicio a lo largo del tiempo.
    p.mb-0 Cada pregunta debe tener correspondencia directa con una o varias métricas previamente definidas. Esta relación garantiza que el análisis conserve coherencia con los objetivos del caso y facilite la construcción de tableros útiles para la toma de decisiones.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 ¿Qué es un #[i dashboard]?
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img103.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Un #[i dashboard] es una interfaz que integra indicadores, gráficos y filtros con el propósito de comunicar información clave de manera clara y sintética. Su función principal es apoyar la toma de decisiones, ya que permite comprender con rapidez el estado de un proceso, servicio o fenómeno analizado.
        br
        br
        p.mb-0 Para delimitar su alcance, es importante precisar que un #[i dashboard] no corresponde a una acumulación indiscriminada de información. En cambio, responde a una estructura diseñada con intención analítica y orientada al cumplimiento de objetivos específicos. En este sentido, un #[i dashboard] no es:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            p.mb-0.text-center #[b Un repositorio de todos los datos disponibles. ]
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            p.mb-0.text-center #[b Una colección desordenada de gráficos.]
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            p.mb-0.text-center #[b Un informe estático sin interacción.]
    p.mb-5 Por el contrario, su diseño parte de preguntas analíticas, métricas definidas y necesidades concretas de información. Esto permite organizar los elementos del tablero de manera coherente y útil para quien lo consulta.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Tipos de #[i dashboards] según su propósito
    p.mb-5 Según el objetivo del análisis y el tipo de decisiones que se busca apoyar, es posible reconocer distintos tipos de #[i dashboards]. A continuación, se presenta una clasificación general que facilita comprender sus principales características.
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Operativo")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img104.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Operativo
            p.mb-0 Se enfoca en el monitoreo diario de indicadores clave. Responde a necesidades de corto plazo y requiere actualización frecuente.
      .py-3.py-md-4(titulo="Analítico")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img105.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Analítico
            p.mb-0 Permite explorar información, comparar escenarios y analizar comportamientos. Integra mayor nivel de interacción y segmentación.
      .py-3.py-md-4(titulo="Estratégico")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img106.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Estratégico
            p.mb-0 Presenta indicadores de alto nivel para apoyar decisiones directivas. Prioriza síntesis, claridad y alineación con objetivos organizacionales.
    p.mb-0 Esta clasificación permite seleccionar el tipo de tablero más adecuado según el contexto del análisis, la profundidad requerida y el perfil de los usuarios que tomarán decisiones a partir de la información disponible.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Arquitectura de un #[i dashboard] efectivo
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img107.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La construcción de un #[i dashboard] efectivo requiere una articulación entre criterios técnicos, analíticos y de diseño. Su estructura no responde únicamente a decisiones estéticas, sino a principios que facilitan la comprensión de la información y orientan la toma de decisiones.
        br 
        br
        p.mb-0 En este proceso, la narrativa del tablero se construye a partir de la jerarquía de la información y de principios de percepción, como los planteados por la Gestalt. Esto permite organizar los elementos de manera coherente, priorizar datos relevantes y facilitar la interpretación del contenido.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Indicadores (KPI) y objetivos de negocio
    p.mb-5 Los indicadores clave de desempeño (KPI) constituyen el punto central de un #[i dashboard], ya que permiten medir resultados en relación con objetivos previamente definidos. Un KPI no debe entenderse como un dato aislado, sino como una medida comparativa que aporta sentido al análisis. Para comprender cómo se integran los KPI en un tablero efectivo, es importante considerar los siguientes criterios:
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Contextualización")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img108.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Contextualización
            p Todo indicador debe incluir un punto de referencia que permita interpretar su comportamiento. 
            p.mb-0 #[b Por ejemplo]: atenciones totales frente a la meta mensual o frente al periodo anterior.
      .py-3.py-md-4(titulo="Condicionalidad o semaforización")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img109.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Condicionalidad o semaforización
            p  El uso de colores, símbolos o alertas permite identificar estados de desempeño. 
            p.mb-0 #[b Por ejemplo]: verde para crecimiento o cumplimiento, rojo para alertas o desviaciones.
      .py-3.py-md-4(titulo="Ubicación estratégica")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img110.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Ubicación estratégica
            p.mb-0 Según patrones de lectura como “F” o “Z”, los KPI deben ubicarse en la franja superior izquierda, ya que esta zona concentra la atención inicial del usuario.
    .color___box_1
      .px-5
        p.mb-5 La correcta definición, contextualización y ubicación de los KPI permite que el #[i dashboard] cumpla su propósito analítico. De esta manera, el tablero facilita una lectura ágil de los resultados y fortalece la toma de decisiones basada en datos.
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 9.
              span Diseño estratégico de #[i dashboard] y patrón de lectura en 'Z'
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img111.png', alt='Esquema de dashboard con distribución visual basada en el patrón de lectura en Z y ubicación estratégica de indicadores clave ').m-auto
        p.mb-5 La construcción de un #[i dashboard] efectivo requiere seleccionar adecuadamente los recursos de análisis y organizar la interacción con la información. Para ello, es importante integrar visualizaciones pertinentes, mecanismos de exploración, filtros intuitivos y principios de diseño que faciliten la comprensión de los datos.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img112.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Visualizaciones y gramática de gráficos").ajuste-cajaAcordion
            p.mb-3 La selección del tipo de gráfico depende del mensaje analítico. Para comparar categorías, se recomienda el uso de gráficos de barras o columnas ordenados de mayor a menor. Para analizar la evolución en el tiempo, los gráficos de líneas o áreas permiten identificar tendencias y estacionalidades. En el análisis de distribución, los histogramas y diagramas de dispersión facilitan la identificación de valores atípicos. Para representar relaciones parte-todo, se recomienda el uso de #[i treemaps] o gráficos de cascada, evitando gráficos de torta cuando existan más de tres categorías.
          .row(titulo="Dimensiones de análisis y granularidad").ajuste-cajaAcordion
            p.mb-3 Las dimensiones permiten explorar la información en distintos niveles de detalle. Un dashboard avanzado integra navegación jerárquica (#[i drill-down]), que permite pasar de una visión general a niveles más específicos, como regional, sede y consultorio. También incorpora filtrado cruzado (#[i cross-filtering]), de modo que la selección de un elemento ajuste automáticamente los demás componentes del tablero.
          .row(titulo="Filtros y segmentadores (UX/UI para BI)").ajuste-cajaAcordion
            p.mb-3 El control de la información debe ser intuitivo y coherente. Los segmentadores sincronizados permiten aplicar filtros en diferentes páginas del reporte. Los filtros Top N facilitan destacar automáticamente los elementos más relevantes, como las 10 sedes con mayor tiempo de espera. Los parámetros de campo permiten cambiar dinámicamente la dimensión de análisis en un mismo recurso gráfico.
          .row(titulo="Narrativa visual y densidad de información").ajuste-cajaAcordion
            p.mb-3 La narrativa visual organiza el recorrido del usuario dentro del tablero. La jerarquía de color debe emplearse para resaltar información clave y no como elemento decorativo. El uso de espacios en blanco evita la saturación y mejora la organización del contenido. Los tooltips permiten ampliar detalles específicos sin recargar el tablero principal.
          .row(titulo="Principios de diseño para el descubrimiento de datos").ajuste-cajaAcordion
            p.mb-3 El diseño del #[i dashboard] debe facilitar la comprensión de la información. Para ello, se recomienda priorizar la claridad sobre la estética, presentar primero los datos más relevantes, mantener consistencia en colores y escalas, evitar la sobrecarga visual y utilizar títulos que respondan preguntas analíticas.
    p.mb-0 La integración de estos elementos permite construir tableros más claros, funcionales y orientados al análisis de datos.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Caso orientador aplicado: estructura conceptual del #[i dashboard]
    p.mb-5 A partir de los requerimientos del caso, el #[i dashboard] debe organizarse de manera que facilite una lectura progresiva de la información, desde una visión general hasta niveles de análisis más específicos. Esta estructura conceptual permite responder de forma ordenada a las necesidades de seguimiento y toma de decisiones de la institución de servicios. A continuación, se presenta la estructura conceptual del #[i dashboard] propuesta para este caso.
    .row.align-items-center.mb-5
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
          .row(titulo="Vista general").ajuste-cajaAcordion
            p.mb-3 Presenta indicadores clave relacionados con el volumen total de atenciones y los tiempos promedio de atención. Permite conocer el estado general del servicio.
          .row(titulo="Análisis temporal").ajuste-cajaAcordion
            p.mb-3 Permite identificar tendencias, comportamientos por periodo y posibles variaciones en el tiempo. Facilita el seguimiento de cambios y patrones recurrentes.
          .row(titulo="Comparación por sede y servicio").ajuste-cajaAcordion
            p.mb-3 Permite segmentar la información para contrastar comportamientos entre sedes, servicios o unidades de atención. Facilita la identificación de diferencias y oportunidades de mejora.
          .row(titulo="Exploración detallada").ajuste-cajaAcordion
            p.mb-3 Incorpora filtros y mecanismos de profundización para analizar casos específicos según criterios como fecha, sede, servicio o tipo de atención.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img113.png", alt="" ).m-auto
    .color___box_1
      .px-5
        p.mb-5 Esta estructura permite responder preguntas de manera progresiva, iniciando con una visión global del comportamiento del servicio y avanzando hacia análisis más detallados según las necesidades del usuario.
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 10.
              span #[i Dashboard] caso orientador.
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img114.png', alt='Dashboard analítico del caso orientador que integra indicadores clave de atención, gráficos de comportamiento temporal, comparaciones entre sedes y servicios, y filtros interactivos para explorar la información en diferentes niveles de detalle.').m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
