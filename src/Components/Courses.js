import React from 'react'
import "./Courses.css"

function Courses() {
    return (
        <div className='courses-div'>
            <div className="title">
                <h2>Purchased courses</h2>
            </div>

            <div className="card-div">
                <div className="card">
                    <div className="card-header">
                        <div className="card-title">
                            <h3>UX/UI Design for Beginners</h3>
                        </div>
                        <div className="card-tag">
                            <p>COMPLETE</p>
                        </div>
                    </div>
                    <div className="card-details">
                        <p>Basics of web development</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses