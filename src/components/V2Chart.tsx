/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface ChartProps {
  data: any;
  chartType: any;
  options: any;
}

const V2Chart: FC<ChartProps> = ({
  data,
  chartType,
  options
}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = new Chart(chartRef.current, {
      type: chartType,
      data: data,
      options: options
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="w-full h-full">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default V2Chart;
