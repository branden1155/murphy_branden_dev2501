import React from 'react';
import { PieChart,Pie } from 'recharts';

//this is the data for the Pie chart
const data01 = [
    { 
        name: 'Group A', 
        value: 400 
    },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
//secondary data for the pie Chart
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];

//components and details for the Pie chart which includes a dummy prop
const ChartPie = ({ChartPie}) => {
    return(
        <article key={ChartPie.id} style={styles.chartpieDisplay}>
            <h1 style={styles.chartpieH1}>{ChartPie.chartpieHeader}</h1>
            <PieChart width={250} height={250}>
                <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill= "#031926" />
                <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill= "#031926" label />
            </PieChart>
        </article>
    )
}

export default ChartPie;
//styles for the Pie chart
const styles={
    chartpieDisplay: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        transition: '3s',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        paddingLeft: '5%',
        paddingRight: '5%',
        width: '100%',
        minHeight: '100%',
        margin: '25px',
        borderRadius: '5px 5px 5px',
    },

    chartpieH1: {
        justifyContent: 'center',
        textAlign: 'center',
        textDecoration: 'underline',
    },
}