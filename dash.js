const subMenus = {
  casino: ["Slots Games", "Crash Games", "Table Games"],
  sportbook: ["Football", "Basketball", "Tennis", "Baseball", "Hockey", "MMA", "Boxing"],
  telegram: ["Tokens", "APIs", "Database"],
  games: ["Tokens", "APIs", "Database"],
  web3: ["Tokens", "APIs", "Database"],
  trading: ["Tokens", "APIs", "Database"],
  mev: ["Tokens", "APIs", "Database"],
  websites: ["Tokens", "APIs", "Database"],
  esp: ["Tokens", "APIs", "Database"]
};

let currentPlatform = "";
let currentSelection = "";

const pricingPlans = {
  telegram: {
    tokens: {
      basic: {
        title: "Telegram Bot Token - Basic",
        price: 109,
        features: [
          "1 Bot Token (single use)",
          "No source code access",
          "No updates or bug fixes",
          "Community support via email",
          "Limited usage rights (non-commercial)",
          "No customization options"
        ]
      },
      standard: {
        title: "Telegram Bot Token - Standard",
        price: 390,
        features: [
          "Up to 3 Bot Tokens",
          "Source code included (minified)",
          "1 Month free updates and patches",
          "Email + Priority ticket support",
          "Basic monetization rights (for personal projects)",
          "Bot auto-responses & inline query setup"
        ]
      },
      premium: {
        title: "Telegram Bot Token - Premium",
        price: 790,
        features: [
          "Unlimited Bot Tokens",
          "Full source code access (well-documented)",
          "Weekly updates (bug fixes & features)",
          "VIP 24/7 support (Live chat + Dedicated email)",
          "Full commercial rights",
          "Advanced custom commands integration",
          "Auto-scaling bot handler",
          "Multi-language support (EN, ES, RU, etc.)"
        ]
      }
    },
    apis: {
      basic: {
        title: "Telegram API - Basic",
        price: 490,
        features: [
          "1,000 API requests/month",
          "RESTful access only",
          "Basic usage documentation",
          "Rate-limited (30 RPM)",
          "Email support (48h response time)",
          "Basic API key security"
        ]
      },
      standard: {
        title: "Telegram API - Standard",
        price: 890,
        features: [
          "10,000 API requests/month",
          "Webhook + REST access",
          "Priority rate limits (100 RPM)",
          "Access to extended API endpoints (e.g., file API)",
          "Usage analytics dashboard",
          "Priority support (within 24h)",
          "Secure API key regeneration"
        ]
      },
      premium: {
        title: "Telegram API - Premium",
        price: 1490,
        features: [
          "Unlimited API requests/month",
          "Real-time data sync & webhooks",
          "High-priority rate limits (500 RPM)",
          "Real-time monitoring & error logs",
          "Dedicated API consultant access",
          "End-to-end encrypted communication support",
          "Custom endpoint creation on request",
          "99.9% SLA uptime guarantee"
        ]
      }
    },
    database: {
      basic: {
        title: "Telegram DB - Basic",
        price: 390,
        features: [
          "1 Bot dump (JSON or CSV format)",
          "User ID, names, join dates only",
          "Manual download",
          "Email assistance (72h response)",
          "Limited query access"
        ]
      },
      standard: {
        title: "Telegram DB - Standard",
        price: 579,
        features: [
          "Weekly updated data sets",
          "Includes activity logs, user metadata",
          "Query-ready format (SQL + CSV)",
          "Dashboard preview access",
          "Fast support (24h response)",
          "Access to recent interactions"
        ]
      },
      premium: {
        title: "Telegram DB - Premium",
        price: 849,
        features: [
          "Live database synchronization",
          "Full user metadata (bio, language, time zone)",
          "Real-time access via secure API",
          "Export in multiple formats (SQL, Mongo, Excel)",
          "Dedicated support team",
          "Daily backups + retention policy",
          "Multi-channel data insights"
        ]
      }
    }
  },


 casino: {
    tokens: {
      basic: {
        title: "Casino Token - Basic",
        price: 129,
        features: [
          "Access to 1 slot game engine",
          "No source code or customization",
          "No future updates",
          "Email-only support (72h response time)",
          "For personal/non-commercial use",
          "No RTP or volatility settings exposed"
        ]
      },
      standard: {
        title: "Casino Token - Standard",
        price: 590,
        features: [
          "Access to 3 casino game engines (slots, crash, roulette)",
          "Includes pre-built UI templates",
          "Monthly updates (bug fixes only)",
          "Priority email support (24-48h)",
          "Basic RTP and payout control",
          "Commercial use for small projects allowed",
          "Basic animation support"
        ]
      },
      premium: {
        title: "Casino Token - Premium",
        price: 1290,
        features: [
          "Access to all available games (slots, crash, table games, dice)",
          "Full source code & developer documentation",
          "Weekly updates (new features & bug fixes)",
          "VIP 24/7 support (Live chat + Email)",
          "Custom game branding allowed",
          "Full RTP, volatility, and theme controls",
          "Realistic animations and sound system",
          "Multi-language game text support",
          "Mobile-optimized and responsive"
        ]
      }
    },
    apis: {
      basic: {
        title: "Casino API - Basic",
        price: 390,
        features: [
          "1,000 API calls/month",
          "Access to game history and basic stats",
          "Simple JSON endpoints",
          "No SSL encryption support",
          "Email support (3-5 days)",
          "Basic user session tracking"
        ]
      },
      standard: {
        title: "Casino API - Standard",
        price: 529,
        features: [
          "10,000 API calls/month",
          "Access to crash odds prediction endpoints",
          "Rate-limited real-time game data",
          "Token-authentication & HTTPS support",
          "Priority email support (24h)",
          "Basic bot integration support",
          "In-game event hooks for analytics"
        ]
      },
      premium: {
        title: "Casino API - Premium",
        price: 1000,
        features: [
          "Unlimited API calls/month",
          "Live odds generation for all games",
          "Real-time game state and result feeds",
          "Fully documented endpoints with webhook integration",
          "Secure authentication (OAuth2 support)",
          "Dedicated 24/7 technical support",
          "Predictive engine access for games (AI-enhanced)",
          "Role-based API key management",
          "Dashboard monitoring & analytics"
        ]
      }
    },
    database: {
      basic: {
        title: "Casino DB - Basic",
        price: 1290,
        features: [
          "Static dump of game stats (CSV format)",
          "Contains basic slot results, player count, and timestamp",
          "No auto-update or syncing",
          "Basic customer support via email",
          "Suitable for offline analysis only",
          "No player profile or behavior data"
        ]
      },
      standard: {
        title: "Casino DB - Standard",
        price: 2999,
        features: [
          "Weekly updated data (JSON, CSV, SQL formats)",
          "Includes user activity logs, win/loss patterns",
          "Supports direct import into BI tools",
          "Priority support (within 24h)",
          "Custom data format export available",
          "Includes filtered data by game type"
        ]
      },
      premium: {
        title: "Casino DB - Premium",
        price: 4590,
        features: [
          "Real-time data sync via API",
          "Includes full historical and live game tables",
          "Player segmentation & betting trends",
          "Custom query access (SQL endpoint)",
          "Dedicated data manager assigned",
          "Daily updates with live push notification",
          "Downloadable in SQL, Parquet, CSV, and Excel formats",
          "Advanced fraud & anomaly detection flags"
        ]
      }
    }
  },
  sportbook: {
    tokens: {
      basic: {
        title: "Sportsbook Token - Basic",
        price: 250,
        features: [
          "Access to 1 live match feed",
          "Limited sports (Soccer only)",
          "No real-time odds",
          "No source code access",
          "Email support (72h response)",
          "Non-commercial use only"
        ]
      },
      standard: {
        title: "Sportsbook Token - Standard",
        price: 490,
        features: [
          "Access to 3 live feeds (Soccer, Basketball, Tennis)",
          "Monthly odds update",
          "Source code (read-only)",
          "Basic bet logic control",
          "Priority email support (24h)",
          "Supports basic match alerts"
        ]
      },
      premium: {
        title: "Sportsbook Token - Premium",
        price: 1090,
        features: [
          "Unlimited live match feeds",
          "Real-time odds feed access",
          "Live event triggers and odds calculators",
          "Full source code + customization",
          "Live chat + Dev support",
          "Supports multi-league customization",
          "Commercial use allowed"
        ]
      }
    },
    apis: {
      basic: {
        title: "Sportsbook API - Basic",
        price: 490,
        features: [
          "Live score feeds (limited sports)",
          "Basic match stats: possession, shots",
          "JSON API format",
          "Rate-limited (1000 calls/month)",
          "Email support only",
          "No historical data"
        ]
      },
      standard: {
        title: "Sportsbook API - Standard",
        price: 890,
        features: [
          "Live score + team & league data",
          "Access to team/player profiles",
          "Rate limit: 10,000/month",
          "Priority support",
          "Basic live betting logic support",
          "Webhook support"
        ]
      },
      premium: {
        title: "Sportsbook API - Premium",
        price: 1590,
        features: [
          "Unlimited API calls",
          "Real-time scores, odds, lineups, incidents",
          "Player injury and card info",
          "Live market monitoring",
          "24/7 chat support",
          "Auto-retry + error handling built-in"
        ]
      }
    },
    database: {
      basic: {
        title: "Sportsbook DB - Basic",
        price: 1190,
        features: [
          "Static match data dump",
          "CSV or Excel format",
          "Includes date, teams, results",
          "No updates or syncing",
          "Basic email support"
        ]
      },
      standard: {
        title: "Sportsbook DB - Standard",
        price: 1890,
        features: [
          "Weekly match data updates",
          "Custom schema options",
          "Includes odds & result trends",
          "Priority email support",
          "Import-ready for BI tools"
        ]
      },
      premium: {
        title: "Sportsbook DB - Premium",
        price: 2790,
        features: [
          "Live-sync match data (API & DB)",
          "Full historical & real-time data",
          "Betting history and outcome tracking",
          "Dedicated DB support agent",
          "JSON, CSV, and SQL exports"
        ]
      }
    }
  },
  games: {
    tokens: {
      basic: {
        title: "Game Token - Basic",
        price: 220,
        features: [
          "1 downloadable game license key",
          "No online services included",
          "Single-player only",
          "No updates or patches",
          "Email support only",
          "Non-commercial use"
        ]
      },
      standard: {
        title: "Game Token - Standard",
        price: 450,
        features: [
          "3 game keys (multiplayer-ready)",
          "Monthly patches & minor updates",
          "Priority support within 24h",
          "Limited online features",
          "Basic anti-cheat detection support"
        ]
      },
      premium: {
        title: "Game Token - Premium",
        price: 890,
        features: [
          "Unlimited key access",
          "Weekly updates & new content",
          "Live chat & VIP dev support",
          "Multiplayer & leaderboard access",
          "Mod support + custom config",
          "Includes licensing for commercial deployment"
        ]
      }
    },
    apis: {
      basic: {
        title: "Game API - Basic",
        price: 590,
        features: [
          "500 API calls/month",
          "Game state read-only data",
          "Basic game statistics (e.g., score, level)",
          "JSON format only",
          "Email support (72h)"
        ]
      },
      standard: {
        title: "Game API - Standard",
        price: 990,
        features: [
          "5,000 calls/month",
          "Multi-game support (slots, runner, shooter)",
          "Live game session tracking",
          "Webhook & webhook retry logic",
          "Priority support (24h)",
          "Analytics data per user"
        ]
      },
      premium: {
        title: "Game API - Premium",
        price: 1590,
        features: [
          "Unlimited API usage",
          "Real-time player & session stats",
          "Custom event tracking & hooks",
          "24/7 developer support",
          "Bot-ready game events feed",
          "Latency-optimized delivery"
        ]
      }
    },
    database: {
      basic: {
        title: "Game DB - Basic",
        price: 1090,
        features: [
          "List of all game records",
          "CSV format",
          "Basic game metadata",
          "Email support"
        ]
      },
      standard: {
        title: "Game DB - Standard",
        price: 1790,
        features: [
          "Weekly updates",
          "Advanced structure: JSON + CSV + SQL",
          "Leaderboard + in-game purchases",
          "Fast support with response in 24h"
        ]
      },
      premium: {
        title: "Game DB - Premium",
        price: 2590,
        features: [
          "Live updates via API",
          "Real-time leaderboard & achievement tracking",
          "Export by game, player, or session",
          "Premium support + customization options",
          "User profile activity history"
         ]
      }
    }
  },
  web3: {
  tokens: {
    basic: {
      title: "Web3 Token - Basic",
      price: 390,
      features: [
        "1 Smart Contract deployable code",
        "No updates/fixes",
        "Email support only",
        "For personal testnet use",
        "ERC-20 or BEP-20 only"
      ]
    },
    standard: {
      title: "Web3 Token - Standard",
      price: 790,
      features: [
        "3 deployable contracts",
        "Monthly audits and patch updates",
        "Priority developer support",
        "Basic NFT or staking features",
        "Works on Ethereum, BSC, Polygon"
      ]
    },
    premium: {
      title: "Web3 Token - Premium",
      price: 1490,
      features: [
        "Unlimited contract access",
        "Weekly updates + feature rollouts",
        "Live dev support & integration help",
        "Multi-chain compatibility",
        "Full contract customization (ERC20, 721, 1155)",
        "Commercial license included"
      ]
    }
  },
  apis: {
    basic: {
      title: "Web3 API - Basic",
      price: 690,
      features: [
        "Contract call endpoints",
        "Basic explorer integration",
        "1000 req/month",
        "Email help only",
        "Single-chain access"
      ]
    },
    standard: {
      title: "Web3 API - Standard",
      price: 1290,
      features: [
        "Multi-chain support (ETH, BSC, Polygon)",
        "NFT metadata fetching",
        "Rate limit: 10k/month",
        "Priority support",
        "Token transfer tracking",
        "Wallet address metadata"
      ]
    },
    premium: {
      title: "Web3 API - Premium",
      price: 1990,
      features: [
        "Real-time blockchain events",
        "Live wallet sync & alerts",
        "24/7 developer chat",
        "Smart contract interaction hooks",
        "Multi-wallet dashboard API",
        "Unlimited usage"
      ]
    }
  },
  database: {
    basic: {
      title: "Web3 DB - Basic",
      price: 1190,
      features: [
        "Token contract metadata dump",
        "CSV format",
        "No live sync",
        "Basic email help"
      ]
    },
    standard: {
      title: "Web3 DB - Standard",
      price: 1990,
      features: [
        "Deployed contract DB (ERCs)",
        "Includes JSON + CSV formats",
        "Weekly updates",
        "Priority support + custom format export"
      ]
    },
    premium: {
      title: "Web3 DB - Premium",
      price: 2890,
      features: [
        "Full chain transaction history",
        "Live sync APIs for contract events",
        "Wallet + Token metadata index",
        "Dedicated developer contact",
        "Supports multiple blockchains"
     ]
      }
    }
  },
  trading: {
    tokens: {
      basic: {
        title: "Trading Bot Token - Basic",
        price: 350,
        features: [
          "Supports 1 trading pair (e.g., BTC/USDT)",
          "No updates or patching",
          "Email support only",
          "Simple buy/sell logic",
          "Backtest script included",
          "Non-commercial license"
        ]
      },
      standard: {
        title: "Trading Bot Token - Standard",
        price: 650,
        features: [
          "Supports up to 5 pairs",
          "Monthly update (strategy improvements)",
          "Priority email/ticket support",
          "Includes RSI, MACD, and MA strategies",
          "Manual and auto mode toggle",
          "Commercial use (small projects)"
        ]
      },
      premium: {
        title: "Trading Bot Token - Premium",
        price: 1390,
        features: [
          "Unlimited pair support",
          "Weekly strategy updates & bug fixes",
          "Live signals integration",
          "Signal chat access (Telegram/Discord)",
          "AI-enhanced trading options",
          "24/7 support & market monitoring features"
        ]
      }
    },
    apis: {
      basic: {
        title: "Trading API - Basic",
        price: 790,
        features: [
          "Real-time ticker & OHLC data",
          "Basic chart endpoints",
          "1,000 calls/month",
          "Email support",
          "Public market data only"
        ]
      },
      standard: {
        title: "Trading API - Standard",
        price: 1490,
        features: [
          "Live market data (candles, depth, trades)",
          "Technical indicators endpoint (SMA, EMA, RSI)",
          "10,000 calls/month",
          "Priority support",
          "Supports multiple exchanges (Binance, KuCoin)"
        ]
      },
      premium: {
        title: "Trading API - Premium",
        price: 2190,
        features: [
          "Unlimited calls",
          "Webhook-based signal triggers",
          "Live trading signals & alerts",
          "Bot integration support",
          "24/7 support + exchange connection guidance",
          "Supports portfolio & balance endpoints"
        ]
      }
    },
    database: {
      basic: {
        title: "Trading DB - Basic",
        price: 1290,
        features: [
          "Static ticker & OHLCV historical dump",
          "CSV format",
          "Email-only support",
          "Single exchange"
        ]
      },
      standard: {
        title: "Trading DB - Standard",
        price: 1990,
        features: [
          "Historical prices + volume",
          "Weekly updates",
          "Advanced formats (SQL, Parquet, JSON)",
          "Priority support",
          "Multi-market data"
        ]
      },
      premium: {
        title: "Trading DB - Premium",
        price: 2809,
        features: [
          "Live orderbook and tick-by-tick history",
          "Real-time syncing",
          "Full exchange feed history",
          "Multi-symbol, multi-exchange data",
          "24/7 help + onboarding support"
        ]
      }
    }
  },
  mev: {
    tokens: {
      basic: {
        title: "MEV Token - Basic",
        price: 450,
        features: [
          "Access to 1 MEV node endpoint",
          "No source or update access",
          "Email support only",
          "For personal or testnet use",
          "Low-priority execution"
        ]
      },
      standard: {
        title: "MEV Token - Standard",
        price: 850,
        features: [
          "3 node endpoints (mainnet)",
          "Monthly updates",
          "Priority queue access",
          "Live bundle simulator",
          "Priority support (24h)"
        ]
      },
      premium: {
        title: "MEV Token - Premium",
        price: 1590,
        features: [
          "Unlimited MEV access keys",
          "Flashbots relay + private transaction support",
          "Live bundle testing sandbox",
          "VIP access queue priority",
          "Live dev chat + Telegram hotline"
        ]
      }
    },
    apis: {
      basic: {
        title: "MEV API - Basic",
        price: 890,
        features: [
          "Bundle API endpoint",
          "Basic stats & logs",
          "1000 bundles/mo",
          "Email-only support",
          "Mempool data included"
        ]
      },
      standard: {
        title: "MEV API - Standard",
        price: 1590,
        features: [
          "Flashbots compatible",
          "Private bundle submission",
          "Live block monitoring",
          "Priority slot access",
          "Fast support with Telegram fallback"
        ]
      },
      premium: {
        title: "MEV API - Premium",
        price: 2290,
        features: [
          "Real-time MEV bundle injection",
          "Block builder simulator",
          "Private RPC & advanced logs",
          "Unlimited usage",
          "24/7 hotline and dev support"
        ]
      }
    },
    database: {
      basic: {
        title: "MEV DB - Basic",
        price: 1390,
        features: [
          "Mempool snapshot dump",
          "CSV and JSON",
          "Email support",
          "Includes Tx hash & gas info"
        ]
      },
      standard: {
        title: "MEV DB - Standard",
        price: 2190,
        features: [
          "Weekly bundle tracking data",
          "MEV profit analysis tools",
          "Gas, miner, and reward tracking",
          "Fast response support",
          "Advanced format export"
        ]
      },
      premium: {
        title: "MEV DB - Premium",
        price: 3090,
        features: [
          "Live syncing of MEV Tx pools",
          "Flashbots historical strategy dumps",
          "Realtime arbitrage & sandwich attack data",
          "Dev hotline support",
          "On-demand export and stats view"
       ]
      }
    }
  },
  websites: {
    tokens: {
      basic: {
        title: "Website Token - Basic",
        price: 290,
        features: [
          "1 License Key (single domain)",
          "Basic website builder template",
          "No updates or security patches",
          "Email support only",
          "No plugin access"
        ]
      },
      standard: {
        title: "Website Token - Standard",
        price: 590,
        features: [
          "3 domain license keys",
          "Monthly updates + minor patches",
          "Priority team support",
          "Plugin & theme marketplace access",
          "Basic analytics dashboard"
        ]
      },
      premium: {
        title: "Website Token - Premium",
        price: 1190,
        features: [
          "Unlimited domain licenses",
          "Full access to site builder suite",
          "Weekly updates + security patches",
          "Custom plugin deployment",
          "Live support + agency features",
          "Multi-user CMS access"
        ]
      }
    },
    apis: {
      basic: {
        title: "Website API - Basic",
        price: 590,
        features: [
          "5,000 calls/month",
          "Basic metrics endpoint (visits, time)",
          "Simple JSON responses",
          "Email support"
        ]
      },
      standard: {
        title: "Website API - Standard",
        price: 1090,
        features: [
          "10,000 calls/month",
          "Uptime tracking + health check",
          "Priority support",
          "Custom domain API keys",
          "Webhook event support"
        ]
      },
      premium: {
        title: "Website API - Premium",
        price: 1790,
        features: [
          "Unlimited calls",
          "Real-time analytics + logs",
          "Custom integration support",
          "Live chat + onboarding dev team",
          "API playground included"
        ]
      }
    },
    database: {
      basic: {
        title: "Website DB - Basic",
        price: 990,
        features: [
          "Static user DB export",
          "CSV format only",
          "Email help",
          "Includes signup metadata"
        ]
      },
      standard: {
        title: "Website DB - Standard",
        price: 1790,
        features: [
          "Login history & device tracking",
          "JSON + CSV formats",
          "Priority support",
          "Weekly updates"
        ]
      },
      premium: {
        title: "Website DB - Premium",
        price: 2690,
        features: [
          "Live user activity DB",
          "Custom export builder",
          "Admin dashboard integration",
          "Live syncing + backup options",
          "Dedicated dev agent"
        ]
      }
    }
  },


  esp: {
    tokens: {
      basic: {
        title: "ESP Token - Basic",
        price: 250,
        features: [
          "1 ESP module access",
          "No firmware or updates",
          "Email help only",
          "Basic Wi-Fi trigger control",
          "Offline demo supported"
        ]
      },
      standard: {
        title: "ESP Token - Standard",
        price: 550,
        features: [
          "3 modules included",
          "Monthly firmware updates",
          "Priority access to firmware devs",
          "Supports GPIO, SPI, PWM features",
          "OTA update script access"
        ]
      },
      premium: {
        title: "ESP Token - Premium",
        price: 990,
        features: [
          "All available ESP modules",
          "Weekly firmware & OTA patches",
          "VIP hardware access + SDKs",
          "Dedicated support engineer",
          "Mobile app integration + OTA monitoring"
        ]
      }
    },
    apis: {
      basic: {
        title: "ESP API - Basic",
        price: 690,
        features: [
          "Basic metrics API (temp, volt)",
          "JSON payloads only",
          "Email support",
          "500 requests/month"
        ]
      },
      standard: {
        title: "ESP API - Standard",
        price: 1290,
        features: [
          "Live stats streaming",
          "Priority API slot access",
          "OTA trigger endpoint",
          "24h support",
          "Device status monitoring"
        ]
      },
      premium: {
        title: "ESP API - Premium",
        price: 1990,
        features: [
          "Real-time device control API",
          "Hardware sync + ping",
          "Unlimited access",
          "24/7 hotline + dev agent",
          "Webhook trigger support"
        ]
      }
    },
    database: {
      basic: {
        title: "ESP DB - Basic",
        price: 1190,
        features: [
          "Hardware logs (CSV)",
          "Device ID, voltage, ping logs",
          "Email support"
        ]
      },
      standard: {
        title: "ESP DB - Standard",
        price: 1890,
        features: [
          "Weekly logs + OTA event data",
          "Advanced formats (SQL, JSON)",
          "Priority support",
          "Multi-device history export"
        ]
      },
      premium: {
        title: "ESP DB - Premium",
        price: 2690,
        features: [
          "Live sync database",
          "Custom log filtering",
          "DevOps panel included",
          "Dedicated technical support team"
        ]
      }
    }

  }
};




function showSubMenu(platform) {
  currentPlatform = platform;
  const subSidebar = document.getElementById("subSidebar");
  const sidebar = document.querySelector(".sidebar");
  const isMobile = window.innerWidth <= 768;

  document.querySelectorAll(".sidebar li").forEach(li => li.classList.remove("selected"));
  const clickedItem = Array.from(document.querySelectorAll(".sidebar li"))
    .find(li => li.textContent.toLowerCase().includes(platform));
  if (clickedItem) clickedItem.classList.add("selected");

  const iconMap = {
    "Slots Games": "🎰",
    "Crash Games": "💥",
    "Table Games": "🃏",
    "Football": "⚽",
    "Basketball": "🏀",
    "Tennis": "🎾",
    "Baseball": "⚾",
    "Hockey": "🏒",
    "MMA": "🥋",
    "Boxing": "🥊"
  };

  const list = subMenus[platform].map(item => `
    <li class="sub-item" onclick="loadPlatform('${platform}-${item}', event)">
      <span class="icon">${iconMap[item] || "•"}</span> ${item}
    </li>
  `).join("");

  subSidebar.innerHTML = `<ul>${list}</ul>`;
  subSidebar.classList.remove("hidden");

  // ✅ On mobile: close main sidebar and show sub-sidebar
  if (isMobile) {
    subSidebar.classList.add("open");
    sidebar.classList.remove("open");
    if (typeof backdrop !== 'undefined') backdrop.classList.add("show");
  }

  document.querySelector(".main-content").classList.add("hidden");
  document.getElementById("tabContent").innerHTML = "";
}

function loadPlatform(fullPath, event) {
  currentSelection = fullPath;
  document.querySelector(".main-content").classList.remove("hidden");
  document.getElementById("cartPage").classList.add("hidden");

  document.querySelectorAll('.sidebar li, .sub-sidebar li').forEach(li => li.classList.remove('selected'));
  if (event?.target) event.target.classList.add('selected');

  if (fullPath.includes('-')) {
    currentPlatform = fullPath.split('-')[0];
  } else {
    currentPlatform = fullPath;
  }

  // Close sub-sidebar on mobile
  if (window.innerWidth <= 768) {
    document.getElementById("subSidebar").classList.remove("open");
    if (typeof backdrop !== 'undefined') backdrop.classList.remove("show");
  }

  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => tab.classList.remove("active"));
  document.querySelector(`.tab[data-tab="tokens"]`)?.classList.add("active");

  switchTab("tokens");
}


function switchTab(tab) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(t => t.classList.remove("active"));
  document.querySelector(`.tab[data-tab="${tab}"]`).classList.add("active");

  const content = document.getElementById("tabContent");
  content.innerHTML = "";

  const platformKey = currentSelection.split("-")[0] || currentSelection;
  const plans = pricingPlans[platformKey]?.[tab];

  if (!plans) {
    content.innerHTML = `<p>No pricing plans available for ${platformKey.toUpperCase()} - ${tab.toUpperCase()}</p>`;
    return;
  }

  for (const key in plans) {
    const plan = plans[key];
    const card = document.createElement("div");
    card.className = "plan-card";
    card.innerHTML = `
      <h3 class="plan-title">${plan.title}</h3>
      <div class="plan-price">$${plan.price}</div>
      <ul class="plan-features">
        ${plan.features.map(f => `<li>✅ ${f}</li>`).join("")}
      </ul>
      <button class="plan-buy" onclick="addToCart('${plan.title}', '${plan.price}')">Add to Cart</button>
    `;
    content.appendChild(card);
  }
}



document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document.getElementById("notificationBtn").addEventListener("click", () => {
  const box = document.getElementById("notificationBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
});

const hamburger = document.getElementById("hamburgerMenu");
const sidebar = document.querySelector(".sidebar");
const backdrop = document.getElementById("backdrop");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  backdrop.classList.toggle("show");
});

backdrop.addEventListener("click", () => {
  sidebar.classList.remove("open");
  document.getElementById("subSidebar").classList.remove("open");
  backdrop.classList.remove("show");
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(title, price) {
  const platformInfo = currentSelection.includes('-')
    ? currentSelection.split('-').map(str => str.trim())
    : [currentSelection, null];

  const platform = platformInfo[0] || "Unknown";
  const subcategory = platformInfo[1];

  const platformDisplay = subcategory
    ? `${capitalize(platform)} > ${subcategory}`
    : capitalize(platform);

  const existing = cart.find(item => item.title === title && item.platform === platformDisplay);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      title,
      price: parseFloat(price),
      qty: 1,
      platform: platformDisplay
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${title} added to cart from ${platformDisplay}`);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


document.getElementById("cartBtn").addEventListener("click", () => {
  document.querySelector(".main-content").classList.add("hidden");
  document.getElementById("cartPage").classList.remove("hidden");
  renderCart();
});

function renderCart() {
  const container = document.getElementById("cartItemsContainer");
  container.innerHTML = "";
  cart = JSON.parse(localStorage.getItem("cart")) || [];

  let total = 0;
  cart.forEach((item, index) => {
    total += item.qty * item.price;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div>
        <h4>${item.title}</h4>
        <small style="color: gray;"><i>From: ${item.platform}</i></small>
        <div>$${item.price} × ${item.qty}</div>
      </div>
      <div class="item-controls">
        <button onclick="decreaseQty(${index})">-</button>
        <button onclick="increaseQty(${index})">+</button>
        <button class="remove" onclick="removeItem(${index})">Remove</button>
      </div>
    `;

    container.appendChild(div);
  });

  document.getElementById("cartTotal").textContent = `$${total.toFixed(2)}`;
}

function increaseQty(index) {
  cart[index].qty += 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function decreaseQty(index) {
  if (cart[index].qty > 1) {
    cart[index].qty -= 1;
  } else {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

const user = JSON.parse(localStorage.getItem("loggedInUser"));
if (!user) {
  window.location.href = "index.html";
} else {
  const greetingEl = document.getElementById("userGreeting");
  const now = new Date();
  const hour = now.getHours();

  let greeting;
  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  greetingEl.textContent = `${greeting}, ${user.fullname || user.email}`;
}



const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
  });
}
function handlePayment() {
  const selectedCurrency = document.getElementById("paymentMethod").value;

  if (!selectedCurrency) {
    alert("Please select a crypto payment method.");
    return;
  }
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user || !user.email) return alert("Please login to continue.");

  const amount = calculateCartTotal(); 

  fetch("https://api.nowpayments.io/v1/invoice", {
    method: "POST",
    headers: {
      "x-api-key": "VGT1EV6-SENM61Q-H53RP45-GSE6RRD", // ← replace with real key
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      price_amount: amount,
      price_currency: "usd",
      pay_currency: selectedCurrency,
      order_id: "ORD-" + Date.now(),
      order_description: "Backend Market Purchase",
      ipn_callback_url: "http://localhost:5500/ipn",
      success_url: "http://localhost:5500/success.html",
      cancel_url: "http://localhost:5500/cancel.html"
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.invoice_url) {
      window.location.href = data.invoice_url;
    } else {
      console.error(data);
      alert("Payment failed to initialize.");
    }
  })
  .catch(err => {
    console.error("Payment error:", err);
    alert("Something went wrong while creating payment.");
  });
}

// Util: Token Generator
function generateToken() {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let token = "";
  for (let i = 0; i < 16; i++) {
    token += charset[Math.floor(Math.random() * charset.length)];
  }
  return token;
}

// Util: Calculate cart total
function calculateCartTotal() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart.reduce((total, item) => total + item.price * item.qty, 0);
}

// Listener for the card payment button
document.getElementById("faw-checkout-btn").addEventListener("click", handlePaystackPayment);

function handlePaystackPayment() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user?.email) return alert("Please login before making a purchase.");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const amount = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  if (amount <= 0) return alert("Your cart is empty!");

  const handler = PaystackPop.setup({
    key: 'pk_live_ba580dd3ff1099056c22c54e68a3b80bc48b7772', // Replace with your actual key
    email: user.email,
    amount: amount * 100, // in kobo
    currency: 'NGN',
    ref: 'BM_' + Date.now(),
    metadata: {
      custom_fields: [
        {
          display_name: user.fullname || "User",
          variable_name: "user_fullname",
          value: user.fullname || "No Name"
        }
      ]
    },
    callback: function (data) {
      if (data.status === "success" || data.status === "successful") {
        // Inside callback:
        const token = generateToken();
        localStorage.setItem("lastPurchasedToken", token);

        // Save notification
        saveNotification(`✅ Purchase Successful! Your token: ${token}`);

        // Send email
        sendTokenEmail(user.email, user.fullname, token);

        // Redirect
        window.location.href = "success.html?tx_ref=" + data.reference;

      } else {
        alert("Payment failed. Try again.");
        window.location.href = "cancel.html";
      }
    },
    onClose: function () {
      alert("Payment was not completed.");
    }
  });

  handler.openIframe();
}

function sendTokenEmail(email, fullname, token) {
  emailjs.send("service_ko7uygk", "template_m2wdyab", {
    email: email,
    fullname: fullname,
    token: token
  }).then(
    response => console.log("✅ Token email sent!", response),
    error => console.error("❌ Token email failed:", error)
  );
}


// Toggle Notification Box
document.getElementById("notificationBtn").addEventListener("click", () => {
  document.getElementById("notificationBox").classList.toggle("hidden");
});

// Save notification to localStorage
function saveNotification(message) {
  let notifications = JSON.parse(localStorage.getItem("notifications")) || [];
  notifications.unshift(message); // add newest first
  localStorage.setItem("notifications", JSON.stringify(notifications));
}

// Load notifications into the UI
function loadNotifications() {
  const list = document.getElementById("notificationList");
  list.innerHTML = ""; // Clear previous
  const notifications = JSON.parse(localStorage.getItem("notifications")) || [];

  if (notifications.length === 0) {
    list.innerHTML = "<li>No new notifications.</li>";
    return;
  }

  notifications.forEach(msg => {
    const li = document.createElement("li");
    li.textContent = msg;
    list.appendChild(li);
  });
}

// Call once when dashboard loads
document.addEventListener("DOMContentLoaded", loadNotifications);
