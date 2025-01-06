// First download
download("JetBrains IDE", 17);

console.log("Other process start");

setTimeout(function () {
  // Other process end after 5 secs.
  console.log("Other process ended");
}, 5000);

// Second download
download("Visual Studio", 7);

// Download API
function download(name, downloadSize) {
  console.log(`Start downloading ${name}...`);

  let downloaded = 0;

  let downloadProcess = setInterval(() => {
    downloaded++;

    if (downloaded === downloadSize) {
      console.log(`Download ${name} successfully`);
      clearInterval(downloadProcess);
    }

  }, 1000);
}
