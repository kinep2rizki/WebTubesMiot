# 🚀 Web IoT Locker Dashboard

Selamat datang di **Web IoT Locker Dashboard**!  
Aplikasi web modern berbasis React untuk mengelola dan memonitor status servo locker secara realtime menggunakan Firebase.

---

## ✨ Fitur Unggulan

- 🔐 **Login Aman** — Autentikasi pengguna dengan Firebase Authentication (Email & Password)
- 📊 **Dashboard Realtime** — Pantau status servo locker (ON/OFF) secara langsung
- 🔄 **Kontrol Servo** — Ubah status servo hanya dengan satu klik
- 📝 **Riwayat Aktivitas** — Setiap perubahan status tercatat otomatis di database
- 🚪 **Logout** — Keluar dengan aman dari aplikasi

---

## 🗂️ Struktur Proyek

```
src/
  components/
    authservice.js
    firebaseService.js
    protectedroute.js
  media/
  pages/
    dashboard.js
    loginpage.js
  styling/
    dashboard.css
    loginpage.css
  App.js
  App.css
  firebase.js
  index.js
```

---

## ⚡️ Cara Instalasi

1. **Clone repository ini**
   ```bash
   git clone https://github.com/username/web-iot-locker-dashboard.git
   cd web-iot-locker-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Buat file `.env` di root project**  
   Masukkan konfigurasi Firebase Anda:
   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

4. **Jalankan aplikasi**
   ```bash
   npm start
   ```

---

## 🔒 Keamanan

- **Jangan pernah commit file `.env` ke repository publik!**
- Pastikan aturan keamanan Firebase Realtime Database hanya mengizinkan akses untuk user terautentikasi.

---

## 🛠️ Teknologi yang Digunakan

- [React](https://reactjs.org/)
- [Firebase Authentication](https://firebase.google.com/products/auth)
- [Firebase Realtime Database](https://firebase.google.com/products/realtime-database)
- CSS

---

## 📣 Kontribusi

Pull request dan saran sangat terbuka!  
Silakan fork repo ini dan buat perubahan yang bermanfaat.

---

## 📬 Kontak

Untuk pertanyaan atau kolaborasi, hubungi:  
**Rizki Nugroho Firdaus** — [rizkinf2004@gmail.com](mailto:rizkinf2004@gmail.com)

---

> © 2025 Web IoT Locker Dashboard — Made with ❤️ for Smart Locker
