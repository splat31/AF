<template>
    <div class="PopUp">
        <p> Unable to retrieve an activity. Please review your criteria</p>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: "ErrorPopUp",
        data() {
            return {
            }
        },
        methods: {
        },
    }
</script>

<style scoped>
    .PopUp {
        border: 1px solid #dddddd;
        border-radius: 8px;
        padding: 20px;
        margin-top: 25px;
        align-items: center;
        max-width: 450px;
        background-color: rgb(232,220,202);
        color: rgb(132,120,102);
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
        text-align: center;
    }
    .PopUp p {
        margin: 0;
        padding: 0;
    }
</style>