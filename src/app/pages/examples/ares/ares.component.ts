import { Component, OnInit, OnDestroy } from "@angular/core";
import Chart from "chart.js";
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: "app-ares",
  templateUrl: "ares.component.html"
})
export class aresComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  constructor() {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("ares");
    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "dark2",
      animationEnabled: true,
      exportEnabled: false,
      title:{
        text: "HANGUP REASON"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: {y} calls (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 642, name: "CUSTOMER" },
          { y: 492, name: "AGENT" },
          { y: 99, name: "QUEUETIMEOUT" },
          { y: 15, name: "ABANDON" },
          { y: 151, name: "NO ANSWER" }
        ]
      }]
    });
      
    chart.render();

    let stat = new CanvasJS.Chart("statusChart", {
      theme: "dark2",
      animationEnabled: true,
	title:{
		text: "CUSTOM STATUS ",
		horizontalAlign: "left"
	},
	data: [{
		type: "doughnut",
		startAngle: 60,
		indexLabelFontSize: 17,
		indexLabel: "{label} - #percent%",
		toolTipContent: "<b>{label}:</b> {y} (#percent%)",
		dataPoints: [
			{ y: 1129, label: "Categoria1" },
			{ y: 0, label: "Categorias 2 a 7" }
		]
	}]
});
    stat.render();

    let cat = new CanvasJS.Chart("categoriaChart", {
      theme: "dark2",
      animationEnabled: true,
	title:{
		text: "Llamadas por categoria ",
		horizontalAlign: "left"
	},
	data: [{
		type: "doughnut",
		startAngle: 60,
		indexLabelFontSize: 17,
		indexLabel: "{label} - #percent%",
		toolTipContent: "<b>{label}:</b> {y} (#percent%)",
		dataPoints: [
			{ y: 1129, label: "Categoria 1" },
      { y: 266, label: "Undefined" },
      { y: 4, label: "NA" }
		]
	}]
});
cat.render();

    let idchart = new CanvasJS.Chart("idChart", {
      animationEnabled: true,
      exportEnabled: false,
      theme: "dark2",
      title: {
        text: "ID list calls"
      },
      axisY:{
        tickLength: 10,
        interval: 200
      
      },

      data: [{
        type: "column",
        dataPoints: [
          { y: 13, label: "995" },
          { y: 1, label: "998" },
          { y: 9, label: "Lista1" },
          { y: 5, label: "Lista 2" },
          { y: 1, label: "Lista 3" },
          { y: 2, label: "Lista 4" },
          { y: 580, label: "Lista 5" },
          { y: 780, label: "Lista 6" },
          ]
      }]
    });
      
    idchart.render();

    var marksData = {
      labels: ["Tiempo Total", "Tiempo promedio", "Calls/hour", "Agent Calls/hour"],
      datasets: [{
        label: "UNDEFINED",
        backgroundColor: "rgba(200,0,0,0.2)",
        data: [2036, 7.65, 3.07, 1.23]
      }, {
        label: "Categoria 1",
        backgroundColor: "rgba(0,0,200,0.2)",
        data: [75,884, 138, 3.72, 1.50]
      },
      {
        label: "N/A",
        backgroundColor: "rgba(0,0,200,0.2)",
        data: [108, 27, .18, .1]
      }
    
    ]
    };


    var canvas2: any = document.getElementById("callChart");
    var ctx2 = canvas2.getContext("2d");
    var gradientFill = ctx2.createLinearGradient(0, 350, 0, 50);
    gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
    gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
    var callChart = new Chart(ctx2, {
      type: "line",
      responsive: true,
      data: {
        labels: [
          "AB",
          "ADC",
          "ANRFM",
          "CC-T",
          "DISPO",
          "DROP",
          "FB",
          "FS",
          "GT-T",
          "ILO-T",
          "INCALL",
          "LCNT",
          "LCNV",
          "NC",
          "NOCAL",
          "PD",
          "PP-DP",
          "REN-T"

        ],
        datasets: [
          {
            label: "",
            fill: true,
            backgroundColor: gradientFill,
            borderColor: "#e44cc4",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#e44cc4",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#be55ed",
            //pointHoverBorderColor:'rgba(35,46,55,1)',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [50,90,1,59,4,114,436,2,41,3,4,1,20,420,90,5,4,23,24]
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },

        tooltips: {
          backgroundColor: "#fff",
          titleFontColor: "#ccc",
          bodyFontColor: "#666",
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        responsive: true,
        scales: {
          yAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(0,0,0,0.0)",
                zeroLineColor: "transparent"
              },
              ticks: {
                display: true,
                suggestedMin: 5,
                suggestedMax: 228,
                padding: 20,
                fontColor: "#9a9a9a",
                callback: function(value, index, values) {
                  return value+" llamadas";
              }
            }
          }
          ],

          xAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(0,0,0,0)",
                zeroLineColor: "transparent"
              },
              ticks: {
                padding: 20,
                fontColor: "#9a9a9a"
              }
            }
          ]
        }
      }
    });

    
    

    
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("ares");
  }
}
