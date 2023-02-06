import React, { useState, useEffect } from 'react';

// remove submission
function delete_submission_js(row_id_js, event) {
  let the_submission = event.currentTarget.closest('.user_submission');
  the_submission.remove();
  fetch('/php/delete_submission.php?submission_id='+row_id_js, {
    method: "GET",
  }) 
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
  })
  .catch(error => {
      console.log(error);
  });
}
const Admin = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
      fetch('/php/admin-data.php')
        .then(res => res.json())
        .then(data => setData(data));
    }, []);

    return (
      <div className='admin_page'>
      {data.map(item => (
        <div key={item.row_id} className='user_submission'>
          <h3 className="username">
            <i className="fa-regular fa-user-bounty-hunter"></i>
            {item.user_name}
          </h3>
          <div className="other_data">
            <div className="data_element">
              <div className="label"><i className="fa-solid fa-envelope"></i> Email: </div>
              <div className="user_input">{item.user_contact_method}</div>
            </div>
            <div className="data_element">
              <div className="label"><i className="fa-regular fa-inbox"></i> Message: </div>
              <div className="user_input">{item.user_message}</div>
            </div>
          </div>
          <div className="submission_id">{item.row_id}</div>
          <div className="delete_submission hovered" onClick={(event) => delete_submission_js(item.row_id , event)}>
            <i className="fa-solid fa-fire"></i>
          </div>
        </div>
      ))}
      </div>
    );
};
  
  export default Admin;