// الانتظار حتى يصبح الجهاز جاهزاً
document.addEventListener('deviceready', function() {
    
    // إعدادات البنر
    admob.banner.config({
        id: 'ca-app-pub-9756015724360400/7044151619', // معرف البنر الخاص بك
        bannerAtTop: true,                            // وضعه أعلى الصفحة
        overlap: false,                               // لا يتداخل مع المحتوى
        autoShow: true,                               // إظهار تلقائي
        isTesting: false                              // اجعلها true أثناء التجربة فقط
    });

    // استدعاء الإعلان
    admob.banner.prepare()
        .then(() => {
            console.log("AdMob Banner is ready");
        })
        .catch((e) => {
            console.error("AdMob Error: ", e);
        });

}, false);
