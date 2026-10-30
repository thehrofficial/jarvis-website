// Generated from the bot's real command list. `a` = arguments (? = optional), `d` = what it does.
window.FEATURES = [
 {
  "id": "moderation",
  "name": "Moderation",
  "icon": "shield",
  "blurb": "Numbered cases, mod history, warns, temp-bans, softban, timeouts with easy durations and DM notices. Every action checks role hierarchy and is logged.",
  "commands": [
   {
    "c": "/kick",
    "a": "user, reason?",
    "d": "Kick a member from the server"
   },
   {
    "c": "/ban",
    "a": "user, reason?, delete_days?",
    "d": "Ban a user (works even if they already left)"
   },
   {
    "c": "/tempban",
    "a": "user, duration, reason?",
    "d": "Ban someone for a limited time, then unban automatically"
   },
   {
    "c": "/softban",
    "a": "user, delete_days?, reason?",
    "d": "Ban + instantly unban: kicks and deletes their recent messages"
   },
   {
    "c": "/unban",
    "a": "user_id, reason?",
    "d": "Unban a user by their ID"
   },
   {
    "c": "/timeout",
    "a": "user, duration, reason?",
    "d": "Temporarily mute a member (up to 28 days)"
   },
   {
    "c": "/untimeout",
    "a": "user, reason?",
    "d": "Remove a timeout from a member"
   },
   {
    "c": "/warn",
    "a": "user, reason",
    "d": "Warn a member (every 3rd warning = automatic 1 hour timeout)"
   },
   {
    "c": "/warnings",
    "a": "user",
    "d": "See a member's warnings"
   },
   {
    "c": "/unwarn",
    "a": "id?, clear_all_for?",
    "d": "Remove one warning (by number) or all warnings of a member"
   },
   {
    "c": "/modlogs",
    "a": "user, page?, add_note?",
    "d": "A member's full moderation history (warns, bans, timeouts, notes)"
   },
   {
    "c": "/purge",
    "a": "amount, user?, bots_only?",
    "d": "Delete recent messages in this channel"
   },
   {
    "c": "/slowmode",
    "a": "seconds",
    "d": "Set slowmode for this channel"
   },
   {
    "c": "/lock",
    "a": "channel?, reason?",
    "d": "Stop everyone from sending messages in a channel"
   },
   {
    "c": "/unlock",
    "a": "channel?",
    "d": "Let everyone send messages in a channel again"
   }
  ]
 },
 {
  "id": "automod",
  "name": "Automod",
  "icon": "zap",
  "blurb": "Rules that run on their own: banned words, invite links, spam and mass mentions. Staff are never touched.",
  "commands": [
   {
    "c": "/automod status",
    "a": "",
    "d": "Show every automod setting"
   },
   {
    "c": "/automod preset",
    "a": "enabled",
    "d": "Turn every rule on or off at once"
   },
   {
    "c": "/automod rule",
    "a": "rule, enabled",
    "d": "Turn one rule on or off"
   },
   {
    "c": "/automod addword",
    "a": "word",
    "d": "Ban a word or phrase (also catches f.u.c.k, f4ck, fuuuck)"
   },
   {
    "c": "/automod removeword",
    "a": "word",
    "d": "Unban a word or phrase"
   },
   {
    "c": "/automod words",
    "a": "",
    "d": "List banned words (only you can see)"
   },
   {
    "c": "/automod ignore",
    "a": "role?, channel?",
    "d": "Automod will skip a role or channel (run again to undo)"
   },
   {
    "c": "/automod allowlink",
    "a": "domain",
    "d": "Allow a website when \"links\" rule is on (run again to remove)"
   },
   {
    "c": "/automod punishment",
    "a": "warnings?, minutes?",
    "d": "Set the warnings before a timeout and its length"
   },
   {
    "c": "/automod staff",
    "a": "check_staff",
    "d": "Should staff also be checked? (default: no, useful for testing)"
   },
   {
    "c": "/automod spam",
    "a": "enabled",
    "d": "Anti-spam on or off"
   },
   {
    "c": "/automod invites",
    "a": "enabled",
    "d": "Block Discord invites on or off"
   },
   {
    "c": "/automod mentions",
    "a": "enabled",
    "d": "Block mass mentions on or off"
   }
  ]
 },
 {
  "id": "antinuke",
  "name": "Antinuke & Anti-raid",
  "icon": "lock",
  "blurb": "Stops nukers and compromised admins: mass deletes, bans and kicks are punished in seconds. Raid shield for join floods.",
  "commands": [
   {
    "c": "/antinuke enable",
    "a": "punishment?",
    "d": "Turn antinuke on"
   },
   {
    "c": "/antinuke disable",
    "a": "",
    "d": "Turn antinuke off"
   },
   {
    "c": "/antinuke status",
    "a": "",
    "d": "Show antinuke settings"
   },
   {
    "c": "/antinuke limit",
    "a": "action, amount",
    "d": "Change how many actions are allowed per minute"
   },
   {
    "c": "/antinuke botguard",
    "a": "enabled",
    "d": "Kick bots added by people who are not trusted"
   },
   {
    "c": "/antinuke whitelist",
    "a": "action, user?",
    "d": "Trusted people antinuke will never punish (owner only)"
   },
   {
    "c": "/antiraid enable",
    "a": "joins?, min_age_days?",
    "d": "Turn anti-raid on"
   },
   {
    "c": "/antiraid disable",
    "a": "",
    "d": "Turn anti-raid off"
   },
   {
    "c": "/antiraid status",
    "a": "",
    "d": "Show anti-raid settings"
   }
  ]
 },
 {
  "id": "tickets",
  "name": "Tickets",
  "icon": "ticket",
  "blurb": "One-step setup with up to 3 staff roles, panel and ticket pictures, ticket types as buttons, staff-only close, claim, priority, auto-close and full HTML transcripts.",
  "commands": [
   {
    "c": "/ticket setup",
    "a": "staff_role, staff_role2?, staff_role3?, style?, panel_image?, ticket_image?, panel_channel?, category?, log_channel?, max_per_user?, auto_close_hours?, title?, description?",
    "d": "Set up tickets in one step and post the panel (admin)"
   },
   {
    "c": "/ticket addtype",
    "a": "name, emoji?, description?, category?, role?, welcome?",
    "d": "Add a ticket type like Support, Report, Buy (admin)"
   },
   {
    "c": "/ticket edittype",
    "a": "name, new_name?, emoji?, description?, category?, role?, welcome?",
    "d": "Change a ticket type (admin)"
   },
   {
    "c": "/ticket panel",
    "a": "channel?",
    "d": "Post the ticket panel again (admin)"
   },
   {
    "c": "/ticket removetype",
    "a": "name",
    "d": "Remove a ticket type (admin)"
   },
   {
    "c": "/ticket types",
    "a": "",
    "d": "List ticket types and current settings"
   },
   {
    "c": "/ticket close",
    "a": "reason?",
    "d": "Close this ticket"
   },
   {
    "c": "/ticket claim",
    "a": "",
    "d": "Claim this ticket (staff)"
   },
   {
    "c": "/ticket add",
    "a": "user",
    "d": "Add someone to this ticket (staff)"
   },
   {
    "c": "/ticket remove",
    "a": "user",
    "d": "Remove someone from this ticket (staff)"
   },
   {
    "c": "/ticket rename",
    "a": "name",
    "d": "Rename this ticket (staff)"
   },
   {
    "c": "/ticket priority",
    "a": "level",
    "d": "Set the priority (staff)"
   },
   {
    "c": "/ticket stats",
    "a": "",
    "d": "Ticket statistics (staff)"
   }
  ]
 },
 {
  "id": "music",
  "name": "Music",
  "icon": "music",
  "blurb": "SoundCloud, Spotify songs/albums/playlists and mp3s. Player buttons, 12 audio effects, queue tools and 24/7 voice mode.",
  "commands": [
   {
    "c": "/play",
    "a": "query, next?",
    "d": "Play a song, playlist or link (SoundCloud, Spotify song/album/playlist, mp3)"
   },
   {
    "c": "/search",
    "a": "query",
    "d": "Search and pick a song from the top 5 results"
   },
   {
    "c": "/nowplaying",
    "a": "",
    "d": "Show the current song with controls"
   },
   {
    "c": "/queue",
    "a": "page?",
    "d": "Show the song queue"
   },
   {
    "c": "/skip",
    "a": "count?",
    "d": "Skip the current song"
   },
   {
    "c": "/previous",
    "a": "",
    "d": "Go back to the previous song"
   },
   {
    "c": "/skipto",
    "a": "position",
    "d": "Jump to a song in the queue"
   },
   {
    "c": "/stop",
    "a": "",
    "d": "Stop the music, clear the queue and leave"
   },
   {
    "c": "/pause",
    "a": "",
    "d": "Pause the music"
   },
   {
    "c": "/resume",
    "a": "",
    "d": "Resume the music"
   },
   {
    "c": "/volume",
    "a": "percent",
    "d": "Set the volume (1-150)"
   },
   {
    "c": "/loop",
    "a": "mode",
    "d": "Repeat the song or the whole queue"
   },
   {
    "c": "/shuffle",
    "a": "",
    "d": "Shuffle the queue"
   },
   {
    "c": "/seek",
    "a": "time",
    "d": "Jump to a time in the song (like 1:30 or 90)"
   },
   {
    "c": "/remove",
    "a": "position",
    "d": "Remove a song from the queue"
   },
   {
    "c": "/move",
    "a": "from, to",
    "d": "Move a song to another place in the queue"
   },
   {
    "c": "/clearqueue",
    "a": "",
    "d": "Remove every song from the queue (keeps the current one)"
   },
   {
    "c": "/filter",
    "a": "effect",
    "d": "Add an audio effect"
   },
   {
    "c": "/join",
    "a": "",
    "d": "Make the bot join your voice channel"
   },
   {
    "c": "/leave",
    "a": "",
    "d": "Make the bot leave the voice channel"
   },
   {
    "c": "/247 enable",
    "a": "",
    "d": "Stay in your current voice channel 24/7"
   },
   {
    "c": "/247 disable",
    "a": "",
    "d": "Stop staying and leave"
   },
   {
    "c": "/247 status",
    "a": "",
    "d": "Show the 24/7 status"
   },
   {
    "c": "/musicstatus",
    "a": "",
    "d": "Check that the music system is working (admins)"
   }
  ]
 },
 {
  "id": "ai",
  "name": "AI & Auto replies",
  "icon": "bot",
  "blurb": "Chat with an AI in a channel or with /ask, teach it many facts at once, and set automatic replies to words.",
  "commands": [
   {
    "c": "/ask",
    "a": "question",
    "d": "Ask the AI anything"
   },
   {
    "c": "/ai channel",
    "a": "channel?",
    "d": "The bot replies to every message in this channel"
   },
   {
    "c": "/ai persona",
    "a": "text?",
    "d": "Change the bot's personality for this server"
   },
   {
    "c": "/ai teach",
    "a": "fact?",
    "d": "Teach the AI a fact about your server (rules, staff, events...)"
   },
   {
    "c": "/ai forget",
    "a": "number?",
    "d": "Remove a taught fact"
   },
   {
    "c": "/ai facts",
    "a": "",
    "d": "Show what you taught the AI"
   },
   {
    "c": "/ai reset",
    "a": "",
    "d": "Make the AI forget everything: all chats and all taught facts"
   },
   {
    "c": "/ai key",
    "a": "",
    "d": "Use your own free AI key for this server (private form)"
   },
   {
    "c": "/ai keyremove",
    "a": "",
    "d": "Go back to the bot's shared AI"
   },
   {
    "c": "/ai keyhelp",
    "a": "",
    "d": "How to get a free AI key and add it"
   },
   {
    "c": "/ai status",
    "a": "",
    "d": "Is AI working?"
   },
   {
    "c": "/autoresponder add",
    "a": "trigger, reply, match?",
    "d": "Add an auto reply"
   },
   {
    "c": "/autoresponder remove",
    "a": "trigger",
    "d": "Remove an auto reply"
   },
   {
    "c": "/autoresponder list",
    "a": "",
    "d": "Show all auto replies"
   }
  ]
 },
 {
  "id": "economy",
  "name": "Economy",
  "icon": "wallet",
  "blurb": "Wallet and bank, daily streaks, work, blackjack, slots, a role shop with emojis and profile cards.",
  "commands": [
   {
    "c": "/balance",
    "a": "user?",
    "d": "Check your wallet and bank"
   },
   {
    "c": "/daily",
    "a": "",
    "d": "Claim your daily coins (streak = bigger bonus!)"
   },
   {
    "c": "/work",
    "a": "risky?",
    "d": "Work to earn coins (once an hour). Risky mode = a crime with higher reward"
   },
   {
    "c": "/bank deposit",
    "a": "amount",
    "d": "Move coins from wallet to bank"
   },
   {
    "c": "/bank withdraw",
    "a": "amount",
    "d": "Move coins from bank to wallet"
   },
   {
    "c": "/pay",
    "a": "user, amount",
    "d": "Give coins to another member"
   },
   {
    "c": "/gamble",
    "a": "amount",
    "d": "Bet coins: 48% chance to double them"
   },
   {
    "c": "/blackjack",
    "a": "bet",
    "d": "Play blackjack against the dealer"
   },
   {
    "c": "/richest",
    "a": "",
    "d": "Top 10 richest members"
   },
   {
    "c": "/profile",
    "a": "user?",
    "d": "Your economy + level profile card"
   },
   {
    "c": "/shop list",
    "a": "",
    "d": "See what is for sale"
   },
   {
    "c": "/shop add",
    "a": "name, price, role?, emoji?, description?",
    "d": "Add an item (admins)"
   },
   {
    "c": "/shop remove",
    "a": "name",
    "d": "Remove an item (admins)"
   },
   {
    "c": "/buy",
    "a": "item, amount?",
    "d": "Buy an item from the shop"
   },
   {
    "c": "/inventory",
    "a": "",
    "d": "See the items you own"
   }
  ]
 },
 {
  "id": "levels",
  "name": "Levels",
  "icon": "chart",
  "blurb": "XP for chatting, rank cards, leaderboards and roles you unlock at levels.",
  "commands": [
   {
    "c": "/rank",
    "a": "user?",
    "d": "Show your level and XP"
   },
   {
    "c": "/leaderboard",
    "a": "",
    "d": "Top 10 most active members"
   }
  ]
 },
 {
  "id": "giveaway",
  "name": "Giveaways",
  "icon": "gift",
  "blurb": "Start, end and reroll giveaways with a click-to-enter button.",
  "commands": [
   {
    "c": "/giveaway start",
    "a": "prize, minutes, winners?, image?, description?",
    "d": "Start a giveaway in this channel"
   },
   {
    "c": "/giveaway end",
    "a": "id",
    "d": "End a giveaway right now"
   },
   {
    "c": "/giveaway reroll",
    "a": "id",
    "d": "Pick new winners for an ended giveaway"
   }
  ]
 },
 {
  "id": "fun",
  "name": "Fun",
  "icon": "gamepad",
  "blurb": "Games, jokes, polls, trivia for coins and tic-tac-toe with friends.",
  "commands": [
   {
    "c": "/8ball",
    "a": "question",
    "d": "Ask the magic 8-ball"
   },
   {
    "c": "/coinflip",
    "a": "",
    "d": "Flip a coin"
   },
   {
    "c": "/dice",
    "a": "sides?",
    "d": "Roll a dice"
   },
   {
    "c": "/rps",
    "a": "choice",
    "d": "Play rock paper scissors against the bot"
   },
   {
    "c": "/choose",
    "a": "options",
    "d": "Let the bot choose for you"
   },
   {
    "c": "/rate",
    "a": "thing",
    "d": "Rate anything out of 10"
   },
   {
    "c": "/joke",
    "a": "",
    "d": "Hear a (nerdy) joke"
   },
   {
    "c": "/poll",
    "a": "question, options?, minutes?, multiple?, show_names?, role?",
    "d": "Create a poll with buttons, live results and a timer"
   },
   {
    "c": "/minigame tictactoe",
    "a": "opponent",
    "d": "Challenge someone to tic-tac-toe"
   },
   {
    "c": "/minigame rps",
    "a": "opponent",
    "d": "Rock paper scissors against a friend"
   },
   {
    "c": "/minigame trivia",
    "a": "",
    "d": "Answer a question within 20 seconds and win coins"
   }
  ]
 },
 {
  "id": "utility",
  "name": "Utility",
  "icon": "sliders",
  "blurb": "Info commands, avatars, server and user details.",
  "commands": [
   {
    "c": "/invite",
    "a": "",
    "d": "Add JARVIS to your own server"
   },
   {
    "c": "/help",
    "a": "",
    "d": "Browse every command by category"
   },
   {
    "c": "/about",
    "a": "",
    "d": "About JARVIS, its creator and links"
   },
   {
    "c": "/support",
    "a": "",
    "d": "Get help in the support server"
   },
   {
    "c": "/ping",
    "a": "",
    "d": "Check the bot's speed"
   },
   {
    "c": "/avatar",
    "a": "user?",
    "d": "Show someone's avatar"
   },
   {
    "c": "/userinfo",
    "a": "user?",
    "d": "Detailed info about a member"
   },
   {
    "c": "/serverinfo",
    "a": "",
    "d": "Detailed info about this server"
   }
  ]
 },
 {
  "id": "setup",
  "name": "Server setup",
  "icon": "sliders",
  "blurb": "Welcome and goodbye messages with title and banner image, logs, autorole, vanity role, role panels and the text-command prefix.",
  "commands": [
   {
    "c": "/prefix",
    "a": "new_prefix?",
    "d": "Show or change the text-command prefix (like !play)"
   },
   {
    "c": "/setup welcome",
    "a": "channel?, title?, message?, image?, editor?, avatar?, test?",
    "d": "Welcome message: channel, title, text and banner image"
   },
   {
    "c": "/setup leave",
    "a": "channel?, title?, message?, image?, editor?, test?",
    "d": "Goodbye message: channel, title, text and image"
   },
   {
    "c": "/setup logs",
    "a": "channel",
    "d": "Set the moderation/log channel"
   },
   {
    "c": "/setup autorole",
    "a": "role",
    "d": "Role given to every new member"
   },
   {
    "c": "/setup supportrole",
    "a": "role",
    "d": "Role that can see support tickets"
   },
   {
    "c": "/setup vanity",
    "a": "text, role",
    "d": "Give a role to members who show your vanity in their status"
   },
   {
    "c": "/setup vanitysync",
    "a": "",
    "d": "Re-check everyone who is online right now"
   },
   {
    "c": "/setup levels",
    "a": "enabled?, channel?, announce?, message?, card?, background?, test?",
    "d": "Leveling: turn on/off and choose where level-up messages go"
   },
   {
    "c": "/setup clear",
    "a": "what",
    "d": "Remove one of the settings"
   },
   {
    "c": "/setup view",
    "a": "",
    "d": "Show the current settings"
   },
   {
    "c": "/rolepanel",
    "a": "title, role1, role2?, role3?, role4?, role5?",
    "d": "Post a panel where members click buttons to get/remove roles"
   },
   {
    "c": "/vanitypanel",
    "a": "",
    "d": "Post a button members can press to check their vanity status"
   }
  ]
 },
 {
  "id": "voice",
  "name": "Voice rooms",
  "icon": "mic",
  "blurb": "Join-to-create voice rooms. Everyone gets their own room with a button panel: lock, hide, rename, set a limit, claim.",
  "commands": [
   {
    "c": "/voice setup",
    "a": "hub?",
    "d": "Set the \"Join to create\" channel (admin)"
   },
   {
    "c": "/voice lock",
    "a": "",
    "d": "Lock your room"
   },
   {
    "c": "/voice unlock",
    "a": "",
    "d": "Unlock your room"
   },
   {
    "c": "/voice hide",
    "a": "",
    "d": "Hide your room"
   },
   {
    "c": "/voice show",
    "a": "",
    "d": "Show your room"
   },
   {
    "c": "/voice rename",
    "a": "name",
    "d": "Rename your room"
   },
   {
    "c": "/voice limit",
    "a": "max",
    "d": "Set how many people can join (0 = no limit)"
   },
   {
    "c": "/voice kick",
    "a": "user",
    "d": "Remove someone from your room"
   },
   {
    "c": "/voice transfer",
    "a": "user",
    "d": "Give your room to someone else in it"
   },
   {
    "c": "/voice claim",
    "a": "",
    "d": "Become the owner if the owner left"
   }
  ]
 },
 {
  "id": "extras",
  "name": "More tools",
  "icon": "star",
  "blurb": "AFK, reminders, suggestions, starboard, temp voice, verification, snipe, embeds and more.",
  "commands": [
   {
    "c": "/afk",
    "a": "reason?",
    "d": "Set yourself AFK. People who mention you will be told"
   },
   {
    "c": "/remind me",
    "a": "when, about",
    "d": "Remind me later"
   },
   {
    "c": "/remind list",
    "a": "",
    "d": "Your reminders"
   },
   {
    "c": "/remind cancel",
    "a": "id",
    "d": "Cancel a reminder"
   },
   {
    "c": "/suggest",
    "a": "idea",
    "d": "Post a suggestion for the server"
   },
   {
    "c": "/suggestions channel",
    "a": "channel",
    "d": "Where suggestions are posted"
   },
   {
    "c": "/suggestions decide",
    "a": "id, decision, reason?",
    "d": "Approve or deny a suggestion"
   },
   {
    "c": "/starboard",
    "a": "channel?, stars?",
    "d": "Save popular messages (⭐) in a channel"
   },
   {
    "c": "/verify",
    "a": "role, text?",
    "d": "Post a verification button (members click to get a role)"
   },
   {
    "c": "/levelrole add",
    "a": "level, role",
    "d": "Give a role at a level"
   },
   {
    "c": "/levelrole remove",
    "a": "level",
    "d": "Remove a level reward"
   },
   {
    "c": "/levelrole list",
    "a": "",
    "d": "Show level rewards"
   },
   {
    "c": "/snipe",
    "a": "type?",
    "d": "Show the last deleted (or edited) message in this channel"
   },
   {
    "c": "/say",
    "a": "text, channel?, as?",
    "d": "Make the bot say something, or say it as another member"
   },
   {
    "c": "/embed",
    "a": "title?, text?, color?, footer?, image_file?, thumbnail_file?, image?, channel?, editor?",
    "d": "Build and send your own embed message"
   },
   {
    "c": "/roleinfo",
    "a": "role",
    "d": "Info about a role"
   },
   {
    "c": "/channelinfo",
    "a": "channel?",
    "d": "Info about a channel"
   },
   {
    "c": "/role",
    "a": "action, user, role",
    "d": "Add or remove a role from a member"
   },
   {
    "c": "/nick",
    "a": "user, nickname?",
    "d": "Change a nickname"
   },
   {
    "c": "/slots",
    "a": "bet",
    "d": "Spin the slot machine"
   },
   {
    "c": "/rob",
    "a": "user",
    "d": "Try to steal coins from someone (risky!)"
   },
   {
    "c": "/ship",
    "a": "first, second?",
    "d": "How well do two people match?"
   },
   {
    "c": "/fact",
    "a": "",
    "d": "A random fun fact"
   }
  ]
 }
];
window.COMMAND_COUNT = 100;
