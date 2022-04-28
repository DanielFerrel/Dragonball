const CacheEstatico = "Estatico-1";
const CacheInmutable = "Inmutable-1";
const CacheDinamico = "Dinamico-1";

self.addEventListener("install", (e) => {
  const cacheProm = caches.open(CacheEstatico).then((cache) => {
    cache.addAll([
      "/",
      "/index.html",
      "Dragonball/css/style.css",
      "/js/app.js",
      "/sw.js",
      "/js/js.js",
      "/img/androide17.jpg",
      "/img/blackgoku.jpg",
      "/img/blackgokurosa.jpg",
      "/img/buu.jpg",
      "/img/dende.jpg",
      "/img/fondo.jpg",
      "/img/goku.jpg",
      "/img/goku2.jpg",
      "/img/goku3.jpg",
      "/img/goku4.jpg",
      "/img/gokuazul.jpg",
      "/img/gokudios.jpg",
      "/img/kaioshin.jpg",
      "/img/krilin.jpg",
      "/img/majinbuu.jpg",
      "/img/majinbuumalo.jpg",
      "/img/mayor.png",
      "/img/menor.png",
      "/img/picolo.jpg",
      "/img/superbuu.jpg",
      "/img/titulo.svg",
      "/img/trunks.jpg",
      "/img/trunks2.jpg",
      "/img/vegeta.jpg",
      "/img/vegeta2.jpg",
      "/img/vegetaazul.jpg",
      "/img/vegetadios.jpg",
      "/img/vegetamega.jpg",
      "/img/espera.png",
      "/img/signo.png",
      "/img/error.png",
      "/img/icons/64x64.png",
      "/img/icons/96x96.png",
      "/img/icons/128x128.png",
      "/img/icons/256x256.png",
      "/img/icons/64x64.png",
      "/Dragonball/img/goku.png",
      "/img/gokublack.png",
      "/img/kaioshin.png",
      "/img/majinboo.png",
      "/img/krilin.png",
      "/img/vegeta.png",
      "/img/picoro.png",
      "/img/trunks.png",
    ]);
  });

  //cache inmutable no se modifica
  const cacheInm = caches.open(CacheInmutable).then((cache) => {
    cache.addAll([
      "/",
      "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
      "/css/bootstrap.min.css",
      "/css/bootstrap.min.css.map",
      "/js/bootstrap.bundle.min.js",
      "/Dragonball/js/bootstrap.bundle.min.js.map",
      "/js/jquery.min.js",
      "/manifest.json"
    ]);
  });

});

self.addEventListener("activate", (e) => {
  event.waitUntil(async () => {
    const keys = await caches.keys();
    return keys.map(async (cache) => {
      if (!cache == CacheEstatico) {
        console.log("Cache viejo eliminado" + cache);
        return await caches.delete(cache);
      }
    });
  });
});

self.addEventListener("fetch", (e) => {
  //cache with network fallback
  const respuesta = caches
    .match(e.request) //buscamos un recurso
    .then((res) => {
      if (res) return res;
      console.log("No existe el recurso en cache ->", e.request.url);

      return fetch(e.request)
        .then((newResp) => {
          //no existe el archivo vamos a internet

          caches.open(CacheDinamico).then((cache) => {
            cache.put(e.request, newResp);
          });

          return newResp.clone();
        })
        .catch((err) => {
          return caches.match("/Dragonball/img/error.png"); //error-404/index.html | img/imagen sin conexion.jpg
        });
    });
  e.respondWith(respuesta);
});
