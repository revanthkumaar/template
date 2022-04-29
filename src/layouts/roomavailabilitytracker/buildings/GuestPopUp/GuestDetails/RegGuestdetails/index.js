import React from 'react'
import ActregGuestDetails from './ActregGuestDetails'
import InnRegGuestDetails from './InnRegGuestdetails'

function RegGuestDetails(props) {
    var guestStatus = props.guestdetails.guestStatus
    console.log(guestStatus)
    console.log("hey this is regular guest index")
  return (

    <div>
        {guestStatus == 'active' ? (<ActregGuestDetails guestdetails={props.guestdetails} GuestDueAmount={props.GuestDueAmount}/>) : (<InnRegGuestDetails guestdetails={props.guestdetails} GuestDueAmount={props.GuestDueAmount}/>)}
    </div>
  )
}

export default RegGuestDetails