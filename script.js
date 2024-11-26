document.getElementById('user-details-form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    
    const userDetails = {
        fullName: document.getElementById('full-name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,
        targetSugarLevel: document.getElementById('target-sugar-level').value,
    };

    
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.style.display = 'block';

    
    setTimeout(() => {
        window.location.href = 'index.html'; 
    }, 2000);
});
