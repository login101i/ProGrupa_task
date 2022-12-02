// ------- service Worker installation -------  //

self.addEventListener('install', e => {
	e.waitUntil(
		caches.open('static').then(cache => {
			return cache.addAll([
				'./index.html',
				'./styles/mainStyles.css',
				'./styles/mobileStyles.css',
				'./assets/images/progrupa-favicon-icon.png',
				'./assets/images/progrupa-logo.png',
				'./assets/images/progrupa-logo2.png',
				'./assets/images/background_image.jpg',
				'./assets/icons/icon-closed-eye.png',
				'./assets/icons/icon-eye-opened.png',
			]);
		}),
	);
});

self.addEventListener('fetch', e => {
	e.respondWith(
		caches.match(e.request).then(response => {
			return response || fetch(e.request);
		}),
	);
});
