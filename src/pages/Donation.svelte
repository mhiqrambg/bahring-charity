<script>
    import router from 'page';
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';
    import Loader from '../components/Loader.svelte';
    import { getCharityById } from '../data/charities.js';

    export let params;
    let charity, 
        amount,
        name,
        email,
        agree = false;

    // Menggunakan data dummy dari charities.js
    let data = getCharity(params.id);
    
    async function getCharity(id) {
        // Menggunakan data dummy sebagai pengganti API
        return new Promise(resolve => {
            setTimeout(() => {
                const result = getCharityById(id);
                charity = result; // sMenyimpan hasil ke variabel charity
                resolve(result);
            }, 500); // Simulasi delay jaringan
        });
    }

    // Fungsi handleButtomClick tidak diperlukan lagi karena form sudah memiliki handler submit
    function handleButtomClick(){
      console.log("Button clicked");
    }

async function handleForm(event) {
  // Pastikan charity dan amount sudah terdefinisi
  if (charity && amount) {
    const amountValue = parseInt(amount) || 0;
    // Menggunakan raised sebagai properti untuk menambahkan donasi
    charity.raised = charity.raised + amountValue;
    try {
      // Simulasi API call dengan timeout
      const res = await new Promise(resolve => {
        setTimeout(() => {
          resolve({ status: 200, ok: true });
        }, 1000);
      });
      console.log('Donasi berhasil:', res);
      // Navigasi ke halaman success menggunakan router
      router('/success'); // Ganti router.navigate dengan router
    } catch (err) {
      console.log('Error saat donasi:', err);
      // Navigasi ke halaman error jika terjadi kesalahan
      router('/error'); // Ganti router.navigate dengan router
    }
  } else {
    console.log('Data charity atau jumlah donasi tidak lengkap');
    console.log('Charity:', charity);
    console.log('Amount:', amount);
  }
}

</script>
<style>
    #xs-input-checkbox {
      display: flex;
      align-items: center;
    }
    #xs-donate-agree {
      width: 35px;
    }
    label[for="xs-donate-agree"] {
      margin: 0;
      margin-left: 10px;
    }
    .xs-donation-form-images {
      text-align: center;
    }
    
  </style>
<Header />
<!-- welcome section -->
	<!--breadcumb start here-->
  {#await data}
      <Loader />
  {:then charity}
	<section class="xs-banner-inner-section parallax-window" style=
	"background-image:url('/assets/images/backgrounds/kat-yukawa-K0E6E0a0R3A-unsplash.jpg')">
	    <div class="xs-black-overlay"></div>
	    <div class="container">
	    <div class="color-white xs-inner-banner-content">
	        <h2>Donate Now</h2>
	        <p>{charity.title}</p>
	        <ul class="xs-breadcumb">
	            <li class="badge badge-pill badge-primary">
	                <a href="/" class="color-white">Home /</a> Donate
	            </li>
	        </ul>
	    </div>
	    </div>
	</section>
    <!--breadcumb end here--><!-- End welcome section -->
	<main class="xs-main">
	<!-- donation form section -->
	<section class="xs-section-padding bg-gray">
	    <div class="container">
	        <div class="row">
	            <div class="col-lg-6">
	                <div class="xs-donation-form-images">
                        <img src={charity.image} alt="Charity Image"></div>
	            </div>
	        <div class="col-lg-6">
	            <div class="xs-donation-form-wraper">
	                <div class="xs-heading xs-mb-30">
	                    <h2 class="xs-title">{charity.title}</h2>
	                    <p class="small">To learn more about make donate charity
	with us visit our "<span class="color-green">Contact
	us</span>" site. By calling <span class=
	"color-green">+44(0) 800 883 8450</span>.</p><span class=
	"xs-separetor v2"></span>
	</div>
    
    <!-- .xs-heading end -->
	<form 
  on:submit|preventDefault={handleForm}
  action="#" method="post" id="xs-donation-form" class=
	"xs-donation-form" name="xs-donation-form">
	    <div class="xs-input-group">
	        <label for="xs-donate-name">Donation Amount <span class=
	"color-light-red">**</span>
            </label>
            <input
                    type="text"
                    name="amount"
                    id="xs-donate-amount"
                    class="form-control"
                    bind:value={amount}
                    required = "true"
                    placeholder="Your donation in Rupiah" />
                </div>
                <!-- .xs-input-group END -->
                <div class="xs-input-group">
                  <label for="xs-donate-name">
                    Your Name
                    <span class="color-light-red">**</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="xs-donate-name"
                    class="form-control"
                    bind:value={name}
                    required = "true"
                    placeholder="Your awesome name" />
                </div>
                <div class="xs-input-group">
                  <label for="xs-donate-email">
                    Your Email
                    <span class="color-light-red">**</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    bind:value={email}
                    required = "true"
                    id="xs-donate-email"
                    class="form-control"
                    placeholder="email@awesome.com" />
                </div>
                <div class="xs-input-group">
                    <label for="xs-donate-agree">
                        Terimakasih {name} atas donasi yang telah Anda berikan, Insya Allah donasi akan kami sampaikan untuk {charity.title},
                        Semoga menjadi Amal Jariyah dan Allah memberi keberkahan atas apa yang Anda berikan.
                      <span class="color-light-red">&#10084;&#10084;&#10084;</span>
                    </label>
                  </div>
                <div class="xs-input-group" id="xs-input-checkbox">
                  <input
                    type="checkbox"
                    name="agree"
                    id="xs-donate-agree"
                    bind:checked={agree} />
                  <label for="xs-donate-agree">
                    I Agree
                    <span class="color-light-red">**</span>
                  </label>
                </div>

     <!-- .xs-input-group END -->
	<!-- <div class="xs-input-group">
	<label for="xs-donate-charity">List of Evaluated Charities
	<span class="color-light-red">**</span></label>
	<select name="charity-name" id="xs-donate-charity" class=
	"form-control">
	<option value="">
	Select
	</option>
	<option value="amarokSocity">
	Amarok socity
	</option>
	<option value="FamarokSocity">
	Amarok socity
	</option>
	<option value="amarokSocity">
	Amarok socity
	</option>
	<option value="amarokSocity">
	Amarok socity
	</option>
	</select>
	</div>.
    <--xs-input-group END -->

	<button type="submit" 
  disabled = {!agree}
  class="btn btn-warning"><span class=
	"badge"><i class="fa fa-heart"></i></span> Donate
	now</button>
	</form><!-- .xs-donation-form #xs-donation-form END -->
	</div>
	</div>
	</div><!-- .row end -->
	</div><!-- .container end -->
	</section><!-- End donation form section -->
	</main>
    {/await}
    <Footer />