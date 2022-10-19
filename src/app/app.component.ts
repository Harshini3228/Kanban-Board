import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('item') items: any;
  @ViewChild('column') column: any;
  public allTasks: any = [
    'Wash Clothes',
    'Meeting at 9 AM',
    'Sweep floor',
    'Make lunch'
  ];
  public inProgress: any = ['Complete Project'];
  public completed: any = ['Make Lunch'];
  public className: string = '';
  public dragFrom: string = '';
  public dragTo: string = '';
  public dragDisplay: boolean = false;
  public contentEditable: boolean = false;
  private index: number = 0;


  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    // console.log(this.items.nativeElement);

  }
  private dragItem = '';
  public start = false;
  public task: string = '';

  public dragStart(task: any, dragFrom: string, i: number) {
    this.dragFrom = dragFrom;
    this.dragItem = task;
    this.index = i;
  }
  public dragEnd(dragEnd: any) {

  }
  public dragLeave() {
    console.log('drag leave');
  }
  public dragOver(e: Event) {
    e.preventDefault();
  }
  public dragDrop(e: Event, dragTo: any) {
    console.log(this.dragFrom, dragTo);
    if (this.dragFrom != dragTo) {
      if (dragTo === 'inProgress') {
        this.inProgress.push(this.dragItem);
        (this.dragFrom === 'all') ? (this.allTasks.splice(this.index, 1)) : this.completed.splice(this.index, 1);

      }
      else if (dragTo === 'completed') {
        this.completed.push(this.dragItem);

        (this.dragFrom === 'all') ? (this.allTasks.splice(this.index, 1)) : this.inProgress.splice(this.index, 1);

      }
      else if (dragTo === 'all') {
        this.allTasks.push(this.dragItem);
        (this.dragFrom === 'inProgress') ? (this.inProgress.splice(this.index, 1)) : this.completed.splice(this.index, 1);
      }
    } else {
    }
  }
  public addTask() {
    console.log(this.task);
    this.allTasks.push(this.task);
    this.task = '';
  }
  public showInputBox(val: string) {
    if (val === 'all') {
      this.contentEditable = true;
    }
  }
  public hideInputBox(val: string) {
    if (val === 'all') {
      this.contentEditable = false;
    }
  }
}