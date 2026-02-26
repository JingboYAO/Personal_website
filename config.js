window.CONFIG = {
  meta: {
    title: "Jingbo YAO - PhD Candidate",
    description: "Personal website of Jingbo YAO, PhD candidate in Economics at HKUST.",
    url: "https://jingboyao.github.io",
    author: "Jingbo YAO",
    keywords: "Jingbo YAO, Economics, HKUST, Macroeconomics, Finance, International Trade"
  },
  profile: {
    name: "Jingbo YAO",
    title: "PhD Candidate",
    department: "Department of Economics, Business School",
    university: "Hong Kong University of Science and Technology",
    email: "jyaoam@connect.ust.hk",
    tagline: "Despite the forecast, live like it’s spring -- Lilly Pulitzer", // Added tagline
    cvLink: "https://www.dropbox.com/scl/fi/21nyttqzdgv66gcy6xdvl/CV_JingboYAO_20251120.pdf?rlkey=5l8lwby7i8ux75gd9iekohjnr&e=1&st=hv4dbjpl&dl=0",
    photo: "assets/images/personal_photo.png",
    social: [
      { name: "Google Scholar", url: "#", icon: "scholar" },
      { name: "Twitter", url: "#", icon: "twitter" },
      { name: "LinkedIn", url: "#", icon: "linkedin" }
    ]
  },
  navigation: [
    { name: "Home", url: "index.html" },
    { name: "Research", url: "research.html" },
    { name: "Teaching", url: "teaching.html" }
  ],
  content: {
    // 1. Home Content
    intro: `I’m a PhD candidate from the Department of Economics, Business School, Hong Kong University of Science and Technology. I obtained my master’s degree in Public Finance from the Chinese Academy of Fiscal Science, Ministry of Finance of China, and bachelor’s degree in Financial Engineering from Xiamen University.`,
    experience: [
      "I was a visiting scholar at the University of California San Diego and a senior associate at the Bank for International Settlements.",
      "I will visit Hong Kong Institute for Monetary and Financial Research, Hong Kong Monetary Authority from Apr to Jun, 2026."
    ],
    // Research Interests Text Block for Home Page
    researchInterestsIntro: "My research interests lie in <strong>International Macro and Finance</strong>, <strong>Monetary Economics</strong>, <strong>International Trade</strong>, and <strong>Chinese Economy</strong>. My current and future work centers on two broad themes:",
    researchThemes: [
      {
        title: "From macro to micro",
        description: "Understanding the causal effects and transmission mechanisms of macroeconomic shocks—such as monetary policy surprises—on real economic outcomes and financial markets, with a particular focus on international propagation. In this line, I employ state-of-the-art causal identification strategies and leverage detailed micro-level datasets—such as firm-product-level customs records, high-frequency nighttime light data, land transaction information, bond issuance data, forecast surveys, and intraday financial market variations—to trace the propagation of macro shocks."
      },
      {
        title: "From micro to macro",
        description: "Studying the macroeconomic implications of market frictions and the design of optimal policy responses. In this regard, I develop structural DSGE models to examine how financial frictions shape the responses of inflation, output, and trade to macroeconomic disturbances. I also analyze optimal policy design and potential international policy coordination in these contexts."
      }
    ],

    // 2. Research Content
    research: {
      jobMarketPaper: [
        {
          title: "The U.S. Monetary Transmission and International Prices: The Role of a Cost Channel",
          authors: "Jingbo Yao",
          summary: "The cost channel of the U.S. monetary policy is highlighted in the literature. However, its macro implications in an international context remain underexplored. I embed this channel into a New-Keynesian two-country model, yielding novel insights on the spillback and spillover effects of the U.S. monetary policy and providing alternative explanations for some well-documented facts or puzzles. For instance, this channel suggests a contractionary U.S. monetary shock could potentially induce import inflation for the U.S. or other economies; it weakens the expenditure-switching effect contributing to the comovement of the U.S. and foreign output. Considering dollar currency invoicing, complementary pricing, borrowing in dollar, this effect could be even augmented. Moreover, it implies a tougher trade-off for optimal domestic policy and a larger room for international policy coordination.",
          presentation: "Econometric Society European Winter Meeting (scheduled)，Bank for International Settlements, PBCSF Future Scholars in Finance Forum, JIE Summer School, CES China, AsianFA, RCEA, Shanghai Jiaotong University, Chinese Academy of Fiscal Sciences, HKUST, University of California San Diego",
          award: "The Bank for International Settlements PhD Fellowship 2025; The Overseas Research Award HKUST 2025; 2025 Antai College, Shanghai Jiaotong Universtiy, Doctoral Forum Outstanding Paper Award",
          link: "https://www.dropbox.com/scl/fi/hatwfovwj6pjvs83krzmx/JMP_JingboYAO_2025Oct.pdf?rlkey=l80y7t2bslvridobfsxxop2zv&e=1&st=wui8c6eh&dl=0"
        }
      ],
      workingPapers: [
        {
          title: "LSAP Shocks and Stock Prices: The Information Effect Revisited",
          authors: "Jingbo Yao (with John Rogers, Wenbin Wu, and Juanyi Jenny Xu), submitted",
          summary: "The central bank information effect is the subject of lively debate. We present a novel finding regarding the effects of U.S. large-scale asset purchase (LSAP) shocks and offer interpretations based on an information effect that varies both over time and across firms. Specifically, positive LSAP shocks depress U.S. stock returns during periods of quantitative easing (QE) but not in other sub-periods. An LSAP easing policy signals a worsening in the Fed's economic outlook, leading to a decrease in equity investors' confidence. This ``LSAP information effect\" is more pronounced for more procyclical firms and is state-dependent, with larger effects during worse economic circumstances. The transmission of this LSAP shock information effect works primarily through the risk premium channel, with more significant effects on firms with higher risk exposure.",
          presentation: "World Congress of ES, IAAE, AsianFA, CCER Summer Institute, PKU-NUS Annual Conference, AMES(Vietnam), AMES(Singapore), WEAI, Fudan FISF, HKUST",
          award: "SBM Research Postgraduate Award- Outstanding Research Award 2023-24",
          link: "https://www.econometricsociety.org/regional-activities/conference-papers/view/282/733"
        },
        {
          title: "The Spill-back and Spillover Effects of US Monetary Policy: Evidence on an International Cost Channel",
          authors: "Jingbo Yao (with Yao Amber Li, Lingfei Lu, and Shangjin Wei), Revise and Resubmit at Journal of Monetary Economics",
          summary: "We find that an unanticipated tightening of US monetary policy tends to raise US import prices. This empirical ``spill-back\" pattern differs from the predictions of typical open-economy macro models. We also document a new empirical ``spillover\" effect: import prices of other countries also rise following an unexpected US monetary tightening. To understand the mechanism, we examine Chinese exporters and identify a borrowing cost channel—their liquidity conditions generally deteriorate after a US monetary tightening. Indeed, the output price response is greater for those firms facing higher borrowing costs or tighter liquidity conditions.",
          presentation: "World Congress of ES, CES China, HKIMR-ECB-BOFIT Joint Conference, NBER China, CICF, CTRG, NBER East Asian, HKUST-Fudan-SMU Conference, Melbourne Annual Macro Policy Meeting, IAAE, AsianFA, AMES, International Economics Joint Conference in Shenzhen, EITI, ATW, Monash, PKU(NSD), China Agricultural University, NUFE, HKUST",
          link: "https://www.nber.org/papers/w33811#:~:text=We%20find%20that%20an%20unanticipated,costs%20or%20tighter%20liquidity%20conditions."
        },
        {
          title: "The International Spillover of Monetary Policy Shock: New Evidence from Nighttime Light",
          authors: "Jingbo Yao (with Kaiji Chen, Qichao Wang, and Juanyi Jenny Xu)",
          summary: "We revisit the international spillover effects of the US monetary policy shock (MPS) using a new data source, the daily nighttime light (NTL), as a high-frequency proxy for real economic activities. We find that the unexpected US tightening has a negative impact on China's output, and the peak comes about two months after the shock. The overall negative response is consistent with a construction investment channel, with the NTL variation mainly driven by non-built-up areas instead of city centers and suburbs. Consistently, cities with lower urbanization rates, and tighter financial conditions respond more negatively to a contractionary shock. Moreover, we show that trade exposure could partially mitigate the overall adverse impacts of a US tightening.",
          presentation: "NBER China (scheduled), CFRC, World Congress of ES, European ES Winter, Midwest Macro, CICF, CICM, CES China, CES North American, IFABS, China Accounting and Finance Conference, International Conference on The Chinese Economy: Past",
          link: "https://www.econometricsociety.org/regional-activities/conference-papers/view/277/631"
        }
      ]
    },

    // 3. Teaching Content
    teaching: [
      {
        institution: "Hong Kong University of Science and Technology",
        courses: [
          { role: "Teaching Assistant", title: "Banking and Financial Intermediation (Master)" },
          { role: "Teaching Assistant", title: "Macroeconomic Analysis (Master)" },
          { role: "Teaching Assistant", title: "Mathematics for Business and Economics (Master)" },
          { role: "Teaching Assistant", title: "Macroeconomic and Financial Risk Management (Undergraduate)" },
          { role: "Teaching Assistant", title: "Money and Banking (Undergraduate)" },
          { role: "Teaching Assistant", title: "Global Macroeconomics and International Investment Strategy (Undergraduate)" }
        ]
      },
      {
        institution: "Chinese Academy of Fiscal Sciences",
        courses: [
          { role: "Teaching Assistant", title: "Applied Econometrics (Master)" }
        ]
      }
    ]
  }
};
