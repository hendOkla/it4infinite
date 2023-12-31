import React from 'react';

const PageBanner = ({pageTitle}) => {
    return (
        <>
            <div className="page-title-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <h2>{pageTitle}</h2>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape1">
                    <img src="/images/shape1.png" alt="shape" />
                </div>
            </div>
        </>
    );
}

export default PageBanner;