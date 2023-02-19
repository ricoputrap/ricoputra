---
title: Model View Controller (MVC)
date: Sun, 16 Feb 2023
descriptions: Penjelasan mengenai MVC
cover: /images/self-pic.png
---

Ever heard the term above? You may have heard about the Model-View-Controller (MVC) because it is a topic that usually introduced when we are just started learning software architecture pattern. In this article, we’ll dive into the basics of MVC and how it can help you write better software. Whether you are a beginner or an experienced developer, you’ll come away with a deeper understanding of this important architecture pattern. So, let’s get started!

### Definition

MVC adalah sebuah software architecture pattern yang secara garis besar membagi sebuah software ke dalam 3 buah komponen, yaitu Model, View, dan Controller. Berikut adalah tugas dari setiap komponen tersebut:

1. **Model**
    
    Bertugas sebagai representasi bentuk/model data di dalam database. Komponen ini juga bertanggung jawab dalam berkomunikasi dengan database. Seluruh operasi database seperti Create, Read, Update, dan Delete ditangani oleh komponen ini.

2. **View**
    
    Menampilkan data ke layar sehingga dapat dilihat oleh pengguna. Seluruh interaksi dengan pengguna diterima dan dikelola oleh komponen ini. Salah satu contoh dari wujud nyata dari komponen ini dalam sebuah web company profile adalah halaman Contact Us yang di dalam nya terdapat sebuah form. User dapat memasukkan nama, email, dan pertanyaan/penawaran proyek pada form tersebut.

3. **Controller**
    
    Sebuah entitas yang bertugas mengelola 

### Separation of Concern

Setiap tugas hanya boleh dilakukan oleh sebuah komponen.

![App Screenshot](/images/self-pic.png)



```bash
  npm run deploy
```