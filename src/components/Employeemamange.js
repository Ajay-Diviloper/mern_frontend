import React, { useEffect, useState } from 'react'
import Employeetable from './Employeetable'
import { Getallemployee,deleteempapi } from '../Api.js'
import Addemployee from './Addemployee.js'
import { ToastContainer } from 'react-toastify'
import { notify } from '../utils'; // Adjust the path based on your project structure


const Employeemamange = () => {
  const [updateempobj, setupdateempobj] = useState(null)
  const [showmodel2, setshowmodel] = useState(false)
  const [employeedata, setemployee] = useState({
    "Employees": [],
    "pagination": {
      "totalemployee": 0,
      "currentpage": 1,
      "totalpages": 1,
      "pagesize": 5
    }
  });
  
    const Fetchemployees = async(search='', page=1, limit=5)=>{
            try{
                    const{ data} = await Getallemployee(search, page, limit);
                    console.log(data)
                    setemployee(data)
            }catch{

            }
    }

    useEffect(()=>{
        Fetchemployees()
    },[])

    const handleaddemployee = ()=>{
      setshowmodel(true)
    

    }

    const handleupdteemp = (empobj) => {
 console.log(empobj)
 setupdateempobj(empobj)
  setshowmodel(true)
    };
    
    const handlEDELETEeemp = async (id) => {
      try {
        const { success, message } = await deleteempapi(id); // Call the delete API with the ID
    
        if (success) {
          notify(message, "success"); // Notify success
          Fetchemployees(); // Refresh the employee list
        } else { 
          notify(message, "error"); // Notify error if deletion fails
        }
      } catch (err) {
        notify("Error deleting employee: " + err.message, "error"); // Handle any errors
      }
    };
    
    
    


      return (
<div className="d-flex justify-content-center">
  <div className="w-100 d-flex justify-content-center">
    <div className="w-75 ">
    
      <h1>Employee Detail</h1>
      <button className='btn btn-primary'
      onClick={()=> handleaddemployee()}
      > 

        
        add</button>
      <input 
            type="text" 
            className="form-control" 
            id="searchEmployee" 
            placeholder="Enter employee name to search" 
          />

<Employeetable
  fetchemp={Fetchemployees}
  employees={employeedata?.Employees || []}
  pagination={employeedata?.pagination || {}}
  handleupdteemp={handleupdteemp}
  handlEDELETEeemp={handlEDELETEeemp}
/>


  <Addemployee updateempobj = {updateempobj} showmodel={ showmodel2} setshowmodel = {setshowmodel} fetchemp ={Fetchemployees}/>
  
    </div>
   
  </div>
  <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
</div>

  )
}

export default Employeemamange