<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 1
        h1 Evaluación final del desempeño de campañas digitales
      p.mb-5 El siguiente video presenta los aspectos fundamentales relacionados con la evaluación final del desempeño de campañas digitales, permitiendo comprender cómo se analizan los resultados obtenidos y cómo estos apoyan la toma de decisiones estratégicas.
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Evaluación final del desempeño de campañas digitales
      p.mb-5 Para comprender mejor este proceso, a continuación se presenta los principales aspectos evaluados durante el análisis final de una campaña digital.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cumplimiento de objetivos
                  p.mb-0 Verificar el grado de alcance de las metas estratégicas definidas al inicio de la campaña, determinando si las acciones ejecutadas contribuyeron al logro de los resultados esperados en términos de alcance, interacción, posicionamiento, generación de oportunidades comerciales o conversiones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img1.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Rendimiento de métricas
                  p.mb-0 Analizar el comportamiento de los indicadores clave de desempeño (KPI) para identificar tendencias, fortalezas, debilidades y niveles de rendimiento de las acciones digitales implementadas, facilitando la evaluación objetiva de la campaña.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Impacto comercial
                  p.mb-0 Medir los resultados obtenidos en relación con ventas, registros, solicitudes de información, descargas, generación de clientes potenciales o cualquier otro objetivo comercial establecido, permitiendo determinar el aporte de la campaña a los resultados organizacionales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comportamiento de audiencias
                  p.mb-0 Interpretar las respuestas, intereses, hábitos de interacción y niveles de participación de los usuarios frente a los contenidos publicados, con el fin de comprender mejor las necesidades y preferencias de los diferentes segmentos de audiencia.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Oportunidades de mejora
                  p.mb-0 Identificar aspectos susceptibles de fortalecimiento relacionados con segmentación, contenido, inversión publicitaria, canales utilizados, formatos de comunicación y estrategias de interacción, permitiendo optimizar el diseño y ejecución de futuras campañas digitales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img5.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Complementariamente, existen elementos específicos que permiten profundizar el análisis del desempeño de una campaña digital: 
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img6.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img7.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Alcance
                  p.mb-0.text-center Medir visibilidad de la campaña.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img8.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Interacción
                  p.mb-0.text-center Evaluar participación de audiencias.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img9.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text CTR
                  p.mb-0.text-center Analizar interés generado.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img10.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Conversión
                  p.mb-0.text-center Medir cumplimiento de objetivos comerciales.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img11.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Tráfico digital
                  p.mb-0.text-center Evaluar visitas generadas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img12.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Retención
                  p.mb-0.text-center Interpretar permanencia de usuarios.
          p.mb-0 La evaluación final del desempeño constituye una etapa esencial dentro del análisis de campañas digitales, ya que permite consolidar información estratégica, fortalecer procesos de optimización, mejorar el diseño de futuras acciones comerciales y transformar los datos analíticos en información útil para la toma de decisiones organizacionales.
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Finalidad de la evaluación de campañas
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-1(data-aos="fade-right")
            p.mb-0 La finalidad principal de la evaluación de campañas digitales consiste en determinar el nivel de efectividad alcanzado por una estrategia digital respecto a los objetivos previamente definidos por la organización. La evaluación permite medir si la campaña logró generar reconocimiento, interacción, tráfico, conversiones o cualquier otro resultado esperado según el propósito estratégico establecido durante su planificación.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img13.jpg', alt='').m-auto
        .col-xl
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img14.svg', alt='' style="width: 70px")
          p.mb-0 Además, este proceso facilita interpretar el comportamiento de las audiencias, identificar fortalezas dentro de la estrategia implementada y detectar oportunidades de mejora orientadas a optimizar futuras acciones digitales. Otra finalidad importante corresponde a la posibilidad de justificar decisiones estratégicas mediante datos reales, permitiendo que las organizaciones orienten sus inversiones y recursos hacia acciones con mayor efectividad comprobada.
      .caja-3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img15.png', alt='').m-auto
          .col-xl.fit___box_container
            p.mb-0 #[b Por ejemplo], si una campaña publicitaria logró altos niveles de interacción, pero bajas conversiones, la evaluación permitirá concluir que existe interés por parte del público, aunque es necesario fortalecer el proceso comercial o mejorar el llamado a la acción.
      p.mb-5 Las principales finalidades de la evaluación son las siguientes:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Verificar cumplimiento de objetivos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img16.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Verificar cumplimiento de objetivos
              p.mb-0 Confirmar si las metas planteadas durante la planificación de la campaña fueron alcanzadas, comparando los resultados obtenidos con los indicadores y objetivos previamente establecidos.
        .py-3.py-md-4(titulo="Medir rendimiento digital")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img17.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Medir rendimiento digital
              p.mb-0 Analizar el comportamiento general de la campaña mediante indicadores relacionados con alcance, impresiones, clics, interacción, tráfico y conversiones para determinar su nivel de desempeño.
        .py-3.py-md-4(titulo="Interpretar comportamiento de usuarios")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img18.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Interpretar comportamiento de usuarios
              p.mb-0 Comprender cómo reaccionan las audiencias frente a los contenidos, identificando patrones de interacción, preferencias, intereses y niveles de participación en los diferentes canales digitales.
        .py-3.py-md-4(titulo="Identificar oportunidades de mejora")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img19.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Identificar oportunidades de mejora
              p.mb-0 Detectar fortalezas, debilidades y áreas susceptibles de optimización que permitan ajustar estrategias, mejorar la segmentación y fortalecer futuras campañas digitales.
        .py-3.py-md-4(titulo="Justificar decisiones estratégicas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img20.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Justificar decisiones estratégicas
              p.mb-0 Sustentar la toma de decisiones mediante evidencia cuantitativa y cualitativa obtenida a partir del análisis de datos, facilitando la planificación de acciones futuras con mayor fundamento.
      p.mb-5 La identificación de oportunidades de mejora constituye uno de los resultados más importantes del proceso de evaluación, ya que permite detectar aspectos susceptibles de optimización dentro de futuras campañas digitales y fortalecer el desempeño de las estrategias implementadas.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img21.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Las oportunidades de mejora pueden surgir a partir del análisis de métricas, del comportamiento de las audiencias, de los resultados comerciales obtenidos o de la efectividad de las acciones desarrolladas durante la campaña. Algunas oportunidades identificadas durante la evaluación se describen a continuación:
          br
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Baja retención:] mejorar los formatos audiovisuales. 
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Segmentación limitada:] ajustar los públicos objetivo. 
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Bajo CTR:] fortalecer los llamados a la acción. 
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Alta interacción sin conversión:] optimizar el proceso comercial.
      p.mb-0 La evaluación de campañas digitales fortalece los procesos de análisis estratégico y permite orientar decisiones comerciales y comunicativas con mayor precisión, contribuyendo al mejoramiento continuo de las acciones digitales.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Criterios de evaluación de rendimiento
      p.mb-5 Los criterios de evaluación de rendimiento corresponden a #[b los parámetros utilizados para analizar la efectividad de una campaña digital] una vez finalizada su ejecución. Estos criterios permiten medir el cumplimiento de objetivos estratégicos, interpretar el comportamiento de métricas clave y determinar el impacto real de las acciones desarrolladas dentro de plataformas digitales.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img22.png', alt='').m-auto
        .col-xl
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img23.svg', alt='').m-auto
            .col-xl
              p.mb-0 La evaluación del rendimiento no debe realizarse únicamente mediante la observación de resultados generales, sino a través de criterios técnicos que permitan comparar los objetivos planteados con los resultados alcanzados. Esto facilita establecer #[b conclusiones objetivas] sobre la efectividad de la campaña y sustentar decisiones estratégicas basadas en datos analíticos.
          p.mb-0 Los criterios de evaluación pueden variar según la naturaleza de la campaña y los objetivos definidos. Por ejemplo, las campañas orientadas al reconocimiento de marca requieren criterios enfocados en alcance, impresiones y visualizaciones, mientras que las campañas comerciales priorizan #[b conversiones, CTR, costo por adquisición o retorno de inversión].
      p.mb-5 Aplicar criterios claros de evaluación también permite estandarizar procesos de análisis dentro de las organizaciones y fortalecer la interpretación técnica de los resultados digitales. Por ejemplo, una organización puede establecer como criterio de evaluación que una campaña de captación debe alcanzar una tasa mínima de conversión del 5 %, permitiendo comparar el rendimiento real frente al estándar definido. Los criterios generales utilizados para evaluar campañas digitales se presentan a continuación:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img24.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Cumplimiento de objetivos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Verificar el nivel de alcance de las metas estratégicas definidas para la campaña, comparando los resultados obtenidos con los indicadores y objetivos establecidos durante la planificación.
            .row(titulo="Rendimiento de métricas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Analizar el comportamiento de los indicadores clave de desempeño para identificar tendencias, fortalezas, debilidades y niveles de rendimiento de las acciones ejecutadas.
            .row(titulo="Efectividad comercial").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Medir los resultados relacionados con conversiones, ventas, registros, generación de clientes potenciales u otros objetivos comerciales, determinando el aporte de la campaña a los resultados organizacionales.
            .row(titulo="Participación de audiencias").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Evaluar el grado de interacción, compromiso y respuesta de los usuarios frente a los contenidos, identificando patrones de comportamiento y niveles de involucramiento.
            .row(titulo="Impacto de optimizaciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Medir los efectos generados por las acciones de mejora implementadas, determinando si los ajustes realizados contribuyeron al fortalecimiento del desempeño y los resultados de la campaña.
      p La comparación entre objetivos y resultados constituye uno de los criterios más importantes dentro de la evaluación del rendimiento, ya que permite determinar el nivel real de cumplimiento alcanzado por una campaña digital al finalizar su ejecución.
      p.mb-5 Este proceso consiste en contrastar las metas definidas durante la planificación con los indicadores obtenidos, facilitando el análisis estratégico y la evaluación del desempeño global de la campaña. Comparar resultados permite identificar fortalezas, detectar desviaciones y comprender qué factores influyeron positiva o negativamente sobre el desempeño de la estrategia.
      .caja-3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img25.png', alt='').m-auto
          .col-xl.fit___box_container
            p.mb-0 #[b Por ejemplo], una campaña puede haber superado sus objetivos de alcance, pero no haber logrado suficientes conversiones, indicando que la estrategia fue efectiva en términos de visibilidad, pero limitada desde la perspectiva comercial.
      p.mb-5 La siguiente tabla presenta ejemplos de comparación entre objetivos y resultados:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-botones.mb-2(data-aos="fade-right")
            h5 Tabla 1.
            span Cumplimiento de objetivos de la campaña
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Objetivo
                  th.ajuste-border-tabla.texto-left Resultado
                  th.texto-left Evaluación
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Reconocimiento
                  td.ajuste-border-tabla.texto-left Alcance superior al esperado
                  td.texto-left Objetivo superado
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Conversión
                  td.ajuste-border-tabla.texto-left Menor al objetivo
                  td.texto-left Cumplimiento parcial
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Interacción
                  td.ajuste-border-tabla.texto-left Alto #[i engagement]
                  td.texto-left Objetivo alcanzado
      p.mb-5 La aplicación de criterios de evaluación fortalece el análisis técnico del rendimiento de campañas digitales y permite desarrollar procesos de mejora orientados a resultados medibles.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img26.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Métricas clave para evaluación final
      p Las métricas clave para evaluación final corresponden a los indicadores cuantificables utilizados para analizar el rendimiento global de una campaña digital una vez concluida su ejecución. Estas métricas permiten interpretar los resultados obtenidos frente a objetivos comerciales, comunicativos o estratégicos, facilitando procesos de análisis comparativo y toma de decisiones organizacionales.
      p.mb-5 La selección de métricas depende del propósito de la campaña. No todas las métricas resultan relevantes para todos los casos; por ello, es necesario elegir indicadores alineados con los objetivos definidos.
      .caja-3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img27.png', alt='').m-auto
          .col-xl.fit___box_container
            p.mb-0 #[b Por ejemplo], las campañas orientadas al reconocimiento de marca priorizan métricas de visibilidad, mientras que las campañas comerciales se enfocan en indicadores relacionados con conversiones y rentabilidad.
      p.mb-5 Las principales métricas utilizadas durante la evaluación final se describen a continuación:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img6.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img28.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Alcance
                  p.mb-0.text-center Cantidad de usuarios impactados.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img29.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Impresiones
                  p.mb-0.text-center Número de veces que se mostró el contenido.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img30.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text CTR
                  p.mb-0.text-center Nivel de interés generado.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img31.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Tasa de conversión
                  p.mb-0.text-center Cumplimiento de objetivos comerciales.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img32.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text #[i Engagement]
                  p.mb-0.text-center Participación de audiencias.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img33.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Retención
                  p.mb-0.text-center Permanencia de usuarios.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img34.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Costo por adquisición
                  p.mb-0.text-center Eficiencia comercial.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img35.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text ROI
                  p.mb-0.text-center Rentabilidad obtenida.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img36.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La relación entre los objetivos de la campaña y las métricas seleccionadas permite orientar el análisis hacia los resultados más relevantes.
          br
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Reconocimiento:] alcance e impresiones.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Interacción:] #[i engagement].
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Tráfico:] clics y sesiones.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Conversión:] tasa de conversión.  
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Rentabilidad:] ROI. 
      p.mb-5 La interpretación de los resultados finales permite comprender el significado estratégico de las métricas obtenidas y orientar futuras decisiones relacionadas con campañas digitales. El análisis no debe limitarse a identificar valores numéricos, sino que debe considerar el contexto en el que fueron obtenidos, los objetivos planteados y el comportamiento general de las audiencias. La siguiente tabla presenta ejemplos de interpretación aplicada a diferentes resultados:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-botones.mb-2(data-aos="fade-right")
            h5 Tabla 2.
            span Interpretación de resultados y acciones de mejora
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Resultado observado
                  th.ajuste-border-tabla.texto-left Interpretación
                  th.texto-left Acción estratégica
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Alto alcance y baja conversión
                  td.ajuste-border-tabla.texto-left Buena difusión, baja efectividad comercial
                  td.texto-left Optimizar CTA
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Alta interacción
                  td.ajuste-border-tabla.texto-left Contenido atractivo
                  td.texto-left Replicar estrategia
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Bajo CTR
                  td.ajuste-border-tabla.texto-left Poco interés generado
                  td.texto-left Ajustar mensajes
      p.mb-5 La correcta selección e interpretación de las métricas fortalece la precisión del análisis y permite comprender con mayor profundidad el rendimiento real de una campaña digital.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img26.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Indicadores de cumplimiento de objetivos
      p Los indicadores de cumplimiento permiten verificar en qué medida una campaña digital alcanzó los objetivos definidos durante la etapa de planificación. Estos indicadores facilitan comparar las metas proyectadas con los resultados reales obtenidos, permitiendo establecer niveles de desempeño relacionados con éxito, cumplimiento parcial o necesidad de optimización.
      p.mb-5 El análisis de cumplimiento permite interpretar la efectividad de la campaña desde una perspectiva estratégica, considerando no solo los valores absolutos obtenidos, sino también el grado de alineación con los objetivos organizacionales.
      .caja-3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img37.png', alt='').m-auto
          .col-xl.fit___box_container
            p.mb-0 #[b Por ejemplo], una campaña cuyo objetivo era generar 500 registros puede evaluarse comparando el número de conversiones alcanzadas frente a la meta inicialmente establecida.
      p.mb-5 Algunos de los principales indicadores utilizados para evaluar el cumplimiento de objetivos en campañas digitales se describen a continuación:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img38.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Aumentar visibilidad
              p.mb-0.text-center Alcance logrado
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img39.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Incrementar interacción
              p.mb-0.text-center Nivel de #[i engagement]
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img40.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Generar tráfico
              p.mb-0.text-center Clics o sesiones obtenidas
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img41.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Captar registros
              p.mb-0.text-center Conversión lograda
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img42.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Mejorar rentabilidad
              p.mb-0.text-center ROI obtenido
          p.mb-5 Una vez identificados los indicadores correspondientes, es posible realizar análisis comparativos que permitan determinar el nivel de cumplimiento alcanzado.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-botones.mb-2(data-aos="fade-right")
            h5 Tabla 3.
            span Nivel de cumplimiento de metas de la campaña
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Meta
                  th.ajuste-border-tabla.texto-left Resultado obtenido
                  th.texto-left Nivel de cumplimiento
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold 10.000 usuarios alcanzados
                  td.ajuste-border-tabla.texto-left 9.200
                  td.texto-left Alto
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold 500 registros
                  td.ajuste-border-tabla.texto-left 310
                  td.texto-left Medio
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold 5 % de conversión
                  td.ajuste-border-tabla.texto-left 2,8 %
                  td.texto-left Bajo
      p.mb-5 El análisis de cumplimiento permite desarrollar conclusiones objetivas sobre el desempeño estratégico de la campaña, identificar desviaciones respecto a las metas previstas y orientar acciones de mejora para futuras iniciativas digitales.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img26.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Parámetros técnicos de evaluación
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-2(data-aos="fade-right")
            p.mb-0 Los parámetros técnicos de evaluación corresponden a criterios metodológicos utilizados para garantizar que el análisis del rendimiento digital sea preciso, comparable y confiable. Estos parámetros permiten validar la calidad de la información analizada y asegurar que los resultados interpretados respondan a procesos de medición adecuados.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img43.jpg', alt='').m-auto
        .col-xl
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img14.svg', alt='' style="width: 70px")
          p.mb-0 La aplicación de parámetros técnicos contribuye a reducir errores de interpretación, mejorar la consistencia de los análisis y fortalecer la confiabilidad de las conclusiones obtenidas durante la evaluación final de una campaña digital.
      p Entre los principales parámetros se encuentran la confiabilidad de las fuentes de datos, el período evaluado, la consistencia de las métricas utilizadas y la alineación con los objetivos estratégicos previamente establecidos.
      p.mb-5 Por ejemplo, comparar campañas evaluadas en períodos distintos o utilizando métricas diferentes puede generar conclusiones incorrectas y afectar la validez del análisis. Para garantizar la calidad del proceso evaluativo, es necesario considerar los siguientes parámetros técnicos:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Fuente de datos
                  p.mb-0 Garantizar la confiabilidad, validez y calidad de la información utilizada durante el proceso de evaluación, asegurando que los resultados se fundamenten en datos verificables.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img44.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Período evaluado
                  p.mb-0 Permitir comparaciones válidas entre diferentes momentos, campañas o períodos de ejecución, facilitando la identificación de tendencias y variaciones en el desempeño.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img45.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Métricas seleccionadas
                  p.mb-0 Asegurar la coherencia entre los indicadores analizados y los objetivos estratégicos de la campaña, favoreciendo una evaluación alineada con los resultados esperados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img46.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Objetivos definidos
                  p.mb-0 Validar el nivel de cumplimiento de las metas establecidas durante la planificación, determinando el grado de éxito alcanzado por las acciones implementadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img47.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Consistencia metodológica
                  p.mb-0 Mantener la precisión y rigurosidad analítica mediante la aplicación uniforme de criterios, procedimientos e instrumentos de medición durante todo el proceso de evaluación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img48.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La correcta aplicación de estos parámetros fortalece la calidad del análisis, mejora la interpretación de los resultados finales y facilita la toma de decisiones fundamentadas en información confiable.

</template>

<script>
export default {
  name: 'Tema1',
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
