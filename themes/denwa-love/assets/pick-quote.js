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
    "\"Senpai! Let's walk to school together!\" Chrome Aberration increases tenfold, S_Warp twists the girl's head beyond recognition",
    ">And then you do this and use this formula here\n>WOW YOU EXPLAIN SO WELL!",
    "Calculating Naoscore: 10 naokos (a true naoko)",
    "Calculating Naoscore: 2 naokos (it's just a bob cut, are you even trying?)",
    "Calculating Naoscore: 8 naokos (the glasses were not round)",
    "Can AE rotoscope anime yet?",
    "Channel deletion in progress…",
    "Check out lachrymal.net!",
    "Check out mmaker.moe!",
    "consider playing Little Goody Two Shoes",
    "Duplicate track > Duplicate track > parent both > pan first track to the left > pan second track to the right",
    "Fresh peach whey protein!",
    "Fusion is great until it's not, then it makes me want to burn down Blackmagic.",
    "Here comes a fresh new batch of quotes! <- they all suck",
    "Hold my hand! Let's きららジャンプ!",
    "I hope everyone can get along! -Shamiko",
    "I once had a fucked up dream where people who looked at the moon would be brainwashed and then [...plot points ommitted...] I woke up on the moon and saw that the earth was shattered in two and then a big title screen came into view and it said \"MS-DOS Reincarnation\"",
    "I uploaded them all as WebP and I won't apologize, it's the world that should apologize for slow adoption!",
    "I want a manga like otomad rivalry!",
    "I want to make works that are surprising and full of love... and just a bit lewd too.",
    "Is that a collab invite in your pants or are you just happy to see me?",
    "Itodenwa is real and almost made it to season 2, it's not a lie I'm not crazy stop.",
    "Keep fantasizing about your dream one-man collab, who knows, maybe if you fantasize hard enough it will materialize by itself!",
    "KIKIKANRI",
    "Luv Cocoa",
    "Luv Elaina",
    "Luv Kotori",
    "Luv Nakayama (from Hidamari sketch)",
    "Luv Yui (the real one)",
    "Monmo! (This one is extra rare!)",
    "Monmo...",
    "My ultimate goal is to bake a cake.",
    "Not quotable, not funny, not good",
    "Otomads are abnormal (sm32070948)",
    "Picnic Akane Hino (sm36703614)",
    "Play pocket mirror",
    "Read GA Geijutsuka Art Design Class",
    "Reincarnated as a Red Zoner, I flipped all of the town's crops!",
    "Ryochiusa from bocchi the rock",
    "Shopping at the 810 store",
    "So the thing about YuruYuri chapter 99: Nandeyanen! is that-",
    "Suddenly, now that I'm sitting down to write more quotes... I'm out of ideas!",
    "The from heat egg the cooks rice the",
    "The mute chocolate disco concert was really cute!",
    "The sound of the future was made to never die.",
    "There are four Yuis, two of them hug pillows, the third one is Yui but not rally \"Yui\" and the last one is not Yui but a Jaguar.",
    "Top 10 Medleys that would fit in a rave: Otomad Capriccioso",
    "Wage war against audio engineers (as a joke).",
    "Watch Hidamari Sketch",
    "Watch OtoMDM",
    "Welcome come on!",
    "YuiDumb.png",
    "Yuu! Ryou! Come on!",
    "うん光うううううううううう",
    "これは糸電話です",
    "チャイムが放課後を知らせたら、私達の本気が始まる",
    "バアアーン",
    "海だあああああああああ",
    "聞こえるよー",
]

pickQuote();