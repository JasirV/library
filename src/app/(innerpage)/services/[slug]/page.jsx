import React from "react";
import BreadCumb from "../../../Components/Common/BreadCumb";
import CourseDetails2 from "../../../Components/courses/CourseDetails";
const coursesData = {
  "bls-basic-life-support": {
    title: "B.L.S (Basic Life Support)",
    img: "https://phelpshealth.org/sites/default/files/2018-12/BLS.jpg",
    description: "This course covers essential first aid and emergency response techniques for saving lives.",
    img2:"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F805279159%2F71276329041%2F1%2Foriginal.20240710-171016?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C284%2C824%2C412&s=a50f27f37d22f6e228091c9801043f8f",
    importance: [
      "Essential for healthcare professionals",
      "Helps save lives in emergencies",
      "Globally recognized certification",
    ],
    value: "A strong foundation for careers in healthcare, nursing, and emergency services.",
    sponsor: ["https://upload.wikimedia.org/wikipedia/commons/6/6c/World_Health_Organization_Logo.svg"],
  },
  "ai-tools-robotics": {
    title: "AI Tools & Robotics",
    img: "https://www.technoxian.com/techiela/wp-content/uploads/2021/12/1_V5so8uwg8UYn3zLi2JMlrA-scaled.jpeg",
    description: "Learn the fundamentals of AI, machine learning, and robotics applications.",
    img2:'https://miro.medium.com/v2/resize:fit:1358/1*k4IDvhbuf0rgLkMRml3hcA.jpeg',
    importance: [
      "Future-focused skill set",
      "High demand in IT & manufacturing",
      "Hands-on robotics training",
    ],
    value: "Boosts career opportunities in AI, automation, and innovation sectors.",
    sponsor: ["https://1000logos.net/wp-content/uploads/2017/03/Color-IBM-Logo.jpg"],
  },
  "ca-foundation": {
    title: "CA Foundation",
    img: "https://imageio.forbes.com/specials-images/imageserve/64bd5bcecb26de4747d3e1a4/0x0.jpg?format=jpg&width=1200",
    description: "A complete foundation program for aspiring Chartered Accountants.",
    img2:"https://www.translate.one/wp-content/uploads/elearning-translations.png",
    importance: [
      "Gateway to CA profession",
      "Strong knowledge of finance",
      "Recognized by ICAI",
    ],
    value: "Leads to a prestigious career in accounting, auditing, and finance.",
    sponsor: ["https://upload.wikimedia.org/wikipedia/commons/e/e0/ICAI_Logo.png"],
  },
  "psc-upsc-coaching": {
    title: "PSC, UPSC Coaching",
    img: "https://i0.wp.com/educationpostonline.com/wp-content/uploads/2021/07/UPSC-coaching.jpg?fit=1200%2C800&ssl=1",
    description: "Comprehensive coaching for state (PSC) and central (UPSC) competitive exams with expert mentors.",
    img2:"https://images.bhaskarassets.com/web2images/521/2021/11/07/screenshot20211107-130120chrome_1636270287.jpg",
    importance: [
      "Guidance for civil service aspirants",
      "Structured syllabus with mock tests",
      "Focus on personality development & interviews",
    ],
    value: "Opens opportunities for prestigious government jobs in administration & public services.",
    sponsor: ["https://upload.wikimedia.org/wikipedia/commons/2/2e/Emblem_of_India.svg"],
  },
  "yoga": {
    title: "Yoga",
    img: "https://www.interexchange.org/wp-content/uploads/2024/07/wellness.jpg",
    description: "Learn yoga techniques for a healthy mind, body, and spirit with guided practices.",
    img2:"https://cdn.yogajournal.com/wp-content/uploads/2009/12/yoga-trainer-conducting-a-class-in-gym-picture-id700718932.jpg?resize=1024,576&width=1200",
    importance: [
      "Improves physical and mental well-being",
      "Reduces stress and increases focus",
      "Globally recognized wellness practice",
    ],
    value: "Supports careers in health, wellness coaching, and lifestyle management.",
    sponsor: ["https://upload.wikimedia.org/wikipedia/commons/5/59/Ministry_of_AYUSH_India_Logo.png"],
  },
  "social-forestry": {
    title: "Social Forestry",
    img: "https://sun9-east.userapi.com/sun9-23/s/v1/if2/l0YEgKldgUmcgD8nL1dwPojjgArzjqHUb8wiGwhR4TTn5QX_h9YKKnC7e0LqtONeN9Hgngn4ipimUa19UQJfNB2W.jpg?size=2560x1707&quality=95&type=album",
    description: "Understand sustainable forestry practices for environmental protection and community development.",
    img2:"https://www.fao.org/images/newsroomlibraries/stories-images/6e523a355793371af2fe6fe937efe894.jpg?sfvrsn=369ea11f_10",
    importance: [
      "Promotes environmental conservation",
      "Enhances rural development",
      "Supports climate change mitigation",
    ],
    value: "Great for careers in environmental science, forestry, and community welfare.",
    sponsor: ["https://upload.wikimedia.org/wikipedia/commons/4/41/UNEP_logo.svg"],
  },
  "spoken-english": {
    title: "Spoken English",
    img: "https://www.upwork.com/catalog-images-resized/d9ea6686c3c5f6fb81bedeb780f6b3ea/large",
    description: "Improve your English communication skills and boost your confidence in speaking.",
    img2:"https://uttc.edu.bd/backend_assets/video_thumbnails/1620637734.jpg",
    importance: [
      "Improves career opportunities",
      "Enhances global communication",
      "Essential for interviews and presentations",
    ],
    value: "Helps in professional growth across all industries.",
    sponsor: ["https://upload.wikimedia.org/wikipedia/commons/a/a7/British_Council_logo.svg"],
  },
  "others": {
    title: "Others",
    img2: "https://img.freepik.com/free-photo/top-view-education-elements-arrangement_23-2148721265.jpg",
    description: "Explore various other specialized courses offered by our institution.",
    img:"",
    importance: [
      "Covers multiple disciplines",
      "Flexible learning opportunities",
      "Skill development for diverse careers",
    ],
    value: "Aims to provide wide learning exposure for personal and professional growth.",
    sponsor: ["https://upload.wikimedia.org/wikipedia/commons/4/44/UNESCO_logo.svg"],
  },
};




const CourseDetail = ({ params }) => {
  const course = coursesData[params.slug];

  if (!course) {
    return <h1>Course not found</h1>;
  }

  return (
   <div>
    <BreadCumb
                bgimg={course.img || "https://www.mgpu.ru/wp-content/uploads/2021/08/front-view-pile-of-books-next-to-laptop-scaled.jpg"  }
                Title={course.title}
            ></BreadCumb> 
            <CourseDetails2 course={course}/>
   </div>
  );
};

export default CourseDetail;
