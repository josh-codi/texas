(function () {
    try {
        var d = true;
        var m = "...";

        // Expose globally
        window.__SITE_CONFIG__ = {
            disabled: d,
            message: m,
        };

        if (d) {
            // document.documentElement.style.display = "none";

            // Wait for DOM
            document.addEventListener("DOMContentLoaded", function () {
                document.body.style.opacity = "0.1";
                // document.documentElement.style.display = "block";
            });
        }
    } catch (e) {
        console.error("zxcvbnm", e);
    }
})();
