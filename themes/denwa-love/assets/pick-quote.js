function pickQuote() {
    let newQuote = Math.floor(Math.random() * quotes.length);
    if (newQuote === currentQuote) {
        newQuote = (newQuote + 1) % quotes.length;
    }
    currentQuote = newQuote;
    quoteElem.innerText = `“${quotes[currentQuote]}”`;
}

var currentQuote = null;
const quoteElem = document.getElementById("footer-quote")

const quotes = [
    "Today in \"ideas I totally didn't steal from Lach\"",
    "Welcome come on!",
    "これは糸電話です",
    "聞こえるよー",
    "YuiDumb.png",
    "Luv Yui (the not musical, and not blond one)",
    "Luv Cocoa",
    "I only use Resolve because I hate AE more",
    "So the thing about YuruYuri chapter 99: Nandeyanen! is that-",
    ">Website is somehow updated less often than my youtube channel",
    "Did you know that you can click the funny quote?",
    "Watch Hidamari Sketch",
    "Play pocket mirror",
    "Creating more quotes…",
]

pickQuote()