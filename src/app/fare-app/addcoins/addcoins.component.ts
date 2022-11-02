import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { CommonService } from '../services/common/common.service';
import { PaymentService } from '../services/payment/payment.service';


@Component({
  selector: 'app-addcoins',
  templateUrl: './addcoins.component.html',
  styleUrls: ['./addcoins.component.scss']
})
export class AddcoinsComponent implements OnInit {

  options: any
  dropDownCoins = 0

  constructor(private paymentService: PaymentService, private commonService: CommonService) { }
  user: User | undefined
  ngOnInit(): void {
    this.user = this.commonService.user
  }

  payAction() {
    this.paymentService.getOrderId()
  }

}
