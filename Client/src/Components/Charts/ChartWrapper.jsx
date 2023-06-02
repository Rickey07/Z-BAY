import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const ChartWrapper = ({ type, dataset , data}) => {

const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  
  return (
      <Bar
        data={data}
        options={options}
        height={50}
      />
  );
};

export default ChartWrapper;
