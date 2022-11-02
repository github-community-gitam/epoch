import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

declare var Razorpay: any;

@Injectable({
  providedIn: 'root'
})
export class PaymentService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  getOrderId(){
    this.http.post("", { "amount" : "2000"}).subscribe((result)=>{
      alert(result)
    })
  }

  payMoney(name: String, email: String, contact: String, order_id: String, key: String) {

    var options = {
      "key": "", // Enter the Key ID generated from the Dashboard
      "amount": "500", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Git Commit",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": "order_KW8P6APKdKIEol", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": (response: any) => {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
      },
      "prefill": {
        "name": name,
        "email": email,
        "contact": contact
      },
      "theme": {
        "color": "#3399cc"
      }
    }

    var rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', (response: any) => {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();

  }


}
