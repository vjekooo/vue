<template>
	<div class="send-contact">
		<form @submit.prevent="sendContact">
			<input type="email" v-model="email" name="email" placeholder="Email">
			<input type="text" v-model="message" name="message" placeholder="Message">
			<input type="submit" value="Submit" class="btn">
		</form>
	</div>
</template>

<script>
	export default {
		name: 'SendContact',
		data() {
            return {
                email: '',
                message: ''
            }
        },
		methods: {
			sendContact(e) {
                e.preventDefault()
                const contact = {
                    email: this.email,
                    message: this.message
                }
                this.$emit('send-contact', contact)

                this.title = ''
                this.message = ''
            }
		}
	}
</script>

<style scoped>
	.send-contact {
		width: 100%;
	}
	form {
		display: flex;
		flex-direction: column;
		width: 80%;
		margin: 0 auto;
		padding-top: 1rem;
	}
	input {
		flex: 10;
		padding: 5px;
		widows: 100%;
		margin-bottom: .5rem
	}
	input[type="submit"] {
		flex: 2;
	}
</style>
