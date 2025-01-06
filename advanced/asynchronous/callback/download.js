// Files manager
const files = [];

// Add file to files manager.
const addFile = (file) => files.push(file);

// First download then add file.
download("JetBrains IDE", 17, addFile);

console.log("Other process start");

setTimeout(function () {
  // Other process end after 5 secs.
  console.log("Other process ended");
}, 5000);

// Second download then add file.
download("Visual Studio", 7, addFile);

// Download API
function download(name, downloadSize, callback) {
  console.log(`Start downloading ${name}...`);

  let downloaded = 0;

  let downloadProcess = setInterval(() => {
    downloaded++;

    if (downloaded === downloadSize) {
      console.log(`Download ${name} successfully`);
      callback({ name, size: downloadSize });
      clearInterval(downloadProcess);
    }
  }, 1000);
}
