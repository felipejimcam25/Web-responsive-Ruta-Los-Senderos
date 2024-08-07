window.addEventListener('load', function() {
    document.getElementById('btn-popup').addEventListener('click', function() {
        Swal.fire({
            position: "center",
            icon: "success",
            title: '<b class="titleAlert">¡Buena Suerte!</b>',
            html: '<b class="textAlert">Tu inscripción fue exitosa',
            showConfirmButton: false,
            timer: 5000,
            padding: '3rem',
            allowOutsideClick: true,
            allowEnterkey: true,
            background: '#000',
            showConfirmButton: true,
            confirmButtonText:'<SPAN class="textButton">¡Excelente!</SPAN>',
            confirmButtonColor: '#ff0000'
        })
    })
}); 