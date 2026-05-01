function initAdMob() {
    if (typeof admob === 'undefined') {
        console.warn("AdMob غير متاح");
        return;
    }

    const banner = new admob.BannerAd({
        adUnitId: 'ca-app-pub-9756015724360400/7044151619',
        position: admob.BannerAd.Position.BOTTOM,
    });

    banner.show()
        .then(() => console.log("✅ البنر يعمل"))
        .catch((e) => console.error("❌ خطأ AdMob:", e));
}

document.addEventListener('deviceready', initAdMob, false);
