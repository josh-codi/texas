(function () {
  var CONFIG_URL =
    "https://cdn.jsdelivr.net/gh/josh-codi/texas@main/config.json";

  function applyBlock(message) {
    document.documentElement.style.display = "none";

    document.addEventListener("DOMContentLoaded", function () {
      document.body.innerHTML = `
        <div style="
          height:100vh;
          display:flex;
          align-items:center;
          justify-content:center;
          font-family:sans-serif;
          background:#0f172a;
          color:white;
          text-align:center;
        ">
          <div>
            <h1>Maintenance Mode</h1>
            <p>${message}</p>
          </div>
        </div>
      `;

      document.documentElement.style.display = "block";
    });
  }

  function init() {
    fetch(CONFIG_URL)
      .then(function (res) {
        return res.json();
      })
      .then(function (config) {
        window.__REMOTE_CONFIG__ = config;

        var vendor = window.__VENDOR__ || null;

        if (config.globalDisabled) {
          applyBlock(config.message);
          return;
        }

        if (vendor && config.vendors[vendor]) {
          applyBlock(config.message);
          return;
        }

        document.documentElement.style.display = "block";
      })
      .catch(function () {
        document.documentElement.style.display = "block";
      });
  }

  init();
})();
