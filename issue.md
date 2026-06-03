# 🎯 SPESIFIKASI PERENCANAAN FITUR: PENYEMPURNAAN VISUAL & HALAMAN PORTOFOLIO DINAMIS

Dokumen ini berfungsi sebagai panduan perencanaan dan eksekusi utama (Master Planning) untuk diimplementasikan oleh **Senior Programmer** (untuk arsitektur & logika inti) dan **Junior Programmer / Model AI Murah** (untuk visual & styling).

Fokus utama dari perencanaan ini adalah menyempurnakan aspek **Visual Contrast**, **Scalability Grid**, serta **User Experience** di website **Xubo.id**.

---

## 📌 DAFTAR TUJUAN UTAMA (OBJECTIVES)

1. **Service Explorer Highlight**: Memperbaiki kontras warna tab aktif pada section *Eksplorasi Paket Layanan Detail* dengan menggunakan warna terang sebagai highlight pilihan aktif dan teks berwarna gelap tajam.
2. **Dynamic Bento Box Grid**: Refactor list portofolio di landing page agar menampilkan **seluruh** portofolio klien secara dinamis dari `lib/projects.ts` menggunakan layout Bento Box yang rapi tanpa celah (*no gaps*).
3. **Dedicated Portfolio Page**: Menambahkan tombol "Show All" di landing page yang mengarahkan pengguna ke halaman portofolio terpisah (`/portfolio`) lengkap dengan fitur pencarian dan filter kategori.

---

## 🎨 1. PENYEMPURNAAN HIGHLIGHT WARNA AKTIF (SERVICE EXPLORER)

### 🔍 Kondisi Saat Ini
* Elemen tab navigator di `components/ServiceExplorer.tsx` berada di dalam container putih (`bg-white`).
* Pilihan tab aktif menggunakan background Navy Gelap (`bg-brand-navy`, `#191265`) dan teks Cream Muted (`text-brand-cream`, `#EBEBDF`).
* **Masalah**: Kontras dirasa kurang hidup dan kurang "terang" sebagai penanda tab aktif yang modern di mata pengguna.

### 💡 Rencana Solusi (Warna Terang Berkontras Tinggi)
1. **Background Tab Aktif**: Ubah background penanda aktif (`motion.div` dengan `layoutId="active-explorer-tab"`) dari warna gelap (`bg-brand-navy`) menjadi warna terang yang berkontras tinggi terhadap container dasar.
   * *Opsi Terbaik*: Gunakan warna Cream Terang (`bg-brand-cream` / `#EBEBDF`) atau Secondary Light (`bg-brand-secondary` / `#F3F3ED`) dengan penambahan border tipis Navy (`border border-brand-navy/15`) dan soft shadow.
2. **Teks & Icon Tab Aktif**: Ubah warna teks dan icon saat aktif (`isActive === true`) dari warna cream muted menjadi warna Navy Pekat (`text-brand-navy`, `#191265`) dengan ketebalan ekstra (`font-extrabold`).
3. **Efek Transisi**: Pertahankan animasi spring `framer-motion` agar pergeseran highlight antar tab tetap terasa premium dan responsif.

---

## 🍱 2. BENTO BOX GRID LAYOUT PORTOFOLIO DINAMIS

### 🔍 Kondisi Saat Ini
* Section Portfolio di `app/page.tsx` masih merender data secara manual (hardcoded) dengan batasan 3 proyek dari klien + 1 kartu tech stack statis.
* Proyek dari data `lib/projects.ts` yang berjumlah 7+ proyek tidak ter-render secara otomatis, membatasi skalabilitas ketika ada penambahan portofolio baru.

### 💡 Rencana Solusi (Dynamic Bento Algorithm)
1. **Looping Dinamis**: Ganti struktur hardcoded dengan mapping dinamis `projects.map((project, index) => ...)` dari `lib/projects.ts`.
2. **Pola Matematika Grid (3-Kolom Desktop)**: Gunakan fungsi helper atau perhitungan modulus indeks untuk menentukan span kolom (`col-span`) dan baris (`row-span`) pada desktop (`lg:`):
   * **Pola Pengulangan 3-Card (Seimbang & Tanpa Celah)**:
     * **Index % 3 === 0 (Horizontal Bento)**: `lg:col-span-2 lg:row-span-1` (Lebar 2, Tinggi 1)
     * **Index % 3 === 1 (Vertical Bento)**: `lg:col-span-1 lg:row-span-2` (Lebar 1, Tinggi 2)
     * **Index % 3 === 2 (Horizontal Bento)**: `lg:col-span-2 lg:row-span-1` (Lebar 2, Tinggi 1)
     > [!TIP]
     > Pola 3-item di atas jika disusun dalam grid 3-kolom akan membentuk persegi panjang sempurna setinggi 2 baris tanpa menyisakan lubang/gap kosong sama sekali di desktop!
3. **Penyelarasan Layout Akhir (Grid Balancer)**:
   * Jika jumlah total data portofolio ganjil (`projects.length % 3 !== 0`), tambahkan kartu statis *"Agency Tech Capabilities"* atau *"Mulai Project Anda" CTA Card* di akhir looping sebagai penyeimbang layout agar grid selalu terisi penuh.
4. **Responsivitas**:
   * **Mobile (`sm`)**: Wajib runtuh menjadi 1 kolom (`grid-cols-1`) dengan semua kelas span dinonaktifkan (`col-span-1`, `row-span-1`) untuk mencegah distorsi visual pada layar sempit.
   * **Tablet (`md`)**: Gunakan format 2 kolom (`md:grid-cols-2`) dengan pengaturan span yang seimbang.

---

## 🔘 3. BUTTON "SHOW ALL" & HALAMAN PORTOFOLIO SPESIFIK (`/portfolio`)

### 🔍 Kondisi Saat Ini
* Proyek hanya ditampilkan secara terbatas di satu halaman landing page utama. Tidak ada opsi bagi calon klien untuk mengeksplorasi seluruh karya secara lebih mendalam dengan filter pencarian.

### 💡 Rencana Solusi
1. **Tombol "Lihat Semua Portofolio"**:
   * Tambahkan tombol sekunder (`btn-secondary`) di bagian bawah section Portfolio pada `app/page.tsx`.
   * Berikan tautan navigasi menggunakan Next.js `Link` menuju path `/portfolio`.
2. **Pembuatan Rute Baru `app/portfolio/page.tsx`**:
   * **Header**: Desain hero section minimalis yang memukau dengan tagline professional.
   * **Sistem Filter Kategori**: Navigasi tab interaktif untuk menyaring portofolio berdasarkan jenisnya (*E-Commerce*, *Health*, *Mobile App*, *Tools*, dll.).
   * **Search Bar**: Tambahkan input pencarian dinamis yang menyaring proyek berdasarkan nama proyek atau teknologi yang digunakan (contoh: mencari "React" atau "YOLOv8").
   * **Grid System**: Render portofolio dalam grid 3-kolom standar yang rapi (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`).
   * **Modal Integrasi**: Integrasikan kembali component `ProjectModal` di halaman portofolio ini, sehingga ketika salah satu kartu diklik, modal detail interaktif tetap muncul dengan transisi yang halus.
   * **Navigasi Kembali**: Sediakan tombol "Kembali ke Beranda" yang menonjol dan bersih untuk menjaga navigasi pengguna tetap mudah.

---

## 🧑‍💻 TAHAPAN IMPLEMENTASI BERDASARKAN PERAN (ROLES)

Untuk memastikan efisiensi biaya dan kecepatan pengerjaan, tugas dibagi secara spesifik berdasarkan keahlian teknis programmer:

### 👨‍💻 Kategori A: Senior Programmer / Model AI Canggih
*Fokus pada Arsitektur Sistem, Logika Inti, Skalabilitas, & Optimasi Performa.*

1. **Rancang Rute & Navigasi**:
   * Membuat file halaman baru di `app/portfolio/page.tsx`.
   * Menyiapkan optimasi metadata untuk SEO di halaman portofolio baru.
2. **Logika Dynamic Bento Box**:
   * Membuat fungsi kalkulasi dinamis untuk pembagian layout grid:
     ```typescript
     function getBentoSpan(index: number, total: number) {
       const position = index % 3;
       if (position === 0) return "lg:col-span-2 lg:row-span-1";
       if (position === 1) return "lg:col-span-1 lg:row-span-2";
       return "lg:col-span-2 lg:row-span-1";
     }
     ```
   * Merancang mekanisme pengisi slot kosong (*Grid Balancer*) di akhir list agar layout desktop selalu simetris.
3. **State Management & Filtering**:
   * Membangun logika filter kategori menggunakan state `useState` dan input search berbasis text filtering dengan tingkat performa tinggi (menggunakan `useMemo` untuk meminimalisasi re-render tidak perlu).
4. **Quality & Performance Control**:
   * Memastikan performa gambar tetap optimal dengan atribut `priority` pada area di atas lipatan layar (*above-the-fold*) dan `lazy loading` untuk area di bawahnya (*below-the-fold*).
   * Memastikan tidak terjadi pergeseran layout yang mengganggu (Cumulative Layout Shift) saat data difilter.

---

### 🧑‍💻 Kategori B: Junior Programmer / Model AI Murah
*Fokus pada Penyesuaian Visual, CSS Token, Markup HTML/JSX, & Animasi Dasar.*

1. **Modifikasi `components/ServiceExplorer.tsx`**:
   * Ubah warna token pada block tab menu.
   * Ganti class pada `motion.div` (active background) menjadi:
     ```tsx
     className="absolute inset-0 bg-brand-cream border border-brand-navy/15 rounded-lg shadow-sm -z-10"
     ```
   * Sesuaikan conditional class pada teks & icon:
     ```tsx
     className={isActive ? "text-brand-navy font-extrabold" : "text-brand-navy/60 hover:text-brand-navy"}
     ```
2. **Penyusunan Card Portfolio**:
   * Mengimplementasikan markup JSX untuk card portofolio di `app/page.tsx` hasil mapping dinamis.
   * Mengatur susunan penempatan gambar, judul, deskripsi singkat, tag teknologi, serta metadata klien dan tahun di dalam card agar seragam.
3. **Penerapan Badge & Tagging**:
   * Merapikan styling pill badge teknologi agar serasi dengan desain utama Xubo.id:
     ```tsx
     className="px-2.5 py-0.5 bg-brand-navy/5 text-brand-navy text-[10px] font-bold rounded-lg border border-brand-navy/8"
     ```
4. **Integrasi Interaksi Dasar**:
   * Memastikan event click pada card memicu function callback `openProjectModal(project)` dengan benar.
   * Menerapkan varian animasi sederhana Framer Motion untuk hover lift-up pada card.

---

## 🔬 VERIFIKASI & PENGUJIAN (TESTING PLAN)

### 1. Uji Responsivitas & Grid Alignment
- **Desktop (>= 1024px)**: Pastikan Bento Grid tersusun rapi dalam susunan 3 kolom tanpa ada gap kosong di tengah-tengah grid.
- **Tablet (768px - 1023px)**: Pastikan grid runtuh secara rapi menjadi 2 kolom.
- **Mobile (< 768px)**: Pastikan seluruh card tersusun vertikal penuh 1 kolom dan teks tidak terpotong.

### 2. Uji Fungsionalitas & Filter halaman `/portfolio`
- Ketik nama teknologi (misal: "Svelte") di search bar, pastikan hanya portofolio terkait yang muncul.
- Klik tab kategori filter (misal: "E-Commerce"), pastikan daftar portofolio tersaring dengan tepat.
- Klik tombol "Kembali ke Beranda" dan pastikan navigasi berjalan mulus tanpa reload halaman penuh (Single Page Application transition).

### 3. Uji Kontras Aksesibilitas (WCAG)
- Pastikan teks gelap pada pilihan tab aktif terang di `ServiceExplorer` memiliki rasio kontras minimal **4.5:1** sehingga mudah dibaca oleh semua kalangan pengguna.

---

## 🚀 STANDAR KODE & BEST PRACTICES
- **Clean Code**: Hindari penulisan inline style yang rumit. Gunakan reusable CSS utility classes dari Tailwind CSS v4.
- **Scalability**: Memisahkan file data portofolio di `lib/projects.ts` sehingga penambahan portofolio baru di masa depan hanya memerlukan modifikasi satu berkas tersebut.
- **Maintainability**: Buat component-component kecil yang modular jika halaman `/portfolio` mulai memiliki banyak sub-elemen.
- **Performance Optimization**: Gunakan component `<Image />` dari Next.js untuk kompresi gambar otomatis ke format WebP dan ukuran yang responsif.
