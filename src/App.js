import React, {useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';


function App() {
  const [userList, setUserList] = useState([])

  const addUserHandler = (uName, uAge) =>{
    setUserList((previousUserList) => {
      return [...previousUserList,{name:uName, age:uAge}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
