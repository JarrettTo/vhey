import React from "react";
import { AgencyFeatureTab, ExpertFeatureTab, FeatureTab } from "@/types/featureTab";
import Image from "next/image";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const FeaturesTabItem = ({ featureTab }: { featureTab: ExpertFeatureTab }) => {
  const { title, desc, image, imageDark,rate } = featureTab;
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const chartData = {
    labels: [ `${rate}% pass`],
    
    datasets: [
      {
        label: `Pass Rate`,
        data: [rate], // Use the rate value here
        backgroundColor: "#00ABFF", // Use Tailwind's primary color
        borderRadius: 20,
        borderWidth:0
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    indexAxis: "y",
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      x: {
        max: 100, // Assuming rate is a percentage (0-100)
        ticks: {
          color: "black", // Label color for x-axis
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      
        ticks: {
          color: "black", // Label color for y-axis
        },
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <>
      <div className="flex flex-row md:flex-col lg:flex-row justify-center gap-8 lg:gap-19">
      <div className="lg:w-1/3 w-3/3 flex flex-col items-center lg:items-start">
        <h2 className="mb-7 text-3xl text-black dark:text-white xl:text-sectiontitle2 md:text-start text-center">
          {title}
        </h2>
        <ul className="mb-5 list-none">
          {desc}
        </ul>
        <ul className="mb-5 list-none">
          <p className="text-5xl mt-10 text-primary font-bold">{rate}%</p>
          <p className="text-xl">Pass rate</p>
        </ul>
      </div>
        <div className="relative mx-auto hidden aspect-[9286/3773]  md:block md:w-3/3 lg:w-2/3">
        {/**@ts-ignore */}
          <Bar data={chartData} options={chartOptions} />

        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
