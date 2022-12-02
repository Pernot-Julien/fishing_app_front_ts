import { useState } from 'react';
import './loginForm.css'
const LoginForm = () => {
  const [connexion, setConnexion] = useState({
    email: "",
    password:""
  })
  const handleChange = (e) => {
    setConnexion(() => ({
      ...connexion,
      [e.target.name] : e.target.value
    }))
  }
  const handleConnexion = (e) => {
    e.preventDefault();
    console.log(connexion)
    setConnexion(() => ({
      email:"",
      password: ""
    }))
  }
  return(
    <div className="min-h-screen min-w-full bg-[#083C6E] flex ">
      <div className="flex flex-col  border-2 border-white-200 m-auto rounded-lg items-center p-6 text-[#083C6E] bg-[#96C6F3] font-[1000]">
      <h1 className="uppercase underline underline-offset-4">Connectez-vous</h1>
      <form className=" flex flex-col" onSubmit={handleConnexion}>
        <label htmlFor="email">Votre email</label>
        <input type="email" name="email" id="email" onChange={handleChange}  />
        <label htmlFor="password">Votre mot de passe</label>
        <input type="password" name="password" id="password"  onChange={handleChange} />
        <button className="border-2 border-white-200 mt-6 rounded-lg bg-white" type="submit">Connexion</button>
        <button className="border-2 border-white-200 mt-2  rounded-lg bg-white">Annuler</button>
      </form>
  
      </div>
    </div>
    
  )
}

export default LoginForm