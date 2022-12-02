export default {
    name: "TheLightboxComponent",

    props: ["item"],

    emits: ["closelightbox"],

    template: `
    <section @click="closeLB" class="lightbox">
 
       <div v-bind:class="item.class" class="content">
            <div class="content_image">
                <img :src='"images/" + item.image' v-bind:alt="item.name">
             
            </div>
    
            <article v-bind:class="item.class" class="content__copy">
                <div>
                    <h3>{{item.name}}</h3>
                    <p>{{item.info}}</p>
                </div>

                <div class="right-margin">    
                    <div class="top-margin">
                        <h4>CLIENT</h4>                  
                        <p>{{item.client}}</p>
                    </div>
                        
                    <div>
                        <h4>Date</h4>
                        <p>{{item.date}}</p>
                    </div>
                    
                    <div>
                        <h4>CATEGORY</h4>
                        <p>{{item.category}}</p>
                    </div>
                </div>

            </article>
        
        </div>
      
    </section>
    `,

    methods: {
        closeLB() {
            this.$emit("closelightbox");
        },
    },
};
