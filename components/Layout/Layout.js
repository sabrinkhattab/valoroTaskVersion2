import React from 'react'
import Sidebar from "../Sidebar/sidebar";

class Layout extends React.Component{
    render() {


        return(
            <div>
                <Sidebar Data={this.props.sideBarData}></Sidebar>
                {this.props.children}
                <style >{`
                 body {
                  margin: 0;
                  background: #f0f0ed;
                  font-family: system-ui;
                 }
                `
                }
                </style>
            </div>
        )
    }
}
export default Layout;
