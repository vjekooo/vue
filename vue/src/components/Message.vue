<template>
    <li
        class="message"
    >
        {{message.message}}
    </li>
</template>

<script>
    export default {
        name: 'Message',
        props: {
            message: Object
        },
    }
</script>

<style scoped>
</style>