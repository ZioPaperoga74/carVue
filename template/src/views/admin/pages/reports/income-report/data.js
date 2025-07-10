const incomeExpenseChart = {
    series: [{
        name: 'Sales',
        data: [25, 25, 28, 27, 15, 25, 22],
    }, {
        name: 'Purchase',
        data: [-9, -25, -5, -10, -10, -25, -5]
    }],
    expenseChart: {
        colors: ['#FFA633', '#FFDBAD'],
        chart: {
            type: 'bar',
            height: 270,
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
                borderRadius: 0,
                borderRadiusApplication: "end", // "around" / "end" 
                borderRadiusWhenStacked: "all", // "all"/"last"
                columnWidth: '70%',
            },
        },
        dataLabels: {
            enabled: false
        },

        xaxis: {
            categories: ['25 Jan ', '26 Jan', '27 Jan', '28 Jan',
                '29 Jan', '30 Jan', '31 Jan'
            ],
        },
        yaxis: {
            min: -30,
            max: 30,
            tickAmount: 6,
            labels: {
                offsetX: -15,
                formatter: (data) => {
                    return data / 1 + 'K'
                }
            }
        },
        grid: {
            borderColor: '#E5E7EB',
            strokeDashArray: 5,
            padding: {
                left: -16,
                top: 0,
                bottom: 0,
                right: 0,
            },
        },
        legend: { show: false },
        fill: {
            opacity: 1
        }
    }
};

export { incomeExpenseChart }