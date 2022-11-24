import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {SmartphoneService} from "../../services/smartphone.service";

@Component({
  selector: 'app-create-smartphone',
  templateUrl: './create-smartphone.component.html',
  styleUrls: ['./create-smartphone.component.css']
})
export class CreateSmartphoneComponent implements OnInit{
  smartphoneForm: FormGroup = new FormGroup({
    producer: new FormControl(),
    price: new FormControl(),
    model: new FormControl(),
  });

  constructor(private smartphoneSerivce: SmartphoneService) {
  }

  ngOnInit() {
  }

  submit() {
    const smartphone = this.smartphoneForm.value;
    this.smartphoneSerivce.saveSmartphone(smartphone).subscribe(() => {
      this.smartphoneForm.reset();
      alert('Tạo thành công');
    }, e => {
      console.log(e);
    });
  }
}
