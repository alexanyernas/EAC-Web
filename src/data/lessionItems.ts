// Import Models
import { LessionItemModel } from "@/models";

export const lessionItems = <LessionItemModel[]>[
    {
        id: '1',
        color: '#49BBBD',
        title: 'Introducción a los ChatBots Educativos',
        description: 'Presentación de qué son los chatbots educativos y su importancia en el aprendizaje interactivo.',
        video: '<iframe width="100%" height="500" src="https://www.youtube.com/embed/ADi9NNqA3ZM?si=XKSV97qFt90Xj6yx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        content: [
            "<p class='mb-6 text-uppercase secondary-color'><strong>01. ¿Qué son los chatbots educativos?</strong></p>",
            "<p class='mb-6'>Los chatbots educativos son programas informáticos diseñados para simular conversaciones humanas y proporcionar asistencia en contextos educativos. Utilizan inteligencia artificial (IA) para interactuar con los usuarios de manera natural y fluida, facilitando el acceso a información, recursos de aprendizaje y apoyo educativo. A través del procesamiento del lenguaje natural (PLN), estos chatbots pueden comprender y responder a una amplia variedad de preguntas y solicitudes, adaptándose a las necesidades individuales de los estudiantes.</p>",
            "<p class='mb-6 text-uppercase secondary-color'><strong>02. Importancia de los chatbots en el aprendizaje interactivo</strong></p>",
            "<p class='mb-6'><strong>Acceso Inmediato a Información:</strong> Los chatbots educativos están disponibles 24/7, lo que permite a los estudiantes obtener respuestas a sus preguntas en cualquier momento, sin necesidad de esperar a un profesor o tutor. Esto es especialmente útil para estudiantes que estudian a distintas horas del día o que tienen un acceso limitado a recursos educativos tradicionales.</p>",
            "<p class='mb-6'><strong>Personalización del Aprendizaje:</strong> Mediante el uso de IA, los chatbots pueden adaptarse a las necesidades individuales de cada estudiante. Pueden proporcionar explicaciones adicionales sobre temas que el estudiante no comprende bien, recomendar recursos adicionales y ajustar el ritmo del aprendizaje según el progreso del usuario.</p>",
            "<p class='mb-6'><strong>Desarrollo de Habilidades de Autoaprendizaje:</strong> Al utilizar chatbots, los estudiantes desarrollan habilidades de autoaprendizaje, ya que aprenden a buscar información, formular preguntas efectivas y evaluar la precisión de las respuestas recibidas. Estas habilidades son esenciales para el aprendizaje autónomo y continuo a lo largo de la vida.</p>",
        ],
        references: [
            "<li><strong>Chung, M., & Fulkerson, D. (2018).</strong> 'Educational chatbots for teaching and learning.' Proceedings of the 2018 IEEE International Conference on Teaching, Assessment, and Learning for Engineering (TALE).</li>",
            "<li><strong>Winkler, R., & Söllner, M. (2018).</strong> 'Unleashing the potential of chatbots in education: A state-of-the-art analysis.' Academy of Management Proceedings, 2018(1), 10869.</li>",
        ]
    },
    {
        id: '2',
        color: '#F48C06',
        title: 'Fundamentos del Aprendizaje Significativo',
        description: 'Explicación de los principios del aprendizaje significativo y cómo se aplican en la interacción con chatbots.',
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
        ],
        references: [
            "<li><strong>Ausubel, D. P. (1968).</strong> 'Educational Psychology: A Cognitive View.' New York: Holt, Rinehart, and Winston.</li>",
            "<li><strong>Novak, J. D. (2010).</strong> 'Learning, Creating, and Using Knowledge: Concept Maps as Facilitative Tools in Schools and Corporations.' Routledge.</li>",
            "<li><strong>Bransford, J. D., Brown, A. L., & Cocking, R. R. (Eds.). (2000).</strong> 'How People Learn: Brain, Mind, Experience, and School.' Washington, DC: National Academy Press.</li>",
        ]
    },
    {
        id: '3',
        color: '#49BBBD',
        title: 'Creación de Prompts Efectivos',
        description: 'Guía paso a paso sobre cómo redactar prompts claros y específicos para obtener respuestas útiles de los chatbots.',
        video: '<iframe width="100%" height="500" src="https://www.youtube.com/embed/rzKNA5i-JKc?si=84URRtfJLb_agXIH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
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
        ],
        references: [
            "<li><strong>Koul, R., & Rane, N. (2020).</strong> 'Crafting effective prompts for AI interactions.' Journal of Computer Science and Technology, 35(4), 732-740.</li>",
            "<li><strong>Smith, A., & Williams, S. (2019).</strong> 'Optimizing human-computer interaction: Best practices for prompt design.' International Journal of Human-Computer Studies, 128, 34-45.</li>",
            "<li><strong>Marcus, A. (2015).</strong> 'Design, User Experience, and Usability: Users and Interactions.' Springer.</li>",
        ]
    },
    {
        id: '4',
        color: '#F48C06',
        title: 'Tipos de Interacciones con ChatBots',
        description: 'Exploración de diferentes tipos de interacciones que se pueden tener con chatbots educativos (por ejemplo, preguntas abiertas, múltiple opción, seguimiento de diálogo).',
        content: [
            "<p class='mb-6 text-uppercase secondary-color'><strong>Tipos de Interacciones con ChatBots</strong></p>",
            "<p class='mb-6'>Los chatbots educativos pueden facilitar diferentes tipos de interacciones, cada una con sus propias características y beneficios. A continuación, se presentan algunos de los tipos de interacciones más comunes:</p>",
            "<p><strong>Preguntas abiertas:</strong> Este tipo de interacción permite a los estudiantes responder de manera libre y detallada, promoviendo el pensamiento crítico y la reflexión.</li>",
            "<p class='mb-6'><em>Ejemplo:</em> '¿Qué opinas sobre el impacto del cambio climático en tu comunidad?'</p>",
            "<p><strong>Preguntas de opción múltiple:</strong> Proporciona varias opciones de respuesta, ayudando a los estudiantes a identificar la respuesta correcta entre varias alternativas.</li>",
            "<p class='mb-6'><em>Ejemplo:</em> '¿Cuál de las siguientes opciones es una característica de los mamíferos? a) Ponen huevos, b) Tienen plumas, c) Amamantan a sus crías, d) Respiran por branquias.'</p>",
            "<p><strong>Seguimiento de diálogo:</strong> Permite una conversación continua, donde el chatbot hace preguntas adicionales basadas en las respuestas anteriores del estudiante, profundizando en el tema y ajustándose al ritmo de aprendizaje del estudiante.</li>",
            "<p class='mb-6'><em>Ejemplo:</em> '¿Puedes describir el proceso de fotosíntesis?' (Respuesta del estudiante) 'Interesante, ¿puedes también mencionar dónde ocurre este proceso en la planta?'</p>",
            "<p><strong>Ejercicios interactivos:</strong> Incluyen actividades como juegos, cuestionarios y simulaciones que hacen que el aprendizaje sea más dinámico y atractivo.</li>",
            "<p class='mb-6'><em>Ejemplo:</em> 'Vamos a resolver un problema matemático juntos. ¿Cuánto es 7 x 8?'</p>",
            "<p><strong>Retroalimentación inmediata:</strong> El chatbot proporciona retroalimentación en tiempo real sobre las respuestas de los estudiantes, ayudándoles a corregir errores y mejorar su comprensión.</li>",
            "<p class='mb-6'><em>Ejemplo:</em> 'Tu respuesta es correcta. La capital de Francia es París. ¿Sabías que también es conocida como la 'Ciudad de la Luz' debido a su papel en la Era de la Ilustración?'</p>",
            "<p><strong>Acceso a recursos adicionales:</strong> El chatbot puede recomendar libros, artículos, videos y otros recursos educativos basados en las respuestas y necesidades de los estudiantes.</li>",
            "<p class='mb-6'><em>Ejemplo:</em> 'Parece que te interesa mucho la astronomía. Aquí tienes un enlace a un video interesante sobre la formación de las estrellas.'</p>",
        ],
        references: [
            "<li><strong>Følstad, A., Brandtzaeg, P. B., & Skjuve, M. (2019).</strong> 'Different chatbots for different purposes: Towards a typology of chatbots to understand interaction design.' International Journal of Human-Computer Interaction, 35(14), 1310-1321.</li>",
            "<li><strong>Smutny, P., & Schreiberova, P. (2020).</strong> 'Chatbots for learning: A review of educational chatbots for the Facebook Messenger.' Computers & Education, 151, 103862.</li>",
            "<li><strong>Woo, M., & Keating, G. (2008).</strong> 'Chatbots in Education: Bridging the Gap between Formal and Informal Learning.' Educational Technology & Society, 11(2), 148-161.</li>",
        ]
          
    },
    {
        id: '5',
        color: '#49BBBD',
        title: 'Evaluación y Mejora de Prompts',
        description: 'Métodos para evaluar la efectividad de los prompts y estrategias para mejorar su calidad.',
        video: '<iframe width="100%" height="500" src="https://www.youtube.com/embed/_ZvnD73m40o?si=Y2V0S2MPJyxChHZt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        content: [
            "<p class='mb-6 text-uppercase secondary-color'><strong>Evaluación y Mejora de Prompts</strong></p>",
            "<p class='mb-6'>Evaluar y mejorar los prompts es esencial para garantizar que los chatbots educativos proporcionen respuestas útiles y fomenten un aprendizaje efectivo. A continuación, se describen métodos y estrategias para evaluar la efectividad de los prompts y mejorar su calidad:</p>",
            "<p><strong>1. Recopilación de retroalimentación de los estudiantes:</strong> Una manera efectiva de evaluar los prompts es obtener retroalimentación directa de los estudiantes que interactúan con el chatbot. Pregunta a los estudiantes si las preguntas eran claras y útiles, y si las respuestas del chatbot les ayudaron a comprender mejor el tema.</p>",
            "<p class='mb-6'><em>Ejemplo:</em> '¿Te pareció útil la explicación proporcionada por el chatbot? ¿Qué mejorarías en las preguntas realizadas?'</p>",
            "<p><strong>2. Análisis de las respuestas del chatbot:</strong> Revisa las respuestas generadas por el chatbot para asegurarte de que sean precisas, claras y relevantes. Identifica patrones en las respuestas incorrectas o confusas y ajusta los prompts en consecuencia.</p>",
            "<p class='mb-6'><em>Ejemplo:</em> Si el chatbot proporciona una respuesta inexacta sobre la fotosíntesis, revisa el prompt y la base de conocimientos del chatbot para corregir la información.</p>",
            "<p><strong>3. Pruebas A/B:</strong> Realiza pruebas A/B para comparar la efectividad de diferentes versiones de un mismo prompt. Esto implica crear dos versiones del prompt y medir cuál de ellas produce mejores resultados en términos de precisión de las respuestas y satisfacción del estudiante.</p>",
            "<p class='mb-6'><em>Ejemplo:</em> Versión A: 'Explica el proceso de la fotosíntesis.' Versión B: 'Describe cómo las plantas convierten la luz solar en energía mediante la fotosíntesis.'</p>",
            "<p><strong>4. Revisión por pares:</strong> Pide a otros educadores o expertos en la materia que revisen y evalúen los prompts. Sus observaciones y sugerencias pueden proporcionar valiosos insights para mejorar la calidad y claridad de los prompts.</p>",
            "<p class='mb-6'><em>Ejemplo:</em> '¿Crees que este prompt es claro y específico? ¿Cómo podría mejorarse?'</p>",
            "<p><strong>5. Monitoreo de métricas de desempeño:</strong> Utiliza métricas como el tiempo de respuesta del estudiante, la tasa de aciertos, y la satisfacción del usuario para evaluar la efectividad de los prompts. Estas métricas pueden ayudarte a identificar áreas que necesitan mejoras.</p>",
            "<p class='mb-6'><em>Ejemplo:</em> 'El 80% de los estudiantes respondieron correctamente al prompt sobre la ecuación cuadrática. ¿Cómo podemos aumentar esta tasa?'</p>",
            "<p><strong>6. Iteración y mejora continua:</strong> La evaluación de prompts debe ser un proceso continuo. Basándote en la retroalimentación y el análisis de datos, realiza ajustes y mejoras constantes a los prompts para asegurar su efectividad a lo largo del tiempo.</p>",
            "<p class='mb-6'><em>Ejemplo:</em> 'Después de revisar las respuestas, hemos ajustado el prompt para hacerlo más claro y específico.'</p>",
        ],
        references: [
            "<li><strong>Jain, M., Kumar, P., Kota, R., & Patel, S. N. (2018).</strong> 'Evaluating and generating prompts for chatbot-based interfaces.' Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems.</li>",
            "<li><strong>Kocielnik, R., Amershi, S., & Bennett, P. N. (2019).</strong> 'Will you accept an imperfect AI? Exploring designs for adjusting end-user expectations of AI systems.' Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems.</li>",
            "<li><strong>Braun, V., & Clarke, V. (2006).</strong> 'Using thematic analysis in psychology.' Qualitative Research in Psychology, 3(2), 77-101.</li>",
        ]
          
    },
    {
        id: '6',
        color: '#F48C06',
        title: 'Aplicaciones Prácticas en la Educación',
        description: 'Casos de uso específicos de chatbots en diferentes áreas educativas (por ejemplo, matemáticas, idiomas, ciencias).',
        images: [
            {
                title: 'Redacción de Ensayos',
                src: '1.png'
            },
            {
                title: 'Biología',
                src: '2.png'
            },
            {
                title: 'Matemáticas',
                src: '3.jpg'
            },
        ]
    }
];