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
      name: "Tailwind",
      percent: "80%",
      image: require("./Images/tailwind.webp"),
    },
    {
      name: "Javascript",
      percent: "75%",
      image: require("./Images/javascript.webp"),
    },
    {
      name: "TypeScript",
      percent: "70%",
      image: require("./Images/typescript.png"),
    },
    { name: "React", percent: "70%", image: require("./Images/react.webp") },
    { name: "Redux", percent: "85%", image: require("./Images/redux.png") },
    {
      name: "Firebase",
      percent: "70%",
      image: require("./Images/firebase.png"),
    },
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
        "I had to select an answer for each question to progress to the next, with the flexibility to revise my choices at any time. After completing all 10 questions, my score was presented out of 10, with correct answers marked in green and  incorrect ones in red. Post-quiz, I could initiate a new game by clicking the ”Play Another Game” button, facilitating continuous engagement.",
      techStack: ["HTML", "CSS", "Reactjs"],
      website: "https://quizappbyshreya.netlify.app/",
      gitHub: "https://github.com/shreyasaha-dev/quiz-app",
    },
    {
      projectName: "Weather App",
      image: require("./Images/weather-app.png"),
      description:
        " I experienced using the app’s search feature, where I could enter the name of a city or country and initiate the search by clicking the ”Search” button. The app promptly displayed the current weather of the requested location, leveraging data retrieved via Axios from   the OpenWeatherMap API. This project was instrumental in teaching me how to make API calls using Axios, enhancing my technical skills in handling real data integration.",
      techStack: ["HTML", "CSS", "Reactjs"],
      website: "https://weatherappbyshreya.netlify.app/",
      gitHub: "https://github.com/shreyasaha-dev/weather-app",
    },
    {
      projectName: "Shopping App",
      image: require("./Images/shopping-app.png"),
      description:
        "Through the project, I gained hands-on experience with the Context API, which was used for managing state throughout the application. This allowed me to efficiently handle state across various components without prop drilling. I learned to implement functionality that lets users view products, search for specific items, and interact with these products by adding them to a wishlist or directly to their shopping cart from the product details page. I developed the cart feature where users can adjust the quantity of the items, with the total price updating dynamically. If the total price exceeded 50 rupees, delivery charges were automatically waived, introducing me to more complex state logic. The incorporation of a contact form taught me to use Formik alongside Yup for robust form management and validation, enhancing my skills in building reliable and user-friendly forms.",
      techStack: ["HTML", "CSS", "Reactjs", "Context API"],
      website: "https://shoppingappbyshreya.netlify.app/",
      gitHub: "https://github.com/shreyasaha-dev/shopping-app",
    },
    {
      projectName: "Admin Panel",
      image: require("./Images/table-app.png"),
      description:
        "Developed a data table feature allowing users to add patient names, doctor names, visit dates, and issues, with entries displayed in a table format. Implemented Redux and Redux Persist for efficient state management and data persistence. Enabled users to edit and delete specific data entries directly from the table interface. Integrated a search bar functionality allowing users to search for patient names, enhancing usability and efficiency. Implemented pagination for better organization and navigation of large datasets, ensuring smooth user experience.",
      techStack: ["HTML", "CSS", "Reactjs", "Redux"],
      website: "https://tablebyshreyasaha.netlify.app/",
      gitHub: "https://github.com/shreyasaha-dev/table-list",
    },
  ],
};
export default data;
