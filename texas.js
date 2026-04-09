(function () {
    try {
        // Toggle this flag from GitHub
        var DISABLED = false;

        // Optional message
        var MESSAGE = "...";

        // Expose globally
        window.__SITE_CONFIG__ = {
            disabled: DISABLED,
            message: MESSAGE,
        };

        if (DISABLED) {
            // Hide entire page ASAP
            document.documentElement.style.display = "none";

            // Wait for DOM
            document.addEventListener("DOMContentLoaded", function () {
                document.body.innerHTML = `
                <div style="
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: sans-serif;
                    background: #0f172a;
                    color: white;
                    text-align: center;
                    padding: 20px;
                ">
                    <div>
                    <p style="opacity: 0.8;">
                        ${MESSAGE}
                    </p>
                    </div>
                </div>
                `;
                document.documentElement.style.display = "block";
            });
        }
    } catch (e) {
        console.error("zxcvbnm", e);
    }
})();