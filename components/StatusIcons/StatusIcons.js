import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply } from '@fortawesome/free-solid-svg-icons'


class StatusIcons extends React.Component{
    render() {
        return(
            <div>

                <div className="status"></div>
                <FontAwesomeIcon icon={faReply}  className="Icon-style"/>
                <style>{
                    `
                .status{
                     width: 8px;
                     height: 8px;
                     background-color: green;
                     border-radius: 50%;
                     margin-left: 5px;

                }
                .Icon-style{
                color :#c9c9c9
                }
                
                `
                }</style>
            </div>
        )
    }
}

export default StatusIcons;
