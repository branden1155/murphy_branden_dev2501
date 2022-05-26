import {React, useState} from "react";
import ChartHorz from "../components/Charts/ChartHorz";
import ChartPie from "../components/Charts/ChartPie";

function Dashboard(){

//hooks that are used on the Horizontal Chart
    const [chartHorz] = useState([
        {chartHeader: 'Income Overview'},
        {chartHeader: 'Savings Overview'}
    ]);

//hooks that are used on the Pie Chart
    const [chartPie] = useState ([
        {chartpieHeader: 'Global Income'},
        {chartpieHeader: 'Personal Savings'},
        {chartpieHeader: 'Total Spending'}
    ]);

//map function for Horizontal Chart and Pie Chart
    return(
        <section style={styles.container}>
            <h1 style={styles.dashTitle}>Dashboard</h1>
            <p style={styles.chartHorz}>
                {chartHorz.map((chartHorz, id) => (
                    <ChartHorz key={id} id={id} ChartHorz={chartHorz} />
                ))}
            </p>
                <p style={styles.chartPie}>
                    {chartPie.map((chartPie, id) => (
                        <ChartPie key={id} id={id} ChartPie={chartPie} />
                    ))}
                </p>
        </section>
        
    )
}

export default Dashboard;
//styles used for the dashboard link
const styles={
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '2%',
    },

    chartHorz: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2%',
        // width: '100%',
    },

    dashTitle: {
        // marginTop: '-75px',
        // marginLeft: '45px',
        // padding: '0',

    },

    chartPie:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        overflow: 'hidden',
        margin: '65px',
    }
}