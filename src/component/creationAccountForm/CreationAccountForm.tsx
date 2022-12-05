import { useState } from "react"
import userSchema from "../../Validations/ValidateCreateUser"

const CreationAccountForm = ()=> {
  const [createAccount, setCreateAccount] = useState({
    email:"",
    username:"",
    password:"",
    confirmedPassword:""
  })
  const [error, setError] = useState('')
  
  const handleChange = async (e: React.FormEvent<HTMLInputElement>) => {
    const {name, value} = e.target as HTMLInputElement
    setCreateAccount(() => ({
      ...createAccount,
      [name] : value
    }))
    
  }
  const handleCreate =  async (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(createAccount)
    /* if(createAccount.password !== createAccount.confirmedPassword ){
      console.log("T'as faux salope")
      setVerified(false)
    }else{
      setVerified(true)
    } */
    const isValid = await userSchema.validate(createAccount)
    .then((r) => console.log(r))
    .catch((e) => {
      console.log(e.message)
      setError(e.message)
    })
    
    

  }
  return (
    <div className="min-h-screen min-w-full bg-[#083C6E] flex ">
    <div className="flex flex-col  border-2 border-white-200 m-auto rounded-lg items-center p-6 text-[#083C6E] bg-[#96C6F3] font-[1000]">
    <h1 className="uppercase underline underline-offset-4">Creation de votre compte</h1>
    <form className=" flex flex-col" onSubmit={handleCreate} >
      <label htmlFor="email">Votre email</label>
      <input type="email" name="email" id="email" onChange={handleChange} />
      <label htmlFor="username">Votre pseudo</label>
      <input type="text" name="username" id="username" onChange={handleChange} />

      <label htmlFor="password">Votre mot de passe</label>
      <input type="password" name="password" id="password" onChange={handleChange} />

      <label htmlFor="confirmedPassword">Confirmez votre mot de passe</label>
      <input type="password" name="confirmedPassword" id="confirmedPassword" onChange={handleChange} />

      <button className="border-2 border-white-200 mt-6 rounded-lg bg-white" type="submit">Connexion</button>
      <button className="border-2 border-white-200 mt-2  rounded-lg bg-white">Annuler</button>
    </form>
    {
      (error) && <h1>{error}</h1>
    }
    </div>
  </div>
  )
}

export default CreationAccountForm