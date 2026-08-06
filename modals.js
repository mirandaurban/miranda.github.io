// ─── MODAL DATA ───

const projectsData = {
  // Projects
  p2: {
    type: "Academic Collaboration · 2026",
    name: "Dittravel",
    tagClass: "t-b",
    images: [
      "images/projects/dittravel-trabajo.png",
      "images/projects/dittravel-trabajo-db.png",
    ],
    description:
      "Collaborated in the development of a travel management platform designed to streamline business and accounting workflows into a unified digital system. Contributed to requirements analysis, workflow design, usability testing, and project documentation, helping translate operational processes into intuitive user experiences. Worked closely with a multidisciplinary team throughout the planning and iterative development process.",
    stack: ["Product Thinking", "Workflow Design", "Usability Testing"],
    links: [
      { label: "Repository", url: "https://github.com/dittravel/TC3005B.501", type: "primary" },
      { label: "Video demo (in spanish)", url: "https://www.youtube.com/watch?v=ObpW-Xdkfzc", type: "secondary" },
    ],
  },
  p3: {
    type: "Personal project · Ongoing",
    name: "Digital Garden",
    tagClass: "t-g",
    images: [
      "images/projects/digital-garden.png",
      "images/projects/digital-garden-books.png",
    ],
    description:
      "Designed and developed a personal knowledge platform to organize and publish reading notes, technical articles, and long-form writing. Built with Astro and Markdown, the project emphasizes a lightweight architecture, maintainable content management, and fast performance through static site generation and Vercel deployment. The platform continues to evolve with new features focused on knowledge organization and interactive content.",
    stack: ["Astro", "Markdown", "Vercel"],
    links: [
      { label: "Repository", url: "https://github.com/mirandaurban/digital-garden", type: "primary" },
      { label: "Visit site", url: "https://miranda-digital-garden.vercel.app", type: "secondary" },
    ],
  },
  p4: {
    type: "Academic collaboration · 2025",
    name: "Emergency Response Interface",
    tagClass: "t-r",
    images: [
      "images/projects/pcc.png",
      "images/projects/pcc-forms.png",
    ],
    description:
      "Developed a React-based interface prototype in collaboration with the Cuajimalpa municipality to support emergency medical personnel during patient care. The project focused on improving information accessibility, interface clarity, and navigation efficiency, enabling faster access to critical patient data. Contributed to interface implementation while applying user-centered design principles throughout the development process.",
    stack: ["React", "Frontend", "Accessibility"],
    links: [
      { label: "Repository", url: "https://github.com/lorechewtat/PCC", type: "primary" },
      { label: "Video demo (in spanish)", url: "https://youtu.be/HgHWJZD-BRM", type: "secondary" },
    ],
  },
  p5: {
    type: "Game development · 2024",
    name: "PAWNED",
    tagClass: "t-y",
    images: [
      "images/projects/pawned-1.png",
      "images/projects/pawned-2.png",
    ],
    description:
      "Designed and developed a roguelite-inspired strategy game that reimagines classical chess through dynamic power-ups and evolving gameplay mechanics. Implemented the core game systems and interactive mechanics in JavaScript while exploring procedural elements and player progression. The project emphasized balancing strategic depth with replayability through unconventional game design.",
    stack: ["Game Design", "Gameplay Mechanics", "JavaScript"],
    links: [
      { label: "Ver repositorio", url: "https://github.com/mirandaurban/Videojuego", type: "primary" },
      // { label: "Video gameplay", url: "", type: "secondary" },
    ],
  },
  // Volunteering
  v1: {
    type: "Patrones Hermosos · 2026",
    name: "Programming Workshop Instructor",
    tagClass: "t-y",
    images: [
      "images/volunteering/evidencia-patrones-hermosos-2026.jpeg",
      "images/volunteering/certificado-patrones-hermosos-2026.JPG"
    ],
    description:
      "Served as a volunteer instructor in programming and web development workshops for elementary and middle school students. Guided participants through the fundamentals of computational thinking while helping them build their first HTML and CSS webpages. Collaborated with two fellow volunteers to organize classroom activities, explain technical concepts in an accessible way, and facilitate educational robotics sessions using LEGO-based learning kits.",
    stack: ["Education", "Web Development", "STEM Outreach", "Communication"],
    links: [],
  },
  v2: {
    type: "Patrones Hermosos · 2025",
    name: "Programming Workshop Instructor",
    tagClass: "t-y",
    images: [
      "images/volunteering/evidencia-patrones-hermosos-2025.jpeg",
    ],
    description:
      "Served as a volunteer instructor in programming and web development workshops for elementary and middle school students. Guided participants through the fundamentals of computational thinking while helping them build their first HTML and CSS webpages. Collaborated with three fellow volunteers to organize classroom activities, explain technical concepts in an accessible way, and facilitate educational robotics sessions using LEGO-based learning kits.",
    stack: ["Education", "Web Development", "STEM Outreach", "Communication"],
    links: [],
  },
  v3: {
    type: "Reading Enrichment Program · 2024",
    name: "Reading Workshop Instructor",
    tagClass: "t-y",
    images: [
      "images/volunteering/evidencia-taller-lectura-2024.jpeg",
    ],
    description:
      "Co-designed and delivered a reading enrichment program for first-grade students aimed at fostering reading comprehension and curiosity through interactive learning experiences. Developed age-appropriate activities and instructional materials while working closely with a multidisciplinary volunteer team. The program encouraged active participation and promoted long-term interest in reading through engaging classroom dynamics.",
    stack: ["Education", "Communication"],
    links: [],
  },
  // Certifications
  c1: {
    type: "English Certification · 2025",
    name: "C1 Advanced English Certificate",
    tagClass: "t-y",
    images: [
      "images/certifications/vgc-certificate.png",
      "images/certifications/vgc-evidence.jpg",      
    ],
    description:
      "Certified at the C1 level in English proficiency, demonstrating advanced skills in reading, writing, listening, and speaking. The certification reflects the ability to communicate effectively in academic, professional, and collaborative international environments.",
    stack: ["English Proficiency", "C1 Level"],
    links: [],
  },
};

// ─── MODAL LOGIC ───
(function () {
  let overlay, closeBtn;

  function buildModal() {
    overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.innerHTML = `
      <div class="modal-box" role="dialog" aria-modal="true">
        <button class="modal-close" aria-label="Cerrar">✕</button>
        <div class="modal-hero">
          <div class="modal-type"></div>
          <div class="modal-title"></div>
        </div>
        <div class="modal-gallery"></div>
        <div class="modal-body">
          <p class="modal-desc"></p>
          <div class="modal-stack"></div>
        </div>
        <div class="modal-links"></div>
      </div>
    `;
    document.body.appendChild(overlay);

    closeBtn = overlay.querySelector(".modal-close");
    closeBtn.addEventListener("click", closeProjectModal);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeProjectModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("active")) {
        closeProjectModal();
      }
    });
  }

  function openProjectModal(id) {
    const data = projectsData[id];
    if (!data) return;

    overlay.querySelector(".modal-type").textContent = data.type;
    overlay.querySelector(".modal-title").textContent = data.name;
    overlay.querySelector(".modal-desc").textContent = data.description;

    const gallery = overlay.querySelector(".modal-gallery");
    gallery.innerHTML = data.images
      .map((src) => `<img src="${src}" alt="${data.name}" />`)
      .join("");

    const stack = overlay.querySelector(".modal-stack");
    stack.innerHTML = data.stack
      .map((s) => `<span class="tag ${data.tagClass}">${s}</span>`)
      .join("");

    const links = overlay.querySelector(".modal-links");
    links.innerHTML = data.links
      .map(
        (l) =>
          `<a href="${l.url}" target="_blank" rel="noopener" class="modal-link-btn ${
            l.type === "secondary" ? "secondary" : ""
          }">${l.label} ↗</a>`
      )
      .join("");

    overlay.classList.add("active");
    document.body.classList.add("modal-open");
  }

  function closeProjectModal() {
    overlay.classList.remove("active");
    document.body.classList.remove("modal-open");
  }

  document.addEventListener("DOMContentLoaded", () => {
    buildModal();

    document
      .querySelectorAll(".c-proj[data-project], .c-vol[data-project], .c-cert[data-project]")
      .forEach((card) => {
        card.style.cursor = "pointer";
        card.addEventListener("click", () => {
          openProjectModal(card.dataset.project);
        });
      });

    document.querySelectorAll(".proj-arrow").forEach((arrow) => {
      arrow.addEventListener("click", (e) => e.stopPropagation());
    });

    document.querySelectorAll(".vol-link, .cert-link").forEach((link) => {
      link.addEventListener("click", (e) => e.preventDefault());
    });
  });
})();