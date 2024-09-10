import React, { useState } from 'react'
import { Button, Form} from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function TextForm(props){
    const[text, setText] = useState('')

    const handleUpper=()=>{
        let newText = text.toUpperCase();
        setText(newText)
        
        props.showMassage('Successfully convert into uppercase', 'primary')
    }
    const handleLower=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        console.log("you clicke handleupper")
    }
    const handleClear=()=>{
        let newText = "";
        setText(newText)
        console.log("you clicke handleupper")
    }

    const handleCopy=()=>{
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        .then(()=>{
            toast.success('Copied')
        })
        .catch((error)=>{
            toast.error('failed to copy text')
        })
        
    }

    const handleExtraSpace=()=>{
        setText (text.replace(/\s+/g, ' '))
      
    }

    return(
        <>
        <div className={`container `} style={ {color : props.mode === 'light'?'black':'white' }}>
            <h1>{props.heading}</h1>
                <Form >
                    <Form.Group>
                        <Form.Label>TextArea</Form.Label>
                        <Form.Control className='form-control' as="textarea" rows={6}
                         id='myBox' 
                        value={text}
                         onChange={(e)=> setText(e.target.value)}
                         style={ {color : props.mode === 'light'?'black':'white', backgroundColor: props.mode === 'light'?'white':'#0b0c44' }}
                         ></Form.Control>
                    </Form.Group>
                    <Button className='btn btn-primary mt-2 mx-1' onClick={handleUpper} >Capatilize</Button>
                    <Button className='btn btn-primary mt-2 mx-1' onClick={handleLower} >Smallize</Button>
                    <Button className='btn btn-primary mt-2 mx-1' onClick={handleClear} >Clear</Button>
                    <Button className='btn btn-primary mt-2 mx-1' onClick={handleCopy} >Copy</Button>
                    <Button className='btn btn-primary mt-2 mx-1' onClick={handleExtraSpace} >RemoveExtra Space</Button>
                </Form>
                <ToastContainer />
        </div>
        <div className='container' style={ {color : props.mode === 'light'?'black':'white' }}>
            {/* <h2>Your text summary</h2> */}
            <p>Total Words : {text.split(" ").length} , Characters (Without Space) : {text.replace(/\s+/g, '').length}, Characters (With Space) : {text.length} </p>
            <h2>Summary Preview</h2>
            <p>{text}</p>

        </div>
        
        </>
    )    
};