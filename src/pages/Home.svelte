<script>
    import {onMount} from "svelte";
    import CharityList from "../components/CharityList.svelte";
    import Header from "../components/Header.svelte";
    import Welcome from "../components/Welcome.svelte";
    import Promo from "../components/Promo.svelte";
    import Footer from "../components/Footer.svelte";
    import { getAllCharities } from "../data/charities.js";

    let title = "Charity";
    let charities = getAllCharities();

    onMount(async function(){
      // Kode inisialisasi jika diperlukan
    });

</script>

    <Header />
    <Welcome />
    <CharityList {charities}/>
    <Promo />
    <Footer />
