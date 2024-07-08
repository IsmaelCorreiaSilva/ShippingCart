import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.scss'

import { Model, createServer } from 'miragejs'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CartPage } from './Pages/CartPage/index.tsx'
import { ListProductsPage } from './Pages/ListProductsPage/index.tsx'

createServer({

  models: {
    product: Model,
  },

  seeds(server) {
    server.db.loadData({
      products: [
        {
          "id": 1,
          "title": "Mesa De Som 8 Canais Mixer Áudio Usb Smart Profissional A8 Conjunto Interface Externa - Vedo",
          "amount": 399.00,
          "url_image": "https://a-static.mlcdn.com.br/800x560/mesa-de-som-8-canais-mixer-audio-usb-smart-profissional-a8-conjunto-interface-externa-vedo/passaroazul/a8/f8c19091b766f207b44919cdee0b49e5.jpeg"
        },
        {
          "id": 2,
          "title": "Caixa de Som Aiwa AWS-BBS-02-A Bluetooth Portátil - 50W",
          "amount": 549,
          "url_image": "https://a-static.mlcdn.com.br/800x560/caixa-de-som-aiwa-aws-bbs-02-a-bluetooth-portatil-50w/magazineluiza/237704300/86f604af5aa506d68b5317ab3df05a5c.jpg"
        },
        {
          "id": 3,
          "title": "Guarda-roupa Casal 8 Portas 4 Gavetas Araplac",
          "amount": 999,
          "url_image": "https://a-static.mlcdn.com.br/800x560/guarda-roupa-casal-8-portas-4-gavetas-araplac-1684/magazineluiza/222262500/37a9dcfd7756e5e9153b5d1d2c3c200c.jpg"
        },
        {
          "id": 4,
          "title": "Notebook Samsung Galaxy Book 2 Intel Core i5 8GB - SSD 256GB 15,6” Full HD Windows 11 NP550XED-KF2BR",
          "amount": 2929,
          "url_image": "https://a-static.mlcdn.com.br/800x560/notebook-samsung-galaxy-book-2-intel-core-i5-8gb-ssd-256gb-156-full-hd-windows-11-np550xed-kf2br/magazineluiza/238037000/66b6623b5f79de5c8847bf4fa748e8c1.jpg"
        },
        {
          "id": 5,
          "title": "Smartphone Samsung Galaxy S24 Ultra 6,8 Galaxy AI 256GB Titânio Preto 5G 12GB RAM",
          "amount": 8999,
          "url_image": "https://a-static.mlcdn.com.br/800x560/smartphone-samsung-galaxy-s24-ultra-68-galaxy-ai-256gb-titanio-preto-5g-12gb-ram-cam-quadrupla-200mp-selfie-12mp-bateria-5000mah-dual-chip/magazineluiza/238093700/dcf6e62d26e3694b24b48d1ea9cba25d.jpg"
        },
        {
          "id": 6,
          "title": "Smart TV 43” UHD 4K LED Samsung 43CU7700 - Wi-Fi Bluetooth Alexa 3 HDMI",
          "amount": 2099,
          "url_image": "https://a-static.mlcdn.com.br/800x560/smart-tv-43-uhd-4k-led-samsung-43cu7700-wi-fi-bluetooth-alexa-3-hdmi/magazineluiza/237016000/cfa76c088c18e26ce2f282766ea2fa7c.jpg"
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get("/products", () =>{
      return this.schema.all('product')
    })

  },

});

const router = createBrowserRouter([
  {
    path: '/',
    element: <ListProductsPage />
  },
  {
    path: '/carrinho',
    element: <CartPage />
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
