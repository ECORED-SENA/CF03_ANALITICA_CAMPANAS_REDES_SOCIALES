export default {
  global: {
    Name: 'Evaluación y presentación de resultados de campañas digitales',
    Description:
      'Este componente desarrolla conocimientos relacionados con la evaluación final del desempeño de campañas digitales mediante el análisis de métricas, KPI, ROI, reportes e <em>insights</em> estratégicos. También aborda la construcción y presentación de informes especializados, interpretación de resultados comparativos y aplicación de principios éticos y normativos para el tratamiento responsable de datos digitales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-4.png',
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
        titulo: 'Evaluación final del desempeño de campañas digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Finalidad de la evaluación de campañas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Criterios de evaluación de rendimiento',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Indicadores de desempeño y comparación de resultados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clasificación y aplicación de indicadores de desempeño',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Comparación de campañas digitales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: '<em>Benchmarking</em> y análisis comparativo ',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Retorno de inversión (ROI) y rentabilidad digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Interpretación de la rentabilidad digital',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Aplicación del ROI en campañas digitales ',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Construcción de reportes y <em>dashboards</em> digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Informes de rendimiento digital',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: '<em>Dashboards</em> y visualización de datos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Herramientas para construcción de reportes ',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Presentación de resultados e <em>insights</em> estratégicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Presentación de métricas clave',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Generación de <em>insights</em> finales',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Recomendaciones para futuras campañas ',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Normatividad, ética y privacidad en analítica digital ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Buenas prácticas y comunicación estratégica de resultados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Presentación ejecutiva de resultados',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo:
              'Comunicación clara de métricas y síntesis estratégica de resultados',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo:
              'Errores frecuentes y buenas prácticas en evaluación digital',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Errores frecuentes en la evaluación de campañas',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Buenas prácticas en evaluación digital',
            hash: 't_7_5',
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
        download: 'downloads/dist.pdf',
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
      termino: 'Alcance',
      significado:
        'Cantidad de personas o usuarios únicos que han visto o han sido expuestos a un determinado contenido o mensaje publicitario en un período de tiempo determinado.',
    },
    {
      termino: 'Benchmarking',
      significado:
        'Estudio profundizado sobre los competidores para entender las estrategias y mejores prácticas utilizadas por ellos. Este análisis permite que una empresa reproduzca o adapte algunas de esas acciones para atraer al público y fortalecer su relación con él.',
    },
    {
      termino: 'Consentimiento digital',
      significado:
        'Autorización que una persona otorga, generalmente mediante un clic, para que una aplicación, servicio o página web utilice sus datos personales. Puede incluir información como ubicación, hábitos de navegación, fotografías, contactos o mensajes.',
    },
    {
      termino: 'Dashboard',
      significado:
        'Panel de información que presenta datos de forma gráfica para revelar insights y tendencias. Se considera una herramienta estratégica que facilita el análisis, la toma de decisiones y la optimización de procesos dentro de las organizaciones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Enthec. (2025, junio 27). Consentimiento digital: por qué aceptar condiciones no garantiza la seguridad de tus datos. Enthec.',
      link: 'https://enthec.com/consentimiento-digital/',
    },
    {
      referencia:
        'GoDaddy. (2023, noviembre 30). Qué es un dashboard y para qué se usa. GoDaddy.',
      link: 'https://www.godaddy.com/resources/latam/stories/dashboard-que-es-como-funciona',
    },
    {
      referencia:
        'MSMK. (2024, septiembre 11). ¿Qué es el alcance? MSMK University.',
      link: 'https://msmk.university/que-es-el-alcance/',
    },
    {
      referencia:
        'Salesforce. (2021, agosto 20). Benchmarking: ¿qué es y cómo aplicarlo? Salesforce LATAM Blog.',
      link: 'https://www.salesforce.com/mx/blog/que-es-benchmarking-y-como-aplicarlo/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },

    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
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
          nombre: 'Juan José Calderon Gutiérrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristian Fernando Martínez Sánchez',
          cargo: 'Desarrollador fullstack',
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
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
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
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
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
