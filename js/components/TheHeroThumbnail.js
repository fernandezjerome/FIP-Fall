export default {
    name: "ThePortfolioThumb",

    emits: ["loadlbdata"],

    props: {
        hero: Object,
    },

    template: `


    <li @click="loadLBData" >
        <img :src='"images/" + hero.thumb' alt="hero img">
        <div>
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
