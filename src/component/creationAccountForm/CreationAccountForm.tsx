import { useState } from "react"
import userSchema from "../../Validations/ValidateCreateUser"
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from "react-hook-form";

const CreationAccountForm = ()=> {
 /*  const [createAccount, setCreateAccount] = useState({
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
    if(createAccount.password !== createAccount.confirmedPassword ){
      console.log("T'as faux salope")
      setVerified(false)
    }else{
      setVerified(true)
    }
    const isValid = await userSchema.isValid(createAccount)
    .then((r) => console.log(r))
    .catch((e) => {
      console.log(e.message)
      setError(e.message)
    })
    console.log(e.target)
    if(!e.target[0].value){
      console.log(e.target[0].name)
        return (
          <h1>{e.target[0].name}</h1>
        )
      
    }else{
      console.log("couille")
    }
    

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
      
    }
    </div>
  </div>
  ) */
const {register, handleSubmit, formState: { errors}} = useForm({
  resolver: yupResolver(userSchema)
});
console.log(register,'register')
const handleCreate = data => 
 console.log(data,'data')

return(
  <div className="min-h-screen min-w-full bg-[#083C6E] flex ">
    <div className="flex flex-col  border-2 border-white-200 m-auto rounded-lg items-center p-6 text-[#083C6E] bg-[#96C6F3] font-[1000]">
    <h1 className="uppercase underline underline-offset-4">Creation de votre compte</h1>
  <form className=" flex flex-col" onSubmit={handleSubmit(handleCreate)}>
      <label htmlFor="email">Votre email</label>
      <input type="email" id="email" {...register("email", {required: true}) }  />
      {errors.email && <p>Ce champ doit etre rempli</p>}

      <label htmlFor="username">Votre pseudo</label>
      <input type="text" id="username" {...register("username", {required: true}) }  />
      {errors.username && <p>This field is required</p>}

      <label htmlFor="password">Votre mot de passe</label>
      <input type="password"  id="password" {...register("password", {required: true} )}  />
      {errors.password && <p>This field is required</p>}

      <label htmlFor="confirmedPassword">Confirmez votre mot de passe</label>
      <input type="password"  id="confirmedPassword" {...register("confirmedPassword", {required: true}) }  />
      {errors.confirmedPassword && <p>Passwords do not match</p>}

      <button className="border-2 border-white-200 mt-6 rounded-lg bg-white" type="submit">Connexion</button>
      <button className="border-2 border-white-200 mt-2  rounded-lg bg-white">Annuler</button>

  </form>
  </div>
  </div>
)
}

export default CreationAccountForm