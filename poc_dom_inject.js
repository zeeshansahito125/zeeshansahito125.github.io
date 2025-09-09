const banner = document.createElement("div");
banner.innerHTML = `
  <div style="position:fixed;top:0;left:0;width:100%;background:red;color:white;padding:10px;z-index:9999;text-align:center;">
    ⚠ Security Test: Injected Banner via Stored XSS PoC ⚠
  </div>`;
document.body.prepend(banner);
