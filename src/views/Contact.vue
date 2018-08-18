<template>
  <div>
      <h1 class="is-size-1 has-text-centered">Send us a sugestion!</h1>
      <form>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" required type="email" placeholder="Email">
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" required placeholder="Textarea"></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>
