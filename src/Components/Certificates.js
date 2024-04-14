import React from 'react'
import './Certificates.css'
import { MdOutlineFileDownload } from "react-icons/md";


function Certificates() {
  return (
    <div className='ceriticate-div'>
        <div className="card-div">
            <div className="card-title">
                <h3>Certificates</h3>
            </div>
            <div className="card-title-divider">
                <hr />
            </div>
            <div className="card-details">
                <div className="time">
                    <p>2022</p>
                </div>
                <div className="title">
                    <p>UX/UI for Beginners</p>
                </div>
                <div className="donwloads">
                    <button>donwload <MdOutlineFileDownload /> </button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Certificates