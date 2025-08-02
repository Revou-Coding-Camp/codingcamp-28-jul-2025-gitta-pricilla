// JavaScript - script.js

function initGreeting() {
  let userName = prompt("Hi! What's your name?");
  if (userName && userName.trim() !== "") {
    document.getElementById(
      "greeting"
    ).innerHTML = `Hi ${userName.trim()}! Welcome to Mia Miu Technology!`;
  }
}

function validateForm() {
  let isValid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  document.querySelectorAll(".error").forEach((error) => {
    error.style.display = "none";
  });

  if (name === "") {
    document.getElementById("nameError").style.display = "block";
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "" || !emailRegex.test(email)) {
    document.getElementById("emailError").style.display = "block";
    isValid = false;
  }

  if (phone === "" || phone.length < 10) {
    document.getElementById("phoneError").style.display = "block";
    isValid = false;
  }

  if (message === "") {
    document.getElementById("messageError").style.display = "block";
    isValid = false;
  }

  if (isValid) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
            <h5>Terima kasih! Pesan Anda telah dikirim:</h5>
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Pesan:</strong> ${message}</p>
        `;
    resultDiv.style.display = "block";

    document.getElementById("contactForm").reset();

    setTimeout(() => {
      resultDiv.style.display = "none";
    }, 10000);
  }

  return false;
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initGreeting();
  initSmoothScroll();
  highlightNavOnScroll();
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("name").addEventListener("input", function () {
    if (this.value.trim() !== "") {
      document.getElementById("nameError").style.display = "none";
    }
  });

  document.getElementById("email").addEventListener("input", function () {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(this.value.trim())) {
      document.getElementById("emailError").style.display = "none";
    }
  });

  document.getElementById("phone").addEventListener("input", function () {
    if (this.value.trim().length >= 10) {
      document.getElementById("phoneError").style.display = "none";
    }
  });

  document.getElementById("message").addEventListener("input", function () {
    if (this.value.trim() !== "") {
      document.getElementById("messageError").style.display = "none";
    }
  });
});

function highlightNavOnScroll() {
  const sections = document.querySelectorAll("section, div[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}
