<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Introducción al lenguaje de consulta DAX
    p.mb-5 En esta temática se introducen los fundamentos conceptuales de #[i Data Analysis Expressions] (DAX), como mecanismo para definir métricas, cálculos e indicadores dentro de una solución de visualización de datos en Power BI. Su comprensión permite transformar datos preparados en información analítica útil para la toma de decisiones.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img52.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El propósito de este apartado es reconocer el papel de #[i Data Analysis Expressions] en la analítica descriptiva, su relación con el modelo de datos y su impacto directo en la construcción de tableros e indicadores alineados con los requerimientos del caso orientador.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Lenguaje analítico en soluciones de visualización
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/img53.png", alt="").m-auto
      .col-xl
        .box___style_1.fit___box_1(data-aos="fade-left").mb-3
          p.mb-0 #[i Data Analysis Expressions es un lenguaje] de expresiones diseñado para realizar cálculos sobre modelos de datos. A diferencia de los procesos de preparación inicial, que transforman y depuran la información antes de cargarla, este lenguaje actúa directamente sobre el modelo ya estructurado, respetando sus relaciones, dimensiones y reglas de negocio.
        p.mb-0 Desde esta perspectiva, #[i Data Analysis Expressions] se convierte en el puente entre los datos preparados y la construcción de valor analítico dentro de una solución de inteligencia de negocios. 
    p.mb-5 A continuación, se presentan sus principales funciones dentro de una solución de visualización:
    .row.align-items-center.justify-content-center.mb-5
      .col-xl.mb-4.mb-lg-0(data-aos="fade-right")
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Definición de indicadores clave (KPI)") Permite crear métricas de desempeño alineadas con objetivos de análisis.
          p(numero="2" titulo="Aplicación de reglas de negocio") Facilita incorporar condiciones, criterios y lógica específica del proceso.
          p(numero="3" titulo="Control de agregaciones") Gestiona sumas, promedios, conteos y otros cálculos sobre grandes volúmenes de datos.
          p(numero="4" titulo="Respuesta dinámica a filtros") Ajusta resultados según segmentaciones, fechas, sedes o categorías seleccionadas.
          p(numero="5" titulo="Construcción de medidas personalizadas") Permite adaptar los cálculos a necesidades analíticas concretas.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img54.png", alt="").m-auto
    p.mb-5 El uso adecuado de #[i Data Analysis Expressions] mejora la flexibilidad del análisis, fortalece la interpretación de los datos y aporta mayor precisión en la construcción de tableros.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Relación entre modelo de datos y lenguaje de consulta
    p.mb-5 El comportamiento de las expresiones en #[i Data Analysis Expressions] depende directamente de la calidad del modelo de datos. Un modelo bien definido facilita cálculos coherentes y confiables; en cambio, un modelo deficiente puede generar métricas ambiguas, duplicidades o resultados incorrectos. Antes de crear medidas y expresiones, es importante comprender qué elementos del modelo influyen en el comportamiento analítico.
    .fondo___carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img55.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.fit___card-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/temas/img56.png').m-auto
                h4.mb-3.estilo-text Relaciones entre tablas
                p.mb-0.text-center Determinan cómo se conectan hechos y dimensiones, y cómo fluye el contexto de filtro.
              .tarjeta.color-acento-botones.fit___card-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/temas/img57.png').m-auto
                h4.mb-3.estilo-text Cardinalidad y dirección
                p.mb-0.text-center Afectan la precisión de los resultados y la forma en que se propagan los filtros.
              .tarjeta.color-acento-botones.fit___card-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/temas/img58.png').m-auto
                h4.mb-3.estilo-text Granularidad de la tabla de hechos
                p.mb-0.text-center Define el nivel de detalle sobre el cual se realizan los cálculos.
              .tarjeta.color-acento-botones.fit___card-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/temas/img59.png').m-auto
                h4.mb-3.estilo-text Unicidad de claves en dimensiones
                p.mb-0.text-center Evita ambigüedades y duplicidad de registros al relacionar tablas.
              .tarjeta.color-acento-botones.fit___card-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/temas/img60.png').m-auto
                h4.mb-3.estilo-text Correspondencia con catálogos
                p.mb-0.text-center Garantiza consistencia entre registros operativos y datos de referencia.
        p.mb-5 Comprender esta relación entre modelo de datos y lenguaje analítico permite construir medidas más precisas, interpretar correctamente los resultados y desarrollar tableros alineados con los requerimientos del análisis. De esta manera, se consolida el paso desde los datos preparados hacia indicadores que aportan valor real a la solución de visualización. A continuación, se presenta la articulación de estos elementos dentro de una solución de inteligencia de negocios:
        .fondo___slider.mb-0
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Modelo de datos
                    p.mb-0 Define la estructura base de la solución mediante tablas organizadas, campos clave, relaciones y jerarquías que permiten integrar la información de forma coherente.
                  .col-xl-6
                    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                      h5 Figura 3.
                      span Modelo de datos relacional para el análisis de atenciones en Power BI
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/temas/img61.png', alt='Diagrama de modelo de datos relacional con tablas, campos clave, relaciones y jerarquías para el análisis de atenciones. ').m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Expresiones DAX
                    p.mb-0 Corresponden a fórmulas, cálculos, reglas de negocio, funciones y filtros avanzados que permiten construir medidas analíticas sobre el modelo cargado.
                  .col-xl-6
                    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                      h5 Figura 4.
                      span Ejemplos de medidas DAX para cálculos de ventas, variación porcentual y filtrado de datos
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/temas/img62.png', alt='Esquema con ejemplos de medidas DAX para ventas, variación porcentual y filtros aplicados al modelo de datos. ').m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Indicadores
                    p.mb-0 Representan los KPI (#[i Key Performance Indicators]), es decir, métricas de desempeño que permiten hacer seguimiento a resultados, metas y comportamientos del proceso analizado.
                  .col-xl-6
                    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                      h5 Figura 5.
                      span Ejemplos de indicadores y tarjetas visuales
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/temas/img63.png', alt='Conjunto de indicadores KPI y tarjetas visuales para seguimiento de resultados, metas y desempeño analítico. ').m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Visualizaciones
                    p.mb-0 Corresponden a tableros y reportes interactivos (#[i dashboard]), orientados a facilitar la interpretación de la información mediante una interfaz clara, dinámica y oportuna.
                  .col-xl-6
                    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                      h5 Figura 6.
                      span Ejemplos de visualizaciones analíticas
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/temas/img64.png', alt='Ejemplo de dashboard con reportes y visualizaciones interactivas para análisis e interpretación de información. ').m-auto
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Tipos de cálculos
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_6.fit___box_6-1(data-aos="zoom-in")
          p.mb-0 Desde un enfoque conceptual, #[i Data Analysis Expressions] permite definir diferentes tipos de cálculos, cada uno con un propósito específico dentro de la solución analítica. La elección entre medidas, columnas calculadas y tablas calculadas no responde únicamente a una decisión técnica de sintaxis, sino a criterios de diseño del modelo, rendimiento del sistema y comportamiento esperado de los indicadores.
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img65.jpg', alt='').m-auto
      .col-xl
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img51.svg', alt='' style="max-width: 80px")
        p.mb-0 Comprender esta diferencia resulta fundamental, ya que cada tipo de cálculo actúa de manera distinta sobre el modelo de datos y afecta la eficiencia de la solución desarrollada en Power BI. A continuación, se presentan los principales tipos de cálculos y su función dentro del modelo analítico.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Medidas (#[i Measure])
    p.mb-5 Las medidas representan cálculos dinámicos que se ejecutan en función del contexto del reporte. Esto significa que su resultado cambia automáticamente según los filtros, segmentaciones y selecciones que realice el usuario dentro del tablero.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 7.
          span Botón para adicionar nueva medida en Power BI
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img66.png', alt='Captura de la interfaz de Power BI con el botón para crear una nueva medida dentro del modelo. ').m-auto
      .col-xl(data-aos="fade-left")
        .box___style_1.fit___box_1-2
          p Este tipo de cálculo se utiliza para definir indicadores como:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Totales. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Promedios. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Conteos. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Porcentajes. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Razones.
    p.mb-5 Su principal ventaja radica en que no almacenan resultados dentro del modelo de datos. En lugar de ello, se calculan en el momento en que el usuario consulta la información, lo que mejora el rendimiento y evita sobrecargar el modelo con valores precalculados. En términos de diseño analítico, las medidas constituyen la base para la construcción de indicadores clave de desempeño (KPI), ya que permiten responder de manera dinámica a cambios en filtros de tiempo, sede, servicio o cualquier otra dimensión del modelo.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Columnas calculadas
    p.mb-5 Las columnas calculadas generan valores a nivel de fila y se almacenan directamente dentro del modelo de datos. Su lógica se aplica registro por registro, lo que las hace útiles en escenarios donde se requiere derivar información específica a partir de cada fila. Su uso se orienta principalmente a:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            p.mb-0.text-center #[b Clasificaciones. ]
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            p.mb-0.text-center #[b Categorizaciones. ]
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            p.mb-0.text-center #[b Etiquetado de condiciones. ]
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            p.mb-0.text-center #[b Cálculos dependientes del valor particular de un registro. ]
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/img67.png", alt="").m-auto
      .col-xl
        .box___style_1.fit___box_1-3(data-aos="fade-left").mb-3
          p.mb-0 Desde la perspectiva del modelado de datos, este tipo de cálculo debe utilizarse con criterio. Al almacenarse en el modelo, incrementa el consumo de memoria y puede afectar el rendimiento cuando se trabaja con grandes volúmenes de información. Por esta razón, si las tablas de origen ya contienen columnas calculadas que no son necesarias para el análisis, se recomienda omitirlas durante la carga. Esta decisión permite optimizar el almacenamiento y evitar redundancias dentro del modelo.
        p.mb-0 Como criterio de diseño, cuando se identifica la necesidad de crear una columna calculada, primero se debe evaluar si el requerimiento puede resolverse mediante una medida. En muchos casos, una medida permite obtener el mismo resultado de forma más eficiente, ya que evita agregar datos calculados por cada fila y reduce el impacto en el procesamiento.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Tablas calculadas
    p.mb-5 Las tablas calculadas permiten crear nuevas estructuras derivadas del modelo de datos con fines analíticos específicos. A diferencia de las medidas, estas generan conjuntos de datos adicionales que pueden complementar el modelo principal. Su utilidad se relaciona con escenarios como:
    .box___style_7.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1.fit___box_container
          ul.fa-ul.estilo___ul.mb-0
            li.mb-2
              span.fa-li
                i.fas.fa-check-circle
              | Construcción de tablas auxiliares. 
            li.mb-2
              span.fa-li
                i.fas.fa-check-circle
              | Generación de dimensiones analíticas. 
            li.mb-2
              span.fa-li
                i.fas.fa-check-circle
              | Organización de periodos. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Soporte para segmentaciones avanzadas.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img68.png', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/img69.jpg", alt="").m-auto
      .col-xl
        .box___style_1(data-aos="fade-left").mb-3
          p.mb-0 Un caso frecuente de uso corresponde a la creación de dimensiones de tiempo. Estas tablas permiten organizar fechas por año, mes, trimestre, semana o día, facilitando análisis temporales consistentes y comparables. Además, este tipo de recurso resulta especialmente útil cuando las fuentes originales no incluyen una estructura temporal adecuada o cuando se requiere enriquecer el análisis con jerarquías de fechas.
        p.mb-0 Comprender los tipos de cálculos disponibles en #[i Data Analysis Expressions] permite tomar decisiones de diseño más sólidas, optimizar el modelo de datos y construir soluciones analíticas más precisas, eficientes y alineadas con los objetivos del negocio.
    p.mb-5 Un ejemplo de este tipo de tablas es la creación de las dimensiones Tiempo.
    .row.justify-content-center
      .col-xl-10
        .code-window(data-aos="zoom-in")
          .window-header
            span.dot.red
            span.dot.yellow
            span.dot.green
          pre.ajuste___pre_1
            code(v-pre).
              Dim_date = 
              VAR FechaInicio = MIN('Fact_atenciones'[fecha])
              VAR FechaFin = MAX('Fact_atenciones'[fecha])

              RETURN
              ADDCOLUMNS (
                  CALENDAR (FechaInicio, FechaFin),
                  "Año", YEAR([Date]),
                  "Mes Nro", MONTH([Date]),
                  "Mes", FORMAT([Date], "MMMM", "es-ES"),
                  "Mes Corto", FORMAT([Date], "MMM", "es-ES"),
                  "Trimestre Nro", QUARTER([Date]),
                  "Trimestre", "T" & FORMAT([Date], "Q"),
                  "Día Nro", DAY([Date]),
                  "Día Semana Nro", WEEKDAY([Date], 2), -- 1 para Lunes, 7 para Domingo
                  "Día Semana", FORMAT([Date], "dddd", "es-ES"),
                  "Semana Año", WEEKNUM([Date], 2),
                  "Mes-Año", FORMAT([Date], "mmm-yyyy", "es-ES"),
                  "Mes-Año Sort", FORMAT([Date], "yyyyMM"), -- Útil para ordenar cronológicamente
                  "Es Fin de Semana", IF(WEEKDAY([Date], 2) > 5, "Fin de Semana", "Día Laboral"),
                  "Semestre", IF(MONTH([Date]) <= 6, "1er Semestre", "2do Semestre")
              )
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Contexto en DAX
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p El concepto de contexto es fundamental para comprender cómo se evalúan las expresiones en #[i Data Analysis Expressions]. Entender este principio no implica únicamente memorizar una definición técnica, sino comprender cómo Power BI calcula cada valor que presenta en una tabla, gráfico o indicador.
        .box___style_1(data-aos="fade-right").mb-3
          p.mb-0 Esta comprensión marca la diferencia entre construir un reporte estático y desarrollar una solución de inteligencia de negocios dinámica, consistente y eficiente. En términos prácticos, el contexto define qué datos están disponibles para una fórmula en el momento exacto en que se ejecuta.
        p.mb-0 Sin contexto, una expresión en #[i Data Analysis Expressions] no tendría sentido, porque no podría determinar sobre qué filas operar, qué filtros respetar ni cómo responder a la interacción del usuario. Por esta razón, el contexto constituye el motor lógico que da comportamiento dinámico a los cálculos.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img70.png", alt="").m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Contexto de fila
    p.mb-5 El contexto de fila corresponde a la evaluación de una expresión para cada registro de una tabla. Puede entenderse como el “aquí y ahora” de una fila específica: la fórmula trabaja únicamente con los valores disponibles en ese registro mientras realiza el cálculo. Este contexto es característico de escenarios en los que la lógica debe aplicarse de manera individual a cada fila, como ocurre en:
    .row.justify-content-center.align-items-center.mb-5
      .col-xl(data-aos="fade-right")
        .box___style_1.fit___box_1-5
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Columnas calculadas. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Cálculos derivados a partir de otras columnas. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Procesos iterativos explícitos mediante funciones especializadas.
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img71.png', alt='').m-auto
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img72.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un aspecto clave es que el contexto de fila no se propaga automáticamente a través de las relaciones entre tablas del modelo dimensional. Esto significa que la fórmula solo reconoce la información de la fila actual y no accede por sí sola a datos relacionados en otras tablas. Para consultar información externa a la fila actual, se requiere utilizar funciones de navegación como RELATED, que permiten recuperar datos desde tablas relacionadas.
    p.mb-5 El contexto de fila se aplica cuando una expresión en #[i Data Analysis Expressions] necesita evaluar datos registro por registro dentro de una tabla, ya sea en columnas calculadas o mediante funciones iteradoras.
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Columnas calculadas")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img74.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Columnas calculadas
            p Se ejecutan durante la carga de datos.
            p #[b Ejemplo]: Crear una columna.
            p <strong>Margen_% = ([Monto_Venta] - [Costo_Producto]) / [Monto_Venta]</strong>
            p El cálculo se realiza para la fila 1, luego para la 2, y así sucesivamente para todas las filas de la tabla.
      .py-3.py-md-4(titulo="Iteradores")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img75.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Iteradores
            p  Funciones que terminan en "X" (como #[b SUMX, AVERAGEX, FILTER]) crean explícitamente un contexto de fila temporal sobre una tabla para realizar un cálculo. 
            p.mb-0 #[b Ejemplo]: Calcular el total de ventas multiplicando cantidad por precio unitario en cada fila, antes de sumar: <strong>Total Ventas = SUMX(Fact_Ventas, Fact_Ventas[Cantidad] * [Precio_Unitario])</strong>.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Contexto de filtro
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1(data-aos="fade-right").mb-3
          p.mb-0 El contexto de filtro corresponde al conjunto acumulado de filtros activos en el modelo de datos al momento en que se evalúa una medida, una visualización o una interacción del usuario. Este es el contexto más potente y determinante en el comportamiento de los indicadores, ya que define qué subconjunto de información queda disponible para el cálculo.
        p.mb-0 En otras palabras, el contexto de filtro establece qué parte del modelo está siendo considerada en un momento específico. Entre los principales orígenes del contexto de filtro se encuentran:
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img76.png", alt="").m-auto
    .fondo___carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img77.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img78.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Segmentadores de datos (#[i Slicers])
                p.mb-0.text-center El usuario selecciona un año, una categoría o una sede.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img79.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Panel de filtros
                p.mb-0.text-center Filtros aplicados a nivel de página, de reporte o de visualización.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img80.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Ejes y leyendas de visuales
                p.mb-0.text-center Una barra en un gráfico de barras filtra los datos por el valor de su eje.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img81.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Interacciones entre visuales
                p.mb-0.text-center Seleccionar una barra en un gráfico resalta o filtra otros visuales.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img82.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Lógica de DAX (modificación)
                p.mb-0.text-center Funciones como #[b CALCULATE] pueden #[b modificar] el contexto de filtro existente.
        p.mb-5 Las medidas se evalúan dentro del contexto de filtro, lo que explica por qué un mismo indicador puede mostrar valores distintos según la interacción o selección del usuario. Un aspecto fundamental del contexto de filtro es su comportamiento a través de las relaciones del modelo de datos. En un modelo dimensional, el filtro fluye normalmente:
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .style___tarjeta_rob_1.mb-3
            p.mb-0.text-center #[b Desde la tabla de dimensión (lado uno). ]
        .style___tarjeta_rob_1
            p.mb-0.text-center #[b Hacia la tabla de hechos (lado varios). ]
      .col-xl-4.col-md-9(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img174.jpg', alt='').m-auto
    .box___style_7.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1.fit___box_container
          p.mb-0 Este flujo permite que, al seleccionar una sede, una fecha o un servicio, el modelo filtre automáticamente los registros asociados en la tabla de hechos. Por el contrario, el filtro no fluye de manera inversa de forma predeterminada, salvo que se configure explícitamente un filtrado bidireccional. Desde el punto de vista del diseño del modelo, esta configuración debe evaluarse cuidadosamente, ya que puede generar ambigüedades, afectar el rendimiento y producir resultados inesperados.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img83.png', alt='').m-auto
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Relación entre medidas y contexto de filtro
    p.mb-5 Las medidas se evalúan siempre dentro del contexto de filtro activo. Esta es la razón por la que un mismo indicador puede presentar resultados distintos según:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            p.mb-0.text-center #[b El periodo seleccionado. ]
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            p.mb-0.text-center #[b La sede filtrada. ]
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            p.mb-0.text-center #[b El servicio consultado. ]
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            p.mb-0.text-center #[b La interacción con otros gráficos del tablero. ]
    p.mb-0 Comprender este comportamiento permite diseñar indicadores más precisos, interpretar correctamente los resultados y evitar errores de lectura analítica. Dominar el contexto en #[i Data Analysis Expressions] constituye una base esencial para construir medidas confiables, responder preguntas de negocio con mayor precisión y aprovechar de forma eficiente el potencial analítico de Power BI. 
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Funciones más representativas
    p.mb-5 A continuación, se presenta una explicación clara sobre las principales funciones de #[i Data Analysis Expressions], las cuales son fundamentales para comprender cómo se construyen métricas y análisis dinámicos en Microsoft Power BI.
    figure(data-aos="zoom-in").mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/KgDhLEGii9Q" title="Funciones DAX para el análisis dinámico de datos en Microsoft Power BI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.fit___figcaption-video(data-aos="zoom-in") #[b Video]. Funciones DAX para el análisis dinámico de datos en Microsoft Power BI.
    p.mb-5 Entre las funciones más utilizadas en analítica descriptiva se encuentran:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___card_sinbordes.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img84.png', alt="" ).m-auto
            h4.text-center Agregación
            .box___card_sinbordes_p
              p.mb-0.text-center SUM, AVERAGE, COUNT, DISTINCTCOUNT. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___card_sinbordes.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img85.png', alt="" ).m-auto
            h4.text-center Contexto
            .box___card_sinbordes_p
              p.mb-0.text-center CALCULATE, FILTER. 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___card_sinbordes.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img86.png', alt="" ).m-auto
            h4.text-center Tiempo
            .box___card_sinbordes_p
              p.mb-0.text-center TOTALYTD, SAMEPERIODLASTYEAR. 
      .col-xl-3.col-md-9(data-aos="fade-left")
        .box___card_sinbordes.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img87.png', alt="" ).m-auto
            h4.text-center Lógicas
            .box___card_sinbordes_p
              p.mb-0.text-center  IF, SWITCH.  
    p.mb-5 Estas funciones permiten construir indicadores alineados con los requerimientos del análisis, responder preguntas específicas del negocio y enriquecer el comportamiento de los tableros.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img88.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Función CALCULATE: el núcleo del contexto en DAX").ajuste-cajaAcordion
            p La función #[b CALCULATE] es considerada la más importante, ya que su propósito consiste en modificar el contexto de filtro antes de ejecutar una expresión. Su importancia radica en que permite redefinir temporalmente qué datos deben ser considerados para un cálculo, independientemente de los filtros activos en el reporte.
            .box___style_8.text-center
              h4.mb-0 CALCULATE(&lt;expresión&gt;, &lt;filtro1&gt;, &lt;filtro2&gt;, ...)
            p En esta estructura:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Expresión]: corresponde a una medida existente o a una agregación directa. Ejemplo: Total de ventas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Filtros]: corresponden a condiciones que obligan al modelo a considerar únicamente determinados registros. 
            p Esta función resulta especialmente útil cuando se requiere controlar el comportamiento del cálculo más allá de la selección del usuario. Por ejemplo, si se desea conocer cuánto se vendió en 2026 sin importar el año seleccionado en un segmentador, es posible redefinir el contexto temporal del cálculo para que el resultado siempre corresponda a ese periodo.
            .box___style_8.text-center
              h4.mb-0 Ventas 2026 = CALCULATE([Total Ventas], Dim_Tiempo[Año] = 2026)
          .row(titulo="Funciones de iteración: SUMX y AVERAGEX").ajuste-cajaAcordion
            p Las funciones iteradoras, identificadas por terminar en la letra “X”, permiten recorrer una tabla fila por fila, aplicar un cálculo en cada registro y posteriormente consolidar el resultado. A diferencia de funciones agregadas simples como SUM, que operan directamente sobre una columna, las funciones iteradoras crean un contexto de fila temporal para resolver cálculos más complejos.
            .box___style_8.text-center
              h4.mb-0 SUMX(&lt;tabla&gt;, &lt;expresión&gt;)
            p En esta sintaxis:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Tabla]: corresponde al conjunto de registros que se recorrerá. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Expresión]: representa el cálculo que debe ejecutarse en cada fila. 
            p Este tipo de función es especialmente útil cuando el resultado depende de combinar varias columnas dentro de un mismo registro antes de consolidar el valor total.
            p Por ejemplo, si se requiere calcular el valor real de ventas multiplicando cantidad por precio unitario en cada transacción y luego sumar el total general, una suma simple no sería suficiente, ya que produciría un resultado incorrecto. En este escenario, se utiliza una función iteradora:
            .box___style_8.text-center
              h4.mb-0 Venta Total Real = SUMX(Fact_Ventas, Fact_Ventas[Cantidad] * Fact_Ventas[PrecioUnitario])
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Funciones de inteligencia de tiempo
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_6.fit___box_6(data-aos="zoom-in")
          p.mb-0 Las funciones de inteligencia de tiempo en DAX permiten comparar periodos de manera automática, por ejemplo, #[b este mes frente al mes anterior o un periodo actual frente al mismo periodo del año anterior]. Para que estas funciones operen correctamente, se requiere una tabla #[b Dim_Tiempo] marcada como #[b tabla de fechas] dentro del modelo.
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img89.jpg', alt='').m-auto
      .col-xl
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img90.svg', alt='' style="max-width: 80px")
        p.mb-0 Entre las funciones más utilizadas en este grupo se encuentran #[b TOTALYTD] y #[b SAMEPERIODLASTYEAR], ya que facilitan análisis acumulados y comparaciones históricas fundamentales para la toma de decisiones.
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="TOTALYTD (Total <em>Year-to-Date</em>)")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img91.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 TOTALYTD (Total #[i Year-to-Date])
            p Esta función calcula el acumulado desde el #[b 1 de enero] hasta la fecha actual dentro del contexto del filtro aplicado. Es especialmente útil para construir indicadores de seguimiento anual, como ventas acumuladas, costos acumulados o cumplimiento presupuestal.
            .box___style_9
              h4.mb-0 Ventas Acumuladas Año = TOTALYTD([Total Ventas], Dim_Tiempo[Fecha])
            p.mb-0 Con esta expresión, se obtiene el valor acumulado de la medida <strong>[Total Ventas]</strong> a lo largo del año en curso, tomando como referencia la columna <strong>Dim_Tiempo[Fecha]</strong>.
      .py-3.py-md-4(titulo="SAMEPERIODLASTYEAR")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img92.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 SAMEPERIODLASTYEAR
            p Esta función devuelve el conjunto de fechas correspondiente al #[b mismo periodo del año anterior]. Su uso es clave para medir crecimiento, variación interanual y comportamiento histórico comparable.
            .box___style_9.mb-3.text-center
              h4.mb-0 Ventas Año Anterior = CALCULATE([Total Ventas], SAMEPERIODLASTYEAR(Dim_Tiempo[Fecha]))
            p.mb-0 En este caso, #[b CALCULATE] evalúa la medida <strong>[Total Ventas]</strong> sobre el periodo equivalente del año previo, lo que permite contrastar directamente el desempeño actual con el histórico.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Funciones de relación: RELATED y RELATEDTABLE
    p.mb-5 Las funciones de relación permiten navegar entre tablas conectadas dentro del modelo de datos. Su propósito principal es recuperar información relacionada sin necesidad de duplicar estructuras ni romper la lógica del modelo relacional. Estas funciones son especialmente importantes cuando se trabaja con esquemas en estrella, donde una tabla de hechos se conecta con tablas de dimensiones.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/img93.png", alt="").m-auto
      .col-xl
        .box___style_1.fit___box_1(data-aos="fade-left").mb-3
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b RELATED]: se utiliza en el lado “#[b Varios]” de la relación para traer un dato desde el lado “#[b Uno]”. Por ejemplo, permite llevar el nombre de la categoría desde una tabla de dimensiones hacia una tabla de ventas. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b RELATEDTABLE]: se utiliza en el lado “#[b Uno]” para obtener una subtabla con todos los registros relacionados del lado “#[b Varios]”.
        p.mb-0 Esta lógica facilita cálculos más completos y consultas contextuales dentro del modelo, especialmente cuando se requiere combinar atributos descriptivos con métricas transaccionales.
    .color___box_1
      .px-5
        p.mb-5 La siguiente tabla organiza el uso y propósito de algunas funciones DAX frecuentes en escenarios de análisis de datos y construcción de medidas.
        .row.justify-content-center.mb-0
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 1.
              span Tabla comparativa: uso y propósito de funciones DAX.
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Función
                    th.ajuste-border-tabla.texto-left Tipo
                    th.texto-left Cuándo usarla
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b SUM / COUNT]
                    td.ajuste-border-tabla.texto-left Agregación simple
                    td.texto-left Cálculos básicos sobre una sola columna.
                  tr
                    td.ajuste-border-tabla.texto-left #[b CALCULATE]
                    td.ajuste-border-tabla.texto-left Modificador
                    td.texto-left Siempre que se necesite cambiar los filtros del reporte.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b SUMX]
                    td.ajuste-border-tabla.texto-left Iterador
                    td.texto-left Cuando el cálculo depende de una operación fila por fila.
                  tr
                    td.ajuste-border-tabla.texto-left #[b FILTER]
                    td.ajuste-border-tabla.texto-left Filtro
                    td.texto-left Cuando se necesita una condición compleja dentro de un #[b CALCULATE].
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b DIVIDE]
                    td.ajuste-border-tabla.texto-left Matemática
                    td.texto-left Para realizar divisiones seguras (maneja errores de división por cero).
        <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
        Separador
        #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.5 Buenas prácticas y errores frecuentes en el uso de DAX
        p.mb-5 El uso adecuado de DAX no solo mejora el rendimiento del modelo, sino que también facilita el mantenimiento, la trazabilidad y la comprensión de los cálculos a lo largo del tiempo. Por ello, es clave aplicar criterios de diseño que permitan construir soluciones sostenibles y confiables.
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
          .col
            h3 Buenas prácticas
        p.mb-5 Para lograr medidas claras, reutilizables y alineadas con los objetivos del análisis, se recomienda adoptar las siguientes prácticas:
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/img94.jpg", alt="").m-auto
      .col-xl
        .box___style_1.fit___box_1-6(data-aos="fade-left")
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Definir medidas con nombres claros y significativos, de modo que su propósito sea comprensible desde el primer momento. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Documentar el propósito de cada cálculo, especialmente cuando la lógica incluya filtros, iteraciones o condiciones específicas. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Evitar duplicar lógica en diferentes visualizaciones, centralizando los cálculos en medidas reutilizables. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Priorizar la simplicidad y legibilidad de las expresiones, evitando fórmulas innecesariamente extensas o complejas. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Alinear cada medida con un requerimiento específico, garantizando coherencia entre necesidad del negocio, modelo y tablero.
    p.mb-5 Estas prácticas fortalecen la trazabilidad entre los requerimientos funcionales, el modelo de datos y la construcción de los paneles analíticos, lo que favorece una solución más ordenada y escalable.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Errores frecuentes en el uso de DAX
    p.mb-5 A continuación, se presenta un pódcast sobre los errores frecuentes en el uso de DAX, con el propósito de reconocer las prácticas que pueden afectar la precisión, el rendimiento y la mantenibilidad de los modelos analíticos.
    .row.align-items-center.m-0.mb-0
      .col-xl
        .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
          .col-auto.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/img95.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Errores frecuentes en el uso de DAX"
              :audio="require('@/assets/componentes/audios/Errores_frecuentes_uso_DAX.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto.d-none.d-xl-block
        figure(data-aos="fade-left")
          img(src="@/assets/curso/temas/img96.png" ).m-auto
    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.6 Caso orientador aplicado a DAX
    p.mb-5 La institución de servicios requiere indicadores como:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            p.mb-0.text-center #[b Número total de atenciones.]
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            p.mb-0.text-center #[b Tiempo promedio de atención.]
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            p.mb-0.text-center #[b Atenciones por sede y servicio.]
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .style___tarjeta_rob.h-100
          .p-4
            p.mb-0.text-center #[b Comparación por periodos. ]
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Rol de DAX en el caso
    .box___style_7.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1.fit___box_container
          p A partir de los datos preparados:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | DAX permite definir una medida de total de atenciones que responda a filtros por fecha, sede o servicio. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Se construyen medidas de promedios que excluyen valores atípicos según reglas del negocio. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Se definen indicadores comparativos por periodo sin duplicar datos. 
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img97.png', alt='').m-auto
    p.mb-5 A continuación, se presenta un ejemplo de la primera medida mencionada: la medida de total de atenciones. Este caso sirve como base para comprender cómo DAX permite construir las demás medidas requeridas en el análisis.
    .row.justify-content-center.mb-0
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 8.
          span Medida DAX que permite definir una medida de total de atenciones que responde a los filtros seleccionados por el usuario.
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img98.png', alt='Captura con una medida DAX para calcular el total de atenciones según filtros de fecha, sede o servicio. ').m-auto

</template>

<script>
export default {
  name: 'Tema3',
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
