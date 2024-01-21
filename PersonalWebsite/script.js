document.addEventListener("DOMContentLoaded", function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  document.querySelectorAll('.fade-in-section').forEach(function (section) {
    observer.observe(section);
  });
});

function copyToClipboard(textToCopy) {
  var inputElement = document.createElement('input');
  inputElement.setAttribute('value', textToCopy);
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand('copy');
  document.body.removeChild(inputElement);

}
function toggleIcon() {
  var icon = document.getElementById("emailIcon").querySelector("i");
  if (icon.classList.contains("fa-envelope")) {
    icon.classList.remove("fa-envelope");
    icon.classList.add("fa-check");
  }
}