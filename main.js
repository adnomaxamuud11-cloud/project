// 1. DOM SELECTION
const form = document.getElementById("jobForm");
const fullName = document.getElementById("fullname");
const phoneNumber = document.getElementById("phoneNum");
const age = document.getElementById("age");
const email = document.getElementById("email");
const job = document.getElementById("job");
const experience = document.getElementById("experience");

// 2. VALIDATION FLAGS
let isValidFullName = false;
let isValidPhoneNumber = false;
let isValidAge = false;
let isValidEmail = false;
let isValidJob = false;
let isValidExperience = false;

// 3. VALIDATION LOGIC

// Full Name (letters only, 3–15)
fullName.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    const fname = e.target.value.trim();

    if (fname.length >= 3 && fname.length <= 15) {
        fullName.style.border = "2px solid green";
        isValidFullName = true;
    } else {
        fullName.style.border = "2px solid red";
        isValidFullName = false;
    }
});

// Phone Number (must start with 61, total 9 digits)
phoneNumber.addEventListener("input", (e) => {
    // numbers only
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    const phone = e.target.value.trim();

    if (/^61[0-9]{7}$/.test(phone)) {
        phoneNumber.style.border = "2px solid green";
        isValidPhoneNumber = true;
    } else {
        phoneNumber.style.border = "2px solid red";
        isValidPhoneNumber = false;
    }
});


// Age (20–63)
age.addEventListener("input", (e) => {
    const userAge = Number(e.target.value);

    if (userAge >= 20 && userAge <= 63) {
        age.style.border = "2px solid green";
        isValidAge = true;
    } else {
        age.style.border = "2px solid red";
        isValidAge = false;
    }
});

// Email (basic regex)
email.addEventListener("input", (e) => {
    const emailValue = e.target.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailValue)) {
        email.style.border = "2px solid green";
        isValidEmail = true;
    } else {
        email.style.border = "2px solid red";
        isValidEmail = false;
    }
});

// Job Selection
job.addEventListener("change", (e) => {
    if (e.target.value !== "") {
        job.style.border = "2px solid green";
        isValidJob = true;
    } else {
        job.style.border = "2px solid red";
        isValidJob = false;
    }
});

// Experience (YEARS: 2–5)
experience.addEventListener("input", (e) => {
    const years = Number(e.target.value);

    if (years >= 2 && years <= 5) {
        experience.style.border = "2px solid green";
        isValidExperience = true;
    } else {
        experience.style.border = "2px solid red";
        isValidExperience = false;
    }
});

// 4. FORM SUBMIT
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (
        isValidFullName &&
        isValidPhoneNumber &&
        isValidAge &&
        isValidEmail &&
        isValidJob &&
        isValidExperience
    ) {
        alert(" Application submitted successfully");
        form.reset();
        resetForm();
    } else {
        alert(" Please fix all fields before submitting");
    }
});

// Reset borders & flags
function resetForm() {
    const inputs = [fullName, phoneNumber, age, email, job, experience];
    inputs.forEach(input => input.style.border = "1px solid #ccc");

    isValidFullName =
    isValidPhoneNumber =
    isValidAge =
    isValidEmail =
    isValidJob =
    isValidExperience = false;
}