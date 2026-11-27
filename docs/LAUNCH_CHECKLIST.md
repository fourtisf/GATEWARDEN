# Checklist Launch Gatewarden di Steam

Urutan dari nol sampai game bisa dibeli di Steam. Langkah bertanda 👤 harus Anda kerjakan sendiri (akun, uang, identitas). Langkah bertanda 🤖 bisa dikerjakan Claude Code atau Michael.

## Aturan waktu dari Valve (wajib)
- Biaya **US$100 per game** (Steam Direct Fee). Biaya ini dikembalikan setelah game menghasilkan US$1.000.
- Setelah membayar, ada masa tunggu **30 hari** sebelum game boleh rilis.
- Halaman **"Coming Soon"** harus tayang publik **minimal 2 minggu** sebelum rilis.
- Review halaman toko dan review build masing-masing makan waktu **sekitar 3–5 hari kerja**. Siapkan cadangan 1 minggu.
- Verifikasi pajak, bank, dan identitas bisa makan waktu **15–30 hari**.

➡️ Realistisnya, dari daftar sampai rilis butuh **minimal 5–6 minggu**. Untuk penjualan yang bagus, sebaiknya halaman Coming Soon tayang **1–3 bulan** supaya wishlist terkumpul.

---

## Tahap 1 — Akun Steamworks 👤
1. Buka **partner.steamgames.com**, daftar sebagai developer dengan nama studio Anda.
2. Isi data **pajak** (formulir W-8BEN untuk non-AS), **rekening bank**, dan **verifikasi identitas** (KTP/paspor).
3. Bayar **Steam Direct Fee US$100**. Anda akan menerima **AppID**, yaitu nomor game Anda.
4. Di Steamworks, buka *SteamPipe → Depots* dan catat **Depot ID Windows**. Nomornya biasanya AppID + 1.

## Tahap 2 — Pasang ID asli ke project 🤖
Berikan AppID dan Depot ID ke Claude Code, lalu minta:
> "Baca CLAUDE.md. Isi AppID = xxxxx dan Depot Windows = xxxxx, nama studio = xxxxx, lalu jalankan npm run check:release dan build Windows."

## Tahap 3 — Halaman toko (Store Page) 👤 (+🤖 bantu teks)
Semua bahan sudah ada di folder `store/`:
- **Teks**: `store/STORE_PAGE.md` berisi deskripsi pendek, deskripsi lengkap, tag, dan system requirements.
- **Gambar**: `store/capsules/` (semua ukuran capsule wajib) dan `store/screenshots/` (8 screenshot 1920×1080).
- **Trailer**: sangat disarankan, 30–60 detik gameplay. Belum ada; bisa direkam dengan OBS saat bermain.
- **AI Disclosure**: Steam mewajibkan pengungkapan konten AI di *Content Survey*. Draft teksnya ada di `STORE_PAGE.md`. Isi dengan jujur, karena game ini dibuat dengan bantuan AI.
- **Content Survey / rating**: isi kuesioner kekerasan. Game ini berisi kekerasan fantasi kartun, tanpa darah atau gore.
- Kirim halaman toko untuk direview, lalu **publish sebagai Coming Soon**. Mulai saat itu orang sudah bisa wishlist.

⚠️ Capsule di folder `store/capsules/` masih **draft** buatan otomatis dari art game. Gambar capsule adalah faktor terbesar orang mengklik game di Steam, jadi sebaiknya **pesan capsule profesional** sebelum rilis (artist di Fiverr/ArtStation, sekitar US$100–400).

## Tahap 4 — Setting teknis di Steamworks 👤/🤖
- **Stats & Achievements**: buat 21 achievement persis seperti di `steam/achievements.csv`. API name harus `GW_...`. Upload ikonnya dari `steam/achievement_icons/` (versi berwarna dan versi `_locked`), lalu klik **Publish**.
- **Steam Cloud**: aktifkan Auto-Cloud, isi Root `WinAppDataRoaming`, path `Gatewarden/save`, pattern `*.json`. Dengan ini save pemain ikut tersimpan di cloud.
- **Installation → Launch Options**: executable diisi `Gatewarden.exe`.
- Klik **Publish** di halaman perubahan Steamworks setiap kali selesai mengubah setting.

## Tahap 5 — Upload build 🤖
1. Install **SteamCMD**, atau pakai *SteamPipe GUI tool* dari Steamworks SDK.
2. Jalankan `scripts\upload-steam.bat` (Windows) atau `scripts/upload-steam.sh`, dengan `STEAM_USER` diisi akun Steam Anda.
3. Di Steamworks, buka *SteamPipe → Builds* dan set build ke branch **default**.
4. **Tes lewat aplikasi Steam** di PC Anda:
   - Game bisa dibuka.
   - Overlay muncul (Shift+Tab).
   - Achievement keluar.
   - Save tersinkron di 2 PC.
   - Controller jalan.
5. Kirim **build untuk direview** (*Release → Submit for Review*).

## Tahap 6 — Marketing selama Coming Soon 👤
- Umumkan link wishlist di akun **X dan Telegram** Anda, sertakan GIF gameplay. Clip pendek seperti spin attack, Black Hole, atau boss sangat efektif.
- Posting rutin progres di X, Reddit (r/roguelites, r/IndieGaming, r/incremental_games), dan TikTok/Shorts.
- Daftarkan ke **Steam Next Fest** berikutnya (cek jadwal dan deadline di Steamworks). Untuk ini Anda butuh **versi demo**: Claude Code bisa membuat demo yang dibatasi 1 hero, 1 map, dan 10 wave.
- Kirim key gratis ke YouTuber atau streamer genre roguelite / "bullet heaven" (bisa dibuat di Steamworks setelah build siap).
- Target realistis: kumpulkan ribuan wishlist sebelum rilis. Wishlist terbukti menjadi pendorong penjualan minggu pertama.

## Tahap 7 — Rilis 👤
- Tentukan **harga**. Referensi genre ini sekitar US$4.99–9.99, dengan diskon peluncuran 10–20%. Ini referensi pasar, bukan saran keuangan.
- Pilih **Early Access** (disarankan, karena konten masih bisa ditambah) atau rilis penuh.
- Klik **Release**, lalu langsung umumkan ke semua channel.
- Minggu pertama: balas review, perbaiki bug cepat, dan rilis update kecil supaya game naik di algoritma Steam.

## Yang sebaiknya ditambah sebelum/sesudah rilis
- Trailer 30–60 detik.
- Capsule art profesional.
- Musik asli. Musik sekarang dibuat otomatis oleh kode; boleh dipakai, tapi musik buatan komposer akan terasa lebih premium.
- Bahasa: Inggris sudah ada. Indonesia, Mandarin (Simplified), dan Portugis-Brasil memperbesar pasar.
- Demo untuk Next Fest.

> Catatan jujur: semua bagian teknis sudah siap dan sudah dites. Tapi laku atau tidaknya di Steam sangat ditentukan oleh capsule art, trailer, dan jumlah wishlist sebelum rilis. Tidak ada yang bisa menjamin penjualan; yang bisa dilakukan adalah memaksimalkan peluangnya dengan langkah di atas.
