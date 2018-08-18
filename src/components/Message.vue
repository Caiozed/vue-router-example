<template>
  <article class="message">
    <div class="message-header">
      <p>{{message.name}} says...</p>
      <button class="delete" @click="deleteMessage"></button>
    </div>
    <div class="message-body">
      {{message.content}}
    </div>
  </article>
</template>

<script>
export default {
  props:["message", "id"],

  methods: {
    deleteMessage(){
      this.$emit("deletemsg", { ...this.message, id: this.id });
    }
  }
}
</script>
