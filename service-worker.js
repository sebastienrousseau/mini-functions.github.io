/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "263081ee0cb58cb12cc647a7e80acc2b"
  },
  {
    "url": "about/index.html",
    "revision": "debafad1bf572bcfbd51e4b1a01d64ee"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "3ced2f47903d6a8b0434377c178f0603"
  },
  {
    "url": "assets/css/0.styles.33873ca9.css",
    "revision": "f526f7b8379af8b8f0eb6a8931973e2a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7cb3ba23.js",
    "revision": "e6ca1320e88926723118ca319664efab"
  },
  {
    "url": "assets/js/11.03687019.js",
    "revision": "22ac53aea22c2ee1dd69a5f2d42d0177"
  },
  {
    "url": "assets/js/12.26a51b15.js",
    "revision": "a70fe03911d5221e97f9829a870fbb94"
  },
  {
    "url": "assets/js/13.f96e88e0.js",
    "revision": "b1f2159273e2f415ece50e6e4b2b71da"
  },
  {
    "url": "assets/js/14.79cc9f75.js",
    "revision": "11c0ed0c975380877d9f0d88cb9535af"
  },
  {
    "url": "assets/js/15.1e292c2b.js",
    "revision": "918755c1df6c09aebc3b40f3b2cc01bb"
  },
  {
    "url": "assets/js/16.132b80a9.js",
    "revision": "629da04053656d87a51da3ad26473677"
  },
  {
    "url": "assets/js/17.695421d9.js",
    "revision": "490aa235a1ce3b17d0d627090f0245bf"
  },
  {
    "url": "assets/js/18.b27d2051.js",
    "revision": "3a590d316b2aa16773dc6343efcee9ac"
  },
  {
    "url": "assets/js/19.6fd445d3.js",
    "revision": "a8aa8646a3ae1fbd7158a8d362ba23df"
  },
  {
    "url": "assets/js/2.cb38a57c.js",
    "revision": "af8cc32a134c0c25cc723db6e4238dc5"
  },
  {
    "url": "assets/js/20.ba4060a9.js",
    "revision": "91f844a5db70fcd10048000d0d315d1c"
  },
  {
    "url": "assets/js/21.1a07b0db.js",
    "revision": "6b8b7b98e742085920f319955251a00c"
  },
  {
    "url": "assets/js/22.b60dc53e.js",
    "revision": "ee27c15c537ec98b2dac89389ff46a9e"
  },
  {
    "url": "assets/js/23.4e0c5acf.js",
    "revision": "ca93dfede79b2684298f6836a8263cb8"
  },
  {
    "url": "assets/js/24.448d8d2f.js",
    "revision": "3ada4b8cc63fa98604b4b97b5f7c0bac"
  },
  {
    "url": "assets/js/25.ee6c0372.js",
    "revision": "b3385e7101c6c3a666ce11516dbf52ff"
  },
  {
    "url": "assets/js/26.7541e187.js",
    "revision": "79cb2f4b9ec026e7b02eb26d6b84eab5"
  },
  {
    "url": "assets/js/27.6cbb0b5b.js",
    "revision": "1b65ce08dba0cc14486baa9b319dfba5"
  },
  {
    "url": "assets/js/28.664e8aeb.js",
    "revision": "8af94ba84b00fe41b712f1e8dedf0364"
  },
  {
    "url": "assets/js/3.73a19b1c.js",
    "revision": "fee572cd71f6b0fb72c550d3312e21f7"
  },
  {
    "url": "assets/js/4.808a19a4.js",
    "revision": "35ae37c99a312640c97685aa8aa4cad4"
  },
  {
    "url": "assets/js/5.9f6d36e7.js",
    "revision": "03741a89ab7097bfc5751c7f5acd1562"
  },
  {
    "url": "assets/js/6.2a1971c1.js",
    "revision": "1e2965a79ba34f005391de90ffe0b67d"
  },
  {
    "url": "assets/js/7.c7eb0722.js",
    "revision": "8d457dc8db9c5b6d6b5ee7eb6c9b0647"
  },
  {
    "url": "assets/js/8.0d1b33d0.js",
    "revision": "90bad4b57316dc7c93da24207e92e96a"
  },
  {
    "url": "assets/js/9.591b7c20.js",
    "revision": "af219a90758ace400f465c7cf1b5b48c"
  },
  {
    "url": "assets/js/app.1af39a97.js",
    "revision": "95959b13da1200a5d22f24e371ec7024"
  },
  {
    "url": "de/about/index.html",
    "revision": "82c62e60f1d25e9701d155a73b83777a"
  },
  {
    "url": "de/functions/index.html",
    "revision": "6d83f3b5485fba440273fdac414fadce"
  },
  {
    "url": "de/index.html",
    "revision": "0b7a5384439dfc5f2aa262b6c335812b"
  },
  {
    "url": "de/qrcode/index.html",
    "revision": "5e47e08de3a336b805f6875c7ad2a5c9"
  },
  {
    "url": "de/uuid/index.html",
    "revision": "3e75989998abbc5d1427a32100b52b32"
  },
  {
    "url": "es/about/index.html",
    "revision": "5b58648b984b21a29f42d05691bb4e37"
  },
  {
    "url": "es/functions/index.html",
    "revision": "abc2226e351b878868c90d0a30fc9804"
  },
  {
    "url": "es/index.html",
    "revision": "8ffa4feaec5308f81eaf6ba6ab9cba31"
  },
  {
    "url": "es/qrcode/index.html",
    "revision": "d46fa77c8ac4a32238238dff5d654280"
  },
  {
    "url": "es/uuid/index.html",
    "revision": "6441ca5e7b8d41760eb2af725cfe9169"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "3ee4bf036cf92da18f66854d2bc5c7a1"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "3b13052870a2a06eec7d1edc4bfb6ff2"
  },
  {
    "url": "fr/about/index.html",
    "revision": "7e9bfbec3969c14a4be41599c4b09bf9"
  },
  {
    "url": "fr/functions/index.html",
    "revision": "62bb474ecdab51d54b459d50333c4737"
  },
  {
    "url": "fr/index.html",
    "revision": "42d4400c6ebf0131d83be29c89802fe9"
  },
  {
    "url": "fr/qrcode/index.html",
    "revision": "b4c37f29e6f1562fff40b1b7ea1f1817"
  },
  {
    "url": "fr/uuid/index.html",
    "revision": "568976829e16cc6138bcfb6a8a7dd36f"
  },
  {
    "url": "functions/index.html",
    "revision": "5b9e5cf9a1f087b553ee7656a005a400"
  },
  {
    "url": "icons/mini-functions-150x150.png",
    "revision": "b06ad90c3e3203944203eee6a43e2ef4"
  },
  {
    "url": "icons/mini-functions-180x180.png",
    "revision": "941a2426eb130765c5e446643fbcbc6e"
  },
  {
    "url": "icons/mini-functions-192x192.png",
    "revision": "d09884106dc7c793e5c9adf51f6b0bae"
  },
  {
    "url": "icons/mini-functions-310x150.png",
    "revision": "c1e2e016ba0efcd6d39e4afe7fa89c52"
  },
  {
    "url": "icons/mini-functions-310x310.png",
    "revision": "4d33084dd3b886250c5d7f4ccfb395d8"
  },
  {
    "url": "icons/mini-functions-384x384.png",
    "revision": "678076e48fbb30e01c6f737588f914c0"
  },
  {
    "url": "icons/mini-functions-512x512.png",
    "revision": "0de796b4cb199f02f2ace07350ae3b19"
  },
  {
    "url": "icons/mini-functions-70x70.png",
    "revision": "74c4d8973986143e29ab26157f7ad9d2"
  },
  {
    "url": "icons/mini-functions.svg",
    "revision": "2b0a2d8266ab820c61a96be41c583c64"
  },
  {
    "url": "index.html",
    "revision": "d3ffad887be36bb5508ee07c62d87f51"
  },
  {
    "url": "logo.svg",
    "revision": "db274cdf2405048192adcdd6da51533a"
  },
  {
    "url": "qrcode/index.html",
    "revision": "f4cf4359def01258c0d47c449203267e"
  },
  {
    "url": "uuid/index.html",
    "revision": "06e2a5ab27b5c96d53a650cb622bf697"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
