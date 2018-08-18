<template>
  <div>
    <h1 class="is-size-1 has-text-centered">Add a new message here!</h1>
      <MessageForm @newmsg="addMessage"/>
      <ul>
        <li :key="key" v-for="(message, key) in messages">
          <Message @deletemsg="deleteMessage" :message="message" :id="key"/>
        </li>
      </ul>
  </div>
</template>

<script>
import MessageForm from '../components/MessageForm.vue';
import Message from '../components/Message.vue';

export default {
  components: {
    Message,
    MessageForm,
  },

  data(){
    return{
     messages: [{name: "John Smith", content: "This as message"}],
    }
  },

  methods: {
    deleteMessage(message){
      this.messages.splice(message.id, 1);
    },

    addMessage(message){
      this.messages.push(message);
    }
  }
};
</script>
