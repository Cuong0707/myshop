import React from 'react';
import { ResponsiveLine } from '@nivo/line';

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
            { x: 870, y: 10 },   // 14:30
            { x: 900, y: 11 },   // 15:00
            { x: 930, y: 12 },   // 15:30
            { x: 960, y: 13 },   // 16:00
            { x: 990, y: 14 },   // 16:30
            { x: 1020, y: 534 }, // 17:00
            { x: 1050, y: 16 },  // 17:30
            { x: 1080, y: 17 },  // 18:00
            { x: 1110, y: 57 },  // 18:30
            { x: 1140, y: 19 },  // 19:00
            { x: 1170, y: 45 },  // 19:30
            { x: 1200, y: 89 },  // 20:00
            { x: 1230, y: 35 },  // 20:30
            { x: 1260, y: 78 },  // 21:00
        ],
    },
];

const Charts = ({height}) => {
    return (
        <div className='chart' style={{ height: height }}>
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'linear' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false,
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Time',
                    legendOffset: 36,
                    legendPosition: 'middle',
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Visits',
                    legendOffset: -40,
                    legendPosition: 'middle',
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
            />
        </div>
    );
};

export default Charts;