import React from 'react'
import Input from './Input'
import {useState} from 'react'

function Inputs() {


    const [hexValue, setHexValue] = useState("");
    const [decValue, setDecValue] = useState("");
    const [asciiValue, setAsciiValue] = useState("");



    const changeHexToOthers = (event) => {
        try {
            let dec = parseInt(event.target.value, 16);
            let ascii = String.fromCharCode(dec);
            setDecValue(dec);
            setHexValue(event.target.value);
            setAsciiValue(ascii);

        } catch (error) {
            console.log(error);
        }
    }

    const changeDecToOthers = (event) => {
        try {
            let hex = Number(event.target.value).toString(16);
            let ascii = String.fromCharCode(event.target.value);
            setDecValue(event.target.value);
            setAsciiValue(ascii);
            setHexValue(hex);
        } catch (error) {
            console.log(error);
        }
        
    }

    const changeAsciiToOthers = (event) => {
        try{
            let hex = event.target.value.charCodeAt(0);
            setDecValue(parseInt(hex, 16));
            setHexValue(hex);
            setAsciiValue(event.target.value);
        } catch(error) {
            console.log(error);
        }

    }

  return (
    <div className='flex justify-center'>
        <div className='flex flex-col w-full lg:w-1/2'>
            <div>
                <h1 className='flex justify-center font-mono text-5xl font-bold text-white py-5'>CONVERT3R</h1>
            </div>
            
            <div className='flex flex-col gap-4 text-myPurple p-4 bg-slate-50 m-3 rounded-2xl shadow-xl'>
                <Input label={"ASCII:"} value={asciiValue}  changeValue={changeAsciiToOthers}/>
                <Input label={"DEZIMAL:"} value={decValue}  changeValue={changeDecToOthers}/>
                <Input label={"HEX:"} value={hexValue}  changeValue={changeHexToOthers}/>
            </div>
        </div>
    </div>

  )
}

export default Inputs