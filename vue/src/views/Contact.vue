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
	</div>
</template>

<script>
	import SendContact from '../components/SendContact.vue'

	export default {
		name: 'Contact',
		components: {
			SendContact
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

					console.log(data)

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
