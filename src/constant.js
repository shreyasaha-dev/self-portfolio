const data = {
  landing: {
    fullName: "Shreya Saha",
    avatar: require("./Images/profilepicture.png"),
    linkedIn: "https://www.linkedin.com/in/shreya-saha-0092742a7/",
    gitHub: "https://github.com/shreyasaha-dev",
  },
  introduction: {
    role: "Frontend Developer",
    details:
      "Passionate frontend developer proficient in HTML, CSS, JavaScript, and React, dedicated to crafting engaging and responsive web experiences.",
  },
  about: {
    description:
      "As a frontend developer I'm proficient in HTML, CSS, JavaScript, and React. Skilled in crafting visually appealing and interactive user interfaces. Passionate about staying updated with the latest web development trends and technologies. Committed to writing clean, efficient code and continuously improving skills through self-learning and hands-on projects.",
    phoneNumber: "+917551039148",
    email: "shreyasaha562@gmail.com",
    address: "Malda, West Bengal",
  },
  skill: [
    { name: "HTML", percent: "90%", image: require("./Images/html.png") },
    { name: "CSS", percent: "85%", image: require("./Images/css.png") },
    {
      name: "Javascript",
      percent: "75%",
      image: require("./Images/javascript.webp"),
    },
    { name: "React", percent: "70%", image: require("./Images/react.webp") },
    { name: "Redux", percent: "85%", image: require("./Images/redux.png") },
    { name: "Git", percent: "70%", image: require("./Images/git.png") },
    { name: "GitHub", percent: "70%", image: require("./Images/github.png") },
  ],
  experience: [
    {
      role: "Junior Processing Officer",
      duration: "August, 2022 - August, 2023",
      company: "HDFC Bank",
      details: [
        "As a Junior Processing Officer at HDFC Bank, responsible for efficiently handling various banking transactions, ensuring accuracy and compliance with regulations.",
        "Supporting customers with account inquiries and processing requests.",
        "Collaborating with team members to deliver exceptional service and contribute to the bank's operational excellence.",
      ],
    },
  ],
  education: [
    {
      institutionName: "Malda Girls' High School",
      duration: "2009 - 2015",
      degree: "Secondary Education",
      details:
        "Studied secondary education under West Bengal Board, achieving an outstanding 87% score. Embraced a diverse curriculum, fostering holistic development and academic excellence, laying a strong foundation for future endeavors.",
    },
    {
      institutionName: "Malda Girls' High School",
      duration: "2015 - 2017",
      degree: "Higher Secondary Education",
      details:
        "Completed Higher Secondary Education in Science stream under West Bengal Board, achieving 79%. Built a strong academic foundation in science subjects during this period.",
    },
    {
      institutionName: "Malda College",
      duration: "2017 - 2020",
      degree: "Bachelor's of Computer Application",
      details:
        "Completed Bachelor of Computer Applications (BCA) from Malda College, Gour Banga University, attaining a respectable 68.5%. Acquired comprehensive understanding of computer applications, enhancing skills in programming, databases, and software development.",
    },
  ],
  project: [
    {
      projectName: "Quiz App",
      image: require("./Images/quiz-app.png"),
      description:
        "It has limited of questions and for each correct answer user will get a score.",
      techStack: ["HTML", "CSS", "Reactjs"],
      website: "https://quizappbyshreya.netlify.app/",
      gitHub: "https://github.com/shreyasaha-dev/quiz-app",
    },
    {
      projectName: "Weather App",
      image: require("./Images/weather-app.png"),
      description:
        "A live weather website for finding real time weather information. I have implemented this feature by using open weather API.",
      techStack: ["HTML", "CSS", "Reactjs"],
      website: "https://weatherappbyshreya.netlify.app/",
      gitHub: "https://github.com/shreyasaha-dev/weather-app",
    },
    {
      projectName: "Shopping App",
      image: require("./Images/shopping-app.png"),
      description:
        "It is an online store where an user can browse winter clothes, add items to the cart and wishlist any specific items. The whole app state is managed by usecontext .",
      techStack: ["HTML", "CSS", "Reactjs", "Context API"],
      website: "https://shoppingappbyshreya.netlify.app/",
      gitHub: "https://github.com/shreyasaha-dev/shopping-app",
    },
  ],
};
export default data;
