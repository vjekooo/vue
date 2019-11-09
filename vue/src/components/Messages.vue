<template>
    <div>
        <h3>
            {{title}}
        </h3>
        <div class="messages">
            <ul
                v-for="message in messages"
                v-bind:key="message.id"
                class="message-list"
            >
                <Message
                    v-bind:message="message"
                />
            </ul>
        </div>
    </div>
</template>

<script>
    import Message from "./Message.vue";

    export default {
        name: 'Messages',
        components: {
            Message
        },
        props: {
            title: String,
            messages: Array
        }
    }
</script>

<style scoped>
    .messages {
        padding-top: 1rem;
    }
    .message-list {
        list-style-type: none;
    }
</style>