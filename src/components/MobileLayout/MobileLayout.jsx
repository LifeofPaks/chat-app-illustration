import React from "react";
import "./MobileLayout.scss";
import Avatar from "../../images/avatar.jpg";
import image1 from "../../images/dog-image-1.jpg";
import image2 from "../../images/dog-image-2.jpg";
import image3 from "../../images/dog-image-3.jpg";

const MobileLayout = () => {
  return (
    <div className="mobile">
      <article className="wrapper">
        <section className="topCutOut"></section>

        <section className="topSection">
          <div className="profileInfo">
            <img
              src="https://img.icons8.com/android/24/FFFFFF/chevron-left.png"
              alt="chevron-left"
              className="arrow"
            />
            <img src={Avatar} alt="avatar" className="avatar" />

            <div className="info">
              <h1>Samuel Green</h1>
              <p>Available to Walk</p>
            </div>
          </div>

          <img
            src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/FFFFFF/external-vertical-ellipsis-menu-with-three-dots-expansion-basic-bold-tal-revivo.png"
            alt="external-vertical-ellipsis-menu-with-three-dots-expansion-basic-bold-tal-revivo"
            className="ellipsis"
          />
        </section>

        <section className="chat">
          <div className="leftBubble">
            <p> That sounds great. I’d be happy with that.</p>
          </div>

          <div className="leftBubble">
            <p> Could you send over some pictures of your dog, please?</p>
          </div>

          <div className="rightWrapper">
            <div className="rightImages">
              <img src={image1} alt="dog-img" />
              <img src={image2} alt="dog-img" />
              <img src={image3} alt="dog-img" />
            </div>
            <div className="rightBubble">
              <p>Here are a few pictures. She’s a happy girl!</p>
            </div>

            <div className="rightBubble">
              <p>Can you make it?</p>
            </div>
          </div>

          <div className="leftBubble">
            <p>
              She looks so happy! The time we discussed works. How long shall I
              take her out for?
            </p>
          </div>

          <div className="leftBubble xtra">
            <div className="wrap">
              <div className="radio"></div>
              <p>30 minute walk</p>
            </div>

            <span>$29</span>
          </div>

          <div className="leftBubble xtra">
            <div className="wrap">
              <div className="radio"></div>
              <p>1 hour walk</p>
            </div>

            <span>$49</span>
          </div>
        </section>
        <section className="inputWrapper">
          <input type="text" placeholder="Type a message" />
          <button>
            <img
              src="https://img.icons8.com/android/24/FFFFFF/forward.png"
              alt="forward"
            />
          </button>
        </section>
      </article>
    </div>
  );
};

export default MobileLayout;
