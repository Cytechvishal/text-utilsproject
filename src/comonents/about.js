import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
    const [mystyle, setMystyle] = useState(
       { color:'black',
        backgroundColor:'white' }
    );
    const [mode, setMode] = useState('Dark Mode')

    const handleMode=()=>{
        if(mystyle.color === 'black'){ 
            setMystyle(

          {  color:'white',
            backgroundColor:'black' }
        )
        setMode('Light Mode')
    }else {
        setMystyle(
            {
                color:'black',
                backgroundColor:'white'
            }
        )
        setMode('Dark Mode')
    }
    
    }
    
  return (
    <div className='container my-4 ' style={mystyle}>
        <h2>About Us</h2>
    <Accordion defaultActiveKey="0"  >
      <Accordion.Item eventKey="0" style={mystyle}>
        <Accordion.Header style={mystyle}>Accordion Item #1</Accordion.Header>
        <Accordion.Body >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={mystyle}>
        <Accordion.Header style={mystyle}> Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2' style={mystyle}>
        <Accordion.Header style={mystyle}> Accordion Item #3</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Button variant='primary' className='my-2' onClick={handleMode}>{mode}</Button>
    </div>
  );
}

export default BasicExample;


