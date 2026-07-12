import React from "react";

function CourseDetails() {

    const courses = [
        {
            name: "Angular",
            date: "4/5/2021"
        },
        {
            name: "React",
            date: "6/3/2021"
        }
    ];

    return (
        <div>
            <h1>Course Details</h1>

            {
                courses.map((course, index) => (
                    <div key={index}>
                        <h2>{course.name}</h2>
                        <h4>{course.date}</h4>
                    </div>
                ))
            }

        </div>
    );
}

export default CourseDetails;