import React from "react";
import Chart from "chart.js";

const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

const urlToPathname = (url) => {
  const u = new URL(url);
  return u.pathname;
};

const formatSize = (bytes, decimals = 1) => {
  if (!bytes) return "0 bytes";
  const k = 1024;
  const sizes = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (
    parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i]
  );
};

// class ShowSizeGraph extends React.PureComponent {
function ShowSizeGraph({ stylesheetContents, newTotalSize }) {
  React.useEffect(() => {
    const datasets = [];
    const colors = shuffleArray([
      "#ff0029",
      "#377eb8",
      "#66a61e",
      "#984ea3",
      "#00d2d5",
      "#ff7f00",
      "#af8d00",
      "#7f80cd",
      "#b3e900",
      "#c42e60",
      "#a65628",
      "#f781bf",
      "#8dd3c7",
      "#bebada",
      "#fb8072",
      "#80b1d3",
      "#fdb462",
      "#fccde5",
      "#bc80bd",
      "#ffed6f",
      "#c4eaff",
      "#cf8c00",
      "#1b9e77",
      "#d95f02",
      "#e7298a",
      "#e6ab02",
      "#a6761d",
      "#0097ff",
      "#00d067",
    ]);

    let i = 1;
    Object.keys(stylesheetContents).forEach((stylesheet) => {
      datasets.push({
        label: urlToPathname(stylesheet),
        backgroundColor: colors[i++],
        stack: "Before",
        data: [stylesheetContents[stylesheet].length, 0],
      });
    });
    datasets.push({
      label: "minimal",
      backgroundColor: colors[0],
      stack: "After",
      data: [0, newTotalSize],
    });

    const barChartData = {
      labels: ["Before", "After"],
      datasets: datasets,
    };

    const ctx = document.getElementById("sizegraph").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: barChartData,
      options: {
        title: {
          display: true,
          text: "Smaller bar(s) means less downloading time",
        },
        tooltips: {
          display: false,
          mode: "index",
          intersect: false,
          callbacks: {
            label: function (tooltipItem, data) {
              if (tooltipItem.yLabel === 0) {
                return null;
              }
              var label = data.datasets[tooltipItem.datasetIndex].label || "";
              if (label) {
                label += ": ";
              }
              label += formatSize(tooltipItem.yLabel, 0);
              return label;
            },
          },
        },
        legend: {
          display: false,
        },
        responsive: true,
        scales: {
          xAxes: [
            {
              stacked: true,
            },
          ],
          yAxes: [
            {
              stacked: true,
              ticks: {
                callback: (label) => formatSize(label, 0),
              },
            },
          ],
        },
      },
    });
  }, [newTotalSize, stylesheetContents]);

  return <canvas id="sizegraph" />;
}

export default ShowSizeGraph;
