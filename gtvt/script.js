const articles = [
  {
    id: "metro-hcm",
    title: "Metro TP.HCM: cập nhật tiến độ 2025",
    image: "https://images.unsplash.com/photo-1533055640609-24b498cdf3a9?q=80&w=1200",
    excerpt: "Các gói thầu quan trọng, thử nghiệm vận hành và kế hoạch khai thác.",
    date: "2025-11-10"
  },
  {
    id: "cao-toc-bien-hoa",
    title: "Cao tốc Biên Hòa – Vũng Tàu: phương án tổ chức giao thông",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200",
    excerpt: "Phân luồng tạm thời, điểm nghẽn và khuyến nghị di chuyển an toàn.",
    date: "2025-11-12"
  },
  {
    id: "xe-dien-dong-nai",
    title: "Đồng Nai: quy hoạch trạm sạc xe điện",
    image: "https://images.unsplash.com/photo-1614649024046-23c35cd6cf7e?q=80&w=1200",
    excerpt: "Đề xuất vị trí trạm sạc, tiêu chuẩn kỹ thuật và lộ trình triển khai.",
    date: "2025-11-15"
  }
];

function renderHome() {
  const latestGrid = document.getElementById('latestGrid');
  articles.forEach(a => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${a.image}" alt="${a.title}">
      <div class="content">
        <div class="title">${a.title}</div>
        <div class="meta">${new Date(a.date).toLocaleDateString('vi-VN')}</div>
        <p>${a.excerpt}</p>
      </div>
    `;
    latestGrid.appendChild(card);
  });

  const popularList = document.getElementById('popularList');
  articles.forEach(a => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#">${a.title}</a>`;
    popularList.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', renderHome);
