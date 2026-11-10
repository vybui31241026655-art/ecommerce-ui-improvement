
// =============================================
// 1. DANH SÁCH BÀI TẬP
// =============================================

const baiTap = [
  {
    so: 1,
    file: "Cau1/BaiTap1.html",
    title: "Câu 1 - Bài tập HTML",
    desc: "Bài tập thực hành HTML cơ bản.",
    tags: ["HTML"],
    color: "#f7dce8"
  },

  {
    so: 2,
    file: "Cau2/BaiTap2.html",
    title: "Câu 2 - Bài tập HTML & CSS",
    desc: "Thực hành xây dựng và định dạng giao diện website.",
    tags: ["HTML", "CSS"],
    color: "#d9ecfb"
  },

  {
    so: 3,
    file: "Cau3/BaiTap3.html",
    title: "Câu 3 - Bài tập HTML",
    desc: "Thực hành cấu trúc và trình bày nội dung HTML.",
    tags: ["HTML"],
    color: "#e8dcfa"
  },

  {
    so: 4,
    file: "Cau4/BaiTap4.html",
    title: "Câu 4 - Danh sách liên kết",
    desc: "Định dạng danh sách liên kết TMĐT, ERP, MIS và DS.",
    tags: ["HTML", "CSS"],
    color: "#dff3e8"
  },

  {
    so: 5,
    file: "Cau5/BaiTap5.html",
    title: "Câu 5 - Bài tập HTML & CSS",
    desc: "Thực hành xây dựng giao diện trang web.",
    tags: ["HTML", "CSS"],
    color: "#ffdfca"
  },

  {
    so: 6,
    file: "Cau6/BaiTap6.html",
    title: "Câu 6 - Bài tập HTML & CSS",
    desc: "Thực hành định dạng và bố cục website.",
    tags: ["HTML", "CSS"],
    color: "#e8dcfa"
  },

  {
    so: 7,
    file: "Cau7/BaiTap7.html",
    title: "Câu 7 - Bài tập HTML & CSS",
    desc: "Thực hành thiết kế giao diện web.",
    tags: ["HTML", "CSS"],
    color: "#dff3e8"
  },

  {
    so: 8,
    file: "Cau8/BaiTap8.html",
    title: "Câu 8 - The Bat Family",
    desc: "Thiết kế và trình bày trang The Bat Family.",
    tags: ["HTML", "CSS"],
    color: "#f7dce8"
  },

  {
    so: 9,
    file: "Cau9/BaiTap9.html",
    title: "Câu 9 - Font Awesome",
    desc: "Thực hành sử dụng Font Awesome và các biểu tượng.",
    tags: ["HTML", "CSS"],
    color: "#fff1c9"
  }
];


// =============================================
// 2. TẠO THẺ BÀI TẬP TRÊN WEBSITE
// =============================================

const grid = document.getElementById("works");

if (grid) {

  baiTap.forEach((bt, i) => {

    // Tạo thẻ article
    const card = document.createElement("article");

    card.className = "work card";

    // Gắn dữ liệu để lọc bài tập
    card.dataset.tags = bt.tags.join(",");

    // Hiệu ứng xuất hiện lần lượt
    card.style.animationDelay = `${i * 0.08}s`;

    // Nội dung từng thẻ
    card.innerHTML = `
      <div class="thumb" style="background-color: ${bt.color}">
        <span>${bt.so}</span>
      </div>

      <div class="work-body">

        <h3>${bt.title}</h3>

        <p>${bt.desc}</p>

        <div class="tags">
          ${bt.tags.map(tag => `
            <span class="tag tag-${tag}">${tag}</span>
          `).join("")}
        </div>

        <a class="btn" href="${bt.file}">
          Xem bài <i class="fa-solid fa-arrow-right"></i>
        </a>

      </div>
    `;

    // Đưa thẻ vào lưới
    grid.appendChild(card);

  });

}


// =============================================
// 3. CHỨC NĂNG LỌC BÀI TẬP
// =============================================

const chips = document.querySelectorAll(".chip");

chips.forEach(chip => {

  chip.addEventListener("click", () => {

    // Bỏ trạng thái active ở nút cũ
    document.querySelectorAll(".chip.active").forEach(active => {
      active.classList.remove("active");
    });

    // Thêm active vào nút được chọn
    chip.classList.add("active");

    // Lấy loại bài tập cần lọc
    const filter = chip.dataset.filter;

    // Lấy tất cả thẻ bài tập
    const cards = document.querySelectorAll(".work");

    cards.forEach(card => {

      const tags = card.dataset.tags.split(",");

      // Hiện tất cả hoặc lọc theo HTML, CSS, JS
      const isVisible =
        filter === "all" || tags.includes(filter);

      card.classList.toggle("hide", !isVisible);

    });

  });

});


// =============================================
// 4. HIỆU ỨNG LẤP LÁNH QUANH TIÊU ĐỀ
// =============================================

const hero = document.querySelector(".hero");

if (hero) {

  for (let i = 0; i < 14; i++) {

    const sparkle = document.createElement("span");

    sparkle.className = "sparkle";

    sparkle.textContent = "✦";

    sparkle.style.left = Math.random() * 100 + "%";

    sparkle.style.top = Math.random() * 100 + "%";

    sparkle.style.fontSize =
      12 + Math.random() * 18 + "px";

    sparkle.style.animationDelay =
      Math.random() * 2.4 + "s";

    hero.appendChild(sparkle);

  }

}


// =============================================
// 5. ẢNH ĐẠI DIỆN DỰ PHÒNG
// =============================================

const avatar = document.getElementById("avatar");

if (avatar) {

  avatar.addEventListener("error", () => {

    avatar.src = "data:image/svg+xml;charset=UTF-8," +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg"
             width="200" height="200">

          <rect width="200" height="200"
                fill="#dff3e8"/>

          <text x="100" y="115"
                font-size="55"
                font-family="Arial"
                text-anchor="middle"
                fill="#659d83">
            Vy ♡
          </text>

        </svg>
      `);

  }, { once: true });

}


// =============================================
// 6. KIỂM TRA SỐ LƯỢNG BÀI TẬP
// =============================================

console.log("Portfolio đã tải thành công!");

console.log("Tổng số bài tập:", baiTap.length);

console.log(
  "Các câu bài tập:",
  baiTap.map(bt => bt.so)
);
