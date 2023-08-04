import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Users from './Components/Users';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api?results=25").then(({data}) => {
      console.log(data.results)
      setUsers(data.results);
    })
  }, [ /* Leave Empty To Execute Once */ ]);
  return (
    <div className="App">
      <Users people = {users}/>
    </div>
  );
}

export default App;