import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { interval } from 'rxjs';


export interface Data {
  label: string;
  values: [number,number][];
  color: string;
  style: "line" | "area" | "both";
  interpolation: "linear" | "step";
}
export interface DATA<T>{

  timestamp: number;

  value: T;

  sensorId: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  [x: string]: any;
  
  
  public datatest: Data[] = [];
  public datatestStyle: Data[] = [];
  public datatestInterpolation: Data[] = [];
  public datatestTooltips: Data[] = [];
  public datatestZoom: Data[] = [];

  public dat1: Data[] = []; 
  public dat2: Data[] = [];
  public dat3: Data[] = [];
  public dat4: Data[] = [];
  public dat41: Data[] = [];
  public dat42: Data[] = [];
  public dat5: Data[] = [];
  public dat51: Data[] = [];
  public dat6: Data[] = [];
  public dat7: Data[] = [];
  public dat8: Data[] = [];
  public dat9: Data[] = [];
  public dat10: Data[] = [];
  public dat11: Data[] = [];
  public range: [number,number]= [0,0];
  public currentTime: number = 0;
  public currentTime2: number = 0;
  public currentTime3: number = 0;
  public subscription: any;
  public porte: boolean = false;

  constructor(private DataServ: DataServiceService ) {
    this.generateData();
  }

  private parseBool(s: string) {
    if(s=="ON") return 1;
    else if (s=="OFF") return 0;
    else return -1;
  }
 
  public ngOnInit(): void {
    
  }

  public lire(): void {
    const secondsCounter = interval(1000);
    this.subscription = secondsCounter.subscribe(() => { this.current2(1); console.log("je tourne") });
  }

  public lire2(): void {
    if (this.porte == false) {
      const secondsCounter = interval(1000);
      this.subscription = secondsCounter.subscribe(() => { this.current(1); console.log("je tourne") });
      this.porte = true;
    }
  }

  public arreter(): void {
    this.subscription.unsubscribe();
    this.porte = false;
  }  
  private generateData(){
    let d1: DATA<number>[] = this.DataServ.parse<number>(this.DataServ.str,"PC6", this.parseBool);
    let v1: [number,number][] = [];
    d1.forEach(element =>v1.push([element.timestamp,element.value]));
    let da1: Data = {
      label: "PC6",
      values: v1,
      color: "#123568",
      style: "both",
      interpolation: "step"
    }
    let d2: DATA<number>[] = this.DataServ.parse<number>(this.DataServ.str,"PC5", this.parseBool);
    let v2: [number,number][] = [];
    d2.forEach(element =>v2.push([element.timestamp,element.value]));
    let x:number = 0;
    v2.forEach(element=> {
      element[1]=x;
      x=this.getRandomInt(x);
    }
      );
    let da2: Data = {
      label: "PC5",
      values: v2,
      color: "pur",
      style: "line",
      interpolation: "step"
    }
    let d3: DATA<number>[] = this.DataServ.parse<number>(this.DataServ.str,"PC5", this.parseBool);
    let v3: [number,number][] = [];
    d3.forEach(element =>v3.push([element.timestamp,element.value]));
    let da3: Data = {
      label: "Presence_Salon",
      values: v3,
      color: "pink",
      style: "line",
      interpolation: "step"
    }

    let d41: DATA<number>[] = this.DataServ.parse<number>(this.DataServ.str,"Temperature_Salon",  parseFloat);
    let v41: [number,number][] = [];
    d41.forEach(element =>v41.push([element.timestamp,element.value]));
    let da41: Data = {
      label: "Temperature_Salon",
      values: v41,
      color: "purple",
      style: "area",
      interpolation: "linear"
    }

    let d42: DATA<number>[] = this.DataServ.parse<number>(this.DataServ.str,"Temperature_Salon",  parseFloat);
    let v42: [number,number][] = [];
    d42.forEach(element =>v42.push([element.timestamp,element.value]));
    let da42: Data = {
      label: "Temperature_Salon",
      values: v42,
      color: "purple",
      style: "both",
      interpolation: "linear"
    }

    let d4: DATA<number>[] = this.DataServ.parse<number>(this.DataServ.str,"Temperature_Salon",  parseFloat);
    let v4: [number,number][] = [];
    d4.forEach(element =>v4.push([element.timestamp,element.value]));
    let da4: Data = {
      label: "Temperature_Salon",
      values: v4,
      color: "purple",
      style: "line",
      interpolation: "linear"
    }

    let d5: DATA<number>[] = this.DataServ.parse<number>(this.DataServ.str,"Temperature_Cuisine",  parseFloat);
    let v5: [number,number][] = [];
    d5.forEach(element =>v5.push([element.timestamp,element.value]));
    let da5: Data = {
      label: "Temperature_Cuisine",
      values: v5,
      color: "gold",
      style: "line",
      interpolation: "step"
    }

    let d51: DATA<number>[] = this.DataServ.parse<number>(this.DataServ.str,"Temperature_Cuisine",  parseFloat);
    let v51: [number,number][] = [];
    d51.forEach(element =>v51.push([element.timestamp,element.value]));
    let da51: Data = {
      label: "Temperature_Cuisine",
      values: v51,
      color: "gold",
      style: "line",
      interpolation: "linear"
    }

    let d6: DATA<number>[] = this.DataServ.parse<number>(this.DataServ.str,"Presence_Cuisine",  this.parseBool);
    let v6: [number,number][] = [];
    d6.forEach(element =>v6.push([element.timestamp,element.value]));
    let da6: Data = {
      label: "Presence_Cuisine",
      values: v6,
      color: "purple",
      style: "both",
      interpolation: "step"
    }

    let d7: DATA<number>[] = this.DataServ.parse<number>(this.DataServ.str,"Presence_SDB",  this.parseBool);
    let v7: [number,number][] = [];
    d7.forEach(element =>v7.push([element.timestamp,element.value]));
    let da7: Data = {
      label: "Presence_SDB",
      values: v7,
      color: "black",
      style: "area",
      interpolation: "step"
    }

    let d8: DATA<number>[] = this.DataServ.parse<number>(this.DataServ.str2,"SPA",  parseFloat);
    let v8: [number,number][] = [];
    d8.forEach(element =>v8.push([element.timestamp,element.value]));
    let da8: Data = {
      label: "SPA",
      values: v8,
      color: "black",
      style: "area",
      interpolation: "step"
    }

    let d9: DATA<number>[] = this.DataServ.parse<number>(this.DataServ.str3,"SPA",  parseFloat);
    let v9: [number,number][] = [];
    d9.forEach(element =>v9.push([element.timestamp,element.value]));
    let da9: Data = {
      label: "SPA",
      values: v9,
      color: "black",
      style: "area",
      interpolation: "step"
    }

    let d10: DATA<number>[] = this.DataServ.parse<number>(this.DataServ.str4,"SPA", this.parseBool);
    let v10: [number,number][] = [];
    d10.forEach(element =>v10.push([element.timestamp,element.value]));
    let da10: Data = {
      label: "SPA",
      values: v10,
      color: "black",
      style: "area",
      interpolation: "step"
    }
    
    
    this.dat2.push(da1);
    this.dat1.push(da2);
    this.dat4.push(da4);
    this.dat41.push(da41);
    this.dat42.push(da42);
    this.dat3.push(da3);
    this.dat3.push(da1);
    this.dat3.push(da2);
    this.dat5.push(da5);
    this.dat51.push(da51);
    this.dat6.push(da6);
    this.dat7.push(da7);
    this.dat8.push(da8);
    this.dat9.push(da9);
    this.dat10.push(da10);
    this.dat11.push(da8);
    this.dat11.push(da9);
    this.currentTime2 = this.dat4[0].values[0][0];
    this.currentTime3 = this.dat4[0].values[0][0];
  }

  public updateRange(rangeChange: [number,number]){
    this.range=rangeChange;
  }

  public updateCurrentTime(currentTimeChange: number ){
    this.currentTime = currentTimeChange;
  }

  public updateCurrentTime2(currentTimeChange: number ){
    this.currentTime2 = currentTimeChange;
  }
  
  public change(i: number){
    if(i==1) this.datatest = this.dat5;
    if(i==2) this.datatest = this.dat6;
    if(i==3) this.datatest = this.dat1;
  }

  public change2(i: number) {
    if (i == 1) this.datatestStyle = this.dat4;
    if (i == 2) this.datatestStyle = this.dat41;
    if (i == 3) this.datatestStyle = this.dat42;
  }
  
  public change3(i: number) {
    if (i == 1) this.datatestInterpolation = this.dat5;
    if (i == 2) this.datatestInterpolation = this.dat51;
  }

  public change4(i: number) {
    if (i == 1) this.datatestTooltips = this.dat8;
    if (i == 2) this.datatestTooltips  = this.dat9;
    if (i == 3) this.datatestTooltips = this.dat10;
  }

  public change5(i: number) {
    if (i == 1) this.datatestZoom= this.dat10;
    if (i == 2) this.datatestZoom  = this.dat11;
  }

  

  public current(i: number) {
    if (i == 1) this.currentTime2 = this.currentTime2 + 1000000;
    if (i == 2) this.currentTime2 = this.currentTime2 - 1000000;
  }

  public current2(i: number) {
    if (i == 1) this.currentTime3 = this.currentTime3 + 1000000;
    if (i == 2) this.currentTime3 = this.currentTime3 - 1000000;
  }

  private getRandomInt(x:number){
    let alea: number;
    if(x==0){
      return 1;
    }else{
      alea=Math.round(Math.random());
      if(alea==0){
        return x-1;
      }else{
        return x+1;
      }
    }
  }
}
