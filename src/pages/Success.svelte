<script>
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';
</script>

<Header />
<!-- welcome section -->
<!--breadcumb start here-->
<section class="xs-banner-inner-section parallax-window" style="background-image:url('/assets/images/backgrounds/success-bg.jpg')">
    <div class="xs-black-overlay"></div>
    <div class="container">
        <div class="color-white xs-inner-banner-content">
            <h2>Donasi Berhasil</h2>
            <p>Terima kasih atas donasi Anda</p>
            <ul class="xs-breadcumb">
                <li class="badge badge-pill badge-primary">
                    <a href="/" class="color-white">Home /</a> Sukses
                </li>
            </ul>
        </div>
    </div>
</section>
<!--breadcumb end here--><!-- End welcome section -->

<main class="xs-main">
    <!-- donation success section -->
    <section class="xs-section-padding bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 content-center">
                    <div class="xs-heading xs-mb-30 text-center">
                        <h2 class="xs-title">Donasi Anda Telah Berhasil</h2>
                        <p class="small">Terima kasih atas kebaikan hati Anda. Donasi Anda akan sangat membantu mereka yang membutuhkan.</p>
                        <span class="xs-separetor v2"></span>
                    </div>
                    <div class="text-center">
                        <a href="/" class="btn btn-primary">Kembali ke Beranda</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End donation success section -->
</main>

<Footer />