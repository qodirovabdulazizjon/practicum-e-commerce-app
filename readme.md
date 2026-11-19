# E-commerce

Express.js, EJS va MongoDB (Mongoose) asosida yaratilgan onlayn do‘kon.

## Imkoniyatlar

- Ro‘yxatdan o‘tish va tizimga kirish
- Mahsulotlar ro‘yxati va mahsulot tafsilotlari
- Savatchaga mahsulot qo‘shish, miqdorini o‘zgartirish va o‘chirish
- Savatchadan buyurtma yaratish va buyurtmalar tarixini ko‘rish
- JWT cookie orqali himoyalangan sahifalar

## Talablar

- Node.js va npm
- MongoDB (lokal yoki MongoDB Atlas)

## O‘rnatish va ishga tushirish

1. Loyihani klonlab, loyiha papkasiga o‘ting.
2. Bog‘liqliklarni o‘rnating:

   ```bash
   npm install
   ```

3. `.env.example` faylidan `.env` nusxa yarating:

   ```bash
   cp .env.example .env
   ```

4. `.env` faylida MongoDB ulanish manzili va JWT maxfiy kalitini kiriting:

   ```env
   DB_URL=mongodb://127.0.0.1:27017/e-commerce
   JWT_SECRET=bu-yerga-maxfiy-kalit
   ```

5. Development server’ni ishga tushiring:

   ```bash
   npm run dev
   ```

   Oddiy ishga tushirish uchun:

   ```bash
   npm start
   ```

Ilova odatda `http://localhost:3000` manzilida ishlaydi. Portni `PORT` environment o‘zgaruvchisi bilan belgilash mumkin.

## Mahsulotlar

Mahsulotlar MongoDB’dagi `products` kolleksiyasidan olinadi. Har bir mahsulot quyidagi maydonlarga ega:

- `name` — mahsulot nomi
- `price` — narxi (manfiy bo‘lmagan son)
- `description` — tavsifi
- `imageUrl` — rasm manzili (ixtiyoriy; berilmasa standart rasm ishlatiladi)

Hozircha mahsulot qo‘shish uchun `products` kolleksiyasiga MongoDB orqali hujjat kiriting. Masalan:

```json
{
  "name": "Namuna mahsulot",
  "price": 120000,
  "description": "Mahsulot tavsifi",
  "imageUrl": "https://example.com/product.jpg"
}
```

## Asosiy manzillar

| Manzil | Vazifasi |
| --- | --- |
| `/auth/register` | Ro‘yxatdan o‘tish |
| `/auth/login` | Tizimga kirish |
| `/products` | Mahsulotlarni ko‘rish |
| `/products/:id` | Mahsulot tafsilotlari |
| `/cart` | Savatchani ko‘rish va boshqarish |
| `/order` | Buyurtmalar tarixi |

Mahsulotlar, savatcha va buyurtmalar sahifalaridan foydalanish uchun tizimga kirish talab qilinadi.
