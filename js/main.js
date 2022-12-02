import HeroThumb from "./components/TheHeroThumbnail.js";
import LightBox from "./components/TheLightbox.js";
const phpResponse = document.getElementById("php-copy");
(() => {
    const { createApp } = Vue;

    createApp({
        created() {
            // ALWAYS get your remote data here
            fetch("./scripts/json.php")
                .then((res) => res.json())
                .then((data) => (this.heroData = data))
                .catch((error) => console.error(error));
        },

        data() {
            return {
                heroData: {},
                lbData: {},
                showLB: false,
                title: "Title of book",
                showBooks: true,
            };
        },

        components: {
            theherothumb: HeroThumb,
            thelightbox: LightBox,
        },

        //processMail
        methods: {
            loadLightbox(hero) {
                this.lbData = hero;
                this.showLB = true;
            },
            toggleShow() {
                this.showBooks = !this.showBooks;
            },
        },
    }).mount("#app");
})();
