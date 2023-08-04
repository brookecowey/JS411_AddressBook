// import './Users.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Users(props) {
  console.log(props)

  // const [toggled, setToggleState] = useState(false);
  const [beenClick, setBeenClickedState] = useState(false);

  // const details = beenClick ? 'Hide Details' : 'Show Details'

  const onClickHandler = () => {
    // setToggleState(!toggled);
    setBeenClickedState(!beenClick);
  };
  return (
    <div className="Users">
        {props.people.map((user,i) => {
        return <div key = {i}>
        <img src ={user.picture.medium} />
        <h3>{user.name.first}</h3>
        <button onClick={onClickHandler}>{beenClick ? 'Hide Details' : 'Show Details'
}</button>
        {
        beenClick && 
        <div>
        <p>{user.email}</p>
        <p>{user.email.username}</p>
        <p>{user.location.state}</p>
        <p>{user.dob.age}</p>
        </div>
        }
       </div>
      })}
    
    
    </div>
  );
}

export default Users;