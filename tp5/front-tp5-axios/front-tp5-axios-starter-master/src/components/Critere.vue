<template>
    <div>
        <div class="criteria">
            <label>Type :</label>

            <select v-model="type">
                <option value="all">All</option>
                <option value="education">Education</option>
                <option value="recreational">Recreational</option>
                <option value="social">Social</option>
                <option value="diy">DIY</option>
                <option value="charity">Charity</option>
                <option value="cooking">Cooking</option>
                <option value="relaxation">Relaxation</option>
                <option value="music">Music</option>
                <option value="busywork">Busywork</option>
            </select>
        </div>

        <div class="criteria">
            <label>Participants : {{ participants }} </label>
            <input type="range" min="1" max="4" step="1" v-model.number="participants">
        </div>

        <div class="criteria">
            <label> Min price : {{  minprice.toFixed(1) }} </label>
            <input type="range" min="0.0" max="1.0" step="0.1" v-model.number="minprice">
        </div>

        <div class="criteria">
            <label>Max price : {{ maxprice.toFixed(1) }} </label>
            <input type="range" min="0.0" max="1.0" step="0.1" v-model.number="maxprice">
        </div>

        <div>
            <button @click="getActivity">
                Random activity
            </button>
        </div>
    </div>

</template>

<script>
    import axios from "axios"
    export default {
        name: "Critere",
        emits: ['tryresearch','badresearch'],
        data() {
            return {
                participants: 1,
                minprice: 0,
                maxprice: 1,
                type: "all"
            }
        },
        methods: {
            async getActivity() {
                const params = {
                    participants: this.participants,
                    minprice: this.minprice,
                    maxprice: this.maxprice
                };

                if (this.type !== "all") {
                    params.type = this.type;
                }

                try {
                    const act = await axios.get(
                        "https://bored.api.lewagon.com/api/activity",
                        { params }
                    );
                    if (act.data.error) {
                        this.$emit('badresearch');
                    } else {
                        this.$emit('tryresearch', act.data);
                    }

                } catch (error) {
                    console.log("ERREUR AXIOS :", error);
                    this.$emit('badresearch')
                }
            }
        },
        computed: {
        }
    }
</script>

<style scoped>
    .criteria {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
        height: 30px;
        max-width: 350px;
    }

    .criteria label {
        margin: 0;
        line-height: 1;
        width: 110px;
        flex-shrink: 0;
    }

    .criteria input {
        margin: 0;
        flex: 1;
        vertical-align: middle;
    }
    .criteria input[type="range"] {
        appearance: none;
        -webkit-appearance: none;
        height: 6px;
        background: #d3d3d3;
        border-radius: 10px;
    }

    /* Le curseur rond */
    .criteria input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #2c3e50;
        cursor: pointer;
    }
</style>