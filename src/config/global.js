export default {
  global: {
    Name:
      'Construcción y validación de soluciones de visualización de datos con Power BI',
    Description:
      'En este componente formativo se aborda la construcción de soluciones de analítica descriptiva mediante el uso de Power BI, incluyendo la conexión y preparación de datos, el diseño de reportes y tableros, y la validación técnica de la solución. Se integran criterios de visualización, usabilidad y calidad de datos para garantizar información confiable y útil para la toma de decisiones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Introducción, instalación y configuración del entorno Power BI',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Componentes de la plataforma Power BI',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Configuración inicial del entorno de trabajo en Power BI',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Conexión, importación y preparación inicial de datos.',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Preparación de datos como puente entre el modelo y la visualización',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Conexión a datos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Introducción al lenguaje de consulta DAX',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Lenguaje analítico en soluciones de visualización',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de cálculos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Contexto en DAX',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Funciones más representativas',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Buenas prácticas y errores frecuentes en el uso de DAX',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Caso orientador aplicado a DAX',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Descubrimiento de datos y conceptos de <em>dashboards</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Del cálculo al análisis: el descubrimiento de datos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: '¿Qué es un <em>dashboard</em>?',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Arquitectura de un <em>dashboard</em> efectivo',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Caso orientador aplicado: estructura conceptual del <em>dashboard</em>',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Caja de herramientas de visualización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Clasificación general de las visualizaciones',
            hash: 't_5_1',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Elementos clave de la caja de herramientas de visualización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Gráficos: la narrativa visual dinámica',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Tablas y matrices: el detalle estructurado y flexible',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Indicadores (tarjetas)',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo:
              'Segmentadores: control intuitivo de la experiencia de usuario (UX)',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Filtros: la segmentación invisible del análisis',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Criterios para seleccionar una visualización adecuada',
            hash: 't_6_6',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Ciclo de validación y mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'La validación como parte del ciclo de vida de la solución',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Validación de la integridad de los datos',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Validación de usabilidad (UX) y <em>feedback</em>',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Ciclo de mejora continua (iteración)',
            hash: 't_7_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/22810025_CF02_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Contexto de filtro',
      significado:
        'conjunto de filtros activos que influyen en el resultado de una medida o cálculo, determinado por segmentadores, visualizaciones o selecciones del usuario.',
    },
    {
      termino: 'DAX (<em>Data Analysis Expressions</em>)',
      significado:
        'lenguaje de expresiones utilizado para definir métricas, cálculos e indicadores analíticos sobre un modelo de datos en Power BI.',
    },
    {
      termino: 'Descubrimiento de datos',
      significado:
        'proceso de exploración e interpretación de métricas y visualizaciones para identificar patrones, tendencias y comportamientos relevantes.',
    },
    {
      termino: 'Ecosistema de datos',
      significado:
        'conjunto de fuentes, sistemas, procesos y actores que interactúan alrededor de los datos dentro de una organización, influyendo en su generación, gestión y uso.',
    },
    {
      termino: 'Fuentes de datos',
      significado:
        'orígenes desde los cuales se obtienen los datos utilizados en procesos de analítica, como bases de datos, archivos planos, registros (<em>logs</em>) o archivos de Excel.',
    },
    {
      termino: 'Granularidad',
      significado:
        'nivel de detalle con el que se registran los datos en un modelo, determinando el tipo de análisis y las agregaciones que pueden realizarse.',
    },
    {
      termino: 'Medida (DAX)',
      significado:
        'cálculo dinámico que se evalúa según el contexto de filtros aplicado en el reporte y se utiliza para construir indicadores.',
    },
    {
      termino: 'Modelo de datos',
      significado:
        'representación estructurada de la información que define entidades, atributos y relaciones, permitiendo organizar los datos de forma coherente para su análisis.',
    },
    {
      termino: 'UX',
      significado:
        'por sus siglas en inglés, <em>User Experience</em>; es la forma en que una persona siente, percibe e interactúa con un producto, en este caso con los tableros de reportes.',
    },
    {
      termino: 'Validación de la solución',
      significado:
        'proceso de verificación de integridad de datos, funcionamiento y usabilidad de un reporte o tablero, orientado a garantizar calidad y confiabilidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Few, S. (2006). Information Dashboard Design: Displaying Data for At-a-glance Monitoring. ',
      link:
        'https://public.magendanz.com/Temp/Information%20Dashboard%20Design.pdf ',
    },
    {
      referencia:
        'Harris, J., & Davenport, T. (2007). Competing on Analytics: The New Science of Winning. ',
      link:
        'https://books.google.com.co/books/about/Competing_on_Analytics.html?id=n7Gp7Q84hcsC&redir_esc=y ',
    },
    {
      referencia:
        'Kenneth C., L., & Laudon, J. (2016). Sistemas de información gerencial. ',
      link:
        'https://gc.scalahed.com/recursos/files/r161r/w25735w/ld-Sistemas_de_informacion_gerencial_14%20edicion.pdf ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del ecosistema virtual de recuersos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fredy Fabian Ortiz Segura',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
