function openDetail(id) {
  document.getElementById(id).style.display = "block";
}

function closeDetail() {
  document.querySelectorAll(".modal").forEach(m => {
    m.style.display = "none";
  });
}