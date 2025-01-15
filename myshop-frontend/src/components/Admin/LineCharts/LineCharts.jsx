import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import './LineCharts.css';
const data = [
    {
        id: 'visits',
        data: [
            { x: 600, y: 17 },   // 10:00
            { x: 630, y: 24 },   // 10:30
            { x: 660, y: 13 },   // 11:00
            { x: 690, y: 4 },    // 11:30
            { x: 720, y: 10 },   // 12:00
            { x: 750, y: 69 },   // 12:30
            { x: 780, y: 89 },   // 13:00
            { x: 810, y: 68 },   // 13:30
            { x: 840, y: 92 },   // 14:00
        ],
    },
];

const LineCharts = () => {
    return (
        <div className="chart">
            <ResponsiveLine
                data={data}
                animate={false} // Tắt animation
                motionConfig="stiff" // Nếu muốn animation mượt
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false,
                }}
                curve="monotoneX"
                axisTop={null}
                axisRight={null}
                axisBottom={null}
                axisLeft={null}

                enableGridX={false}
                enableGridY={false}
                // axisBottom={{
                //     orient: 'bottom',
                //     tickSize: 5,
                //     tickPadding: 5,
                //     tickRotation: 0,
                //     legend: 'Time',
                //     legendOffset: 36,
                //     legendPosition: 'middle',
                // }}
                // axisLeft={{
                //     orient: 'left',
                //     tickSize: 5,
                //     tickPadding: 5,
                //     tickRotation: 0,
                //     legend: 'Visits',
                //     legendOffset: -40,
                //     legendPosition: 'middle',
                // }}
                lineWidth={1}
                pointSize={4}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                
            // theme={{
            //     background: '#2E8EE8', /* Thêm màu nền tùy chọn */
            //     axis: {
            //         domain: {
            //             line: {
            //                 stroke: '#777777',
            //                 strokeWidth: 1,
            //             },
            //         },
            //         ticks: {
            //             line: {
            //                 stroke: '#777777',
            //                 strokeWidth: 1,
            //             },
            //             text: {
            //                 fill: '#333333',
            //             },
            //         },
            //     },
            // }}


            />
        </div>
    );
};

export default LineCharts;