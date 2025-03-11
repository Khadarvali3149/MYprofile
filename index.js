document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("nav-active");
    });
});

  // Smooth scrolling for button click (optional)
  document.querySelector(".cta-button").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  });
// about.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("About Me Section Loaded!");
});

// skills.js
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");

    const animateProgressBars = () => {
        progressBars.forEach((bar) => {
            const percentage = bar.style.width;
            bar.style.width = "0%"; // Reset before animation
            setTimeout(() => {
                bar.style.width = percentage;
            }, 500);
        });
    };

    // Trigger animation when the section is in view
    const skillsSection = document.querySelector("#skills");
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateProgressBars();
        }
    }, { threshold: 0.5 });

    observer.observe(skillsSection);
});

// experience.js
document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline-content");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    timelineItems.forEach(item => observer.observe(item));
});

// projects.js
document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project");

    projects.forEach((project) => {
        project.addEventListener("mouseover", () => {
            project.style.transform = "translateY(-10px)";
        });

        project.addEventListener("mouseleave", () => {
            project.style.transform = "translateY(0)";
        });
    });

    // Trigger animations when the section is in view
    const projectsSection = document.querySelector("#projects");
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            projects.forEach((project, index) => {
                setTimeout(() => {
                    project.style.opacity = "1";
                    project.style.transform = "translateY(0)";
                }, index * 200);
            });
        }
    }, { threshold: 0.3 });

    observer.observe(projectsSection);
});
/* certificates*/
// document.addEventListener("DOMContentLoaded", function () {
//     const certificates = document.querySelectorAll(".certificate");

//     const observer = new IntersectionObserver(
//         (entries, observer) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add("show");
//                     observer.unobserve(entry.target);
//                 }
//             });
//         },
//         { threshold: 0.3 }
//     );

//     certificates.forEach((certificate) => {
//         observer.observe(certificate);
//     });
// });



document.addEventListener("DOMContentLoaded", function () {
    const certificates = document.querySelectorAll(".certificate");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );

    certificates.forEach((certificate) => {
        observer.observe(certificate);
    });
});

// contact.js
document.addEventListener("DOMContentLoaded", () => {
    const contactItems = document.querySelectorAll(".contact-item");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    contactItems.forEach(item => observer.observe(item));
});

// Smooth scrolling for navigation
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Pop-up effect for headings
    document.querySelectorAll(".popup-heading").forEach((heading) => {
        heading.addEventListener("mouseover", () => {
            heading.style.color = "blue";
        });
        heading.addEventListener("mouseout", () => {
            heading.style.color = "black";
        });
    });
});