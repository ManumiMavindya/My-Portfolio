document.querySelector('.Manumi Mavindya CV').addEventListener('click', () => {
    console.log("Downloading CV...");
});

// const form = document.getElementById('contactForm');
//
// document.getElementById('sendBtn').addEventListener('click', () =>{
//     form.reset();
// })


function openModal(videoURL) {
    document.getElementById('modalVideo').src = videoURL.replace("watch?v=", "embed/") + "?autoplay=1";
    document.getElementById('videoModal').style.display = "flex";
}

function closeModal() {
    document.getElementById('modalVideo').src = "";
    document.getElementById('videoModal').style.display = "none";
}