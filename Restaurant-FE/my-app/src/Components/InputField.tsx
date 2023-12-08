import { useState } from "react";


type MyFunctionType = (param1: string) => void;

interface MyComponentProps {
  funcToCall: MyFunctionType;
   // Define the prop with the function type
}

const InputField: React.FC<{ph : string, funcToCall : MyFunctionType}> = ({ph, funcToCall}) => {

    const [value, setValue] = useState('')

    return (
        <>
            <div className="h-16 w-full flex flex-col">
                <input onChange={(event)=>{setValue(event.target.value);funcToCall(event.target.value)}} className="border-2 h-2/3" placeholder={ph}></input>
            </div>
        </>
    )
}

export default InputField;