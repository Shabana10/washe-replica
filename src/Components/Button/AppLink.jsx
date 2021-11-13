import React from 'react'
import Button from 'react-bootstrap/Button'

function AppLink(props) {
    return (
        <div>
            <Button variant="dark" size="lg" className="d-flex m-3">
                {props.icon}
                <div>
                    <p className="fs-6">
                        {props.para}
                    </p>
                    <h6>
                        {props.heading}
                    </h6>
                </div>
            </Button>{' '}
        </div>
    )
}

export default AppLink
