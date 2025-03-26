/*
 * =========================================================
 * Glassmorphic Dashboard
 * =========================================================
 * 
 * Created by Muhammad Fahru Rozi
 * 
 * This script provides the interactive functionality for the
 * Glassmorphic Dashboard, handling responsive behavior, 
 * sidebar toggling, chart rendering, and mobile optimizations.
 * 
 * =========================================================
 */

const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("mainContent");
const toggleBtn = document.getElementById("toggleBtn");
const toggleIcon = document.getElementById("toggleIcon");

const mobileToggle = document.getElementById("mobileToggle");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const searchIcon = document.getElementById("searchIcon");
const mobileSearchWrapper = document.getElementById("mobileSearchWrapper");

mobileToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  sidebarOverlay.classList.toggle("active");
  
  if (sidebar.classList.contains("open")) {
    mobileToggle.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

searchIcon.addEventListener("click", () => {
  mobileSearchWrapper.classList.toggle("active");
  if (mobileSearchWrapper.classList.contains("active")) {
    setTimeout(() => {
      mobileSearchWrapper.querySelector("input").focus();
    }, 100);
  }
});

sidebarOverlay.addEventListener("click", () => {
  if (window.innerWidth <= 768 && sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("active");
    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

window.addEventListener("resize", () => {
  initializeMobileState();
  
  if (window.innerWidth <= 768) {
    sidebar.classList.remove("collapsed");
    mainContent.classList.remove("expanded");
    
    if (!sidebar.classList.contains("open")) {
      mobileToggle.style.left = "20px";
      mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
      sidebarOverlay.classList.remove("active");
    }
  } else {
    if (sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
      sidebarOverlay.classList.remove("active");
      mobileToggle.style.left = "20px";
    }
  }
  
  if (typeof barChart !== 'undefined' && typeof pieChart !== 'undefined') {
    barChart.render();
    pieChart.render();
  }

  if (window.innerWidth > 768 && mobileSearchWrapper.classList.contains("active")) {
    mobileSearchWrapper.classList.remove("active");
  }
});

document.addEventListener("click", (event) => {
  const isClickInside = mobileSearchWrapper.contains(event.target) || searchIcon.contains(event.target);
  
  if (!isClickInside && mobileSearchWrapper.classList.contains("active")) {
    mobileSearchWrapper.classList.remove("active");
  }
});

function initializeMobileState() {
  if (window.innerWidth <= 768) {
    sidebar.classList.remove("collapsed");
    sidebar.classList.remove("open");
    mainContent.classList.remove("expanded");
    toggleIcon.className = "fas fa-bars";
    
    if (mobileToggle) {
      mobileToggle.style.left = "20px";
      mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
    
    if (sidebarOverlay) {
      sidebarOverlay.classList.remove("active");
    }
    
    toggleBtn.style.left = "20px";
    toggleBtn.style.right = "auto";
    
  } else {
    toggleIcon.className = "fas fa-chevron-left";
    toggleBtn.style.left = "";
    toggleBtn.style.right = "-15px";
    
  }
}

document.addEventListener("DOMContentLoaded", function() {
  initializeMobileState();
});

initializeMobileState();

toggleBtn.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle("open");
    
    if (sidebar.classList.contains("open")) {
      toggleIcon.className = "fas fa-chevron-left";
      toggleBtn.style.left = "240px";
    } else {
      toggleIcon.className = "fas fa-bars";
      toggleBtn.style.left = "20px";
    }
    
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      document.body.style.overflow = "";
    }, 50);
  } else {
    sidebar.classList.toggle("collapsed");
    mainContent.classList.toggle("expanded");
    
    if (sidebar.classList.contains("collapsed")) {
      toggleIcon.className = "fas fa-chevron-right";
    } else {
      toggleIcon.className = "fas fa-chevron-left";
    }
  }

  setTimeout(() => {
    window.dispatchEvent(new Event("resize"));
  }, 300);
});

window.addEventListener("resize", () => {
  initializeMobileState();
  
  if (window.innerWidth <= 768) {
    sidebar.classList.remove("collapsed");
    mainContent.classList.remove("expanded");
    
    if (!sidebar.classList.contains("open")) {
      mobileToggle.style.left = "20px";
      mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
      sidebarOverlay.classList.remove("active");
    }
  } else {
    if (sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
      sidebarOverlay.classList.remove("active");
      mobileToggle.style.left = "20px";
    }
  }
  
  if (typeof barChart !== 'undefined' && typeof pieChart !== 'undefined') {
    barChart.render();
    pieChart.render();
  }
});

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".menu-item.active").classList.remove("active");
    item.classList.add("active");
  });
});

const chartTabs = document.querySelectorAll(".chart-tab");

chartTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelector(".chart-tab.active").classList.remove("active");
    tab.classList.add("active");

    const period = tab.getAttribute("data-period");
    updateBarChart(period);
  });
});

const monthlyData = [
  { x: "Jan", y: 25 },
  { x: "Feb", y: 35 },
  { x: "Mar", y: 45 },
  { x: "Apr", y: 40 },
  { x: "May", y: 50 },
  { x: "Jun", y: 65 },
  { x: "Jul", y: 75 },
  { x: "Aug", y: 85 },
  { x: "Sep", y: 80 },
  { x: "Oct", y: 95 },
  { x: "Nov", y: 100 },
  { x: "Dec", y: 85 },
];

const weeklyData = [
  { x: "Week 1", y: 44 },
  { x: "Week 2", y: 55 },
  { x: "Week 3", y: 57 },
  { x: "Week 4", y: 56 },
];

const dailyData = [
  { x: "Mon", y: 24 },
  { x: "Tue", y: 28 },
  { x: "Wed", y: 42 },
  { x: "Thu", y: 36 },
  { x: "Fri", y: 40 },
  { x: "Sat", y: 30 },
  { x: "Sun", y: 25 },
];

let barChartOptions = {
  series: [
    {
      name: "Revenue",
      data: monthlyData.map((item) => item.y),
    },
  ],
  chart: {
    type: "bar",
    height: 300,
    toolbar: {
      show: false,
    },
    background: "transparent",
    redrawOnWindowResize: true,
    redrawOnParentResize: true,
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        chart: {
          width: "100%",
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      borderRadius: 5,
      columnWidth: "50%",
      distributed: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    borderColor: "rgba(255, 255, 255, 0.1)",
    strokeDashArray: 5,
    position: "back",
  },
  xaxis: {
    categories: monthlyData.map((item) => item.x),
    labels: {
      style: {
        colors: Array(12).fill("rgba(255, 255, 255, 0.7)"),
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: ["rgba(255, 255, 255, 0.7)"],
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.4,
      gradientToColors: ["#4338ca"],
      inverseColors: false,
      opacityFrom: 0.9,
      opacityTo: 0.6,
      stops: [0, 100],
    },
  },
  tooltip: {
    theme: "dark",
  },
  legend: {
    show: false,
  },
  theme: {
    mode: "dark",
  },
};

const barChart = new ApexCharts(document.querySelector("#barChart"), barChartOptions);
barChart.render();

function updateBarChart(period) {
  let newData;

  switch (period) {
    case "weekly":
      newData = weeklyData;
      break;
    case "daily":
      newData = dailyData;
      break;
    default:
      newData = monthlyData;
  }

  barChart.updateOptions({
    xaxis: {
      categories: newData.map((item) => item.x),
      labels: {
        style: {
          colors: Array(newData.length).fill("rgba(255, 255, 255, 0.7)"),
        },
      },
    },
  });

  barChart.updateSeries([
    {
      name: "Revenue",
      data: newData.map((item) => item.y),
    },
  ]);
}

const pieChartOptions = {
  series: [42, 28, 18, 12],
  chart: {
    type: "donut",
    height: 300,
    background: "transparent",
    redrawOnWindowResize: true,
    redrawOnParentResize: true,
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        chart: {
          width: "100%",
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
  labels: ["Online Store", "Social Media", "Referrals", "Direct"],
  colors: ["#4338ca", "#8b5cf6", "#a855f7", "#d946ef"],
  plotOptions: {
    pie: {
      donut: {
        size: "70%",
        background: "transparent",
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: "14px",
            color: "rgba(255, 255, 255, 0.9)",
          },
          value: {
            show: true,
            fontSize: "16px",
            color: "rgba(255, 255, 255, 0.9)",
            formatter: function (val) {
              return val + "%";
            },
          },
          total: {
            show: true,
            label: "Total",
            color: "rgba(255, 255, 255, 0.9)",
            formatter: function (w) {
              return w.globals.seriesTotals.reduce((a, b) => a + b, 0) + "%";
            },
          },
        },
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: "bottom",
    horizontalAlign: "center",
    labels: {
      colors: Array(4).fill("rgba(255, 255, 255, 0.7)"),
    },
  },
  tooltip: {
    theme: "dark",
    y: {
      formatter: function (value) {
        return value + "%";
      },
    },
  },
  stroke: {
    width: 2,
    colors: ["transparent"],
  },
  theme: {
    mode: "dark",
  },
};

const pieChart = new ApexCharts(document.querySelector("#doughnutChart"), pieChartOptions);
pieChart.render();