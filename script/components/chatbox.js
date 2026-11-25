(function () {
  window.Components = window.Components || {};

  window.Components.chatbox = {
    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-chatbox";
      div.innerHTML = `
        <div class="text-box">
          <p class="hbd-chatbox"></p>
          <p class="fake-btn">${section.buttonText || "Send"}</p>
        </div>
      `;

      const chatbox = div.querySelector(".hbd-chatbox");
      const msg = section.message || "Happy Birthday!";
      
      // كود العزل السليم للأوسام
      const parts = msg.split(/(<[^>]+>)/g);
      
      chatbox.innerHTML = parts
        .map((part) => {
          if (part.startsWith("<") && part.endsWith(">")) {
            if (part.startsWith("<img")) {
              // الحل الجذري: نلف الصورة هنا برمجياً داخل بلوك ممركز يضمن توسيطها بنسبة 100%
              return `<span style="display: block; text-align: center; width: 100%; margin: 15px 0 0 0;">${part}</span>`;
            }
            return part;
          }
          return part.split("").map((ch) => `<span>${ch}</span>`).join("");
        })
        .join("");

      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const spans = el.querySelectorAll(".hbd-chatbox span");
      tl.from(el.querySelector(".text-box"), {
        duration: 0.7, scale: 0.2, opacity: 0,
      })
      .from(el.querySelector(".fake-btn"), {
        duration: 0.3, scale: 0.2, opacity: 0,
      })
      .to(spans, {
        duration: 1.5, visibility: "visible", stagger: 0.05,
      })
      .to(el.querySelector(".fake-btn"), {
        duration: 0.1, backgroundColor: "rgb(127, 206, 248)",
      }, "+=4")
      .to(el.querySelector(".text-box"), {
        duration: 0.5, scale: 0.2, opacity: 0, y: -150,
      }, "+=1");
    },
  };
})();