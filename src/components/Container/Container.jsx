import React from "react";
import "./Container.scss";
import MobileLayout from "../MobileLayout/MobileLayout";

const Container = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="bgImage"></div>
            <MobileLayout/>
      </div>

      <div className="right">
        <div className="bgImage"></div>
        <div className="content">
          <h1>Simple booking</h1>
          <p>
            Stay in touch with our dog walkers through the chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Container;
