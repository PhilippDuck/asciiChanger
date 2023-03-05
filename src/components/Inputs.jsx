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
            let ascii = event.target.value;
            let dec = ascii.charCodeAt(0);
            let hex = dec.toString(16);
            setDecValue(dec);
            setHexValue(hex);
            
            setAsciiValue(ascii.slice(-1));
        } catch(error) {
            console.log(error);
        }

    }

  return (
    <div className='flex justify-center'>
        <div className='flex flex-col w-full lg:w-1/2'>
            
            
            <div className='flex flex-col gap-4 text-myPurple p-4 bg-slate-50 m-3 my-5 rounded-2xl shadow-xl'>
                <Input label={"ASCII:"} value={asciiValue}  changeValue={changeAsciiToOthers}/>
                <Input label={"DEZIMAL:"} value={decValue}  changeValue={changeDecToOthers}/>
                <Input label={"HEX:"} value={hexValue}  changeValue={changeHexToOthers}/>
            </div>
        </div>
    </div>

  )
}

export default Inputs