import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss'],
})
export class Pagina1Component
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("ngOnChanges");
    return;
  }

  ngDoCheck(): void {
    // console.log("ngDoCheck");
    return;
  }

  ngAfterContentChecked(): void {
    // console.log("ngAfterContentChecked");
    return;
  }

  ngAfterViewInit(): void {
    // console.log("ngAfterViewInit");
    return;
  }

  ngAfterViewChecked(): void {
    // console.log("ngAfterViewChecked");
    return;
  }

  ngOnDestroy(): void {
    // console.log("ngOnDestroy");
    return;
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
}
