"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { translations } from "../translations";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  logo?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "My Very First Co-op 😁",
    excerpt:
      "This experience not only introduced me to the fundamentals of web development but also sparked a passion for inclusive design.",
    content: `Starting my first co-op as part of the Quality Assurance (QA) Developer team has been a whirlwind of learning, adapting, and gaining 
    hands-on experience in software testing. Like most first-time experiences, I was both excited and a little nervous, not fully knowing 
    what to expect. But as I got into the flow, I realized that QA dev is so much more than simply finding bugs—it’s about building reliable 
    systems, ensuring user satisfaction, and working closely with the entire development team to create high-quality software. Here’s a closer 
    look at what my day-to-day looks like, the testing environments I work in, and some of the key QA practices I’ve picked up along the way.

    In QA, testing isn’t just done in one place. We work across three distinct environments: Dev, QA/Beta, and Live—each with its own purpose and requirements.

    1. Dev (Development Environment): This is where it all begins. Developers make changes here first, testing their work on local branches before merging them 
    into Dev. For major updates, additional testing is done early in Dev to catch potential issues before they impact other environments. As a QA developer, 
    I often keep an eye on these early changes, ensuring any problems are flagged quickly.

    2. QA/Beta Environment: Once changes look stable in Dev, they’re released to the QA or Beta environment. Here, I can test the app as if it’s close to release,
    which gives a more accurate picture of how features and updates will perform in the real world. It’s our chance to find issues that may not have surfaced 
    in Dev, allowing us to fine-tune before it goes live.

    3. Live Environment: Finally, changes make their way to the Live environment, where clients interact with the app. We typically release updates to Live about 
    once a week, or twice per sprint. It’s essential to run regression and smoke tests after each merge to confirm that everything is functioning as expected, 
    both in new features and existing functionality.

    This structured approach to environments has taught me a lot about the stages of development and the importance of thorough testing at every stage. 
    Each environment builds on the last, creating layers of checks and balances that help maintain a high-quality product.

    Every day on the QA team is a little different, but there’s always a consistent rhythm to the work. Most mornings start with me reviewing the project 
    board on Azure DevOps. This board is like our central hub, tracking each feature, bug, and task in the current sprint. As soon as a developer marks 
    a feature as complete, it’s my job to jump in and manually test it to provide immediate feedback. Quick testing and feedback are essential, as they 
    help developers make timely adjustments and keep the project moving forward.

    In between these immediate tasks, I get to work on automation. When there aren’t new features or bug fixes to test, I spend time building out 
    automated integration and API tests. Automation is a big focus in our QA team—it allows us to streamline repetitive tests and get faster, 
    consistent results. Additionally, we hold regular team testing sessions to brainstorm, identify bugs, and collaborate on complex testing 
    scenarios. This balance between manual testing and automation has shown me the value of adaptability and how both approaches complement 
    each other to create a robust testing process.\n
    
    Our QA process includes daily pipeline runs that automatically test key areas of the application. Each pipeline run generates a 
    JUnit report that provides a summary of which tests passed, which failed, and details about the build. The report is sent via 
    email to QA team members and stakeholders, who review the results and address any failures. This automation has taught me the 
    importance of efficiency and consistency in testing, as it allows us to maintain quality standards with minimal manual intervention.\n
    
    Looking back on my first co-op experience, I’m grateful for the opportunity to dive into the world of quality assurance. 
    Working in QA has shown me that software testing is not just about finding bugs—it’s about building a product that people can trust. 
    It’s about paying attention to detail, thinking critically, and always considering the end user’s experience.

    Through daily testing, automation, and Agile ceremonies, I’ve gained valuable skills and a new perspective on software development. 
    I’ve learned the importance of communication, the power of collaboration, and the impact of a well-organized testing process. 
    This experience has laid a strong foundation for my future career, and I’m excited to carry these lessons forward as 
    I continue to grow in the field of software development.`,
    date: "2022-09-02",
    image: "/placeholder.svg?height=400&width=600",
    logo: "./assets/purolator.webp",
  },
  {
    id: "2",
    title: "My Experience as a Software Quality Analyst at Sonova 🦻👨‍💻",
    excerpt:
      "Reflecting on my co-op placement and the valuable skills I gained in the hearing aid industry.",
    content: `During my 4-month co-op placement at Sonova as a Software Quality Analyst (SQA), 
    I had the opportunity to dive deep into the world of hearing aid technology and software testing. 
    This experience not only enhanced my technical skills but also gave me a new perspective on the impact of technology in healthcare.

    Sonova is a global leader in innovative hearing care solutions: 
    from personal audio devices and wireless communication systems to 
    audiological care services, hearing aids and cochlear implants. 
    The Group was founded in 1947 and is headquartered in Stäfa, Switzerland.
    My co-op placement was at Unitron Canada, which is one of the branches of Sonova. 
    Unitron is a hearing aid manufacturer with worldwide operations headquartered 
    in Kitchener. Essentially, the company is the responsible for managing all the 
    hearing aid products, apps and accessories it manufactures. From my point of view,
    Sonova is a great first introduction to the Software Quality Assurance.

    It might seem tricky at start because of all the myriad products and services 
    they provide but you eventially adapt and learn. However, the company culture 
    is very cohesive. The reason for that being the size of the teams which are small 
    enough so you feel part of the team and you get to know everyone ultimately. 
    The SQA team composes of 12 people and we work closely with the fitting software
    team which is made of Software Developers and they have 14 people on their team. 
    Moreover, the social committee makes sure to host events for the employees every 
    once in a while so that we can get away from the tense work stress.\n
    
    As part of my co-op placement, I set out learning goals that I could achieve 
    throughout my time at Sonova. I set three goals that I think will help me 
    become a better and thriving Software Developer in the future. Working on 
    these goals have repeatedly kept me on track and helped me to stay focus 
    during my placement. Below I demonstrate what my goals were and how I achieved them.

    1. Oral Communication
    The number one goal was to communicate with software developers and managers to 
    ensure my testing was accurate and meaningful. My action plan was to improve on 
    my interpersonal skills during daily huddles and one on one meetings. This was a 
    task that changes with different software. As I became more familiar with each 
    program I tested, it became easier to gage my accuracy and meaning. I have not
    had a bug report denied because the bug was a known issue or not an issue at all. 
    A good measure of success for this primary goal was that that the issues found 
    were meaningful and the tests I ran were being executed accurately.

    2. Depth & Breadth of Understanding
    The second goal was to have an overall understanding of how other departments 
    worked and how they operated through the whole software cycle. My action plan 
    was to learn about other departments during my time in the company and whenever
    we had dedicated learning time which was dedicated time to learn about other 
    things that could be related to work or not. The measure of my success of this 
    secondary was to know how other departments operate after my time at Sonova. 
    I think it is important to not overlook the different aspects of the company.

    3. Problem Solving
    The third goal would be to improve on problem solving skills and citical thinking
    This allowed me to solve any bugs or issues related to my program. 
    Moreover, critical thinking applies to real world situations as well. 
    My action plan for this goal was to follow some steps methodically every 
    time there was some problem to solve. The steps to follow would be to:

    - Identify the problem \n
    - Do research\n
    - Gather solutions to the problem\n
    - Find the best solution\n
    - Apply the solution to the problem\n

    A measure of success for this goal was to solve problems 
    methodically and in a timely way. Problems can have different 
    level of diffculty so having a game plan is more efficient and not waste resources.\n
    
    My term spent at Sonova this Fall has been an incredible experience. I was able 
    to have a deeper view of how hearing aids work and also understand the multiple 
    concept surrounding hearing loss. I was able to contribute to projects that help 
    make a real difference in in the world. I was also lucky to learn about myriad of 
    new technologies that are are in production and some that have been recently launched. 
    In the end I was able to meet most of my goals I have set myself in the beginning of the term. 
    Between the learning goals I have achieved and the projects I have worked on, I gained a lot 
    during this term, both in skill set and experience. That being said, I hope you have enjoyed 
    reading this post and you are as intrigued as I was about hearing aids!`,
    date: "20223-01-10",
    image: "/placeholder.svg?height=400&width=600",
    logo: "./assets/sonova.png",
  },
  {
    id: "3",
    title: "My Second Med-Tech Job 🩺💻",
    excerpt:
      "Diving into the world of medical technology, ensuring software reliability and exploring the importance of web accessibility",
    content: `Hi there! Over the past four months, I’ve had the incredible opportunity to work at Intellijoint Surgical (IJS) 
    as a Software Developer in Test during my co-op placement. In this post, I’ll share a glimpse into my time at IJS, including my 
    daily tasks, key responsibilities, and the valuable lessons I’ve gained. This role allowed me to dive deep into software quality 
    assurance, working closely with the development team to ensure the quality and reliability of our software products through a 
    combination of inline and automated testing.

    About Intellijoint Surgical (IJS)\n
    Intellijoint Surgical is a medical technology company dedicated to creating innovative solutions for orthopedic surgeons, 
    enhancing the precision and outcomes of joint replacement surgeries. They are renowned for developing advanced surgical navigation 
    and guidance systems, designed to aid in implant positioning and alignment, which are critical to the success and longevity of 
    joint replacements. One of their flagship products, the Intellijoint VIEW System, is an intraoperative imaging tool that provides 
    real-time, high-resolution images during total hip arthroplasty (hip replacement) surgeries. This system empowers surgeons to make 
    data-driven decisions during procedures, potentially reducing the risk of complications and improving patient outcomes.

    The Intellijoint VIEW system boasts several key features:

    Intraoperative Imaging: Surgeons can access high-quality, real-time images, providing critical visual information that 
    assists in implant placement and alignment.

    Accuracy and Precision: With imaging technology designed for precise measurements, the system supports optimal 
    implant positioning, contributing to better patient outcomes.

    Surgical Navigation: By visualizing the anatomy in relation to implant components, the system enables adjustments 
    for proper fit and alignment. 

    Customization: The system can be tailored based on the surgeon’s preferences and the patient's unique anatomy, 
    allowing for a personalized approach to surgery.\n
    
    My Experience and What I Learned:\n

    At the beginning of my co-op, I established several learning objectives to guide my progress and help me grow as a 
    future Software Developer. These goals have been instrumental in keeping me focused and motivated, and I’d like to 
    share how each of these objectives has shaped my experience at IJS.

    Oral Communication - 
    One of my primary goals was to enhance my oral communication skills, especially when interacting with software 
    developers and managers. Clear communication is essential in QA, as it ensures that my testing efforts are understood 
    and valued by the team. To meet this goal, I actively participated in daily huddles and one-on-one meetings, where I 
    provided updates on my progress and discussed any testing insights. Over time, I became more familiar with each 
    software program I tested, allowing me to communicate test results and bug reports more confidently. I’m proud to say 
    that none of my bug reports were rejected as irrelevant, which I see as a testament to the quality of my work and my 
    ability to communicate effectively.

    Problem Solving - 
    Another key goal was to improve my problem-solving skills and critical thinking abilities. In QA, problem-solving 
    goes beyond identifying bugs; it’s about finding efficient, structured approaches to tackle challenges. 
    I developed a systematic method to approach issues, which involves recognizing and defining the problem, 
    conducting thorough research, compiling potential solutions, and then implementing the best option. 
    This structured approach has been invaluable in managing the variety of issues I’ve encountered. 
    It’s also an efficient way to avoid wasting time and resources, as I can tackle problems systematically and resolve 
    them quickly.

    Teamwork - 
    Finally, I aimed to enhance my teamwork skills. Successful software development requires collaboration, as 
    everyone’s contributions need to align toward a common goal. I worked on improving my ability to collaborate 
    effectively by understanding both the shared objectives of the team and my specific responsibilities within that 
    framework. I found that establishing strong connections with both the Development (Dev) and Quality Assurance (QA) 
    teams was essential to this goal. By understanding each team’s priorities, I was able to contribute to a smooth 
    workflow and work collaboratively toward our shared goals.

    A Day in the Life of a Software Developer in Test\n
    In my role as a Software Developer in Test at IJS, I primarily focused on automating the VIEW web application, 
    along with writing inline tests. At the start of the term, my supervisor and I set ambitious goals to automate 
    50% of the system within four months. This was a challenging task, as our regression test suite consisted of over
    150 test tickets. However, I understood the value of automating these tests, as they would significantly reduce 
    repetitive manual work and provide faster feedback within the continuous development process.

    My day usually began with a scrum meeting, where the team discussed our progress, any blockers, and other 
    sprint-related issues. This daily stand-up helped keep us aligned and provided a space for immediate problem-solving. 
    Throughout the day, I worked on test automation and, whenever necessary, performed manual inline tests to ensure 
    quality. If I discovered any issues during testing, I reported them to the development team using our bug-tracking 
    tool, Jira. Writing clear and concise bug reports became essential for effective communication and faster resolution 
    of issues. Additionally, we had other scheduled meetings, such as sprint planning, sprint retrospectives, and 
    exploratory testing sessions, which added structure and rhythm to our week.

    What, When, and Why of Regression Testing\n
    What: Regression testing is essential to confirm that new code changes do not negatively impact the existing 
    functionality of the application.

    When: Ideally, regression tests should be run as frequently as possible. In our case, we aimed to run automated 
    regression tests after each code change to catch issues early.

    Why: Regular regression testing helps mitigate risks and allows the team to catch bugs in real-time as code 
    evolves. By continuously testing, we ensure that new features don’t break or compromise the application’s stability.

    Prioritization – Which Tests to Automate?\n
    When automating tests, it’s crucial to focus on areas with the highest impact on the application. This includes 
    areas that require repetitive testing, are tedious to test manually, or are particularly vulnerable to errors. 
    Main functions of the application and error-prone features are always prioritized in the automation process.

    Writing and Running CodeceptJS Tests\n
    One of the tools I used during my time at IJS was CodeceptJS, an automated testing framework written in JavaScript. 
    CodeceptJS was our go-to tool for performing regression and Verification & Validation (V&V) testing on the VIEW 
    system. Despite my initial unfamiliarity with JavaScript, I quickly picked up enough to write and execute tests in 
    CodeceptJS effectively. Learning to use this tool has been a rewarding experience, as it not only improved my coding 
    skills but also allowed me to contribute to a faster, more efficient testing process.

    Reflecting on My Co-op Experience\n
    My summer work term at IJS has been an extraordinary journey. I gained a deep understanding of computer-aided 
    surgery and the role of technology in orthopedic procedures. Working at a company dedicated to making a positive 
    impact on patients’ lives has been incredibly rewarding. Alongside my personal achievements, I had the chance to 
    work with emerging technologies and make meaningful contributions to projects that genuinely matter.

    Reflecting on the goals I set at the beginning of the term, I’m proud of how far I’ve come. I enhanced my 
    communication, problem-solving, and teamwork skills while actively participating in projects that strengthened my
    understanding of software testing. This experience has been invaluable, and I leave with a solid foundation in QA 
    and a newfound appreciation for the world of joint replacement surgery. I hope you enjoyed reading about my journey 
    and found it as fascinating as I did!`,
    date: "2023-09-05",
    image: "/placeholder.svg?height=400&width=600",
    logo: "./assets/intellijoint.png",
  },
  {
    id: "4",
    title: "Being a Novice in the Car Industry 🚘😊",
    excerpt:
      "My journey as a Vehicle Connected Services intern at Nissan Canada, where I worked to enhance vehicle connectivity.",
    content: `Hi there! Over the past 8 months, I had the incredible opportunity to work as a Vehicle Connected Services (VCS) 
    intern at Nissan Canada. During my co-op placement, I was responsible for ensuring the quality and reliability of connected 
    vehicle services through a mix of inline and automated testing. This role required me to collaborate with multiple teams to 
    integrate advanced connectivity features into Nissan’s vehicles, ultimately enhancing the driving experience. My tasks ranged 
    from validating connectivity functionalities to troubleshooting issues and ensuring seamless integration with other systems. 
    In this post, I’ll walk you through my daily responsibilities, learning goals, and the insights I gained during my time at Nissan.

    About Nissan Canada\n
    Nissan Canada, a subsidiary of Nissan Motor Co., Ltd., oversees the company’s presence in Canada, ensuring Nissan’s global 
    standards and innovations are effectively implemented in the Canadian market. Their operations cover various areas, including 
    sales and marketing, customer service, distribution and logistics, research and development, financial services, sustainability, 
    and connected services. Nissan Canada not only promotes the brand’s diverse lineup but also works to maintain customer satisfaction 
    through robust support services, such as warranty assistance, maintenance, and repair.

    In distribution and logistics, Nissan Canada manages the smooth delivery of vehicles and parts across the country, ensuring a 
    responsive supply chain. Their research and development team collaborates with global R&D units to adapt vehicles and technologies 
    to Canadian conditions, including rigorous cold-weather testing. Furthermore, Nissan Canada is committed to sustainability, 
    promoting eco-friendly technologies and advancing electric vehicle initiatives. At the forefront of their innovation efforts is 
    the development of Vehicle Connected Services (VCS), equipping vehicles with connectivity features that enhance safety, convenience, 
    and overall driving experience. Through these initiatives, Nissan Canada is dedicated to providing high-quality products and services 
    that meet the evolving needs of Canadian drivers.

    My Experience and Learning Goals\n
    During my co-op at Nissan, I set specific learning objectives to guide my progress and help me make the most of this opportunity. 
    These goals included improving user experience, enhancing my critical and creative thinking, and deepening my understanding of 
    vehicle connected services. Let’s dive into how each of these goals shaped my experience.

    Personal Learning Goal\n
    My main objective was to improve the user experience (UX) and customer experience (CX) by ensuring that Nissan’s 
    connected vehicle services were comprehensive and user-friendly. To achieve this, I underwent specialized training in vehicle 
    connected services, learning the full range of features and services available to Nissan customers. I participated in customer 
    feedback sessions to better understand user needs and collaborated with the tech team to streamline the user interface.
     Success in this goal was measured by improvements in customer satisfaction, a reduction in customer complaints, and increased 
     usage of connected services. Tracking the frequency and nature of customer inquiries helped us assess the effectiveness of the 
     improvements we implemented.

    Critical and Creative Thinking - Inquiry and Analysis \n
    Another goal I set was to elevate my problem-solving skills by applying critical and creative thinking to complex service issues. 
    To accomplish this, I engaged in specialized training focused on analytical and problem-solving techniques for vehicle technology. 
    I collaborated with cross-functional teams to dissect and brainstorm solutions for various service challenges. By reviewing customer 
    feedback and analyzing service data, I was able to develop innovative solutions to previously unresolved issues. 
    Success in this area was measured by the implementation of new solutions, improved efficiency in issue resolution, 
    and positive shifts in customer feedback.

    Critical and Creative Thinking - Depth and Breadth of Understanding\n
    Lastly, I aimed to gain a profound understanding of vehicle connected services to better support our customers. This goal involved
     studying current trends, participating in industry webinars, and experimenting with new technologies in vehicle services. I also 
     conducted comparative analyses of competitor services to broaden my perspective on the field. Success in this area was 
     demonstrated by my ability to proactively identify potential service issues, develop knowledge-sharing resources for the team, 
     and receive positive feedback from peers on the value of my insights.

    A Day in the Life of a VCS Intern\n
    As a VCS intern at Nissan Canada, my daily responsibilities revolved around ensuring seamless vehicle connectivity. But first, 
    let me explain what Vehicle Connected Services (VCS) entails. VCS refers to a suite of technologies that enhance connectivity, safety, 
    and convenience in vehicles by enabling communication between the vehicle, the driver, and external systems. VCS integration is achieved 
    through several methods:

    Beamed In: Features provided via wireless communication, such as real-time traffic updates, navigation assistance, and streaming services.
    Brought In: Features integrated through the driver’s own devices, like smartphone apps for navigation and music streaming (e.g., Apple CarPlay, Android Auto).
    Built In: Hardware and software features installed during manufacturing, such as navigation systems and in-car voice assistants.
    Customer Facing: Web portals and mobile apps that connect drivers with various VCS functionalities, enhancing the overall user experience.\n

    My day typically began with scrum meetings where we discussed progress, blockers, and sprint-related tasks. If I encountered issues during testing, 
    I reported them through Jira, Nissan’s bug-tracking tool, ensuring clear and concise documentation for effective communication. Throughout the day, 
    I tackled different tasks related to VCS, such as validating vehicle messages, performing user acceptance testing (UAT) for MyNissan and MyINFINITI apps, 
    and providing support for Nissan Canada Finance (NCF) on vehicle tracking requests. Here’s a breakdown of some key tasks:

    In-Vehicle Messages (IVM): Sent weekly to vehicles, these messages include recalls, maintenance notices, and welcome messages. I sent a second batch if 
    the initial one failed, ensuring customer engagement and communication.\n
    Communication Plan Change: Weekly updates to communication plans for vehicles in certain regions, ensuring reliable connectivity based on local infrastructure. \n
    Rate Plan Change: Adjusted rate plans for retailed vehicles to grant them full access to connected services.\n
    MyNissan and MyINFINITI UAT: Validated updates in the apps to ensure functionality, reporting bugs if needed before each release.\n
    Support for NCF: Assisted in tracking vehicles, particularly for stolen vehicles or unresolved payment issues, providing accurate vehicle locations.\n
    
    Reflections on My Time at Nissan\n
    My co-op experience as a VCS intern at Nissan has been an enlightening journey, offering me a comprehensive understanding of 
    connected vehicle services and a broader perspective on the automotive industry. Working on projects that directly impact 
    the driving experience was incredibly rewarding, and I feel fortunate to have contributed to technologies that prioritize 
    customer convenience and safety. I had the opportunity to explore emerging automotive technologies, some still in development, 
    which has deepened my appreciation for the innovation and progress within this field.\n

    Reflecting on my initial learning goals, I’m proud of how much I’ve achieved. I enhanced my communication, problem-solving, 
    and analytical skills, while immersing myself in impactful projects that enriched my understanding of VCS. 
    This experience has been instrumental in shaping my career path, equipping me with valuable knowledge and skills that 
    I’ll carry forward as I continue to grow in the tech and automotive industries. I hope you found this post insightful and 
    are as excited as I am about the world of connected vehicle services and innovation at Nissan!`,
    date: "2024-9-10",
    image: "/placeholder.svg?height=400&width=600",
    logo: "./assets/nissan.png",
  },
];

const translateContent = (content: string): string => {
  if (content.includes("Starting my first co-op")) {
    return `
    French Translation:

    Commencer mon premier stage coopératif en tant que membre de l'équipe de développement en assurance qualité (QA) a été une expérience riche en apprentissage, en adaptation et en acquisition d'une expérience pratique en test logiciel. Comme pour la plupart des premières expériences, j'étais à la fois enthousiaste et un peu nerveux, sans savoir exactement à quoi m'attendre. Mais au fil du temps, j'ai réalisé que le développement QA est bien plus que simplement trouver des bugs : il s'agit de construire des systèmes fiables, d'assurer la satisfaction des utilisateurs et de collaborer étroitement avec toute l'équipe de développement pour créer des logiciels de haute qualité. Voici un aperçu de mon quotidien, des environnements de test dans lesquels je travaille, et de certaines pratiques clés en QA que j'ai apprises en cours de route.

    En QA, les tests ne se font pas dans un seul environnement. Nous travaillons dans trois environnements distincts : Dev, QA/Bêta, et Production, chacun ayant ses propres objectifs et exigences.

    Environnement Dev (Développement) : Tout commence ici. Les développeurs effectuent d'abord leurs modifications ici, en testant leur travail sur des branches locales avant de les fusionner dans Dev. Pour les mises à jour majeures, des tests supplémentaires sont effectués dès le début en Dev afin de détecter les problèmes potentiels avant qu'ils n'affectent les autres environnements. En tant que développeur QA, je surveille souvent ces modifications initiales pour signaler rapidement les éventuels problèmes.

    Environnement QA/Bêta : Une fois que les modifications semblent stables en Dev, elles sont déployées dans l'environnement QA ou Bêta. Ici, je peux tester l'application comme si elle était proche d'une version finale, ce qui donne une image plus précise de la performance des fonctionnalités et des mises à jour dans le monde réel. C'est notre chance de détecter les problèmes qui n'ont peut-être pas émergé en Dev, ce qui nous permet d'affiner le produit avant son déploiement en production.

    Environnement de Production : Enfin, les modifications arrivent en production, où les clients interagissent avec l'application. Nous publions généralement des mises à jour en production environ une fois par semaine, ou deux fois par sprint. Il est essentiel d'effectuer des tests de régression et des tests de fumée après chaque fusion pour confirmer que tout fonctionne comme prévu, tant pour les nouvelles fonctionnalités que pour les fonctionnalités existantes.

    Cette approche structurée des environnements m'a beaucoup appris sur les étapes de développement et sur l'importance de tests approfondis à chaque étape. Chaque environnement s'appuie sur le précédent, créant des couches de contrôle qui aident à maintenir un produit de haute qualité.

    Chaque jour dans l'équipe QA est un peu différent, mais il y a toujours un rythme de travail cohérent. La plupart de mes matinées commencent par un examen du tableau de projet dans Azure DevOps. Ce tableau est comme notre hub central, suivant chaque fonctionnalité, bug et tâche dans le sprint en cours. Dès qu'un développeur marque une fonctionnalité comme terminée, c'est mon travail de la tester manuellement pour fournir un retour immédiat. Les tests rapides et les retours sont essentiels, car ils permettent aux développeurs d'apporter des ajustements en temps opportun et de maintenir le projet en mouvement.

    Entre ces tâches immédiates, je travaille sur l'automatisation. Lorsqu'il n'y a pas de nouvelles fonctionnalités ou corrections de bugs à tester, je passe du temps à créer des tests d'intégration et d'API automatisés. L'automatisation est une grande priorité dans notre équipe QA : elle nous permet de rationaliser les tests répétitifs et d'obtenir des résultats plus rapides et cohérents. De plus, nous organisons régulièrement des sessions de test en équipe pour réfléchir, identifier les bugs et collaborer sur des scénarios de test complexes. Cet équilibre entre tests manuels et automatisation m'a montré la valeur de l'adaptabilité et comment les deux approches se complètent pour créer un processus de test robuste.

    Notre processus QA comprend des exécutions de pipelines quotidiennes qui testent automatiquement les principales fonctionnalités de l'application. Chaque exécution de pipeline génère un rapport JUnit qui résume les tests réussis, les tests échoués et les détails sur la build. Ce rapport est envoyé par e-mail aux membres de l'équipe QA et aux parties prenantes, qui examinent les résultats et résolvent les échecs éventuels. Cette automatisation m'a appris l'importance de l'efficacité et de la cohérence dans les tests, car elle nous permet de maintenir des normes de qualité avec une intervention manuelle minimale.

    En repensant à mon premier stage coopératif, je suis reconnaissant pour l'opportunité de plonger dans le monde de l'assurance qualité. Travailler en QA m'a montré que les tests logiciels ne consistent pas seulement à trouver des bugs : il s'agit de construire un produit en lequel les gens peuvent avoir confiance. Il s'agit de prêter attention aux détails, de penser de manière critique et de toujours considérer l'expérience utilisateur finale.

    Grâce aux tests quotidiens, à l'automatisation et aux cérémonies Agile, j'ai acquis des compétences précieuses et une nouvelle perspective sur le développement logiciel. J'ai appris l'importance de la communication, la puissance de la collaboration et l'impact d'un processus de test bien organisé. Cette expérience a jeté une base solide pour ma future carrière, et je suis impatient de poursuivre sur cette voie en continuant à évoluer dans le domaine du développement logiciel.`;
  }

  if (content.includes("During my 4-month co-op placement at Sonova")) {
    return `Pendant mon stage coopératif de 4 mois chez Sonova en tant qu'analyste en qualité logicielle (SQA), j'ai eu l'opportunité d'explorer en profondeur le monde des technologies des aides auditives et des tests logiciels. Cette expérience m'a non seulement permis d'améliorer mes compétences techniques, mais aussi d'acquérir une nouvelle perspective sur l'impact de la technologie dans le domaine de la santé.

    Sonova est un leader mondial dans les solutions innovantes en soins auditifs : des dispositifs audio personnels et des systèmes de communication sans fil aux services d'audiologie, aides auditives et implants cochléaires. Le groupe a été fondé en 1947 et est basé à Stäfa, en Suisse. Mon stage coopératif s'est déroulé chez Unitron Canada, l'une des filiales de Sonova. Unitron est un fabricant d'aides auditives qui opère à l'échelle mondiale, avec son siège social à Kitchener. Essentiellement, l'entreprise est responsable de la gestion de tous les produits, applications et accessoires d'aides auditives qu'elle fabrique. De mon point de vue, Sonova constitue une excellente introduction à l'assurance qualité logicielle.

    Cela peut sembler complexe au début en raison de la multitude de produits et de services qu'ils offrent, mais on s'adapte et on apprend rapidement. Cependant, la culture d'entreprise est très cohésive. Cela est en grande partie dû à la taille des équipes, qui sont suffisamment petites pour que chacun se sente intégré et puisse connaître tout le monde. L'équipe SQA se compose de 12 personnes, et nous travaillons en étroite collaboration avec l'équipe de développement des logiciels de réglage, qui comprend 14 développeurs. De plus, le comité social s'assure d'organiser des événements pour les employés de temps à autre, ce qui permet de se détendre et de relâcher le stress du travail.

    Dans le cadre de mon stage, je me suis fixé des objectifs d'apprentissage que je pouvais atteindre pendant mon séjour chez Sonova. J'ai défini trois objectifs qui, selon moi, m'aideraient à devenir un meilleur développeur logiciel à l'avenir. Travailler sur ces objectifs m'a permis de rester concentré et motivé tout au long de mon stage. Voici quels étaient mes objectifs et comment je les ai atteints.

    Communication orale
    Mon premier objectif était de communiquer efficacement avec les développeurs et les responsables pour garantir que mes tests étaient précis et pertinents. Mon plan d'action consistait à améliorer mes compétences interpersonnelles lors des réunions quotidiennes et des échanges individuels. Cela s'est amélioré à mesure que je devenais plus familier avec les programmes que je testais, ce qui me permettait de mieux évaluer la précision et la pertinence de mes résultats. Je n'ai jamais eu un rapport de bug refusé parce qu'il concernait un problème connu ou inexistant. Une bonne mesure de succès pour cet objectif était que les problèmes identifiés étaient significatifs et que mes tests étaient exécutés avec précision.

    Compréhension approfondie et globale
    Mon deuxième objectif était d'avoir une compréhension globale du fonctionnement des autres départements et de leur rôle dans le cycle logiciel. Mon plan d'action consistait à apprendre à connaître les autres départements pendant mon stage et lors des sessions d'apprentissage dédiées, qui étaient du temps alloué pour découvrir des sujets liés ou non au travail. La mesure de succès de cet objectif secondaire était de comprendre le fonctionnement des autres départements à la fin de mon stage chez Sonova. Je pense qu'il est important de ne pas négliger les différents aspects de l'entreprise.

    Résolution de problèmes
    Mon troisième objectif était d'améliorer mes compétences en résolution de problèmes et en pensée critique. Cela m'a permis de résoudre des bugs ou des problèmes liés à mes programmes. De plus, la pensée critique s'applique également aux situations réelles. Mon plan d'action pour cet objectif consistait à suivre une méthode structurée à chaque problème rencontré. Les étapes à suivre étaient :

    Identifier le problème
    Faire des recherches
    Recueillir des solutions au problème
    Trouver la meilleure solution
    Appliquer la solution au problème
    Une mesure de succès pour cet objectif était de résoudre les problèmes de manière méthodique et en temps opportun. Les problèmes ayant différents niveaux de difficulté, avoir un plan clair permet d'être plus efficace et d'éviter de gaspiller des ressources.

    Mon stage chez Sonova cet automne a été une expérience incroyable. J'ai pu avoir une vision approfondie du fonctionnement des aides auditives et comprendre les multiples concepts entourant la perte auditive. J'ai contribué à des projets qui ont un impact réel dans le monde. J'ai également eu la chance d'apprendre sur de nombreuses technologies nouvelles, certaines en production et d'autres récemment lancées. En fin de compte, j'ai pu atteindre la plupart des objectifs que je m'étais fixés au début de mon stage. Entre les objectifs d'apprentissage que j'ai réalisés et les projets auxquels j'ai participé, j'ai beaucoup appris pendant cette période, tant en compétences qu'en expérience. Cela étant dit, j'espère que vous avez apprécié lire ce témoignage et que vous êtes aussi intrigué que moi par les aides auditives !`;
  }

  if (
    content.includes(
      "Hi there! Over the past four months, I’ve had the incredible"
    )
  ) {
    return `Bonjour à tous ! Au cours des quatre derniers mois, j'ai eu l'incroyable opportunité de travailler chez Intellijoint Surgical (IJS) en tant que développeur logiciel en test lors de mon stage coopératif. Dans cet article, je vais partager un aperçu de mon expérience chez IJS, y compris mes tâches quotidiennes, mes principales responsabilités et les précieuses leçons que j'ai apprises. Ce rôle m'a permis d'approfondir mes connaissances en assurance qualité logicielle, en collaborant étroitement avec l'équipe de développement pour garantir la qualité et la fiabilité de nos produits logiciels grâce à une combinaison de tests en ligne et automatisés.

    À propos d'Intellijoint Surgical (IJS)

    Intellijoint Surgical est une entreprise de technologie médicale dédiée à la création de solutions innovantes pour les chirurgiens orthopédistes, améliorant la précision et les résultats des chirurgies de remplacement articulaire. Elle est reconnue pour développer des systèmes avancés de navigation et de guidage chirurgical, conçus pour aider à positionner et aligner les implants, des éléments essentiels pour le succès et la durabilité des remplacements articulaires. L'un de leurs produits phares, le système Intellijoint VIEW, est un outil d'imagerie peropératoire qui fournit des images haute résolution en temps réel lors des chirurgies de remplacement de la hanche. Ce système permet aux chirurgiens de prendre des décisions éclairées pendant les interventions, réduisant potentiellement les risques de complications et améliorant les résultats pour les patients.

    Le système Intellijoint VIEW offre plusieurs caractéristiques clés :

    Imagerie peropératoire : Les chirurgiens ont accès à des images de haute qualité en temps réel, fournissant des informations visuelles critiques pour le placement et l'alignement des implants.
    Précision et exactitude : Grâce à une technologie d'imagerie conçue pour des mesures précises, le système contribue à un positionnement optimal des implants, favorisant de meilleurs résultats pour les patients.
    Navigation chirurgicale : En visualisant l'anatomie par rapport aux composants de l'implant, le système permet des ajustements pour un ajustement et un alignement appropriés.
    Personnalisation : Le système peut être adapté en fonction des préférences du chirurgien et de l'anatomie unique du patient, permettant une approche personnalisée de la chirurgie.
    Mon expérience et ce que j'ai appris :

    Au début de mon stage, j'ai défini plusieurs objectifs d'apprentissage pour guider ma progression et m'aider à évoluer en tant que futur développeur logiciel. Ces objectifs ont été essentiels pour rester concentré et motivé, et je souhaite partager comment chacun d'eux a façonné mon expérience chez IJS.

    Communication orale
    L'un de mes principaux objectifs était d'améliorer mes compétences en communication orale, en particulier lorsque j'interagissais avec les développeurs logiciels et les managers. Une communication claire est essentielle en QA, car elle garantit que mes efforts de test sont compris et valorisés par l'équipe. Pour atteindre cet objectif, j'ai activement participé aux réunions quotidiennes et aux rencontres individuelles, où je donnais des mises à jour sur mes progrès et discutais des résultats de mes tests. Avec le temps, je me suis familiarisé avec chaque programme logiciel que je testais, ce qui m'a permis de communiquer mes résultats de test et rapports de bugs avec plus de confiance. Je suis fier de dire qu'aucun de mes rapports de bugs n'a été rejeté comme étant non pertinent, ce qui témoigne de la qualité de mon travail et de ma capacité à communiquer efficacement.

    Résolution de problèmes
    Un autre objectif clé était d'améliorer mes compétences en résolution de problèmes et en pensée critique. En QA, la résolution de problèmes ne se limite pas à identifier des bugs ; il s'agit de trouver des approches efficaces et structurées pour relever les défis. J'ai développé une méthode systématique pour aborder les problèmes, qui consiste à reconnaître et définir le problème, effectuer des recherches approfondies, compiler des solutions potentielles, puis implémenter la meilleure option. Cette approche structurée a été inestimable pour gérer la variété des problèmes rencontrés. Elle est également un moyen efficace d'éviter de perdre du temps et des ressources, en me permettant de résoudre les problèmes rapidement et de manière méthodique.

    Travail d'équipe
    Enfin, j'ai cherché à améliorer mes compétences en travail d'équipe. Le développement logiciel réussi nécessite une collaboration, car les contributions de chacun doivent s'aligner sur un objectif commun. J'ai travaillé à améliorer ma capacité à collaborer efficacement en comprenant à la fois les objectifs partagés de l'équipe et mes responsabilités spécifiques au sein de ce cadre. J'ai découvert qu'établir des liens solides avec les équipes de développement (Dev) et d'assurance qualité (QA) était essentiel pour atteindre cet objectif. En comprenant les priorités de chaque équipe, j'ai pu contribuer à un flux de travail fluide et travailler en collaboration vers nos objectifs communs.

    Une journée dans la vie d’un développeur logiciel en test

    Dans mon rôle chez IJS, je me suis principalement concentré sur l'automatisation de l'application web VIEW, ainsi que sur l'écriture de tests en ligne. Au début du trimestre, mon superviseur et moi avons fixé des objectifs ambitieux pour automatiser 50 % du système en quatre mois. C'était une tâche difficile, car notre suite de tests de régression comprenait plus de 150 tickets de test. Cependant, j'ai compris la valeur de l'automatisation de ces tests, car cela réduirait considérablement le travail manuel répétitif et fournirait des retours plus rapides dans le cadre du processus de développement continu.`;
  }

  if (content.includes("Hi there! Over the past 8 months")) {
    return `Bonjour à tous ! Au cours des huit derniers mois, j'ai eu l'incroyable opportunité de travailler en tant que stagiaire en services connectés aux véhicules (VCS) chez Nissan Canada. Pendant mon stage coopératif, j'étais responsable d'assurer la qualité et la fiabilité des services connectés aux véhicules grâce à une combinaison de tests en ligne et automatisés. Ce rôle m'a permis de collaborer avec plusieurs équipes pour intégrer des fonctionnalités de connectivité avancées dans les véhicules Nissan, améliorant ainsi l'expérience de conduite. Mes tâches allaient de la validation des fonctionnalités de connectivité à la résolution de problèmes, en passant par l'intégration harmonieuse avec d'autres systèmes. Dans cet article, je vais vous présenter mes responsabilités quotidiennes, mes objectifs d'apprentissage et les leçons que j'ai tirées de mon temps chez Nissan.

    À propos de Nissan Canada

    Nissan Canada, une filiale de Nissan Motor Co., Ltd., supervise la présence de l'entreprise au Canada, veillant à ce que les normes et innovations mondiales de Nissan soient efficacement mises en œuvre sur le marché canadien. Ses opérations couvrent divers domaines, notamment les ventes et le marketing, le service client, la distribution et la logistique, la recherche et développement, les services financiers, la durabilité et les services connectés. Nissan Canada ne se contente pas de promouvoir la gamme variée de la marque, mais s'efforce également de maintenir la satisfaction des clients grâce à des services de support robustes, tels que l'assistance sous garantie, la maintenance et les réparations.

    En matière de distribution et logistique, Nissan Canada gère la livraison fluide de véhicules et de pièces à travers le pays, assurant une chaîne d'approvisionnement réactive. Son équipe de recherche et développement collabore avec des unités mondiales pour adapter les véhicules et les technologies aux conditions canadiennes, y compris des tests rigoureux en conditions hivernales. De plus, Nissan Canada s'engage pour la durabilité, en promouvant des technologies respectueuses de l'environnement et en développant des initiatives pour les véhicules électriques. Au cœur de ses efforts d'innovation se trouve le développement des services connectés aux véhicules (VCS), équipant les véhicules de fonctionnalités connectées qui améliorent la sécurité, la commodité et l'expérience globale de conduite. Grâce à ces initiatives, Nissan Canada s'efforce de fournir des produits et services de haute qualité répondant aux besoins évolutifs des conducteurs canadiens.

    Mon expérience et mes objectifs d'apprentissage

    Pendant mon stage chez Nissan, j'ai défini des objectifs d'apprentissage spécifiques pour guider ma progression et tirer le meilleur parti de cette opportunité. Ces objectifs incluaient l'amélioration de l'expérience utilisateur, le renforcement de ma pensée critique et créative, ainsi que l'approfondissement de ma compréhension des services connectés aux véhicules. Voici comment chacun de ces objectifs a façonné mon expérience.

    Objectif personnel d'apprentissage
    Mon principal objectif était d'améliorer l'expérience utilisateur (UX) et l'expérience client (CX) en veillant à ce que les services connectés aux véhicules de Nissan soient complets et conviviaux. Pour y parvenir, j'ai suivi une formation spécialisée sur les services connectés aux véhicules, apprenant toute la gamme des fonctionnalités et services disponibles pour les clients Nissan. J'ai participé à des sessions de retour d'expérience client pour mieux comprendre les besoins des utilisateurs et j'ai collaboré avec l'équipe technique pour simplifier l'interface utilisateur. Le succès de cet objectif a été mesuré par des améliorations de la satisfaction client, une réduction des plaintes et une augmentation de l'utilisation des services connectés. En suivant la fréquence et la nature des demandes des clients, nous avons pu évaluer l'efficacité des améliorations mises en œuvre.

    Pensée critique et créative – Enquête et analyse
    Un autre objectif était de renforcer mes compétences en résolution de problèmes en appliquant une pensée critique et créative à des problèmes complexes de service. Pour cela, j'ai suivi une formation spécialisée axée sur les techniques d'analyse et de résolution de problèmes pour les technologies des véhicules. J'ai collaboré avec des équipes interfonctionnelles pour analyser et élaborer des solutions aux divers défis de service. En examinant les retours des clients et en analysant les données de service, j'ai pu développer des solutions innovantes à des problèmes jusqu'alors non résolus. Le succès dans ce domaine a été mesuré par la mise en œuvre de nouvelles solutions, une efficacité accrue dans la résolution des problèmes et des retours positifs des clients.

    Pensée critique et créative – Profondeur et ampleur de compréhension
    Enfin, j'avais pour objectif d'acquérir une compréhension approfondie des services connectés aux véhicules pour mieux soutenir nos clients. Cet objectif impliquait l'étude des tendances actuelles, la participation à des webinaires industriels et l'expérimentation de nouvelles technologies dans les services aux véhicules. J'ai également mené des analyses comparatives des services des concurrents pour élargir ma perspective sur le domaine. Le succès de cet objectif s'est manifesté par ma capacité à identifier de manière proactive des problèmes potentiels de service, à développer des ressources de partage de connaissances pour l'équipe et à recevoir des retours positifs de mes collègues sur la valeur de mes contributions.

    Une journée dans la vie d'un stagiaire VCS
    En tant que stagiaire VCS chez Nissan Canada, mes responsabilités quotidiennes tournaient autour de l'assurance d'une connectivité fluide des véhicules...`;
  }

  if (
    content.includes(
      "During my 4-month co-op placement at Sonova as a Software Quality Analyst"
    )
  ) {
    return `Pendant mon stage coopératif de 4 mois chez Intellijoint en tant qu'Analyste de la Qualité Logicielle (SQA), 
    j'ai eu l'opportunité de plonger dans le monde de la technologie médicale et des tests logiciels. 
    Cette expérience a non seulement renforcé mes compétences techniques mais m'a aussi donné une nouvelle 
    perspective sur l'impact de la technologie dans le domaine médical.

    Intellijoint Surgical est un leader dans les solutions de navigation chirurgicale de précision. 
    L'entreprise développe et fabrique des dispositifs de navigation miniatures pour la chirurgie orthopédique, 
    aidant les chirurgiens à améliorer la précision et la reproductibilité des interventions.
    
    En tant que SQA, mon rôle principal était d'assurer la qualité et la fiabilité des logiciels utilisés 
    dans les dispositifs médicaux. Cela impliquait la conception et l'exécution de tests rigoureux, 
    la documentation détaillée des processus et la collaboration étroite avec les équipes de développement 
    pour résoudre les problèmes identifiés.

    L'un des aspects les plus enrichissants de cette expérience a été de travailler dans un environnement 
    où la précision et la fiabilité sont absolument cruciales. Dans le domaine médical, la moindre erreur 
    peut avoir des conséquences significatives, ce qui rend le rôle de l'assurance qualité particulièrement important.

    Cette expérience m'a également permis de développer une compréhension approfondie des normes et 
    réglementations spécifiques aux dispositifs médicaux, un aspect essentiel du développement de 
    logiciels dans ce secteur.`;
  }

  return content;
};

const BlogPostCard: React.FC<{ post: BlogPost; onClick: () => void }> = ({
  post,
  onClick,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white/10 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 w-full"
    onClick={onClick}
  >
    {post.logo ? (
      <div className="h-48 flex items-center justify-center bg-white p-4">
        <img
          src={post.logo}
          alt={`${post.title} logo`}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    ) : (
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
    )}
    <div className="p-6">
      <h3 className="text-xl font-semibold text-[#7CDEBC] mb-2 font-sans">
        {post.title}
      </h3>
      <p className="text-white/80 font-sans mb-4">{post.excerpt}</p>
      <p className="text-white/60 font-sans text-sm">{post.date}</p>
    </div>
  </motion.div>
);

const BlogPostModal: React.FC<{ post: BlogPost; onClose: () => void }> = ({
  post,
  onClose,
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="bg-[#2D3A35] rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-bold text-[#7CDEBC]">{post.title}</h2>
        <button
          onClick={onClose}
          className="text-white/60 hover:text-white"
          aria-label="Close"
        >
          <X size={24} />
        </button>
      </div>
      <p className="text-white/60 mb-4">{post.date}</p>
      {post.logo ? (
        <div className="h-64 flex items-center justify-center bg-white rounded-lg mb-6">
          <img
            src={post.logo}
            alt={`${post.title} logo`}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ) : (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}
      <div className="text-white/80 space-y-4">
        {post.content.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

const BlogSection: React.FC<{ language: "en" | "fr" }> = ({ language }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const t = translations[language];

  // Update the blog posts with translations
  const getLocalizedBlogPosts = () => {
    if (language === "en") return blogPosts;

    return blogPosts.map((post) => {
      let translatedPost = { ...post };

      // Map the post ID to the corresponding translation key
      const postKeys: { [key: string]: keyof typeof t.blogs.posts } = {
        "1": "firstCoop",
        "2": "sonova",
        "3": "intellijoint",
        "4": "nissan",
      };

      const translationKey = postKeys[post.id];
      if (translationKey) {
        translatedPost.title = t.blogs.posts[translationKey].title;
        translatedPost.excerpt = t.blogs.posts[translationKey].excerpt;
      }

      translatedPost.content = translateContent(post.content);

      return translatedPost;
    });
  };

  return (
    <section id="blog" className="py-20 px-4 w-full max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[#7CDEBC] text-4xl font-bold mb-12 text-center font-sans"
      >
        {t.blogs.title}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {getLocalizedBlogPosts().map((post) => (
          <BlogPostCard
            key={post.id}
            post={post}
            onClick={() => setSelectedPost(post)}
          />
        ))}
      </div>
      <AnimatePresence>
        {selectedPost && (
          <BlogPostModal
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default BlogSection;
