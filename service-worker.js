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
    "revision": "5749ebc124d7462c69cd952c1a4269db"
  },
  {
    "url": "about/index.html",
    "revision": "b4a3899609dc728b1eaf408c82d57839"
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
    "url": "assets/js/24.aa3afb55.js",
    "revision": "592a54c5a88f34aaca5c15ff5fc23f12"
  },
  {
    "url": "assets/js/25.50560b92.js",
    "revision": "e16b028fac5ae7d2471a6cddb8377a41"
  },
  {
    "url": "assets/js/26.e26c09a5.js",
    "revision": "96cc9edcdf564db0252ddbd3df3bf067"
  },
  {
    "url": "assets/js/27.b67ac776.js",
    "revision": "ba9f7123313abd628eb04233aa8caf9b"
  },
  {
    "url": "assets/js/28.5701387b.js",
    "revision": "4df964023158a7e57dcd7a4841fe9e7b"
  },
  {
    "url": "assets/js/29.73a41650.js",
    "revision": "69d4d98aa152632794678a063702da49"
  },
  {
    "url": "assets/js/3.4316ed47.js",
    "revision": "c273f9afed8cc252a66fa6f553d09295"
  },
  {
    "url": "assets/js/30.3ffa1fe9.js",
    "revision": "1d0c364ede6d1375a30e097876c32228"
  },
  {
    "url": "assets/js/31.3e89cb8d.js",
    "revision": "a2b48fadbf8791ea98952200c32e478c"
  },
  {
    "url": "assets/js/32.2922dbcb.js",
    "revision": "a0ea822d0a3044ae4d33b90f3a3e4a25"
  },
  {
    "url": "assets/js/33.a43e9292.js",
    "revision": "0cb132441863dfba07e1df3f9e4b3e60"
  },
  {
    "url": "assets/js/34.a3f0803c.js",
    "revision": "cceb0a48e0562503c229a5e8e600b233"
  },
  {
    "url": "assets/js/35.1e38e26d.js",
    "revision": "c740eac6bb59b90c859aff393b673e47"
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
    "url": "assets/js/40.8c509c0c.js",
    "revision": "2dcca5a242ff8ff8d854ea1ca39037da"
  },
  {
    "url": "assets/js/41.8b4528bf.js",
    "revision": "a8aace250ea0d9efd671e1aa128d0c34"
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
    "url": "assets/js/app.53199fa3.js",
    "revision": "b0dda7dec693188f833795b1099af127"
  },
  {
    "url": "assets/js/vendors~docsearch.9d5494b9.js",
    "revision": "94e2399177996f10bb29e984d823f458"
  },
  {
    "url": "de/about/index.html",
    "revision": "59c2b51a4827c84b18dafb241989b874"
  },
  {
    "url": "de/functions/index.html",
    "revision": "a20a35d27c0dec761d269bd918fbc68d"
  },
  {
    "url": "de/index.html",
    "revision": "b4240bef3c8d8c7dcad05c25060ddc92"
  },
  {
    "url": "de/qrcode/index.html",
    "revision": "f09057fad33ca963594bb7f486bd5b81"
  },
  {
    "url": "de/uuid/index.html",
    "revision": "bff747aa2cec3c2020780b95319b6314"
  },
  {
    "url": "es/about/index.html",
    "revision": "591f1426cb0ace780fb0e81e42824755"
  },
  {
    "url": "es/functions/index.html",
    "revision": "fb1843b5629a3cb41a763a2ef12eee91"
  },
  {
    "url": "es/index.html",
    "revision": "68ed411935b71cedda1a37b174ed303b"
  },
  {
    "url": "es/qrcode/index.html",
    "revision": "df3591e0f9cefe719cd467184abbbefc"
  },
  {
    "url": "es/uuid/index.html",
    "revision": "b4c9e040215495b4fa02af2b05a3df23"
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
    "revision": "8d0788ad6cf68ed0ab65f1f26ad6c8f1"
  },
  {
    "url": "fr/functions/index.html",
    "revision": "8feba02697f42fe7302e28febd1db61d"
  },
  {
    "url": "fr/index.html",
    "revision": "daefb2043342b4e05c8acb3e72b0d0c9"
  },
  {
    "url": "fr/qrcode/index.html",
    "revision": "1eb0609a8134a253996e151d75cb5fff"
  },
  {
    "url": "fr/uuid/index.html",
    "revision": "6019b17a1d01abf160cafb5f33821dc0"
  },
  {
    "url": "functions/index.html",
    "revision": "fc7905c399c4e8a019d0baae45f17464"
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
    "revision": "f807b4f0c29b7d36a58bff5d0bcbf61d"
  },
  {
    "url": "logo.svg",
    "revision": "db274cdf2405048192adcdd6da51533a"
  },
  {
    "url": "qrcode/index.html",
    "revision": "c2959866797506b0b6de6b45cb6a1d57"
  },
  {
    "url": "uuid/index.html",
    "revision": "e6024c0f1c4d2a5b8fe9107692aa937b"
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
