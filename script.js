//buat variabel
let h1 = document.getElementsByTagName('h1')[0];
let btn = document.getElementsByTagName('button')[0];
 
//buat nilai dahulu
let nilai = 1;
 
//ketika di tombol sudah di klik
btn.addEventListener('click', function(){ 
    //tambah nilai
    h1.innerHTML = nilai++;  
}); 