import React from 'react';
import "./style.css";
const Gallery = (props) => {
    return (
        <div className="container-fluid">
            <h1>
                <u>Gallery</u>
            </h1>
            <h3>Shadow</h3>
            <div className="row py-5">
                <div className="col-sm-6">
                    <div className="module">
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="module darken">
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="color red">
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="color blue">
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Gallery;