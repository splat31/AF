<template>
    <div class="activity-card">
        <h1>
            You may want to...
        </h1>
        <div class="activity-info">
            <p>{{activity.type}} {{Prix}}</p>
        </div>
        <p>
            {{activity.activity}}
        </p>
        <hr />
        <div class="participants">
            <p>
                You can do this with {{activity.participants}} participants
            </p>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Request",
        props: {
            activity: {
                type: Object,
                required: true,
            },
        },
        data() {
            return {
            }
        },
        methods: {
        },
        computed: {
            Prix: function () {
                if (this.activity.price <0.1) {
                    return "€"
                }
                if (this.activity.price <0.4) {
                    return "€€"
                }
                if (this.activity.price <0.7) {
                    return "€€€"
                }
                return "€€€€"
            },
        }
    }
</script>

<style scoped>
    .activity-card {
        border: 1px solid #dddddd;
        border-radius: 8px;
        padding: 20px;
        margin-top: 25px;
        max-width: 450px;
        background-color: white;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    }

    .activity-card h1 {
        font-size: 30px;
        margin-bottom: 20px;
    }

    .activity-info p:first-child {
        font-weight: bold;
        color: #555555;
    }

    .activity-info p:nth-child(2) {
        font-size: 20px;
        margin: 20px 0;
    }

    .activity-card hr {
        border: none;
        border-top: 1px solid #dddddd;
        margin: 20px 0;
    }

    .participants {
        text-align: center;
        color: #666666;
        padding: 5px;
    }
</style>