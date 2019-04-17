<template>
    <div id="app">
        <home></home>
    </div>
</template>

<script>
import api from "@/api/song";
import home from "@/component/home";
export default {
    data() {
        return {
            songlist: []
        }
    },
    components:{
        home
    }
};
</script>

<style>
.content {
    padding: 10px;
}
</style>
