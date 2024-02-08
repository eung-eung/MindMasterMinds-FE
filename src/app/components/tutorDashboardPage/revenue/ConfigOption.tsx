import React from 'react'

export const options = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },


    },
    scales: {
        x: {
            grid: {
                display: false
            }
        },
        y: {
            grid: {
                display: true
            },
            max: 100,
            ticks: {
                stepSize: 20
            }
        },

    }

}



export const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
        {
            data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 100, 5],
            backgroundColor: '#93fdd3',
            borderRadius: 15,
            borderSkipped: false,
            max: 10000
        },
    ],
};