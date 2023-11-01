// component to handle displayed tickets

import ticketholderpic from "../../assets/images/minigames/assembly/ticketholder.png";
import ticket1pic from "../../assets/images/minigames/assembly/ticket1.png";
import ticket2pic from "../../assets/images/minigames/assembly/ticket2.png";
import ticket3pic from "../../assets/images/minigames/assembly/ticket3.png";
import ticket4pic from "../../assets/images/minigames/assembly/ticket4.png";

export default function Tickets(props) {
  return (
    <>
      <div className="tickets--container">
        <div className="ticket--holder--container">
          <div className="ticket--holder--image">
            <img src={ticketholderpic}></img>

            <img src={ticket1pic}></img>

            <img src={ticket2pic}></img>
            <img src={ticket3pic}></img>
            <img src={ticket4pic}></img>
          </div>
          <div className="ticket--images"></div>
        </div>
      </div>
    </>
  );
}
