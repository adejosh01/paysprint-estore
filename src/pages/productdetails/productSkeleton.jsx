// ProductSkeleton.jsx

import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './productSkeleton.scss'

export const ProductSkeleton = () => (
    <div className="oneproduct skeleton">
        <div className='imagessection'>
            <div className="themainimage">
                <Skeleton height={400} />
                <p> <Skeleton count={3} /> </p>
            </div>

            
        </div>

        <div className="describingtheimages">
         

            <Skeleton width={200} />
        </div>
    </div>
);

export const ProductSkeleton2 = () => (
    <div className="oneproduct skeleton">
        <div className='imagessection'>
            <div className="themainimage2">
                <div>
                    <Skeleton height={400} width={300} />
                </div>
                <div>
                    <Skeleton height={400} width={300} />
                </div>
                <div>
                    <Skeleton height={400} width={300} />
                </div>
                <div>
                    <Skeleton height={400} width={300} />
                </div>
                
            </div>

            
        </div>

        
    </div>
);


