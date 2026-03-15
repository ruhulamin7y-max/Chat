// --- Navigation Logic ---
function showPage(pageId, element) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Update Nav UI
    if (element) {
        document.querySelectorAll('.nav-item').forEach(nav => {
            nav.classList.remove('active');
        });
        element.classList.add('active');
    }
    window.scrollTo(0, 0);
}

// --- Mock Test System ---
const startQuiz = () => {
    const quizSection = document.getElementById('mocktest');
    quizSection.innerHTML = `
        <div class="glass-card quiz-container">
            <div id="timer">Time Left: 45:00</div>
            <div class="question">
                <h4>Q1. Which language is used for web styling?</h4>
                <div class="options">
                    <button class="opt-btn" onclick="checkAns(true)">CSS</button>
                    <button class="opt-btn" onclick="checkAns(false)">Python</button>
                </div>
            </div>
        </div>
    `;
};

// --- Razorpay Payment Integration ---
function purchaseCourse(courseName, amount) {
    var options = {
        "key": "YOUR_RAZORPAY_KEY", // Enter your key from Razorpay Dashboard
        "amount": amount * 100, 
        "currency": "INR",
        "name": "EduStream Premium",
        "description": "Purchase " + courseName,
        "handler": function (response){
            alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
            // Here: Update Firebase Firestore with payment status
        },
        "theme": { "color": "#6366f1" }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
}

// --- Firebase Placeholder ---
// Initialize Firebase in your project and use:
// db.collection('leaderboard').orderBy('score', 'desc').get()...
