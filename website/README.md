# Gatewarden: website (demo gratis)

Folder `site/` adalah website-nya: game versi browser dalam mode **demo gratis** (10 wave, 3 hero, 8 map), lengkap dengan tombol Steam. Tidak perlu build.

## Cara pakai dengan Claude Code (paling mudah)
Lampirkan zip ini ke Claude Code, lalu tempel:

> Baca CLAUDE.md di zip ini dan kerjakan semua langkahnya: masukkan website Gatewarden ke repo GitHub ini, commit, push ke main, lalu aktifkan GitHub Pages. Kalau ada yang harus saya klik sendiri, kasih tahu langkahnya. Terakhir, kirim link website-nya.

Setelah kode masuk GitHub, setiap push ke `main` otomatis:
1. mengecek website (**Website check**);
2. men-deploy ke GitHub Pages (gratis, link `https://<user>.github.io/<repo>/`);
3. men-deploy ke VPS Hostinger, kalau secrets VPS sudah diisi.

## Yang mungkin harus Anda klik sendiri (sekali saja)
- **Settings → Pages → Source → GitHub Actions**, kalau Claude Code tidak punya izin mengaktifkannya.
- **Merge pull request**, kalau Claude Code tidak bisa push langsung ke main.
- Kalau repo Anda **private** dan akun GitHub gratis, GitHub Pages tidak tersedia. Pakai Vercel saja: login vercel.com, Import repo, Deploy.

## Pengaturan (`site/config.js`)
- `demo: true`: demo gratis (disarankan selama game dijual di Steam). Ganti `false` untuk game penuh.
- `steamUrl: ""`: isi dengan link halaman Steam setelah halaman Coming Soon tayang. Tombol di game otomatis berubah menjadi "Wishlist on Steam".
