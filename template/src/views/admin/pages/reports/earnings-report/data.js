const expenseAnalysis = {
    series: [{
        name: "Sales Analysis",
        data: [300, 300, 300, 600, 600, 600, 550, 80, 100, 700, 700, 800]
    }],
    analysisChart: {
        chart: {
            height: 247,
            type: 'area',
            zoom: {
                enabled: false
            }
        },
        colors: ['#FF9F43'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: '',
            align: 'left'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
        yaxis: {
            min: 0,
            max: 800,
            tickAmount: 5,
            labels: {
                offsetX: -15,
                formatter: (val) => {
                    return `$${val}K`;
                }
            }
        },
    }

};

const projectReport = {
    series: [10, 20, 50],
    projectChart: {
        chart: {
            width: 171,
            type: 'pie',
        },
        labels: ['Maintenance Charges Collected', 'Late Fees & Extra', 'Rental Charges', 'Completed'], // Set your labels here
        colors: ['#0AB9A5', '#FFA633', '#AB47BC', '#03C95A'], // Custom colors for each segment
        dataLabels: {
            enabled: false // Disable data labels to remove numbers
        },
        legend: {
            show: false // Hide the legend
        },
        tooltip: {
            y: {
                formatter: function (value, { seriesIndex }) {
                    return 'Value: ' + value; // Customize the tooltip text
                }
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
};
export { expenseAnalysis,projectReport }