import React from 'react';

const Loading = () => {
    return (
        <div className='container d-flex flex-column justify-content-center align-items-center vh-100 '>
            <div className="row">
                <div className="col-md-3">
                    <div className='circle-loader'>لطفا کمی صبر کنید ...</div>
                </div>
            </div>
        </div>
    );
}

export default Loading;