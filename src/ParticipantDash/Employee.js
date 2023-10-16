import React from 'react'
import { Link } from 'react-router-dom'

function Employee() {
  return (
    
    <div className='px-5 py-3'>
      {/* <div className='d-flex justify-content-center mt-2'>
        <h3>Participants List</h3>
      </div> */}
      <Link to="/create" className='btn btn-dark' style={{ backgroundColor: '#240A40' }}>Submit New Idea</Link>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Sr.No.</th>
      <th scope="col">Idea Name</th>
      <th scope="col">Description</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td><button type="button" class="btn btn-secondary">Members</button></td>
      
      <td><button type="button" class="btn btn-success">Read</button><button type="button" class="btn btn-warning mx-1">Update</button><button type="button" class="btn btn-danger">Delete</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td><button type="button" class="btn btn-secondary">Members</button></td>
      <td><button type="button" class="btn btn-success">Read</button><button type="button" class="btn btn-warning mx-1">Update</button><button type="button" class="btn btn-danger">Delete</button></td>
    </tr>
    <tr>
      <th>3</th>
      <td>Larry the Bird</td>
      <td>Hello</td>
      <td><button type="button" class="btn btn-secondary">Members</button></td>
      <td><button type="button" class="btn btn-success">Read</button><button type="button" class="btn btn-warning mx-1">Update</button><button type="button" class="btn btn-danger">Delete</button></td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Employee
