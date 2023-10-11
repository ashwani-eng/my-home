import React from 'react'
import { Link } from 'react-router-dom'

function Viewidea() {
  return (
    <div className='px-5 py-3'>
      {/* <div className='d-flex justify-content-center mt-2'>
        <h3>Participants List</h3>
      </div> */}
      {/* <Link to="/create" className='btn btn-success'>Submit New Idea</Link> */}
      <div>
      <select class="form-select" aria-label="Default select example">
              <option selected>Status</option>
              <option value="1">Approved</option>
              <option value="2">Rejected</option>
      </select>
      </div>
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>Idea Name</th>
              <th>Action</th>
            </tr>
          </thead>
        
        </table>
      </div>
    </div>
  )
}

export default Viewidea
