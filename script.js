script.js

function showPage(pageId) {
       var pages = document.querySelectorAll('.page');
       for (var i = 0; i < pages.length; i++) {
           pages[i].classList.remove('active');
       }
       document.getElementById(pageId).classList.add('active');
   }

   function handleLogin(e) {
       e.preventDefault();
       var email = document.getElementById('login-email').value;
       var password = document.getElementById('login-password').value;
       
       if (email && password) {
           alert('Login successful! Welcome back.');
       }
   }

   function handleSignup(e) {
       e.preventDefault();
       var name = document.getElementById('signup-name').value;
       var email = document.getElementById('signup-email').value;
       var password = document.getElementById('signup-password').value;
       var confirm = document.getElementById('signup-confirm').value;
       
       if (password !== confirm) {
           alert('Passwords do not match!');
           return;
       }
       
       if (name && email && password) {
           alert('Account created successfully! Please login.');
           showPage('login');
       }
   }
   