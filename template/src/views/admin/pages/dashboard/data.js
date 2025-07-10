const reservationChart  = {
    series: [{
      name: 'Net Profit',
      data: [9, 4, 7, 7, 4, 9, 8]
    }],
    sline: {
        chart: {
        width: '100%',
        height: 90,
        type: 'bar',
        toolbar: {
            show: false,
        },
        padding: 0
        },
        plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '100%', // Removes space between bars
            barHeight: '100%',
            endingShape: 'rounded'
        },
        },
        colors: ['#D0E3E6', '#4361ee'],
        states: {
        hover: {
            filter: {
                type: 'darken', // Options: 'none', 'lighten', 'darken'
                value: 0.3 // Adjust hover intensity
            }
        }
    },
        dataLabels: {
        enabled: false
        },
        stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
        },    
        fill: {
        opacity: 1

        },
        xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
        labels: { show: false },
        axisTicks: { show: false },
        axisBorder: { show: false } 
        },
        grid: {
            show: false, // Set false to hide all grid lines
            padding: { left: 0, right: 0, top: -15, bottom: 0 } 
        },
        yaxis: {
        labels: { show: false }  // Hides Y-axis values
        },
        tooltip: {
            y: {
                formatter: function (val) {
                return  val 
                }
            }
        }
    }
}

const earningChart = {
    series: [{
      name: 'Earning',
      data: [9, 4, 7, 7, 4, 9, 8]
    }],
    sline: {
        chart: {
        width: '100%',
        height: 90,
        type: 'bar',
        toolbar: {
            show: false,
        },
        padding: 0
        },
        plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '100%', // Removes space between bars
            barHeight: '100%',
            endingShape: 'rounded'
        },
        },
        colors: ['#FFF3EB', '#4361ee'],
        states: {
            hover: {
                filter: {
                    type: 'darken', // Options: 'none', 'lighten', 'darken'
                    value: 0.3 // Adjust hover intensity
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },    
        fill: {
            opacity: 1
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
            labels: { show: false },
            axisTicks: { show: false },
            axisBorder: { show: false } 
        },
        grid: {
            show: false, // Set false to hide all grid lines
            padding: { left: 0, right: 0, top: -15, bottom: 0 } 
        },
        yaxis: {
            labels: { show: false }  // Hides Y-axis values
        },
        tooltip: {
            y: {
                formatter: function (val) {
                return  val 
                }
            }
        }
    }
}

const carChart = {
    series: [{
      name: 'Car',
      data: [9, 4, 7, 7, 4, 9, 8]
    }],
    sline: {
        chart: {
        width: '100%',
        height: 90,
        type: 'bar',
        toolbar: {
            show: false,
        },
        padding: 0
        },
        plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '100%', // Removes space between bars
            barHeight: '100%',
            endingShape: 'rounded'
        },
        },
        colors: ['#F0ECFF', '#4361ee'],
        states: {
            hover: {
                filter: {
                    type: 'darken', // Options: 'none', 'lighten', 'darken'
                    value: 0.3 // Adjust hover intensity
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },    
        fill: {
            opacity: 1
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
            labels: { show: false },
            axisTicks: { show: false },
            axisBorder: { show: false } 
        },
        grid: {
            show: false, // Set false to hide all grid lines
            padding: { left: 0, right: 0, top: -15, bottom: 0 } 
        },
        yaxis: {
            labels: { show: false }  // Hides Y-axis values
        },
        tooltip: {
            y: {
                formatter: function (val) {
                return  val 
                }
            }
        }
    }
}

const salesStatistics = {
    series: [
        {
            name: 'Revenue',
            data: [22, 22, 28, 25, 15, 22, 20],
        },
        {
            name: 'Expenses',
            data: [-9, -25, -5, -10, -10, -25, -5]
        }
    ],
    sline: {
        grid: {
            padding: {
                top: 5, // Adds space on the left
                right: 5, // Adds space on the right
            },
        },
        colors: ['#FFA633', '#FFDBAD'],
        chart: {
            type: 'bar',
            height: 290,
            stacked: true,        
            zoom: {
                enabled: true
            }
        },
        responsive: [{
        breakpoint: 280,
        options: {
            legend: {
            position: 'bottom',
            offsetY: 0
            }
        }
        }],
        plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '50%',
        },
        },
        dataLabels: {
            enabled: false
        },
        yaxis: {
            labels: {
                offsetX: -15,
                formatter: (val) => {
                    return val / 1 + 'K'
                },
            },
            min: -30,
            max: 30,
            tickAmount: 6,
        },
        xaxis: {
            categories: [' 25 Jan ', '26 Jan', '27 Jan', '28 Jan',
            '29 Jan', '30 Jan' , '31 Jan'
            ],
        },
        legend: {show: false},
        fill: {
            opacity: 1
        }
    }
};

const statisticsChart = {
    series: [
      {
        name: "08 AM",
        data: [{
          x: '25 Jan',
          y: 0
        },
        {
          x: '26 Jan',
          y: 0
        }, 
        {
          x: '27 Jan',
          y: 2
        }, 
        {
          x: '28 Jan',
          y: 0
        },
        {
          x: '29 Jan',
          y: 0
        },
        {
          x: '30 Jan',
          y: 3
        },
      ]
      },
      {
        name: "10 Am",
        data: [{
          x: '25 Jan',
          y: 2
        },
        {
          x: '26 Jan',
          y: 0
        }, 
        {
          x: '27 Jan',
          y: 4
        }, 
        {
          x: '28 Jan',
          y: 3
        },
        {
          x: '29 Jan',
          y: 0
        },
        {
          x: '30 Jan',
          y: 0
        },
      ]
      },
      {
        name: "12 PM",
        data: [{
          x: '25 Jan',
          y: 0
        },
        {
          x: '26 Jan',
          y: 0
        }, 
        {
          x: '27 Jan',
          y: 3
        }, 
        {
          x: '28 Jan',
          y: 0
        },
        {
          x: '29 Jan',
          y: 0
        },
        {
          x: '30 Jan',
          y: 2
        },
      ]
      },
      {
        name: "02 PM",
        data: [{
          x: '25 Jan',
          y: 0
        },
        {
          x: '26 Jan',
          y: 1
        }, 
        {
          x: '27 Jan',
          y: 0
        }, 
        {
          x: '28 Jan',
          y: 5
        },
        {
          x: '29 Jan',
          y: 0
        },
        {
          x: '30 Jan',
          y: 0
        },
      ]
      },
      {
        name: "04 PM",        
        data: [{
          x: '25 Jan',
          y: 2
        },
        {
          x: '26 Jan',
          y: 0
        }, 
        {
          x: '27 Jan',
          y: 0
        }, 
        {
          x: '28 Jan',
          y: 0
        },
        {
          x: '29 Jan',
          y: 3
        },
        {
          x: '30 Jan',
          y: 0
        },
      ]
      },
      {
        name: "06 PM",      
        data: [{
          x: '25 Jan',
          y: 2
        },
        {
          x: '26 Jan',
          y: 0
        }, 
        {
          x: '27 Jan',
          y: 0
        }, 
        {
          x: '28 Jan',
          y: 0
        },
        {
          x: '29 Jan',
          y: 3
        },
        {
          x: '30 Jan',
          y: 0
        },
      ]
      },
      {
        name: "08 PM",    
        data: [{
          x: '25 Jan',
          y: 0
        },
        {
          x: '26 Jan',
          y: 4
        }, 
        {
          x: '27 Jan',
          y: 0
        }, 
        {
          x: '28 Jan',
          y: 0
        },
        {
          x: '29 Jan',
          y: 0
        },
        {
          x: '30 Jan',
          y: 1
        },
      ]
      },
      {
        name: "10 PM",    
        data: [{
          x: '25 Jan',
          y: 0
        },
        {
          x: '26 Jan',
          y: 0
        }, 
        {
          x: '27 Jan',
          y: 0
        }, 
        {
          x: '28 Jan',
          y: 0
        },
        {
          x: '29 Jan',
          y: 3
        },
        {
          x: '30 Jan',
          y: 3
        },
      ]
      },
    ],
    sline: {
        chart: {
        type: 'heatmap',
        height: 360,
        },
        plotOptions: {
            heatmap: {
            radius: 100,
            enableShades: false,
            colorScale: {
                ranges: [{
                    from: 0,
                    to: 0,
                    color: '#E7F1F3'
                },
                {
                    from: 1,
                    to: 20,
                    color: '#127384'
                },
                ],
            },
        
            }
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 5, 
            colors: ['#fff']
        },
        grid: {
            borderColor: '#333',
        strokeDashArray: 7,
        },
        xaxis: {
        lines: {
            show: false,
        }
        },
        grid: {
            show: false,
        xaxis: {
            lines: {
                show: false,
            }
            },
            padding: {
            top: -30,
            bottom: 0,
            left: 0,
            right: -20, // Minimize padding around the heatmap
            },
        },
        xaxis: {
            axisBorder: { show: false }, 
            axisTicks: { show: false } // ❌ Removes axis ticks
        },
        yaxis: {
            labels: {
            offsetX: -15, // Adjust horizontal alignment
            },
        },    
    }
}


export { reservationChart, earningChart, carChart, salesStatistics, statisticsChart }