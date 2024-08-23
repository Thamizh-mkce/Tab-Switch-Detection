var statusText = document.getElementById("status");

document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    statusText.textContent = "You have switched to another tab.";
    statusText.style.color = "red";
    alert("Warning: Tab switch dectected!");
  } else {
    statusText.textContent = "You are currently viewing this tab.";
    statusText.style.color = "green";
  }
});
