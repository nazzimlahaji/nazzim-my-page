export type Language = "en" | "ms";

export interface Translations {
  // Navbar
  nav: {
    brand: string;
    home: string;
    experience: string;
    education: string;
    skills: string;
    switchToLight: string;
    switchToDark: string;
    openMenu: string;
  };

  // Footer
  footer: {
    rights: string;
  };

  // HomePage
  home: {
    role: string;
    bio: string;
    aboutTitle: string;
    aboutBody: string;
    strengthsTitle: string;
    exploreTitle: string;
    highlights: {
      backend: { label: string; desc: string };
      infrastructure: { label: string; desc: string };
      frontend: { label: string; desc: string };
    };
    quickLinks: {
      experience: string;
      education: string;
      skills: string;
    };
  };

  // ExperiencePage
  experience: {
    pageTitle: string;
    pageSubtitle: string;
    projectsTitle: string;
    boilerplateTitle: string;
    boilerplateDesc: string;
    viewOnGitHub: string;
    internship: string;
    jobs: {
      tuxuriSE: {
        role: string;
        period: string;
        bullets: string[];
      };
      tuxuriIntern: {
        role: string;
        period: string;
        bullets: string[];
      };
    };
  };

  // EducationPage
  education: {
    pageTitle: string;
    pageSubtitle: string;
    researchTitle: string;
    published: string;
    viewPublication: string;
    degrees: {
      masters: {
        level: string;
        award: string;
        highlights: string[];
      };
      bachelors: {
        level: string;
        award: string;
        highlights: string[];
      };
      diploma: {
        level: string;
        award: string;
        highlights: string[];
      };
    };
  };

  // SkillsPage
  skills: {
    pageTitle: string;
    pageSubtitle: string;
    proficiencyLevels: string;
    additionalTitle: string;
    levels: {
      intermediate: string;
      basic: string;
      beginner: string;
    };
    categories: {
      languages: string;
      tools: string;
      database: string;
    };
  };

  // SEO per-page meta
  seo: {
    home: { title: string; description: string };
    experience: { title: string; description: string };
    education: { title: string; description: string };
    skills: { title: string; description: string };
    notFound: {
      title: string;
      description: string;
      heading: string;
      body: string;
      backHome: string;
    };
  };
}

const en: Translations = {
  nav: {
    brand: "Mohd Nazzim Bin Lahaji",
    home: "Home",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
    openMenu: "Open menu",
  },
  footer: {
    rights: "All rights reserved.",
  },
  home: {
    role: "Software Engineer",
    bio: "Turning ideas into seamless, scalable applications. Specialising in high-performance Go backends, Docker infrastructure, and type-safe React frontends.",
    aboutTitle: "About Me",
    aboutBody:
      "Driven by curiosity and the thrill of creating user-centric solutions, I build systems that make a difference. Currently a Software Engineer at Tuxuri Sdn. Bhd. in Shah Alam, with experience spanning geospatial data platforms, payment integrations, real-time communication via NATS & WebSockets, and AI-powered tooling.",
    strengthsTitle: "Core Strengths",
    exploreTitle: "Explore",
    highlights: {
      backend: {
        label: "Backend",
        desc: "High-concurrency services in Golang",
      },
      infrastructure: {
        label: "Infrastructure",
        desc: "Scalable deployments using Docker & PostgreSQL",
      },
      frontend: {
        label: "Frontend",
        desc: "Type-safe UI/UX with React & TypeScript",
      },
    },
    quickLinks: {
      experience: "Work Experience",
      education: "Education",
      skills: "Skills",
    },
  },
  experience: {
    pageTitle: "Work Experience",
    pageSubtitle: "My professional journey as a software engineer",
    projectsTitle: "Projects",
    boilerplateTitle: "Go API Boilerplate",
    boilerplateDesc: "Open-source Go REST API boilerplate on GitHub.",
    viewOnGitHub: "View on GitHub",
    internship: "Internship",
    jobs: {
      tuxuriSE: {
        role: "Software Engineer",
        period: "July 2023 – Present",
        bullets: [
          "Implemented ACL (Access Control Lists) across ReactJS (TypeScript) frontend and Laravel backend, ensuring secure role-based permissions.",
          "Collaborated with backend payment services, integrating ReactJS (TypeScript) for seamless financial transactions.",
          "Designed and implemented scalable e-commerce databases using Laravel (PHP) with robust API endpoints for seamless frontend integration and optimal performance.",
          "Developed a content management system using ReactJS (TypeScript) and Laravel, leveraging Minio for efficient data storage.",
          "Managed large-scale geospatial data with PostgreSQL and PostGIS, building a scalable backend in Golang and visualizing data in ReactJS (TypeScript).",
          "Created and maintained a NATS server, using NATS.io in Golang to send messages to the API server and WebSockets to enable real-time communication between server and client.",
          "Documented project onboarding via BookStack and created comprehensive OpenAPI specifications for all API endpoints.",
          "Developed a flexible form-builder system with Go, React (TypeScript) and PostgreSQL, allowing configurable workflows and slashing form-development time.",
          "Built a proof-of-concept AI-powered chat application for data retrieval using Python with Ollama LLM integration and MCP (Model Context Protocol) server, paired with a React 19 frontend in TypeScript, backed by PostgreSQL, containerized with Docker, and managed with uv and pnpm.",
          "Built a proof-of-concept ML pipeline for student talent identification using physical fitness assessment data; performed data extraction, preprocessing, K-Means clustering, and Random Forest classification to categorize students into talent tiers.",
        ],
      },
      tuxuriIntern: {
        role: "Web Developer",
        period: "Mar 2023 – Jun 2023",
        bullets: [
          "Developed and maintained web applications using ReactJS (TypeScript), focusing on performance and scalability.",
          "Implemented table caching methods to efficiently handle large datasets.",
          "Collaborated closely with backend developers to design and optimize data flow through RESTful APIs.",
          "Created interactive maps and simulation interpolations using MapLibre for geospatial insights.",
          "Leveraged Docker to containerize and manage PostgreSQL databases, streamlining deployment and development processes.",
        ],
      },
    },
  },
  education: {
    pageTitle: "Education",
    pageSubtitle: "Academic background and achievements",
    researchTitle: "Academic Research",
    published: "Published",
    viewPublication: "View Publication",
    degrees: {
      masters: {
        level: "Master of Computer Science",
        award: "Tamat dengan Anugerah Dekan",
        highlights: [
          "Designed a Shopify-style UI for UiTM Medicine Shop with a chatbot that recommends medicines based on symptoms using Figma.",
          "Web scraped an e-commerce website to create a dataset and used Orange Data Mining to train and test AI models for sentiment analysis with SVM, k-NN, and Random Forest.",
        ],
      },
      bachelors: {
        level: "Bachelor of Computer Science",
        award: "First Class Honour",
        highlights: [
          'Published academic research on AI: "Unveiling Sarcastic Intent: Web-Based Detection of Sarcasm In News Headlines".',
        ],
      },
      diploma: {
        level: "Diploma of Computer Science",
        award: "Vice Chancellor Award",
        highlights: [
          "Led National Kesatria's team as representative of UiTM Sarawak to participate in Jamboree (Commissioning Ceremony) in Melaka.",
          'Served UiTM as Kesatria Negara and received the title of "Leftenan Muda".',
          "Attended UiTM C++ Programming Workshop.",
        ],
      },
    },
  },
  skills: {
    pageTitle: "Skills & Technologies",
    pageSubtitle: "Languages, tools, and platforms I work with",
    proficiencyLevels: "← proficiency levels",
    additionalTitle: "Additional Technologies",
    levels: {
      intermediate: "Intermediate",
      basic: "Basic",
      beginner: "Beginner",
    },
    categories: {
      languages: "Languages & Frameworks",
      tools: "Tools & Platforms",
      database: "Database & Storage",
    },
  },
  seo: {
    home: {
      title: "Software Engineer Portfolio",
      description:
        "Software Engineer in Malaysia specializing in Go, React, TypeScript, Docker, and PostgreSQL.",
    },
    experience: {
      title: "Work Experience",
      description:
        "Work experience of Nazzim Lahaji — Software Engineer at Tuxuri building scalable systems with Go, React, PostgreSQL, and Docker.",
    },
    education: {
      title: "Education & Research",
      description:
        "Computer Science degrees from UiTM with Dean's and First Class Honours awards. Published AI research on sarcasm detection.",
    },
    skills: {
      title: "Skills & Technologies",
      description:
        "Technical skills: Go, React, TypeScript, Laravel, Python, Docker, PostgreSQL, PostGIS, NATS.io, WebSocket, and more.",
    },
    notFound: {
      title: "Page Not Found",
      description: "The page you are looking for does not exist.",
      heading: "Page Not Found",
      body: "Sorry, the page you're looking for doesn't exist or has been moved.",
      backHome: "Back to Home",
    },
  },
};

const ms: Translations = {
  nav: {
    brand: "Mohd Nazzim Bin Lahaji",
    home: "Utama",
    experience: "Pengalaman",
    education: "Pendidikan",
    skills: "Kemahiran",
    switchToLight: "Tukar ke mod cerah",
    switchToDark: "Tukar ke mod gelap",
    openMenu: "Buka menu",
  },
  footer: {
    rights: "Hak cipta terpelihara.",
  },
  home: {
    role: "Jurutera Perisian",
    bio: "Mengubah idea menjadi aplikasi yang lancar dan berskala. Pakar dalam backend Go berprestasi tinggi, infrastruktur Docker, dan frontend React yang selamat dari segi jenis.",
    aboutTitle: "Tentang Saya",
    aboutBody:
      "Didorong oleh rasa ingin tahu dan semangat mencipta penyelesaian berpusatkan pengguna, saya membina sistem yang memberi impak. Kini sebagai Jurutera Perisian di Tuxuri Sdn. Bhd. di Shah Alam, dengan pengalaman merangkumi platform data geospatial, integrasi pembayaran, komunikasi masa nyata melalui NATS & WebSockets, dan alatan berkuasa AI.",
    strengthsTitle: "Kekuatan Utama",
    exploreTitle: "Terokai",
    highlights: {
      backend: {
        label: "Backend",
        desc: "Perkhidmatan konkurensi tinggi dalam Golang",
      },
      infrastructure: {
        label: "Infrastruktur",
        desc: "Penggunaan berskala menggunakan Docker & PostgreSQL",
      },
      frontend: {
        label: "Frontend",
        desc: "UI/UX selamat jenis dengan React & TypeScript",
      },
    },
    quickLinks: {
      experience: "Pengalaman Kerja",
      education: "Pendidikan",
      skills: "Kemahiran",
    },
  },
  experience: {
    pageTitle: "Pengalaman Kerja",
    pageSubtitle: "Perjalanan profesional saya sebagai jurutera perisian",
    projectsTitle: "Projek",
    boilerplateTitle: "Go API Boilerplate",
    boilerplateDesc: "Boilerplate Go REST API sumber terbuka di GitHub.",
    viewOnGitHub: "Lihat di GitHub",
    internship: "Latihan Industri",
    jobs: {
      tuxuriSE: {
        role: "Jurutera Perisian",
        period: "Julai 2023 – Kini",
        bullets: [
          "Melaksanakan ACL (Senarai Kawalan Akses) merentasi frontend ReactJS (TypeScript) dan backend Laravel, memastikan kebenaran berasaskan peranan yang selamat.",
          "Bekerjasama dengan perkhidmatan pembayaran backend, mengintegrasikan ReactJS (TypeScript) untuk transaksi kewangan yang lancar.",
          "Mereka bentuk dan melaksanakan pangkalan data e-dagang yang berskala menggunakan Laravel (PHP) dengan titik akhir API yang kukuh untuk integrasi frontend yang lancar dan prestasi optimum.",
          "Membangunkan sistem pengurusan kandungan menggunakan ReactJS (TypeScript) dan Laravel, memanfaatkan Minio untuk penyimpanan data yang cekap.",
          "Mengurus data geospatial berskala besar dengan PostgreSQL dan PostGIS, membina backend berskala dalam Golang dan memvisualisasikan data dalam ReactJS (TypeScript).",
          "Mencipta dan menyelenggara pelayan NATS, menggunakan NATS.io dalam Golang untuk menghantar mesej ke pelayan API dan WebSockets untuk membolehkan komunikasi masa nyata antara pelayan dan klien.",
          "Mendokumentasikan onboarding projek melalui BookStack dan mencipta spesifikasi OpenAPI yang komprehensif untuk semua titik akhir API.",
          "Membangunkan sistem pembina borang yang fleksibel dengan Go, React (TypeScript) dan PostgreSQL, membolehkan aliran kerja yang boleh dikonfigurasi dan mempercepatkan masa pembangunan borang.",
          "Membina aplikasi chat berkuasa AI sebagai bukti konsep untuk pengambilan data menggunakan Python dengan integrasi Ollama LLM dan pelayan MCP (Model Context Protocol), dipasangkan dengan frontend React 19 dalam TypeScript, disokong PostgreSQL, dikontenerkan dengan Docker, dan diuruskan dengan uv dan pnpm.",
          "Membina saluran paip ML sebagai bukti konsep untuk pengenalpastian bakat pelajar menggunakan data penilaian kecergasan fizikal; melakukan pengekstrakan data, prapemprosesan, pengelompokan K-Means, dan pengelasan Random Forest untuk mengkategorikan pelajar ke dalam peringkat bakat.",
        ],
      },
      tuxuriIntern: {
        role: "Pembangun Web",
        period: "Mac 2023 – Jun 2023",
        bullets: [
          "Membangunkan dan menyelenggara aplikasi web menggunakan ReactJS (TypeScript), memberi tumpuan kepada prestasi dan kebolehskalaan.",
          "Melaksanakan kaedah caching jadual untuk mengendalikan dataset besar dengan cekap.",
          "Bekerjasama rapat dengan pembangun backend untuk mereka bentuk dan mengoptimumkan aliran data melalui API RESTful.",
          "Mencipta peta interaktif dan interpolasi simulasi menggunakan MapLibre untuk pandangan geospatial.",
          "Memanfaatkan Docker untuk mengkontenerkan dan mengurus pangkalan data PostgreSQL, memperkemas proses penggunaan dan pembangunan.",
        ],
      },
    },
  },
  education: {
    pageTitle: "Pendidikan",
    pageSubtitle: "Latar belakang akademik dan pencapaian",
    researchTitle: "Penyelidikan Akademik",
    published: "Diterbitkan",
    viewPublication: "Lihat Penerbitan",
    degrees: {
      masters: {
        level: "Sarjana Sains Komputer",
        award: "Tamat dengan Anugerah Dekan",
        highlights: [
          "Mereka bentuk UI gaya Shopify untuk UiTM Medicine Shop dengan chatbot yang mencadangkan ubat berdasarkan gejala menggunakan Figma.",
          "Mengikis web laman e-dagang untuk mencipta dataset dan menggunakan Orange Data Mining untuk melatih dan menguji model AI bagi analisis sentimen dengan SVM, k-NN, dan Random Forest.",
        ],
      },
      bachelors: {
        level: "Ijazah Sarjana Muda Sains Komputer",
        award: "Kepujian Kelas Pertama",
        highlights: [
          'Menerbitkan penyelidikan akademik mengenai AI: "Unveiling Sarcastic Intent: Web-Based Detection of Sarcasm In News Headlines".',
        ],
      },
      diploma: {
        level: "Diploma Sains Komputer",
        award: "Anugerah Naib Canselor",
        highlights: [
          "Memimpin pasukan Kesatria Negara sebagai wakil UiTM Sarawak untuk menyertai Jamboree (Upacara Perarakan) di Melaka.",
          'Berkhidmat di UiTM sebagai Kesatria Negara dan menerima gelaran "Leftenan Muda".',
          "Menghadiri Bengkel Pengaturcaraan C++ UiTM.",
        ],
      },
    },
  },
  skills: {
    pageTitle: "Kemahiran & Teknologi",
    pageSubtitle: "Bahasa, alatan, dan platform yang saya gunakan",
    proficiencyLevels: "← tahap kecekapan",
    additionalTitle: "Teknologi Tambahan",
    levels: {
      intermediate: "Pertengahan",
      basic: "Asas",
      beginner: "Permulaan",
    },
    categories: {
      languages: "Bahasa & Rangka Kerja",
      tools: "Alatan & Platform",
      database: "Pangkalan Data & Penyimpanan",
    },
  },
  seo: {
    home: {
      title: "Portfolio Jurutera Perisian",
      description:
        "Jurutera Perisian di Malaysia, pakar dalam Go, React, TypeScript, Docker, dan PostgreSQL.",
    },
    experience: {
      title: "Pengalaman Kerja",
      description:
        "Pengalaman kerja Nazzim Lahaji — Jurutera Perisian di Tuxuri membina sistem berskala dengan Go, React, PostgreSQL, dan Docker.",
    },
    education: {
      title: "Pendidikan & Penyelidikan",
      description:
        "Ijazah Sains Komputer dari UiTM dengan Anugerah Dekan dan Kepujian Kelas Pertama. Penyelidikan AI diterbitkan.",
    },
    skills: {
      title: "Kemahiran & Teknologi",
      description:
        "Kemahiran teknikal: Go, React, TypeScript, Laravel, Python, Docker, PostgreSQL, PostGIS, NATS.io, WebSocket, dan lain-lain.",
    },
    notFound: {
      title: "Halaman Tidak Ditemui",
      description: "Halaman yang anda cari tidak wujud.",
      heading: "Halaman Tidak Ditemui",
      body: "Maaf, halaman yang anda cari tidak wujud atau telah dipindahkan.",
      backHome: "Kembali ke Utama",
    },
  },
};

export const translations: Record<Language, Translations> = { en, ms };
