import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Passanger } from "../../models/passanger.interface";

@Component({
  selector: "passanger-detail",
  styleUrls: ["passanger-detail.component.scss"],
  templateUrl: "./passanger-detail.component.html",
})
export class PassangerDetailComponent {
  @Input()
  detail: Passanger;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;
  constructor() {}

  onNameChange(value: string) {
    this.detail.fullname = value;
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}
