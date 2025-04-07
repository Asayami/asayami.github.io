function toggleIcon(iconId, contentId) {
  const icon = document.getElementById(iconId);
  const content = document.getElementById(contentId);

  setTimeout(() => {
    icon.classList.toggle("open", content.classList.contains("show"));
  }, 380);
}
