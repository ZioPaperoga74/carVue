const totalBookingsChart = {
    series: [{
        name: "Bookings",
        data: [750, 400, 580, 230, 580, 100, 410, 750, 600, 250, 470, 630]
    }],
    bookingChart: {
        chart: {
            height: 350,
            type: 'bar',
            zoom: {
                enabled: false
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                horizontal: false,
                endingShape: 'rounded'
            },
        },
        colors: ['#fff'],
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
                formatter: (val) => {
                    return `$${val}`;
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'vertical',
                shadeIntensity: 0.35,
                gradientToColors: ['#FF9F43'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
            }
        },
    }

};

var rentalChart = {
    series: [70, 30, 10],
    totalChart: {
        chart: {
            type: 'donut',
        },
        colors: ['#0AB9A5', '#FF0000', '#FFA633'],
        labels: ['Ferrari 458 MM', 'Ford Endeavour', 'Ford Mustang'],

        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270,
                stroke: {
                    show: true,
                    width: 10,
                    colors: ['#FFFFFF']
                },

            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        annotations: {
            position: 'front',
            style: {
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#000000'
            },
            text: {
                text: '+14%',
                background: {
                    enabled: true,
                    foreColor: '#FFFFFF',
                    border: '#000000',
                    borderWidth: 1,
                    borderRadius: 2,
                    opacity: 0.7
                }
            },
            x: '50%',
            y: '50%',
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    show: false
                }
            }
        }]
    }
};

export { totalBookingsChart, rentalChart }