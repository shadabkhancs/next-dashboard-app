'use client'

import { useEffect } from "react";
import { Chart } from "chart.js";

// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

interface PieChartProps {
    width: string;
    height: number;
}

function PieChart({ width, height }: PieChartProps) {

    useEffect(() => {
        var ctx = document.getElementById("myPieChart") as HTMLCanvasElement;
        var myPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Blue", "Red", "Yellow", "Green"],
                datasets: [{
                    data: [12.21, 15.58, 11.25, 8.32],
                    backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
                }],
            },
        });
    }, []);

    return (
        <canvas id="myPieChart" width={width} height={height} />
    )
}

export default PieChart