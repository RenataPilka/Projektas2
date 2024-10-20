window.onscroll = function() {
    const goUpBtn = document.getElementById('goUpBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goUpBtn.style.display = "block"; // Show button
    } else {
        goUpBtn.style.display = "none"; // Hide button
    }
};

function goTop() {

    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll
    });

}

