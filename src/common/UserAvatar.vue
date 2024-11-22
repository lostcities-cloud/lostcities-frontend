<template>
    <div v-html="identicon"></div>
</template>

<script>
import jdenticon from "jdenticon/standalone";

export default {
    name: "user-avatar",
    props: {
        name: String,
        size: { type: Number, default: 60}
    },

    computed: {
        identicon() {
            console.log('new identicon for:', this.name);
            return jdenticon.toSvg(this.name, this.size);
        }
    },
}

</script>

<style scoped>

</style>
