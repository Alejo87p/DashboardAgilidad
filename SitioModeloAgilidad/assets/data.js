/* ============================================================
   Modelo Operativo de Agilidad — Instituto Nacional de Seguros
   Datos del sitio
   Fuente: Modelo Operativo de Agilidad — INS
   ============================================================ */

/* ---------- Paneles del Big Picture ---------- */
const PANELES = {
  estrategia: {
    k: "Punto de partida",
    t: "Estrategia organizacional",
    html: `<p>La estrategia define <b>hacia dónde va la organización</b>: apuestas clave, grandes objetivos y el marco dentro del cual se priorizan iniciativas, productos y flujos de valor.</p>
    <p>El Modelo Operativo de Agilidad existe para conectar esa estrategia con la ejecución real y con la entrega continua de valor.</p>
    <div class="nota"><b class="tit">¿Cómo baja la estrategia?</b>
    <p>Cadencia anual → define direcciones estratégicas.<br>Cadencia bimestral → traduce la estrategia en objetivos medibles por flujo de valor.<br>Cadencia de sprint → habilita la entrega incremental y el aprendizaje.</p></div>`,
    link: "cadencias.html", linkTxt: "Ver cadencia organizacional"
  },
  ems: {
    k: "Gobierno del valor",
    t: "Meta Scrum Ejecutivo (EMS)",
    html: `<p>Es la principal instancia de <b>alineación estratégica del valor</b>. Asegura que la organización concentre su capacidad en los flujos e iniciativas de mayor impacto, gestionando de forma explícita los trade-offs.</p>
    <p class="cita" style="font-size:16px">El EMS no gestiona la ejecución diaria. Gobierna prioridades, foco, capacidad e impacto.</p>
    <h4>Responsabilidades</h4>
    <ul><li>Priorizar entre flujos de valor e iniciativas estratégicas</li>
    <li>Decidir qué se prioriza, qué se posterga y qué se detiene</li>
    <li>Inspeccionar el desempeño agregado de los flujos de valor</li>
    <li>Ajustar estructuras y asignación de capacidades</li>
    <li>Proteger a los equipos del ruido estratégico</li></ul>
    <h4>Integrantes</h4>
    <p>Dueño de Producto Empresarial · Líderes de Producto de Laboratorio (LPL) · Ejecutivos · Líderes de Flujos de Valor · Responsables de Estrategia.</p>
    <div class="nota aviso"><p><b>Criterio de membresía:</b> quien participa debe tener autoridad real para decidir o comprometer capacidad. El EMS no es un espacio informativo, es un espacio de decisión.</p></div>
    <p><span class="tag acento">Mensual · dos sesiones por bimestre</span></p>`,
    link: "gobierno.html#ems", linkTxt: "Ver el EMS en detalle"
  },
  eat: {
    k: "Gobierno del sistema",
    t: "Equipo de Acción Ejecutiva (EAT)",
    html: `<p><i>Executive Action Team.</i> Es la instancia responsable de <b>remover impedimentos sistémicos</b> y evolucionar el sistema organizacional para sostener la entrega continua de valor.</p>
    <p class="cita" style="font-size:16px">El EAT no decide prioridades. Hace posible que se ejecuten.</p>
    <h4>Responsabilidades</h4>
    <ul><li>Priorizar impedimentos según impacto en el flujo de valor</li>
    <li>Rediseñar estructuras, procesos y modelos de gobierno que limitan la agilidad</li>
    <li>Reducir tiempos de espera organizacionales y bloqueos recurrentes</li>
    <li>Patrocinar experimentos organizacionales controlados</li>
    <li>Fomentar seguridad psicológica para visibilizar problemas reales</li></ul>
    <h4>Integrantes</h4>
    <p>Líderes con autoridad transversal · Representantes de áreas habilitadoras (tecnología, procesos, arquitectura, datos, riesgo, talento) · Líderes ágiles · Líderes de flujo invitados.</p>
    <div class="nota aviso"><p><b>Criterio de membresía:</b> quien participa debe poder cambiar el sistema, no solo describir el problema. El EAT es un equipo de acción, no un comité de seguimiento.</p></div>
    <p><span class="tag acento">Frecuencia: semanal</span></p>`,
    link: "gobierno.html#eat", linkTxt: "Ver el EAT en detalle"
  },
  entrega: {
    k: "Resultado del sistema",
    t: "Entrega continua de valor",
    html: `<p>Es el propósito del modelo completo: que la organización entregue valor de forma <b>temprana, frecuente y sostenible</b>, con capacidad de adaptarse al cambio.</p>
    <h4>¿Cómo se hace visible?</h4>
    <ul><li><b>Métricas de flujo</b> — Flow Time, Flow Velocity, Flow Efficiency, Flow Load, Flow Distribution</li>
    <li><b>Métricas DORA</b> — frecuencia de despliegue, tiempo de cambio, tasa de fallos, tiempo de recuperación</li>
    <li><b>Métricas de negocio</b> — los cuatro ejes: experiencia, crecimiento, eficiencia y servicio</li>
    <li><b>ROI por flujo</b> — valor generado frente a esfuerzo invertido</li></ul>
    <div class="nota clave"><p>Las métricas son un <b>lenguaje común para entender la realidad</b>, no un mecanismo de control punitivo.</p></div>`,
    link: "metricas.html", linkTxt: "Ver métricas y transparencia"
  },
  principios: {
    k: "Fundamento",
    t: "Transparencia, Inspección y Adaptación",
    html: `<p>Los tres principios de Scrum funcionan como un <b>sistema inseparable</b> y atraviesan equipos, flujos de valor y niveles de gobierno.</p>
    <ul><li><b>Transparencia</b> — permite ver la realidad. Backlogs claros, bloqueos expuestos, trade-offs explícitos.</li>
    <li><b>Inspección</b> — permite entenderla. Evaluación sistemática en cadencias definidas, no reportes aislados.</li>
    <li><b>Adaptación</b> — permite cambiarla. Ajuste real de prioridades, prácticas, políticas y estructuras.</li></ul>
    <div class="nota"><p>Sin transparencia no se puede inspeccionar. Sin adaptación, la inspección es un ejercicio meramente informativo.</p></div>`,
    link: "principios.html", linkTxt: "Ver los principios"
  },
  topologias: {
    k: "Cómo se organiza el trabajo",
    t: "Tipos de equipos ágiles",
    html: `<p>El modelo define <b>tres formas distintas de operar</b> según el tipo de demanda y el resultado esperado. No son niveles ni jerarquías.</p>
    <ul><li><b>Laboratorio Digital</b> — crear y evolucionar productos y capacidades con aprendizaje continuo.</li>
    <li><b>Equipos de Servicio Digital</b> — continuidad, estabilidad y capacidad operativa.</li>
    <li><b>Equipos de Proyectos</b> — cumplimiento crítico con restricciones fuertes.</li></ul>
    <div class="nota aviso"><p><b>Regla de seguridad:</b> si el trabajo "parece proyecto" pero es evolución natural de un producto, se mantiene en Laboratorio. Los Proyectos son excepción, no norma.</p></div>`,
    link: "topologias.html", linkTxt: "Ver topologías y usar el selector"
  },
  lab: {
    k: "Topología 1",
    t: "Laboratorio Digital",
    html: `<p>Unidad de <b>creación y evolución continua</b> de productos y capacidades digitales, dentro de las áreas de negocio técnicas, comerciales y de soporte.</p>
    <h4>Cuándo aplicarla</h4>
    <ul class="check"><li>El objetivo es construir o evolucionar un producto, proceso o capacidad comercial y digital con aprendizaje continuo</li>
    <li>Hay un backlog de valor priorizable y cambios iterativos</li>
    <li>El éxito se mide por valor entregado, adopción, outcomes y flujo</li></ul>
    <h4>Gobierno del laboratorio</h4>
    <p>Replica la lógica EMS–EAT a nivel de flujo:</p>
    <ul><li><b>Equipo Líder del Laboratorio</b> — gobierna el valor, la visión y las prioridades.</li>
    <li><b>Equipo de Acción del Laboratorio</b> — gobierna las condiciones del sistema que habilitan la entrega.</li></ul>`,
    link: "laboratorio.html", linkTxt: "Ver Laboratorio Digital"
  },
  serv: {
    k: "Topología 2",
    t: "Equipos de Servicio Digital",
    html: `<p>Operan con <b>Kanban y flujo continuo</b> para gestionar eficientemente la demanda operacional, optimizar tiempos de respuesta, reducir sobrecarga y aumentar la previsibilidad.</p>
    <h4>Cuándo aplicarla</h4>
    <ul class="check"><li>La prioridad es continuidad, disponibilidad, confiabilidad, soporte y operación</li>
    <li>Predomina la demanda reactiva (incidentes) o la mejora preventiva</li>
    <li>El éxito se mide por estabilidad, tiempos de respuesta y cumplimiento de niveles de servicio</li></ul>
    <div class="nota clave"><p>Un equipo de servicio es un <b>habilitador del sistema</b>: aunque no entrega valor directo al cliente final, permite que los equipos de producto lo hagan mejor y más rápido.</p></div>
    <p><span class="tag verde">Dueño de Servicio</span><span class="tag verde">Líder Técnico</span></p>`,
    link: "servicios.html", linkTxt: "Ver Equipos de Servicio"
  },
  proy: {
    k: "Topología 3",
    t: "Equipos de Proyectos",
    html: `<p>Se aplican para <b>iniciativas críticas con restricciones fuertes</b>, combinando agilidad a escala con el marco de coordinación EMS–EAT.</p>
    <h4>Cuándo aplicarla</h4>
    <ul class="check"><li>Existe una restricción fuerte: fecha fija, regulación, riesgo elevado o dependencia externa crítica</li>
    <li>Se requiere coordinación intensiva multi-equipo y gestión explícita de dependencias</li>
    <li>El éxito se mide por cumplimiento del objetivo crítico con control de riesgo, alcance y tiempo</li></ul>
    <div class="nota aviso"><p>En esta topología el <b>Project Manager reemplaza al Dueño de Producto</b>, porque el foco no es la evolución continua de un producto sino la entrega estructurada de una iniciativa crítica.</p></div>`,
    link: "proyectos.html", linkTxt: "Ver Equipos de Proyectos"
  },
  metricas: {
    k: "Decisiones con evidencia",
    t: "Los cuatro ejes de métricas",
    html: `<p>Las métricas organizacionales no miden actividad: miden <b>resultados de negocio, impacto y sostenibilidad</b>. Se agrupan en cuatro ejes y se usan como sistema balanceado.</p>
    <ul><li><b>Experiencia</b> — experiencia de cliente, retención de cartera, gestión de la cartera.</li>
    <li><b>Crecimiento</b> — primaje, participación de mercado, ingresos digitales, primas de negocio nuevo.</li>
    <li><b>Eficiencia</b> — control de gasto, gestión del riesgo, margen de siniestralidad.</li>
    <li><b>Servicio</b> — rentabilidad comercial, gestión de la cartera en clave de servicio.</li></ul>
    <div class="nota"><p>La mejora de un eje <b>no debe deteriorar sistemáticamente</b> a los demás.</p></div>`,
    link: "metricas.html#ejes", linkTxt: "Ver los cuatro ejes"
  },
  cadencia: {
    k: "Ritmo compartido",
    t: "Cadencia organizacional",
    html: `<p>La cadencia define el <b>ritmo común</b> bajo el cual la organización planifica, ejecuta, inspecciona y adapta. Alinea equipos, flujos y gobierno reduciendo fricción y desalineación.</p>
    <div class="nota clave"><p><b>1 año = 6 bimestres · 1 bimestre = 4 sprints · 1 sprint ≈ 10 días hábiles</b></p></div>
    <h4>Ritmo de los eventos</h4>
    <ul><li><b>EMS</b> — mensual (dos sesiones por bimestre)</li><li><b>EAT</b> — semanal</li>
    <li><b>Meta Scrum del Laboratorio</b> — semanal o bisemanal</li>
    <li><b>Equipo de Acción del Laboratorio</b> — semanal</li>
    <li><b>Scrum Diario Escalado</b> — diario o cada 2 días</li>
    <li><b>Sprint</b> — cada 10 días hábiles</li></ul>`,
    link: "cadencias.html", linkTxt: "Ver calendario de cadencias"
  },
  roles: {
    k: "Quién hace qué",
    t: "Roles del modelo",
    html: `<p>El modelo define roles claros por topología, cada uno con responsabilidades organizadas en las <b>cinco dimensiones de la agilidad</b>: cliente en el centro, priorización, entrega, optimización organizacional, y cultura y mentalidad.</p>
    <p><span class="tag">Líder de Producto del Laboratorio</span><span class="tag">Líder de TI Escalado</span><span class="tag">Líder Ágil</span><span class="tag">Dueño de Producto</span><span class="tag">Líder Técnico</span><span class="tag">Developer</span><span class="tag verde">Dueño de Servicio</span><span class="tag morado">Project Manager</span></p>`,
    link: "roles.html", linkTxt: "Abrir explorador de roles"
  },
  practicas: {
    k: "Cómo se ejecuta",
    t: "Prácticas y patrones",
    html: `<p>El modelo se apoya en prácticas técnicas y patrones de Scrum que hacen posible la entrega continua.</p>
    <ul><li><b>Prácticas de ingeniería</b> — CI/CD, infraestructura como código, testing automatizado, Clean Code, MOB AI.</li>
    <li><b>Transparencia</b> — Andon Digital, Obeya, Flow Distribution.</li>
    <li><b>Patrones de Scrum</b> — Swarming, Kaizen, Emergency Procedure, Stable Teams, Involve the Managers, MetaScrum, Definición de Listo, Value and ROI.</li></ul>`,
    link: "practicas.html", linkTxt: "Ver prácticas y patrones"
  },
  eqLider: {
    k: "Laboratorio Digital",
    t: "Equipo Líder del Laboratorio",
    html: `<p>Responsable de <b>maximizar el valor entregado</b> por el Laboratorio. Define qué se construye, por qué y en qué orden.</p>
    <p><b>Miembros:</b> Líder de Producto del Laboratorio (lidera), Dueños de Producto, Líder de TI Escalado, Líder de Proceso/Negocio.</p>
    <p><b>Evento:</b> Meta Scrum del Laboratorio, semanal o bisemanal. Lo <b>lidera</b> el LPL (ciclo del Qué) y lo <b>facilita</b> el Líder Ágil del Laboratorio.</p>`,
    link: "laboratorio.html#equipo-lider", linkTxt: "Ver detalle"
  },
  eqAccion: {
    k: "Laboratorio Digital",
    t: "Equipo de Acción del Laboratorio",
    html: `<p>Responsable de <b>remover impedimentos sistémicos</b> dentro del laboratorio y habilitar condiciones para una entrega fluida y sostenible.</p>
    <p><b>Miembros:</b> Líder de TI Escalado, Líderes Técnicos, representantes técnicos clave, líderes de proceso u operación y Dueño de Producto para Equipos Operativos cuando aplica. Facilita el Líder Ágil del Laboratorio.</p>
    <p><b>Evento:</b> semanal, alineado al sprint. Escala al EAT organizacional cuando el impedimento excede el laboratorio.</p>`,
    link: "laboratorio.html#equipo-accion", linkTxt: "Ver detalle"
  },
  quecomo: {
    k: "Principio estructurante",
    t: "El ciclo del Qué y el ciclo del Cómo",
    html: `<p>El modelo separa de forma explícita el ciclo ágil en <b>dos responsabilidades complementarias</b>:</p>
    <ul><li><b>Ciclo del Qué</b> — lo conduce el <b>Dueño de Producto</b> o el <b>Dueño de Servicio</b>: visión, prioridad y valor.</li>
    <li><b>Ciclo del Cómo</b> — lo conduce el <b>Líder Técnico</b>: ejecución, calidad técnica y sostenibilidad de la entrega.</li></ul>
    <div class="tabla-wrap"><table><thead><tr><th>Ciclo del Qué — Dueño de Producto / Dueño de Servicio</th><th>Ciclo del Cómo — Líder Técnico</th></tr></thead><tbody>
    <tr><td>Visión estratégica y backlog de producto o de servicio</td><td>Arquitectura y backlog técnico</td></tr>
    <tr><td>Priorización por valor, urgencia y riesgo de negocio</td><td>Descomposición técnica y estimación con el equipo</td></tr>
    <tr><td>Agenda y gestión de la Planificación y la Revisión del Sprint</td><td>Agenda y gestión del Daily Scrum y la Retrospectiva</td></tr>
    <tr><td>Define qué constituye valor para el cliente</td><td>Define el criterio de «terminado» (Definición de Hecho) técnico</td></tr>
    </tbody></table></div>
    <p>Con esta división el Dueño de Producto <b>se libera de la logística operativa y de la coordinación transversal</b> para concentrarse en la estrategia y el valor.</p>
    <p>El rol aplica de forma transversal a los tres tipos de equipo: <b>en todos existe siempre un Líder Técnico</b>. A nivel de laboratorio o de proyecto, la función se escala en el <b>Líder de TI Escalado</b>, contraparte técnica del Líder de Producto del Laboratorio.</p>
    <div class="nota aviso"><p>El Líder Técnico combina <b>liderazgo servicial con criterio de ingeniería</b>: tiene autoridad técnica sobre arquitectura, calidad y viabilidad de la solución. La conducción de la agenda de la Planificación y de la Revisión del Sprint corresponde al Dueño de Producto o al Dueño de Servicio.</p></div>`,
    link: "roles.html#lt", linkTxt: "Ver la ficha del Líder Técnico"
  },
  kanban: {
    k: "Equipos de Servicio",
    t: "Flujo Kanban del servicio",
    html: `<p>El trabajo se organiza en dos flujos: <b>Épicas</b> (iniciativas estratégicas) y <b>Servicios</b> (solicitudes e incidentes), cada uno con estados, criterios de listo/hecho y responsable definido.</p>
    <p><b>Flujo de servicios:</b> Backlog → Refinamiento → En Proceso → En Revisión → Validación → Hecho.</p>
    <p>Cada tipo de trabajo puede tener estados adicionales, políticas de WIP específicas y criterios de escalamiento.</p>`,
    link: "servicios.html#flujo", linkTxt: "Ver el flujo completo"
  },
  eventosProy: {
    k: "Proyectos",
    t: "Eventos de coordinación",
    html: `<p>Los proyectos coordinan mediante seis eventos con agenda, buenas salidas y malas salidas explícitas.</p>
    <ul><li>Meta Scrum del Proyecto — semanal/bisemanal</li>
    <li>Scrum Diario del EAT — diario</li>
    <li>Daily Scrum Escalado — diario o cada 2 días</li>
    <li>Revisión de Soluciones Técnicas — quincenal</li>
    <li>Revisión del Sprint — fin de sprint</li>
    <li>Retrospectiva del Sprint — después de la Revisión</li></ul>`,
    link: "proyectos.html#eventos", linkTxt: "Ver eventos de proyecto"
  },
};

/* ---------- Asistente: selector de topología ---------- */
const WIZ = [
  {
    q: "¿Cuál es el resultado principal que se espera del trabajo?",
    ops: [
      { t: "Construir o evolucionar un producto, proceso o capacidad digital", d: "Con aprendizaje continuo y cambios iterativos", p: { lab: 3, serv: 0, proy: 0 } },
      { t: "Mantener disponible, estable y confiable algo que ya opera", d: "Soporte, incidentes, mejoras preventivas", p: { lab: 0, serv: 3, proy: 0 } },
      { t: "Cumplir un objetivo crítico con fecha o regulación de por medio", d: "Alcance y riesgo controlados", p: { lab: 0, serv: 0, proy: 3 } }
    ]
  },
  {
    q: "¿Cómo llega la demanda al equipo?",
    ops: [
      { t: "Backlog de valor priorizable, con hipótesis y descubrimiento", d: "Features, historias, mejoras de producto", p: { lab: 3, serv: 0, proy: 1 } },
      { t: "Tickets, solicitudes e incidentes de forma recurrente", d: "Demanda reactiva y continua", p: { lab: 0, serv: 3, proy: 0 } },
      { t: "Un alcance definido y acordado de antemano", d: "Entregables comprometidos con hitos", p: { lab: 0, serv: 0, proy: 3 } }
    ]
  },
  {
    q: "¿Cómo se medirá el éxito?",
    ops: [
      { t: "Valor entregado, adopción, outcomes y flujo", d: "Impacto en métricas de negocio del flujo", p: { lab: 3, serv: 0, proy: 0 } },
      { t: "Estabilidad, tiempos de respuesta y cumplimiento de SLA", d: "Reducción de incidentes recurrentes", p: { lab: 0, serv: 3, proy: 0 } },
      { t: "Cumplimiento del objetivo con control de riesgo, alcance y tiempo", d: "Hitos alcanzados y riesgo mitigado", p: { lab: 0, serv: 1, proy: 3 } }
    ]
  },
  {
    q: "¿Qué tanta coordinación entre equipos requiere?",
    ops: [
      { t: "Equipo estable con autonomía sobre su backlog", d: "Coordinación normal dentro del flujo de valor", p: { lab: 3, serv: 1, proy: 0 } },
      { t: "Autonomía operativa sobre su propio flujo, sin aprobaciones externas", d: "Se coordina con flujos de valor por acuerdos de servicio", p: { lab: 0, serv: 3, proy: 0 } },
      { t: "Coordinación intensiva multi-equipo con dependencias explícitas", d: "Requiere gestión activa de dependencias", p: { lab: 1, serv: 0, proy: 3 } }
    ]
  }
];

const WIZ_RES = {
  lab: {
    nombre: "Laboratorio Digital", color: "#0B4E4E",
    txt: "El trabajo tiene naturaleza de producto: se descubre, se prioriza por valor y se evoluciona de forma continua con equipos estables.",
    link: "laboratorio.html"
  },
  serv: {
    nombre: "Equipo de Servicio Digital", color: "#167C74",
    txt: "El trabajo tiene naturaleza de servicio: demanda recurrente, acuerdos de nivel de servicio y foco en continuidad operativa gestionada con Kanban.",
    link: "servicios.html"
  },
  proy: {
    nombre: "Equipo de Proyecto", color: "#9C5A1E",
    txt: "El trabajo tiene una restricción fuerte que justifica una estructura de proyecto. Recuerde: los proyectos son la excepción, no la norma.",
    link: "proyectos.html"
  }
};

/* ---------- Explorador de roles ---------- */
const ROLES = [
  {
    id: "lpl", n: "Líder de Producto del Laboratorio (LPL)", cat: "lab", catTxt: "Laboratorio Digital",
    d: "Maximiza el valor de los productos y capacidades del Laboratorio Digital, integrando y coordinando esfuerzos digitales, operativos y comerciales. Conduce el ciclo del Qué a nivel de laboratorio.",
    r: ["Alinea el desarrollo de productos con las necesidades reales del cliente",
        "Implementa mecanismos sistemáticos de retroalimentación y aprendizaje",
        "Asegura que el backlog esté alineado con los objetivos estratégicos del flujo",
        "Optimiza la asignación de capacidad hacia iniciativas de mayor impacto",
        "Gestiona trade-offs explícitos entre valor, riesgo y sostenibilidad",
        "Facilita una entrega continua y de alta calidad y la alineación entre múltiples equipos",
        "Reduce latencias de decisión y dependencias internas",
        "Fomenta una cultura de colaboración, aprendizaje y accountability"],
    m: ["Adopción y penetración de productos", "Retención y lealtad de clientes (NPS)", "Impacto financiero y ROI", "Salud del backlog y estabilidad de prioridades", "Experiencia digital del cliente"],
    meta: { "Miembro de": "Equipo Líder del Laboratorio", "Responsable del": "Backlog del laboratorio compartido", "Lidera": "Meta Scrum del Laboratorio (la facilitación corresponde al Líder Ágil del Laboratorio)" }
  },
  {
    id: "lti", n: "Líder de TI Escalado", cat: "lab", catTxt: "Laboratorio Digital",
    d: "Habilita, evoluciona y sostiene las capacidades tecnológicas del Laboratorio Digital. Actúa como puente entre estrategia de producto, ingeniería y operación, y como punto de referencia técnico entre los equipos y el EAT.",
    r: ["Asegura que las decisiones tecnológicas mejoren la experiencia del cliente",
        "Integra observabilidad y datos para comprender el uso real del producto",
        "Colabora con el LPL en la priorización de inversiones tecnológicas",
        "Gestiona el backlog técnico del laboratorio: deuda, arquitectura, plataforma",
        "Habilita prácticas DevOps, CI/CD y automatización",
        "Garantiza calidad, seguridad, escalabilidad y resiliencia",
        "Diseña arquitecturas alineadas a flujos de valor",
        "Impulsa el uso responsable de IA, datos y automatización"],
    m: ["Estabilidad y confiabilidad de plataformas", "Velocidad y frecuencia de despliegue", "Reducción de deuda técnica", "Calidad técnica y seguridad", "Retención y crecimiento de talento técnico"],
    meta: { "Miembro de": "Equipo Líder del Laboratorio, Equipo de Acción, Equipo de Tecnología", "Responsable de": "Arquitectura tecnológica del flujo, backlog técnico del laboratorio", "Facilita": "Revisión de Soluciones Tecnológicas, Incremento Técnico Escalado" }
  },
  {
    id: "sosm", n: "Líder Ágil del Laboratorio (SoSM)", cat: "lab", catTxt: "Laboratorio Digital",
    d: "Optimiza, coordina y sincroniza la entrega de valor del Laboratorio Digital, asegurando flujo continuo entre equipos Scrum y no Scrum. Actúa como gerente operativo del flujo.",
    r: ["Asegura que todos los equipos mantengan foco en valor al cliente",
        "Coordina con el LPL la traducción de prioridades estratégicas a ejecución",
        "Facilita repriorización rápida ante cambios de contexto",
        "Elimina impedimentos que afectan velocidad y calidad",
        "Sincroniza equipos y funciones a lo largo del flujo de valor",
        "Reduce latencias de decisión y fricción organizacional",
        "Actúa como coach y mentor, promoviendo autogestión y mejora continua"],
    m: ["Fluidez del flujo de valor", "Reducción de bloqueos y tiempos de ciclo", "Sincronización entre equipos", "Adopción de prácticas ágiles", "Compromiso y motivación del equipo"],
    meta: { "Miembro de": "Equipo del laboratorio, Equipo de Acción", "Responsable de": "OBEYA del Laboratorio, Backlog de Mejora", "Facilita": "Planificación a Escala, Scrum Diario Escalado, Revisiones y Retrospectivas a Escala, Meta Scrum del Laboratorio" }
  },
  {
    id: "lt", n: "Líder Técnico", cat: "lab", catTxt: "Transversal a los tres tipos de equipo",
    d: "Habilita, optimiza y sincroniza la ejecución técnica del equipo, asegurando que el cómo se entrega el trabajo maximice calidad, velocidad y sostenibilidad. Conduce el ciclo del Cómo, combinando liderazgo servicial con criterio de ingeniería directo. Sustituye la figura del Scrum Master y existe en los tres tipos de equipo del modelo.",
    r: ["Asegura que el equipo mantenga el foco en la entrega de valor al usuario final",
        "Mantiene un backlog técnico propio: deuda técnica, infraestructura y estándares de ingeniería",
        "Valida la viabilidad técnica de lo priorizado antes de comprometer el Sprint",
        "Define el criterio de Definición de Hecho técnico del equipo",
        "Promueve revisión técnica, sincronización entre equipos y automatización (CI/CD, testing, IaC)",
        "Aplica el triage de soluciones: identifica cuándo un ítem no requiere desarrollo y se resuelve con un cambio de proceso, una solución low-code o un ajuste con la jefatura correspondiente",
        "Gestiona activamente el WIP y orquesta el Swarming antes de que un bloqueo escale",
        "Acompaña al proveedor en estándares y calidad, sin microgestión de horas, y vela por las garantías técnicas acordadas",
        "Actúa como dueño técnico del conocimiento, para que el código no dependa de una sola persona ni de un solo proveedor",
        "Promueve la visibilidad del flujo con tableros visuales y métricas del Flow Framework",
        "Escala impedimentos estructurales al EAT apoyado en el Andon Digital",
        "Ejerce coaching técnico directo al equipo, más allá del proceso ágil, e impulsa el Kaizen"],
    m: ["Velocidad y eficiencia: Flow Time y Flow Efficiency", "Calidad técnica: estabilidad, reducción de defectos, cobertura de pruebas", "Innovación tecnológica: adopción efectiva de nuevas tecnologías y experimentos exitosos", "Sostenibilidad del trabajo con proveedores: garantías técnicas cumplidas y conocimiento transferido al equipo", "Impacto operativo: costos y confiabilidad de los sistemas", "Flow Distribution equilibrado", "Cultura técnica: retención de talento y colaboración"],
    meta: { "Miembro de": "Equipo de Acción, Equipos del Laboratorio", "Responsable de": "Arquitectura y backlog técnico del equipo, mejora continua del sistema de trabajo", "Facilita": "Daily Scrum, Retrospectiva, Refinamiento Técnico y Revisión de Soluciones Tecnológicas", "Co-facilita": "Planificación del Sprint junto al Dueño de Producto o Dueño de Servicio" }
  },
  {
    id: "dp-dig", n: "Dueño de Producto para Equipos Digitales", cat: "lab", catTxt: "Laboratorio Digital",
    d: "Maximiza el valor generado por las soluciones digitales. Es el puente entre usuarios, partes interesadas y el equipo técnico para convertir necesidades en resultados medibles. Conduce el ciclo del Qué.",
    r: ["Mantiene comunicación constante con usuarios y partes interesadas",
        "Construye y comunica la visión del producto digital",
        "Define indicadores de producto para validar resultados y retorno de inversión",
        "Prioriza el backlog para maximizar valor en el momento adecuado",
        "Evalúa continuamente valor vs esfuerzo y gestiona trade-offs",
        "Coordina con otros Dueños de Producto para mantener una sola estrategia de laboratorio",
        "Promueve entrega iterativa y de alta calidad",
        "Lidera la agenda de la Planificación y de la Revisión del Sprint"],
    m: ["ROI de funcionalidades entregadas", "Satisfacción del cliente (NPS, CSAT)", "Adopción y uso de funcionalidades digitales", "Reducción de deuda técnica", "Frecuencia de lanzamientos", "Eficiencia técnica y velocidad de desarrollo"],
    meta: { "Miembro de": "Equipo de Laboratorio", "Responsable de": "Backlog de Producto Digital", "Facilita": "Refinamiento del backlog, coordinación con partes interesadas, revisión de incrementos digitales" }
  },
  {
    id: "dp-ope", n: "Dueño de Producto para Equipos Operativos", cat: "lab", catTxt: "Laboratorio Digital",
    d: "Optimiza y coordina las operaciones de equipos que gestionan procesos críticos. Su foco es mejorar el flujo operativo, reducir fricciones del proceso y habilitar mejoras sostenibles.",
    r: ["Asegura que los procesos operativos entreguen valor directo al cliente",
        "Captura hallazgos del servicio para mejorar continuamente la operación",
        "Desarrolla y prioriza el backlog de optimización de procesos",
        "Coordina con LPL, Dueño de Producto Digital, CX y Tecnología",
        "Coordina con equipos digitales la adopción de soluciones tecnológicas",
        "Identifica cuellos de botella operativos y promueve mejora continua",
        "Desarrolla cultura de excelencia operativa y adaptabilidad"],
    m: ["Reducción de tiempos de ciclo de procesos", "Satisfacción del cliente final (NPS / tiempos de respuesta)", "Eficiencia operativa (costos, utilización de recursos)", "Adopción de mejoras operativas", "Reducción de reprocesos y variabilidad"],
    meta: { "Miembro de": "Equipo de Laboratorio, Equipo de Acción", "Responsable de": "Backlog de mejora de procesos operativos", "Facilita": "Revisión de flujos operativos, sesiones de mejora continua, retrospectivas operativas" }
  },
  {
    id: "dev", n: "Developer / Ingeniero de Software", cat: "lab", catTxt: "Laboratorio Digital",
    d: "Diseña, construye, prueba y opera soluciones tecnológicas que generan valor al cliente. No solo escribe código: es copropietario del producto y del sistema.",
    r: ["Comprende el problema del cliente y su contexto",
        "Construye soluciones enfocadas en valor y experiencia",
        "Colabora con el Dueño de Producto para entender prioridades",
        "Ayuda a evaluar impacto técnico, riesgos y esfuerzo",
        "Desarrolla incrementos de alta calidad con testing, integración y despliegue continuo",
        "Reduce deuda técnica de manera consciente y automatiza tareas repetitivas",
        "Comparte conocimiento y promueve estándares de calidad"],
    m: ["Calidad y estabilidad del código", "Frecuencia y confiabilidad de despliegues", "Reducción de defectos y retrabajo", "Contribución a mejoras técnicas y de flujo", "Colaboración y aprendizaje en el equipo"],
    meta: { "Miembro de": "Equipo del Laboratorio", "Responsable de": "Incrementos de producto, calidad técnica", "Participa en": "Refinamiento, Planificación, Daily, Revisión y Retrospectiva" }
  },
  {
    id: "ds", n: "Dueño de Servicio", cat: "serv", catTxt: "Equipos de Servicio",
    d: "Responsable de la entrega continua de valor del servicio. Administra prioridades, establece acuerdos de servicio (SLA) y asegura que el backlog represente las necesidades reales del cliente.",
    r: ["Gestionar el backlog de servicio",
        "Priorizar demandas operativas y técnicas",
        "Representar al cliente interno o externo",
        "Asegurar cumplimiento de tiempos y calidad del servicio",
        "Actuar como responsable de las reuniones de planificación y revisión del servicio"],
    m: ["Cumplimiento de SLA", "Lead Time del servicio", "Satisfacción del cliente interno", "Valor entregado al flujo de valor"],
    meta: { "Responsable de": "Backlog del servicio, acuerdos de nivel de servicio", "Facilita": "Revisión de Servicios Prestados, Planificación de Entrega, Revisión de Estrategia del Servicio" }
  },
  {
    id: "lt-serv", n: "Líder Técnico del Servicio", cat: "serv", catTxt: "Equipos de Servicio",
    d: "Es el Líder Técnico del modelo aplicado a un equipo de servicio digital: conduce el ciclo del Cómo y responde por la eficiencia operativa del sistema de flujo. Su contraparte de negocio es el Dueño de Servicio. Le aplican íntegramente las responsabilidades de la ficha del Líder Técnico; lo que sigue son las particularidades del contexto Kanban.",
    r: ["Definir y ajustar límites WIP (trabajo en curso)",
        "Medir métricas de flujo: lead time, cycle time, throughput",
        "Promover experimentación y mejora continua",
        "Detectar bloqueos y cuellos de botella",
        "Facilitar el Daily Kanban y la revisión de estrategia y operaciones",
        "Definir el criterio de terminado técnico del servicio y velar por la calidad de las soluciones entregadas",
        "Aplicar el triage de soluciones: identificar cuándo una solicitud no requiere desarrollo",
        "Mantener un backlog técnico propio del servicio: deuda técnica, infraestructura y estándares",
        "Escalar al EAT los impedimentos estructurales, apoyado en el Andon Digital",
        "Acompañar al proveedor en estándares y calidad, sin microgestión de horas"],
    m: ["Cycle Time y Lead Time", "Throughput", "WIP Aging", "Flow Efficiency", "Garantías técnicas cumplidas por el proveedor"],
    meta: { "Responsable de": "Salud del sistema de flujo, políticas de WIP, backlog técnico del servicio", "Facilita": "Daily Kanban, Revisión de Operaciones y Riesgos", "Ver también": "Ficha del Líder Técnico (aplica de forma íntegra)", "Nota": "En equipos pequeños una misma persona puede asumir Dueño de Servicio y Líder Técnico" }
  },
  {
    id: "cpo-proy", n: "Chief Dueño de Producto (CPO)", cat: "proy", catTxt: "Proyectos",
    d: "Custodia la visión y el backlog del proyecto, conectando la estrategia empresarial con la ejecución táctica de los equipos.",
    r: ["Convertir la retroalimentación de usuarios y partes interesadas en requisitos claros y priorizados",
        "Ordenar y mantener actualizado el backlog del proyecto core",
        "Balancear la priorización entre valor, urgencia y factibilidad técnica",
        "Coordinar las liberaciones con los Dueños de Producto funcionales",
        "Definir la cadencia de releases y asegurar el cumplimiento de hitos críticos",
        "Colaborar con el EAT para eliminar cuellos de botella y dependencias bloqueantes",
        "Generar un propósito compartido entre todos los equipos"],
    m: ["Cumplimiento de hitos críticos", "Valor validado por partes interesadas", "Dependencias resueltas"],
    meta: { "Preside": "Meta Scrum del Proyecto", "Responsable de": "Backlog estratégico del proyecto" }
  },
  {
    id: "pm", n: "Project Manager (PM)", cat: "proy", catTxt: "Proyectos",
    d: "Planifica, coordina y asegura la ejecución exitosa de iniciativas estratégicas con alcance, plazo y objetivos definidos. Actúa como responsable integral del resultado del proyecto.",
    r: ["Asegura que el proyecto responda a una necesidad clara del cliente interno o externo",
        "Gestiona expectativas de actores clave",
        "Define y mantiene el roadmap del proyecto",
        "Gestiona alcance de manera explícita, evitando scope creep",
        "Gestiona trade-offs entre tiempo, costo y alcance con transparencia",
        "Asegura cumplimiento de hitos, monitorea riesgos y ejecuta planes de mitigación",
        "Gestiona escalamiento oportuno al EMS ante conflictos de prioridad o capacidad",
        "Documenta aprendizajes y buenas prácticas para futuras iniciativas"],
    m: ["Cumplimiento de hitos y entregables", "Riesgos mitigados", "Control de alcance", "Impacto real y medible de los resultados"],
    meta: { "Nota": "El PM no ejecuta el trabajo técnico, pero es responsable del resultado integral del proyecto" }
  },
  {
    id: "lt-proy", n: "Líder Tecnológico del Proyecto (LT)", cat: "proy", catTxt: "Proyectos",
    d: "Diseña la arquitectura técnica del proyecto, asegura la calidad del software y promueve la innovación tecnológica. A nivel de proyecto es el equivalente del Líder de TI Escalado: contraparte técnica del Chief Dueño de Producto y punto de referencia entre los equipos y el EAT. No sustituye al Líder Técnico de cada equipo, sino que articula su trabajo a escala.",
    r: ["Garantizar que la tecnología soporte una experiencia de cliente fluida y confiable",
        "Proponer inversiones tecnológicas con base en ROI técnico y reducción de riesgos",
        "Balancear la deuda técnica con la entrega de nuevas funcionalidades",
        "Habilitar despliegues rápidos y seguros mediante CI/CD, automatización y feature flags",
        "Definir estándares de calidad y velar por su cumplimiento",
        "Optimizar arquitecturas para soportar escalabilidad y resiliencia"],
    m: ["Calidad y seguridad de la solución", "Riesgos técnicos mitigados antes de implementación", "Velocidad de despliegue"],
    meta: { "Preside": "Revisión de Soluciones Técnicas" }
  },
  {
    id: "lt-sm-proy", n: "Líderes Técnicos de Equipo (Proyecto)", cat: "proy", catTxt: "Proyectos",
    d: "La figura del Líder Técnico sustituye al Scrum Master en los equipos del proyecto. Conducen el ciclo del Cómo: facilitan la ejecución, eliminan impedimentos y sostienen un alto rendimiento, combinando facilitación con criterio de ingeniería directo sobre arquitectura, calidad de código y viabilidad de la solución.",
    r: ["Ayudar al equipo a enfocarse en entregas que generen valor tangible",
        "Filtrar interrupciones y tareas no prioritarias para mantener el foco",
        "Facilitar las ceremonias y asegurar que se cumpla la Definición de Hecho",
        "Validar la viabilidad técnica de lo priorizado y definir el criterio de terminado técnico",
        "Gestionar el WIP y orquestar el Swarming antes de que un bloqueo escale",
        "Detectar patrones de bloqueo recurrentes y escalarlos al EAT o EMS",
        "Fomentar la autoorganización, la seguridad psicológica y la mejora continua",
        "Ejercer coaching técnico directo al equipo, más allá del proceso ágil"],
    m: ["Impedimentos resueltos", "Predictibilidad de la entrega", "Calidad técnica del incremento", "Clima y autoorganización del equipo"],
    meta: { "Convoca": "Scrum Diario del EAT, Daily Scrum Escalado, Retrospectiva del Sprint", "Ver también": "Ficha del Líder Técnico (aplica de forma íntegra)" }
  },
  {
    id: "dpe", n: "Dueño de Producto Empresarial", cat: "gob", catTxt: "Gobierno",
    d: "Representa la visión organizacional y los objetivos estratégicos. Traduce la estrategia en prioridades claras para los flujos de valor.",
    r: ["Traducir la estrategia en prioridades claras para los flujos de valor",
        "Asegurar coherencia entre lo que la organización quiere lograr y lo que se prioriza",
        "Representar las necesidades del negocio en la coordinación a escala",
        "Integrar visiones estratégicas y priorizar decisiones que afectan a múltiples equipos"],
    m: ["Claridad y estabilidad de las prioridades estratégicas", "Alineación entre estrategia y ejecución"],
    meta: { "Miembro de": "Meta Scrum Ejecutivo (EMS)", "Participa en": "Evento de Meta Scrum del flujo de valor y Scrum Diario Escalado cuando se escalan decisiones" }
  },
  {
    id: "lfv", n: "Líder de Flujo de Valor", cat: "gob", catTxt: "Gobierno",
    d: "Aporta visión sistémica del flujo de extremo a extremo y visibiliza dependencias, cuellos de botella y riesgos.",
    r: ["Aportar visión sistémica del flujo de extremo a extremo",
        "Visibilizar dependencias, cuellos de botella y riesgos",
        "Permitir que las decisiones se basen en el comportamiento real del sistema"],
    m: ["Salud del flujo de valor", "Reducción de dependencias"],
    meta: { "Miembro de": "Meta Scrum Ejecutivo (EMS)", "Participa en": "EAT como invitado cuando un impedimento impacta su flujo" }
  }
];

/* ---------- Índice de búsqueda ----------
   El campo "a" contiene alias y sinónimos que amplían la búsqueda. */
const INDICE = [
  { t: "Introducción al Modelo Operativo", p: "index.html", pg: "Inicio", a: "que es scrum@scale", x: "El Modelo Operativo de Agilidad habilita la entrega continua de valor, la adaptación al cambio y la alineación entre estrategia, ejecución y operación. Se fundamenta en Scrum@Scale y se complementa con gestión por flujos de valor, Kanban, DevOps y métricas de flujo." },
  { t: "Big Picture del modelo", p: "index.html#bigpicture", pg: "Inicio", a: "diagrama mapa general", x: "Diagrama interactivo del modelo: estrategia, gobierno EMS y EAT, topologías de equipos, entrega continua de valor, principios y métricas." },
  { t: "Siglas y términos del modelo", p: "glosario.html", pg: "Glosario", a: "LPL SoSM EMS EAT WIP WSJF SLA SLO CI/CD siglas", x: "EMS Meta Scrum Ejecutivo, EAT Equipo de Acción Ejecutiva, LPL Líder de Producto del Laboratorio, SoSM Líder Ágil del Laboratorio, Líder Técnico rol técnico de equipo que conduce el ciclo del Cómo, Líder de TI Escalado función escalada a nivel de laboratorio." },
  { t: "Transparencia", p: "principios.html#transparencia", pg: "Principios", a: "", x: "El estado real del trabajo, del producto y del sistema debe ser visible, comprensible y compartido. Backlogs claros y priorizados, bloqueos y riesgos expuestos, métricas como lenguaje común, trade-offs explícitos." },
  { t: "Inspección", p: "principios.html#inspeccion", pg: "Principios", a: "", x: "Práctica sistemática de evaluar el estado del trabajo, los resultados y la forma de operar con frecuencia suficiente para detectar desviaciones, riesgos u oportunidades. Ocurre en cadencias definidas." },
  { t: "Adaptación", p: "principios.html#adaptacion", pg: "Principios", a: "", x: "Capacidad de ajustar decisiones, planes y formas de trabajo como respuesta a lo aprendido en la inspección. Ajustes tácticos de corto plazo y mejoras estructurales de mediano y largo plazo." },
  { t: "Principios como sistema", p: "principios.html#sistema", pg: "Principios", a: "", x: "La transparencia permite ver la realidad, la inspección permite entenderla y la adaptación permite cambiarla. Ciclo continuo, fundamento del modelo operativo." },
  { t: "Propósito del Gobierno Corporativo Ágil", p: "gobierno.html#proposito", pg: "Gobierno", a: "", x: "Asegurar que la organización entregue valor de forma continua, alineada a la estrategia y sostenible. No se centra en el control detallado de la ejecución sino en habilitar decisiones, alinear prioridades y remover impedimentos estructurales." },
  { t: "Principios del Gobierno Ágil", p: "gobierno.html#principios", pg: "Gobierno", a: "escalamiento por excepcion", x: "Gobernar por valor no por actividad. Descentralización con alineación. Transparencia como habilitador de confianza. Escalamiento por excepción. Aprendizaje y adaptación continua." },
  { t: "Meta Scrum Ejecutivo (EMS)", p: "gobierno.html#ems", pg: "Gobierno", a: "meta scrum ejecutivo gobierno del valor", x: "Principal instancia de alineación estratégica del valor. Prioriza entre flujos de valor e iniciativas, asigna capacidad organizacional, gestiona trade-offs. Frecuencia mensual, dos sesiones por bimestre. Integrantes: Dueño de Producto Empresarial, Líderes de Producto de Laboratorio, ejecutivos, líderes de flujo, responsables de estrategia." },
  { t: "Equipo de Acción Ejecutiva (EAT)", p: "gobierno.html#eat", pg: "Gobierno", a: "executive action team gobierno del sistema impedimentos", x: "Instancia responsable de remover impedimentos sistémicos y evolucionar el sistema organizacional. Frecuencia semanal. Integrantes con capacidad real de cambiar el sistema: líderes con autoridad transversal y áreas habilitadoras." },
  { t: "Diferencia entre EMS y EAT", p: "gobierno.html#diferencia", pg: "Gobierno", a: "", x: "El EMS reúne a quienes deciden dónde poner el foco y la capacidad. El EAT reúne a quienes pueden eliminar lo que impide avanzar. El EMS gobierna el valor, el EAT gobierna las condiciones del sistema." },
  { t: "Evento del Meta Scrum Ejecutivo", p: "gobierno.html#evento-ems", pg: "Gobierno", a: "", x: "Mensual, equivalente a dos sesiones por bimestre. Entradas: estado de objetivos, métricas de flujo, capacidad y demanda, riesgos estratégicos. Actividades: revisión de foco, inspección de flujos, análisis de capacidad y trade-offs, escalamiento, definición de ajustes. Salidas: decisiones estratégicas visibles, marco de prioridades actualizado." },
  { t: "Evento del EAT", p: "gobierno.html#evento-eat", pg: "Gobierno", a: "", x: "Semanal. Entradas: impedimentos escalados, evidencia de impacto, métricas del sistema. Actividades: priorización de impedimentos, análisis de causa raíz, definición de acciones, decisiones estructurales, seguimiento. Salidas: acciones con responsables y fechas, decisiones documentadas, experimentos aprobados." },
  { t: "Cadencia organizacional", p: "cadencias.html", pg: "Cadencias", a: "bimestre sprint ritmo anual", x: "1 año igual a 6 bimestres. 1 bimestre igual a 4 sprints. 1 sprint aproximadamente 10 días hábiles. Ritmo común para planificar, ejecutar, inspeccionar y adaptar." },
  { t: "Propósito de cada nivel de cadencia", p: "cadencias.html#niveles", pg: "Cadencias", a: "", x: "Cadencia anual define direcciones estratégicas. Cadencia bimestral traduce la estrategia en objetivos medibles por flujo de valor y es el principal punto de inspección y adaptación. Cadencia de sprint habilita la entrega incremental." },
  { t: "Calendario de eventos por nivel", p: "cadencias.html#eventos", pg: "Cadencias", a: "frecuencia reuniones ceremonias", x: "EMS mensual, EAT semanal, Meta Scrum del Laboratorio semanal o bisemanal, Equipo de Acción del Laboratorio semanal, Scrum Diario Escalado diario o cada dos días, Daily Kanban diario, Revisión de Servicios Prestados quincenal, Revisión de Estrategia del Servicio trimestral." },
  { t: "Métricas organizacionales: cuatro ejes", p: "metricas.html#ejes", pg: "Métricas", a: "primaje siniestralidad cartera negocio", x: "Eje de Experiencia: experiencia de cliente, retención de cartera, gestión de la cartera. Eje de Crecimiento: primaje, participación de mercado, ingresos digitales, primas de negocio nuevo. Eje de Eficiencia: control de gasto, gestión del riesgo, margen de siniestralidad. Eje de Servicio: rentabilidad comercial, gestión de la cartera." },
  { t: "Flow Framework", p: "metricas.html#flow", pg: "Métricas", a: "flow time velocity efficiency load distribution", x: "Flow Velocity cantidad de trabajo entregado. Flow Time tiempo desde inicio hasta entrega de valor. Flow Efficiency proporción de trabajo activo frente al total. Flow Load trabajo en curso. Flow Distribution proporción entre features, mejoras técnicas, deuda y defectos." },
  { t: "ROI y beneficios tangibles", p: "metricas.html#roi", pg: "Métricas", a: "retorno inversion", x: "ROI por flujo, reducción de costos, incremento en ingresos, velocidad de aprendizaje entendida como tiempo entre hipótesis y validación." },
  { t: "Métricas DORA", p: "metricas.html#dora", pg: "Métricas", a: "despliegue frecuencia fallos recuperacion", x: "Tiempo de despliegue de un cambio, frecuencia de implementación, porcentaje de fallos, tiempo de respuesta ante fallos o incidentes." },
  { t: "Métricas de equipos de servicio", p: "metricas.html#servicio", pg: "Métricas", a: "cycle time lead time throughput wip aging", x: "Cycle Time, Lead Time o tiempo de completado, Throughput o tasa de entrega, WIP Aging, Flow Efficiency." },
  { t: "Andon Digital", p: "practicas.html#andon", pg: "Prácticas", a: "impedimentos visual bloqueo", x: "Mecanismo visual que permite a los equipos declarar impedimentos y problemas en tiempo real, generando atención inmediata y cultura de transparencia. El Líder Técnico se apoya en él para escalar al EAT." },
  { t: "Obeya", p: "practicas.html#obeya", pg: "Prácticas", a: "sala visual tablero", x: "Espacio físico o digital que concentra información clave para la toma de decisiones basada en datos. Incluye métricas de flujo, objetivos, riesgos y planes." },
  { t: "Tipos de equipos ágiles", p: "topologias.html", pg: "Topologías", a: "topologia equipos", x: "Define cómo se organiza el trabajo, evita ambigüedad entre trabajo de producto, operación o servicio e iniciativas críticas, y alinea la ejecución con el paso de proyectos a flujos de valor." },
  { t: "Principios de diseño de la topología", p: "topologias.html#principios", pg: "Topologías", a: "equipos estables", x: "Equipos estables y trabajo que fluye. Una topología no es una jerarquía. Ownership claro por tipo de resultado. Interacción explícita entre equipos con interfaces y cadencias estandarizadas." },
  { t: "Reglas de decisión de topología", p: "topologias.html#reglas", pg: "Topologías", a: "cual aplica cuando usar", x: "Laboratorio Digital cuando se construye o evoluciona producto con aprendizaje continuo. Equipos de Servicio cuando la prioridad es continuidad y disponibilidad. Proyectos cuando existe restricción fuerte de fecha, regulación o riesgo. Los proyectos son excepción, no norma." },
  { t: "Selector de topología", p: "topologias.html#selector", pg: "Topologías", a: "asistente cuestionario decidir", x: "Asistente interactivo de cuatro preguntas que recomienda si un equipo debe operar como Laboratorio Digital, Equipo de Servicio Digital o Equipo de Proyecto." },
  { t: "Laboratorio Digital", p: "laboratorio.html", pg: "Laboratorio", a: "", x: "Unidad de creación y evolución continua de productos y capacidades digitales. Cuenta con dos equipos de gobierno: Equipo Líder del Laboratorio y Equipo de Acción del Laboratorio." },
  { t: "De proyectos a flujos de valor", p: "laboratorio.html#flujos", pg: "Laboratorio", a: "cambio paradigma", x: "Cambio de paradigma de proyectos aislados a gestión integral basada en flujos de valor. Equipos estables y multidisciplinarios, backlogs priorizados, métricas de flujo, responsabilidad compartida de extremo a extremo." },
  { t: "Equipo Líder del Laboratorio", p: "laboratorio.html#equipo-lider", pg: "Laboratorio", a: "meta scrum del laboratorio", x: "Maximiza el valor entregado por el laboratorio. Define qué se construye, por qué y en qué orden. Miembros: Líder de Producto del Laboratorio que lidera, Dueños de Producto, Líder de TI Escalado, Líder de Proceso o Negocio. Evento: Meta Scrum del Laboratorio semanal o bisemanal." },
  { t: "Equipo de Acción del Laboratorio", p: "laboratorio.html#equipo-accion", pg: "Laboratorio", a: "impedimentos laboratorio", x: "Remueve impedimentos sistémicos dentro del laboratorio y habilita condiciones para entrega fluida. Miembros: Líder de TI Escalado, Líderes Técnicos, representantes técnicos, líderes de proceso u operación y Dueño de Producto Operativo. Evento semanal alineado al sprint." },
  { t: "Flujos de valor del laboratorio", p: "laboratorio.html#flujos-lab", pg: "Laboratorio", a: "suscripcion indemnizacion procesos clave", x: "Todos los equipos se organizan alrededor de flujos de valor de las áreas de negocio. Los laboratorios creados se enfocan en los procesos de suscripción e indemnización. Cuando no exista un flujo claramente delimitado, el equipo se enfoca en productos, canales o gestiones más allá de una plataforma tecnológica." },
  { t: "Ciclo del Dueño de Producto", p: "laboratorio.html#ciclo-dp", pg: "Laboratorio", a: "ciclo del que vision priorizacion refinamiento", x: "Visión estratégica, priorización del backlog con WSJF y valor estratégico, descomposición y refinamiento con criterios de listo, planificación de la entrega con releases bimestrales y sprints quincenales." },
  { t: "Ciclo del Líder Técnico", p: "laboratorio.html#ciclo-lt", pg: "Laboratorio", a: "ciclo del como arquitectura backlog tecnico", x: "Contraparte del ciclo del Dueño de Producto: gobierna el Cómo. Arquitectura y backlog técnico, descomposición y estimación técnica, facilitación de eventos técnicos, gestión de impedimentos, coaching técnico, alineación organizacional y visibilidad del flujo." },
  { t: "Coordinación a escala", p: "laboratorio.html#escala", pg: "Laboratorio", a: "scrum de scrums", x: "Scrum Diario Escalado diario o cada dos días. Sesión del Equipo de Acción semanal. Evento de Meta Scrum del flujo de valor semanal o bisemanal." },
  { t: "MOB AI", p: "practicas.html#mobai", pg: "Prácticas", a: "mob programming inteligencia artificial", x: "Mob Programming potenciado por inteligencia artificial. Sesiones colaborativas guiadas, feedback inmediato, observabilidad inteligente, IA asistida y transferencia de conocimiento." },
  { t: "Clean Code", p: "practicas.html#cleancode", pg: "Prácticas", a: "codigo limpio calidad", x: "Nombres descriptivos, funciones pequeñas y enfocadas, eliminación de duplicidad, claridad sobre eficiencia prematura, convenciones comunes." },
  { t: "Prácticas de ingeniería: CI/CD", p: "practicas.html#ingenieria", pg: "Prácticas", a: "devops pipeline testing infraestructura como codigo", x: "Integración y despliegue continuos, pipelines robustos, pruebas automatizadas, monitoreo post despliegue, rollback seguro, blue green deployments, feature flags, infraestructura como código con Terraform, Ansible, Pulumi o CloudFormation." },
  { t: "Patrones de Scrum", p: "practicas.html#patrones", pg: "Prácticas", a: "swarming kaizen stable teams metascrum", x: "Swarming, Kaizen, Emergency Procedure, Stable Teams, Involve the Managers, MetaScrum, Definición de Listo, Value and ROI." },
  { t: "Equipos de Servicio Digital", p: "servicios.html", pg: "Servicios", a: "kanban soporte operacion dueño de servicio ingeniero de flujo", x: "Modelo operativo basado en Kanban con flujo continuo, límites de WIP, roles de Dueño de Servicio y Líder Técnico y estrategias de visibilidad y optimización del trabajo." },
  { t: "Criterios para ser un Equipo de Servicio", p: "servicios.html#criterios", pg: "Servicios", a: "lista de comprobacion entrada", x: "Lista de comprobación de entrada: demanda recurrente y flujo estable, backlog vivo y flujo visualizado, acuerdos de servicio SLA y SLO, ciclo de vida del trabajo definido, roles clave activos, autonomía operativa, mejora continua, interacción con flujos de valor. Si alguno no se cumple, el equipo requiere acompañamiento previo a su formalización." },
  { t: "Principios clave del equipo de servicio", p: "servicios.html#principios", pg: "Servicios", a: "kanban visualizar limitar wip clases de servicio", x: "Visualizar el flujo completo. Limitar el trabajo en curso. Gestionar el flujo, no a las personas. Hacer explícitas las políticas. Tirar la demanda, no empujarla. Diferenciar clases de servicio. Reservar capacidad para la mejora. Decidir con evidencia." },
  { t: "Equipo de Servicio vs Equipo Scrum", p: "servicios.html#comparativo", pg: "Servicios", a: "diferencia comparacion", x: "El equipo Scrum crea valor nuevo mediante productos y funcionalidades con ciclos iterativos. El equipo de servicio opera de forma continua y reactiva ante necesidades operativas, soporte o mejoras técnicas y habilita al sistema." },
  { t: "Flujo de trabajo para épicas y servicios", p: "servicios.html#flujo", pg: "Servicios", a: "estados tablero listo hecho", x: "Épicas: Backlog, Ideación, Definición, Construcción, Entrega, Validación, Cierre. Servicios: Backlog, Refinamiento, En Proceso, En Revisión, Validación, Hecho. Cada estado tiene criterios de listo y hecho y un responsable." },
  { t: "Gestión del WIP", p: "servicios.html#wip", pg: "Servicios", a: "trabajo en curso limites", x: "Limitar el trabajo en curso es esencial para evitar sobrecarga y reducir tiempos de espera. Límites explícitos por columna y tipo de ítem, revisados en retrospectivas." },
  { t: "Reuniones clave de equipos de servicio", p: "servicios.html#reuniones", pg: "Servicios", a: "daily kanban service review", x: "Preparación del equipo al iniciar, Revisión de Servicios Prestados quincenal, Daily Kanban diaria, Planificación de Entrega quincenal, Revisión de Estrategia del Servicio trimestral, Revisión de Operaciones y Riesgos mensual." },
  { t: "Priorización WSJF", p: "servicios.html#wsjf", pg: "Servicios", a: "weighted shortest job first formula", x: "WSJF igual a valor para el cliente más urgencia más reducción de riesgo u oportunidad dividido entre duración estimada del servicio. Cuanto mayor el WSJF, más prioritario el trabajo." },
  { t: "Criterios de priorización del servicio", p: "servicios.html#criterios-prio", pg: "Servicios", a: "escala valor esfuerzo", x: "Valor al cliente, impacto en el flujo de valor, esfuerzo vs beneficio, urgencia del negocio, aprendizaje y mejora continua, reducción de deuda técnica. Cada criterio con escala 0 a 3." },
  { t: "Interacción entre equipos de servicio y flujos de valor", p: "servicios.html#interaccion", pg: "Servicios", a: "coordinacion acuerdos escalamiento", x: "Participación en eventos de coordinación, sincronización de prioridades, tableros visuales compartidos, políticas de servicio interoperables, acuerdos de escalamiento, métricas compartidas de valor y operación." },
  { t: "Equipos de Proyectos", p: "proyectos.html", pg: "Proyectos", a: "iniciativa critica", x: "Integra gobernanza, roles y eventos del modelo operativo para implementar un proyecto, combinando agilidad a escala con coordinación EMS y EAT." },
  { t: "Visión del Proyecto", p: "proyectos.html#vision", pg: "Proyectos", a: "", x: "El éxito es entregar una solución estratégica y sostenible que transforme la organización, adoptada por los usuarios, con procesos más eficientes, centrada en negocio y cliente, con liderazgo y tecnología robusta." },
  { t: "Project Manager reemplaza al Dueño de Producto", p: "proyectos.html#pm", pg: "Proyectos", a: "product owner alcance riesgos", x: "En la topología de proyectos el Project Manager reemplaza al Dueño de Producto porque el foco no es la evolución continua de un producto sino la entrega estructurada de una iniciativa crítica gestionando alcance, riesgos, dependencias y partes interesadas." },
  { t: "Eventos de coordinación del proyecto", p: "proyectos.html#eventos", pg: "Proyectos", a: "buenas salidas malas salidas agenda", x: "Meta Scrum del Proyecto, Scrum Diario del EAT, Daily Scrum Escalado, Revisión de Soluciones Técnicas, Revisión del Sprint, Retrospectiva del Sprint. Cada uno con agenda, buenas salidas y malas salidas." },
  { t: "Líder Técnico", p: "roles.html#lt", pg: "Roles", a: "scrum master proveedor swarming wip ciclo del como calidad tecnica triage low-code", x: "Sustituye la figura del Scrum Master y conduce el ciclo del Cómo: ejecución, calidad técnica y sostenibilidad de la entrega. Incorpora autoridad técnica sobre arquitectura, calidad y viabilidad. Acompaña al proveedor en estándares y garantías técnicas, sin microgestión de horas. Aplica el triage de soluciones. Orquesta el WIP y el Swarming. Facilita Daily y Retrospectiva y co-facilita la Planificación del Sprint. Rinde cuentas ante el EAT." },
  { t: "Triage de soluciones", p: "roles.html#lt", pg: "Roles", a: "low-code cambio de proceso no requiere desarrollo", x: "Práctica del Líder Técnico: identificar cuándo un ítem no requiere desarrollo y puede resolverse mediante un cambio de proceso, una solución low-code o un ajuste directo con la jefatura correspondiente." },
  { t: "Explorador de roles", p: "roles.html", pg: "Roles", a: "quien hace que responsabilidades responsables equipos", x: "Fichas de todos los roles del modelo con responsabilidades en las cinco dimensiones de la agilidad y métricas de éxito. Líder de Producto del Laboratorio, Líder de TI Escalado, Líder Ágil, Dueño de Producto digital y operativo, Líder Técnico, Developer, Dueño de Servicio, Project Manager, Dueño de Producto Empresarial." },
  { t: "Glosario del modelo", p: "glosario.html", pg: "Glosario", a: "definiciones terminos", x: "Definiciones de EMS, EAT, LPL, WSJF, WIP, SLA, SLO, DORA, Flow Framework, Obeya, Andon, Kaizen, Swarming, Definición de Listo, Definición de Hecho, Value Stream Mapping, lead time, cycle time, throughput." },
  { t: "Referencias del modelo", p: "glosario.html#referencias", pg: "Glosario", a: "bibliografia fuentes", x: "Scrum@Scale Guide de Jeff Sutherland, Flow Framework de Mik Kersten, SAFe 6.0, Accelerate de Forsgren Humble y Kim, Clean Code de Robert Martin, DevOps Handbook de Gene Kim, Toyota Production System y Lean, Theory of Constraints de Goldratt." }
];
