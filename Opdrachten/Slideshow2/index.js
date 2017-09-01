function plusSlide() {
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');
    var image3 = document.getElementById('image3');
    var image4 = document.getElementById('image4');

    if (image1.style.display === 'none') {
        image1.style.display = 'block';
    }  
    
    if (image1.style.display === 'block') {
        image1.style.display = 'none';
        image2.style.display = 'block';
    }
/*
    if (image2.style.display === 'none') {
        image2.style.display = 'block';
    }  else {
        image2.style.display = 'none';
        image3.style.display = 'block';
    }

    if (image3.style.display === 'none') {
        image3.style.display = 'block';
    }  else {
        image3.style.display = 'none';
        image4.style.display = 'block';
    }
*/
}
/*
function minSlide() {
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');
    var image3 = document.getElementById('image3');
    var image4 = document.getElementById('image4');

    if (image2.style.display === 'none') {
        image2.style.display = 'block';
    }  else {
        image2.style.display = 'none';
        image1.style.display = 'block';
    }
    */
/*
    if (image2.style.display === 'none') {
        image2.style.display = 'block';
    }  else {
        image2.style.display = 'none';
        image3.style.display = 'block';
    }

    if (image3.style.display === 'none') {
        image3.style.display = 'block';
    }  else {
        image3.style.display = 'none';
        image4.style.display = 'block';
    }
*/

/*
//show first image
function plusSlide(){
    i++;
    document.getElementById('image' + i).style.display='inline-block';
    minSlide();
}

//hide first image
function minSlide(){
    test++;
    document.getElementById('image' + test).style.display='none';
}
*/



