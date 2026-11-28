document.addEventListener("DOMContentLoaded", () => {
    if (typeof portfolioData === "undefined") {
        console.error("portfolioData not found. Check js/data.js.");
        return;
    }

    const { brand, about, certifications, skills, projects, contacts } = portfolioData;

    // Brand & Hero
    document.getElementById("brand-name").textContent = brand.name;
    document.getElementById("hero-location").textContent = brand.location;
    document.getElementById("hero-name").textContent = brand.fullName;
    document.getElementById("hero-tagline").textContent = brand.roleTagline;
    document.getElementById("hero-summary").textContent = about.short;
    document.getElementById("footer-name").textContent = brand.fullName;
    document.getElementById("current-year").textContent = new Date().getFullYear();

    // About & Resume
    document.getElementById("about-full").textContent = about.full;
    document.getElementById("hero-resume-btn").href = about.resumePath;
    document.getElementById("about-resume-btn").href = about.resumePath;

    // Certifications (inside About)
    const certList = document.getElementById("cert-list");
    certifications.forEach((cert) => {
        const li = document.createElement("li");
        li.className = "cert-item";
        li.innerHTML = `
      <strong>${cert.title}</strong>
      <span>${cert.issuer} · ${cert.date}</span>
    `;
        certList.appendChild(li);
    });

    // Technical Skills
    const skillsGrid = document.getElementById("skills-grid");
    skills.forEach((group) => {
        const card = document.createElement("article");
        card.className = "skill-card";
        const tags = group.items.map((skill) => `<li class="skill-tag">${skill}</li>`).join("");
        card.innerHTML = `
      <h3>${group.category}</h3>
      <ul class="skill-tags">${tags}</ul>
    `;
        skillsGrid.appendChild(card);
    });

    // Projects
    const projectsGrid = document.getElementById("projects-grid");
    projects.forEach((project) => {
        const article = document.createElement("article");
        article.className = `project-card ${project.featured ? "project-featured" : "project-upcoming"}`;

        const imageBlock = project.image
            ? `<div class="project-media"><img src="${project.image}" alt="${project.title} preview" loading="lazy" /></div>`
            : `<div class="project-media project-media-placeholder"><span>${project.status}</span></div>`;

        const highlightsBlock =
            project.highlights && project.highlights.length
                ? `<ul class="project-highlights">${project.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>`
                : "";

        const techTags = project.techStack.map((tech) => `<li class="tech-tag">${tech}</li>`).join("");

        const linksBlock =
            project.githubUrl || project.liveUrl
                ? `<div class="project-links">
            ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ""}
            ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">Live Demo</a>` : ""}
          </div>`
                : "";

        article.innerHTML = `
      ${imageBlock}
      <div class="project-body">
        <span class="project-status">${project.status}</span>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        ${highlightsBlock}
        <ul class="project-tech">${techTags}</ul>
        ${linksBlock}
      </div>
    `;
        projectsGrid.appendChild(article);
    });

    // Contacts
    const contactLinks = document.getElementById("contact-links");
    const contactItems = [
        { label: "Email", value: contacts.email, href: `mailto:${contacts.email}` },
        { label: "LinkedIn", value: "linkedin.com/in/kshitizjauhari", href: contacts.linkedin },
        { label: "GitHub", value: "github.com/kshitizjauhari18", href: contacts.github },
        { label: "LeetCode", value: "leetcode.com/u/kshitiz18max", href: contacts.leetcode }
    ];

    contactItems.forEach((item) => {
        const link = document.createElement("a");
        link.className = "contact-card";
        link.href = item.href;
        if (!item.href.startsWith("mailto:")) {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        }
        link.innerHTML = `
      <span class="contact-label">${item.label}</span>
      <span class="contact-value">${item.value}</span>
    `;
        contactLinks.appendChild(link);
    });

    // Mobile Nav Toggle
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");
    navToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });
});