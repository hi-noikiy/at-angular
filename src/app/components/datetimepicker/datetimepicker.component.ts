import {Component, forwardRef, Input, OnInit} from '@angular/core';
import * as moment from 'moment'
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'atDatetimePicker',
  template: `<div class="at-datepicker">
  <div class="at-datepicker--panel">
    <div class="at-datepicker--panel--header">
      <div style="position: relative">
        <a *ngIf="atType == 'full'" (click)="preYear()" class="pre-year-btn">
        </a>
        <a *ngIf="atType == 'full'" (click)="preMonth()" class="pre-month-btn">
        </a>

        <a *ngIf="atType == 'year'" (click)="preCentury()" class="pre-year-btn">
        </a>


        <span class="current-select-label">
            <a (click)="setCal('month')" class="month-select">{{atMonth+1}}月</a>
            <a (click)="setCal('year')" class="year-select">{{atYear}}年</a>
          </span>

        <a *ngIf="atType == 'full'" (click)="nextMonth()" class="next-month-btn">
        </a>
        <a (click)="nextYear()" class="next-year-btn">
        </a>

        <a *ngIf="atType == 'year'" (click)="nextCenury()" class="next-year-btn">
        </a>

      </div>
    </div>
    <div class="at-datepicker--panel--body">
      <atCalendar (_clickDate)="clickDate($event)" (_clickYear)="clickYear($event)" (_clickMonth)="clickMonth($event)"
                  [atType]="atType"
                  [atYear]="atYear" [atMonth]="atMonth"
                  [atValue]="atValue"></atCalendar>

      <atTime></atTime>
    </div>
  </div>
</div>
`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatetimepickerComponent),
      multi: true
    }
  ],

})
export class DatetimepickerComponent implements OnInit {

  constructor() {
  }


  private _atType = 'full'


  get atType(): string {
    return this._atType;
  }

  @Input()
  set atType(value: string) {
    this._atType = value;
  }

  private _atValue = null

  get atValue() {
    return this._atValue || new Date();
  }

  set atValue(value) {
    this._atValue = value;
  }

  atYear = moment(this.atValue).year()

  atMonth = moment(this.atValue).month()

  selectedDate = moment(this.atValue).date();
  selectedYear = moment(this.atValue).year();
  selectedMonth = moment(this.atValue).month();

  // ngModel Access
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;

  @Input() format

  writeValue(value: any): void {
    this.updateDate(value);
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }


  ngOnInit() {
  }

  preYear() {
    this.atYear = this.atYear - 1;
  }

  nextYear() {
    this.atYear = this.atYear + 1;
  }

  preMonth() {
    if (this.atMonth - 1 < 0) {
      this.atMonth = 11;
      this.preYear();
    } else {
      this.atMonth = this.atMonth - 1;
    }
  }

  nextMonth() {
    if (this.atMonth + 1 > 11) {
      this.atMonth = 0;
      this.nextYear();
    } else {
      this.atMonth = this.atMonth + 1;
    }
  }

  clickDate(date) {
    this.updateDate(date)
    let change_date = this.atValue
    if (this.format) {
      change_date = change_date.format(this.format)
    }
    this.onChange(change_date)
  }

  updateDate(value) {
    if (this.atValue === value) {
      return;
    }
    this.atValue = value;
    this.selectedMonth = moment(this.atValue).month();
    this.selectedYear = moment(this.atValue).year();
    this.selectedDate = moment(this.atValue).date();
    this.atYear = moment(this.atValue).year();
    this.atMonth = moment(this.atValue).month();

  }

  clickMonth(month) {
    // this.atValue = moment(this.atValue).year(this.atYear).month(month.index).toDate();
    this.atMonth = month.index
    this.atType = 'full'
  }

  clickYear(year) {
    this.atYear = year
    this.atType = 'month'
  }

  setCal(s) {
    this.atType = s
  }

  preCentury() {
    this.atYear = this.atYear - 10
  }

  nextCenury() {
    this.atYear = this.atYear + 10
  }
}
