// component to handle displayed tickets

import React, { useState } from "react";
import ticketholderpic from "../../assets/images/minigames/assembly/ticketholder.png";
import blankticket from "../../assets/images/minigames/assembly/blankticket.png";

export default function Tickets(props) {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleMouseDown = (ticket) => {
    setSelectedTicket(ticket);
    console.log(`setting to ticket ${ticket}`);
    setTimeout(() => {
      setSelectedTicket(null);
    }, 200); // Adjust the duration of the animation as needed
  };

  const getTicketStyle = (ticket) => {
    return selectedTicket === ticket
      ? { transform: "scale(0.98)", transition: "transform 0.2s ease-in-out" }
      : {};
  };

  return (
    <div className="tickets--container">
      <div className="ticket--holder--container">
        <div className="ticket--holder--image">
          <img src={ticketholderpic} alt="Ticket Holder" />
        </div>
        <div className="ticket--holder--image">
          <img
            src={blankticket}
            alt="Ticket 1"
            style={getTicketStyle("ticket1")}
            onMouseDown={() => handleMouseDown("ticket1")}
          />
          <img
            src={blankticket}
            alt="Ticket 2"
            style={getTicketStyle("ticket2")}
            onMouseDown={() => handleMouseDown("ticket2")}
          />
          <img
            src={blankticket}
            alt="Ticket 3"
            style={getTicketStyle("ticket3")}
            onMouseDown={() => handleMouseDown("ticket3")}
          />
          <img
            src={blankticket}
            alt="Ticket 4"
            style={getTicketStyle("ticket4")}
            onMouseDown={() => handleMouseDown("ticket4")}
          />
          <img
            src={blankticket}
            alt="Ticket 5"
            style={getTicketStyle("ticket5")}
            onMouseDown={() => handleMouseDown("ticket5")}
          />
        </div>
      </div>
    </div>
  );
}
