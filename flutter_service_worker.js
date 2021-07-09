'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9256c9435a7534fe072f55b817f0900b",
"index.html": "d3b3484bb5f2ff42da469e76f007e76c",
"/": "d3b3484bb5f2ff42da469e76f007e76c",
"main.dart.js": "ad474131e0f5bd90c8026552055f6e5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5a67d4fe514759a5f0e355495eea76d8",
".git/config": "0ba8a7b92377fab0d54a1b882a339bf4",
".git/objects/0d/7edf52a93ae2e51bc21b066988738e2ec0d9d8": "500a452c8d915ebbfbbd038e7afce3c3",
".git/objects/59/80ee06748895910593b18fab3c472bb417077b": "1dd7e3691cd9bab7527b560d5f5d407d",
".git/objects/92/3235d28eb0bb259e7d7886bc00e0e7fe587f51": "c1b744bad6e200fca72333e54533fe43",
".git/objects/04/462892abe58fcca36c0e3b9afe349028ee3ab9": "5b1b256985fe44af86aebcf5bf7b0cca",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/91f1cffef2ea3714cfd2fae316a01a13aa3a09": "e479b85e14cf999ff5f7d5cab04d0292",
".git/objects/3c/20d15a2955e3e1b41395c6ea6505cb06abf867": "9710950ddee5133b4301d09cb6c5bd95",
".git/objects/56/21536d7e631097cfa1a8d93cc3610b184c8d4a": "fdca472ecfdaf674be6b6aaefa273620",
".git/objects/3d/f1c01f0ea6d10c190106bf821ec517e51ae1c8": "69cb353740c5015cd5ab058568080d27",
".git/objects/3d/aef2d6fdc8adb366d3e7e4f157faba66b9d3df": "26f40e22945cf9512b45c3ed1a4c82d8",
".git/objects/67/cd422275405f0943927724b65d8add4a4a5e1f": "c4c3fcc6ba4ded571b7a9849dbf191f8",
".git/objects/0b/f240e66dac45b1f5f4c6b3e0cd3015f9a9f848": "7b7f23491c0f628da1de5214e934983c",
".git/objects/5a/aafb25f5d23a6e7374327e588aba2ea730e59b": "daf81ba7dc5ee54deefa867ad448bbb1",
".git/objects/02/d2d7141c62fcb8704886241abb561b88f76e08": "015b7e38fad04af3c18900415701e984",
".git/objects/da/6d04807e069d26916def2c8e7d333a12141123": "dec4202142992e8c44acc0def45c45e1",
".git/objects/a2/53dc88a32f10bc66a880b5e9e5a032876c9545": "9840c6d98611d5768c89e82b9cf1c3d0",
".git/objects/bd/cbee26c755149f41d0127fc14200453360dd06": "236541498ca886ca6e3e88f5d0d9e760",
".git/objects/d6/16166733b21320ac987552f5771598b6889e0e": "cdb4bcd47fd9b27e0b04df4147c818b1",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/d0b093a039197c7040850f662b25e48c43aad2": "f2834e2da045cc746fa1209f8ca2bc4b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/3780c58721af36b10970bd6127414e4e1d44ad": "adae763056557c80093e194db49a118f",
".git/objects/f4/9c3a7159696997fb04b916ebe3c40a41ae2ce5": "41ed3c29dd1df118c67c34b9fb49e930",
".git/objects/c0/fdacddbc712baaf3d02119b2c848bcd33a1f1e": "2fefca0b097974665c2c654c8083f482",
".git/objects/c9/98a398af52a67d5d72c138e503a7d2bbce3a3f": "4442cd61fe6792e4cf9dbb14b77bb6ea",
".git/objects/cf/58c8cf0041644075d20441f566e6eede0fe1de": "d1fc266baa69c0b772322a81b0805802",
".git/objects/cf/f1b2fb76d011a3268a752803e532e3a7fdf7e9": "f5ed6ca8b853a313c85d2ca6ace5daba",
".git/objects/c8/219456c85528f637365b241fed9b8fe01551df": "64289231eb43f380c2d974a147ea4346",
".git/objects/ed/c51f238e45624c2fc3291931efa45df8509515": "f3f2214089d6d54fe8c1be0c406f360a",
".git/objects/ed/8402470f4eecfedff68d2fdae3ae08741a751f": "480a2660092011f7c2db4e054bfc32fb",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/59e73ed8193fb390b71fe3d40f8a499b65db6b": "1f6f84cc516f9343482aa8377de78c45",
".git/objects/7d/7a0f930a0aba1eb53d4712afe35c4e657e3528": "ab9a2a3caa5e1a716510c1c173639b58",
".git/objects/74/13e3d4a08d7583a1b5846b8ac1168ea15c0321": "ef6b337cec0e0cb3cefbbc87249aa9cf",
".git/objects/17/c0c5dc515bf5f20256fb6b35c7e488e43471f3": "87e9cb7b22af6265f91004a19b34c890",
".git/objects/8a/5655294207557dceeac2b5d138083004e3c2e0": "7888de168c28ef2fe625e56e42b8a8ff",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/9948233bed4d39db71bcb684f342912be2826a": "d8fdee6c8a095e3717f1efccdc6bf7ad",
".git/objects/26/4c0d127d3e5b3a7cf8ba29efbd5dff1e672e57": "cd5b862eb5a7ad282bcd15a653238f5a",
".git/objects/4d/69e00db1a291ce3f0bedce188d355cccfbf9d6": "d4816394cda5445665bf634081a83574",
".git/objects/75/bbfa43a9f9dba2e13b41421813a9c5505cd81c": "1b13ec2a4923e5975c7f09a56e6318f9",
".git/objects/44/717c60f26a0195347d967a871b92f44a312bee": "8f7a6450770184e78c7c7584a88b6ea1",
".git/objects/2f/c78b7be3e6967709a066ff7c51ff071d68b876": "8566b0a991d51cc3afc76a86918be1d5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/d8a5f8de6d52759d8784168dea74b5f9d7260c": "3c4b839c03cd987d115f0f924b809e82",
".git/objects/07/7a6ab64fa121e251f38a23210b3eed65314825": "58a8758374767ec50f9c33ce140fe3b7",
".git/objects/6e/6db3159d1d24a906fca4c9d4d0c08e4748d155": "d4821039944ace986eadf4a3d64c3584",
".git/objects/5c/5026ed5d15a8aa1b9f5c9b89f8cb5545a98adf": "0a1e0c74987103f0b935f29a058c1392",
".git/objects/3a/07be2ad967848cf2c4a36be3cbd7f08febc764": "9efb26d82dc456e57cdad2b96df75a4d",
".git/objects/98/c978c9745ab441ba36534aa74612c1a59ac20f": "456230dc62e3078ba29b021a346cafb7",
".git/objects/08/9d2fb2a1036c2140ac3fc76320286df494bff5": "eb9f7ff97a40f01c7a8be26a58eea804",
".git/objects/01/0787d14590352a92035beb2abb303c02a92ba7": "eaf58f418e4ee01c37e9b8ad6fd36a60",
".git/objects/6c/78e328679780431da8189a0a7832eac3a2e8b4": "3e5694739c61a3021d0b20a337b033ac",
".git/objects/97/572c693497395407cba60704f29e0ac1be3d65": "830dd2c7bb36989ecac1ded30d9babf5",
".git/objects/64/2d73c1a88ddbefad02bb98b9c2ba6f59f0892a": "fe027604a2be4376acae5794ded7e6b2",
".git/objects/64/0b1bec8a699402875e78969b28f1624a25b8a7": "a7997074d571ddf84ca70741e723736d",
".git/objects/bf/a6f26879f4d380aa3620c14aa6632ae2788da8": "b1cab69f6cfd8400c989e2dd671a63d6",
".git/objects/d4/3a4cbf25be81fad87f32898631c98b7aa77866": "74b65a8258923983f455102c2cab26e1",
".git/objects/a0/ab15c32255d1e23faae8e9e63ffdfdf999bfb7": "1eca01dd4790a76396eb5e8b384fc1e6",
".git/objects/a7/28a381aa8aef17cc50af8dd1472bf06dd87423": "c54af766d5c5e5f63c9c9cdf968a6cb6",
".git/objects/b1/fc5d385c2015ec3d52dfbcde6f4fd63f37071c": "0ccfb8a6f68a4e22e75f0bfec948e336",
".git/objects/af/46620464e3f6fcedd6017a568abfdfbc03f7c5": "723f8d0180d8b9fd820e1154f1da97e0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e8/bf09bd856d6352728a30f33f627ff0e89d0021": "aff0f10c375eaf2b8909c5b76c10ed25",
".git/objects/ff/74956c5aaa75d18cd3d4eafe446d65e88be9bc": "bc62653f8c0c7dd360a31cf50277603c",
".git/objects/e7/98cf3815a198a897eb7d74d882a18ed58d97e2": "9ed3471a52574bf9e109fe4020ff906a",
".git/objects/e7/643edf12c4633231532aafa9cda475ddc12586": "8787484f61a726b5699a3fa1d87cf2f4",
".git/objects/2c/6d536a9d2aa4a67683da63dbb68c1774358cf1": "a59fd534d3f0b693f9d89c5a883bfa3f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/30695d8cffd06cbf6b0c1a6eb8abf4aa73b2ff": "3b2b53860d88084f370f4d3099337d8a",
".git/objects/1e/27e7a1548aa850be8a4fcb024e06b5096adc30": "25c0540ce08d38a9725fc9de3864c412",
".git/objects/23/687355d471ba996917d17415896a9875ac145c": "f1d4578ba9073fe812d1c48b54d7166a",
".git/objects/4f/e04107c1642f2f8c7b0a07910450b2650dbf6b": "25ee74642b054200c427dea4798cc438",
".git/objects/8d/f5e850f3289a0ff2814d24e8ce4b70cf7c30da": "85992f8806e3c9a67a320ccbe7aa9978",
".git/objects/15/1b83fc9e4ce5d36c1866e820db95b390669935": "325554cc6ad986021ff55312d173277c",
".git/objects/85/951433769a87d32690ffde8fe4ec5d6b2531ee": "9cc4f44423fed459370310b16f9a3d7f",
".git/objects/85/e5b15d03445d96adda0046d724cd290976e099": "20b5857058f1d5302af02b9d1c993a40",
".git/objects/49/b7959946d885d84f69a3cf42b2022ed8fb3372": "21ff99dd9ed373841f6b214d4ad44930",
".git/objects/40/afb74f0de94c344ca7867b93fb1c8aebf2158d": "d533fad05456b0efcbb587a83e81de80",
".git/objects/2b/eec6fa7711932180465bba668d6ff73efd18c6": "916a8efaeb21ac936d1d5dc2a52b6359",
".git/objects/13/58faab6741acf11b4f3accf2ff2b258e5f6ca1": "80ad354dc4e51c949a7f1fd49fb5bd7b",
".git/objects/7f/6ef50745670dd2b8d1fe2050ed5f5bc7650468": "8ba5eb138cf19ae637c0709b555864a9",
".git/objects/22/0423387bdcf8c3677f845b93e708012a89822e": "ecbfca6079411d27e603bbd5a5c77f75",
".git/objects/25/93c34657f2d1dd3726d35888fee1a3c74691ce": "aefb41e87df2bdc429298099e764c91b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8f926003fd680445443ee1f583f70828",
".git/logs/refs/heads/master": "8f926003fd680445443ee1f583f70828",
".git/logs/refs/remotes/origin/master": "fc9e15b9441ffd3f79f2cd68acbffb73",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "d932e9d2cd9dfd94a56ba2c0aa252fba",
".git/refs/remotes/origin/master": "890daaa7b0b66086c0bcd7afbe1eac30",
".git/index": "98ab83a01eb47742128e8e4a04c1f66e",
".git/COMMIT_EDITMSG": "6be9b47e5a575f29ef343deb7edaa99a",
"assets/Images/NavBar/linkedin.png": "a9727a12c462a3c1eeb20856364d9ac2",
"assets/Images/NavBar/facebook.png": "cfe631e85af3482ac58ed40626db81f0",
"assets/Images/HomePage/CloudsFront2.png": "12635f333503f92c0675e5aa81383d26",
"assets/Images/HomePage/CloudsFront1.png": "def047f8bb7e4956f1dfe02c934ac4c7",
"assets/Images/HomePage/ColudsBack2.png": "dffc561ca29d8889dfaf283a83f820b6",
"assets/Images/HomePage/moon.png": "733e306262d2eff002c24d1fbc19020b",
"assets/Images/HomePage/CloudsBack1.png": "fcf253019c93cf8bb54d8cf8809c4dda",
"assets/Images/AnimatedIcons/instagramBlack.json": "afad0db17c499c629d41502d934646b2",
"assets/Images/AnimatedIcons/linkedinBlack.json": "f9f7c3dd07a66cee6da8de43789b1978",
"assets/Images/AnimatedIcons/instagram.json": "8be5d9646662471854e2366b59369145",
"assets/Images/AnimatedIcons/githubBlack.json": "90c42855a40df1a19c27e88ff85dac21",
"assets/Images/AnimatedIcons/youtube.json": "d99c08c71d22da45b1b39383d1b7c429",
"assets/Images/AnimatedIcons/facebookBlack.json": "f68095bb3aaabbf396625e239fb6c9ff",
"assets/Images/AnimatedIcons/facebook.json": "7a2c2587471a4fcf65d10ef027c8aa41",
"assets/Images/AnimatedIcons/github.json": "a5fad50c7a0ece7c2a18003a840045c4",
"assets/Images/AnimatedIcons/linkedIn.json": "67dbb2255cc187236fce8c646e1278a1",
"assets/Images/AnimatedIcons/youtubeBlack.json": "7ca675a04b730bada3869880a18b909a",
"assets/Images/Projects/abueisheh.jpeg": "be3ecf6f32ccd70794f181f38bfed928",
"assets/Images/Projects/spartansFitness.png": "b3e34671d85f92f6f6865d87bff317db",
"assets/Images/MoreInfoPage/backArrow.json": "59bef5bd36502c6e661b588c9e09f547",
"assets/Images/MoreInfoPage/backArrowBlack.json": "8badbb92f381fc29b2f9d93dc0c95f01",
"assets/Images/others/android.png": "090dbbefdc37c9e0f5fa7be638b3bcdc",
"assets/Images/others/apple.png": "99834959bf0450f99a0b42b5ccb0d611",
"assets/Images/MainPage/moonlight.png": "ca0ad0d8811850690f33eb942bd7b913",
"assets/Images/AboutMe/git.png": "300c74eed40e640fd8429314b1b3e820",
"assets/Images/AboutMe/firebase.svg": "8a7fc319108bc29ba4fbc64efd255b5f",
"assets/Images/AboutMe/aboutme.png": "e1bfd5cfa43be09c9f17edbaae250373",
"assets/Images/AboutMe/flutter.png": "70b4364a4b9dfa6d31c154b272133adc",
"assets/Images/AboutMe/aboutme1.png": "02806c6429c2f776f206fc6de5b5e79f",
"assets/Images/AboutMe/postgres.png": "50156c71fb2cf47d5cfe134231975922",
"assets/Images/AboutMe/firebase.png": "7b31af72f0960e67e3778983cba920c7",
"assets/Images/AboutMe/android.png": "9ddb7c574143309ce0f5191822fcad47",
"assets/Images/AboutMe/profilePic.jpeg": "a2e8f409d9d2d2f44ebabd4f427c8ada",
"assets/Images/AboutMe/frontLine.jpeg": "3893641d4103256c31100d6ba433e201",
"assets/Images/AboutMe/springboot.png": "0881daccb5178410b18a1a36984da095",
"assets/Images/AboutMe/birzeit.jpeg": "09a3c4574cd9e9991560021f003de4cd",
"assets/Images/AboutMe/EXALT.png": "df7d3c313e6da888395ffe57cb65abe7",
"assets/Images/AboutMe/rfs.jpeg": "b7d9fa7d239b6b17686be050963969a9",
"assets/Images/GetInTouch/getintouch.png": "1f9f3938bde987e08b9ffd83dfbcce30",
"assets/AssetManifest.json": "d15f7287db05f907ea0a19251c3922c5",
"assets/NOTICES": "703154ce277c9ebefb2dbc92cb234e0c",
"assets/FontManifest.json": "296d586d285e6a2734985b588e36827c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/Gilroy-Medium.ttf": "d8ee4539e9ba9211a8b532e325075577",
"assets/fonts/Gilroy-Regular.ttf": "22d25e11ebe6b43e5a9bc87d0a0ccb61",
"assets/fonts/Gilroy-Light.ttf": "25e5ce9784cf3324af89cfd13fa59517",
"assets/fonts/Gilroy-Bold.ttf": "889a4b5ce3a780faedb74390fc49a07a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Gilroy-Heavy.ttf": "2b57bf6ef2611353b4890d83fe3973c6",
"assets/fonts/Gilroy-ExtraBold.otf": "0f6e082f42f5247d82c3ade9c2a8f928"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
