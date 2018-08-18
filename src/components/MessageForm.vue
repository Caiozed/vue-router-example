<template>
<form @submit.prevent="onSubmit">
  <div class="field">
    <label class="label">Name</label>
    <div class="control">
      <input class="input" required v-model="name" type="text" placeholder="Name">
    </div>
  </div>

  <div class="field">
    <label class="label">Message</label>
    <div class="control">
      <textarea class="textarea" required v-model="message" placeholder="Textarea"></textarea>
    </div>
  </div>

  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link">Submit</button>
    </div>
  </div>
</form>

</template>

<script>
export default {
  data() {
    return {
      name: "",
      message: "",
    }
  },

  methods: {
    onSubmit(e){
      this.$emit("newmsg", {name: this.name, content: this.message});
      this.name = this.message = "";
      e.target.reset();
    }
  }
}
</script>

<style>
form{
  width: 60%;
  margin: 0 auto;
}
</style>
