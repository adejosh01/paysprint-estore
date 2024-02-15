import Swal from "sweetalert2";

export function welcome () {
    Swal.fire({
        html: '<iframe className="iframe" width="750" height="315" src="https://www.youtube.com/embed/ptsmEYFJMx4" title="Welcome To Paysprint" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>',
        width: '60%',
        showCloseButton: true,
        showConfirmButton: false,
    });          
}