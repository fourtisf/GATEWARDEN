# Gatewarden: project siap Steam (v0.7.0)

Isi folder ini sudah lengkap untuk menjadikan Gatewarden aplikasi desktop dan merilisnya di Steam.

## Cara pakai dengan Claude Code
1. Ekstrak zip ini, lalu buka foldernya di **Claude Code**.
2. Ketik perintah pertama:
   > Baca CLAUDE.md dan docs/LAUNCH_CHECKLIST.md, lalu jalankan npm install dan npm start untuk tes.
3. Setelah Anda punya **AppID Steam**, ketik:
   > Isi AppID = 1234560, Depot Windows = 1234561, nama studio = NAMA, lalu jalankan npm run check:release dan npm run dist:win.
4. Untuk upload ke Steam:
   > Upload build ke Steam pakai scripts/upload-steam (akun build saya: USERNAME).

## Perintah penting
| Perintah | Fungsi |
|---|---|
| `npm install` | Install Electron dan library Steam |
| `npm start` | Jalankan game versi desktop (mode tes) |
| `npm run dist:win` | Build untuk Windows, hasilnya di `dist/win-unpacked/Gatewarden.exe` |
| `npm run check:release` | Cek semua siap sebelum upload |

## Isi folder
- `game/index.html`: game lengkap dalam satu file, berjalan offline dengan font terbundel.
- `main.js`, `preload.js`: pembungkus desktop (Electron) plus koneksi Steam (achievement, overlay, save cloud).
- `steam/`: skrip upload SteamPipe, daftar 21 achievement, dan ikon achievement.
- `store/`: screenshot dan semua ukuran capsule untuk halaman toko (draft), plus teks halaman toko.
- `docs/LAUNCH_CHECKLIST.md`: langkah rilis di Steam dari awal sampai akhir.
- `web/gatewarden-web.html`: versi browser untuk demo cepat.

## Yang harus Anda siapkan sendiri
Akun Steamworks, data pajak, bank, identitas, dan pembayaran US$100 per game. Detailnya ada di `docs/LAUNCH_CHECKLIST.md`.
