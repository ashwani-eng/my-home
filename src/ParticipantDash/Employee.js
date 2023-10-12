import React from 'react'
import { Link } from 'react-router-dom'

function Employee() {
  return (
    
    <div className='px-5 py-3'>
      {/* <div className='d-flex justify-content-center mt-2'>
        <h3>Participants List</h3>
      </div> */}
      <Link to="/create" className='btn btn-success'>Submit New Idea</Link>
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>Idea Name</th>
              <th>Email</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
        
        </table>
      </div>
    </div>
  )
}

export default Employee
