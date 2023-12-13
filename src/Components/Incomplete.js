import React, { useEffect, useState } from 'react';


import { FaLayerGroup, FaClipboardList, FaRegComments, FaPaperclip, FaCalendarAlt } from "react-icons/fa";

import './Style.css';
import users from '../api.json'




const Incomplete = () => {

    return (


        <>
            <section className="py-3 mt-3">
                <div class="container">
                    <div className="heading-text rounded">

                        <div class="row">
                            <div class="col-10 align-items-center py-2">
                                <div className="color-bg bg-red">
                                    <h4 className='text-01'> Incomplete
                                    </h4>
                                </div>

                            </div>
                            <div class="col-2  align-items-center py-2">
                                <h4 className='counter'>
                                    0
                                </h4>
                            </div>
                        </div>

                        {/* --map-functions -- */}
                        {
                            users.map((user, index) =>
                            (



                                <div class="card-content rounded">
                                    <div className="row">
                                        <div class="col-6 d-flex justify-content-start align-items-center gap-15">
                                            <img src="images/user-1.jpeg" className='user' alt="" />
                                            <h5>
                                                Client Name
                                            </h5>
                                        </div>

                                        <div class="col-6 d-flex justify-content-end align-items-center  gap-15">

                                            <img src="images/user-2.jpg" className='user' alt="" />
                                            <h5>
                                                Sadik Istiak
                                            </h5>
                                        </div>
                                    </div>


                                    <div className="row">

                                        <div class="col-9 d-flex justify-content-start align-items-center  py-3 gap-20">
                                            <FaLayerGroup className='icons' />


                                            <p className='mb-0'>
                                                {user.text}
                                            </p>
                                        </div>

                                        <div class="col-3 d-flex justify-content-end align-items-center  gap-10">

                                            <FaClipboardList className='icons' />
                                            <span>
                                                1/2
                                            </span>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div class="col-4 d-flex align-items-center  gap-5">

                                            <img src="images/user-4.jpeg" className='user' alt="" />
                                            <img src="images/user-5.jpeg" className='user' alt="" />

                                        </div>

                                        <div class="col-2 d-flex  align-items-center  gap-5">
                                            <span className='round'>
                                                {user.seen}
                                            </span>
                                        </div>

                                        <div class="col-2 d-flex  align-items-center  gap-1">
                                            <FaRegComments className='icons' />
                                            <span>
                                                {user.comment}
                                            </span>
                                        </div>

                                        <div class="col-2 d-flex  align-items-center  gap-1">
                                            <FaPaperclip className='icons' />
                                            <span>
                                                {user.share}
                                            </span>
                                        </div>



                                        <div class="col-2 d-flex  align-items-center  gap-1">
                                            <FaCalendarAlt className='icons' />
                                            <span className='date mb-0'>
                                                {new Date().toUTCString().slice(5, 16)};

                                            </span>

                                        </div>



                                    </div>



                                </div>








                            )
                            )
                        }

                    </div>



                </div>

            </section >



        </>
    )
}

export default Incomplete