import React from "react";
import Button from "./Button";
import styled from "styled-components";
import ImgTv from "../images/tab-tv.png";
import ImgTablet from "../images/tab-tablet.png";
import ImgMacbook from "../images/tab-macbook.png";

const TabContentTwo = () => {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span style={{ fontSize: "1.5rem" }}>
            Watch TV shows and movies anytime, anywhere — personalized for you.
          </span>
          <Button className="btn">Try it now</Button>
        </div>

        {/* Tab bottom content */}
        <div className="tab-bottom-content">
          {/* TV image container */}
          <div>
            <img src={ImgTv} alt="ImgTv" style={{ width: "18.75rem" }} />
            <h3>Watch on your TV</h3>
            <p>Smart,TVs, PlayStation, Xbox, Chromecast, Apple TV, and more</p>
          </div>
          {/* Tablet image container */}
          <div>
            <img
              src={ImgTablet}
              alt="ImgTab"
              style={{
                width: "18.75rem",
                paddingTop: "0.625rem ",
                paddingBottom: "0.625rem"
              }}
            />
            <h3>Watch on your TV</h3>
            <p>Smart,TVs, PlayStation, Xbox, Chromecast, Apple TV, and more</p>
          </div>
          {/* Maacbook image container */}
          <div>
            <img
              src={ImgMacbook}
              alt="ImgMacbook"
              style={{
                width: "18.75rem",
                paddingTop: "0.625rem ",
                paddingBottom: "0.625rem"
              }}
            />
            <h3>Watch on your TV</h3>
            <p>Smart,TVs, PlayStation, Xbox, Chromecast, Apple TV, and more</p>
          </div>
        </div>
      </div>
    </TabContainer>
  );
};

export default TabContentTwo;

const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
  }

  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0;
  }

  span {
    /* take 1-8 width */
    grid-column: 1 / 8;
  }
  /* take 10-12 width */
  .btn {
    /* margin: 0 1.25rem 1.25rem; */
    grid-column: 10/12;
  }

  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    text-align: center;
    margin-top: 2rem;
  }
  p {
    color: var(--main-grey);
  }
  h3 {
    margin: 0.5rem 0;
  }
`;
