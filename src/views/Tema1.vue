<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Introducción, instalación y configuración del entorno Power BI
    p.mb-5 En esta unidad, se aborda Power BI desde una perspectiva técnica y estratégica, reconociendo su papel dentro de una solución de analítica descriptiva y de comunicación de datos. Se examinan sus componentes, modalidades de uso, licenciamiento y configuraciones iniciales del entorno, con el propósito de establecer bases sólidas para desarrollar soluciones de nivel intermedio y avanzado alineadas con los requerimientos del negocio.
    .box___style_2(data-aos="zoom-in").mb-5
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img1.jpg', alt='').m-auto
        .col-xl.fit___box_container
          p.mb-0 Power BI es una plataforma de #[i Business Intelligence] desarrollada para transformar datos estructurados en información comprensible y útil para el análisis. Su aporte no se limita a la creación de gráficos o paneles, sino que se integra al flujo completo de la analítica descriptiva: desde la preparación y modelado de datos hasta la interpretación de resultados para la toma de decisiones. Para comprender su alcance dentro de un proyecto de analítica, es importante reconocer cómo se articula con otras etapas del proceso. 
    p.mb-5 A continuación, se presenta esta relación:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_3.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img2.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Preparación de datos
            p.mb-0.text-center Limpia, transforma y organiza la información de origen.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_3.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img3.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Modelado de datos
            p.mb-0.text-center Estructura relaciones, medidas y reglas de negocio.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_3.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img4.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Power BI
            p.mb-0.text-center Permite analizar, explorar y comunicar resultados mediante paneles e informes.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .box___style_3.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img5.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Toma de decisiones
            p.mb-0.text-center Usa los hallazgos para orientar acciones estratégicas.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img6.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Esta integración permite que Power BI funcione como una capa de análisis y presentación sobre modelos de datos consistentes y procesos previamente definidos. En soluciones intermedias y avanzadas, comprender esta posición evita un uso superficial de la herramienta y favorece la construcción de entornos robustos, escalables y sostenibles.
        br
        br
        p La instalación y configuración inicial del entorno no debe asumirse como un paso operativo menor. Una configuración deficiente puede generar dificultades de rendimiento, problemas de seguridad, fallas en la gobernanza de datos y limitaciones en etapas posteriores del proyecto. Por ello, esta unidad establece los fundamentos necesarios para iniciar el trabajo con Power BI, de manera técnica, ordenada y alineada con buenas prácticas.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Componentes de la plataforma Power BI
    p.mb-5 Power BI está conformado por varios componentes que cumplen funciones específicas dentro de una solución de #[i Business Intelligence]. Cada uno responde a necesidades distintas del ciclo analítico, desde la preparación de datos hasta la consulta de información en distintos entornos. Para comprender el papel de cada componente dentro de la arquitectura de la plataforma, se presenta la siguiente organización funcional:
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 1.
          span Ecosistema integral de Power BI
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img7.jpg', alt='Diagrama del ecosistema de Power BI con sus componentes principales: Power BI Desktop, Power BI Service, Power BI Mobile y Power BI Report Server. ').m-auto
    p.mb-5 Cada componente cumple un propósito técnico particular y su comprensión resulta clave para diseñar soluciones escalables y alineadas con los requerimientos del negocio: 
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img8.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Power BI Desktop").ajuste-cajaAcordion
            p.mb-3 Herramienta de autoría de Microsoft para escritorio. Permite conectar e importar datos, ejecutar procesos de transformación (ETL) con Power Query, modelar información con relaciones y medidas DAX, y construir reportes y visualizaciones. En soluciones intermedias y avanzadas, es el entorno central de diseño y desarrollo.
          .row(titulo="Power BI Service (Power BI <em>Online)</em>").ajuste-cajaAcordion
            p.mb-3 Plataforma en la nube bajo modelo #[i Software as a Service] (SaaS). Permite publicar reportes, compartir información, gestionar accesos, configurar actualizaciones automáticas mediante gateways y construir tableros consolidados. Es el entorno de distribución y administración del contenido analítico.
          .row(titulo="Power BI Mobile").ajuste-cajaAcordion
            p.mb-3 Aplicación orientada a la consulta de reportes e indicadores desde dispositivos móviles con iOS y Android. Facilita el acceso oportuno a la información y exige diseñar soluciones claras, legibles y adaptables desde el inicio del proyecto.
          .row(titulo="Power BI Report Server").ajuste-cajaAcordion
            p.mb-3 Solución local (#[i on-premises]) para organizaciones que, por seguridad o regulación, no pueden usar servicios en la nube. Permite alojar reportes dentro de la infraestructura institucional, aunque requiere licenciamiento específico, administración técnica y, mayor nivel de configuración.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Uso y licenciamiento de Power BI
    p.mb-5 En escenarios reales, el licenciamiento de Power BI condiciona el alcance de las soluciones de analítica y reportes. Comprender las modalidades disponibles permite planificar desarrollos acordes con la capacidad técnica, el nivel de colaboración requerido y la escala organizacional, evitando restricciones inesperadas. Antes de revisar las modalidades, es clave reconocer que cada licencia responde a necesidades distintas de creación, publicación y consumo de información.
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Power BI Desktop (gratuito)
                p.mb-0 Permite el desarrollo local de reportes, paneles y modelos de datos. Es ideal para procesos formativos, prácticas académicas y construcción inicial de soluciones sin costo de licenciamiento.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img11.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Power BI Pro
                p.mb-0 Facilita la publicación en la nube, el trabajo colaborativo y el acceso compartido a informes entre usuarios. Es apropiado para equipos que requieren interacción constante con tableros actualizados.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img12.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Power BI Premium (por capacidad)
                p.mb-0 Está orientado a soluciones empresariales de mayor escala. Ofrece mejor rendimiento, mayor capacidad de procesamiento y opciones avanzadas para distribución masiva de contenido.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img13.png', alt='' style="max-width: 500px").m-auto
    p.mb-0 Seleccionar correctamente el tipo de licenciamiento no solo optimiza recursos, sino que también asegura que la solución responda de manera adecuada a las necesidades del entorno de uso.   
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Configuración inicial del entorno de trabajo en Power BI
    p.mb-5 Antes de iniciar el desarrollo de soluciones de analítica y reportes, es fundamental evaluar el entorno técnico en el que se implementará Power BI. Esta revisión permite anticipar condiciones que afectan el desempeño, la estabilidad del sistema y la sostenibilidad del proyecto en el tiempo. Para preparar adecuadamente el entorno de trabajo, se deben considerar los siguientes aspectos clave:
    .fondo___carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img15.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img16.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Capacidad del equipo
                p.mb-0.text-center La memoria RAM, el procesador y el almacenamiento disponible influyen en la velocidad de carga, transformación y procesamiento de datos.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img17.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Volumen de datos
                p.mb-0.text-center La cantidad de registros y fuentes de información determina el nivel de exigencia del modelo y la necesidad de optimización.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img18.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Frecuencia de actualización
                p.mb-0.text-center Permite definir si los datos se cargarán de forma manual, periódica o en tiempo real, según la necesidad del análisis.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img19.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Formato regional
                p.mb-0.text-center Configurar correctamente fechas, separadores decimales y formatos numéricos evita errores de interpretación y transformación.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img20.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Organización de archivos
                p.mb-0.text-center Una estructura clara de carpetas y recursos facilita la trazabilidad, el mantenimiento y la colaboración.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img21.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Acceso a fuentes en línea
                p.mb-0.text-center Verificar permisos, conectividad y credenciales asegura la integración con servicios externos y bases de datos remotas.
        p.mb-5 Realizar esta configuración desde el inicio favorece un entorno de trabajo más ordenado, reduce riesgos operativos y mejora la eficiencia en el desarrollo de soluciones de visualización.
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
          .col
            h3 Configuración inicial del entorno de trabajo en Power BI
    p.mb-5 Una configuración inicial adecuada del entorno de trabajo facilita el desarrollo de reportes, optimiza los tiempos de ejecución y reduce reprocesos durante el ciclo del proyecto. Desde una perspectiva técnica, preparar correctamente el espacio de trabajo permite mantener orden, coherencia y eficiencia desde las primeras etapas. Antes de comenzar con la construcción de modelos y reportes, se recomienda tener en cuenta los siguientes elementos:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img22.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Opciones regionales y de formato").ajuste-cajaAcordion
            p.mb-3 Ajustar idioma, formato de fecha, separadores decimales y configuración local garantiza consistencia en la interpretación de datos, especialmente en proyectos internacionales o con múltiples fuentes.
          .row(titulo="Convenciones de nombres").ajuste-cajaAcordion
            p.mb-3 Definir criterios para nombrar archivos, tablas, medidas y objetos mejora la trazabilidad y facilita el mantenimiento del proyecto.
          .row(titulo="Estructura del proyecto").ajuste-cajaAcordion
            p.mb-3 Organizar carpetas para datos, archivos fuente, reportes y versiones contribuye al control documental y a una gestión ordenada del desarrollo.
          .row(titulo="Paneles principales de la interfaz").ajuste-cajaAcordion
            p.mb-3 Comprender el funcionamiento de los paneles de campos, visualizaciones y filtros permite una interacción más eficiente con el entorno de trabajo.
    p.mb-5 Implementar estas configuraciones desde el inicio fortalece la calidad técnica del proyecto y crea una base sólida para el análisis y la construcción de soluciones de información.
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 2.
          span Ajustar opciones regionales y de formato
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img23.jpg', alt='Captura de configuración de Power BI con opciones regionales y de formato relacionadas con idioma, fechas, números y entorno local. ').m-auto
    p.mb-5 Esta configuración no es solamente estética; constituye una buena práctica profesional en proyectos de analítica y visualización.
    .box___style_4.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img24.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Guía rápida: Descargar e instalar Microsoft Power BI Desktop
          p.mb-0 En el siguiente documento podrá abrir y descargar un archivo PDF con la guía de descarga e instalación de Power BI en su computador. Allí también encontrará una descripción clara de los principales elementos de la aplicación.
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexo_1_Guia_rapida_instalacion_elementos_PowerBI.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img9.svg" style="max-width: 60px").m-auto
      .col
        h3 Power BI como herramienta y no como punto de partida
    p.mb-5 En proyectos de analítica y visualización, uno de los errores más frecuentes consiste en iniciar directamente en la herramienta sin una base analítica previa. Este enfoque suele generar reprocesos, inconsistencias en los datos y soluciones que no responden a las necesidades reales del contexto. Antes de construir reportes o tableros, es necesario comprender que el valor de Power BI depende de las decisiones tomadas en etapas anteriores del proceso.
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 No reemplaza el análisis previo
                p.mb-0 La herramienta no sustituye la definición de objetivos, indicadores, preguntas de negocio ni requerimientos funcionales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img25.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Materializa decisiones previas
                p.mb-0 Los reportes, modelos y paneles reflejan la estructura de datos, reglas de negocio y criterios de análisis definidos con anterioridad.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img26.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Depende de la calidad del modelo de datos
                p.mb-0 Un modelo mal estructurado afecta la precisión, el rendimiento y la utilidad de la solución final.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img27.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Exige claridad en los requerimientos
                p.mb-0 La construcción efectiva de tableros requiere criterios claros sobre usuarios, frecuencia de actualización y propósito del análisis.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img28.png', alt='' style="max-width: 500px").m-auto
    p.mb-0 Comprender el entorno de Power BI permite establecer bases sólidas para avanzar hacia la conexión de fuentes, la preparación de datos y la construcción de tableros. Este enfoque garantiza coherencia entre los requerimientos definidos, la estructura del modelo de datos y la solución de visualización desarrollada.
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
