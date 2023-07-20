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
    "(I stole the idea of making these quotes from Lach)",
    "check out lachrymal.net!",
    "check out mmaker.moe!",
    "Welcome come on!",
    "これは糸電話です",
    "聞こえるよー",
    "YuiDumb.png",
    "Luv Yui (the one that's not a guitarist and not blonde)",
    "Luv Cocoa",
    "Luv Elaina",
    "I only use Resolve because I hate AE more",
    "So the thing about YuruYuri chapter 99: Nandeyanen! is that-",
    ">Website is somehow updated less often than my youtube channel",
    "Did you know that you can click the funny quote?",
    "Read GA Geijutsuka Art Design Class",
    "Watch Hidamari Sketch",
    "Play pocket mirror",
    "Not quotable, not funny, not good",
    "Ryochiusa from bocchi the rock",
    "I hope everyone can get along! -Shamiko",
    "KIKIKANRI",
    "Fresh peach whey protein!",
    "Alpamad Spithesis, a theoretical synthesis collab that's only about Alpaca Suri's spitting sample",
    ">And then you do this and use this formula here\n>WOW YOU EXPLAIN SO WELL!",
    "Davinci fusion YTPMV tutorials soon (lie)!",
    "Duplicate track > Duplicate track > parent both > pan first track to the left > pan second track to the right",
    "I hope you're all good kids who render a new audio take when working with MP4s…",
    "Can AE rotoscope anime yet?",
    "Otomads are abnormal (sm32070948)",
    "Picnic Akane Hino (sm36703614)",
    "Shopping at the 810 store",
    "海だあああああああああ",
    "Channel deletion in progress…",
    "[1] setup",
    "[2] development",
    "[3] climax",
    "[4] conclusion",
    "[5] darkness",
    ">He tried to copy the nico link but it changed the quote (lol)",
]

pickQuote()