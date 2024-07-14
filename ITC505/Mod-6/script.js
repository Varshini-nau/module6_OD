// Get the last modified date and display it in the footer
var lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

var dynamicContent = document.getElementById('dynamic-content');

// Add event listener to the parent container
dynamicContent.addEventListener('click', function(event) {
    if (event.target.id === 'change-content-btn') {
        dynamicContent.innerHTML = `
            <h2>See ya!</h2>
            <p>Go back to see this change again!</p>
            <button id="reset-content-btn">Reset Content</button>
        `;
    } else if (event.target.id === 'reset-content-btn') {
        dynamicContent.innerHTML = `
            <h2>Welcome!</h2>
            <p>Hello, I'm Varshini and this is my Interactive Webpage.</p>
            <button id="change-content-btn">Change Content</button>
        `;
    }
});
