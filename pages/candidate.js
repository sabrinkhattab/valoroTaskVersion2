import React from 'react'
import {bindActionCreators} from "redux";
import {getData} from "../redux/actions/getData";
import {connect} from 'react-redux'
import Layout from "../components/Layout/Layout";
import { useRouter } from 'next/router';
class about extends React.Component{
    static getInitialProps({store, isServer, pathname, query }) {

                return {isServer ,  query};
    }

    componentDidMount() {
        if(!this.props.payloadData.Requested) {
            this.props.getdata()
            console.log("call")
        }
        else
            console.log("didn't call")
    }
    render() {
        console.log( 'index',this.props)
        const {Recruit} = this.props.payloadData;
        return(
            <Layout sideBarData={Recruit}>
                <div className="singleCandidate-wrapper">
                    <h1>Single candidate page</h1>
                    <h3>{this.props.query.CandidateName}</h3>
                </div>
                <style>{`
                 .singleCandidate-wrapper{
                    background-color: tomato;
                    width : 300px;
                    height:auto;
                    position: absolute;
                    left: 50%;
                    top: 100px;
                    text-align: center;
                 
                 }
                `

                }
                </style>
            </Layout>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getdata : bindActionCreators(getData , dispatch)
    }
};
const mapStateToProps = (state) =>{
    return{
        payloadData:state.Data
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(about);
