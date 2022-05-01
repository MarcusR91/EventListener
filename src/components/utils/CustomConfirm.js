
import swal from 'sweetalert2';

export function CustomConfirm (onConfirm, title, confirmButtonText){
    
    title = "are you sure?";
    confirmButtonText = "Yes, Delete";

    swal.fire({
        title,
        confirmButtonText, 
        icon: "warning", 
        showCancelButton: true, 
        confirmButtonColor: "#3085d6", 
        canelButtonColor: "#d33"

    })
    .then(result=>{
        if(result.isConfirmed){
            onConfirm()
        }
    })
}