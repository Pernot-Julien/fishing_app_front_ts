import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react";

interface User {
  email: string;
  username: string;
  password: string
}
const adminUserForm: FunctionComponent = () => {
  const [user, setUser] = useState([]);
  const [trigger, setTrigger] = useState(false);

  const handleSubmitUser=(e: {target} ) => {
    e.preventDefault();
    const form = e.target;
    const element = form.elements;
    const username = element.username.value;
    const email = element.email.value;
    const password = element.password.value; 
    console.log(element,'element')
    const data : User = {
      username,
      email,
      password
    }
    axios.post('http://localhost:3000/user', data)
    .then((r) => {
      setTrigger(!trigger);
      form.reset()
    })
    .catch((e) => console.log(e))
  }
  const handleDeleteUser = (id) => {
    axios.delete(`http://localhost:3000/user/${id}`)
    .then((r) => setTrigger(!trigger))
    .catch((e) => console.log(e))

  }
  useEffect(() => {
    axios.get('http://localhost:3000/user')
    .then((r) => setUser(r.data) )
    .catch((e) => console.log(e))
  },[trigger])
  return(
    <>
    <h1 className="text-3xl font-bold underline">Users</h1>
    <form className="border-2 border-sky-500 p-3" onSubmit={handleSubmitUser}>
      <label htmlFor="email" className="ml-2">Email</label>
      <input className="border-2 border-sky-500 ml-2" type="email" id="email" />
      <label htmlFor="username" className="ml-2">Username</label>
      <input className="border-2 border-sky-500 ml-2" type="text" id="username" />
      <label htmlFor="password" className="ml-2">Password</label>
      <input className="border-2 border-sky-500 ml-2" type="text" id="password" />
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
            user.map((item) =>
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