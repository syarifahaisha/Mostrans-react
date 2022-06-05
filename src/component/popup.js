import React from 'react'

function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='cls-bttn' onClick={() => props.triggerHandler(false)}>close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup