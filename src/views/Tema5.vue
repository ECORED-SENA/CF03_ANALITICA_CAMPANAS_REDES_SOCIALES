<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 5
        h1 Presentación de resultados e #[i insights] estratégicos
      p.mb-5 La presentación de resultados e #[i insights] estratégicos corresponde al proceso de comunicar de manera estructurada, clara y analítica los hallazgos obtenidos durante la evaluación final de campañas digitales. Este proceso permite transformar los datos recopilados mediante herramientas analíticas en información comprensible y útil para la toma de decisiones estratégicas dentro de las organizaciones.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-3(data-aos="fade-right")
            p.mb-0 Presentar resultados no consiste únicamente en comunicar métricas o indicadores numéricos, sino en interpretar su significado, explicar los comportamientos observados y comunicar conclusiones que permitan comprender el rendimiento real de la campaña digital.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t5/img1.jpg', alt='').m-auto
        .col-xl
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img14.svg', alt='' style="width: 70px")
          p.mb-0 Los #[i insights] estratégicos representan hallazgos relevantes derivados del análisis de métricas, del comportamiento de las audiencias, de la comparación de resultados y de la evaluación del rendimiento comercial. Estos hallazgos permiten identificar oportunidades de mejora, reconocer fortalezas estratégicas y orientar futuras campañas digitales.
      p.mb-5 Una presentación efectiva de resultados debe organizar la información según los objetivos estratégicos, priorizar métricas clave y facilitar la comprensión por parte de diferentes públicos, como equipos de marketing, responsables comerciales, clientes o directivos.
      .caja-3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img2.png', alt='').m-auto
          .col-xl.fit___box_container
            p.mb-0 #[b Por ejemplo], una organización puede presentar un informe final indicando que una campaña superó los objetivos de alcance, pero presentó baja conversión, concluyendo que es necesario optimizar los procesos comerciales en futuras estrategias.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img3.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Los siguientes aspectos permiten comprender la importancia de la presentación estratégica de resultados dentro de los procesos de análisis y comunicación organizacional: 
          br
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Comunicación clara:] facilitar la comprensión de los resultados obtenidos.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Interpretación analítica:] explicar el significado de las métricas evaluadas.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Identificación de #[i insights]:] detectar oportunidades estratégicas de mejora.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Soporte para decisiones:] sustentar acciones organizacionales basadas en datos.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Planeación futura:] orientar el diseño de campañas posteriores.
      p.mb-0 La adecuada presentación de resultados fortalece la comunicación estratégica y permite transformar la información analítica en decisiones orientadas al mejoramiento del rendimiento digital.
      Separador
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Presentación de métricas clave
      p.mb-5 La presentación de métricas clave consiste en seleccionar y comunicar los indicadores más relevantes para evaluar el desempeño final de una campaña digital. No todas las métricas disponibles deben incluirse dentro de una presentación estratégica. Es necesario priorizar aquellas que guardan una relación directa con los objetivos definidos durante la campaña, evitando la saturación de información y favoreciendo la claridad del análisis.
      .caja-3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img4.png', alt='').m-auto
          .col-xl.fit___box_container
            p.mb-0 #[b Por ejemplo], una campaña orientada a la conversión priorizará indicadores como CTR, conversiones, CPA y ROI, mientras que una campaña enfocada en reconocimiento de marca dará mayor relevancia al alcance y a las impresiones.
      p.mb-5 La presentación estratégica de resultados implica seleccionar, organizar e interpretar indicadores clave para comunicar el desempeño de una campaña y apoyar la toma de decisiones: 
      .row.justify-content-center.mb-5
        .col-xl-10
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
            .row(titulo="Métricas utilizadas en presentaciones estratégicas").ajuste-cajaAcordion.ajuste-vineta
              p Las métricas más utilizadas dentro de las presentaciones estratégicas se presentan a continuación:
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Alcance:] medir la visibilidad de la campaña.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b #[i Engagement]:] analizar la interacción de la audiencia.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b CTR:] evaluar el interés generado por los contenidos o anuncios.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Conversión:] medir el cumplimiento de los objetivos comerciales.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b ROI:] analizar la rentabilidad de la inversión realizada.
            .row(titulo="Selección de indicadores según objetivos estratégicos").ajuste-cajaAcordion.ajuste-vineta
              p La selección de indicadores debe responder a los objetivos estratégicos establecidos durante la planificación de la campaña.
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Reconocimiento:] alcance.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Interacción:] #[i engagement].
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Tráfico:] CTR.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Conversión:] conversiones.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Rentabilidad:] ROI.
            .row(titulo="Organización de resultados para la interpretación de información").ajuste-cajaAcordion.ajuste-vineta
              p Una vez seleccionados los indicadores, resulta necesario organizar los resultados de manera lógica y comprensible para facilitar su interpretación.
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Rendimiento general:] alcance e interacción. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Conversión:] resultados comerciales obtenidos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Rentabilidad:] ROI de la campaña. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Comparaciones:] análisis frente a campañas previas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Hallazgos:] #[i insights] estratégicos identificados.
            .row(titulo="Comunicación e interpretación de hallazgos analíticos").ajuste-cajaAcordion.ajuste-vineta
              p La comunicación de hallazgos analíticos permite explicar el significado de los resultados obtenidos y transformar los datos en información útil para la toma de decisiones.
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Alto alcance:] buena visibilidad de la campaña. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Bajo CTR:] poco interés generado por los contenidos o anuncios. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Alta conversión:] estrategia con resultados favorables en el cumplimiento de objetivos comerciales.
      p.mb-0 La adecuada selección, organización y comunicación de métricas fortalece la calidad del análisis y mejora la presentación estratégica de resultados.
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Generación de #[i insights] finales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-2(data-aos="fade-right")
            p.mb-0 La generación de #[i insights] finales corresponde al proceso de identificar conclusiones estratégicas derivadas del análisis integral de los resultados obtenidos en una campaña digital. Estos hallazgos permiten comprender el significado de los datos analizados, explicar comportamientos observados y orientar decisiones dirigidas al mejoramiento del rendimiento futuro.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t5/img5.jpg', alt='').m-auto
        .col-xl
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img14.svg', alt='' style="width: 70px")
          p.mb-0 Los #[i insights] no representan únicamente datos numéricos o métricas aisladas. Corresponden a interpretaciones analíticas fundamentadas en evidencia que permiten explicar patrones, tendencias y oportunidades identificadas durante la evaluación de la campaña.
      .caja-3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img6.png', alt='').m-auto
          .col-xl.fit___box_container
            p.mb-0 #[b Por ejemplo], una campaña puede evidenciar altos niveles de interacción durante horarios nocturnos, generando el #[i insight] de que la audiencia presenta mayor actividad digital en ese período y que las futuras publicaciones deberían programarse en dichas franjas horarias.
      p.mb-5 Para que un #[i insight] aporte valor estratégico, debe reunir determinadas características que faciliten su aplicación dentro de los procesos de planificación y optimización.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Relevancia")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img7.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Relevancia
              p.mb-0 Aporta valor estratégico al proceso de evaluación al destacar información significativa para la comprensión del desempeño de la campaña y la toma de decisiones.
        .py-3.py-md-4(titulo="Interpretación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img8.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Interpretación
              p.mb-0 Explica el comportamiento observado en los datos, facilitando la comprensión de tendencias, resultados y factores que influyen en el rendimiento digital.
        .py-3.py-md-4(titulo="Aplicabilidad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img9.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Aplicabilidad
              p.mb-0 Permite implementar acciones futuras orientadas al fortalecimiento de estrategias, la optimización de recursos y la mejora continua de los resultados.
        .py-3.py-md-4(titulo="Relación con datos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img10.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Relación con datos
              p.mb-0 Se fundamenta en evidencia analítica obtenida a partir de métricas, indicadores y resultados verificables, garantizando objetividad en las conclusiones.
      p.mb-5 Los #[i insights] pueden derivarse de diferentes hallazgos obtenidos durante la evaluación de campañas digitales.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mayor conversión móvil
                  p.mb-0 Indica una mejor respuesta de los usuarios que acceden desde dispositivos móviles, lo que sugiere la importancia de fortalecer estrategias orientadas a este tipo de navegación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Baja conversión pese a alto CTR
                  p.mb-0 Evidencia que los usuarios muestran interés inicial al hacer clic, pero existen posibles dificultades en el proceso comercial, la experiencia de usuario o la página de destino que limitan la conversión.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Alta interacción audiovisual
                  p.mb-0 Refleja una preferencia de las audiencias por contenidos dinámicos e interactivos, lo que puede orientar futuras estrategias hacia formatos audiovisuales con mayor potencial de participación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img13.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La interpretación de hallazgos permite transformar la información obtenida en conclusiones orientadas a la acción.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-botones.mb-2(data-aos="fade-right")
            h5 Tabla 15.
            span Interpretación de hallazgos y toma de decisiones estratégicas
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Hallazgo
                  th.ajuste-border-tabla.texto-left Interpretación
                  th.texto-left Decisión
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Alto CTR y baja conversión
                  td.ajuste-border-tabla.texto-left Interés sin cierre comercial
                  td.texto-left Optimizar la página de destino
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Alta interacción
                  td.ajuste-border-tabla.texto-left Contenido efectivo
                  td.texto-left Replicar la estrategia
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Baja retención
                  td.ajuste-border-tabla.texto-left Contenido poco atractivo
                  td.texto-left Ajustar el formato
      p.mb-5 A partir de estas interpretaciones es posible identificar oportunidades de mejora que orienten el diseño de futuras campañas digitales.
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t5/img14.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Preferencia audiovisual
            p.mb-0.text-center Fortalecer contenidos en video.
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t5/img15.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Segmentación efectiva
            p.mb-0.text-center Ampliar públicos similares.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t5/img16.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Conversión móvil alta
            p.mb-0.text-center Priorizar experiencias #[i responsive].
      p.mb-5 Los #[i insights] adquieren mayor valor cuando se transforman en acciones concretas que permitan optimizar el desempeño de las estrategias digitales.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-botones.mb-2(data-aos="fade-right")
            h5 Tabla 16.
            span Hallazgos, #[i insights] y acciones estratégicas
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Hallazgo
                  th.ajuste-border-tabla.texto-left #[i Insight]
                  th.texto-left Acción estratégica
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Alto CTR y baja conversión
                  td.ajuste-border-tabla.texto-left Interés sin cierre comercial
                  td.texto-left Optimizar la página de destino
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Alta interacción nocturna
                  td.ajuste-border-tabla.texto-left Audiencia activa en ese horario
                  td.texto-left Reprogramar publicaciones
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Baja retención
                  td.ajuste-border-tabla.texto-left Contenido poco atractivo
                  td.texto-left Ajustar formatos audiovisuales
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Alto alcance y bajo #[i engagement]
                  td.ajuste-border-tabla.texto-left Difusión sin conexión con la audiencia
                  td.texto-left Rediseñar el mensaje
      p.mb-0 La generación de insights fortalece la capacidad analítica de las organizaciones, facilita la interpretación estratégica de los resultados y contribuye a la construcción de campañas digitales más efectivas y orientadas a objetivos.
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Recomendaciones para futuras campañas 
      p.mb-5 Las recomendaciones estratégicas permiten orientar decisiones futuras a partir de los resultados obtenidos durante la evaluación de campañas digitales. Estas recomendaciones deben fundamentarse en evidencia analítica y surgir de la interpretación técnica y comercial del desempeño alcanzado.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img17.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El propósito de las recomendaciones consiste en transformar los hallazgos identificados durante el análisis en acciones concretas que contribuyan al mejoramiento continuo de las estrategias digitales. La optimización de futuras campañas debe apoyarse en los resultados obtenidos durante la evaluación final. Este enfoque permite priorizar acciones con mayor probabilidad de éxito y evitar decisiones basadas únicamente en percepciones o suposiciones.
          br
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Bajo CTR:] mejorar los mensajes y contenidos utilizados.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Baja conversión:] ajustar los llamados a la acción.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Alta interacción:] replicar contenidos con características similares.
      p.mb-5 Además de las optimizaciones inmediatas, es posible formular propuestas de mejora orientadas al fortalecimiento de campañas posteriores.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Segmentación deficiente
                  p.mb-0 Refinar los públicos objetivo mediante una mejor definición de perfiles, intereses, comportamientos y características demográficas para aumentar la relevancia de las campañas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Bajo rendimiento comercial
                  p.mb-0 Ajustar la estrategia de conversión optimizando los llamados a la acción, las páginas de destino, la experiencia del usuario y los procesos asociados a la generación de resultados comerciales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Baja retención
                  p.mb-0 Rediseñar los formatos de contenido incorporando elementos más atractivos, dinámicos y alineados con las preferencias de la audiencia para incrementar el interés y la permanencia de los usuarios.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img20.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La planificación de campañas futuras debe aprovechar los aprendizajes obtenidos durante la evaluación para fortalecer la efectividad de las estrategias posteriores.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Mejor horario identificado")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img21.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Mejor horario identificado
              p.mb-0 Ajustar la programación de publicaciones para aprovechar los momentos de mayor actividad de la audiencia y aumentar el alcance e interacción de los contenidos.
        .py-3.py-md-4(titulo="Formato exitoso")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img22.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Formato exitoso
              p.mb-0 Incrementar la utilización de los formatos que generan mejores resultados, fortaleciendo su presencia dentro de las estrategias de comunicación digital.
        .py-3.py-md-4(titulo="Segmentación rentable")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img23.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Segmentación rentable
              p.mb-0 Reutilizar y perfeccionar la estrategia de segmentación que presentó mejores resultados, optimizando la inversión y mejora.
      p.mb-5 Con el fin de optimizar la asignación de recursos y esfuerzos, resulta conveniente priorizar las recomendaciones según su impacto esperado sobre los resultados organizacionales.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-botones.mb-2(data-aos="fade-right")
            h5 Tabla 17.
            span Priorización de acciones de mejora e impacto esperado
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Prioridad
                  th.ajuste-border-tabla.texto-left Acción
                  th.texto-left Impacto esperado
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Alta
                  td.ajuste-border-tabla.texto-left Optimizar CTA
                  td.texto-left Mejor conversión
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Alta
                  td.ajuste-border-tabla.texto-left Ajustar segmentación
                  td.texto-left Mayor precisión
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Media
                  td.ajuste-border-tabla.texto-left Rediseñar creatividades
                  td.texto-left Mejor #[i engagement]
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Baja
                  td.ajuste-border-tabla.texto-left Cambios visuales menores
                  td.texto-left Mejora estética
      p.mb-0 La formulación de recomendaciones estratégicas fortalece los procesos de mejora continua, facilita la planificación de futuras campañas y contribuye al logro de resultados más eficientes y sostenibles.

</template>

<script>
export default {
  name: 'Tema5',
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
