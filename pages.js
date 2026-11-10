/* Контент вики. Чтобы добавить страницу, допишите объект в pages:
   {id:'адрес', t:'Заголовок', g:'Раздел в меню', md:`текст`}
   Разметка: ## заголовок, ### подзаголовок, - список, [текст](ссылка), ![подпись](картинка),
   **жирный**, > заметка, ||скрытый текст (спойлер)||.
   Несколько картинок подряд (каждая с новой строки) складываются в галерею.
   Персонажи: ['имя-страницы', 'код картинки'] — без кода картинки персонаж считается закрытым. */
const ASSET = 'https://koidylovesvelial.neocities.org/assets/';
const WIKI = {
  name: 'Erased Memories',
  ver: 'ALPHA V1.0.2',
  base: 'https://koidylovesvelial.neocities.org/',
  chars: [
    ['koidy', '7215ac24cc260b120391c0005a227f1b_bb02f1b5'], ['ter'],
    ['velial', 'db61c6634f828abaa91c88994fac8f5c_3eeed2cc'],
    ['rouj', 'b663a3fb30f063a6e9146303ed500c86_c32329cd'],
    ['ever'], ['kissel'], ['bella'], ['never'], ['filya'], ['makutu'], ['tiger'],
    ['keith', 'efb67b2fa40c60801bee77fc61d248e5_f8f8a5b9'],
    ['ace', '810991d550cc80432d0220bcc1bd29c7_a098c695'],
    ['raid', '56ef73a85fdc7fb817f1621964f115d6_ac4db6b2'],
    ['frons', 'c2119b35f76d4939ec148ba5ca533b79_7489a593'],
    ['lais', '9b4a7d78c1644d55680d27e6446268b0_73561417'],
    ['aran', '414289a1833a2508e6f62b294f39cf29_f8d57822'],
    ['fix', 'c90eb991e7b9a3e551090d9e97ac1593_8e22574a'],
    ['garry'], ['yolly'], ['flax'],
    ['kartograf', '6b10e00cf283c790daf94bbda0c2d3f3_c39e98c6']
  ],
  pages: [
    { id: 'home', t: 'Главная', g: '', md: `
или официальный сайт Erased Memories

да, наверное!

ага, добро пожаловать!

![Анимация из проекта Erased Memories](${ASSET}tumblr_41a544da0c813b4abc61495ea3db4ca6_d2ba3e64_1280%20%281%29.gif)

## С чего начать

- [О проекте](#/about): идея, жанр и время действия
- [Персонажи](#/cast): кто есть кто, часть страниц закрыта
- [Ссылки](#/links): где найти Койди, гостевая книга
- [Правила и предупреждения](#/rules): о чём стоит знать до просмотра
- [Ещё](#/more): Вася, кнопка сайта, крутые сайты и загадки
- [Галерея](#/gallery): все гифки с сайта

## Как здесь всё устроено

Слева разделы, справа оглавление страницы. Поиск открывается по Ctrl+K, музыка включается кнопкой в шапке. Чёрные полосы ||в тексте можно нажать||: так скрыты спойлеры.
` },
    { id: 'about', t: 'О проекте', g: 'Проект', md: `
![Erased Memories](${ASSET}tumblr_8a6b743803c33b5565caa2e0c5b89fd0_223c9fb6_540%20%281%29.jpg)

Erased Memories - мой анимационный проект, цель которого заключается в том, чтобы через простые образы передать ужас ужасный. анимация выполнена в простом стиле, однако события, разворачивающиеся в ней, немного тревожат, должны по крайней мере, наверное. а вообще я этот сайт по приколу создал.

## Жанр

с 2021 года я занимаюсь своим проектом, который включает в себя элементы гуро и боевика (грубо говоря). в нем также присутствуют всякие мемы и комические моменты.

## Время действия

события в проекте разворачиваются с 2009 по 2014 год, в период экономических трудностей, когда подростки проявляли особую жестокость, а технологии были далеки от современных.

## Состояние проекта

пока что я рисовал только арты, а к анимации только приступил.
` },
    { id: 'rules', t: 'Правила и предупреждения', g: 'Проект', md: `
## Перед просмотром

привет! я вам настоятельно НЕ РЕКОМЕНДУЮ заходить на этот сайт с мобильного устройства: не все страницы будут найдены, и многие страницы будут смотреться очень некрасиво. РЕКОМЕНДУЮ заходить с ПК.

> Это сказано про старые страницы на Neocities. Сама вики подстроена и под телефон.

## Здесь присутствуют

- арты/темы жестокого характера, мерцающие огни, скримеры, яркие цвета, упоминание наркотиков, тревожные темы, нецензурная лексика.

## Важно понимать

мы не одобряем политику, войну, жестокое обращение с другими людьми (включая убийства и физическое насилие), и категорически против употребления наркотических веществ – мы считаем это неприемлемым, и все это будет находиться лишь в рамках проекта.

также, помните, что все элементы связанные с проектом нарочно сделанны небрежно, поэтому не стоит предъявлять претензии или жалобы нашей команде по поводу их качества.

для того чтобы расмотреть изображение с исходными размерами, откройте изображение в новой вкладке (перетащите вверх к другим вкладкам).

по вопросам, предложениям и при обнаружении ошибок пишите в [гостевую книгу](https://koidylovesvelial.atabook.org/), оставив свою почту, чтобы я смог ответить вам лично.

16+. (плейлист на фоне пренадлежит ArpWire TV)
` },
    { id: 'cast', t: 'Все персонажи', g: 'Персонажи', md: `
ПЕРСОНАЖИ НА ДАННЫЙ МОМЕНТ (следующие картинки нажимаются! :Ъ)(многие из них заблокированы, поскольку я не хочу спойлеров, отнеситесь к этому с пониманием, пожалуйста.)

## Открытые страницы

{{cast:open}}

## Закрытые страницы

{{cast:lock}}
` },
    { id: 'links', t: 'Где найти Койди', g: 'Ссылки', md: `
## Соцсети

ага, добро пожаловать! (следующие картинки нажимаются!)

[![Telegram](https://i.pinimg.com/736x/e7/78/17/e77817bd1dbfcf6d27585dadbd0da528.jpg)](https://t.me/Erased_Memories_official)
[![SpaceHey](${ASSET}tumblr_bb69d96b1e0420ba472e7f437c0b6fc4_856de36c_400.png)](https://spacehey.com/koidylovesvelial)
[![YouTube](${ASSET}tumblr_95607cfacaae11e93af3724aa7aff906_4e115e8b_400.png)](https://www.youtube.com/@Koidy)
[![DonationAlerts](https://png.klev.club/uploads/posts/2024-05/png-klev-club-xd4p-p-donationalerts-png-4.png)](https://dalink.to/erased_memories)
[![Newgrounds](https://upload.wikimedia.org/wikipedia/fi/8/87/Newgrounds-logo.png)](https://koidyofficial.newgrounds.com/)
[![Steam](${ASSET}tumblr_088feba4283ad5df48d1e45c7c4a2d23_9970961a_100.webp)](https://steamcommunity.com/profiles/76561199488716258)

- [Telegram](https://t.me/Erased_Memories_official)
- [SpaceHey](https://spacehey.com/koidylovesvelial)
- [YouTube](https://www.youtube.com/@Koidy)
- [DonationAlerts](https://dalink.to/erased_memories)
- [Newgrounds](https://koidyofficial.newgrounds.com/)
- [Steam](https://steamcommunity.com/profiles/76561199488716258)

## Гостевая книга

и не забудьте подписать ГоСтЕвУю КнИгУ (картинка нажимается!)!→[![Гостевая книга](${ASSET}tumblr_ddfa33f2d64b9f9d9f6dd13b259e120e_d892461f_100.gif)](https://koidylovesvelial.atabook.org/)←

по вопросам, предложениям и при обнаружении ошибок пишите в гостевую книгу, оставив свою почту, чтобы я смог ответить вам лично.
` },
    { id: 'more', t: 'Ещё', g: 'Ссылки', md: `
## Другое

ДРУГОЕ (следующие картинки нажимаются!):

[![Дополнительно](${ASSET}tumblr_aae46a61d64d13aa35e28fac9d73a92c_25a117b6_100.gif)](https://koidylovesvelial.neocities.org/dopolnitelno.html)
[![Старый архив](${ASSET}tumblr_a7615491c79cac26d15c6732629c8e9e_d4952872_100.gif)](https://koidylovesvelial.neocities.org/oldarchive.html)

- [Дополнительно](https://koidylovesvelial.neocities.org/dopolnitelno.html)
- [Старый архив](https://koidylovesvelial.neocities.org/oldarchive.html)

## Вася

![Вася](${ASSET}tumblr_26943f8be84c21f6ba9f26eafb475894_9ca6a220_400.jpg)

а это Вася

![Вася, гифка](${ASSET}tumblr_d7bf225e3dd053fafd16e30f3fd6899f_7211d9f9_1280.gif)

## Помогают с проектом

(нажимаются только никнеймы.)

- [Велиал](https://velialloveskoidy.neocities.org/) ![Велиал](${ASSET}tumblr_db61c6634f828abaa91c88994fac8f5c_3eeed2cc_100.jpg)

## Кнопка сайта

наша кнопка сайта! вы можете ее добавить себе на сайт.

{{btn}}

## Крутые сайты

КРУТЫЕ САЙТЫ!:

[![Dizzt’s Shoal](https://dizzt3942.neocities.org/assets/icon/dizztsshoal.gif)](https://dizzt3942.neocities.org/)
[![Ichomancer](https://ichomancer.com/ichobutton.gif)](https://ichomancer.com/)
[![Cosmic Club](https://cosmic-seea.neocities.org/CosmicClubButton.gif)](https://cosmic-seea.neocities.org/CosmicClub)
[![Cosmic-S](https://cosmic-seea.neocities.org/button.gif)](https://cosmic-seea.neocities.org/)
[![Perhaptation’s Stargazers](https://perstar.neocities.org/perstarbutton.png)](https://perstar.neocities.org/)
[![My Nekos’ World](https://mynekosworld.pages.dev/static/img/button/scroll3.gif)](https://mynekosworld.neocities.org/)
[![Cache of Curiosities](https://sybernetics.net/images/myButtons/sybersbutton1.gif)](https://sybernetics.net/)

## ???

- ||[Загадка 1](https://koidylovesvelial.neocities.org/zagadka1.html)||
- ||[Загадка 2](https://koidylovesvelial.neocities.org/zagadka2.html)||
- ||[Загадка 3](https://koidylovesvelial.neocities.org/zagadka3.html)||
- ||[Загадка 4](https://koidylovesvelial.neocities.org/zagadka4.html)||
- ||[whatagain.html](https://koidylovesvelial.neocities.org/whatagain.html)||
` },
    { id: 'gallery', t: 'Галерея :Ъ', g: 'Ссылки', md: `
## Гифки с сайта

![](${ASSET}tumblr_5306e2651fbcb88fb08d59f8724ce476_49820a13_250%20%281%29.gif)
![](${ASSET}tumblr_e21072d6c2bc1bba01fac15f3795ca57_f7a7a4f2_250.gif)
![](${ASSET}tumblr_d1f55f45d30bd8e43b22f54a1ccbb884_550cd507_1280.gif)
![](https://media.tenor.com/CRNJPc-JMqQAAAAi/worried-stan-marsh.gif)
![](https://i.pinimg.com/originals/be/7d/75/be7d7560f5480d63ba46df95d8aea5e9.gif)

## :Ъ

![](${ASSET}tumblr_b1558ab3b84004a89251d50eec05ea2e_996b612f_100.gif)
![](https://i.pinimg.com/474x/2c/46/65/2c4665852509bcbfb38b587118a1114b.jpg)
![](${ASSET}tumblr_81478eb9ffb9781c73ccee76eaa24c1d_e12919a0_250.gif)
![](https://i.postimg.cc/g2gQYYBj/97.gif)
![](https://i.pinimg.com/736x/98/2f/f7/982ff7ce806030e51f3b138f49488cc6.jpg)
![](${ASSET}tumblr_prnpmyHjy81xzybrpo6_100%20%281%29.gif)
![](${ASSET}tumblr_9bd10d5eea844f81d929016bc16fa6c1_dfec5b1a_100.gif)
![](${ASSET}tumblr_4f20cb676fa880c612d1070f3d588d6f_0b09c7e5_100.gif)
![](${ASSET}tumblr_fcb5d5988df957570c2e828fac5f607d_c5b42610_100.gif)
![](${ASSET}tumblr_0422f74c6374c5ddc2cf98d0b2e83199_2c3fe91e_100.gif)
![](${ASSET}tumblr_c5f94ea2bc93811510286081880ef55a_435d8853_100.gif)
![](https://beon.vip/uploads_image/f8/af/f8afaa7e576b8805500cdb007cef17a3.png)
![](${ASSET}032.webp)
![](${ASSET}dGcLBz2.gif)
![](${ASSET}o3gt1eA.gif)

## Секретные гифки

[![](${ASSET}tumblr_afddc594d9f7311837e2d8c9656522aa_be24b174_75.gif)](https://koidylovesvelial.neocities.org/zagadka2.html)
[![](${ASSET}tumblr_59ff99cd4774966b7f891b59f112b09e_6e13628b_75.gif)](https://koidylovesvelial.neocities.org/zagadka3.html)
[![](${ASSET}tumblr_c521134816eb0aaf03355484fb45529d_bc49f11f_400.gif)](https://koidylovesvelial.neocities.org/zagadka4.html)
` }
  ]
};
