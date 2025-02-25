fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
    });

fetch('footer.html')
    .then(response => response.text())
    .then(data=> {
        document.getElementById('footer-placeholder').innerHTML = data;
    });

    document.addEventListener("DOMContentLoaded", function() {
        fetch("button.html") // Load button.html
            .then(response => response.text())
            .then(data => {
                document.getElementById("scroll").innerHTML = data;

                const scrollTopBtn = document.getElementById("scrollBtn");

                window.addEventListener("scroll", function() {
                    if (window.scrollY > 200) {
                        scrollTopBtn.style.display = "block";
                    } else {
                        scrollTopBtn.style.display = "none";
                    }
                });

                scrollTopBtn.addEventListener("click", function() {
                     window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                });
            })
            .catch(error => console.error("Error loading button:", error));
    });
    

    const words = ["Internships", "Companies"];
    let wordIndex = 0;
    let charIndex = 0;
    let isErasing = false;
    const speed = 100; // Typing speed
    const eraseSpeed = 50; // Erasing speed
    const delay = 1500; // Delay before erasing
    const target = document.getElementById("dynamic-text");
    
    function typeEffect() {
        const currentWord = words[wordIndex];
        if (isErasing) {
            target.textContent = currentWord.substring(0, charIndex--);
            if (charIndex < 0) {
                isErasing = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(typeEffect, 500); // Small delay before typing new word
            } else {
                setTimeout(typeEffect, eraseSpeed);
            }
        } else {
            target.textContent = currentWord.substring(0, charIndex++);
            if (charIndex > currentWord.length) {
                isErasing = true;
                setTimeout(typeEffect, delay);
            } else {
                setTimeout(typeEffect, speed);
            }
        }
    }
    
    document.addEventListener("DOMContentLoaded", () => setTimeout(typeEffect, 500));
    