import React from 'react'

import Alert from 'react-bootstrap/Alert';

function AlertComponent (props) {
  return (
   props.alertMassage && <div >

      <Alert key='primary' variant={`${props.alertMassage.variant}`} dismissible>
          {props.alertMassage.massage}
        </Alert>
        
    </div>
  )
}

export default AlertComponent
