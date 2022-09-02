import React from 'react';
import Image from 'next/image'

export const Brands = () => {
    return(
        <div className="brands-area">
            <div className="zigzag-bottom" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="brand-wrapper">
                                <div className="brand-list">
                                    <Image src="/assets/img/brand1.png" alt="" width={250} height={120}/>
                                    <Image src="/assets/img/brand2.png" alt="" width={250} height={120}/>
                                    <Image src="/assets/img/brand3.png" alt="" width={250} height={120}/>
                                    <Image src="/assets/img/brand4.png" alt="" width={250} height={120}/>
                                    <Image src="/assets/img/brand5.png" alt="" width={250} height={120}/>
                                    <Image src="/assets/img/brand6.png" alt="" width={250} height={120}/>
                                    <Image src="/assets/img/brand1.png" alt="" width={250} height={120}/>
                                    <Image src="/assets/img/brand2.png" alt="" width={250} height={120}/>                            
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

   
    );
};
