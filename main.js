document.addEventListener('DOMContentLoaded', () => {

    const refButton = document.getElementById('ref-button'); // Ensure this ID matches your HTML button
    const refText = document.getElementById('ref-text');
    const title = document.getElementById('resume-title');

    // Toggle reference text visibility
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

    // Easter egg: Honk alert when clicking name
    if (title) {
        title.addEventListener('click', () => {
            alert('🚚 Beep Beep! Leo is ready to build!');
        });
    }

    // Visitor Counter API Call
    const functionApi = "https://thecloudresumechallenge-counter-api-552136933494.us-central1.run.app";
    const SESSION_KEY = 'resume_visitor_counted';

    const getVisitCount = () => {
        const el = document.getElementById('counter');
        if (!el) return;
        // Check if we already fetched and stored the count for this session
        const cachedCount = sessionStorage.getItem(SESSION_KEY);
        
        if (cachedCount !== null) {
            console.log("Session key found. Showing cached count.")
            el.innerText = cachedCount;
        } 
        else {
            fetch(functionApi)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log("Website called function API.");
                    const count = data.count; 
                    el.innerText = count; 
                    
                    sessionStorage.setItem(SESSION_KEY, count);
                })
                .catch(error => {
                    console.log(error);
                    el.innerText = "Error loading views";
                });
        }
    };

    // Call the counter function to execute it
    getVisitCount();
});