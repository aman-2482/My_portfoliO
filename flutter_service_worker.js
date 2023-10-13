'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c7ef79c54e239a48ee040f89675f3202",
"assets/AssetManifest.json": "972db8a8ec7be335133e80473700fd1a",
"assets/assets/1.webp": "0df290c791a0b1cf7f7809f7e07e2820",
"assets/assets/2.jpg": "6b658b62d6a42a52d50bce54c3c05d70",
"assets/assets/3.jpg": "73be3822d1d7fb0c7f2ba475ca83d384",
"assets/assets/4.jpg": "87c09fbb1f8e7d195c121e76209a9ba1",
"assets/assets/A.png": "e3054989c207cf3fadb73e9c60322e5c",
"assets/assets/akaaa.jpg": "9545bb146df9523872b4a5a05bd816e2",
"assets/assets/aman.jpg": "ea0e0b08083d9095993a85358eb11f86",
"assets/assets/and.gif": "fb78669cca3d42b1249b2a6a95baa551",
"assets/assets/app.png": "ff7b1944ba1dbab2a6f9499821660eac",
"assets/assets/app.webp": "4c7c20013787406fa18dcbf4ae4593d2",
"assets/assets/axc.png": "bbf69fa1b35bd841a56bb24aa1b85870",
"assets/assets/background.png": "10c81203397572e47ea2ae753f305351",
"assets/assets/blog.jpg": "548f56bd9468e111aca0e1aeed736c03",
"assets/assets/contact_image.jpg": "d4e5f70ba04adc3b6c323955ff8b0365",
"assets/assets/firebase.png": "c7c2e3514a4f34cc2bbad0f999e7b6a7",
"assets/assets/github%2520(1).svg": "07883e93734b98cae0f7b9c55d287250",
"assets/assets/icons8-linkedin.svg": "2c20928ddc18c3e2ac70e6f8f38ca825",
"assets/assets/img.png": "ff12c3e8d546437059fdcb327664ace5",
"assets/assets/img_1.png": "f6bfd9ef2b767e7669fa40cb544d24e6",
"assets/assets/img_2.png": "f6bfd9ef2b767e7669fa40cb544d24e6",
"assets/assets/img_3.png": "29a9be2e79df78a7b742f1ac1b1fcce6",
"assets/assets/img_4.png": "29a9be2e79df78a7b742f1ac1b1fcce6",
"assets/assets/instagram.svg": "49d8191adcb627effbc5ee929285fb02",
"assets/assets/link.svg": "c20e472dbbe47e5809cf79a0b4e283e4",
"assets/assets/scr.png": "5fc99f9c4cd5bebbcdce33a090f0e29d",
"assets/assets/twitter.svg": "e54bdefe3d0f1abdbf799007cff1ed39",
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
"index.html": "c2d85ed51efff50d83d821403faece5d",
"/": "c2d85ed51efff50d83d821403faece5d",
"main.dart.js": "f9ad65288516a1c7bd5169022590eb3c",
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
