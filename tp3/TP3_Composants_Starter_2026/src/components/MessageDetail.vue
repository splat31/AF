<template>
    <div class="card p-3">
        <h2>{{ message.titre }}</h2>
        <p>{{ message.contenu }}</p>
        <p class="text-muted">
            Date : {{ message.date.toLocaleDateString() }}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'MessageDetail',
        props: {
            message: {
                type: Object,
                required: true,
            },
        }
}
</script>

<style scoped>
</style>
