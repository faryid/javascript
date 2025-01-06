// Files manager
const FILES = [];

// First download then print.
download("JetBrains IDE", 17)
  .then((file) => console.log(file))
  .catch((error) => console.log(error));

console.log("Other process start");

setTimeout(function () {
  // Other process end after 5 secs.
  console.log("Other process ended");
}, 5000);

// Other download do nothing.
download("Notepad++", 3)
  .then((file) => save(file))
  .then((saved) => (saved ? "File is saved" : "Failed to saved"))
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

// Second download do nothing.
download("Visual Studio", 7)
  .then((file) => save(file))
  .then((saved) => (saved ? "File is saved" : "Failed to saved"))
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

// Third download do nothing.
download("Android Studio", 23)
  .then((file) => save(file))
  .then((saved) => (saved ? "File is saved" : "Failed to saved"))
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

// Saving API
function save(file) {
  return new Promise((resolve, reject) => {
    try {
      if (file.size > 20) {
        resolve(false);
        return;
      }

      file.created_at = new Date();
      FILES.push(file);
      resolve(true);

    } catch (error) {
      reject(`${error.name}| ${error.message}`);
    }
  });
}

// Download API
function download(name, size) {
  return new Promise((resolve, reject) => {
    try {
      console.log(`Start downloading ${name}...`);

      let downloaded = 0;

      const downloadProcess = setInterval(() => {
        downloaded++;

        // try block cannot catch error from this comparison.
        // if (downloaded === downloadSize) {}
        if (downloaded === size) {
          console.log(`Download ${name} successfully`);

          resolve({ name, size });
          clearInterval(downloadProcess);
        }
      }, 1000);
    } catch (error) {
      reject(`${error.name}| ${error.message}`);
    }
  });
}
