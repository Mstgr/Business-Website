document.addEventListener("DOMContentLoaded", function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Optional: Stop observing after animation has been applied
      }
    });
  }, {
    threshold: 0.5 // Trigger when half of the image is visible
  });

  // Select and observe all elements with the class 'fade-in-section'
  document.querySelectorAll('.fade-in-section').forEach(function (section) {
    observer.observe(section);
  });
});

function copyToClipboard(textToCopy) {
  // Copy to clipboard functionality
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