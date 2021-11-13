import React from 'react'
import Button from 'react-bootstrap/Button'

function MyButton(props) {
    return (
        <div className="mb-2 ">
    <Button variant="primary" size="lg" className="pt-1 py-1 rounded-pill">
      {props.btnText}
    </Button>{' '}
        </div>
    )
}

export default MyButton
