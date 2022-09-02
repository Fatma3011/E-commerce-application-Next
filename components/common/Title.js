import React from 'react';
export const Title = (props) => {
    const {categoryName} = props;
    return(
        <div className="product-big-title-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="product-bit-title text-center">
                            <h2> {categoryName} </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        );
};
