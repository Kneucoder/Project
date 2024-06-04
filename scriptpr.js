function toggleMenu() {
    var menu = document.getElementById('nav ul li');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  }


  document.addEventListener("DOMContentLoaded", function() {
    var letters = document.querySelectorAll("#text-container span");
    letters.forEach(function(letter, index) {
      setTimeout(function() {
        letter.style.opacity = 1;
      }, index * 700); // Adjust the delay as needed
    });
  });
  
  const words = document.querySelectorAll('.highlight');
let index = 0;

function highlightWords() {
  if (index < words.length) {
    words[index].classList.add('active');
    index++;
  } else {
    clearInterval(interval);
  }
}



const interval = setInterval(highlightWords, 1000); // Change the interval duration as needed
document.addEventListener("DOMContentLoaded", function() {
  var cookieConsentPopup = document.getElementById('cookie-consent-popup');
  var acceptCookiesBtn = document.getElementById('accept-cookies-btn');
  
  // Check if the user has previously accepted cookies
  var cookiesAccepted = localStorage.getItem('cookiesAccepted');
  
  if (!cookiesAccepted) {
    // Show the cookie consent popup if cookies have not been accepted
    cookieConsentPopup.style.display = 'block';
  }
  
  acceptCookiesBtn.addEventListener('click', function() {
    // Hide the cookie consent popup
    cookieConsentPopup.style.display = 'none';
    
    // Set a flag in localStorage to indicate that cookies have been accepted
    localStorage.setItem('cookiesAccepted', 'true');
  });
});
    // Handle form submission
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(this);

        // You can handle form submission here, e.g., send the data to a server using AJAX
        // Example:
        // const xhr = new XMLHttpRequest();
        // xhr.open('POST', 'submit_form.php');
        // xhr.setRequestHeader('Content-Type', 'application/json');
        // xhr.onload = function() {
        //     if (xhr.status === 200) {
        //         console.log('Form submitted successfully');
        //         // Optionally, display a success message to the user
        //     } else {
        //         console.error('Form submission failed');
        //         // Optionally, display an error message to the user
        //     }
        // };
        // xhr.send(JSON.stringify(Object.fromEntries(formData)));

        // For demonstration purposes, log form data to the console
        console.log(Object.fromEntries(formData));
    });


function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } 
      else {
        cursorSpan.classList.remove("typing");
      	setTimeout(erase, newTextDelay);
      }
    }
    
    function erase() {
    	if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } 
      else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
      }
    }
    
    

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var totalHeight = document.body.scrollHeight - window.innerHeight;
  var scrollPercentage = (scrollPosition / totalHeight) * 100;
  var scrollBar = document.getElementById('scroll-bar');
  scrollBar.style.width = scrollPercentage + '%';
});



document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form data
  var formData = new FormData(this);
  
  // Send form data to server
  fetch('send_email.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    document.getElementById('response').innerHTML = data;
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('response').innerHTML = 'An error occurred. Please try again later.';
  });
});
