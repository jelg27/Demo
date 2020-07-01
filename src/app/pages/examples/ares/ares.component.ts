import { Component, OnInit, OnDestroy } from "@angular/core";

import * as CanvasJS from './canvasjs.min';
import { STATUS_CODES } from 'http';

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
      exportEnabled: true,
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

    let idchart = new CanvasJS.Chart("idChart", {
      animationEnabled: true,
      exportEnabled: true,
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

    let agents = new CanvasJS.Chart("agentsChart", {
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    display: false
                }
            }]
        }
    },
      zoomEnabled: true,
      animationEnabled: true,
      theme: "dark2",
      exportEnabled: true,
      title: {
        text: "Promedio de duracion de llamada (segundos)"
      },
      subtitles:[{
        text: "Por numero de agente"
      }],
      data: [
      {
        type: "line",                
        dataPoints: [
          { y: 57, label: "Agente 1" }, 
          { y: 9, label: "Agente 2" }, 
          { y: 13, label: "Agente 3" }, 
          { y: 15, label: "Agente 4" }, 
          { y: 23, label: "Agente 5" }, 
          { y: 88, label: "Agente 6" }, 
          { y: 8, label: "Agente 7" }, 
          { y: 48, label: "Agente 8" }, 
          { y: 46, label: "Agente 9" }, 
          { y: 46, label: "Agente 10" }, 
          { y: 58, label: "Agente 11" }, 
          { y: 90, label: "Agente 12" }, 
          { y: 68, label: "Agente 13" }, 
          { y: 46, label: "Agente 14" }, 
          { y: 40, label: "Agente 15" }, 
          { y: 87, label: "Agente 16" }, 
          { y: 78, label: "Agente 17" }, 
          { y: 88, label: "Agente 18" }, 
          { y: 70, label: "Agente 19" }, 
          { y: 76, label: "Agente 20" }, 
          { y: 228, label: "Agente 21" }, 
          { y: 57, label: "Agente 22" }, 
          { y: 21, label: "Agente 23" }, 
          { y: 20, label: "Agente 24" }, 
          { y: 30, label: "Agente 25" }, 
          { y: 5, label: "Agente 26" }
 ]

      }]
    });
      
    agents.render();
    
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("ares");
  }
}
