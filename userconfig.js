// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = mocha;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Parepare",
    scale: "C",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "Parepare",
      timezone: "Asia/Makassar",
      format: "h:i",
      icon_color: palette.peach,
    },
  ],

  search: {
    engines: {
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
    default: "g",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://www.perplexity.ai",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/banner_09.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "obsidian",
              url: "https://obsidian.md",
              icon: "notebook",
              icon_color: palette.green,
            },
            {
              name: "archive",
              url: "https://archive.org",
              icon: "archive",
              icon_color: palette.peach,
            },
            {
              name: "simpel",
              url: "https://simpel.ith.ac.id",
              icon: "school",
              icon_color: palette.red,
            },
            {
              name: "siakad",
              url: "https://siakad.ith.ac.id",
              icon: "certificate",
              icon_color: palette.blue,
            },
            {
              name: "music",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "slide",
              url: "https://docs.google.com/presentation",
              icon: "presentation",
              icon_color: palette.peach,
            },
            {
              name: "sheets",
              url: "https://docs.google.com/spreadsheets",
              icon: "table",
              icon_color: palette.red,
            },
            {
              name: "docs",
              url: "https://docs.google.com/document",
              icon: "file-description",
              icon_color: palette.blue,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "canva",
              url: "https://www.canva.com/",
              icon: "palette",
              icon_color: palette.green,
            },
            {
              name: "figma",
              url: "https://www.figma.com/",
              icon: "brand-figma",
              icon_color: palette.peach,
            },
            {
              name: "pinterest",
              url: "https://www.pinterest.com",
              icon: "brand-pinterest",
              icon_color: palette.red,
            },
            {
              name: "pixilart",
              url: "https://www.pixilart.com/draw",
              icon: "grid-dots",
              icon_color: palette.blue,
            },
            {
              name: "aggie.io",
              url: "https://aggie.io",
              icon: "brush",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/banner_07.gif",
      categories: [
       {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "colab",
              url: "https://colab.research.google.com",
              icon: "brand-google",
              icon_color: palette.peach,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
            {
              name: "draw.io",
              url: "https://app.diagrams.net",
              icon: "vector-bezier-2",
              icon_color: palette.blue,
            },
            {
              name: "chatgpt",
              url: "https://chat.openai.com",
              icon: "robot",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.blue,
            },
            {
              name: "tryhackme",
              url: "https://tryhackme.com",
              icon: "bug",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "dev.to",
              url: "https://dev.to",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "apart",
              url: "https://alistapart.com",
              icon: "columns-3",
              icon_color: palette.red,
            },
            {
              name: "freecodecamp",
              url: "https://www.freecodecamp.org/news/",
              icon: "book",
              icon_color: palette.blue,
            },
            {
              name: "openai",
              url: "https://openai.com/research",
              icon: "sparkles",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/banner_08.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "instagram",
              url: "https://www.instagram.com",
              icon: "brand-instagram",
              icon_color: palette.green,
            },
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.peach,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
            {
              name: "x",
              url: "https://x.com",
              icon: "brand-x",
              icon_color: palette.blue,
            },
            {
              name: "linkedin",
              url: "https://www.linkedin.com",
              icon: "brand-linkedin",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "IGN",
              url: "https://www.ign.com/account/playlist/library",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },
            {
              name: "nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: palette.blue,
            },
            {
              name: "retrogames",
              url: "https://www.retrogames.cc",
              icon: "device-desktop",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "patreon",
              url: "https://www.patreon.com",
              icon: "brand-patreon",
              icon_color: palette.red,
            },
            {
              name: "bstation",
              url: "https://www.bilibili.tv",
              icon: "video",
              icon_color: palette.blue,
            },
            {
              name: "vimeo",
              url: "https://vimeo.com",
              icon: "brand-vimeo",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
