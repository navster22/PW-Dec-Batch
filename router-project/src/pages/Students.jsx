import React from 'react'
import {Link} from 'react-router'

export default function Students() {

    const students = [
        {
            id: 1,
            name: 'Nav'
        },
         {
            id: 2,
            name: 'Dipti'
        },
         {
            id: 3,
            name: 'Arti'
        },
    ]
  return (
    <div>
        <h1>Students</h1>
        {students.map((student) => {
            <p key={student.id}>
                <Link to={`/students/${student.id}`}>
                    {student.name}
                </Link>
            </p>
        })}
    </div>
  )
}
