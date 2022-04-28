const CacheEstatico = "Estatico-1";
const CacheInmutable = "Inmutable-1";
const CacheDinamico = "Dinamico-1";

self.addEventListener("install", (e) => {
  const cacheProm = caches.open(CacheEstatico).then((cache) => {
    cache.addAll([
      "/",
      "/Dragonball/index.html",
      "/Dragonball/css/style.css",
      "/Dragonball/js/app.js",
      "/Dragonball/sw.js",
      "/Dragonball/js/js.js",
      "/Dragonball/img/androide17.jpg",
      "/Dragonball/img/blackgoku.jpg",
      "/Dragonball/img/blackgokurosa.jpg",
      "/Dragonball/img/buu.jpg",
      "/Dragonball/img/dende.jpg",
      "/Dragonball/img/fondo.jpg",
      "/Dragonball/img/goku.jpg",
      "/Dragonball/img/goku2.jpg",
      "/Dragonball/img/goku3.jpg",
      "/Dragonball//Dragonball/img/goku4.jpg",
      "/Dragonball//Dragonball/img/gokuazul.jpg",
      "/Dragonball//Dragonball/img/gokudios.jpg",
      "/Dragonball//Dragonball/img/kaioshin.jpg",
      "/Dragonball//Dragonball/img/krilin.jpg",
      "/Dragonball//Dragonball/img/majinbuu.jpg",
      "/Dragonball//Dragonball/img/majinbuumalo.jpg",
      "/Dragonball//Dragonball/img/mayor.png",
      "/Dragonball//Dragonball/img/menor.png",
      "/Dragonball//Dragonball/img/picolo.jpg",
      "/Dragonball//Dragonball/img/superbuu.jpg",
      "/Dragonball//Dragonball/img/titulo.svg",
      "/Dragonball//Dragonball/img/trunks.jpg",
      "/Dragonball//Dragonball/img/trunks2.jpg",
      "/Dragonball//Dragonball/img/vegeta.jpg",
      "/Dragonball/img/vegeta2.jpg",
      "/Dragonball/img/vegetaazul.jpg",
      "/Dragonball/img/vegetadios.jpg",
      "/Dragonball/img/vegetamega.jpg",
      "/Dragonball/img/espera.png",
      "/Dragonball/img/signo.png",
      "/Dragonball/img/error.png",
      "/Dragonball/img/icons/64x64.png",
      "/Dragonball/img/icons/96x96.png",
      "/Dragonball/img/icons/128x128.png",
      "/Dragonball/img/icons/256x256.png",
      "/Dragonball/img/icons/64x64.png",
      "/Dragonball/img/goku.png",
      "/Dragonball/img/gokublack.png",
      "/Dragonball/img/kaioshin.png",
      "/Dragonball/img/majinboo.png",
      "/Dragonball/img/krilin.png",
      "/Dragonball/img/vegeta.png",
      "/Dragonball/img/picoro.png",
      "/Dragonball/img/trunks.png",
    ]);
  });

  //cache inmutable no se modifica
  const cacheInm = caches.open(CacheInmutable).then((cache) => {
    cache.addAll([
      "/",
      "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
      "/Dragonball/css/bootstrap.min.css",
      "/Dragonball/css/bootstrap.min.css.map",
      "/Dragonball/js/bootstrap.bundle.min.js",
      "/Dragonball/js/bootstrap.bundle.min.js.map",
      "/Dragonball/js/jquery.min.js",
      "/Dragonball/manifest.json"
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
