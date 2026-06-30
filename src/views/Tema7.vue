<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 7
        h1 Buenas prácticas y comunicación estratégica de resultados
      p.mb-5 La comunicación estratégica de resultados corresponde al proceso mediante el cual la información obtenida durante la evaluación de campañas digitales es organizada, interpretada y presentada de manera clara, estructurada y orientada a la toma de decisiones. Este proceso permite transformar datos analíticos en información comprensible y útil para diferentes públicos organizacionales, facilitando la comprensión del desempeño de la campaña y el planteamiento de acciones futuras.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2(data-aos="fade-right")
            p.mb-0 Dentro del análisis digital no basta con recopilar métricas o generar reportes técnicos; resulta fundamental comunicar adecuadamente los hallazgos para que la información pueda ser interpretada y utilizada estratégicamente. Una presentación inadecuada de resultados puede generar confusión, interpretaciones erróneas o decisiones incorrectas, aun cuando los datos recopilados sean técnicamente precisos.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t7/img1.jpg', alt='').m-auto
        .col-xl
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img14.svg', alt='' style="width: 70px")
          p.mb-0 Las buenas prácticas en comunicación estratégica implican seleccionar métricas relevantes, contextualizar resultados, evitar la saturación de información, presentar hallazgos de forma comprensible y estructurar conclusiones orientadas a objetivos organizacionales.
      .caja-3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t7/img2.png', alt='').m-auto
          .col-xl.fit___box_container
            p.mb-0 #[b Por ejemplo], un informe dirigido a un equipo directivo no requiere el mismo nivel de detalle técnico que un reporte orientado a analistas digitales; por ello, la presentación debe adaptarse según el público objetivo.
      p.mb-5 La comunicación estratégica permite transformar los datos en información útil para la toma de decisiones, favoreciendo la comprensión de los resultados y el aprovechamiento de los hallazgos obtenidos durante la evaluación de campañas digitales.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Claridad informativa
                  p.mb-0 Facilitar la comprensión de los resultados mediante la presentación organizada, precisa y comprensible de la información obtenida durante la evaluación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Interpretación analítica
                  p.mb-0 Explicar el comportamiento observado en los indicadores y métricas, identificando tendencias, patrones y factores que influyen en el desempeño de la campaña.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comunicación organizacional
                  p.mb-0 Transmitir información útil y relevante a los diferentes niveles de la organización, favoreciendo la comprensión de los resultados y el alineamiento estratégico.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Soporte para decisiones
                  p.mb-0 Sustentar acciones estratégicas mediante evidencia analítica que permita orientar procesos de mejora, optimización y planificación futura.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Profesionalización de informes
                  p.mb-0 Mejorar la presentación técnica de los resultados mediante estructuras organizadas, lenguaje especializado y recursos visuales que fortalezcan la calidad de
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img7.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La adecuada comunicación estratégica fortalece la gestión analítica, mejora la interpretación organizacional de resultados y facilita decisiones fundamentadas en evidencia.
      Separador
      #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.1 Presentación ejecutiva de resultados
      p.mb-5 La presentación ejecutiva de resultados corresponde a la organización estructurada de información analítica con el propósito de comunicar hallazgos relevantes a responsables estratégicos, directivos, equipos comerciales o clientes. A diferencia de los reportes operativos o técnicos detallados, una presentación ejecutiva prioriza síntesis, claridad, indicadores clave y conclusiones orientadas a la toma de decisiones.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t7/img8.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Este tipo de presentación debe centrarse en responder preguntas estratégicas como:
          br
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 ¿Se cumplieron los objetivos?
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 ¿Qué resultados se obtuvieron?
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 ¿Qué métricas fueron más relevantes?
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 ¿Qué hallazgos estratégicos se identificaron?
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 ¿Qué decisiones se recomiendan?
      .caja-9.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 #[b Por ejemplo], una presentación ejecutiva puede resumir una campaña mediante indicadores como alcance, conversiones, ROI, principales insights y recomendaciones futuras.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t7/img9.png', alt='').m-auto
      p.mb-5 La diferencia entre una presentación ejecutiva y un reporte técnico se presenta a continuación:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-botones.mb-2(data-aos="fade-right")
            h5 Tabla 18.
            span Tipos de reportes para la comunicación de resultados
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Tipo
                  th.ajuste-border-tabla.texto-left Características
                  th.texto-left Aplicación
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Presentación ejecutiva
                  td.ajuste-border-tabla.texto-left Síntesis, KPI clave y conclusiones
                  td.texto-left Directivos y clientes
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Reporte técnico
                  td.ajuste-border-tabla.texto-left Detalle completo y análisis profundo
                  td.texto-left Analistas y equipos de #[i marketing]
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t7/img10.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La estructura de una presentación ejecutiva debe facilitar la comprensión de los resultados y orientar la toma de decisiones.
          br
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Contexto:] objetivo de la campaña desarrollada.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Resultados clave:] principales KPI obtenidos.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Comparación:] contraste entre objetivos y resultados alcanzados.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Hallazgos:] #[i insights] relevantes identificados durante el análisis.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Rentabilidad:] ROI y desempeño financiero de la campaña.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Recomendaciones:] acciones propuestas para futuras estrategias.
      p.mb-0 Una estructura organizada fortalece la calidad profesional de la presentación y mejora la comunicación estratégica de los resultados.
      Separador
      #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.2 Comunicación clara de métricas y síntesis estratégica de resultados
      p.mb-5 La comunicación clara de métricas implica presentar indicadores comprensibles, relevantes y contextualizados según el público receptor. No todas las audiencias interpretan métricas técnicas con el mismo nivel de conocimiento; por ello, resulta necesario adaptar la forma de presentación de la información. Las siguientes prácticas favorecen una comunicación más efectiva de los resultados:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Usar métricas relevantes")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img11.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Usar métricas relevantes
              p.mb-0 Incrementa la claridad de los informes al centrar la atención en los indicadores más importantes para el cumplimiento de los objetivos estratégicos.
        .py-3.py-md-4(titulo="Evitar exceso de indicadores")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img12.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Evitar exceso de indicadores
              p.mb-0 Reduce la confusión y facilita el análisis al presentar únicamente la información necesaria para la interpretación de resultados.
        .py-3.py-md-4(titulo="Explicar significado")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img13.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Explicar significado
              p.mb-0 Facilita la comprensión de los datos al contextualizar los resultados y destacar su relevancia dentro de la evaluación realizada.
        .py-3.py-md-4(titulo="Presentar comparaciones")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img14.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Presentar comparaciones
              p.mb-0 Mejora la interpretación de los resultados al permitir contrastar períodos, campañas, objetivos o indicadores para identificar tendencias y variaciones significativas.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t7/img15.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La síntesis estratégica de resultados consiste en resumir los hallazgos más relevantes sin perder valor analítico, permitiendo identificar rápidamente oportunidades de mejora y aspectos críticos para la toma de decisiones.
          br
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Alto alcance:] buena visibilidad digital de la campaña.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Baja conversión:] presencia de debilidades en el proceso comercial.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Alto ROI:] rentabilidad favorable respecto a la inversión realizada.
      p.mb-0 La adecuada comunicación de métricas y la síntesis estratégica fortalecen la interpretación de resultados y contribuyen a una toma de decisiones más efectiva dentro de las organizaciones.
      Separador
      #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.3 Errores frecuentes y buenas prácticas en evaluación digital
      p.mb-5 Durante la evaluación de campañas digitales pueden cometerse errores que afectan la interpretación de resultados y la calidad de las decisiones organizacionales. Reconocer estos errores permite fortalecer los procesos analíticos, mejorar la precisión de los análisis y promover una gestión más efectiva de la información.
      .caja-3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t7/img16.png', alt='').m-auto
          .col-xl.fit___box_container
            p.mb-0 #[b Por ejemplo], interpretar métricas de manera aislada o realizar comparaciones sin criterios homogéneos puede conducir a conclusiones incorrectas y afectar la efectividad de las decisiones estratégicas.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t7/img17.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La identificación temprana de errores favorece el desarrollo de análisis más rigurosos y contribuye a mejorar la calidad de las decisiones basadas en datos.
          br
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Interpretación incorrecta:] puede conducir a decisiones equivocadas.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Comparaciones inválidas:] generan conclusiones erróneas.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Saturación de datos:] provoca confusión durante el análisis de la información.
      p.mb-0 La identificación de errores fortalece el pensamiento crítico y mejora la calidad de los procesos de evaluación digital.
      Separador
      #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.4 Errores frecuentes en la evaluación de campañas
      p.mb-5 Uno de los errores más comunes consiste en interpretar métricas sin considerar el contexto en el que fueron obtenidas. Las métricas adquieren valor cuando se analizan en relación con los objetivos de la campaña, las características de la audiencia y las condiciones de ejecución.
      .caja-3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t7/img18.png', alt='').m-auto
          .col-xl.fit___box_container
            p.mb-0 #[b Por ejemplo], un alto alcance no necesariamente representa éxito comercial, del mismo modo que una alta interacción no garantiza resultados de conversión o rentabilidad.
      p.mb-5 La evaluación de campañas digitales requiere interpretar los resultados de manera integral para evitar conclusiones erróneas y decisiones poco fundamentadas.
      .row.align-items-center.mb-0
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t7/img19.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Alcance alto, CTR alto o interacción alta analizados de forma aislada").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Generar conclusiones equivocadas al asumir éxito comercial, conversión o rentabilidad sin evidencia suficiente.
            .row(titulo="Comparar campañas, períodos o audiencias diferentes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Obtener interpretaciones inválidas debido a la falta de condiciones equivalentes para el análisis.
            .row(titulo="Tomar decisiones sin respaldo analítico o ignorar indicadores clave").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incrementar el riesgo organizacional, generar pérdidas económicas y afectar el rendimiento de las estrategias digitales.
      Separador
      #t_7_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.5 Buenas prácticas en evaluación digital
      p.mb-5 Las buenas prácticas permiten desarrollar procesos de evaluación más precisos, consistentes y orientados al cumplimiento de objetivos estratégicos. Una de las prácticas más importantes consiste en seleccionar indicadores alineados con las metas definidas para cada campaña. La correcta elección de KPI facilita el seguimiento del desempeño y mejora la calidad de los análisis realizados.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Reconocimiento")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img20.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Reconocimiento
              p.mb-0 Alcance, ya que permite medir el nivel de visibilidad y exposición de la campaña ante las audiencias objetivo.
        .py-3.py-md-4(titulo="Interacción")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img21.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Interacción
              p.mb-0 #[i Engagement], debido a que evalúa la participación de los usuarios mediante reacciones, comentarios, compartidos y otras formas de interacción.
        .py-3.py-md-4(titulo="Conversión")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img22.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Conversión
              p.mb-0 Tasa de conversión, utilizada para determinar el porcentaje de usuarios que realizan la acción deseada frente al total de visitantes o clics obtenidos.
        .py-3.py-md-4(titulo="Rentabilidad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img23.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Rentabilidad
              p.mb-0 ROI, indicador que permite analizar la relación entre la inversión realizada y los beneficios generados por la campaña.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t7/img24.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Además de seleccionar indicadores adecuados, es necesario interpretar los resultados considerando el contexto en el que fueron obtenidos. Los datos deben analizarse teniendo en cuenta las características de la audiencia, los objetivos de la campaña y las condiciones de ejecución.
          br
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Conversión baja:] puede depender de factores asociados al proceso comercial.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Alcance alto:] no siempre implica el éxito de la campaña.
      p.mb-5 Otra práctica fundamental corresponde a la comunicación responsable de los hallazgos obtenidos durante la evaluación. La información debe presentarse de manera transparente, precisa y fundamentada en evidencia verificable.
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t7/img25.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Presentar datos verificables
            p.mb-0.text-center Fortalecer la transparencia mediante el uso de información confiable, comprobable y sustentada en fuentes válidas de análisis.
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t7/img26.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Evitar manipulación de información
            p.mb-0.text-center Promover principios de ética en la comunicación de resultados, garantizando que los datos sean presentados de manera objetiva y responsable.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t7/img27.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Explicar limitaciones
            p.mb-0.text-center Favorecer la honestidad analítica al reconocer restricciones metodológicas, alcances de la evaluación o posibles factores que influyen en la interpretación.
      p.mb-5 La aplicación de estas buenas prácticas fortalece la calidad de los procesos de evaluación digital, mejora la confiabilidad de los resultados y contribuye a una toma de decisiones más efectiva dentro de las organizaciones.
      .caja-10.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t7/img28.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Caso práctico integrador
            p.mb-0 Se invita a los aprendices a participar en el desarrollo del caso práctico integrador, una actividad diseñada para aplicar los conocimientos adquiridos sobre evaluación de campañas digitales, análisis de indicadores, interpretación de resultados y toma de decisiones estratégicas.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_caso_practico_integrador.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema7',
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
