function submitSignIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
   
    // Dito ay naglalagay tayo ng dummy credentials para sa simpleng halimbawa
    const adminEmail = 'admin@example.com';
    const adminPassword = 'password123';
 
    if (email === adminEmail && password === adminPassword) {
        // Kung tama ang email at password, dadalhin sa admin dashboard
        window.location.href = 'admin.html'; // Palitan ito sa aktwal na URL ng iyong admin dashboard
    } else {
        message.innerText = 'Mali ang email o password. Subukan muli.';
    }
 }

 alert("hiiii")