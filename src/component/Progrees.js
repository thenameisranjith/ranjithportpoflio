import React from 'react'
import "./progrees.css";
import ProgressBar from 'react-customizable-progressbar'

const Progrees = ({ progress }) => (
    <div className="progress">

        <div className="row">
            <div className="col-sm-3">
                <ProgressBar
                    radius={80}
                    progress={89}
                    cut={120}
                    rotate={-210}
                    initialAnimation
                    strokeWidth={18}
                    strokeColor="#ffce54"
                    transition=".9s ease"
                    trackStrokeWidth={16}
                    pointerRadius={2}
                    pointerStrokeWidth={14}
                    pointerStrokeColor="#5c78cd"
                    pointerFillColor="#403d3d"
                />
                <div className="indicator">
                <div>95%</div>
            </div>
            </div>
            <div className="col-sm-3">
                <ProgressBar
                    radius={80}
                    progress={95}
                    cut={120}
                    rotate={-210}
                    initialAnimation
                    strokeWidth={18}
                    strokeColor="#41EB1B"
                    transition=".9s ease"
                    trackStrokeWidth={16}
                    pointerRadius={2}
                    pointerStrokeWidth={14}
                    pointerStrokeColor="#5c78cd"
                    pointerFillColor="#403d3d"
                />
            </div>
            <div className="col-sm-3">
                <ProgressBar
                    radius={80}
                    progress={90}
                    cut={120}
                    rotate={-210}
                    initialAnimation
                    strokeWidth={18}
                    strokeColor="#F20808"
                    transition=".9s ease"
                    trackStrokeWidth={16}
                    pointerRadius={2}
                    pointerStrokeWidth={14}
                    pointerStrokeColor="#5c78cd"
                    pointerFillColor="#403d3d"
                />
            </div>
            <div className="col-sm-3">
                <ProgressBar
                    radius={80}
                    progress={89}
                    cut={120}
                    rotate={-210}
                    initialAnimation
                    strokeWidth={18}
                    strokeColor="#ff549d"
                    transition=".9s ease"
                    trackStrokeWidth={16}
                    pointerRadius={2}
                    pointerStrokeWidth={14}
                    pointerStrokeColor="#5c78cd"
                    pointerFillColor="#403d3d"
                />
            </div>


        </div>
    </div>
)

export default Progrees