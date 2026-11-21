export interface StrengthItem {
  id: string;
  index: string;
  category: string;
  title: string;
  description: string;
  footer: string;
  rotation: string;
}

export interface ExperienceItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  period: string;
  desc1: string;
  desc2: string;
  tags: string[];
  frameTag: string;
  frameTitle: string;
  frameSubtitle: string;
  frameFooterRole: string;
  imageUrl: string;
  imageAlt: string;
  fallbackType: 'cad-site' | 'cad-structure' | 'cad-3d';
  deliverables: string[];
  tools: string[];
  location: string;
}

export interface EducationItem {
  period: string;
  institution: string;
  program: string;
  description: string;
  active?: boolean;
}

export interface SkillGroup {
  id: string;
  label: string;
  items: {
    name: string;
    detail: string;
    featured?: boolean;
  }[];
}

export const HERO_PORTRAIT_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuARusRFeoXwC6YLSgFk0uSrPqwJPRcE_VqEzTui7uho15IsGrer_lGkjhIe5EQxZGvx4EezJu41F5OntwIUaJh42JEWbSnKItSuXM2jy7NQF2PsAc85Dea6E5OPCPo1Qkvd4En2N3m1TEUdDBJKU6tgohIsrGL3n8-f2KLuKi8iISEHx1vli2OeFDjDtJq62N3u5bBLQ9I1vbeyOJTHN_oiXj4l-3Vp8sXMG3U1pJEvSP1_Bj_1gKSN';

export const POLAROID_SNAP_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBU6hY5nVET6WcYNKKsbsX8qJ8bJgMSi083S8unMZdX-PuTyRz-H_s944k21jI9NZ47CHsh1x08PqrQlKl3dXHKK-A6wCC1uRXjTwh8c3SR44Z8pzPz_SRypCYs4JDBlmgR8CiRwwpj8yTgiitHtDedQ0x3VuOFy1bsR3ZNBO1R_Hgzwv1uhEW4i4V7VZi5DsTx9mJRLhYGKWB2UqNKmfv45iwdWcbF80Ry_MFsJPE';

export const STRENGTHS: StrengthItem[] = [
  {
    id: 'structured',
    index: '01',
    category: 'Methodology',
    title: 'Structured',
    description:
      'Terbiasa menyusun gambar kerja teknis, denah arsitektur, dan struktur bangunan dua lantai secara presisi dan sistematis sesuai standar engineering.',
    footer: 'AutoCAD · Shop Drawings',
    rotation: '-rotate-2',
  },
  {
    id: 'detail-oriented',
    index: '02',
    category: 'Quality Control',
    title: 'Detail-Oriented',
    description:
      'Teliti dalam mengawasi kesesuaian eksekusi konstruksi di lapangan dengan blueprint serta tertib mencatat inventaris keluar-masuk logistik material proyek.',
    footer: 'Site Inspection · Material Logs',
    rotation: 'rotate-2',
  },
  {
    id: 'adaptable',
    index: '03',
    category: 'Dual Domain',
    title: 'Adaptable',
    description:
      'Memadukan fondasi teknik konstruksi perumahan dengan semangat belajar tinggi dan adaptasi komputasi digital di bidang Teknik Informatika ITPLN.',
    footer: 'Civil CAD · Informatika ITPLN',
    rotation: '-rotate-1',
  },
  {
    id: 'communicative',
    index: '04',
    category: 'Collaboration',
    title: 'Communicative',
    description:
      'Memiliki pengalaman berorganisasi, proaktif, dan kemampuan komunikasi verbal/tertulis yang baik untuk koordinasi efektif antara vendor, teknisi, dan tim.',
    footer: 'Cross-Team · Leadership',
    rotation: 'rotate-2',
  },
];

export const PROFILE_SPECS = [
  { label: 'University', value: 'Institut Teknologi PLN', highlight: true },
  { label: 'Faculty / Major', value: 'Teknik Informatika' },
  { label: 'Vocational BG', value: 'SMKN 4 Jakarta (TKP)' },
  { label: 'Core Tools', value: 'AutoCAD, SketchUp, RAB' },
  { label: 'Languages', value: 'Bahasa Indonesia, English' },
  { label: 'Availability', value: 'Open for Internship & Projects', available: true },
  { label: 'Location', value: 'Cilincing, Jakarta Utara' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'pt-pp-bsi',
    tabLabel: '01. PT PP BSI (Persero)',
    badge: 'CAD DRAFTER & PENGAWAS LAPANGAN',
    title: 'PT PP BSI (Persero)',
    period: 'Apprenticeship / Magang Industri • DKI Jakarta',
    desc1:
      'Menyusun serta memperbarui gambar kerja (Shop Drawing & As-Built Drawing) menggunakan AutoCAD sesuai revisi engineering langsung dari lapangan.',
    desc2:
      'Melakukan inspeksi berkala pada pelaksanaan struktur dan finishing untuk memastikan deviasi kerja sesuai dengan spesifikasi teknis dan toleransi keselamatan konstruksi.',
    tags: ['AutoCAD 2D', 'Site Inspection', 'As-Built Drawing', 'Quality Control'],
    frameTag: 'Site & CAD',
    frameTitle: 'Field Supervision',
    frameSubtitle: 'Shop Drawing Verification',
    frameFooterRole: 'Drafter & Site Inspector',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAqZVZGT1bTbk6BYQTEiOOFwFxO5BKKJnlU0z3qYTH-AbssUFeoaVr54BwXfVnouZf5eoQGd9GbnwJtHV5_L-0B_l9kSA9ZttDsvfBgTN0_FFG9BPmn5wc8Y-v0EB8M62tcoABOjkRNl6nx6uU5cHkSZvyKhb5_BGXtHT6B0k1oPZi_IF8znE58A5aXzYCHtp4IvKqBSBWkB8ziOMWpRBfrd41BX6PnYElmAQUZOnI',
    imageAlt: 'PT PP BSI Project Blueprint & Site Supervision',
    fallbackType: 'cad-site',
    deliverables: [
      'Revisi Shop Drawing & As-Built Drawing berbasis AutoCAD 2D',
      'Checklist inspeksi deviasi struktur & pekerjaan finishing harian',
      'Koordinasi teknis antara tim engineering dan pelaksana lapangan',
    ],
    tools: ['AutoCAD 2D', 'Site Checklist', 'Technical Blueprints'],
    location: 'DKI Jakarta',
  },
  {
    id: 'pt-arvit-studio',
    tabLabel: '02. PT Arvit Studio',
    badge: 'STRUCTURAL DRAFTER & LOGISTIK MATERIAL',
    title: 'PT Arvit Studio',
    period: 'Proyek Perancangan Struktur & Inventaris • DKI Jakarta',
    desc1:
      'Menyusun drafting denah, potongan, dan detail struktur bangunan 2 lantai dengan presisi matematis menggunakan AutoCAD dan visualisasi 3D SketchUp.',
    desc2:
      'Mengelola pencatatan keluar-masuk logistik material proyek, mengontrol volume ketersediaan bahan, serta membuat rekonsiliasi data inventaris berkala.',
    tags: ['Struktur 2 Lantai', 'Logistik Material', 'SketchUp 3D', 'Inventory Control'],
    frameTag: '2-Story House',
    frameTitle: 'Structural Drafter',
    frameSubtitle: 'Material Inventory Log',
    frameFooterRole: 'Structural & Logistics',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBYBigGQ9nYM-n4YAp9iEnT-0PZrdNfaAYSQySspGzONMiG9NhJ57TRcePu8Ojf18j9Oj81Xzgm-2EJ_F0WfLGkYCwMpOdjtJy4R727d_v6oyfALeE-g6-0od--8kds3NpbrBgJuVV7nsg7ufp-IrzzKILaXRXT8LXYE391ZMGmLmp-2aByKJ5ILdVh-jOGc-f_oQo0Z6v-adeToJGi1FVp9x7nWlTQod8o2CdgF_g',
    imageAlt: 'PT Arvit Studio 2-Story Structural Drafting',
    fallbackType: 'cad-structure',
    deliverables: [
      'Denah, tampak, potongan, dan detail penulangan struktur 2 lantai',
      'Model visualisasi massa 3D bangunan menggunakan SketchUp',
      'Log keluar-masuk material proyek dan rekonsiliasi stok gudang',
    ],
    tools: ['AutoCAD', 'SketchUp 3D', 'Excel Material Log'],
    location: 'DKI Jakarta',
  },
  {
    id: 'smkn-4-jakarta',
    tabLabel: '03. SMKN 4 Jakarta Studio',
    badge: 'VOCATIONAL CAD EXCELLENCE',
    title: 'SMKN 4 Jakarta Studio',
    period: 'Teknik Konstruksi & Perumahan • 2019 - 2022',
    desc1:
      'Menyelesaikan seluruh modul pembuatan gambar kerja komprehensif (arsitektur, struktur beton bertulang, sanitasi, dan kelistrikan rumah tinggal).',
    desc2:
      'Menghitung Rencana Anggaran Biaya (RAB), volume pekerjaan, serta analisa harga satuan material konstruksi untuk proyek perumahan simulasi.',
    tags: ['RAB Estimation', 'Gambar Kerja', 'DPIB', 'SMKN 4 JKT'],
    frameTag: '3D & Modeling',
    frameTitle: 'RAB & Modeling',
    frameSubtitle: 'Cost & Material Estimation',
    frameFooterRole: 'TKP Studio Excellence',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAvEC4Ycu7rRWXLEceqi5osFIiBzdazmuCVS9q_-y2lLUJFFX-uEGEqH-NBesjQpNkYaktylaJwmcLONKKnI5Ww7n4OHb8Lg3Gej2-A78gGSr60ASyOy6WujfszS2VMQchgLEWxPMOiPgM0RpQpIsyRoTwxOAFkIbB9f2yRqqmNF9RFOY7bsvj8SUF5yvoPAOaQ_W_rZd7lyiP9qHSt7TmtdBcfOoxVP_C2fyF_Ekw',
    imageAlt: 'SMKN 4 Jakarta 3D Modeling and RAB Studio',
    fallbackType: 'cad-3d',
    deliverables: [
      'Paket gambar kerja rumah tinggal: arsitektur, struktur, MEP & sanitasi',
      'Perhitungan volume pekerjaan dan Rencana Anggaran Biaya (RAB)',
      'Pemodelan 3D presentasi proyek perumahan',
    ],
    tools: ['AutoCAD 2D', 'SketchUp', 'RAB & Analisa Harga'],
    location: 'Jakarta Utara',
  },
];

export const EDUCATION_TIMELINE: EducationItem[] = [
  {
    period: '2022 — Present',
    institution: 'Institut Teknologi PLN (ITPLN)',
    program: 'S1 Teknik Informatika • Fakultas Telematika Energi',
    description:
      'Fokus pada rekayasa perangkat lunak, algoritma pemrograman, pemecahan masalah komputasional, serta integrasi teknologi digital untuk optimasi sistem.',
    active: true,
  },
  {
    period: '2019 — 2022',
    institution: 'SMKN 4 Jakarta',
    program: 'Teknik Konstruksi & Perumahan (TKP) / DPIB',
    description:
      'Keahlian mendalam dalam penyusunan Gambar Kerja (AutoCAD 2D), pemodelan 3D SketchUp, Rencana Anggaran Biaya (RAB), ilmu ukur tanah, dan pengawasan proyek.',
  },
  {
    period: '2016 — 2019',
    institution: 'SMP Patra Mandiri 2 Palembang',
    program: 'Pendidikan Menengah Pertama',
    description:
      'Membangun dasar kepemimpinan, disiplin belajar, dan keikutsertaan aktif dalam kegiatan sekolah.',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'drafting',
    label: 'Drafting & Civil Engineering',
    items: [
      {
        name: 'AutoCAD 2D (Shop Drawings)',
        detail: 'Penyusunan denah, potongan, detail struktur, dan revisi As-Built Drawing sesuai standar proyek.',
      },
      {
        name: 'SketchUp 3D Modeling',
        detail: 'Visualisasi 3D massa bangunan dan detail interior/eksterior untuk presentasi desain.',
      },
      {
        name: 'Struktur Bangunan 2 Lantai',
        detail: 'Pemahaman perencanaan balok, kolom, pondasi, dan detail penulangan konstruksi bertingkat.',
      },
      {
        name: 'RAB & Estimasi Biaya',
        detail: 'Perhitungan volume pekerjaan (BOQ) dan analisa harga satuan material konstruksi.',
      },
      {
        name: 'As-Built & Detail Arsitektur',
        detail: 'Pemutakhiran dokumen gambar aktual lapangan pasca-konstruksi.',
      },
    ],
  },
  {
    id: 'site',
    label: 'Site Inspection & Management',
    items: [
      {
        name: 'Pengawasan Lapangan (Site QC)',
        detail: 'Inspeksi kesesuaian pekerjaan struktur dan finishing terhadap gambar kerja & toleransi mutu.',
      },
      {
        name: 'Pencatatan Logistik Material',
        detail: 'Monitoring keluar-masuk material proyek untuk menjaga ketepatan alokasi dan jadwal.',
      },
      {
        name: 'Laporan Harian / Mingguan Proyek',
        detail: 'Dokumentasi progres fisik, kendala lapangan, dan catatan revisi teknis secara terstruktur.',
      },
      {
        name: 'Inventarisasi Gudang',
        detail: 'Rekonsiliasi data stok material fisik dengan catatan administrasi logistik.',
      },
    ],
  },
  {
    id: 'informatics',
    label: 'Informatics & Computing',
    items: [
      {
        name: 'Informatics Fundamentals',
        detail: 'Pemahaman rekayasa perangkat lunak, pemodelan data, dan arsitektur sistem digital di ITPLN.',
        featured: true,
      },
      {
        name: 'Algoritma & Struktur Data',
        detail: 'Pemecahan masalah logis dan sistematis dalam perancangan alur pemrograman.',
      },
      {
        name: 'Microsoft Excel (Formula & Data Entry)',
        detail: 'Pengolahan tabel RAB, rekapitulasi volume material, dan pelaporan inventaris otomatis.',
      },
      {
        name: 'Technical Documentation',
        detail: 'Penulisan dokumentasi teknis, SOP inspeksi, dan laporan kerja yang rapi dan mudah ditelusuri.',
      },
    ],
  },
  {
    id: 'synergy',
    label: 'Workplace Synergy',
    items: [
      {
        name: 'Komunikasi Tim',
        detail: 'Koordinasi efektif lintas tim antara drafter, pelaksana lapangan, vendor, dan engineer.',
      },
      {
        name: 'Disiplin & Ketepatan Waktu',
        detail: 'Komitmen tinggi terhadap tenggat gambar kerja dan pelaporan progres harian.',
      },
      {
        name: 'Kemampuan Beradaptasi Cepat',
        detail: 'Cepat beradaptasi di lingkungan lintas disiplin antara teknik konstruksi dan informatika.',
      },
    ],
  },
];
