const base_url = 'http://localhost:8080/';

export const Getallemployee = async (search = '', page = 1, limit = 5) => {
  const BASE_URL = `${base_url}api/employees?search=${search}&page=${page}&limit=${limit}`;
  
  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'  // Proper capitalization for headers
      }
    };
    
    const result = await fetch(BASE_URL, options);
    const data = await result.json();
    console.log(data)
    return data;

  } catch (err) {
    console.error("Error fetching employees:", err);
    return err;
  }
};

export const createempdata = async (empobj) => {
  const BASE_URL = `${base_url}api/employees`;  // Assuming this is the create endpoint

  try {
    const formdata = new FormData();
    for (const key in empobj) {
      formdata.append(key, empobj[key]);
    }

    const options = {
      method: 'POST',
      body: formdata  // No need to set 'Content-Type' header manually for FormData
    };

    const result = await fetch(BASE_URL, options);
    const data = await result.json();
    return data;

  } catch (err) {
    console.error("Error creating employee:", err);
    return err;
  }
};

export const updateempapi = async (empobj, id) => {
  const BASE_URL = `${base_url}api/employees/${id}`;  // Assuming this is the update endpoint

  try {
    const formdata = new FormData();
    for (const key in empobj) {
      formdata.append(key, empobj[key]);
    }

    const options = {
      method: 'PUT',  // Use PUT for updating an entire resource
      body: formdata
    };

    const result = await fetch(BASE_URL, options);
    const data = await result.json();
    return data;

  } catch (err) {
    console.error("Error updating employee:", err);
    return err;
  }
};

export const deleteempapi = async (id) => {
  const BASE_URL = `${base_url}api/employees/${id}`;  // Correctly form the URL with the ID

  try {
    const options = {
      method: 'DELETE',  // Use DELETE for removing a resource
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const result = await fetch(BASE_URL, options);
    const data = await result.json();
    return data;

  } catch (err) {
    console.error("Error deleting employee:", err);
    throw new Error("Error deleting employee");
  }


};

export const updatebyidapi = async (id) => {
  const BASE_URL = `${base_url}api/employees/emp/${id}`;  // Correctly form the URL with the ID

  try {
    const options = {
      method: 'PUT',  // Use DELETE for removing a resource
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const result = await fetch(BASE_URL, options);
    const data = await result.json();
    return data;

  } catch (err) {
    console.error("Error deleting employee:", err);
    throw new Error("Error deleting employee");
  }


};
