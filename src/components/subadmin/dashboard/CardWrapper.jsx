import { Plus } from 'lucide-react'
import React from 'react'

const CardWrapper = (props) => {
    return (
        <div className="dashboard-card-wrapper">
            <div className="dashboard-card-header">
                {props.label}
                <div className="btn icon_btn_small navy-btn active">
                    <Plus onClick={() => props.handleOpen(props.label)} className="own-icon" />
                </div>
            </div>
            <div className="dashboard-card-content-area">{props.children}</div>
        </div>
    )
}

export default CardWrapper