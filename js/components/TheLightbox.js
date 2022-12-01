export default {
    name: "TheLightboxComponent",

    props: ["item"],

    emits: ["closelightbox"],

    template: `
    <section class="lightbox">
 
       <div class="content">
            <img @click="closeLB" src="images/closeIcon.png" class="lightbox_close">
    
            <article class="content__copy">
                <h3>{{item.name}}</h3>
                    <p>{{item.info}}</p>
                    <h4>CLIENT</h4>
                    <p>{{item.client}}</p>
                    <h4>Date</h4>
                    <p>{{item.date}}</p>
                    <h4>CATEGORY</h4>
                    <p>{{item.category}}</p>
            </article>
            <div>
                <img :src='"images/" + item.image' v-bind:alt="item.name">
            </div>
        </div>
    </section>
    `,

    methods: {
        closeLB() {
            this.$emit("closelightbox");
        },
    },
};
