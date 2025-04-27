// Joke database
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "What do you call a fake noodle? An impasta!",
    "How do you organize a space party? You planet!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Did you hear about the claustrophobic astronaut? He just needed a little space.",
    "Why don't eggs tell jokes? They'd crack each other up."
];

// DOM elements
const jokeText = document.getElementById('joke-text');
const jokeBtn = document.getElementById('joke-btn');
const stars = document.querySelectorAll('.star');

// Current joke rating (0 means not rated)
let currentRating = 0;

// Display a random joke
function displayRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeText.textContent = jokes[randomIndex];
    resetRating();
}

// Reset star ratings
function resetRating() {
    currentRating = 0;
    stars.forEach(star => {
        star.textContent = '☆';
        star.classList.remove('active');
    });
}

// Rate the joke
function rateJoke(rating) {
    currentRating = rating;
    stars.forEach((star, index) => {
        if (index < rating) {
            star.textContent = '★';
            star.classList.add('active');
        } else {
            star.textContent = '☆';
            star.classList.remove('active');
        }
    });
    
    // Optional: You could send this rating to a server
    console.log(`Rated current joke ${rating} stars`);
}

// Event listeners
jokeBtn.addEventListener('click', displayRandomJoke);

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-rating'));
        rateJoke(rating);
    });
});

// Initialize with a joke
displayRandomJoke();