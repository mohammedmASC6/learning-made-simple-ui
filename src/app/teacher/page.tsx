"use client";
import React from "react";
import courses from "../../mock/courses.json";
import Link from "next/link";

export default function TeacherDashboard() {
  return (
    <div className="p-4 sm:ml-64">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
          >
            <Link href={`/teacher/${course.courseCode}`}>
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={course.bannerURL}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-black mb-3 ">
                    {course.courseName}
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
