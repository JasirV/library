"use client";
import BreadCumb from '../../Components/Common/BreadCumb';
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    course: "",
    number: "",
    age: "",
  });
  const [errors, setErrors] = useState({});

  const courses = [
    "B.L.S (Basic Life Support)",
    "AI-Tool & Robotics",
    "CA Foundation",
    "PSC, UPSC Coaching",
    "Yoga",
    "Social Forestry",
    "Spoken English",
    "Others",
  ];

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.course.trim()) {
      newErrors.course = "Course is required";
    }
    if (!/^[0-9]{10}$/.test(formData.number)) {
      newErrors.number = "Phone number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };

  return (
    <>
        <BreadCumb
                bgimg={"https://www.mgpu.ru/wp-content/uploads/2021/08/front-view-pile-of-books-next-to-laptop-scaled.jpg"  }
                Title="Course Registion"
            ></BreadCumb>
    <div className="registerForm-container">
      <h2 className="registerForm-title">Register Now</h2>
      <form onSubmit={handleSubmit} className="registerForm-form">
        <div className="registerForm-inputGroup">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="registerForm-input"
          />
          {errors.name && <p className="registerForm-error">{errors.name}</p>}
        </div>

        <div className="registerForm-inputGroup">
          <label>Place</label>
          <input
            type="text"
            name="place"
            placeholder="Enter your place"
            value={formData.place}
            onChange={handleChange}
            className="registerForm-input"
          />
          {errors.place && <p className="registerForm-error">{errors.place}</p>}
        </div>

        <div className="registerForm-inputGroup">
          <label>Course</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="registerForm-input"
          >
            <option value="">Select a course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
          {formData.course === "Others" && (
            <input
              type="text"
              name="course"
              placeholder="Enter custom course"
              onChange={handleChange}
              className="registerForm-input"
              />
          )}
          {errors.course && (
              <p className="registerForm-error">{errors.course}</p>
            )}
        </div>

        <div className="registerForm-inputGroup">
          <label>Age</label>
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
            className="registerForm-input"
          />
        </div>

        <div className="registerForm-inputGroup">
          <label>Phone Number</label>
          <input
            type="text"
            name="number"
            placeholder="Enter 10 digit number"
            value={formData.number}
            onChange={handleChange}
            className="registerForm-input"
          />
          {errors.number && (
            <p className="registerForm-error">{errors.number}</p>
          )}
        </div>

        <button type="submit" className="theme-btn">
          Register
        </button>
      </form>
    </div>
            </>
  );
};

export default Page;
