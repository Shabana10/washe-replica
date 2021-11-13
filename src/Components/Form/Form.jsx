import React from 'react'
import MyButton from '../Button/MyButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faBriefcase, faFlag, faCity } from '@fortawesome/free-solid-svg-icons'

function Input(props) {
    return (
        <>
            <input type={props.type} placeholder={props.placeholder} className='input w-100' />
        </>
    )
}
 function Form() {
    return (
        <div className='border myForm p-2'>
            <div className='text-center'>
                <img src="images/one.PNG" alt="" className='img-fluid' />
                <h5><b>FULL DETAIL </b>REQUEST</h5>
                <p className='pb-1 text-muted'>Request An Elite Detail Below!</p>
                <p className='text-muted'>Our representative will contact you today
                    to schedule a custom detailing of your vehicle.</p>
                <hr />
            </div>
            <div className='d-flex border rounded p-3 m-3'>
                <FontAwesomeIcon icon={faUser} className='mt-auto mb-auto me-2 text-secondary' />
                <Input
                    placeholder='First Name'
                    type='text' />
            </div>
            <div className='d-flex border rounded p-3 m-3'>
                <FontAwesomeIcon icon={faUser} className='mt-auto mb-auto me-2 text-secondary' />
                <Input
                    placeholder='Last Name'
                    type='text' />
            </div>
            <div className='d-flex border rounded p-3 m-3'>
                <FontAwesomeIcon icon={faEnvelope} className='mt-auto mb-auto me-2 text-secondary' />
                <Input
                    placeholder='Email'
                    type='email' />
            </div>
            <div className='d-flex border rounded p-3 m-3'>
                <FontAwesomeIcon icon={faPhone} className='mt-auto mb-auto me-2 text-secondary' />
                <Input
                    placeholder='Phone Number'
                    type='text' />
            </div>
            <div className='d-flex border rounded p-3 m-3'>
                <FontAwesomeIcon icon={faBriefcase} className='mt-auto mb-auto me-2 text-secondary' />
                <Input
                    placeholder='Last Name'
                    type='textarea' />
            </div>
            <div className='d-flex border rounded p-3 m-3'>
                <FontAwesomeIcon icon={faFlag} className='mt-auto mb-auto me-2 text-secondary' />
                <Input
                    placeholder='City'
                    type='text' />
            </div>
            <div className='d-flex border rounded p-3 m-3'>
                <FontAwesomeIcon icon={faCity} className='mt-auto mb-auto me-2 text-secondary' />
                <Input
                    placeholder='State'
                    type='text' />
            </div>
            <div className='d-flex justify-content-around'>
                <MyButton btnText='Submit' />
                <MyButton btnText='Reset' />
            </div>
        </div>
    )
}
export default Form


