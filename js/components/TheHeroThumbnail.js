export default {
    name: "ThePortfolioThumb",

    emits: ["loadlbdata"],

    props: {
        hero: Object,
    },

    template: `


    <li @click="loadLBData" class="portfolio__container ">
        <img :src='"images/" + hero.thumb' v-bind:alt="hero.name">
        <div class="portfolio__copy">
            <h3>{{hero.name}}</h3>
            <p>{{hero.category}}</p>
        </div>
    </li>
    `,

    methods: {
        loadLBData() {
            this.$emit("loadlbdata", this.hero);
        },
    },
};
