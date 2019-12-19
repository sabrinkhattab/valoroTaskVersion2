import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchSection extends React.Component{

    render() {
        return(
            <div className="Search-wrapper">
                <input placeholder="Search" className="Input-style" type="text" onChange={this.props.handleData}/>
                <FontAwesomeIcon icon={faSearch}  className="icon-style"/>

                <style>{
                    `
                .Input-style{
                   padding: 9px;
                   width:223px;
                   margin-left:27px;
                   margin-top:18px;
                   position : relative;
                   border: none;
                 
                }
                .icon-style{
                    position: absolute;
                    left: 244px;
                    top: 28px;
                    color:#e8e8e8
                }
                    
                    `
                }

                </style>
            </div>

        )
    }
}
export default SearchSection;
