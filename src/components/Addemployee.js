import React, { useEffect, useState } from 'react';
import { useActionData } from 'react-router-dom';
import { createempdata, updateempapi } from '../Api';
import { notify } from '../utils';


const Addemployee = ({ showmodel, setshowmodel, fetchemp,updateempobj }) => {
const [employee, setempdata] = useState({
    name :'',
    email : '',
    phone : '',
    department : '',
    salary : '',
    profileimage : null
})
    const closeModal =()=>{
        setshowmodel(false);
        setupdatemode(false);
        
    }

    const [updatemode, setupdatemode] = useState(false)
    useEffect (()=>{
if(updateempobj){
setupdatemode(true)
setempdata(updateempobj)

} else {
  // If adding a new employee, reset the form and update mode
  setupdatemode(false);
  setempdata({
    name: '',
    email: '',
    phone: '',
    department: '',
    salary: '',
    profileimage: null
  });
}
    }, [updateempobj]) 
    const handlechage = (e)=>{
const {name, value} = e.target;
setempdata({...employee,[ name ] : value})
    }
    const handleProImage = (e) => {
        const file = e.target.files[0]; // Access the selected file
        setempdata({ ...employee, profileimage: file }); // Store the file object in state
      };
      const handlesubmit = async (e) => {
        e.preventDefault();
        console.log(employee);
      
        try {
          let response;
      
          // Check if we are in update mode or create mode
          if (updatemode) {
            const { success, message } = await updateempapi(employee, employee._id); // Use updateempapi for updating employee
            response = { success, message };
          } else {
            const { success, message } = await createempdata(employee); // Use createempdata for creating new employee
            response = { success, message };
          }
      
          const { success, message } = response;
          console.log(success, message);
      
          if (success) {
            notify(message, "success");
            setshowmodel(false);
            fetchemp();
          } else {
            notify(message, "error"); // Use "error" instead of "err"
          }
        } catch (err) {
          notify(err.message, "error");
        }
      };
      
      




  return (
    <div
      className={`modal ${showmodel ? 'd-block' : ''}`}
      tabIndex={-1}
      role="dialog"
      style={{
        display: showmodel ? 'block' : 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adding a backdrop effect
      }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5> {updatemode ? 'update employee' : 'add employee'} </h5>
            <button type="button" className="close" onClick={()=>closeModal()} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form   onSubmit={(e)=>handlesubmit(e)}>
              <div className="form-group">
                <label htmlFor="employeeName">Employee Name</label>
                <input type="text" className="form-control" id="employeeName" placeholder="Enter" name = 'name'  onChange={handlechage} value={employee.name}/>
              </div>
              <div className="form-group">
                <label htmlFor="employeeEmail">Email</label>
                <input type="email" className="form-control" id="employeeEmail" placeholder="Enter email" name = 'email' onChange={handlechage} value={employee.email} />
              </div>
              <div className="form-group">
                <label htmlFor="employeeEmail">phone</label>
                <input type="text" className="form-control" id="employeephone" placeholder="Enter number" name = 'phone' onChange={handlechage} value={employee.phone} />
              </div>
              <div className="form-group">
                <label htmlFor="employeeRole">salary</label>
                <input type="text" className="form-control" id="employeeRole" placeholder="Enter role" name = 'salary' onChange={handlechage} value={employee.salary} />
              </div>
              <div className="form-group">
                <label htmlFor="employeeRole">departmet</label>
                <input type="text" className="form-control" id="employeeRole" placeholder="Enter role"  name = 'department' onChange={handlechage} value={employee.department}/>
              </div>
              <div className="form-group">
                <label htmlFor="employeeRole">profle image</label>
                <input type="file" className="form-control" id="employeeRole" placeholder="Enter role" onChange={handleProImage}  name= "profileimage" />
              </div>
              <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
            <button type="submit" className="btn btn-primary"  > {updatemode ? 'upate' : 'save'}</button>
          </div>
            </form>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Addemployee;
