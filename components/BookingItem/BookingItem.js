import React from 'react'
import StatusIcons from "../StatusIcons/StatusIcons";
import NightsAndGuests from "../NightsAndGuests/NightsAndGuests";

class BookingItem extends React.Component{

    constructor(props){
        super(props)
        this.getDate= this.getDate.bind(this)

    }
    getDate(TimeStamp){
        let date = new Date( TimeStamp* 1000);
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    }

    render() {
        const timeStamp = this.props.createdAt
        return(
            <div className="bookingItem-wrapper">

                <StatusIcons></StatusIcons>
                <div className="wrapper">
                    <div className="guest-details">
                        <p className="guest-name">{this.props.GuestName}</p>
                        <p className="booking-date">{this.getDate(timeStamp)}</p>
                    </div>
                    <p className="home-details">3 Bedrooms Condo in Bahi</p>
                    <span className="arrival-date">29 May 2019,</span>
                    <NightsAndGuests />
                    <p className="paid-amount">{`${this.props.salary} $`}</p>

                </div>




                <style>{`
                 .bookingItem-wrapper{
                    border-bottom: 1px solid gray;
                    padding:20px;
                    display : flex;
                 }
                 .wrapper{
                    width: 100%;
                    margin-left: 10px;
                    position : relative
                 }
                 .wrapper p{
                  margin-block-start: 0;
                  margin-block-end: 0
                 }
                  .guest-details{
                  display: flex;
                  justify-content: space-between;
                }
                .guest-details p {
                  margin-block-start: 0;
                  margin-block-end: 0

                }
                 .guest-name{
                    color : #838383;
                    font-weight: bold;
                 }
                 .booking-date{
                   color : #838383;
                 }
                 .home-details {
                   margin-block-start: 0;
                   color : #838383

                }
                .arrival-date{
                 color : #d4d4d4
                }
                .paid-amount{
                      width: 50px;
                      height: 20px;
                      border: 1px solid #d4d4d4;
                      background-color: transparent;
                      border-radius: 11px;
                      text-align: center;
                      display: inline-block;
                      position: absolute;
                      right: 2px;
                      color : #d4d4d4

                 
                }
                `
                }
                </style>

            </div>
        )
    }
}
export default BookingItem;
