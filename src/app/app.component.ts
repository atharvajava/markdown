import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser';
import * as marked from 'marked';
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

   constructor(private _sanitizer: DomSanitizer){}

  markdown = app.markdown;
  preview=app.preview;
  change:any=app.state.mark;

  handleChange(event){
    
      var md = marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
      })
      this.change=md.parse((<HTMLInputElement>document.getElementById("area")).value);
  } 
}
