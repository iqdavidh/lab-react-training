import {Rate} from 'antd';
import React from "react";

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

class Rating extends React.Component {
  state = {
    value: this.props.children,
  };

  handleChange = value => {
    this.setState({value});
  };

  render() {
    const {value} = this.state;
    return (

        <div>
          <Rate tooltips={desc} onChange={this.handleChange} value={value}/>
        </div>

    );
  }
}


export default Rating;
