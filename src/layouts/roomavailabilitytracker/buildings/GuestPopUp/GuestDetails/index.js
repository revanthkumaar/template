import React from 'react'
import Guestdetails from './DOMguestdetails/guestdetails'
import RegGuestDetails from './RegGuestdetails'

function GuestDetailsIndex(props) {
    var occtype = props.guestdetails.occupancyType
    console.log("hey")
  return (
    <div>{occtype == 'Regular' ? (<RegGuestDetails guestdetails={props.guestdetails} GuestDueAmount={props.GuestDueAmount}/>) : (<Guestdetails guestdetails={props.guestdetails} GuestDueAmount={props.GuestDueAmount} />)}</div>
  )
}

export default GuestDetailsIndex