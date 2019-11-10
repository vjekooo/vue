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
			<div class="response-message">
				<p>
					{{ responseMessage }}
				</p>	
			</div>
		</div>
		<div class="messages">
			<Messages v-bind:messages="allMessages" title="Sent messages" />
		</div>
	</div>
</template>

<script>
	import SendContact from '../components/SendContact.vue'
	import Messages from '../components/Messages.vue'

	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'

	import { api } from '../constants.js'

	export default {
		name: 'Contact',
		components: {
			SendContact,
			Messages
		},
		computed: mapGetters(['allMessages', 'responseMessage']),
		methods: {
			...mapActions(['fetchMessages', 'sendContact'])
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
		padding: 1rem 1rem 0 1rem;
	}
	.messages {
		width: 100%;
		background-color: #DAF7A6;
		padding: 1rem;
		height: 80%;
	}
	.response-message {
		width: 100%;
		height: 20px;
		margin-bottom: 1rem
	}
	.response-message p {
		font-size: 14px;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	@media only screen and (max-width: 400px) {
		.response-message p {
			font-size: 12px;
		}
	}
</style>
