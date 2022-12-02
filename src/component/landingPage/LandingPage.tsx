import logo from '../../assets/image/logo.png';

const LandingPage = () => {
    return (
       <body className="bg-[#083c6e] w-[100wh] h-[100vh] pt-[10%] px-[5%]">
        <div className="bg-gradient-to-b from-[#96c6f3] w-[90%] h-[50%] mx-auto rounded-[5%] border-2 ">
            <img  className='w-[250px] mx-auto pt-[7%]' src={logo} alt="logo du site"></img>
            <div className='flex mt-[20%] bg-[#083c6e] w-[80%] mx-auto rounded-[0.7rem] border-[1px]'>
                <button className='text-[#083c6e] bg-white h-[2.5rem] w-[50%] rounded-[0.5rem]  '>
                    <p>S'enregistrer</p>
                </button>
                <button className='text-white bg-[#083c6e] h-[2.5rem]  w-[50%]  rounded-[0.5rem]'>
                    <p>Se connecter</p>
                </button>
            </div>
        </div>

       </body>
    );
}

export default LandingPage