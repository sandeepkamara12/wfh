import { GripVertical, Loader, Pencil, Plus, Trash2 } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';
import CardWrapper from './CardWrapper';
import NoRecordFound from '../../common/NoRecordFound';

const Cards = (props) => {
    return (
        <CardWrapper label={props.label} handleOpen={props.handleOpen}>
            {props.data?.length > 0 ? (
                props.data.map((dt) => {
                    return (
                        <div key={dt?.id} className="dashboard-card-content-item">
                            <div className="dashboard-card-link-grab-wrapper">
                                <GripVertical className="dashboard-card-content-grab" />
                                <Link to="#" className="dashboard-card-content-link">{dt?.name}</Link>
                            </div>
                            <div className="dashboard-card-action-wrapper">
                                <button
                                    type="button"
                                    className="btn icon_btn_small navy-btn"
                                    onClick={() => props.handleDelete(dt?.id, props.label)}
                                    disabled={props.loadingId === dt?.id}
                                >
                                    {props.loadingId === dt?.id ? (<Loader className="loader own-icon" />) : (<Trash2 className="own-icon" />)}
                                </button>
                                <button
                                    type="button"
                                    className="btn icon_btn_small navy-btn"
                                    onClick={() => {
                                        props.setIsEdit(dt);
                                        props.handleOpen(props.label);
                                    }}
                                    disabled={props.loadingId === dt?.id}
                                >
                                    <Pencil className="own-icon" />
                                </button>
                            </div>
                        </div>
                    );
                })
            ) : (
                <NoRecordFound />
            )}
        </CardWrapper>
    )
}

export default Cards