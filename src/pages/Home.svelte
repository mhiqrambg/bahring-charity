<script>
    import {onMount} from "svelte";
    import CharityList from "../components/CharityList.svelte";
    import Header from "../components/Header.svelte";
    import Welcome from "../components/Welcome.svelte";
    import Promo from "../components/Promo.svelte";
    import Footer from "../components/Footer.svelte";

    let title = "Charity";
    let data = getData();

    async function getData(){
      const res = await fetch('https://charity-api-bwa.herokuapp.com/charities');
      const data = await res.json();

        if (res.ok){
          return data;
        } else{
          throw new Error (data);
        }
    }



    onMount(async function(){
      
    });


</script>

    <Header />
    <Welcome />
    {#await data}
    <div id="preloader">
      <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
      </div>
      </div><!-- #preloader -->
    {:then charities}
      <CharityList {charities}/>
    {/await}
    <Promo />
    <Footer />
