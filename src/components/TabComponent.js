import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabDoor from "./tabs_nav/TabDoor";
import TabDevices from "./tabs_nav/TabDevices";
import TabPrices from "./tabs_nav/TabPrices";
import "../css/TabsNav.css";
import TabComponentOne from "./TabComponentOne";
import TabComponentTwo from "./TabContentTwo";

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
            <Tab
              className={`${
                this.state.tabIndex === 0 ? "tab-selected active" : null
              }`}
            >
              <TabDoor />
              <p style={{ marginBottom: "1.875rem" }}>
                <strong>
                  No commitments
                  <br />
                  Cancel online at anytime
                </strong>
              </p>
            </Tab>

            <Tab
              className={`${
                this.state.tabIndex === 1 ? "tab-selected active" : null
              }`}
              selectedIndex={this.state.tabIndex}
              onSelect={tabIndex => this.setState({ tabIndex })}
            >
              <TabDevices />
              <p style={{ marginTop: "-5.3125rem" }}>
                <strong>Watch anywhere</strong>
              </p>
            </Tab>

            <Tab
              className={`${
                this.state.tabIndex === 2 ? "tab-selected active" : null
              }`}
              selectedIndex={this.state.tabIndex}
              onSelect={tabIndex => this.setState({ tabIndex })}
            >
              <TabPrices />
              <p>
                <strong>pick your price</strong>
              </p>
            </Tab>
          </TabList>
          {/* Tabs content */}
          <TabPanel>
            <TabComponentOne />
          </TabPanel>

          <TabPanel>
            <TabComponentTwo />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default TabComponent;
