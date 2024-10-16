import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { notify } from '../utils';
import { updatebyidapi } from '../Api';

const Employeedetail = () => {
const usenavigate = useNavigate()
  const{id} = useParams();
  console.log(id)
const[empdetail, setempdetail] = useState({})
  const fetchapibyid = async()=>{
    try{
      const { data} = await updatebyidapi(id);
      console.log(data)
      setempdetail(data)
    
    }
    catch(err){

    }
  }

  useEffect(()=>{
    fetchapibyid()
  }, [id])
  return (


    <div className='container mt-5'>
    <div className='card mb-5'>
      <div className='card-header text-center'> 
        <h2>Employee Details</h2>
      </div>
      <div className='card-body'> 
        <div className='row'> 
          <div className='col-md-3 text-center'> 
            <img  
              src={empdetail.profileimage} 
              alt={empdetail.name}
              className='img-fluid rounded'
            />
          </div>
          <div className='col-md-9'> 
            <h4>{empdetail.name}</h4>
            <p><strong>Email:</strong> {empdetail.email}</p>
            <p><strong>Salary:</strong> ${empdetail.salary}</p>
            <p><strong>Department:</strong> {empdetail.department}</p>
            <button 
              onClick={() => usenavigate('/employee')} 
              className='btn btn-primary mt-3'>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Employeedetail