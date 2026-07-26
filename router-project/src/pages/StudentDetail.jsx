import React from 'react'
import { useParams } from 'react-router'

export default function StudentDetail() {
  const {id} = useParams();
  return (
    <div>
        <h1>Student Detail</h1>
        <h2>Student id: {id}</h2>
    </div>
  )
}
