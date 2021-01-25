import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  //timer clock
  timer:string = "00:00:00"
  timeState: any = false;
  totalSeconds: number;

  stopwatch:string = "00:00:00";
  stopwatchTotalSeconds: number = 0;
  stopwatchState: any = false;

  startTimer(){
    const timeSplit = this.timer.split(":")
    const hours:number = parseInt(timeSplit[0]);
    const minutes:number = parseInt(timeSplit[1]);
    const seconds:number = parseInt(timeSplit[2]);

    this.totalSeconds = Math.floor(hours*60*60) + Math.floor(minutes * 60) + seconds;

    if(this.totalSeconds !== 0){
      this.timeState = setInterval( ()=>{
        this.totalSeconds--;
        this.timer = this.displayTime(this.totalSeconds);
        if(this.totalSeconds === 0) this.stopTimer();
      },1000
      )
    }
  }

  stopTimer() {
      clearInterval(this.timeState);
      this.timeState = false;
      // this.totalSeconds = 0;
  }

  displayTime(time){
      const hours:number = Math.floor(time / 3600);
      const minutes:number = Math.floor((time % (3600)) / 60);
      const seconds:number = Math.floor((time % 60) % 60);
      const realTime = this.format(hours) + ":" + this.format(minutes) + ":" + this.format(seconds);
      return realTime;
  }

  format(time){
    if(time < 10) {
      return "0" + time;
    }
    else return time;
  }

  startStopwatch(){
      this.stopwatchState = setInterval( ()=>{
        this.stopwatchTotalSeconds++;
        this.stopwatch = this.displayTime(this.stopwatchTotalSeconds);
      },1000
      )
  }

  stopStopwatch(){
    clearInterval(this.stopwatchState);
      this.stopwatchState = false;
      this.stopwatch = "00:00:00";
			this.stopwatchTotalSeconds = 0;
  }
}