<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario estratégico del desempeño de campañas digitales',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo</b>:Analizar el desempeño final de una campaña digital mediante la interpretación de indicadores clave de rendimiento (KPI), cálculo de métricas financieras, evaluación comparativa de resultados y formulación de recomendaciones estratégicas orientadas a la optimización de futuras campañas digitales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de la evaluación final de una campaña digital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar tendencias de comportamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Determinar el cumplimiento de los objetivos planteados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Registrar todas las actividades ejecutadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Actualizar la estrategia de contenidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué permite identificar la comparación entre objetivos y resultados?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de campañas ejecutadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las características de la plataforma utilizada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El nivel de cumplimiento alcanzado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Los recursos empleados en la campaña.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Una campaña superó su meta de alcance, pero no logró las conversiones esperadas. ¿Qué conclusión puede obtenerse?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La estrategia favoreció la visibilidad más que la conversión.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La inversión realizada fue insuficiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los indicadores seleccionados no fueron adecuados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La audiencia no recibió los contenidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes indicadores se relaciona directamente con la rentabilidad de una campaña?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alcance.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Engagement.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Impresiones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'ROI.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Por qué es importante utilizar criterios de evaluación previamente definidos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permiten interpretar resultados de forma consistente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Facilitan reemplazar los objetivos establecidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Garantizan mejores resultados comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducen la necesidad de analizar indicadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué característica distingue a un KPI de una métrica general?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se utiliza únicamente en medios digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Representa un indicador asociado a objetivos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mide exclusivamente variables financieras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se aplica únicamente al cierre de campañas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Si el objetivo principal de una campaña es aumentar el reconocimiento de marca, ¿qué KPI sería más pertinente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tasa de conversión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'ROI.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'CPA.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Alcance.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es el beneficio principal de comparar campañas digitales desarrolladas en distintos periodos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la necesidad de seguimiento continuo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Identificar diferencias de rendimiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la cantidad de indicadores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar procesos de optimización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué aporta el benchmarking dentro de la evaluación de campañas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La automatización de reportes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La definición de nuevos KPI.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La comparación con referentes previos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La eliminación de métricas secundarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué situación refleja una oportunidad de mejora en una campaña digital?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conversión superior a la meta establecida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alcance consistente con los objetivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Bajo CTR frente a lo esperado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incremento sostenido del ROI.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué información proporciona principalmente el ROI en una campaña digital?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El nivel de interacción alcanzado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La frecuencia de visualización obtenida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La cantidad de contenidos publicados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La relación entre inversión y resultados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Si una campaña obtuvo ingresos por encima de la inversión realizada, ¿qué puede concluirse sobre el ROI?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presenta un resultado favorable.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Refleja una disminución del alcance.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Representa una reducción de conversiones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Indica una baja rentabilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Cuál es la principal utilidad de un dashboard ejecutivo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Automatizar tareas operativas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presentar información para decisiones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar contenidos publicitarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Almacenar archivos de campañas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué característica debe tener un informe de resultados efectivo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contener la mayor cantidad de métricas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presentar únicamente datos financieros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mostrar información clara y relevante.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Excluir resultados con bajo desempeño.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué permite identificar un insight accionable?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una oportunidad de mejora.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un cambio de imagen institucional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una tarea pendiente del equipo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una variación sin relevancia estratégica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Por qué es importante comunicar adecuadamente los resultados de una campaña?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque facilita la interpretación de los hallazgos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Porque incrementa automáticamente las conversiones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque sustituye los procesos de análisis.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque elimina la necesidad de reportes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es una práctica ética en la gestión de datos digitales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conservar información sin restricciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solicitar consentimiento para el uso de datos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Compartir información sin autorización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Utilizar datos sin informar al usuario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué objetivo tiene la privacidad de datos en entornos digitales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el uso de herramientas analíticas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facilitar la difusión pública de registros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar la cantidad de datos recopilados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Proteger la información personal de los usuarios.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué representa el consentimiento digital?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La transferencia automática de información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La publicación abierta de registros digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La autorización para utilizar información personal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La eliminación permanente de los datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el beneficio principal del benchmarking en campañas digitales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la necesidad de evaluación periódica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir los indicadores de desempeño.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Garantizar resultados idénticos entre campañas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comparar resultados para identificar mejoras.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
