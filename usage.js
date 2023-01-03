module.exports.onLoad = () => {
  const fs = require("fs-extra");
    const request = require("request");
 var dirMaterial = __dirname + `/cache/leiamnash/`;
  if (!fs.existsSync(dirMaterial + "leiamnash1.jpg")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/usage/leiamnash1.png").pipe(fs.createWriteStream(dirMaterial + "leiamnash1.jpg"));
  if (!fs.existsSync(dirMaterial + "leiamnash2.jpg")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/usage/leiamnash2.png").pipe(fs.createWriteStream(dirMaterial + "leiamnash2.jpg"));
  if (!fs.existsSync(dirMaterial + "leiamnash3.jpg")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/usage/leiamnash3.png").pipe(fs.createWriteStream(dirMaterial + "leiamnash3.jpg"));
  if (!fs.existsSync(dirMaterial + "leiamnash4.jpg")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/usage/leiamnash4.png").pipe(fs.createWriteStream(dirMaterial + "leiamnash4.jpg"));
  if (!fs.existsSync(dirMaterial + "leiamnash5.jpg")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/usage/leiamnash5.png").pipe(fs.createWriteStream(dirMaterial + "leiamnash5.jpg"));
};
