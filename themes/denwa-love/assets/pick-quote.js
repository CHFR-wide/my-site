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
    "[1] setup",
    "[2] development",
    "[3] climax",
    "[4] conclusion",
    "[5] darkness",
    ">And then you do this and use this formula here\n>WOW YOU EXPLAIN SO WELL!",
    ">He tried to copy the nico link but it changed the quote (lol)",
    ">Website is somehow updated less often than my youtube channel",
    "Alpamad Spithesis, a theoretical synthesis collab that's only about Alpaca Suri's spitting sample",
    "Can AE rotoscope anime yet?",
    "Channel deletion in progress…",
    "Check out lachrymal.net!",
    "Check out mmaker.moe!",
    "Davinci fusion YTPMV tutorials soon (lie)!",
    "Did you know that you can click the funny quote?",
    "Duplicate track > Duplicate track > parent both > pan first track to the left > pan second track to the right",
    "Fresh peach whey protein!",
    "Fusion is great until it's not, then it makes me want to burn down Blackmagic.",
    "Hold my hand! Let's きららジャンプ!",
    "I hope everyone can get along! -Shamiko",
    "I hope you're all good kids who render a new audio take when working with MP4s…",
    "I only use Resolve because I hate AE more",
    "I want a manga like otomad rivalry! One that's healthy and pushes for improvement.",
    "I want to make works that are surprising and full of love... and just a bit lewd too.",
    "Itodenwa is real and almost made it to season 2, it's not a lie I'm not crazy stop.",
    "KIKIKANRI",
    "Luv Cocoa",
    "Luv Elaina",
    "Luv Nakayama (from Hidamari sketch)",
    "Luv Yui (the real one)",
    "Monmo! (This one is extra rare!)",
    "Monmo...",
    "Not quotable, not funny, not good",
    "Otomads are abnormal (sm32070948)",
    "Picnic Akane Hino (sm36703614)",
    "Play pocket mirror",
    "Read GA Geijutsuka Art Design Class",
    "Ryochiusa from bocchi the rock",
    "\"Senpai! Let's walk to school together!\" Chrome Aberration increases tenfold, S_Warp twists the girl's head beyond recognition",
    "Shopping at the 810 store",
    "So the thing about YuruYuri chapter 99: Nandeyanen! is that-",
    "Suddenly, now that I'm sitting down to write more quotes... I'm out of ideas!",
    "The sound of the future was made to never die.",
    "うん光うううううううううう",
    "Wage war against audio engineers (as a joke).",
    "Watch OtoMDM",
    "Watch Hidamari Sketch",
    "Welcome come on!",
    "You will download webp pictures and you will be happy",
    "YuiDumb.png",
    "これは糸電話です",
    "チャイムが放課後を知らせたら、私達の本気が始まる",
    "海だあああああああああ",
    "聞こえるよー",
]

pickQuote()