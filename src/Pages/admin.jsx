import React, { useState, useEffect } from 'react';

// import php files
import admin_data from '../php/admin-data.php';

const Admin = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch(admin_data)
        .then(res => res.json())
        .then(data => setData(data));
    }, []);
  
    return (
      <div>
        {data.map(item => (
          <div key={item.row_id}>
            <p>{item.user_email}</p>
            <p>{item.user_name}</p>
            <p>{item.user_message}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Admin;