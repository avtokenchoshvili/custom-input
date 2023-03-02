import { Component ,forwardRef, HostBinding, Input} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-cutom-input',

  styleUrls: ['./cutom-input.component.css'],
  templateUrl: 'cutom-input.component.html',
  providers: [
    {       provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CutomInputComponent),
      multi: true
    }
  ]
})

export class CutomInputComponent implements ControlValueAccessor {
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.onChange(file);
  }
  showInput:boolean = false;
  constructor(){}
  onChange: any = () => {};
  onTouch: any = () => {};
  val= "";

  @Input() inputType!: string;
  @Input() type: string = 'text';

  set value(val:any){ // this value is updated by programmatic changes
  if  (val!==undefined && this.val !==val){
      this.val=val
      this.onChange(val)
      this.onTouch(val)
    }
  }












  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn:any ): void {
    this.onChange = fn;
  }

  registerOnTouched(fn:any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // TODO: Implement this method
  }
}
