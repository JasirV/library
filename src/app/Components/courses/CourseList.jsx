"use client";
import React from "react";
import Link from "next/link";
import { FaHeartbeat, FaRobot, FaBook, FaUniversity, FaLeaf, FaLanguage, FaUsers } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";

const CourseList = () => {
  const courses = [
    { name: "B.L.S (Basic Life Support)", icon: <FaHeartbeat />, slug: "bls-basic-life-support" },
    { name: "AI Tools & Robotics", icon: <FaRobot />, slug: "ai-tools-robotics" },
    { name: "CA Foundation", icon: <FaBook />, slug: "ca-foundation" },
    { name: "PSC, UPSC Coaching", icon: <FaUniversity />, slug: "psc-upsc-coaching" },
    { name: "Yoga", icon: <GiMeditation />, slug: "yoga" },
    { name: "Social Forestry", icon: <FaLeaf />, slug: "social-forestry" },
    { name: "Spoken English", icon: <FaLanguage />, slug: "spoken-english" },
    { name: "Others", icon: <FaUsers />, slug: "others" },
  ];

  return (
    <div className="course-container">
      <h1>Available Courses</h1>
      <div className="course-grid">
        {courses.map((course, index) => (
          <Link key={index} href={`/services/${course.slug}`} className="course-card">
            <div className="course-icon">{course.icon}</div>
            <h2>{course.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
