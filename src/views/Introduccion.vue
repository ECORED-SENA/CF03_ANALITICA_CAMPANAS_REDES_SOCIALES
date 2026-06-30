<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.mb-5 La evaluación del desempeño de campañas digitales constituye un proceso estratégico que permite a las organizaciones analizar los resultados obtenidos en sus acciones de marketing y comunicación dentro de entornos digitales. A través del estudio de métricas relacionadas con alcance, interacción, tráfico, conversiones y rentabilidad, es posible interpretar el comportamiento de las audiencias y determinar el nivel de cumplimiento de los objetivos establecidos. Este análisis facilita la identificación de fortalezas, oportunidades de mejora y acciones orientadas a optimizar futuras estrategias digitales.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/intro/img1.jpg', alt='').m-auto
              .col-xl.fit___box_container
                p.mb-0 Para desarrollar una evaluación integral, resulta necesario interpretar indicadores clave de desempeño (KPI) y métricas financieras como el retorno de inversión (ROI), el costo por adquisición (CPA), la tasa de conversión y el porcentaje de clics (CTR). Estos elementos permiten valorar los resultados alcanzados desde una perspectiva tanto operativa como económica, aportando información relevante para la toma de decisiones relacionadas con inversión publicitaria, segmentación de audiencias y fortalecimiento de campañas. Asimismo, la generación de #[i insights] estratégicos contribuye a comprender patrones de comportamiento y formular recomendaciones basadas en evidencia.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src="@/assets/curso/temas/intro/img2.png", alt="").m-auto  
      p.mb-0 La comunicación de los resultados representa una etapa fundamental dentro del proceso de evaluación, ya que transforma los datos recopilados en información clara, comprensible y útil para diferentes niveles organizacionales. El uso de reportes analíticos y dashboards facilita la organización y presentación de hallazgos, favoreciendo el seguimiento y control de las estrategias implementadas. De igual manera, la aplicación de principios éticos y buenas prácticas en el manejo de la información fortalece la gestión responsable de los datos y contribuye al desarrollo de procesos de análisis orientados al mejoramiento continuo y la toma de decisiones informadas.
        
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
