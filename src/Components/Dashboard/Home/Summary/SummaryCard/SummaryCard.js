import React from 'react';
import './SummaryCard.css';

const SummaryCard = (props) => {
    const { id, title, amount, text, backgroundColor, icon } = props.summary;
    return (
        <div className='dashboard-summary-card col'>
            <div className="dashboard-summary-card-inner card h-100 m-2 p-4" style={{ backgroundColor: backgroundColor }}>
                <div className="row">
                    <div className='col-8 d-flex align-items-center'>
                        <div>
                            <h6>{title}</h6>
                            <small>{text}</small>
                            <h4 className='mt-2'>{amount}</h4>
                        </div>
                    </div>
                    <div className='col-4 icon'>
                        <div>
                            <i className={icon} style={{ color: backgroundColor }}></i>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SummaryCard;