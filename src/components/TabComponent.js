import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabDoor from "./tabs_nav/TabDoor";
import TabDevices from "./tabs_nav/TabDevices";
import { TabPrices } from "./tabs_nav/TabPrices";
import "../css/TabsNav.css";

class TabComponent extends Component {
  state = {
    tabIndex: 0
  };

  render() {
    return (
      <div>
        <Tabs
          className="tabs"
          selectedIndex={this.state.tabIndex}
          onSelect={tabIndex => this.setState({ tabIndex })}
        >
          <TabList className="tab-nav-container">
            <Tab className={`${this.state.tabIndex === 0 ? "active" : null}`}>
              <TabDoor />
              <p>
                <strong>
                  No commitments
                  <br />
                  Cancel online at anytime
                </strong>
              </p>
            </Tab>

            <Tab
              className={`${this.state.tabIndex === 1 ? "active" : null}`}
              selectedIndex={this.state.tabIndex}
              onSelect={tabIndex => this.setState({ tabIndex })}
            >
              <TabDevices />
              <p style={{ marginTop: "-5.3125rem" }}>
                <strong>Watch anywhere</strong>
              </p>
            </Tab>

            <Tab
              className={`${this.state.tabIndex === 2 ? "active" : null}`}
              selectedIndex={this.state.tabIndex}
              onSelect={tabIndex => this.setState({ tabIndex })}
            >
              <TabPrices />
              <p>
                <strong>pick your price</strong>
              </p>
            </Tab>
          </TabList>
        </Tabs>
      </div>
    );
  }
}
export default TabComponent;
