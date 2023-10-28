'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d68323d4fd2bbae14248f8074014b206",
".git/config": "2aa693b8725c5e201d093cd8fdad5d60",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "07bfde83ce374e1e7ba8e517fd04ef61",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a2178043d3ac28483bfc18c74af0faf6",
".git/logs/refs/heads/main": "73a19369c6dde0443f3231300f8b65b5",
".git/logs/refs/remotes/origin/main": "96c9a3b9bfe9d8ff882de7e803635635",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/06/950efb3d7167c608a81af681a438f7cd66cded": "4f2b015025bd74e8895bc2b4f0ec0371",
".git/objects/06/e179bfe8122ebbc7081fd6847f91941c8fdbe8": "496c5a9ab6c1124418d7cbc1581c0c5b",
".git/objects/08/02a453827d69e30c1ae2b8310d1d7f09028241": "84c9bd66088d5962458414ada9845781",
".git/objects/08/c82d74eddd9a561148f9e15239987af1297594": "c69c78149509d9c3735b39192a491d2a",
".git/objects/11/d676942bb54b1660b9ecce34140ce765bcf4a0": "41c1e18e0e0dc7347bfe373cbfe4d4d1",
".git/objects/11/dd26b4ebe726a5177abad8e33262504611c41b": "46499b98c1e9bd7e2cb7c0f6ee2e9744",
".git/objects/15/c77519e6c63941e5c6700300573861f1fc0c0a": "ac4bc202cc1b5b16269fdd083fa7e988",
".git/objects/21/7c9580299f9842382487f6010f852b7bb3107e": "43f0d56012015f12e06f5e46e08bf89f",
".git/objects/22/9b7784cc5c367e66e6ee3bf3839a83fb2cf72b": "9f76bd45e6fc5071b96ec070f6f34ec0",
".git/objects/22/f0da4d94ea7d249d34f4328107944b265ca9e6": "efa9820f0fa44ac8421020d36498922e",
".git/objects/25/f9f80ef880602a067cde92d29892ecf5b03bf7": "ebf25d7e0f5ae818e42620adde1a62e2",
".git/objects/26/b7e02fbce0123b50d6e7d6e8e52cf867d5c15b": "6ae6851e9cfd9bc9872853581a96a3b9",
".git/objects/29/7cfdee7024176e4641ba07cec10fd306c4a8ca": "ee761c443a0961881e65050efc7900d8",
".git/objects/2a/80932db1c74b8ae91d3bbbf57562d0b33a23c0": "2b895ecf09913e510a8d54b798af0105",
".git/objects/2d/a6438ba15c392b8d5e37a764ee338e50474e62": "532082ebf9e0e8dd35b3d2b3977de5b0",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/32/ddcf07f52c6e831a0efbdaf3ed88a5e23b210f": "20d5f8f098ec1d772bc60ec898962a6e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/41/c2b6eb51b3c2bd6de36127e690e2752fc76590": "54c1f8cf2e327e89c928c7f7987110fd",
".git/objects/43/48cd2fd18e7e91ef849572b093285034386ac6": "28dbdfcf97fa6191b0e504c8cb62cd6a",
".git/objects/43/75ab60ff2de7ff36f5eba354254cd39fa002b0": "9770d28b669b8c2a686572ec0cbfaf05",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/b453c229c01315d7103983b257d9d26517285a": "a608904732aa7616a5c34deac6abeec9",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5b/2e1f654440fc5379abe49ad6b9d2217a136741": "d430d687e1df826aa6bb6d50615998cf",
".git/objects/5d/67fb0da7a6e5a766d9195323dde50d7c89bcc4": "f8e8cd5ea23032bb92727ae047a5b731",
".git/objects/5e/4c6c2d1a16636c59cf9fa3d33fda5f72a3f21e": "da8e52c7c2f447416d06096b92c50ff6",
".git/objects/5e/c50fd01b2cffd05adc00d8e7d7b19c1a411522": "251f92237d3efef76e8393598b435288",
".git/objects/64/863e83b9e40fc74f0a8989bb9aeac79013c7dc": "7f5b65fe1114ca7e3912d9b71b513c3e",
".git/objects/66/3eabb0213b8107cbac0825f01850015f35da22": "dbc480b52ef23577c95166acd1076a89",
".git/objects/79/8f575a1af6a1ae32df5d5c9b64568c151893ff": "83fb05b28c65dd673361ae1fec91945c",
".git/objects/7b/9dea593d7b8be749c75fb0749d3d22df4a3e8c": "fead761a52ab26ccdc59ec91715885ed",
".git/objects/82/e86d3a2cf68b640b1267c1b282589f7be36f47": "04ae285b8a2454214ae24864fc40d2ef",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/87/6c1c87bd46ebb6e309513ca8bd91c5d8de189d": "130696289673dc30d0a20e6dd5d7322c",
".git/objects/8f/830ccde62c6d1761c012a6a4b36038d6539ac2": "614b0388eeffa478edf27459dfb819a7",
".git/objects/94/f0f6449556cb1cba078a13e7a5a84e520ae901": "69fe2b8a7675c5208be8f34d758ff9bb",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/9c/cf20a3052a6b540483d517e6afab0343b09eef": "531f4a545ab6ae44dca8b19ed09de938",
".git/objects/9e/ca4a1825d60a1db0095e210764f020baf661bb": "1f9715acce493ffe7fc3702c5b3225ce",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a8/d1174049ac507bdb474e6af87364ebe97a93f7": "fef1aad0e3dfe6fde524d619059746f3",
".git/objects/a9/90c0af2caec758a5f6b1aa9e68a3e746fffb12": "778b0180e84532d53927fb7423ca4b79",
".git/objects/ab/2995847e0790756f849b87e4b6daae4967b563": "e7217647b8c54f2c232f6ddf333b3752",
".git/objects/ab/7b65c85a0e3a360dc32bde0c149ecc5608e27c": "eeda0ab212e851f8444bb60cf03c1940",
".git/objects/b4/67cc7e8b18bf87c157bc41e843e67d4b41b8b8": "9425be4712c2296021ae0c43a5273b64",
".git/objects/ba/70cd5e43a2b7dd0f3dbdfe2fd71f40b9ee283a": "9b463123c10e0628066f1e495794d959",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/c9c508c8ba702eff4b9f49b8cf3d4109a1433e": "3bb734474410d6a827af96381e6f5032",
".git/objects/ca/95d7743602af397d2316a36e2e73046c0c49ea": "971599cb3e9d988534092f9f520f0644",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/de/5acd2d92011bb14ed705806013d278c1d0b9cf": "cf6c141e426c3be82ac9c6e1d39d76ff",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e5/0945b3e0feb925ec33afc5850150ab0627b6bf": "0b66a81b23a27b1736d01e70cf05376d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e8/9ca3933a0c0951c959ce995b7e6ab062aee7c9": "e9a0648dcbebb2bce82e82ae96ba849e",
".git/objects/ef/9f90e339bf3573d75e9b5d08b997ddcc56f2f7": "841e1b89b3a2df3a5fd32e1f1e1f293b",
".git/objects/f5/a3eadc91e5bfcccdc41a8585c4b2318ac4fe9c": "2cd9bc29d814e8421d66563c216dfd86",
".git/objects/f6/0d4164eaae728e8004241afba4ba105c34d0a6": "016160ea92c9ba7028a7d95976233a2e",
".git/objects/fc/50e4b224a62cac2288d8a9708e18313ef7b874": "a62095a200c94732e1dc994936f4a546",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/main": "9b21b0f68ad1230f38dc104c86dcfb38",
".git/refs/remotes/origin/main": "9b21b0f68ad1230f38dc104c86dcfb38",
"assets/AssetManifest.bin": "4ab67faa5caac184312e0894abe36353",
"assets/AssetManifest.json": "d80812babd398b68296bf6330e1f2d32",
"assets/assets/1.webp": "0df290c791a0b1cf7f7809f7e07e2820",
"assets/assets/2.jpg": "6b658b62d6a42a52d50bce54c3c05d70",
"assets/assets/3.jpg": "73be3822d1d7fb0c7f2ba475ca83d384",
"assets/assets/4.jpg": "87c09fbb1f8e7d195c121e76209a9ba1",
"assets/assets/A.png": "e3054989c207cf3fadb73e9c60322e5c",
"assets/assets/akaaa.jpg": "9545bb146df9523872b4a5a05bd816e2",
"assets/assets/am.gif": "d42f42dede8e4b4355a9ce00142623f9",
"assets/assets/aman%2520iternship.jpg": "2fc345eb1573a0a404a23afe1d86c0b1",
"assets/assets/aman.jpg": "ea0e0b08083d9095993a85358eb11f86",
"assets/assets/and.gif": "fb78669cca3d42b1249b2a6a95baa551",
"assets/assets/app.png": "ff7b1944ba1dbab2a6f9499821660eac",
"assets/assets/app.webp": "4c7c20013787406fa18dcbf4ae4593d2",
"assets/assets/axc.png": "bbf69fa1b35bd841a56bb24aa1b85870",
"assets/assets/background.png": "10c81203397572e47ea2ae753f305351",
"assets/assets/blog.jpg": "548f56bd9468e111aca0e1aeed736c03",
"assets/assets/budget.png": "3487e2d3688e00d3a5ea2c0782950e07",
"assets/assets/contact_image.jpg": "d4e5f70ba04adc3b6c323955ff8b0365",
"assets/assets/firebase.png": "c7c2e3514a4f34cc2bbad0f999e7b6a7",
"assets/assets/flutter.jpg": "a3c37c9ed89befec13ccf12e36e08d34",
"assets/assets/github%2520(1).svg": "07883e93734b98cae0f7b9c55d287250",
"assets/assets/icons8-linkedin.svg": "2c20928ddc18c3e2ac70e6f8f38ca825",
"assets/assets/img.png": "ff12c3e8d546437059fdcb327664ace5",
"assets/assets/img_1.png": "f6bfd9ef2b767e7669fa40cb544d24e6",
"assets/assets/img_2.png": "f6bfd9ef2b767e7669fa40cb544d24e6",
"assets/assets/img_3.png": "29a9be2e79df78a7b742f1ac1b1fcce6",
"assets/assets/img_4.png": "29a9be2e79df78a7b742f1ac1b1fcce6",
"assets/assets/img_5.png": "323f52f4790d88737f17c1d78be47c2d",
"assets/assets/instagram.svg": "49d8191adcb627effbc5ee929285fb02",
"assets/assets/ite.png": "54f63f5f7cda68d570f729cb51a86ca0",
"assets/assets/link.svg": "c20e472dbbe47e5809cf79a0b4e283e4",
"assets/assets/my%2520website.png": "e6c5b7b8f8de1eeefb004e6214c49a65",
"assets/assets/Problem%2520Solving(Basic).png": "3db337669f65778f7a271f5669b163bb",
"assets/assets/Python%2520Certification.png": "b82b581cb37cf0fcb8948b38a48449b0",
"assets/assets/scr.png": "5fc99f9c4cd5bebbcdce33a090f0e29d",
"assets/assets/Screenshot%25202023-10-28%2520024025.png": "0ce4ad8cc8ba373907f158a1c348eb13",
"assets/assets/Screenshot%25202023-10-28%2520024044.png": "ab033a54be51a2ff318639dcd8142be8",
"assets/assets/Screenshot%25202023-10-28%2520024155.png": "a39bebdbd1a0f5548a2faacb9174fc77",
"assets/assets/twitter.svg": "e54bdefe3d0f1abdbf799007cff1ed39",
"assets/assets/web.jpg": "ecebb6e73913559be883c2e7654fbd8b",
"assets/assets/webL.png": "2fbf8e5c400b769053677ef23509540e",
"assets/assets/works.jpg": "0907ffb54cb407a07e8f46dceb7e740f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a18319003eca9a5f7f2ae8228786329f",
"assets/NOTICES": "97b6220be9209c39dc6cc2f7076ae576",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "9d691cbd82efcd80026fe0ee6006be45",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "16f6d33c18a723f469ab4c26da65673d",
"icons/Icon-512.png": "055018ae47001b270ba31d9cb0ec087a",
"icons/Icon-maskable-192.png": "16f6d33c18a723f469ab4c26da65673d",
"icons/Icon-maskable-512.png": "055018ae47001b270ba31d9cb0ec087a",
"index.html": "e21f821bbbb21280c7c3a4029f256668",
"/": "e21f821bbbb21280c7c3a4029f256668",
"main.dart.js": "78ed83439357218f7ebd527f1283827e",
"manifest.json": "2a7aa0f714ed6f14a68da1c687630701",
"version.json": "c423f45044db459acbc9ebf8c97374c2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
