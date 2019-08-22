import React from "react";
import {Card} from 'antd';

import {Descriptions} from 'antd';

class IdCard extends React.Component {


  render() {
    const props = this.props;

    let nombre=props.firstName + ' ' + props.lastName;


    return <Card
          hoverable
          style={{width: 300}}
          cover={<img alt="X"
                      src={props.picture}/>}
      >

        <Descriptions
            title={nombre} layout="vertical"  column={2} bordered={true}>

          <Descriptions.Item label="lastName" >{props.lastName}</Descriptions.Item>
          <Descriptions.Item label="firstName">{props.firstName}</Descriptions.Item>
          <Descriptions.Item label="gender">{props.gender}</Descriptions.Item>

          <Descriptions.Item label="height">{props.height}</Descriptions.Item>

          <Descriptions.Item label="birth"  span={2}>{props.birth.toDateString()}</Descriptions.Item>



        </Descriptions>


      </Card>

   ;
  }
}

export default IdCard;
