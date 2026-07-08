document.addEventListener('DOMContentLoaded', () => {

    const refButton = document.getElementById('ref-button'); // Ensure this ID matches your HTML button
    const refText = document.getElementById('ref-text');
    const title = document.getElementById('resume-title');

    // 1. Toggle reference text visibility
    if (refButton && refText) {
        refButton.addEventListener('click', () => {
            if (refText.classList.contains('hidden')) {
                refText.classList.remove('hidden');
                refButton.textContent = 'Hide References';
            } else {
                refText.classList.add('hidden');
                refButton.textContent = 'View Professional References';
            }
        });
    }

    // 2. Easter egg: Honk alert when clicking name
    if (title) {
        title.addEventListener('click', () => {
            alert('🚚 Beep Beep! Leo is ready to build!');
        });
    }

    // 3. Visitor Counter API Call
    // Leave this placeholder for now! You will get this URL in Step 9.
    const functionApi = import.meta.env.VITE_API_URL;

    const getVisitCount = () => {
        fetch(functionApi)
            .then(response => {
                return response.json();
            })
            .then(response => {
                console.log("Website called function API.");
                const count = response.count; 
                document.getElementById('counter').innerText = count; 
            })
            .catch(error => {
                console.log(error);
                document.getElementById('counter').innerText = "Error loading views";
            });
    };

    // Call the counter function to execute it
    getVisitCount();
});