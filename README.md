# 🚀 Coding Problems - Interactive Learning Platform

Aplikasi web interaktif untuk belajar dan berlatih algoritma coding dengan sistem progression yang memastikan user menyelesaikan soal secara berurutan.

## 🌟 Live Demo

**Akses aplikasi:** [https://asruldev.github.io/coding-problems/](https://asruldev.github.io/coding-problems/)

## ✨ Fitur Utama

### 📚 **Sistem Soal Berjenjang**
- **6 Soal** dari berbagai tingkat kesulitan (Easy, Medium, Hard)
- **Progression System** - User harus menyelesaikan soal sebelumnya untuk membuka soal berikutnya
- **Progress Tracking** - Progress tersimpan otomatis di localStorage

### 💻 **Code Editor Terintegrasi**
- **Syntax Highlighting** untuk JavaScript
- **Real-time Code Execution**
- **Test Runner** dengan feedback detail pass/fail
- **Error Handling** yang informatif

### 🎯 **Kategori Soal**
- **Array Manipulation** - Two Sum, Maximum Subarray, Longest Consecutive Sequence
- **String Processing** - Valid Palindrome, Group Anagrams  
- **Number Manipulation** - Reverse Integer

### 📱 **Responsive Design**
- **Desktop & Mobile** friendly
- **Modern UI/UX** dengan animasi smooth
- **Dark/Light Theme** support

## 🛠️ Teknologi

- **Frontend:** React 19.1.0
- **Styling:** CSS3 dengan Flexbox/Grid
- **Code Execution:** JavaScript Function Constructor
- **Storage:** localStorage untuk progress
- **Deployment:** GitHub Pages

## 🚀 Cara Menjalankan

### Prerequisites
- Node.js (v14 atau lebih baru)
- npm atau yarn

### Installation
```bash
# Clone repository
git clone https://github.com/asruldev/coding-problems.git
cd coding-problems

# Install dependencies
npm install

# Jalankan development server
npm start
```

Aplikasi akan terbuka di [http://localhost:3000](http://localhost:3000)

### Build & Deploy
```bash
# Build untuk production
npm run build

# Deploy ke GitHub Pages
npm run deploy
```

## 📖 Cara Menggunakan

1. **Pilih Soal** - Mulai dari soal pertama yang tersedia
2. **Baca Deskripsi** - Pahami requirements dan constraints
3. **Tulis Solusi** - Gunakan code editor untuk menulis JavaScript
4. **Run Tests** - Klik tombol "Run Tests" untuk mengecek jawaban
5. **Lihat Feedback** - Analisis hasil test dan perbaiki jika perlu
6. **Progress** - Setelah semua test pass, soal berikutnya akan terbuka

## 🎯 Daftar Soal

### Easy Level
1. **Two Sum** - Temukan dua indeks yang jumlahnya sama dengan target
2. **Maximum Subarray** - Cari subarray dengan jumlah terbesar
3. **Valid Palindrome** - Cek apakah string adalah palindrome
4. **Reverse Integer** - Balik digit integer tanpa string conversion

### Medium Level
5. **Group Anagrams** - Kelompokkan string yang merupakan anagram

### Hard Level
6. **Longest Consecutive Sequence** - Cari urutan consecutive terpanjang

## 🔧 Struktur Project

```
coding-problems/
├── public/
├── src/
│   ├── components/
│   │   ├── Sidebar.js          # Navigation sidebar
│   │   ├── Sidebar.css
│   │   ├── ProblemView.js      # Main problem interface
│   │   └── ProblemView.css
│   ├── data/
│   │   └── problems.js         # Problem definitions & test cases
│   ├── App.js                  # Main app component
│   └── index.js
├── easy/                       # Problem files (external)
├── medium/
├── hard/
└── package.json
```

## 🧪 Test System

Setiap soal memiliki:
- **Multiple Test Cases** dengan berbagai skenario
- **Input Validation** untuk memastikan output yang benar
- **Detailed Feedback** dengan pesan error yang informatif
- **Edge Case Testing** untuk robustness

## 🎨 UI Components

### Sidebar
- **Problem List** dengan status (locked/available/completed)
- **Progress Indicator** visual
- **Difficulty Badges** (Easy/Medium/Hard)

### Problem View
- **Problem Description** dengan HTML formatting
- **Code Editor** dengan syntax highlighting
- **Test Results** dengan pass/fail indicators
- **Action Buttons** (Run Tests, Reset)

## 🔒 Progression System

- **Sequential Unlocking** - Soal terbuka satu per satu
- **Progress Persistence** - Tersimpan di browser localStorage
- **Visual Indicators** - Status soal yang jelas
- **No Skipping** - Memastikan pembelajaran bertahap

## 🚀 Deployment

Aplikasi di-deploy menggunakan:
- **GitHub Pages** untuk hosting
- **gh-pages** package untuk automation
- **Automatic builds** pada setiap push

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Asrul Harahap - [@asruldev](https://github.com/asruldev)

Project Link: [https://github.com/asruldev/coding-problems](https://github.com/asruldev/coding-problems)

---

⭐ **Star repository ini jika bermanfaat!**
