// =====================================================================
//  CONTENIDO DEL SITIO
//  Todo el texto vive acá. Para cambiar algo, editá este archivo:
//  el diseño y las animaciones se actualizan solos.
//
//  Fotos:  public/images/micaela.jpg
//  Logos:  public/images/logos/<nombre>.svg  (o .png)
// =====================================================================

export const site = {
  name: 'Micaela Rossito',
  brand: ['micaela', 'rossito'],
  title: 'Micaela Rossito — Consultoría integral de marketing',
  description:
    'Consultoría integral de marketing de Micaela Rossito. Estrategia, comunicación, adquisición y conversión en un mismo sistema.',

  // TODO: reemplazar por el email profesional y sumar redes (dejá '' para ocultar).
  email: 'hola@micaelarossito.com',
  linkedin: '',
  instagram: '',

  nav: [
    { label: 'Enfoque', href: '#enfoque' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Sobre mí', href: '#sobre-mi' },
  ],
  navCta: 'Hablemos',
};

export const hero = {
  eyebrow: 'Consultoría integral de marketing',
  // `accent: true` resalta las palabras con el degradé
  title: [
    { text: 'Conecto tu marketing para que ' },
    { text: 'cada acción tenga un propósito.', accent: true },
  ],
  text: 'Estrategia, comunicación, adquisición y conversión en un mismo sistema. Te ayudo a ordenar las piezas, detectar oportunidades y construir un plan de marketing alineado con los objetivos de tu negocio.',
  primary: { label: 'Conocer cómo puedo ayudarte', href: '#servicios' },
  secondary: { label: 'Ver mi experiencia', href: '#experiencia' },
  visualLabel: 'Un sistema, no acciones aisladas',
  system: [
    { n: '01', name: 'Estrategia', tag: 'Enfocar' },
    { n: '02', name: 'Comunicación', tag: 'Conectar' },
    { n: '03', name: 'Captación', tag: 'Atraer' },
    { n: '04', name: 'Conversión y mejora', tag: 'Optimizar' },
  ],
};

export const approach = {
  label: 'Mi enfoque',
  title: 'El marketing funciona mejor cuando todas las piezas trabajan juntas.',
  lead: 'No se trata de sumar canales porque sí. Se trata de entender qué necesita el negocio, definir prioridades y conectar cada acción con un objetivo claro: desde el mensaje que atrae a la audiencia hasta el seguimiento que ayuda a convertir una oportunidad.',
  cards: [
    {
      tag: 'Claridad',
      title: 'Entender antes de ejecutar',
      text: 'Revisamos objetivos, propuesta de valor, audiencia y recorrido comercial para identificar qué conviene hacer y por qué.',
    },
    {
      tag: 'Integración',
      title: 'Conectar las piezas',
      text: 'Contenido, campañas, páginas, CRM y seguimiento forman parte de una misma experiencia, no de esfuerzos desconectados.',
    },
    {
      tag: 'Evolución',
      title: 'Medir para decidir mejor',
      text: 'Definimos indicadores útiles, observamos qué está funcionando y priorizamos mejoras de acuerdo con los objetivos.',
    },
  ],
  chips: [
    'Estrategia y posicionamiento',
    'Contenido y comunicación',
    'Demand generation',
    'Funnels',
    'Automatización',
    'KPIs y optimización',
  ],
};

export const services = {
  label: 'Cómo podemos trabajar',
  title: 'Una base estratégica. La implementación que tu negocio necesite.',
  lead: 'Trabajo con marcas personales, profesionales y empresas. La consultoría puede acompañar a tu equipo o complementarse con ejecución, según el alcance que definamos.',
  note: 'La propuesta se adapta al momento y a los recursos del negocio. No necesitás contratar todos los servicios ni resolver todo al mismo tiempo.',
  items: [
    {
      viz: 'radar',
      tags: ['Auditoría', 'Conversión', 'Plan a 90 días'],
      title: 'Diagnóstico y hoja de ruta',
      text: 'Auditoría de comunicación y canales, revisión del recorrido de conversión, detección de oportunidades y plan de prioridades para los próximos 90 días.',
    },
    {
      viz: 'network',
      tags: ['Estrategia', 'Funnel', 'Automatizaciones', 'KPIs'],
      title: 'Consultoría integral de marketing',
      text: 'Definición de estrategia, mensajes, canales, funnel, captación, seguimiento, automatizaciones e indicadores. Un espacio para tomar decisiones con criterio y dirección.',
    },
    {
      viz: 'bars',
      tags: ['Campañas', 'Email marketing', 'Seguimiento'],
      title: 'Implementación y optimización',
      text: 'Como complemento, puedo involucrarme en la puesta en marcha y coordinación de campañas, contenidos, email marketing, automatizaciones y seguimiento de resultados.',
    },
  ],
};

export const method = {
  label: 'Metodología',
  title: 'De la foto actual a un plan accionable.',
  lead: 'Un proceso claro para saber qué estamos resolviendo, qué sigue y cómo evaluar los avances.',
  steps: [
    { title: 'Diagnóstico', text: 'Contexto, objetivos, audiencia, activos actuales y principales oportunidades.' },
    { title: 'Diseño estratégico', text: 'Posicionamiento, mensajes, canales, recorrido de conversión y métricas relevantes.' },
    { title: 'Plan de acción', text: 'Prioridades, responsables, recursos y calendario de implementación.' },
    { title: 'Medición y mejora', text: 'Seguimiento de indicadores, aprendizajes y ajustes para la siguiente etapa.' },
  ],
};

export const experience = {
  label: 'Experiencia aplicada',
  title: 'Comunicación, contenido y sistemas de marketing.',
  lead: 'Mi recorrido combina estrategia de contenidos, producción audiovisual, campañas integradas, generación de demanda y automatización. Estos son algunos ejes de experiencia que puedo aportar a un proyecto.',
  // Con `value` el número se anima al entrar; con `text` se muestra tal cual.
  proof: [
    { prefix: '+', value: 7, suffix: ' años', text: '', label: 'de experiencia profesional en comunicación, contenidos, proyectos y marketing digital.' },
    { prefix: '+', value: 500, suffix: ' asistentes', text: '', label: 'en webinars y eventos online en los que participé desde la planificación y producción.' },
    { text: 'De contenido a conversión', label: 'Experiencia conectando YouTube y podcast, campañas, email marketing y automatizaciones en GoHighLevel.' },
  ],
  cases: [
    {
      title: 'Contenido y estrategia digital',
      text: 'En Mastery Haus, trabajo en estrategia y producción de contenido para YouTube, podcast y plataformas digitales, con atención a métricas como CTR, retención y alcance.',
    },
    {
      title: 'Eventos y experiencias online',
      text: 'Planificación y producción de webinars y eventos digitales, articulando contenidos, equipos y herramientas para sostener la experiencia de la audiencia.',
    },
    {
      title: 'Automatización y seguimiento',
      text: 'Implementación de automatizaciones de email marketing en GoHighLevel e integración de herramientas para acompañar el recorrido de los contactos.',
    },
  ],
  // Logos opcionales: si no existe el archivo se muestra el nombre en texto.
  logosEyebrow: 'Trayectoria',
  logosLabel: 'Proyectos y marcas con las que trabajé',
  logos: [
    { name: 'Mastery Haus', src: '/images/logos/mastery-haus.svg' },
    { name: 'Sofía Contreras', src: '/images/logos/sofia-contreras.svg' },
    { name: 'Gobierno de la Ciudad de Buenos Aires', src: '/images/logos/gcba.svg' },
  ],
};

export const about = {
  label: 'Sobre mí',
  title: 'Soy Micaela Rossito.',
  tagline: 'Una mirada integral que une estrategia, creatividad y ejecución.',
  photo: '/images/micaela.jpg',
  photoCaption: 'Marketing · Comunicación · Estrategia',
  paragraphs: [
    'Soy Licenciada en Relaciones Públicas e Institucionales y trabajo en estrategia de contenidos, generación de demanda, producción audiovisual y coordinación de proyectos. A lo largo de mi recorrido participé en proyectos de comunicación institucional, campañas, contenidos digitales, eventos y ecosistemas de marketing.',
    'Actualmente trabajo con Sofía Contreras / Mastery Haus, donde desarrollo y coordino contenido para YouTube y podcast, participo en campañas integradas y trabajo con métricas, email marketing y automatizaciones. También formé parte de proyectos de comunicación para el Gobierno de la Ciudad de Buenos Aires y de estrategias de contenido para proyectos culturales.',
    'Me interesa mirar el negocio de forma completa: entender el objetivo, encontrar el mensaje, ordenar los canales y ayudar a que la estrategia se convierta en acciones concretas.',
  ],
  chips: ['Meta Ads', 'GoHighLevel', 'ManyChat', 'Email marketing', 'Producción audiovisual', 'IA generativa', 'Gestión de proyectos'],
};

export const contact = {
  label: 'Próximo paso',
  title: '¿Qué necesita tu marketing hoy?',
  text: 'Contame en qué etapa está tu negocio, qué querés lograr y qué sentís que hoy no está conectado. Podemos empezar por ordenar el panorama y definir prioridades.',
  cta: 'Conversemos por email',
  subject: 'Consulta por consultoría de marketing',
};

export const footer = {
  left: 'Consultoría integral de marketing',
  right: 'Estrategia con dirección. Acciones con propósito.',
};
