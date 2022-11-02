import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { FirebaseService } from '../services/firebase/firebase.service';


@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {

  delay = (ms: number | undefined) => new Promise(res => setTimeout(res, ms));


  dialogConfig = {
    show: false,
    loading: true,
    singleButton: false,
    title: "Payment Successful",
    dialogPositive: () => { },
    dialogNegative: () => { }
  }

  allowedFormats = [BarcodeFormat.QR_CODE];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    let scanner = new ZXingScannerComponent()
    scanner.askForPermission()
  }

  async scanSuccessHandler(data: any) {
    console.log(data)
    this.showLoadingDialog()
    await this.delay(2000)
    this.showDoubleButtonDialog('Would you like to Pay ' + data + 'OC for ' + data)
    this.dialogConfig.dialogPositive = async () => {
      this.showLoadingDialog()
      await this.delay(2000)
      await this.firebaseService.payToShop('', '')
      .then(()=>{
        this.showSingleButtonDialog('Payment Successful')
      })
      .catch(()=>{
        this.showSingleButtonDialog('Payment Error')
      })
    }
  }

  showDoubleButtonDialog(title: string) {
    this.dialogConfig.loading = false
    this.dialogConfig.singleButton = false
    this.dialogConfig.title = title
    this.dialogConfig.dialogNegative = () => { this.dialogConfig.show = false }
    this.dialogConfig.show = true
  }

  showSingleButtonDialog(title: string){
    this.dialogConfig.loading = false
    this.dialogConfig.singleButton = true
    this.dialogConfig.title = title
    this.dialogConfig.dialogPositive = () => { this.dialogConfig.show = false }
    this.dialogConfig.show = true
  }

  showLoadingDialog(){
    this.dialogConfig.loading = true
    this.dialogConfig.show = true
  }

  

}


