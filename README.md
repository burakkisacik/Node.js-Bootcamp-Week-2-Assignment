# week-2-assignment

Bir sonraki derse hazırlıklı gelebilmeniz adına sizlere ARGE ödevi vermeye karar verdik. Bu repo üzerinde klasörlerinizi/dosyalarınızı oluşturup çalışabilirsiniz.

## Yapmanız gereken maddeler;

- Http modülü ile bir web server oluşturalım.
- Client tarafından gönderilen request’leri; talep edilen url’lere yönlendirip (Ana Sayfa, Hakkımızda vs.) ekranda “… sayfasındasınız” gibi bir mesaj verelim.

- Gelen her request’i FS modülünü kullanarak bir dosyada loglayalım.

- Tanımlı olmayan url’ler için gelen her request’i de 404 uyarısı ile yönlendirip mesaj gösterelim.

NOTE: Node modules gibi büyük dosyaları github'a pushlamamanız için bir .gitignore dosyası eklemeyi de unutmayın.

# Blog Post

Addition to this repository I wrote a blog post about Node.js and http module. The blog post is just about how http module works. The request logging logic with fs module in the repository not included in the blog post. [Here](https://burakkisacik.medium.com/node-js-http-3973e4a80ea7) you can see the blog post.

# Description

All requirements that are mentioned in the assignment description are met. So that the application can answer some http requests such as get and post to some specific urls which are given in the [Routes & Parameters](#routes-and-parameters) section below.

# How To Install

```bash
git clone https://github.com/getir-nodejs-bootcamp/getir-nodejs-bootcamp-week-2-assignment-burakkisacik.git

cd into the folder

npm install

npm run start
```

# Routes And Parameters

| Routes   | Query Parameters |               Return |
| -------- | :--------------: | -------------------: |
| /        |        -         |                 page |
| /fibo    |       num        | Nth Fibonacci Number |
| /myFeed  |        -         |                 page |
| /about   |        -         |                 page |
| /contact |        -         |                 page |

# Notes

In the "/fibo" route, because of calculating the fibonacci number takes a long time, Promise structure is used to make the calculation asynchronous.

# Technologies

- Node.js
- Postman
- Git
- Webpack
- ESLint
