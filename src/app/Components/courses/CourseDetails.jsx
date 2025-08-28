import React from "react";


const CourseDetails2 = ({ course }) => {
  return (
    <div className="course-details">
      {/* Image */}
      <div className="course-image">
        <img src={course.img2 || "https://www.mgpu.ru/wp-content/uploads/2021/08/front-view-pile-of-books-next-to-laptop-scaled.jpg"} alt={course.title} /> 
      </div>

      {/* Title + Description */}
      <div className="course-content">
        <h1>{course.title}</h1>
        <p className="description">{course.description}</p>

        {/* Importance */}
        <h2>Why is this course important?</h2>
        <ul>
          {course.importance.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>

        {/* Value */}
        <h2>Course Value</h2>
        <p className="value">{course.value}</p>

        {/* Sponsors */}
        <h2>Our Sponsors</h2>
        <div className="sponsor-logos">
          {course.sponsor.map((logo, idx) => (
            <img key={idx} src={logo} alt="Sponsor" />
          ))}
        </div>
      </div>
      <a href="/register"  className="theme-btn ">Register now</a>
    </div>
  );
};

export default CourseDetails2;
