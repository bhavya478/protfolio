export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
  { name: "Reusme", link: "/bhavyaa.pdf"}
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I am adaptable and committed to excellence.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Blogging Website",
    des: "Check out News Update World, a sleek and responsive blog platform where stories come alive with interaction.",
    img: "/p1.png",
    iconLists: ["/re.svg","/aws.svg","/fb.svg","/mdb.svg"],
    link: "https://newsupdateworld.netlify.app/",
  },
  {
    id: 2,
    title: "Netflix Clone",
    des: "Experience seamless entertainment with our Netflix clone, designed for your ultimate viewing pleasure!",
    img: "/p2.png",
    iconLists: ["/js.svg","/re.svg","/mdb.svg","/tail.svg"],
    link: "https://mern-netflix-clone-6nu1.onrender.com/",
  },
  {
    id: 3,
    title: "Admin Dashboard",
    des: "Boost your business with our sales dashboard,all in one sleek, easy-to-use platform for smarter decision-making!",
    img: "/p3.png",
    iconLists: ["/re.svg","/tail.svg","/fm.svg","/rc.png"],
    link: "https://dashboard455.netlify.app/",
  },
  {
    id: 4,
    title: "Human Behavioral Analysis",
    des: "Built an advanced framework for real-time human behavior and safety assessment using Python, ML, and sensor data, featuring face recognition and drowsiness detection with the Haar cascade algorithm to boost vehicle safety.",
    img: "/p4.jpg",
    iconLists: ["/py.svg","/ml.svg","/ss.svg"],
    link: "https://github.com/bhavya478/human_behaviour",
  },
];

export const testimonials = [
  {
    quote:
      "It was a great experience working with Bhavya. Her enthusiasm, creativity, and strong work ethic truly stood out throughout our collaboration. She consistently delivered high-quality results and was always eager to tackle new challenges. I wholeheartedly recommend Bhavya for any project—she's a valuable asset to any team!",
    name: "Abhishek",
    title: "Software Developer",
  },
  {
    quote:
      "As Bhavya's professor, I have had the pleasure of witnessing her growth and dedication firsthand. She consistently demonstrated a strong understanding of the material, combined with a passion for learning and innovation. Her ability to grasp complex concepts and apply them in creative ways set her apart from her peers. Bhavya is an exceptional student, and I am confident she will excel in all her future endeavors!",
    name: "Dr.Deepa Yogish",
    title: "Professor",
  },
  {
    quote:
      "Working with Bhavya as a teammate was an incredible experience. She brought a positive attitude, great collaboration skills, and a strong work ethic to every task. Her technical expertise and willingness to help the team succeed made her an invaluable part of our project. Bhavya is a fantastic teammate, and I’d be thrilled to work with her again!",
    name: "Karthik K",
    title: "Teammate",
  },
  {
    quote:
      "Mentoring Bhavya was a rewarding experience. Her passion for learning and commitment to excellence were evident from the start. She tackled challenges with enthusiasm, quickly grasping complex concepts and delivering high-quality results. I highly recommend Bhavya for any project—her skills and dedication will make a valuable impact!",
    name: "Sudha Ashok",
    title: "Software Engineer",
  },
  {
    quote:
      "Working with Bhavya was fantastic. Her attention to detail, problem-solving skills, and ability to collaborate effectively made our project run smoothly. She consistently brought fresh ideas and executed them with precision. I highly recommend Bhavya for her dedication and expertise—she's a true professional!",
    name: "Kiran",
    title: "Manager",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Web Developer",
    desc: "Crafted a website from scratch, seamlessly integrating front-end and back-end technologies, while incorporating UI/UX design principles to enhance user engagement and overall experience.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Student Assistant",
    desc: "Developed interactive features for the university website, improving user experience and reducing information search time while enhancing design for better engagement.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    desc: "Developed a cloud-based application focused on performance and security, utilizing JavaScript and UI/UX principles to create an interactive user experience and streamline the registration process for enhanced engagement.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Google UX Design",
    desc: "Earned the Google UX Design Certification, equipping myself with the expertise to create engaging and intuitive user experiences, transforming complex ideas into simple, user-friendly designs that resonate with audiences.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/bhavya478", 
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/bhavya-ashok-k/", 
  },
  {
    id: 3,
    img: "/twit.svg",
    link: "https://x.com/BhavyaAshok",
  },
];
