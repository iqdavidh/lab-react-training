import React from 'react';

import 'antd/dist/antd.css';
import './index.css';
import { Tabs } from 'antd';

const { TabPane } = Tabs;




function callback(key) {
  console.log(key);
}


function App() {
  return (

      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Id Card" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Greetings" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Random" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="BoxColor" key="4">
          Content of Tab Pane 3
        </TabPane>

        <TabPane tab="Card" key="6">
          Credit Cart / DriverCard
        </TabPane>

        <TabPane tab="Rating" key="7">
          Button
          Rating  LikeButton ClickablePicture
        </TabPane>


        <TabPane tab="Dice" key="11">
          Content of Tab Pane 3
        </TabPane>

        <TabPane tab="Carousel" key="12">
          Content of Tab Pane 3
        </TabPane>

        <TabPane tab="NumbersTable" key="13">
          Content of Tab Pane 3
        </TabPane>

        <TabPane tab="Facebook" key="14">
          14
        </TabPane>

        <TabPane tab="Form" key="15">
          15
        </TabPane>

        <TabPane tab="WRGBColorPicker" key="16">
          16
        </TabPane>


      </Tabs>

  );
}

export default App;
