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
    "revision": "2f158a6b885e67a6796504c7d98b51c2"
  },
  {
    "url": "about/index.html",
    "revision": "4f5604d860bc225371c6da5c9e6b0729"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "3ced2f47903d6a8b0434377c178f0603"
  },
  {
    "url": "assets/css/0.styles.d7886148.css",
    "revision": "26455524d01bb614bbff5e0756bfa5f8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.c3726fe5.js",
    "revision": "62fd05864d0bb9733ff2a0e0c986eb2c"
  },
  {
    "url": "assets/js/10.e6c56866.js",
    "revision": "be48ffd14b2c2143a1cf77545029bea0"
  },
  {
    "url": "assets/js/11.d2385cfc.js",
    "revision": "fa79a430f91a9977d67fd52c7d4a2bf9"
  },
  {
    "url": "assets/js/12.be47c9fb.js",
    "revision": "41d00ff5671b817b6471a0598675eace"
  },
  {
    "url": "assets/js/13.6d0b9e08.js",
    "revision": "6dfb151b62cb08e45c851ff6fdc12e2a"
  },
  {
    "url": "assets/js/14.4f2df848.js",
    "revision": "e2acad23031f66458a327d734dba20b8"
  },
  {
    "url": "assets/js/15.5857c3fa.js",
    "revision": "f231191d34f83fb42841ee8291bb4392"
  },
  {
    "url": "assets/js/16.5b5259de.js",
    "revision": "d8111732a1a4a064a3fda4a3bb48a080"
  },
  {
    "url": "assets/js/17.77ec26ed.js",
    "revision": "d79601821add9ff54b2db1d3ad7d4377"
  },
  {
    "url": "assets/js/18.1e727930.js",
    "revision": "77a451b74d0043f28f702b602755de04"
  },
  {
    "url": "assets/js/19.fdc1e27a.js",
    "revision": "45517e064a86a647b9a17ce412f4d92c"
  },
  {
    "url": "assets/js/2.40e946f7.js",
    "revision": "474ebd416bc756124e729ba82a7fb937"
  },
  {
    "url": "assets/js/20.83f79a2b.js",
    "revision": "893fc9266f714c407a063875531fb64f"
  },
  {
    "url": "assets/js/21.3ee34004.js",
    "revision": "9617e5ba37b07f06dd84886a783ba877"
  },
  {
    "url": "assets/js/22.f550ea02.js",
    "revision": "e54d342a6fe5da3ce609c3d9f34719b7"
  },
  {
    "url": "assets/js/23.a646046a.js",
    "revision": "a82aab4c523935be21e87bffd05b005f"
  },
  {
    "url": "assets/js/24.946675ed.js",
    "revision": "23f7ac1d7fff37821b405c54ce20ee61"
  },
  {
    "url": "assets/js/25.6aa012a4.js",
    "revision": "e6a93bf638f0582ca844d11cc0bd198b"
  },
  {
    "url": "assets/js/26.0d1d6df1.js",
    "revision": "a7dc8bdf7307e20fc6129da89be5f684"
  },
  {
    "url": "assets/js/27.a2f658d1.js",
    "revision": "bb832c0766cfeaa1aa5f212bd95fce9e"
  },
  {
    "url": "assets/js/28.a9cb77dd.js",
    "revision": "e3a305fbc0da73752da6156bf754802b"
  },
  {
    "url": "assets/js/29.c00c0564.js",
    "revision": "8903b26d7fa2436ed1081dc49dad8a05"
  },
  {
    "url": "assets/js/3.4316ed47.js",
    "revision": "c273f9afed8cc252a66fa6f553d09295"
  },
  {
    "url": "assets/js/30.5e0515e4.js",
    "revision": "05f3bd2c50a7f7a4ffcccf5937178057"
  },
  {
    "url": "assets/js/31.3e89cb8d.js",
    "revision": "a2b48fadbf8791ea98952200c32e478c"
  },
  {
    "url": "assets/js/32.c86e3b57.js",
    "revision": "cd8dfcb597532efab60d92cdd24e533a"
  },
  {
    "url": "assets/js/33.8b37746b.js",
    "revision": "38aa2e1c916510de1fb317049e3b2926"
  },
  {
    "url": "assets/js/34.bde73760.js",
    "revision": "3ec9cd975a7cf4f24c617256b2c05203"
  },
  {
    "url": "assets/js/35.7d8c86bd.js",
    "revision": "fb1604127f3cc212afd1998b3e05afa2"
  },
  {
    "url": "assets/js/36.441896c2.js",
    "revision": "3759d5af8dbe57376f2feff43fdf5db3"
  },
  {
    "url": "assets/js/37.24c8cb98.js",
    "revision": "bec8acf4ec2ef5346947975b5ade7470"
  },
  {
    "url": "assets/js/38.8ab81b63.js",
    "revision": "ee923af0f20de04798c5c1b67bcf2f99"
  },
  {
    "url": "assets/js/39.6a0fbe15.js",
    "revision": "a1817326e170a35c499f27da66542474"
  },
  {
    "url": "assets/js/4.6f8dd88e.js",
    "revision": "d2746a919a915f710f5801a8cdc76356"
  },
  {
    "url": "assets/js/40.9586405a.js",
    "revision": "bcf89c51f17900acb714eba88607dff2"
  },
  {
    "url": "assets/js/41.a60c0439.js",
    "revision": "acf36fce8a59530b2900fb9eb134d0fd"
  },
  {
    "url": "assets/js/42.8feff341.js",
    "revision": "455bcf3dd389b0b91eeb772259f2a3cb"
  },
  {
    "url": "assets/js/43.3e5e7a4b.js",
    "revision": "acd365d86129f347b6e49321d284f19f"
  },
  {
    "url": "assets/js/5.90a53632.js",
    "revision": "11282e5d63b64640c916985c935296d9"
  },
  {
    "url": "assets/js/6.a14d82ab.js",
    "revision": "387c20616815e3e545ec27cf6bf8ecf8"
  },
  {
    "url": "assets/js/7.68b00c3f.js",
    "revision": "07c21e0d3793fb773a8993f435990b2e"
  },
  {
    "url": "assets/js/app.caeeed7b.js",
    "revision": "295eb36f637159b6ac2c6a9d3683f00e"
  },
  {
    "url": "assets/js/vendors~docsearch.9d5494b9.js",
    "revision": "94e2399177996f10bb29e984d823f458"
  },
  {
    "url": "de/about/index.html",
    "revision": "66a1ced10d5378c638c535102406239e"
  },
  {
    "url": "de/functions/index.html",
    "revision": "a47e631368bb85ecc02f2841d7b8ff7e"
  },
  {
    "url": "de/index.html",
    "revision": "9658c7fe9f8c25e968bc323e2077cba5"
  },
  {
    "url": "de/qrcode/index.html",
    "revision": "6d3a997a7c4b226f7fb1045f8571bfc7"
  },
  {
    "url": "de/uuid/index.html",
    "revision": "ddac7738d212e215e4f7a187231bb0a6"
  },
  {
    "url": "es/about/index.html",
    "revision": "9c7a377af1c9e1cf5d6cc6f9fc83a418"
  },
  {
    "url": "es/functions/index.html",
    "revision": "266740fa2db475974b0302aedacc121b"
  },
  {
    "url": "es/index.html",
    "revision": "ba964358f08e5c089908f351f197a55f"
  },
  {
    "url": "es/qrcode/index.html",
    "revision": "9b90ba8ffadbf1d23dac080bcd97ea3f"
  },
  {
    "url": "es/uuid/index.html",
    "revision": "cab8a48d0215b3d5182d42be1e623009"
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
    "revision": "8cbf7475106e173a05afc0c068667ec3"
  },
  {
    "url": "fr/functions/index.html",
    "revision": "344348eac05e505eac68c91edd25da7b"
  },
  {
    "url": "fr/index.html",
    "revision": "a82b3443fd7f7718881ce8d468db5dab"
  },
  {
    "url": "fr/qrcode/index.html",
    "revision": "015935049de02a1a5f614354fe764906"
  },
  {
    "url": "fr/uuid/index.html",
    "revision": "f005cc83a834ec881ad5a6bb4461bb21"
  },
  {
    "url": "functions/index.html",
    "revision": "956fc1344da0438a03568e53b938ffaa"
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
    "revision": "2d3e34328168ef958b8bd30eb6663c6e"
  },
  {
    "url": "logo.svg",
    "revision": "db274cdf2405048192adcdd6da51533a"
  },
  {
    "url": "qrcode/index.html",
    "revision": "a3c1278ed5973af5e2e76a46a138aa68"
  },
  {
    "url": "uuid/index.html",
    "revision": "d572378a39d94e3312e54ddb89c533fd"
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
