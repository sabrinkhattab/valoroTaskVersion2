import React from 'react'

class Reservation extends React.Component{
    render() {
        return(
            <div className="Reservation-Wrapper">
                <img src="../../static/reservation.png" />
                <h1 className="reservation">Reservation</h1>
                <p className="select-item"> select any reservation item</p>
                <button className="booking-btn">Create Booking</button><br/>
                <button className="booking-btn">Create Booking with Quote</button>

                <style jsx>{`
                .Reservation-Wrapper{
                    width : 300px;
                    height:auto;
                    position: absolute;
                    left: 50%;
                    top: 100px;
                    text-align: center;
                }
                .reservation{
                 font-size: 43px;
                     font-weight: 100;
                     margin-block-end: 18px;
                }
                .select-item{
                   font-weight : 100;
                   margin-bottom: 20px;
                }
                .booking-btn{
                  background-color : transparent;
                   border : none;
                   border: 1px solid gray;
                   padding: 10px;
                   width: 300px;
                   margin-top : 10px
                }
                `
                }</style>
            </div>
        )
    }
}
export default Reservation;
