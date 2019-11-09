<template>
	<div class="contact">
		<div>
			<p>
				Send something nice
			</p>
		</div>
		<div>
			<SendContact
				v-on:send-contact="sendContact"
			/>
		</div>
		<div class="messages">
			<Messages v-bind:messages="messages" title="Sent messages" />
		</div>
	</div>
</template>

<script>
	import SendContact from '../components/SendContact.vue'
	import Messages from '../components/Messages.vue'

	export default {
		name: 'Contact',
		components: {
			SendContact,
			Messages
		},
		data() {
			return {
				messages: [
					{
						id: 1,
						email: 'asasasas',
						message: 'asasasasas'
					}
				]
			}
		},
		methods: {
			async sendContact(contact) {
				const api = 'http://localhost:4000/api/contact'

				const options = {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(contact)
                };

				try {
					const response = await fetch(api, options)

					const data = await response.json()

					if (data) this.fetchMessages()

					console.log(data)

				} catch (error) {
					console.log(error)
				}
			},
			async fetchMessages() {
				const api = 'http://localhost:4000/api/contacts'

				try {
					const response = await fetch(api)

					const data = await response.json()

					if (data) {
						this.messages = [...this.messages, ...data]
					}

				} catch (error) {
					console.log(error)
				}
			}
		}
	}
</script>

<style scoped>
	h3 {
		margin: 40px 0 0;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
</style>
