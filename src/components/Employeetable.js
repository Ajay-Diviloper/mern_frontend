import React from 'react'
import { Link } from 'react-router-dom'
const Employeetable = ({employees, pagination, fetchemp, handleupdteemp,handlEDELETEeemp}) => {

    const onPageChange = ()=>{
        
    }
    const {currentpage, totalpages} = pagination
    const headers = ["name", "email", "salary", "department", 'image',"action"]
    const Tablerow = ({empployee})=>{
        return <tr> 
             <td > <Link to = {`/employee/${empployee._id}`} className="text-decoration-none " > {empployee.name}</Link></td>
            <td> {empployee.email}</td>
            <td> {empployee.salary}</td>
            <td> {empployee.department}</td>
            <td> {empployee.profileimage}</td>
            <td>   <i className="bi bi-pencil me-2" role="button" title="Edit"  onClick={() => handleupdteemp(empployee)} ></i>
            
  <i 
    className="bi bi-trash" 
    role="button" 
    title="Delete" 
    onClick={() => handlEDELETEeemp(empployee._id)} // Ensure you're using the correct variable name (employee)
  ></i>
</td>

        </tr>
    }   

    const pageNumbers = Array.from({ length: totalpages }, (_, index) => index + 1);
  
    const handlenext = ()=>{
      if (currentpage < totalpages){
        handlepagination (currentpage+1);
    }
  }
  const handlepagination = (currentpage)=>{
    fetchemp( '', currentpage, 5);
    }

    const handleprev = ()=>{
      if (currentpage > 1 ){
        handlepagination (currentpage- 1);
    }
    }


    return (
    <>     <table className='table'> 
       <thead> 
        
        <tr> 
            {
                    headers.map((header, i)=>{
                       return  <th key={i}> {header}</th>
                    })
            }
        </tr>
       </thead>
                <tbody>
                  {
                    employees.map((emp)=>{
                           return <Tablerow key={emp._id} empployee = {emp}    />
                    })
                  }
                </tbody>
    </table>
    <div className='d-flex justify-content-between'> 
    <span> page {currentpage} of {totalpages}</span>
    <div>
        {/* Previous Page Button */}
        <button
          className='btn btn-primary me-2'
          onClick={() =>handleprev()}
          disabled={currentpage <= 1}
        >
          Previous
        </button>
        {pageNumbers.map((page)=>(
                  <button>{page}</button>   
        ))}

        {/* Next Page Button */}
        <button
          className='btn btn-primary'
          onClick={() => handlenext()}
          disabled={currentpage >= totalpages}
        >
          Next
        </button>
      </div>
   
    </div>
    </>

  )
}

export default Employeetable