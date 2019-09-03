export default (data, theme) => ({
    grid: [
        {
            left: '10%',
            right: '10%',
            top: '5%',
            height: '90%',
        },
        {
            left: '10%',
            right: '10%',
            bottom: '5%',
            height: '16%',
        },
    ],
    xAxis: [
        {
            type: 'category',
            show: true,
            scale: true,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#2F3961',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#2F3961',
                    type: 'solid',
                },
            },
            boundaryGap: false,
            data: data.map(({ x }) => x),
            axisLabel: {
                color: '#fff',
            },
            min: 'dataMin',
            max: 'dataMax',
        },
        {
            type: 'category',
            gridIndex: 1,
            data: data.map(({ x }) => x),
            scale: true,
            boundaryGap: false,
            axisLine: { onZero: false },
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false },
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax',
        },
    ],
    yAxis: [
        {
            type: 'value',
            position: 'right',
            scale: true,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#2F3961',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#2F3961',
                    type: 'solid',
                },
            },
            axisLabel: {
                color: '#fff',
            },
        },
        {
            type: 'value',
            position: 'left',
            scale: true,
            gridIndex: 1,
            splitNumber: 2,
            axisLine: { onZero: false },
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false },
        },
    ],
    axisPointer: {
        show: true,
        link: { xAxisIndex: 0, yAxisIndex: 0 },
        label: {
            backgroundColor: '#777',
        },
        lineStyle: {
            color: '#11AAD',
            type: 'dashed',
        },
        triggerTooltip: false,
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        triggerOn: 'click',
        axisPointer: {
            type: 'line',
            axis: 'x',
        },
    },
    dataZoom: [
        {
            type: 'inside',
            start: 50,
            end: 100,
            xAxisIndex: [0, 1],
        },
        {
            show: true,
            type: 'inside',
            start: 50,
            end: 100,
            xAxisIndex: [0, 1],
        },
    ],
    series: [
        {
            data: data.map(({ y }) => y),
            type: 'candlestick',
            itemStyle: {
                normal: {
                    color: '#1CA46B',
                    color0: '#CD3E60',
                    borderColor: null,
                    borderColor0: null,
                },
            },
            markPoint: {
                data: [
                    {
                        symbol: 'triangle', name: 'Close Long', xAxis: '13-08-2019', yAxis: 11605, symbolSize: 20, symbolRotate: 180, itemStyle: { color: '#CD3E60' },
                    },
                    {
                        symbol: 'triangle', name: 'Close Long', xAxis: '05-08-2019', yAxis: 11960, symbolSize: 20, itemStyle: { color: '#1CA46B' },
                    },
                    {
                        symbol: 'triangle', name: 'Close Long', xAxis: '27-06-2019', yAxis: 13340, symbolSize: 20, symbolRotate: 180, itemStyle: { color: '#CD3E60' },
                    },
                    {
                        symbol: 'triangle', name: 'Close Long', xAxis: '23-04-2019', yAxis: 5620, symbolSize: 20, itemStyle: { color: '#1CA46B' },
                    },
                ],
            },
            tooltip: {
                formatter (params) {
                    const param = params[0];
                    return [
                        `Date: ${param.name} <hr size=1 style="margin: 3px 0">`,
                        `Open: ${param.data[0]} <br/>`,
                        `Close: ${param.data[1]} <br/>`,
                        `Lowest: ${param.data[2]} <br/>`,
                        `Highest: ${param.data[3]} <br/>`,
                    ].join('');
                },
            },
        },
        {
            name: 'Volume',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#6987B9',
                    opacity: 0.5,
                },
                emphasis: {
                    color: '#6987B9',
                    opacity: 0.5,
                },
            },
            data: data.map(({ y }) => y),
        },
    ],
});
