// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Sidney",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Kamu suka aku?",                                    // First interaction
            yesBtn: "iya",                                             // Text for "Yes" button
            noBtn: "engga",                                               // Text for "No" button
            secretAnswer: "aku gasuka, aku cinta kamu! ❤️"           // Secret hover message
        },
        second: {
            text: "Seberapa cintah ciii?",                          // For the love meter
            startText: "CEMESTAAAAAA!",                                   // Text before the percentage
            nextBtn: "Lanjut ❤️"                                         // Text for the next button
        },
        third: {
            text: "Kamuh mau ga jadi valentine aku di 2025? 🌹", // The big question!
            yesBtn: "MAUU CEKALIII!",                                             // Text for "Yes" button
            noBtn: "G"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "KAMU SECINTAH ITU AMA AKUHHHH?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "CEDUNIAAAAA! 🚀💝",              // Shows when they go past 1000%
        normal: "CEMESTAAAA CEMUAAAANYAAA! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "aku adalah orang yang tercintahhhhh! 🎉💝💖💝💓",
        message: "Nih ambil bunga nya, peyuk, mwwwwaaaaaaa. LOVE YOU SO MUCH BABY!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffc8dd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffafcc",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#a2d2ff",     // Button color (should stand out against the background)
        buttonHover: "#bde0fe",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/doiy7a7xc/video/upload/v1739478113/lcsl0hj2r5uoxkphbavl.mp4", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
