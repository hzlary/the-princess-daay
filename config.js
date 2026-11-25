document.addEventListener("DOMContentLoaded", () => {
    const CORRECT_PIN = "2908";
    let currentInput = "";
    
    const lockRoot = document.querySelector(".lock-root-receipt");
    const caption = document.querySelector(".lock-caption");
    const dots = document.querySelectorAll(".lock-dot");

    if (lockRoot) {
        lockRoot.addEventListener("click", (e) => {
            const keyBtn = e.target.closest(".lock-key");
            if (!keyBtn) return;

            const keyValue = keyBtn.getAttribute("data-key");

            if (keyValue === "back") {
                currentInput = currentInput.slice(0, -1);
            } else if (keyValue !== null) {
                if (currentInput.length < 4) {
                    currentInput += keyValue;
                }
            }

     
        // تنظيف مستمع الأحداث عند إغلاق النافذة
        Swal.getPopup().addEventListener('destroyed', () => {
            window.removeEventListener('keydown', handleKeyDown);
        });
   


            // تحديث شكل النقاط
            dots.forEach((dot, index) => {
                dot.classList.toggle("lock-dot-filled", index < currentInput.length);
            });


         






































            













            // التحقق من الرمز
            if (currentInput.length === 4) {
                if (currentInput === CORRECT_PIN) {
                    caption.textContent = "yemeeeeeeey ! ❤";
                    caption.style.color = "#2b8a3e";
                    
                    // إخفاء القفل نهائياً وإزالته من الصفحة
                    setTimeout(() => {
                        lockRoot.style.transition = "opacity 0.5s ease";
                        lockRoot.style.opacity = "0";
                        
                        setTimeout(() => {
                            // حذف عنصر القفل تماماً من شجرة الـ HTML
                            lockRoot.remove(); 
                            
                            // 🌟 تم إزالة إظهار الـ container من هنا تلقائياً
                            // لكي تتولى نافذة الموسيقى إظهاره بعد الإجابة.
                        }, 500);
                    }, 500);
                } else {
                    caption.textContent = "Really Nigga !";
                    caption.style.color = "#FF3B5C";
                    setTimeout(() => { 
                        currentInput = ""; 
                        dots.forEach(d => d.classList.remove("lock-dot-filled"));
                        caption.textContent = "Come On Faty..";
                        caption.style.color = "#f7dee4";
                    }, 800);
                }
            }
        });
    }
});






























































































// ── CONFIGURATION OBJECT ───────────────────────────────────────
const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "little faty",
  photo: "./img/lil babie.jpeg",       // Place your photo in the img/ folder
  music: "./music/I Love You So.mp3",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  colors: {
    primary: "#f1aed0",           // Main accent color (rose pink)
    accent: "#f385a4",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#f3e4e0",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  sections: [
    {
      type: "greeting",
      title: "Hey",
      subtitle: "I really like everything about you btw!",
    },
    {
      type: "countdown",
      from: 3,     
      goText: "<img src='img/gif.gif' style='width: 333px; height: auto; mix-blend-mode: screen; display: block; margin: 0 auto 15px;' /><div style='font-size: 1.7rem; font-weight: bold; text-align: center;'>It's your birthday!! :D</div>",
    },
    {
      type: "chatbox",
      message: "Happy birthday to youu!! Wishing you a wonderful year ahead filled with joy, love, and endless happiness <div style='text-align: center; width: 100%; margin-top: 15px;'><img src='img/tg1.png' style='height: 7em; width: auto; display: inline-block; mix-blend-mode: multiply;' /></div>",
      buttonText: "𝄞 Fly 🪽"
    },
    {
      type: "ideas",
      lines: [
        "That's what I was going to do.",
        "But then I stopped.",
        "I realised, I wanted to do something <strong>special</strong>.",
        "Because,    <div style='text-align: center; width: 100%; margin-top: 15px;'><img src='img/tg2.png' style='height: 7em; width: auto; display: inline-block; mix-blend-mode: multiply;' /></div>    ",
        "You are Special <span>;)</span>",
      ],
      bigLetters: "SO",
    },
    {
      type: "quote",
      text: "The best is yet to come, and m so glad i get to see it with you",
      author: "Hemza",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Happy Birthday!",
      wishText: "May ur 19th year be as sweet, warm, and as u are full of peace, smiles, and magic! ;)",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Happy 19th Birthday, Home isn't four walls, it's a feeling... and it's uu.",
      replayText: "Or click, if you want to watch it again.",
    },
  ],
};























































































document.addEventListener("DOMContentLoaded", () => {
  const roseContainer = document.createElement("div");
  roseContainer.className = "rose-container";
  document.body.appendChild(roseContainer);

  const roseImages = [
    "img/flower1.webp",
    "img/flower2.webp",
    "img/flower3.webp",
    "img/flower4.webp",
    "img/flowerlily.webp",
    "img/flower6.webp",
    "img/flower8.webp",
    "img/flower9.webp",
    "img/flowerlily.webp",
    "img/flower10.webp",
    "img/19.png",
    "img/pap.png",
    "img/bday.png",
    "img/cake2.png",
    "img/kit.png",


  ];

  function createRose() {
    const rose = document.createElement("div");
    rose.className = "rose-petal";

    const randomImage = roseImages[Math.floor(Math.random() * roseImages.length)];
    rose.style.backgroundImage = `url('${randomImage}')`;

    rose.style.left = Math.random() * 100 + "vw";

    const size = Math.random() * 25 + 20;
    rose.style.width = `${size}px`;
    rose.style.height = `${size}px`;

    // 🌟 السر في البطء والمظهر الجميل: تحديد وقت سقوط عشوائي وطويل (بين 7 إلى 14 ثانية)
    const fallDuration = Math.random() * 7 + 6;
    rose.style.animationDuration = `${fallDuration}s, ${Math.random() * 4 + 4}s`;

    rose.style.animationDelay = `${Math.random() * 5}s`;

    // إضافة الوردة داخل الحاوية
    roseContainer.appendChild(rose);

    // حذف الوردة من المتصفح بعد أن تنتهي حركتها تماماً للحفاظ على أداء وسرعة الموقع
    setTimeout(() => {
      rose.remove();
    }, fallDuration * 1000);
  }

  // توليد وردة جديدة كل 400 مللي ثانية (يمكنك زيادة الرقم لتقليل عدد الورود، أو تقليله لزيادتها)
  setInterval(createRose, 400);
});



































































