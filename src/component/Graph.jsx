import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';


const Graph  = props => {
    Chart.register(ChartDataLabels);

    
        const labelstemp = [];
        for (let i = 0; i < 7; i++) {    
            labelstemp.push(props.temp_dates[i]);
        }

        
        const datasetLow = [];
        for (let i = 0; i < 7; i++) {    
            datasetLow.push(props.temp_low[i]);
        }

        const datasetHigh = [];
        for (let i = 0; i < 7; i++) {    
            datasetHigh.push(props.temp_high[i]);
        }

     const data = {
        labels:labelstemp,
        
        datasets: [
          {
            label: "Low Temp",
            data: datasetLow,
            fill: false,
            pointStyle: 'round',
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            datalabels: {
                color: 'rgba(75,192,192,1)',
                padding: {
                    top: 10,
                    bottom: 30
                },
                fontSize: 15,
                titleSpacing: 2            }
        },
          {
            label: "High Temp",
            data: datasetHigh,
            fill: false,
            pointStyle: 'round',
            borderColor: "gray"
          }
        ]
      };
 
const options = {
    responsive: true,
    onClick: (e, elements) => {
        
        console.log(elements);
      },

    plugins:  {
           title: {
                display: true,
                text: 'Average High & Low Temperatures for ' + props.city,
                fontFace: 'verdana',
                fontSize:20, 
                padding: {
                    top: 10,
                    bottom: 30
                }
            },

            datalabels: {
                display: true
            },
            scales: {
                y: {
                    display: true,
                        title: {
                        display: true,
                        text: 'Temperature',
                        color: '#191'
                    },
                   padding: {top: 30, left: 0, right: 0, bottom: 0}
                },
                x: {
                    display: true,
                        title: {
                            display: true,
                            text: 'Days',
                            color: '#191'
                        },
                  padding: {top: 30, left: 0, right: 0, bottom: 0}
                },
              }      
        }
   
};


    return (
     <div className='container'>         
      <Line data={data} 
            options={options}
      />
    
     </div>   
    );

        }
export default Graph;

