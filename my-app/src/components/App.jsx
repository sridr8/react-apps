import React, { useState } from "react";
import Card from "./Card";
import contacts from "../contacts.js";
import Avatar from "./Avatar";
import Time from "./Time";

function createCard(contact) {
  return (
    <Card
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  // setInterval(updateTime, 1000);
  let now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  function updateTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Time time={time} update={updateTime} />
      <Avatar imageUrl="https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png" />
      {contacts.map(createCard)}
      {/* <Card 
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card 
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card 
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
