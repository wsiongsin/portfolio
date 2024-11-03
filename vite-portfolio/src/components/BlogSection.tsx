"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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
    title: "My Very First Co-op 🫣😬",
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
    logo: "./src/assets/purolator.webp",
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
    logo: "./src/assets/sonova.png",
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
    logo: "./src/assets/intellijoint.png",
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
    logo: "./src/assets/nissan.png",
  },
];

const BlogPostCard: React.FC<{ post: BlogPost; onClick: () => void }> = ({
  post,
  onClick,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white/10 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
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

const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 px-4 w-full max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[#7CDEBC] text-4xl font-bold mb-12 text-center font-sans"
      >
        Life Stories
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
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
