import React from 'react'
import {Link, useSearchParams} from 'react-router'

export default function Students() {

    const [searchParams] = useSearchParams();

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

    console.log(searchParams.get('role'));
    console.log(searchParams.get('user'));
  return (
    <div>
        <h1>Students</h1>
        {students.map((student) => {
            return <p key={student.id}>
                <Link to={`/students/${student.id}`}>
                    {student.name}
                </Link>
            </p>
        })}
    </div>
  )
}
