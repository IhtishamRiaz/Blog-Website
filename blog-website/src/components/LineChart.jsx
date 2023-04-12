import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { blogs } from '../context/BlogsProvider';
import { useContext } from 'react';

const LineChart = () => {

    const { usersData } = useContext(blogs);

    const datesCount = {};

    usersData.forEach((item) => {
        if (datesCount[item.regDate]) {
            datesCount[item.regDate]++;
        } else {
            datesCount[item.regDate] = 1;
        }
    });

    const datesArray = Object.entries(datesCount).slice(-7);

    const chartData = {
        labels: datesArray.map(item => item[0]),
        datasets: [{
            label: 'Users Gained',
            data: datesArray.map(item => item[1]),
        }]
    }

    return (
        <>
            <Line
                data={chartData}
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