import React from 'react'

function ButtonPromo (props){
    const AddSeveralItemsButton =
        <button type="button" className="btn btn-so" onClick={props.handleClick}>
            <a style={{'color': 'black','backgroundColor':' white'}} className="btn btn-block btn-social btn-google">
                {props.typePromo}
            </a>
        </button>
    return (
        <div>
            {AddSeveralItemsButton}
        </div>
    );
}
export default ButtonPromo;