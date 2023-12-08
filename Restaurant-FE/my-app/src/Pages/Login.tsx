import loginimg from "../Assets/traditional-nasi-lemak-meal-composition.jpg"
import InputField from "../Components/InputField"
import { useState } from "react"
import axios from 'axios'


const Login = () => {
    const client = new FastAPIClient(config);

    const [isRegister, setIsRegister] = useState(false);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const handleRegister = async () => {
        try{
            setIsLoading(true);
            const response = await axios.post("https://resto-hemat-api.ambitiousmoss-bd081c95.australiaeast.azurecontainerapps.io/register", 
              {
                username : username,
                email: email,
                password: password,
                flag : true,
                longitude : longitude,
                latitude : latitude,
                full_name : username

              });
              if (response.status === 201) {
                
                // Perform actions for successful login
                // For example, set tokens or user data in local storage or state
        
                // After successful login, navigate to the desired page
                console.log('succes')
                setIsRegister(true);
              } else {
                // Handle unsuccessful login
                console.log('Login failed');
              }
              setIsLoading(false);
          }catch(error) {
              console.error('Error saat mengambil data:', error);
            };
    }

    const handleLogin = async () => {
        try{
            console.log('try to loading .....')
            setIsLoading(true);
            var formData = new FormData();
            console.log(username)
            formData.append('username', username);
            formData.append('password', password);
            console.log(formData)
            const response = await axios.post("https://resto-hemat-api.ambitiousmoss-bd081c95.australiaeast.azurecontainerapps.io/token", {formData},
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }  
            );
              if (response.status === 201) {
                
                // Perform actions for successful login
                // For example, set tokens or user data in local storage or state
        
                // After successful login, navigate to the desired page
                console.log('succes')
                setIsRegister(true);
              } else {
                // Handle unsuccessful login
                console.log('Login failed');
              }
              setIsLoading(false);
          }catch(error) {
              console.error('Error saat mengambil data:', error);
            };

    }

    const statusStyle_1 = {
        backgroundImage : "linear-gradient(to bottom right, #ffcc00, #ff6699)",
        color : "white"
    }

    return (
        <>
            <div className="w-screen h-screen">
                <div className="flex justify-center items-center w-full h-full" style={{backgroundImage : "linear-gradient(to bottom right, #ffcc00, #ff6699)"}}>
                    <div className="w-2/3 h-4/5 flex bg-white rounded-3xl">
                        <div className="w-1/2 overflow-hidden">
                            <img className="object-cover h-full rounded-l-3xl" src={loginimg}/>
                        </div>
                        {
                            isRegister ? <div className="w-1/2 flex flex-col items-center relative">
                            <div className="w-1/12 flex self-start mt-3 ml-3 bg-white border-4 w-fit rounded-md border-[#ff6699]">
                                <div className="p-2 bg-white" style={isRegister ? statusStyle_1 : {color:"#ff6699"}}>SignIn</div>
                                <div className="p-2 bg-white" style={!isRegister ? statusStyle_1 : {color:"#ff6699"}}>SignUp</div>
                            </div>
                            <h1 className="mb-12 mt-24 text-3xl">SIGN IN</h1>
                            <div className="m-2 w-3/4 h-fit">
                            <InputField ph="   username" funcToCall={setUserName}/>
                        </div>
                        <div className="m-2 w-3/4 h-fit">
                            <InputField ph="   password" funcToCall={setPassword}/>
                        </div>
                            <button onClick={()=>{handleLogin()}} className="h-12 rounded-3xl w-1/3" style={{backgroundImage : "linear-gradient(to top, #ffcc11, #ff6688)"}}>Sign In</button>
                            <div onClick={()=>setIsRegister(!isRegister)} className="absolute bottom-5 text-lg"><a href="#">Create new Account</a></div>
                        </div> : 
                        <div className="w-1/2 flex flex-col items-center relative">
                        <div className="w-1/12 flex self-start mt-3 ml-3 bg-white border-4 w-fit rounded-md border-[#ff6699]">
                            <div className="p-2 bg-white" style={!isRegister ? statusStyle_1 : {color:"#ff6699"}}>SignIn</div>
                            <div className="p-2 bg-white" style={isRegister ? statusStyle_1 : {color:"#ff6699"}}>SignUp</div>
                        </div>
                        <h1 className="mb-6 mt-10 text-3xl">SIGN UP</h1>
                        <div className="m-2 w-3/4 h-fit">
                            <InputField ph="   username" funcToCall={setUserName}/>
                        </div>
                        <div className="m-2 w-3/4 h-fit">
                            <InputField ph="   email" funcToCall={setEmail}/>
                        </div>
                        <div className="m-2 w-3/4 h-fit">
                            <InputField ph="   password" funcToCall={setPassword}/>
                        </div>
                        <div className="w-3/4 flex flex-row justify-between">
                            <div className="w-1/2">
                                <div className="w-11/12 h-fit">
                                    <InputField ph="  longitude" funcToCall={setLongitude}/>
                                </div>
                            </div>
                            <div className="w-1/2 flex justify-end">
                                <div className="w-11/12 h-fit ">
                                    <InputField ph="  latitude" funcToCall={setLatitude}/>
                                </div>
                            </div>
                        </div>
                        <button onClick={()=>{handleRegister()}} className="h-12 rounded-3xl w-1/3" style={{backgroundImage : "linear-gradient(to top, #ffcc11, #ff6688)"}}>Sign In</button>
                        <div onClick={()=>setIsRegister(!isRegister)} className="absolute bottom-5 text-lg"><a href="#">Go Sign In</a></div>
                    </div>
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;