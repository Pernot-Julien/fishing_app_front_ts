import axios from "axios";
import { FormEvent, FunctionComponent, useEffect, useState } from "react";


const adminUserForm: FunctionComponent = () => {

/* interface userInterface {
  username: string,
  email: string,
  password: string,
} */

  //?user's state
  const [user, setUser] = useState({
    username:"",
    email:"",
    password:"",
    userGetList:[],
  });
 //? send POST and GET requests when the trigger change
  const [trigger, setTrigger] = useState(false);

  const handleChangeDynamic = (e: React.FormEvent<HTMLInputElement>) => {
    setUser(user => ({
      ...user,
      [e.target.name] : e.target.value
    }))
  };

  const handleSubmitUser=(e: FormEvent) => {
    e.preventDefault();
  
    const data = {
     email: user.email,
     username: user.username,
     password: user.password
    } 
    axios.post('http://localhost:3000/user', data)
    .then((r) => {
      setTrigger(!trigger);
    })
    .catch((e) => console.log(e))
  }
  const handleDeleteUser = (id: number) => {
    axios.delete(`http://localhost:3000/user/${id}`)
    .then((r) => setTrigger(!trigger))
    .catch((e) => console.log(e))

  }
  useEffect(() => {
    axios.get('http://localhost:3000/user')
    .then((r) => setUser(user =>( 
    {
      ...user,
      userGetList : r.data,
    }
  )
    ))
    .catch((e) => console.log(e))
  },[trigger])

  return(
    <>
    <h1 className="text-3xl font-bold underline">Users</h1>
    <form className="border-2 border-sky-500 p-3" onSubmit={handleSubmitUser}>
      <label htmlFor="email" className="ml-2">Email</label>
      <input className="border-2 border-sky-500 ml-2" type="email" id="email" value={user.email} onChange={handleChangeDynamic} name="email" />
      <label htmlFor="username" className="ml-2">Username</label>
      <input className="border-2 border-sky-500 ml-2" type="text" id="username" value={user.username} onChange={handleChangeDynamic} name="username" />
      <label htmlFor="password" className="ml-2">Password</label>
      <input className="border-2 border-sky-500 ml-2" type="text" id="password" value={user.password} onChange={handleChangeDynamic} name="password" /> 
      <button className="border-2 border-sky-500 ml-2" type="submit">Envoyer</button>
    </form>
      <table className="table-auto mt-6 ml-6">
        <thead className="border-2 border-green-600">
          <tr>
            <th className="border-2 border-green-600">email</th>
            <th className="border-2 border-green-600">username</th>
            <th className="border-2 border-green-600">password</th>
          </tr>
        </thead>
        <tbody>
           { 
             user.userGetList.map((item) =>
              <tr key={item.ID}>
                <td className="border-2 border-green-600 p-6">{item.email}</td>
                <td className="border-2 border-green-600 p-6">{item.username}</td>
                <td className="border-2 border-green-600 p-6">{item.password}</td>
                <td className="border-2 border-green-600 p-6"><button onClick={()=> handleDeleteUser(item.ID)}>X</button></td>
              </tr>
            )
          } 
        </tbody>
      </table>
    </>
    
  )
}
export default adminUserForm