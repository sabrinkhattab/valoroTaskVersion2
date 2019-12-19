import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload} from '@fortawesome/free-solid-svg-icons'

class CreateBooking extends React.Component{

    render() {
        return(
            <div className="Booking-wrapper">
                <div className="select">
                    <span>select</span>
                    <FontAwesomeIcon icon={faDownload} />
                    <FontAwesomeIcon icon={faDownload} />

                </div>
                <div className="booking-btn">
                    <button>CREATE BOOKING</button>
                </div>

                <style>{`
                .Booking-wrapper{
                 position:absolute;
                 bottom: 0;
                 background-color:#ebebe5;
                 width:335px
                }
                .select{
                  border-bottom: 1px solid gray;
                  border-top: 1px solid gray;
                  padding:10px;
                  color : #838383;   
                  display : flex;
                  justify-content: space-between;   
          }
          
                .booking-btn{
                      padding: 18px;
                      text-align : center
                
                }
                .booking-btn button {
                 background-color :#77f0ab;
                 border : none;
                 padding : 10px;
                 width :247px;
                 font-weight: bold;

                
                }
                
                
                `
                }</style>
            </div>
        )
    }
}
export default CreateBooking;
