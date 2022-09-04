<script>
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';
</script>
<Header />
    <!-- contact section -->
	<section class="xs-contact-section-v2">
        <div class="container">
            <div class="xs-contact-container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="xs-contact-form-wraper">
                            <h4>Drop us a line</h4>
                            <form action="#" method="POST" id="xs-contact-form" class="xs-contact-form contact-form-v2">
                                <div class="input-group">
                                    <input type="text" name="name" id="xs-name" class="form-control" placeholder="Enter Your Name.....">
                                    <div class="input-group-append">
                                        <div class="input-group-text"><i class="fa fa-user"></i></div>
                                    </div>
                                </div><!-- .input-group END -->
                                <div class="input-group">
                                    <input type="email" name="email" id="xs-email" class="form-control" placeholder="Enter Your Email.....">
                                    <div class="input-group-append">
                                        <div class="input-group-text"><i class="fa fa-envelope-o"></i></div>
                                    </div>
                                </div><!-- .input-group END -->
                                <div class="input-group massage-group">
                                    <textarea name="massage" placeholder="Enter Your Message....." id="xs-massage" class="form-control" cols="30" rows="10"></textarea>
                                    <div class="input-group-append">
                                        <div class="input-group-text"><i class="fa fa-pencil"></i></div>
                                    </div>
                                </div><!-- .input-group END -->
                                <button class="btn btn-success" type="submit" id="xs-submit">submit</button>
                            </form><!-- .xs-contact-form #xs-contact-form END -->
                        </div><!-- .xs-contact-form-wraper END -->
                    </div>
                    <div class="col-lg-6">
                        <div class="xs-maps-wraper map-wraper-v2">
                            <div id="xs-map" class="xs-box-shadow-2"></div>
                        </div>
                    </div>
                
                </div><!-- .row end -->
            </div><!-- .xs-contact-container END -->
        </div><!-- .container end -->
    </section>	<!-- End contact section -->
<Footer />