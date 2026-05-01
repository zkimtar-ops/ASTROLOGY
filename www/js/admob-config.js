document.addEventListener('deviceready', function() {

    if (typeof admob === 'undefined') {
        console.warn("AdMob غير متاح");
        return;
    }

    // تهيئة AdMob أولاً
    admob.start().then(function() {

        const banner = new admob.BannerAd({
            adUnitId: 'ca-app-pub-9756015724360400/7044151619',
            position: admob.BannerAd.Position.BOTTOM,
            size: admob.BannerAd.Size.BANNER,
        });

        banner.show().then(function() {
            console.log("✅ البنر يعمل");
        }).catch(function(e) {
            console.error("❌ خطأ banner.show:", e);
        });

    }).catch(function(e) {
        console.error("❌ خطأ admob.start:", e);
    });

}, false);
