import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const ChartHorz = ({ChartHorz}) => {
    return(
        <article key={ChartHorz.id} style={styles.graphDisplay}>
            <h1 style={styles.chartTitle}>{ChartHorz.chartHeader}</h1>
            <AreaChart width={600} height={100} data={data} margin={{top: 0, left: 0, right: 0, bottom: 0}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#031926" fill="#031926" />
            </AreaChart>
        </article>
    )
};
  
export default ChartHorz

const styles={
    chartTitle: {

    },

    graphDisplay: {
        margin: '45px',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: '1%',
        backgroundColor: 'white',
        transition: '3s',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        borderRadius: '5px 5px 5px',
        
    },
}
   
