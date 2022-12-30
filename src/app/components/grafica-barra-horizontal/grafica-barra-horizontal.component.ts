import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafica-barra-horizontal',
  templateUrl: './grafica-barra-horizontal.component.html',
  styleUrls: ['./grafica-barra-horizontal.component.css']
})
export class GraficaBarraHorizontalComponent implements OnDestroy{

  @Input() results: any[] = [];
  
  intervalo!:any;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  constructor() {
    // this.intervalo = setInterval(()=>{
    //   console.log("tick");
    //   const newResults = [...this.results];
    //   for(let i in newResults){
    //     newResults[i].value = Math.round(Math.random()*500);
    //   }
    //   this.results = [...newResults];
    // },1500)
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalo)
  }

  onSelect(event:any) {
    console.log(event);
  }
}