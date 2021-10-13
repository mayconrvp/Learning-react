import React, { cloneElement } from 'react'
import FamiliaMembro from './FamiliaMembro'
//import FamiliaMembro from './FamiliaMembro'

export default props =>{
    return (
        <div>
            {React.Children.map(props.children, (el) => {
                return cloneElement(el, props);
            })}
            {/* {React.cloneElement(props.children, {...props}) }
            */}
        </div>

    )
}