<template>
	<div class="send-contact">
		<div>
			<form @submit.prevent="sendContact">
				<input type="email" v-model="email" name="email" placeholder="Email">
				<input type="text" v-model="message" name="message" placeholder="Message">
				<input type="submit" value="Submit" class="btn">
			</form>
		</div>
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
</style>
