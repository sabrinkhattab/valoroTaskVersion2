import React from 'react'
import Link from "next/link";
import BookingItem from "../BookingItem/BookingItem";
import SearchSection from "../Search/SearchSection";
import {event} from "next/dist/build/output/log";
import CreateBooking from "../CreateBooking/CreateBooking";

class Sidebar extends React.Component{


    constructor(props){
        super(props)
        // this.searchHandler=this.searchHandler.bind(this);
    }


//     searchHandler(event){
//
//     let currentList = [];
//     let newList = [];
//     //if searchInput isn't empty
//     if(event.target.value !== ""){
//         currentList = this.props.Data;
//         newList = currentList.filter(item =>{
//             const lowerCaseItem = item.CandidateName.toLowerCase();
//             const searchTerm = event.target.value.toLowerCase();
//             return lowerCaseItem.includes(searchTerm);
//         })
//         console.log(newList)
//         this.setState({
//             filteredData : newList
//         })
//
//         //searchInput is empty
//     }else{
//         newList = this.props.Data;
//         this.setState({
//             filteredData : newList
//         })
//     }
//
// }



    render() {
        console.log("hellooo from side bar component" , this.state)
        let sideBarListData = this.props.Data
        const RecuritsList = sideBarListData.map(item => {
            return (
                <Link href={{ pathname: '/candidate', query: item }} as={`/candidate/${item.id}`}>
                    <a>
                    <BookingItem
                        key={item.id}
                        GuestName={item.CandidateName}
                        salary={item.salary}
                        createdAt={item.createdAt}
                        itemId={item.id}
                    />
                    </a>
                </Link>

            )
        })
        return(
            <div className="sidebar-container">
                <SearchSection></SearchSection>

                    {RecuritsList}
                <CreateBooking></CreateBooking>

                <style>{`
                 .sidebar-container{
                     width :350px;
                     height: 100vh;
                     background-color : #ebebe5;
                     overflow:scroll;
                 }
                 a{
                  text-decoration : none
                 }
                
                `
                }

                </style>
            </div>
        )
    }
}
export default Sidebar;
