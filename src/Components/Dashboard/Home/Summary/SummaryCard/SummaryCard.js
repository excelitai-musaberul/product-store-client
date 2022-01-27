import React from 'react';
import './SummaryCard.css';

const SummaryCard = (props) => {
    const { id, title, amount, text, backgroundColor, icon } = props.summary;
    return (
        <div className='dashboard-summary-card col-lg-3 col-md-6 col-12 p-0'>
            <div className="dashboard-summary-card-inner m-2 p-4 row" style={{ backgroundColor: backgroundColor }}>
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
    );
};

export default SummaryCard;