<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 6
        h1 Normatividad, ética y privacidad en analítica digital 
      p.mb-5 A continuación, se presenta un pódcast sobre los principios normativos, éticos y de privacidad en la analítica digital, destacando la importancia de la gestión responsable de los datos para garantizar la protección de los usuarios, el cumplimiento legal y la confianza organizacional.
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.caja-8(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t6/img1.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Normatividad, ética y privacidad en analítica digital"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t6/img2.jpg" ).m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-5(data-aos="fade-right")
            p.mb-0 El cumplimiento normativo y ético fortalece la gestión responsable de campañas digitales y mejora la confianza de los usuarios frente al uso de tecnologías analíticas. La normatividad aplicada a los datos digitales corresponde al conjunto de principios, regulaciones y lineamientos orientados a controlar el tratamiento de la información recopilada dentro de entornos digitales.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t6/img3.jpg', alt='').m-auto
        .col-xl
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img14.svg', alt='' style="width: 70px")
          p.mb-0 Estas normas buscan proteger los derechos de los usuarios, garantizar el uso responsable de la información y establecer obligaciones para las organizaciones que recopilan, almacenan o procesan datos digitales. Dentro de las campañas digitales, el cumplimiento normativo resulta fundamental debido a la constante interacción con datos relacionados con navegación, comportamiento, formularios, registros y procesos comerciales.
      .caja-3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t6/img4.png', alt='').m-auto
          .col-xl.fit___box_container
            p.mb-0 #[b Por ejemplo], cuando una organización solicita información personal mediante formularios digitales, debe establecer condiciones claras sobre el tratamiento de los datos recopilados y comunicar de manera transparente las finalidades para las cuales serán utilizados.
      p.mb-5 La normatividad digital persigue diversos propósitos orientados a proteger los datos personales y promover prácticas responsables en el tratamiento de la información.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Protección de datos
                  p.mb-0 Resguardar la información personal mediante mecanismos de seguridad, control de acceso y tratamiento adecuado de los datos recopilados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Regulación del tratamiento
                  p.mb-0 Controlar el uso, almacenamiento, transferencia y procesamiento de la información de acuerdo con los principios y disposiciones legales vigentes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Transparencia organizacional
                  p.mb-0 Informar de manera clara las finalidades del tratamiento de datos, los derechos de los titulares y las condiciones bajo las cuales se utiliza la información.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Responsabilidad legal
                  p.mb-0 Cumplir las obligaciones normativas relacionadas con la protección de datos personales, reduciendo riesgos legales y fortaleciendo la gestión responsable de la información.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img8.png', alt='' style="max-width: 500px").m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img9.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La normatividad digital fortalece los procesos responsables de analítica y tratamiento de información dentro de las campañas digitales. Para comprender adecuadamente la aplicación de estas disposiciones, es necesario reconocer algunos conceptos fundamentales relacionados con la gestión de datos y la protección de la privacidad.
          br
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Dato personal:] información asociada a una persona identificada o identificable.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Tratamiento de datos:] uso, almacenamiento o procesamiento de información personal.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Consentimiento:] autorización otorgada por el titular de los datos.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Privacidad:] protección de la información personal frente a accesos no autorizados.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Responsable del tratamiento:] organización que administra y gestiona los datos personales.
      p.mb-0 La comprensión de estos conceptos facilita el cumplimiento de principios normativos y éticos, contribuyendo a una gestión responsable de la información dentro de los procesos de analítica digital.
      
</template>

<script>
import audio1 from '@/assets/curso/podcast/normatividad.mp3'
export default {
  name: 'Tema6',
  data: () => ({
    audio1,
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
