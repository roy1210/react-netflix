import React from "react";
import Button from "./Button";
import styled from "styled-components";
import ImgTv from "../images/tab-tv.png";
import ImgTablet from "../images/tab-tablet.png";
import ImgMacbook from "../images/tab-macbook.png";
import { generateMedia } from "styled-media-query";

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
            <h3>Watch on your tablet</h3>
            <p>Tablet, Phone, iOS, Android</p>
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
            <h3>Watch on your laptop</h3>
            <p>MacOS, Windows, Linux</p>
          </div>
        </div>
      </div>
    </TabContainer>
  );
};

export default TabContentTwo;

const customMedia = generateMedia({
  smDesktop: "1440px",
  tablet: "900px"
});

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
    ${customMedia.lessThan("smDesktop")`
      grid-template-columns: repeat(2, 1fr);
    `}
    ${customMedia.lessThan("tablet")`
      grid-template-columns:1fr;
      text-align: center;
      row-gap: 1.5rem;
    `}
  }

  span {
    /* take 1-8 width */
    grid-column: 1 / 8;

    ${customMedia.lessThan("tablet")`
      grid-column: 1 / -1;
      font-size: 1.5rem;
    `}
  }
  /* take 10-12 width */
  .btn {
    /* margin: 0 1.25rem 1.25rem; */
    grid-column: 10/12;
    ${customMedia.lessThan("tablet")`
      grid-column: 1 / -1;
      margin-left: 30%;
      margin-right: 30%;
    `}
  }

  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    text-align: center;
    margin-top: 2rem;
    ${customMedia.lessThan("smDesktop")`
      grid-template-columns: repeat(2, 1fr);
    `}
    ${customMedia.lessThan("tablet")`
      grid-template-columns:1fr;
      text-align: center;
      row-gap: 1.5rem;
    `}
  }
  p {
    color: var(--main-grey);
  }
  h3 {
    margin: 0.5rem 0;
  }
`;
