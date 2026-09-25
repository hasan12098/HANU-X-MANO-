
// config.js - ESM Version
import dotenv from 'dotenv';
dotenv.config();

const config = {
    // MongoDB Configuration (only this is from process.env)
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://khanhere4056_db_user:DBWnPIMb01xpAv0E@cluster0.47lnm24.mongodb.net/?appName=Cluster0',
    
    // Fixed Database Name
    DB_NAME: process.env.DB_NAME || 'jawadm',
    
    // Collections Configuration
    COLLECTIONS: {
        SESSIONS: 'whatsapp_sessions',
        NUMBERS: 'active_numbers',
        CONFIGS: 'bot_configs'
    },
    
    // Bot Configuration
    AUTO_VIEW_STATUS: 'true',
    AUTO_LIKE_STATUS: 'false',  // ADDED - Auto like status messages
    MENTION_REPLY: 'false',
    AUTO_RECORDING: 'false',
    AUTO_REACT: 'false',
    AUTO_TYPING: 'false',
    ALWAYS_ONLINE: 'false',
    VERSION: '3.0.0 Bᴇᴛᴀ',
    DESCRIPTION: '*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Η𝔸𝑵Ս-ᎷＤ🚩*',
    ANTI_DELETE_PATH: 'inbox',
    ANTI_DELETE: 'false',
    ANTI_EDIT_PATH: 'inbox',
    ANTI_EDIT: 'false',
    STICKER_NAME: 'Η𝔸𝑵Ս-ᎷＤ🚩',
    ANTI_LINK: 'true',
    WELCOME: 'false',
    GOODBYE: 'false',
    WELCOME_MESSAGE: '*_@user joined the group, welcome! 🎉_*',
    GOODBYE_MESSAGE: '*_@user has left the group, we will miss them! 👋_*',
    ADMIN_ACTION: 'false',
    MODE: 'public',
    PREFIX: '.',
    ANTI_CALL: 'false',
    REJECT_MSG: '*Call Rejected Automatically 📵*',
    READ_MESSAGE: 'false',
    AUTO_STATUS_SEEN: 'true',
    OWNER_REACT: 'false',
    OWNER_EMOJIS: ['❤️', '🔥', '👑', '⭐', '💎'],
    REACT_EMOJIS: ['🌈', '🕊️', '🌚', '🦢', '🎀', '💗', '🌺', '🌝', '🦋', '💐', '👀', '🍂', '🫶', '🤌', '💕', '🫠', '🫀', '🫰', '🪽', '🪐'], 
    LIKE_EMOJIS: ['❤️', '👍', '😮', '😎', '💀'],  // ADDED - Emojis for auto like status
    
    // Bot Identity
    BOT_NAME: 'Η𝔸𝑵Ս-ᎷＤ🚩',
    OWNER_NAME: 'Η𝔸𝑵Ս-ᎷＤ🚩',
    OWNER_NUMBER: '923005787307',
    DEV: '923005787307',
    IK_IMAGE_PATH: './lib/hanumd.jpg',
    BOT_IMAGE: 'https://files.catbox.moe/zrg712.png',
    
    // Newsletter Configuration
    NEWSLETTER_JID: '120363427595490126@newsletter',
    NEWSLETTER_MESSAGE_ID: '428',  
    
    // System Configuration
    MAX_RETRIES: 3,
    OTP_EXPIRY: 300000,
    ADMIN_LIST_PATH: './admin.json',
    CHANNEL_LINK: 'https://whatsapp.com/channel/0029VbDPjIJ96H4OlXJhbX21',
    BANNED: [],
    SUDO: ["923005787307@s.whatsapp.net"],
    
    // Default Settings Template
    DEFAULT_SETTINGS: {
        // Status & View Settings
        AUTO_VIEW_STATUS: 'true',
        AUTO_LIKE_STATUS: 'false',  // ADDED - Auto like status (disabled by default)
        MENTION_REPLY: 'false',
        AUTO_STATUS_SEEN: 'true',
        READ_MESSAGE: 'false',
        
        // Auto Actions
        AUTO_RECORDING: 'false',
        AUTO_REACT: 'false',
        AUTO_TYPING: 'false',
        ALWAYS_ONLINE: 'false',
        OWNER_REACT: 'false',
        
        // Anti Features
        ANTI_DELETE: 'false',
        ANTI_DELETE_PATH: 'inbox',
        ANTI_EDIT: 'false',
        ANTI_EDIT_PATH: 'inbox',
        ANTI_CALL: 'false',
        ANTI_LINK: 'true',
        
        // Group Events
        WELCOME: 'false',
        GOODBYE: 'false',
        ADMIN_ACTION: 'false',
        
        // Message Templates
        WELCOME_MESSAGE: '*_@user joined the group, welcome! 🎉_*',
        GOODBYE_MESSAGE: '*_@user has left the group, we will miss them! 👋_*',
        REJECT_MSG: '*Call Rejected Automatically 📵*',
        
        // Bot Identity
        VERSION: '7.0.0 Bᴇᴛᴀ',
        OWNER_NAME: 'Η𝔸𝑵Ս-ᎷＤ🚩',
        OWNER_NUMBER: '923005787307',
        DEV: '923005787307',
        DESCRIPTION: '*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Η𝔸𝑵Ս-ᎷＤ🚩*',
        STICKER_NAME: 'Η𝔸𝑵Ս-ᎷＤ🚩',
        MODE: 'public',
        PREFIX: '.',
        BOT_NAME: 'Η𝔸𝑵Ս-ᎷＤ🚩',
        BOT_IMAGE: 'https://files.catbox.moe/zrg712.png',
        
        REACT_EMOJIS:  ['❤️', '🔥', '👑', '⭐', '💎'],
        REACT_EMOJIS: ['🌈', '🕊️', '🌚', '🦢', '🎀', '💗', '🌺', '🌝', '🦋', '💐', '👀', '🍂', '🫶', '🤌', '💕', '🫠', '🫀', '🫰', '🪽', '🪐'],
        OWNER_EMOJIS: ['❤️', '🔥', '👑', '⭐', '💎'],
        LIKE_EMOJIS: ['❤️', '👍', '😮', '😎', '💀'],  // ADDED - Emojis for auto like
        
        // Lists
        BANNED: [],
        SUDO: [ "923005787307@s.whatsapp.net"]
    }
};

export default config;
