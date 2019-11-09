<template>
	<div class="content">
		<div class="contact-form">
			<div>
				<h3>
					Send something nice
				</h3>
			</div>
			<SendContact
				v-on:send-contact="sendContact"
			/>
			<div>
				{{ responseMessage }}
			</div>
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
				messages: [],
				responseMessage: '',
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

					this.responseMessage = data.message || data.error

					if (!data.error) this.fetchMessages()

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
	.content {
		height: 100%;
	}
	.contact-form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #FFC300;
		padding: 1rem;
	}
	.messages {
		width: 100%;
		background-color: #DAF7A6;
		padding: 1rem;
		height: 80%;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
</style>
