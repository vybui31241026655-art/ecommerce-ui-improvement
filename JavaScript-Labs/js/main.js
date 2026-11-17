// 1. DANH SÁCH LAB
const baiTap = [
  { so: "08", file: "Lab08/index.html", title: "Lab 08 - Language Foundations",
    desc: "Biến, kiểu dữ liệu, hàm, String, Date, Array, Object và Browser Console.",
    tags: ["JS"], color: "#d9ecfb" },
  { so: "09", file: "Lab09/index.html", title: "Lab 09 - DOM and Events",
    desc: "Truy xuất và thay đổi DOM, xử lý sự kiện, làm việc với Form và kiểm tra dữ liệu.",
    tags: ["JS", "DOM"], color: "#dff3e8" },
  { so: "10", file: "Lab10/index.html", title: "Lab 10 - jQuery",
    desc: "Selectors, events, thao tác DOM, hiệu ứng animation và GET request với jqXHR.",
    tags: ["JS", "jQuery"], color: "#e8dcfa" }
];

// 2. TẠO THẺ LAB
const grid = document.getElementById("works");
if (grid) {
  baiTap.forEach((bt, i) => {
    const card = document.createElement("article");
    card.className = "work card";
    card.dataset.tags = bt.tags.join(",");
    card.style.animationDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="thumb" style="background-color: ${bt.color}"><span>${bt.so}</span></div>
      <div class="work-body">
        <h3>${bt.title}</h3>
        <p>${bt.desc}</p>
        <div class="tags">${bt.tags.map(t => `<span class="tag tag-${t}">${t}</span>`).join("")}</div>
        <a class="btn" href="${bt.file}">Xem Lab ${bt.so} <i class="fa-solid fa-arrow-right"></i></a>
      </div>`;
    grid.appendChild(card);
  });
}

// 3. BỘ LỌC
document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip.active").forEach(a => a.classList.remove("active"));
    chip.classList.add("active");
    const filter = chip.dataset.filter;
    document.querySelectorAll(".work").forEach(card => {
      const show = filter === "all" || card.dataset.tags.split(",").includes(filter);
      card.classList.toggle("hide", !show);
    });
  });
});

// 4. LẤP LÁNH QUANH TIÊU ĐỀ
const hero = document.querySelector(".hero");
if (hero) {
  for (let i = 0; i < 14; i++) {
    const s = document.createElement("span");
    s.className = "sparkle";
    s.textContent = "✦";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.fontSize = 12 + Math.random() * 18 + "px";
    s.style.animationDelay = Math.random() * 2.4 + "s";
    hero.appendChild(s);
  }
}

// 5. ẢNH ĐẠI DIỆN DỰ PHÒNG
const avatar = document.getElementById("avatar");
if (avatar) {
  avatar.addEventListener("error", () => {
    avatar.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#dff3e8"/><text x="100" y="115" font-size="55" font-family="Arial" text-anchor="middle" fill="#659d83">Vy ♡</text></svg>`);
  }, { once: true });
}

// 6. ĐẾM TỪ PHẦN TỰ ĐÁNH GIÁ (nên 100–150 từ)
const refl = document.getElementById("reflection-text");
const wc = document.getElementById("wc");
if (refl && wc) {
  const n = refl.textContent.trim().split(/\s+/).filter(Boolean).length;
  wc.textContent = n;
  wc.parentElement.classList.add(n >= 100 && n <= 150 ? "ok" : "bad");
}

console.log("JavaScript Labs đã tải. Số Lab:", baiTap.length);