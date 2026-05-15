# Hava Durumu Uygulaması

Bu proje, React ve Vite kullanılarak geliştirilmiş basit bir hava durumu uygulamasıdır. Kullanıcı şehir adı girerek OpenWeatherMap API üzerinden anlık hava durumu bilgilerini görüntüleyebilir.

Uygulama; sıcaklık, hava açıklaması, ülke kodu, nem oranı, hissedilen sıcaklık, rüzgar hızı ve basınç gibi temel hava durumu verilerini ekranda gösterir.

## Özellikler

- Şehir adına göre anlık hava durumu sorgulama
- OpenWeatherMap API ile veri çekme
- Sıcaklık bilgisini Celsius olarak gösterme
- Hava durumu simgesini ekranda gösterme
- Nem, hissedilen sıcaklık, rüzgar hızı ve basınç bilgilerini listeleme
- Boş şehir girişinde kullanıcıyı uyarma
- Geçersiz şehir adında hata mesajı gösterme
- Arka plan görseliyle sade ve kullanıcı dostu arayüz

## Kullanılan Teknolojiler

- React
- Vite
- JavaScript
- HTML5
- CSS3
- OpenWeatherMap API
- Fetch API

## Kurulum

Projeyi bilgisayarınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz.

```bash
git clone https://github.com/bessar2004/hava-durumu.git
cd hava-durumu
npm install
npm run dev
```

Uygulama varsayılan olarak şu adreste çalışır:

```text
http://localhost:5173
```

## Kullanım

1. Uygulamayı açın.
2. Arama kutusuna bir şehir adı yazın.
3. `Ara` butonuna tıklayın.
4. Seçilen şehir için güncel hava durumu bilgilerini görüntüleyin.

## Proje Yapısı

```text
hava-durumu/
├── index.html
├── package.json
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── sky-7336915_1280.jpg
└── README.md
```

## API Kullanımı

Uygulama, OpenWeatherMap Current Weather Data servisini kullanır. API isteği `src/App.jsx` dosyasında yapılır ve şehir adı kullanıcıdan alınan input değerine göre oluşturulur.

Örnek istek mantığı:

```javascript
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}&units=metric&lang=tr
```

Güvenlik açısından API anahtarının ileride `.env` dosyasına taşınması daha uygun olacaktır.

## Geliştirme Amacı

Bu proje, React ile temel state yönetimini, kullanıcı inputlarını kontrol etmeyi, API üzerinden veri çekmeyi ve gelen verileri arayüzde göstermeyi öğrenmek amacıyla hazırlanmıştır.

Proje sayesinde frontend tarafında React component yapısı, event handling, async API çağrıları ve CSS ile görsel arayüz geliştirme konularında pratik yapılmıştır.
