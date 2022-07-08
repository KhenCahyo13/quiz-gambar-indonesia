// Onload Fucntion
function selamat() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        width: '17.5rem',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Selamat Bermain :D'
    })
};

function quiz2() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        width: '17.5rem',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'info',
        title: 'Anda Mencapai Quiz Ke-2'
    })
};

function quiz3() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        width: '17.5rem',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'info',
        title: 'Anda Mencapai Quiz Ke-3'
    })
};

function quiz4() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        width: '17.5rem',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'info',
        title: 'Anda Mencapai Quiz Ke-4'
    })
};

function quiz5() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        width: '17.5rem',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'info',
        title: 'Selamat Anda Telah Mencapai Quiz Terakhir'
    })
};

function selesai() {
    Swal.fire(
        'SELAMAT ANDA TELAH MENYELSAIKAN QUIZ',
        'Terima Kasih Telah Berpartisipasi',
        'success'
    )
}

const salah1 = document.getElementById('jslh1');
const salah2 = document.getElementById('jslh2');
const salah3 = document.getElementById('jslh3');
const jawabanBenar = document.getElementById('jbnr');
const jawabanBenar2 = document.getElementById('jbnr2');

salah1.addEventListener('click', function() {
    if (salah1.click) {
        Swal.fire({
            title: 'Jawaban Anda Salah',
            icon: 'error'
        })
    }
});

salah2.addEventListener('click', function() {
    if (salah2.click) {
        Swal.fire({
            title: 'Jawaban Anda Salah',
            icon: 'error'
        })
    }
});

salah3.addEventListener('click', function() {
    if (salah3.click) {
        Swal.fire({
            title: 'Jawaban Anda Salah',
            icon: 'error'
        })
    }
});