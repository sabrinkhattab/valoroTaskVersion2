import React , {Component} from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import {connect} from 'react-redux'
import {getData} from "../redux/actions/getData";
import {bindActionCreators}  from "redux";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import Reservation from "../components/Reservation/Reservation";


class  Home extends Component{


    static getInitialProps({store, isServer, pathname, query}) {
//        const action =getData();
  //      store.dispatch(action);


         return {isServer}; // you can pass some custom props to component from here
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
        console.log( 'index',this.props.payloadData.Recruit)
        const {Recruit} = this.props.payloadData
        return(
            <Layout sideBarData={Recruit}>
                <Reservation></Reservation>


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


export default connect(mapStateToProps,mapDispatchToProps)(Home);

