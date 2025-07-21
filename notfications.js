document.addEventListener("DOMContentLoaded", () => {
  // === Notification Logic ===
  const notificationBtn = document.getElementById("notificationBtn");
  const notificationBox = document.getElementById("notificationBox");
  const notificationList = document.getElementById("notificationList");

  if (notificationBtn && notificationBox && notificationList) {
    // Toggle notification box
    notificationBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      notificationBox.classList.toggle("show");
    });

    // Close notification box when clicking outside
    document.addEventListener("click", (e) => {
      if (!notificationBox.contains(e.target) && !notificationBtn.contains(e.target)) {
        notificationBox.classList.remove("show");
      }
    });

    // Prevent close when clicking inside
    notificationBox.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    // Load stored notifications on page load
    loadNotifications();

    // Save new notification to localStorage
    window.saveNotification = function (message) {
      let notifications = JSON.parse(localStorage.getItem("notifications")) || [];
      notifications.unshift(message);
      localStorage.setItem("notifications", JSON.stringify(notifications));
      loadNotifications(); // refresh display
    };

    // Populate notification list with copy buttons
    function loadNotifications() {
      notificationList.innerHTML = "";

      const notifications = JSON.parse(localStorage.getItem("notifications")) || [];
      if (notifications.length === 0) {
        notificationList.innerHTML = "<li>No new notifications.</li>";
        return;
      }

      notifications.forEach((msg) => {
        const li = document.createElement("li");

        const textSpan = document.createElement("span");
        textSpan.textContent = msg;

        const copyBtn = document.createElement("span");
        copyBtn.className = "copy-icon";
        copyBtn.textContent = "📋";
        copyBtn.title = "Copy Token";
        copyBtn.style.marginLeft = "8px";
        copyBtn.style.cursor = "pointer";

        copyBtn.addEventListener("click", () => {
          navigator.clipboard.writeText(msg).then(() => {
            copyBtn.textContent = "✅";
            setTimeout(() => (copyBtn.textContent = "📋"), 1500);
          });
        });

        li.appendChild(textSpan);
        li.appendChild(copyBtn);
        notificationList.appendChild(li);
      });
    }
  } else {
    console.warn("Notification elements not found.");
  }

  // === Chat Support Logic ===
  const chatBtn = document.getElementById("chatSupport");
  const popup = document.getElementById("supportPopup");

  if (chatBtn && popup) {
    // Toggle popup on button click
    chatBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent immediate close
      popup.classList.toggle("show");
    });

    // Auto-close when clicking outside
    document.addEventListener("click", (e) => {
      const isClickInsidePopup = popup.contains(e.target);
      const isClickOnButton = chatBtn.contains(e.target);

      if (!isClickInsidePopup && !isClickOnButton) {
        popup.classList.remove("show");
      }
    });

    // Prevent popup from closing when clicking inside
    popup.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  } else {
    console.warn("Chat support elements not found.");
  }
});


  function contactSupport() {
    const email = "backendmarkets@gmail.com";
    const subject = encodeURIComponent("Support Request");
    const body = encodeURIComponent("Hello, I need help with...");
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
  }
