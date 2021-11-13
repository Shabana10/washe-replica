import React from 'react'
import {Form} from 'react-bootstrap'
import MyButton from '../Button/MyButton'

function SecondComp() {
    return (
        <div className="m-5 d-flex justify-content-center">
            <div className='me-auto ms-auto text-center'>
                <p className='mainHead'>REQUEST <b>WASHÉ </b>ON-SITE
                    AT YOUR OFFICE OR BUILDING!</p>
                <p className='pt-3 text-muted'>Take advantage of special pricing, custom packages, and much more with Washe On-Site,
                    request below.</p>
                <div className='d-flex justify-content-center'>
                    <div>
                        <div className='d-flex border rounded p-3 m-3'>
                            <i class="fas fa-user mt-auto mb-auto me-2 text-secondary"></i>
                            <input
                                placeholder='First Name'
                                type='text' className='border-0' />
                        </div>
                        <div className='d-flex border rounded p-3 m-3'>
                            <i class="fas fa-user mt-auto mb-auto me-2 text-secondary"></i>
                            <input
                                placeholder='Last Name'
                                type='text' className='border-0' />
                        </div>
                        <div className='d-flex border rounded p-3 m-3'>
                            <i class="fas fa-envelope mt-auto mb-auto me-2 text-secondary"></i>
                            <input
                                placeholder='Email'
                                type='email' className='border-0' />
                        </div>
                        <div className='d-flex border rounded p-3 m-3'>
                            <i class="fas fa-phone mt-auto mb-auto me-2 text-secondary"></i>
                            <input
                                placeholder='Phone Number'
                                type='text' className='border-0' />
                        </div>
                    </div>
                    {/* column 2  */}
                    <div>
                        <div className='d-flex border rounded p-3 m-3'>
                            <Form.Select aria-label="Default select example" className='border-0'>
                                <option>Property Type</option>
                                <option value="1">Property Type</option>
                                <option value="2">Residential</option>
                                <option value="3">Commercial</option>
                            </Form.Select>
                        </div>
                        <div className='d-flex border rounded p-3 m-3'>
                            <i class="fas fa-flag mt-auto mb-auto me-2 text-secondary"></i>
                            <input
                                placeholder='City'
                                type='text' className='border-0' />
                        </div>
                        <div className='d-flex border rounded p-3 m-3'>
                            <i class="fas fa-city mt-auto mb-auto me-2 text-secondary"></i>
                            <input
                                placeholder='State'
                                type='text' className='border-0' />
                        </div>
                        <div className='d-flex border rounded p-3 m-3'>
                            <i class="fas fa-city mt-auto mb-auto me-2 text-secondary"></i>
                            <input
                                placeholder='State'
                                type='text' className='border-0' />
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <MyButton btnText='Submit' />
                    <MyButton btnText='Reset' />
                </div>

            </div>
        </div>
    )
}

export default SecondComp
