import React, { useState } from 'react';

const initialCourses = [
    { id: 1, name: 'Mathematics', duration: '3 months' },
    { id: 2, name: 'Physics', duration: '4 months' },
    { id: 3, name: 'Chemistry', duration: '2 months' },
    { id: 4, name: 'Computer Science', duration: '5 months' },
];

function CollegeCourse() {
    const [search, setSearch] = useState('');
    const filteredCourses = initialCourses.filter(course =>
        course.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ maxWidth: 500, margin: 'auto', padding: 20 }}>
            <h2>College Courses</h2>
            <input
                type="text"
                placeholder="Search by course name"
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ width: '100%', marginBottom: 16, padding: 8 }}
            />
            <table border="1" width="100%" cellPadding="8">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Course Name</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map(course => (
                            <tr key={course.id}>
                                <td>{course.id}</td>
                                <td>{course.name}</td>
                                <td>{course.duration}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" align="center">No courses found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default CollegeCourse;