import {Injectable, OnInit} from '@angular/core';
import {AppAlert} from './AppAlert';
import {ToastrService} from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class HttpErrorMessage implements OnInit {

  constructor(private toastrService: ToastrService) {
  }

  // << Declaration>>
  errorMessage = '';

  ngOnInit(): void {

  }

  handleHttpErrors(httpStatusCode?: number | string, err?: any) {
    console.log(err);
    if (httpStatusCode === 200) {
      this.toastrService.success('تمت العملية', 'الحالة');
    } else if (httpStatusCode === 201) {
      AppAlert.showToastError('statuscode.201', null, 3000);
    } else if (httpStatusCode === 204) {
      AppAlert.showToastError('statuscode.204', null, 3000);
    } else if (httpStatusCode === 400) {
      this.toastrService.error(err.error.message, 'الحالة');
    } else if (httpStatusCode === 401) {
      this.toastrService.error('كلمة السر او اسم المستخدم غير صحيح !', 'الحالة');
    } else if (httpStatusCode === 402) {
      AppAlert.showToastError('statuscode.402', null, 3000);
    } else if (httpStatusCode === 403) {
      AppAlert.showToastError('statuscode.403', null, 3000);
    } else if (httpStatusCode === 404) {
      this.toastrService.error('حدث خطأ من فضلك راجع مدير النظام !', 'الحالة');
    } else if (httpStatusCode === 500) {
      this.toastrService.error('حدث خطأ من فضلك راجع مدير النظام !', 'الحالة');
    } else if (httpStatusCode === 'Unknown Error') {
      this.toastrService.error('حدث خطأ من فضلك راجع مدير النظام !', 'الحالة');
    }
  }


}
