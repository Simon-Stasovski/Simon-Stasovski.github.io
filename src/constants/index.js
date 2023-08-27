import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    laurentide,
    jac,
    concordia,
    inventory,
    pvz,
    pokemon,
    tripTracker,
    curry,
    currents,
    bladeRunner,
    embedded,
    csharp,
    java,
    jira,
    python,
    path,
    sql
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about me",
      title: "About Me",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "my projects",
      title: "My Projects",
    },
    {
      id: "contact me",
      title: "Contact Me",
    },

  ];
  const aboutMe = [
    {
      title: 'My Favorite Pastime',
      image: curry,
      details: 'Since I was nine years old, I loved the game of basketball. I used to play in our local park and eventually on my own hoop with friends. I also watch the NBA and my favorite team is the Golden State Warriors. For those who are fimiliar with the NBA, it should not surprise you that Steph Curry is my favorite player.',
    },
    {
      title: 'My Favorite Movie',
      image: bladeRunner,
      details: 'As much as I believe that the original Blade Runner is an exceptional movie, I felt more immersed in the philosophy and world of Blade Runner 2049. The way it handles topics such what it means to be human, what gives us purpose, discrimination, and love is second to none. Denis Villeneuve trully created a masterpiece and it is awesome that he comes from Quebec.',
    },
    {
      title: 'My Favorite Album',
      image: currents,
      details: 'If you told me I could only listen to one album for the rest of my life, I would choose Currents by Tame Impala. It has a great mix of slow and fast pased songs along with a variety of genres such as indie rock, electropop, R&B, and disco to name a few. My favorite song from the album is Let it Happen.',
    },
    {
      title: 'My Current Goal',
      image: embedded,
      details: 'My current goal is to learn more about the hardware side of computers. I look foward to learning about logic gates, embedded systems, FPGAs, and digital electronics. I am looking to accomplish this goal by studying computer engineering, creating relevant projects and participating in extracurricular activities relating to those topics.',
    }
  ]
  const projects = [
    {
      title: "PvZ in JavaScript",
      image: pvz,
      repoLink: "https://github.com/Simon-Stasovski/project-pvz",
      details: '<p className="mt-5 text-justify">Replica of the famous Plants Vs Zombies mobile game in JavaScript. Implements animations, sound-effects, cookies to save game progress, OOP and factory pattern for plants and zombies, states for plants and zombies, tweening and hitbox colision detection. Created along with <a class="contributor" href="https://github.com/jacoblevy2002" target="_blank">Jacob Levy.</a></p>'
    },

    {
      title: "Pokemon Trading Card Website",
      image: pokemon,
      repoLink: "https://github.com/Simon-Stasovski/Web2Project",
      details: '<p "mt-5 text-justify">A website that implements user login, search, sorting, filtering, and transaction functionality using HTML, CSS, JavaScript, Node.js, Docker and MySql. Created along with <a class="contributor" href="https://github.com/amoscoloni" target="_blank">Anna Moscoloni</a> and <a class="contributor" href="https://github.com/kevinlaskai" target="_blank">Kevin-Christopher Laskai</a>.</p>'
    },
    {
      title: "Inventory Tracker in C# and WPF",
      image: inventory,
      repoLink: "https://github.com/Simon-Stasovski/prog_project",
      details: '<p className="mt-5 text-justify">A desktop application that allows the user to track inventory items for their business. It allows you to import and export to .csv files, and has multiple windows for adding, updating and deleting as well as keeping track of items that are low in stock. Created along with <a class="contributor" href="https://github.com/saugunas" target="_blank">Samuel Augunas.</a></p>'
    },
    {
      title: "Trip Tracker Android Application",
      image: tripTracker,
      repoLink: "https://github.com/Simon-Stasovski/Trip-Tracker/tree/main",
      details: '<p className="mt-5 text-justify">This application allows the user to track their trips by type, how much they had before and after on the odometer and the start time of the trip. It also allows you to modify and delete trips as well as havin input validation for certain inputs. It is built in Java and XML. It also implements the repository pattern.</p>'
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Jira",
      icon: jira,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "UiPath",
      icon: path,
    },
  ];
  
  const experiences = [
    {
      title: "Computer Engineering Student",
      company_name: "Concordia University",
      location: "Downtown Montreal",
      icon: concordia,
      type: "Full-time Co-op",
      iconBg: "#E6DEDD",
      date: "Sep 2023 - May 2027",
      points: [
        "In the Co-op program.",
        "Learned digital systems design using logic gates.",
        "Learned Applied ODEs.",
        "Learned proofs in discrete mathematics.",
      ],
    },
    {
      title: "Junior Intelligent Automation Developer Intern",
      company_name: "Laurentide Controls",
      location: "Kirkland",
      type: "Contract full-time & part-time",
      icon: laurentide,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Present",
      points: [
        "Automated repetitive processes using Python, C#, JavaScript and VB in UiPath.",
        "Created and modified Views, Triggers and Procedures using PL/SQL in Oracle to automate and make tasks in our ERP more efficient.",
        "Documented business requirements and data quality issues and documented them in Confluence.",
        "Used Jira and GitHub to manage project tasks and to version control.",
      ],
    },
    {
      title: "IT Technician",
      company_name: "Laurentide Controls",
      location: "Kirkland",
      icon: laurentide,
      Type: "Full-Time",
      iconBg: "#E6DEDD",
      date: "May 2022 - Aug 2022",
      points: [
        "Provided IT support to our employees verbally and written in English and French.",
        "Maintained and added features for our intranet which was made using ASP.NET and SQL.",
        "Kept track of software licenses and hardware equipment to ensure they are always in stock.",
        "Prepared and set up a variety of software and hardware.",
        "Managed and categorized tickets using Lansweeper."
      ],
    },
    {
      title: "Computer Science DEC Student",
      company_name: "John Abbott College",
      location: "Sainte-Anne-de-Bellevue",
      type: "Full-time",
      icon: jac,
      iconBg: "#E6DEDD",
      date: "Aug 2020 - May 2023",
      points: [
        "Learned app development in C#, WPF, SQLite, and SQL from the ground up to an executable.",
        "Learned to debug, unit test, and manage packages in Visual Studio.",
        "Learned to use version control tools such as Git Hub to manage projects using CI/CD principles to create Actions and Releases.",
        "Learned to use Jira to manage scrum teams that use Agile principles (sprints, stand-up meetings, backlog).",
        "Learned web development to create websites in HTML, CSS, JavaScript, and MySQL using APIs and runtime environments such as Rest and Node.Js.",
        "Learned app development for Android using Android Studio to design apps in Java and Kotlin."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const project = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { technologies, experiences, testimonials, projects, aboutMe };
  