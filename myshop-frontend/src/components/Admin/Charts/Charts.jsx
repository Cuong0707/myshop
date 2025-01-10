import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const data = [
    {
        id: 'visits',
        data: [
            { x: '10:00', y: 17 },
            { x: '10:30', y: 24 },
            { x: '11:00', y: 13 },
            { x: '11:30', y: 4 },
            { x: '12:00', y: 10 },
            { x: '12:30', y: 69 },
            { x: '13:00', y: 89 },
            { x: '13:30', y: 68 },
            { x: '14:00', y: 92 },
            { x: '14:30', y: 10 },
            { x: '15:00', y: 11 },
            { x: '15:30', y: 12 },
            { x: '16:00', y: 13 },
            { x: '16:30', y: 14 },
            { x: '17:00', y: 534 },
            { x: '17:30', y: 16 },
            { x: '18:00', y: 17 },
            { x: '18:30', y: 57 },
            { x: '19:00', y: 19 },
            { x: '19:30', y: 45 },
            { x: '20:00', y: 89 },
            { x: '20:30', y: 35 },
            { x: '21:00', y: 78 },
        ],
    },
];

const Charts = ({height,width}) => {
    return (
        <div style={{ height: height, width: width }}>
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
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