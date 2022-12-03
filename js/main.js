import HeroThumb from "./components/TheHeroThumbnail.js";
import LightBox from "./components/TheLightbox.js";
import { SendMail } from "./components/mailer.js";

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

(() => {
    const { createApp } = Vue;

    createApp({
        data() {
            return {
                firstname: "",
            };
        },
        methods: {
            processMailFailure(result) {
                phpResponse.classList.add("text-red");
                let fields = JSON.parse(result.message).message;
                phpResponse.innerHTML = "";
                for (const message of fields) {
                    phpResponse.innerHTML += message + "<br>";
                }
            },

            processMailSuccess(result) {
                phpResponse.classList.remove("text-red");
                phpResponse.classList.add("text-green");
                let message = ["firstname", "lastname", "email", "message"];
                // debugger;

                phpResponse.innerHTML = result.message;
                message.forEach((field) =>
                    this.$refs[field].classList.remove("is-notvalid")
                );

                //debugger;
                message.forEach((field) =>
                    this.$refs[field].classList.add("is-valid")
                );
            },

            processMail(event) {
                // use the SendMail component to process mail
                SendMail(this.$el.parentNode)
                    .then((data) => this.processMailSuccess(data))
                    .catch((err) => this.processMailFailure(err));
            },
        },
    }).mount("#mail-form");
})();
