import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styles: ['../../styles.sass']
})
export class AccueilComponent implements OnInit, AfterViewInit {

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
}
