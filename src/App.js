import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Your Names");
  const [club, setClub] = useState("Select Group");
  const [mobile, setMobile] = useState("Your Mobile Phone Number");
  const [email, setEmail] = useState("Your Email Address");
  const [address, setAddress] = useState("Your Home Address");
  return (
    <div className="App">
      <header className="App-header">
        FALCON Poinsettia Letter
        <div className="App-formFields">
          <div>
            <span>Your Names: </span>
            <input
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your names here"
            />
          </div>
          <div>
            <span>Your Names: </span>
            <select onChange={(e) => setClub(e.target.value)}>
              <option>Select Group</option>
              <option>Barracudas</option>
              <option>Condors</option>
              <option>Lobos</option>
              <option>Salty Dawgs</option>
              <option>Soaring Eagles</option>
              <option>Surfin' Turfs</option>
              <option>Zu</option>
            </select>
          </div>
          <div>
            <span>Your Mobile Phone Number: </span>
            <input
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your phone number here"
            />
          </div>
          <div>
            <span>Your Email Address: </span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address here"
            />
          </div>
          <div>
            <span>Your Home Address: </span>
            <input
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your home address here"
            />
          </div>
        </div>
        <div style={{ fontSize: 12, color: "red" }}>
          Before printing make sure to turn off "Print Headers & Footers" in the
          print dialog. You migth have to click "show details" first to see that
          option.
        </div>
        <input type="button" onClick={() => window.print()} value="Print" />
      </header>
      <div className="letterContainer">
        <div className="letter">
          <img src="header.png" className="headerImage" />
          Hello, Neighbor!
          <br />
          <br />
          As you may know, <span className="fillIn">{name}</span> are in the
          Adventure Clubs program through the YMCA. We camp about once a month
          with a bunch of others in our group named 
          <span className="fillIn">{club}</span> at campgrounds throughout San
          Diego and surrounding areas with the goal of strengthening the bonds
          between fathers, mothers, sons, daughters, and fellow club members.
          Our group is part of a larger club, the Falcon Club, whom we also camp
          with. There may be as many as 300 people at our campouts. It’s super
          fun and we absolutely love the experiences.
          <br />
          <br />
          Our Dream Catcher program enables many children with physical and
          learning disabilities to be mainstreamed into the YMCA camps. It also
          provides financial assistance to the programs for children who parents
          deployed in the military, children that have been victims of abuse,
          and local children whose families are having a hard time financially.
          The program has a very positive impact on our local community.
          <br />
          <br />
          Every year, we sell Poinsettias to raise money for the Dream Catcher
          program which we donate to the YMCA which enables further outreach by
          subsidizing families that may not otherwise be able to join the YMCA’s
          programs, Adventure Clubs being one of them.  
          <br />
          <br />
          <strong>
            We are selling beautiful red poinsettias which are 14.5 to 16.6
            inches tall in 6.5 inch gold foil pots for $12.00, half of which
            goes directly to the Dream Catcher program ($6 tax-deductible
            donation).{" "}
            <span className="highlight">
              Alternatively, you can purchase Poinsettias to have donated to
              local military families at Camp Pendleton for the holidays this
              year. Donations to military families are 100% tax deductible.
            </span>
          </strong>{" "}
          If you, your business, friends or associates are in need of
          poinsettias this holiday season, why not buy them for a good cause?!
          <br />
          <br />
          <span className="highlight">
            Orders need to be placed by Sunday, November 27th.{" "}
          </span>
          We will personally deliver these to your doorstep or your location of
          choice (with-in reason) on December 3rd.
          <br />
          <br />
          Just let us know how many you would like to order or donate and we
          will take care of the paperwork, delivery, and provide a receipt.
          <br />
          <br />
          Thank you and please enjoy the holidays!
          <footer>PAGE BREAK</footer>
          <h2 className="orderFormHeader">
            2021 YMCA-Falcon Poinsettia Order Form
          </h2>
          <br />
          Please complete the order information below and send it via the
          following options by Sunday, November 27th, 2022.
          <ol>
            <li>
              Put it in the enclosed envelope and drop it off at{" "}
              <span className="fillIn">{address}</span>.
            </li>
            <li>
              Call or text the information to{" "}
              <span className="fillIn">{mobile}</span>.
            </li>
            <li>
              Email it to <span className="fillIn">{email}</span>.
            </li>
          </ol>
          <div
            style={{ marginTop: 40, display: "flex", justifyContent: "center" }}
          >
            <div
              className="orderForm"
              style={{
                justifySelf: "center",
                position: "relative",
              }}
            >
              <div style={{ position: "absolute", top: "33%", left: "20%" }}>
                {name}
              </div>
              <div style={{ position: "absolute", top: "39%", left: "75%" }}>
                {club}
              </div>
              <div style={{ position: "absolute", top: "39%", left: "16%" }}>
                Falcon
              </div>
              <img src="orderform.png" style={{ maxWidth: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
