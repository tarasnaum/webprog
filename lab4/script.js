document.addEventListener("DOMContentLoaded", () => {
  saveBrowserInfo();
  displayLocalStorageInfo();
  loadComments();
  setupModalTimer();
  setupTheme();
});

function saveBrowserInfo() {
  localStorage.setItem("userAgent", navigator.userAgent);
  localStorage.setItem("platform", navigator.platform);
  localStorage.setItem("language", navigator.language);
  localStorage.setItem("cookiesEnabled", navigator.cookieEnabled);
  localStorage.setItem("onlineStatus", navigator.onLine);
  localStorage.setItem("screenWidth", window.screen.width);
  localStorage.setItem("screenHeight", window.screen.height);
}

function displayLocalStorageInfo() {
  const storageInfo = document.getElementById("storageInfo");
  storageInfo.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    const div = document.createElement("div");
    div.classList.add("storage-item");
    div.innerHTML = `<strong>${key}:</strong> ${value}`;

    storageInfo.appendChild(div);
  }
}

async function loadComments() {
  const container = document.getElementById("commentsContainer");

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/12/comments",
    );

    const comments = await response.json();

    container.innerHTML = "";

    comments.forEach((comment) => {
      const card = document.createElement("div");
      card.classList.add("comment-card");

      card.innerHTML = `
        <h4>${comment.name}</h4>
        <p><strong>Email:</strong> ${comment.email}</p>
        <p>${comment.body}</p>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = "<p>Не вдалося завантажити коментарі</p>";
    console.error(error);
  }
}

function setupModalTimer() {
  const modal = document.getElementById("feedbackModal");
  const closeBtn = document.getElementById("closeModal");

  setTimeout(() => {
    modal.style.display = "flex";
  }, 60000); // 1 хвилина

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

function setupTheme() {
  const toggle = document.getElementById("themeToggle");
  const label = document.getElementById("themeLabel");

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyAutoTheme();
  }

  toggle.addEventListener("change", () => {
    const theme = toggle.checked ? "dark" : "light";

    applyTheme(theme);
    localStorage.setItem("theme", theme);

    displayLocalStorageInfo();
  });

  function applyTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
      toggle.checked = true;
      label.textContent = "Темна тема";
    } else {
      document.body.classList.remove("dark-theme");
      toggle.checked = false;
      label.textContent = "Світла тема";
    }
  }

  function applyAutoTheme() {
    const hour = new Date().getHours();

    if (hour >= 7 && hour < 21) {
      applyTheme("light");
    } else {
      applyTheme("dark");
    }
  }
}
