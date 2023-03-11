import Swal from 'sweetalert2';
const animatedRubber ='animated rubberBand';
const animatedTada ='animated tada';
export class AppAlert {


    static showToastError(msg: string, title?: string, timeOut?: number) {

        Swal({
            title: title,
            text: msg,
            toast: true,
            position: 'top-right',
            showConfirmButton: false,
            type: 'error',
            timer: timeOut === null ? 1000 : timeOut,
            customClass: animatedRubber
        });
    }

    static showToastInfo(msg: string, title?: string, timeOut?: number) {
        Swal({
            title: title,
            text: msg,
            toast: true,
            position: 'top-right',
            showConfirmButton: false,
            type: 'info',
            timer: timeOut === null ? 1000 : timeOut,
            customClass: animatedRubber
        });
    }

    static showToastSuccess(msg: string, title?: string, timeOut?: number) {
        Swal({
            title: title,
            text: msg,
            toast: true,
            position: 'top-right',
            showConfirmButton: false,
            type: 'success',
            timer: timeOut === null ? 1000 : timeOut,
            customClass: animatedRubber
        });
    }

    static showToastWarning(msg: string, title?: string, timeOut?: number) {
        Swal({
            title: title,
            text: msg,
            toast: true,
            position: 'top-right',
            showConfirmButton: false,
            type: 'warning',
            timer: timeOut === null ? 1000 : timeOut,
            customClass: animatedRubber
        });
    }

    static showToastQuestion(msg: string, title?: string, timeOut?: number) {
        Swal({
            title: title,
            text: msg,
            toast: true,
            position: 'top-right',
            showConfirmButton: false,
            type: 'error',
            timer: timeOut === null ? 1000 : timeOut,
            customClass: animatedRubber
        });
    }

    ////////// << show dialog alerts >> //////////
    //############################################
    static showError(msg: string, title?: string, timeOut?: number) {
        Swal({
            title: title,
            text: msg,
            toast: false,
            position: 'center',
            showConfirmButton: false,
            type: 'error',
            timer: timeOut === null ? 1000 : timeOut,
            customClass: animatedTada
        });
    }

    static showSuccess(msg: string, title?: string, timeOut?: number) {
        Swal({
            title: title,
            text: msg,
            toast: false,
            position: 'center',
            showConfirmButton: false,
            type: 'success',
            timer: timeOut === null ? 1000 : timeOut,
            customClass: animatedTada
        });
    }

    static showInfo(msg: string, title?: string, timeOut?: number) {
        Swal({
            title: title,
            text: msg,
            toast: false,
            position: 'center',
            showConfirmButton: false,
            type: 'info',
            timer: timeOut === null ? 1000 : timeOut,
            customClass: animatedTada
        });
    }

    static showWarning(msg: string, title?: string, timeOut?: number) {
        Swal({
            title: title,
            text: msg,
            toast: false,
            position: 'center',
            showConfirmButton: false,
            type: 'warning',
            timer: timeOut === null ? 1000 : timeOut,
            customClass: animatedTada
        });
    }

    static showQuestion(msg: string, title?: string, timeOut?: number) {
        Swal({
            title: title,
            text: msg,
            toast: false,
            position: 'center',
            showConfirmButton: false,
            type: 'question',
            timer: timeOut === null ? 1000 : timeOut,
            customClass: animatedTada
        });
    }

    ///////////////////// << Confirm Alert & Dialogs >> 


}