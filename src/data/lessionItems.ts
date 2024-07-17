// Import Models
import { LessionItemModel } from "@/models";

export const lessionItems = <LessionItemModel[]>[
    {
        id: '1',
        color: '#49BBBD',
        title: 'Introducción a los ChatBots Educativos',
        description: 'Presentación de qué son los chatbots educativos y su importancia en el aprendizaje interactivo.',
        video: '<iframe width="100%" height="450" src="https://www.youtube.com/embed/ADi9NNqA3ZM?si=XKSV97qFt90Xj6yx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        content: [
            "<p class='mb-6 text-uppercase secondary-color'><strong>01. ¿Qué son los chatbots educativos?</strong></p>",
            "<p class='mb-6'>Los chatbots educativos son programas informáticos diseñados para simular conversaciones humanas y proporcionar asistencia en contextos educativos. Utilizan inteligencia artificial (IA) para interactuar con los usuarios de manera natural y fluida, facilitando el acceso a información, recursos de aprendizaje y apoyo educativo. A través del procesamiento del lenguaje natural (PLN), estos chatbots pueden comprender y responder a una amplia variedad de preguntas y solicitudes, adaptándose a las necesidades individuales de los estudiantes.</p>",
            "<p class='mb-6 text-uppercase secondary-color'><strong>02. Importancia de los chatbots en el aprendizaje interactivo</strong></p>",
            "<p class='mb-6'><strong>Acceso Inmediato a Información:</strong> Los chatbots educativos están disponibles 24/7, lo que permite a los estudiantes obtener respuestas a sus preguntas en cualquier momento, sin necesidad de esperar a un profesor o tutor. Esto es especialmente útil para estudiantes que estudian a distintas horas del día o que tienen un acceso limitado a recursos educativos tradicionales.</p>",
            "<p class='mb-6'><strong>Personalización del Aprendizaje:</strong> Mediante el uso de IA, los chatbots pueden adaptarse a las necesidades individuales de cada estudiante. Pueden proporcionar explicaciones adicionales sobre temas que el estudiante no comprende bien, recomendar recursos adicionales y ajustar el ritmo del aprendizaje según el progreso del usuario.</p>",
            "<p class='mb-6'><strong>Desarrollo de Habilidades de Autoaprendizaje:</strong> Al utilizar chatbots, los estudiantes desarrollan habilidades de autoaprendizaje, ya que aprenden a buscar información, formular preguntas efectivas y evaluar la precisión de las respuestas recibidas. Estas habilidades son esenciales para el aprendizaje autónomo y continuo a lo largo de la vida.</p>",
        ]
    },
    {
        id: '2',
        color: '#F48C06',
        title: 'Fundamentos del Aprendizaje Significativo',
        description: 'Explicación de los principios del aprendizaje significativo y cómo se aplican en la interacción con chatbots.',
        video: '',
        content: [
            "<p class='mb-6 text-uppercase secondary-color'><strong>01. ¿Qué es el aprendizaje significativo?</strong></p>",
            "<p class='mb-6'>El aprendizaje significativo es un concepto desarrollado por el psicólogo David Ausubel en la década de 1960. Este tipo de aprendizaje ocurre cuando los nuevos conocimientos se relacionan de manera sustancial y no arbitraria con lo que el estudiante ya sabe. A diferencia del aprendizaje memorístico, que se basa en la repetición y la memorización sin comprender, el aprendizaje significativo implica la comprensión profunda y la integración de nueva información en las estructuras cognitivas existentes del estudiante.</p>",
            "<p class='mb-6 text-uppercase secondary-color'><strong>02. Principios del aprendizaje significativo</strong></p>",
            "<p class='mb-6'><strong>Relación con conocimientos previos:</strong> Para que el aprendizaje sea significativo, los nuevos conceptos deben conectarse con los conocimientos previos del estudiante. Esto permite que la nueva información se integre de manera coherente y estructurada.</p>",
            "<p class='mb-6'><strong>Organización y estructura:</strong> El contenido debe estar bien organizado y estructurado de tal manera que sea fácil de entender y relacionar con los conocimientos existentes. Esto implica una presentación lógica y secuencial de los conceptos.</p>",
            "<p class='mb-6'><strong>Retroalimentación constante:</strong> La retroalimentación es esencial para el aprendizaje significativo. Los estudiantes deben recibir comentarios sobre su progreso y comprensión, lo que les permite ajustar y mejorar sus estrategias de aprendizaje.</p>",
            "<p class='mb-6 text-uppercase secondary-color'><strong>03. Aplicación del aprendizaje significativo en la interacción con chatbots</strong></p>",
            "<p class='mb-6'><strong>Relación con conocimientos previos:</strong> Los chatbots pueden realizar preguntas diagnósticas para evaluar los conocimientos previos del estudiante y adaptar las respuestas y el contenido presentado en función de esta información.</p>",
            "<p class='mb-6'><em>Ejemplo:</em> 'Antes de explicarte qué es la fotosíntesis, ¿puedes decirme qué sabes sobre cómo las plantas obtienen energía?'</p>",
            "<p class='mb-6'><strong>Organización y estructura:</strong> Los chatbots pueden proporcionar explicaciones paso a paso y guiar al estudiante a través de secuencias lógicas de conceptos.</p>",
            "<p class='mb-6'><em>Ejemplo:</em> 'Para entender mejor la ecuación cuadrática, primero repasemos qué es una función cuadrática y cómo se grafica.'</p>",
            "<p class='mb-6'><strong>Relevancia y aplicación:</strong> Los chatbots pueden presentar casos de estudio, ejemplos prácticos y problemas del mundo real que muestren la relevancia del material de estudio.</p>",
            "<p class='mb-6'><em>Ejemplo:</em> 'Aquí tienes un ejemplo de cómo se utiliza la trigonometría en la construcción de puentes. ¿Te gustaría resolver un problema relacionado?'</p>",
        ]
    },
    {
        id: '3',
        color: '#49BBBD',
        title: 'Creación de Prompts Efectivos',
        description: 'Guía paso a paso sobre cómo redactar prompts claros y específicos para obtener respuestas útiles de los chatbots.',
        video: '<iframe width="100%" height="450" src="https://www.youtube.com/embed/rzKNA5i-JKc?si=84URRtfJLb_agXIH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        content: [
            "<p class='mb-6 text-uppercase secondary-color'><strong>Creación de Prompts Efectivos</strong></p>",
            "<p class='mb-6'>La creación de prompts efectivos es crucial para obtener respuestas útiles y relevantes de los chatbots educativos. A continuación, se presenta una guía paso a paso para redactar prompts claros y específicos:</p>",
            "<ol class='mb-6 px-12'><li><strong>Identificar el objetivo del prompt:</strong> Antes de redactar un prompt, es fundamental tener claro el objetivo de la interacción. Pregúntate qué información necesitas obtener o qué acción deseas que el estudiante realice.</li><li><strong>Conocer a tu audiencia:</strong> Asegúrate de entender el nivel de conocimiento y las necesidades de los estudiantes. Esto te permitirá adaptar el lenguaje y la complejidad del prompt a su nivel de comprensión.</li><li><strong>Ser claro y específico:</strong> Un prompt efectivo debe ser claro y específico. Evita términos vagos o ambiguos y utiliza un lenguaje directo. Cuanto más específico sea el prompt, más precisa será la respuesta del chatbot.</li><li><strong>Utilizar un lenguaje sencillo:</strong> Redacta los prompts con un lenguaje sencillo y fácil de entender. Evita el uso de jerga técnica o términos complejos a menos que estés seguro de que los estudiantes los comprenden.</li><li><strong>Incluir contexto:</strong> Proporciona el contexto necesario para que el chatbot pueda generar una respuesta adecuada. Incluye información relevante que ayude al estudiante a comprender mejor la pregunta o tarea.</li></ol>",
            "<p class='mb-6'>A continuación, se presentan algunos ejemplos de prompts efectivos:</p>",
            "<p class='text-uppercase secondary-color'><strong>Ejemplo 1:</strong></p>",
            "<p>En lugar de: '¿Qué es la fotosíntesis?'</p>",
            "<p class='mb-6'>Utiliza: '¿Puedes explicar el proceso de la fotosíntesis y cómo las plantas convierten la luz solar en energía?'</p>",
            "<p class='text-uppercase secondary-color'><strong>Ejemplo 2:</strong></p>",
            "<p>En lugar de: '¿Qué es una ecuación cuadrática?'</p>",
            "<p class='mb-6'>Utiliza: '¿Podrías describir qué es una ecuación cuadrática y proporcionar un ejemplo de cómo se resuelve?'</p>",
            "<p class='text-uppercase secondary-color'><strong>Ejemplo 3:</strong></p>",
            "<p>En lugar de: '¿Cuál es la capital de Francia?'</p>",
            "<p class='mb-6'>Utiliza: '¿Puedes decirme cuál es la capital de Francia y mencionar algún hecho histórico relevante sobre esta ciudad?'</p>",
        ]
    },
    {
        id: '4',
        color: '#F48C06',
        title: 'Tipos de Interacciones con ChatBots',
        description: 'Exploración de diferentes tipos de interacciones que se pueden tener con chatbots educativos (por ejemplo, preguntas abiertas, múltiple opción, seguimiento de diálogo).',
    },
    {
        id: '5',
        color: '#49BBBD',
        title: 'Evaluación y Mejora de Prompts',
        description: 'Métodos para evaluar la efectividad de los prompts y estrategias para mejorar su calidad.',
    },
    {
        id: '6',
        color: '#F48C06',
        title: 'Aplicaciones Prácticas en la Educación',
        description: 'Casos de uso específicos de chatbots en diferentes áreas educativas (por ejemplo, matemáticas, idiomas, ciencias).',
    }
];