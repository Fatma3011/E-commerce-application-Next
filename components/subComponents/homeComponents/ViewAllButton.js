import React from 'react';
export const ViewAllButton = (props) => {
    const onButtonPress = (e) => {
        e.preventDefault();
        props.onClick(true);
    }
    return(<a href="" onClick={(e)=>{onButtonPress(e)}} className="wid-view-more">View All</a>);
};
