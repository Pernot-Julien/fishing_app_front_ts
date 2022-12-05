import * as Yup from 'yup';
const userSchema = Yup.object().shape({
  email: Yup.string().email().required( "L'email est requis"),
  username : Yup.string().required( "L'username est requis"),
  password: Yup.string().required( "L'password est requis"),
  confirmedPassword: Yup.string().oneOf([Yup.ref('password'), null],  "le mot de passe correspond pas")
})

export default userSchema