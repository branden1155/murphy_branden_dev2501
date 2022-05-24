import {React, useState} from "react";
import ChartHorz from "../components/Charts/ChartHorz";
import ChartPie from "../components/Charts/ChartPie";

function Dashboard(){

    const [chartHorz] = useState([
        {chartHeader: 'Income Overview'},
        {chartHeader: 'Savings Overview'}
    ]);

    const [chartPie] = useState ([
        {chartpieHeader: 'Global Income'},
        {chartpieHeader: 'Personal Savings'},
        {chartpieHeader: 'Total Spending'}
    ]);

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

const styles={
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
    },

    chartHorz: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        overflow: 'hidden',
    },

    dashTitle: {
        marginLeft: '75px',
    },

    chartPie:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '25px',
    }
}