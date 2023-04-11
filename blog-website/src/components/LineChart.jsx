import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const LineChart = () => {


    const data = [
        { date: '11 April', users: 9 },
        { date: '12 April', users: 20 },
        { date: '13 April', users: 55 },
        { date: '14 April', users: 42 },
        { date: '15 April', users: 64 },
        { date: '16 April', users: 78 },
        { date: '17 April', users: 64 },
        { date: '18 April', users: 52 },
        { date: '19 April', users: 78 },
        { date: '20 April', users: 85 },
        { date: '21 April', users: 100 },
        { date: '22 April', users: 84 },
    ];

    const userData = {
        labels: data.map((item) => item.date),
        datasets: [{
            label: 'Users Gained',
            data: data.map((item) => item.users),
        }]
    }

    return (
        <>
            <Line
                data={userData}
                options={{
                    scales: {
                        y: {
                            min: 0,
                        }
                    }
                }}
            />
        </>
    )
}

export default LineChart;