
const fs = require('fs');
const path = require('path');
const { getConfig } = require('./lib/configdb');
const settings = require('./settingss');

if (fs.existsSync(path.resolve('config.env'))) {
  require('dotenv').config({ path: path.resolve('config.env') });
}

// Helper to convert "true"/"false" strings to actual boolean
function convertToBool(text, trueValue = 'true') {
  return text === trueValue;
}

module.exports = {
  // ===== BOT CORE SETTINGS =====
  SESSION_ID: settings.SESSION_ID || process.env.SESSION_ID || "KnightBot!H4sIAAAAAAAAA5VVXZOqOBD9L3nVunwKaNVULeAHiKioqMzWfYgQIAhBQ1Dxlv99C2dmZx52786+habpc/r0SfMLkBJXyEENGPwCJ4ovkKH2yJoTAgNg1HGMKOiCCDIIBgA6mrfMjCuK6qIWncOmdi81m1ObN+rZTBXL11E+9LPORNRewKMLTvUhx+FvCsbCER4u0q5Iiw5T++lI1ngBbnI/W+aXG62G/nW/X2Apb5IX8GgrQkwxSUanFBWIwtxBzRJi+j36rnsS6QE1G8wtjcw8c71Jf5xC5axb5HXfk/NmobuOm5X58Xv0Z/rodZ1e1pt6em5m1swIE+WW5lJHcmvhFlmjVdnzy3Kfj7Q3+hVOCIrsCBGGWfNt3av5KEC75LU3L5AwViISh1pl3nTj5jbr8+6ubrQdnsivkHyTuHjMiF/cRRxszltPlPvZ+DVr5rcQIaapnbvY7F/99ZIrBPkr8SX98Mrx/+heDPfcrllUZ16LLllnz1/t2/RM5flQnl7JspPcZ2vd6ReaaH+P/jlaxZUtWVIam1YcjUx3rNU7tFlz6VA5BMTBHqKZGywa/pM+ZDX9HcteEatWzLHdROizwyI5KCJnsL1nL7z44G9lb8FtVSOdXu/MvnHYpSteqkjakFnhMP08XgqjFUTeXJCz3thJV2yro+z68uzoiBo7AgPh0QUUJbhiFDJckmdM0roARpc1CiliT3kBPeWWTWd7Z7q1ztOzeu2PT+O7YG7EtXxPZ1MvHKNyuNRp5r6ALjjRMkRVhSILV6ykjYuqCiaoAoM/f3YBQTf2NrgWThK6IMa0Yj6pT3kJo4+pfryEYVjWhK0bEprtAVEw4D/DiDFMkqrVsSaQhim+IDOFrAKDGOYV+rtDRFH0HusCWtbtZzaJy99MwNQTW0+SeavYO16bHSEGcV61CVOu0pA9Hi2yuRi5k4keJLqZ6OCT38eg34Tc2NN06O3JiYaVtZ1CXphetCAsqcFWwUI1+5vzXhEX7uUevPxDETAAwRIN7bpzMDsELfuqJx591eINlhfnwPd8PpSGMGP5ug5TbpMug6PjyKTDAiLY1xmr0nLbKYawuO35VTmVrWpOdEvXX1q0CF1wiL6CEUsXF+cjDlLRtFzH7o/ouGOiy2Sh2RyZxXwxVH2FKhAb82OmqqPxaneTvF143x1nfBZH3OZa7CHdriQpSyLDylZG5r1ZsHh6H0ft7RdEVdCkvib0lYEg/FH9uLYThKfTD4IY6IL8mSYpvKCJkiSJUk/st4lt/OM25e9bDD991lZuH2OMnkuBwBbvv5HeNGi9xz+6X2q8r5l/MYrhN2bg8eOeAqWZIax3bL4+cBPLca4HfzesrxdfyTssy2aaCB6Pn11wyiGLS1q0PzES0RJHbZuwYvqn3Te4QBWDxQkMBFVTBFmW+8rjL6cjPaskBwAA",
  PREFIX: getConfig("PREFIX") || "?" || settings.PREFIX,
  CHATBOT: getConfig("CHATBOT") || "on",
  BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "tbnmk",
  MODE: getConfig("MODE") || process.env.MODE || "public",
  REPO: process.env.REPO || "https://github.com/Tomilucky218/Lucky-XD2",
  BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

  // ===== OWNER & DEVELOPER SETTINGS =====
  OWNER_NUMBER: settings.OWNER_NUMBER || process.env.OWNER_NUMBER || "212718398196",
  OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "tbnmk",
  DEV: process.env.DEV || "256789966218",
  DEVELOPER_NUMBER: '256789966218@s.whatsapp.net',
  MENU_AUDIO_URL: process.env.MENU_AUDIO_URL || 'https://files.catbox.moe/3v5i11.mp3',
NEWSLETTER_JID: process.env.NEWSLETTER_JID || '120363420656466131@newsletter',

  // ===== AUTO-RESPONSE SETTINGS =====
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Just seen ur status 😆 🤖*",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*📵 Calls are not allowed on this number unless you have permission. 🚫*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4itzeu.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ʟᴜᴄᴋʏ xᴅ✦ ғʀᴏᴍ ʟᴜᴄᴋʏ ᴛᴇᴄʜ ʜᴜʙ  ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/Tomilucky218/Lucky-XD2",

  // ===== REACTION & STICKER SETTINGS =====
  AUTO_REACT: process.env.AUTO_REACT || "false",
  OWNER_REACT: process.env.OWNER_REACT || "false",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  STICKER_NAME: process.env.STICKER_NAME || "ᴋʜᴀɴ-ᴍᴅ",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",

  // ===== MEDIA & AUTOMATION =====
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/4itzeu.jpg",

  // ===== SECURITY & ANTI-FEATURES =====
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_VV: process.env.ANTI_VV || "true",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  ANTI_BOT: process.env.ANTI_BOT || "true",
  PM_BLOCKER: process.env.PM_BLOCKER || "true",

  // ===== BOT BEHAVIOR & APPEARANCE =====
  DESCRIPTION: process.env.DESCRIPTION || "*© Powered By Lucky Tech Hub*",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_BIO: process.env.AUTO_BIO || "false",
  WELCOME: process.env.WELCOME || "false",
  GOODBYE: process.env.GOODBYE || "false",
  ADMIN_ACTION: process.env.ADMIN_ACTION || "false",
  version: process.env.version || "1.5.0",
  TIMEZONE: settings.TIMEZONE || process.env.TIMEZONE || "Africa/Kampala",

  // ===== CATEGORY-SPECIFIC IMAGE URLs =====
  MENU_IMAGES: {
    '1': process.env.DOWNLOAD_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Download Menu
    '2': process.env.GROUP_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Group Menu
    '3': process.env.FUN_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",       // Fun Menu
    '4': process.env.OWNER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Owner Menu
    '5': process.env.AI_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",         // AI Menu
    '6': process.env.ANIME_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Anime Menu
    '7': process.env.CONVERT_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Convert Menu
    '8': process.env.OTHER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Other Menu
    '9': process.env.REACTION_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Reaction Menu
    '10': process.env.MAIN_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",    // Main Menu
    '11': process.env.LOGO_MAKER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Logo Maker Menu
    '12': process.env.SETTINGS_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Settings Menu
    '13': process.env.AUDIO_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",  // Audio Menu
    '14': process.env.PRIVACY_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg" // Privacy Menu
  }
};
