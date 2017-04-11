import { Component,Input,Output } from '@angular/core';
const app={
  markdown:"Markdown",
  preview:"Preview",
  state:{
    mark:'Hi'
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  markdown = app.markdown;
  preview=app.preview;
  change:any=app.state.mark;
  handleChange(){
      this.change=(<HTMLInputElement>document.getElementById("area")).value;
  }
}
