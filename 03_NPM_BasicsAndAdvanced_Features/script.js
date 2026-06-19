/*
==================================================
🟢 NPM (Node Package Manager)
==================================================
📘 Originally known as Node Package Manager, but now 
it doesn’t have an official full form.

It is used to:
- Install, update, and manage packages (libraries)
- Share your own packages
- Manage project dependencies
==================================================
*/

// Example: Checking NPM and Node version
console.log("Node Version:", process.version); // prints current Node.js version
// Run in terminal: node <filename.js>

/*
==================================================
📦 Modules vs Packages
==================================================
- Modules: Built-in libraries that come with Node.js 
  (like fs, http, path, os, etc.)
- Packages: Third-party modules that are installed 
  using npm.
==================================================
*/

// Example: Using a built-in Node.js module
const os = require('os');
console.log("Operating System:", os.platform());

/*
==================================================
📝 Creating package.json
==================================================
Command:
  👉 npm init
  - Creates a `package.json` file by asking some questions.

  👉 npm init -y
  - Creates a `package.json` file with default values.

📘 package.json = Manifest file
Contains:
  - Project name, version, author, license
  - Dependencies and scripts
==================================================
*/

/*
==================================================
📦 Installing and Uninstalling Packages
==================================================
👉 npm install <package_name>
    → Installs a package (adds entry in dependencies)

👉 npm uninstall <package_name>
    → Uninstalls a package and removes it from dependencies

✅ Everything installed is considered a "dependency".
==================================================
*/

// Example: Installing a package
// Run in terminal:
// npm install chalk

// Example usage (after installing chalk)
try {
  const chalk = require("chalk");
  console.log(chalk.green("✅ Chalk package installed successfully!"));
} catch (error) {
  console.log("⚠️ Chalk not installed yet! Run: npm install chalk");
}

/*
==================================================
📌 Installing Specific Versions
==================================================
👉 npm install <package_name>@<version>
    → Installs a specific version of the package.

Example:
  npm install express@4.18.2

👉 If version not mentioned, installs the latest one.
==================================================
*/

/*
==================================================
📂 node_modules Folder
==================================================
- After installing packages, they are stored inside the 
  'node_modules' folder.

- It contains:
  - All installed dependencies
  - Their sub-dependencies

⚠️ Never manually edit this folder.
⚠️ Usually not uploaded to GitHub — we use `.gitignore`.
==================================================
*/

/*
==================================================
🧾 Bonus Commands
==================================================
👉 npm list
    → Shows all installed packages.

👉 npm outdated
    → Shows which packages have new versions.

👉 npm update
    → Updates all outdated packages.

👉 npm cache clean --force
    → Clears npm cache (for fixing weird issues)
==================================================
*/

console.log("\n🎯 NPM Concepts Covered Successfully!");
/*
==================================================
🟢 NPM (Node Package Manager)
==================================================
📘 Originally known as Node Package Manager, but now 
it doesn’t have an official full form.

It is used to:
- Install, update, and manage packages (libraries)
- Share your own packages
- Manage project dependencies
==================================================
*/

// Example: Checking NPM and Node version
console.log("Node Version:", process.version); // prints current Node.js version
// Run in terminal: node <filename.js>

/*
==================================================
📦 Modules vs Packages
==================================================
- Modules: Built-in libraries that come with Node.js 
  (like fs, http, path, os, etc.)
- Packages: Third-party modules that are installed 
  using npm.
==================================================
*/

// Example: Using a built-in Node.js module
const os = require('os');
console.log("Operating System:", os.platform());

/*
==================================================
📝 Creating package.json
==================================================
Command:
  👉 npm init
  - Creates a `package.json` file by asking some questions.

  👉 npm init -y
  - Creates a `package.json` file with default values.

📘 package.json = Manifest file
Contains:
  - Project name, version, author, license
  - Dependencies and scripts
==================================================
*/

/*
==================================================
📦 Installing and Uninstalling Packages
==================================================
👉 npm install <package_name>
    → Installs a package (adds entry in dependencies)

👉 npm uninstall <package_name>
    → Uninstalls a package and removes it from dependencies

✅ Everything installed is considered a "dependency".
==================================================
*/

// Example: Installing a package
// Run in terminal:
// npm install chalk

// Example usage (after installing chalk)
try {
  const chalk = require("chalk");
  console.log(chalk.green("✅ Chalk package installed successfully!"));
} catch (error) {
  console.log("⚠️ Chalk not installed yet! Run: npm install chalk");
}

/*
==================================================
📌 Installing Specific Versions
==================================================
👉 npm install <package_name>@<version>
    → Installs a specific version of the package.

Example:
  npm install express@4.18.2

👉 If version not mentioned, installs the latest one.
==================================================
*/

/*
==================================================
📂 node_modules Folder
==================================================
- After installing packages, they are stored inside the 
  'node_modules' folder.

- It contains:
  - All installed dependencies
  - Their sub-dependencies

⚠️ Never manually edit this folder.
⚠️ Usually not uploaded to GitHub — we use `.gitignore`.
==================================================
*/

/*
==================================================
🧾 Bonus Commands
==================================================
👉 npm list
    → Shows all installed packages.

👉 npm outdated
    → Shows which packages have new versions.

👉 npm update
    → Updates all outdated packages.

👉 npm cache clean --force
    → Clears npm cache (for fixing weird issues)
==================================================
*/

console.log("\n🎯 NPM Concepts Covered Successfully!");
/*
==================================================
🟢 NPM (Node Package Manager)
==================================================
📘 Originally known as Node Package Manager, but now 
it doesn’t have an official full form.

It is used to:
- Install, update, and manage packages (libraries)
- Share your own packages
- Manage project dependencies
==================================================
*/

// Example: Checking NPM and Node version
console.log("Node Version:", process.version); // prints current Node.js version
// Run in terminal: node <filename.js>

/*
==================================================
📦 Modules vs Packages
==================================================
- Modules: Built-in libraries that come with Node.js 
  (like fs, http, path, os, etc.)
- Packages: Third-party modules that are installed 
  using npm.
==================================================
*/

// Example: Using a built-in Node.js module
const os = require('os');
console.log("Operating System:", os.platform());

/*
==================================================
📝 Creating package.json
==================================================
Command:
  👉 npm init
  - Creates a `package.json` file by asking some questions.

  👉 npm init -y
  - Creates a `package.json` file with default values.

📘 package.json = Manifest file
Contains:
  - Project name, version, author, license
  - Dependencies and scripts
==================================================
*/

/*
==================================================
📦 Installing and Uninstalling Packages
==================================================
👉 npm install <package_name>
    → Installs a package (adds entry in dependencies)

👉 npm uninstall <package_name>
    → Uninstalls a package and removes it from dependencies

✅ Everything installed is considered a "dependency".
==================================================
*/

// Example: Installing a package
// Run in terminal:
// npm install chalk

// Example usage (after installing chalk)
try {
  const chalk = require("chalk");
  console.log(chalk.green("✅ Chalk package installed successfully!"));
} catch (error) {
  console.log("⚠️ Chalk not installed yet! Run: npm install chalk");
}

/*
==================================================
📌 Installing Specific Versions
==================================================
👉 npm install <package_name>@<version>
    → Installs a specific version of the package.

Example:
  npm install express@4.18.2

👉 If version not mentioned, installs the latest one.
==================================================
*/

/*
==================================================
📂 node_modules Folder
==================================================
- After installing packages, they are stored inside the 
  'node_modules' folder.

- It contains:
  - All installed dependencies
  - Their sub-dependencies

⚠️ Never manually edit this folder.
⚠️ Usually not uploaded to GitHub — we use `.gitignore`.
==================================================
*/

/*
==================================================
🧾 Bonus Commands
==================================================
👉 npm list
    → Shows all installed packages.

👉 npm outdated
    → Shows which packages have new versions.

👉 npm update
    → Updates all outdated packages.

👉 npm cache clean --force
    → Clears npm cache (for fixing weird issues)
==================================================
*/

console.log("\n🎯 NPM Concepts Covered Successfully!");
/*
==================================================
🟢 NPM (Node Package Manager)
==================================================
📘 Originally known as Node Package Manager, but now 
it doesn’t have an official full form.

It is used to:
- Install, update, and manage packages (libraries)
- Share your own packages
- Manage project dependencies
==================================================
*/

// Example: Checking NPM and Node version
console.log("Node Version:", process.version); // prints current Node.js version
// Run in terminal: node <filename.js>

/*
==================================================
📦 Modules vs Packages
==================================================
- Modules: Built-in libraries that come with Node.js 
  (like fs, http, path, os, etc.)
- Packages: Third-party modules that are installed 
  using npm.
==================================================
*/

// Example: Using a built-in Node.js module
const os = require('os');
console.log("Operating System:", os.platform());

/*
==================================================
📝 Creating package.json
==================================================
Command:
  👉 npm init
  - Creates a `package.json` file by asking some questions.

  👉 npm init -y
  - Creates a `package.json` file with default values.

📘 package.json = Manifest file
Contains:
  - Project name, version, author, license
  - Dependencies and scripts
==================================================
*/

/*
==================================================
📦 Installing and Uninstalling Packages
==================================================
👉 npm install <package_name>
    → Installs a package (adds entry in dependencies)

👉 npm uninstall <package_name>
    → Uninstalls a package and removes it from dependencies

✅ Everything installed is considered a "dependency".
==================================================
*/

// Example: Installing a package
// Run in terminal:
// npm install chalk

// Example usage (after installing chalk)
try {
  const chalk = require("chalk");
  console.log(chalk.green("✅ Chalk package installed successfully!"));
} catch (error) {
  console.log("⚠️ Chalk not installed yet! Run: npm install chalk");
}

/*
==================================================
📌 Installing Specific Versions
==================================================
👉 npm install <package_name>@<version>
    → Installs a specific version of the package.

Example:
  npm install express@4.18.2

👉 If version not mentioned, installs the latest one.
==================================================
*/

/*
==================================================
📂 node_modules Folder
==================================================
- After installing packages, they are stored inside the 
  'node_modules' folder.

- It contains:
  - All installed dependencies
  - Their sub-dependencies

⚠️ Never manually edit this folder.
⚠️ Usually not uploaded to GitHub — we use `.gitignore`.
==================================================
*/

/*
==================================================
🧾 Bonus Commands
==================================================
👉 npm list
    → Shows all installed packages.

👉 npm outdated
    → Shows which packages have new versions.

👉 npm update
    → Updates all outdated packages.

👉 npm cache clean --force
    → Clears npm cache (for fixing weird issues)
==================================================
*/

console.log("\n🎯 NPM Concepts Covered Successfully!");
