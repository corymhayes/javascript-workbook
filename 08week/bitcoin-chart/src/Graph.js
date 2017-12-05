import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, Label, Tooltip } from 'recharts';

class Graph extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <AreaChart
        width={1200}
        height={500}
        data={this.props.chartData}
        margin={{top: 0, right: 50, left: 10, bottom: 25}}
      >
        <XAxis dataKey='x' style={{fontSize: 12, fontFamily: 'Ubuntu'}} />
        <YAxis style={{fontSize: 12, fontFamily: 'Ubuntu'}}/>
        <Tooltip />
        <Area type="natural" dataKey='y' baseLine={8} stroke={false} fillOpacity={1} fill="#ff0000" />
      </AreaChart>
    );
  }
}

export default Graph;
