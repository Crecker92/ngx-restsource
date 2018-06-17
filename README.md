# ngx-restsource

ngx-restsource is an Angular 6+ service that provides a simple interface to develop RESTful clients.

Full documentation is available on the [ngx-restsource website](http://ngx-restsource.syderso.com/).

Feel free to submit pull requests and/or advices.

# Installation

ngx-restsource is available on npm: `$ npm i ngx-restsource --save`

# Usage

- Import the `RestsourceModule` and setup configurations:

```typescript
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
  ],
  imports: [
    RestsourceModule.forRoot(...),
  ]
})
export class AppModule {
}
```

- Inject the `RestsourceService` where needed and use it to perform API requests:

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  
  constructor(private restsource: RestsourceService) {
  }
  
  ngOnInit() {
      this.restsource.get(...).subscribe(...);
  }
}
``` 

# License

The MIT License (see `LICENSE` file or visit the [ngx-restsource website](http://ngx-restsource.syderso.com/) for more information).