/*
name: rankcard
author: Leiam Nash 
version: 1.0.1
description: install package using  my code you can customize the dirname at line 9
note: this program uses fs-extra and request package you can see it on npm 
*/
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/rankcard/`;
  if (!fs.existsSync(dirMaterial + "rankcard")) fs.mkdirSync(dirMaterial, { recursive: true });   
  if (!fs.existsSync(dirMaterial + "bold-font.ttf")) request("https://github.com/LeiamNashRebirth/Package/blob/main/rankcard/bold-font.ttf?raw=true").pipe(fs.createWriteStream(dirMaterial + "bold-font.ttf"));
  if (!fs.existsSync(dirMaterial + "regular-font.ttf")) request("https://github.com/LeiamNashRebirth/Package/blob/main/rankcard/regular-font.ttf?raw=true").pipe(fs.createWriteStream(dirMaterial + "regular-font.ttf"));
  if (!fs.existsSync(dirMaterial + "rankcard1.png")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/rankcard/rankcard1.png").pipe(fs.createWriteStream(dirMaterial + "rankcard1.png"));
  if (!fs.existsSync(dirMaterial + "rankcard2.png")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/rankcard/rankcard2.png").pipe(fs.createWriteStream(dirMaterial + "rankcard2.png"));
  if (!fs.existsSync(dirMaterial + "rankcard3.png")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/rankcard/rankcard3.png").pipe(fs.createWriteStream(dirMaterial + "rankcard3.png"));
  if (!fs.existsSync(dirMaterial + "rankcard4.png")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/rankcard/rankcard4.png").pipe(fs.createWriteStream(dirMaterial + "rankcard4.png"));
  if (!fs.existsSync(dirMaterial + "rankcard5.png")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/rankcard/rankcard5.png").pipe(fs.createWriteStream(dirMaterial + "rankcard5.png"));
  if (!fs.existsSync(dirMaterial + "rankcard6.png")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/rankcard/rankcard6.png").pipe(fs.createWriteStream(dirMaterial + "rankcard6.png"));
  if (!fs.existsSync(dirMaterial + "rankcard7.png")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/rankcard/rankcard7.png").pipe(fs.createWriteStream(dirMaterial + "rankcard7.png"));
  if (!fs.existsSync(dirMaterial + "rankcard8.png")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/rankcard/rankcard8.png").pipe(fs.createWriteStream(dirMaterial + "rankcard8.png"));
  if (!fs.existsSync(dirMaterial + "rankcard9.png")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/rankcard/rankcard9.png").pipe(fs.createWriteStream(dirMaterial + "rankcard9.png"));
  if (!fs.existsSync(dirMaterial + "rankcard10.png")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/rankcard/rankcard10.png").pipe(fs.createWriteStream(dirMaterial + "rankcard10.png"));
  if (!fs.existsSync(dirMaterial + "rankcard11.png")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/rankcard/rankcard11.png").pipe(fs.createWriteStream(dirMaterial + "rankcard11.png"));
 if (!fs.existsSync(dirMaterial + "rankcard12.png")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/rankcard/rankcard12.png").pipe(fs.createWriteStream(dirMaterial + "rankcard12.png"));
  if (!fs.existsSync(dirMaterial + "rankcard13.png")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/rankcard/rankcard13.png").pipe(fs.createWriteStream(dirMaterial + "rankcard13.png"));
  if (!fs.existsSync(dirMaterial + "rankcard14.png")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/rankcard/rankcard14.png").pipe(fs.createWriteStream(dirMaterial + "rankcard14.png"));
  if (!fs.existsSync(dirMaterial + "rankcard15.png")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/rankcard/rankcard15.png").pipe(fs.createWriteStream(dirMaterial + "rankcard15.png"));
  if (!fs.existsSync(dirMaterial + "rankcard16.png")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/rankcard/rankcard16.png").pipe(fs.createWriteStream(dirMaterial + "rankcard16.png"));
  if (!fs.existsSync(dirMaterial + "rankcard17.png")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/rankcard/rankcard17.png").pipe(fs.createWriteStream(dirMaterial + "rankcard17.png"));
  if (!fs.existsSync(dirMaterial + "rankcard18.png")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/rankcard/rankcard18.png").pipe(fs.createWriteStream(dirMaterial + "rankcard18.png"));
  if (!fs.existsSync(dirMaterial + "rankcard19.png")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/rankcard/rankcard19.png").pipe(fs.createWriteStream(dirMaterial + "rankcard19.png"));
  if (!fs.existsSync(dirMaterial + "rankcard20.png")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/rankcard/rankcard20.png").pipe(fs.createWriteStream(dirMaterial + "rankcard20.png"));
  if (!fs.existsSync(dirMaterial + "rankcard21.png")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/rankcard/rankcard21.png").pipe(fs.createWriteStream(dirMaterial + "rankcard21.png"));
  if (!fs.existsSync(dirMaterial + "rankcard22.png")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/rankcard/rankcard22.png").pipe(fs.createWriteStream(dirMaterial + "rankcard22.png"));
  if (!fs.existsSync(dirMaterial + "rankcard23.png")) request("https://raw.githubusercontent.com/LeiamNashRebirth/Package/main/rankcard/rankcard23.png").pipe(fs.createWriteStream(dirMaterial + "rankcard23.png"));  
}
