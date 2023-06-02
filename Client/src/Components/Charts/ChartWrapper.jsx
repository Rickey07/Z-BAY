import React from "react";
import { Bar, Chart as ChartCopy } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const ChartWrapper = ({ type, dataset, data, options }) => {
  return <ChartCopy type={type} data={data} options={options} height={100} />;
};

export default ChartWrapper;
