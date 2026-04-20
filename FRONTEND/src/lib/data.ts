import placeholderImg from '../assets/placeholder.png'

export const skillsData = [
  { name: 'JavaScript', category: 'Frontend', level: 90 },
  { name: 'TypeScript', category: 'Frontend', level: 85 },
  { name: 'React', category: 'Frontend', level: 95 },
  { name: 'Next.js', category: 'Frontend', level: 80 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 90 },
  { name: 'Node.js', category: 'Backend', level: 75 },
  { name: 'Express', category: 'Backend', level: 75 },
  { name: 'MongoDB', category: 'Database', level: 80 },
  { name: 'Three.js', category: '3D', level: 60 },
  { name: 'Git / GitHub', category: 'Tools', level: 85 }
]

export const projectsData = [
  {
    title: 'Maa Ke Hath Khana',
    description: 'A comprehensive MERN stack food ordering platform with seamless user experience and secure payment integration.',
    features: ['Complete food ordering system', 'Razorpay payment integration', 'User authentication & authorization', 'Admin dashboard'],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Razorpay', 'JWT', 'Tailwind CSS'],
    liveDemo: 'https://maa-resturant.netlify.app/',
    github: 'https://github.com/yeshgoyal/MAA-KI-RASOI/tree/main',
    featured: true,
    image: placeholderImg,
  },
  {
    title: 'AI Gym Trainer ',
    description: 'A modern web application for booking doctor appointments with intuitive interface and form validation.',
    features: ['Appointment booking', 'Patient management', 'Form validation', 'Real-time availability'],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
    liveDemo: 'https://doctor-appointments.com',
    github: 'https://github.com/yeshgoyal/next-gen-trainer',
    featured: false,
    image: placeholderImg,
  },
  {
    title:'CLASS-ATTENDENCE-CR',
    description:'CR-Attendance System is a full-stack MERN application designed to digitize and streamline classroom attendance management. ',
    features: ['Lecture-wise attendance marking', 'P/A controls'],
    technologies:['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Tailwind CSS'],
    liveDemo:'https://cr-attendence.netlify.app/',
    github:'https://github.com/yeshgoyal/CLASS-ATTENDENCE-CR',
    featured:false,
    image: placeholderImg,
  }
]

export const certificationsData = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Coursera / Meta',
    date: '2023',
    link: '#',
    image: placeholderImg
  },
  {
    title: 'React Advanced Concepts',
    issuer: 'Udemy',
    date: '2023',
    link: '#',
    image: placeholderImg
  }
]

export const achievementsData = [
  {
    title: 'Hackathon Winner',
    description: 'Won first place in the national college hackathon building a GenAI product.',
    date: '2023',
    image: placeholderImg
  },
  {
    title: 'Top 1% on LeetCode',
    description: 'Achieved a global ranking in the top 1% for active problem solvers.',
    date: '2024',
    image: placeholderImg
  }
]

export const qualificationsData = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'University Name',
    duration: '2020 - 2024',
    description: 'Focused on algorithms, web technologies, and AI. Graduated with Honors.'
  },
  {
    degree: 'High School',
    institution: 'High School Name',
    duration: '2018 - 2020',
    description: 'Completed with PCM stream.'
  }
]
