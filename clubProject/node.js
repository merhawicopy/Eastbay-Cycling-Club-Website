const dns = require("dns");
// Use a different website domain here, not mine!
dns.resolve("docs.python.org", function(err, addresses) {
    if (err) {
        console.log("Some type of error");
    } else {
        console.log(addresses);
}});