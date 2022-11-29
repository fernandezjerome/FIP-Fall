(() => {
    // create vue instance here
    const { createApp } = Vue;

    createApp({
        created() {
            fetch("./data.json")
                .then((res) => res.json())
                .then((data) => (this.portfolioData = data))
                .catch((error) => console.error(error));
        },

        data() {
            return {
                portfolioData: {},
            };
        },
    }).mount("#app");
})();
