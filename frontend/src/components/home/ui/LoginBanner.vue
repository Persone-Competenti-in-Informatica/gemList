<script setup>

</script>

<template>
  <div class="login-banner">
    <h3>Track, Share and Review your favorite games</h3>
    <p>Join our Community, share your thoughts on the games you played or just explore new games you have never heard
      about</p>
    <div>
      <router-link to="/login" class="button">Login</router-link>
      <router-link to="/register" class="button">Register</router-link>
    </div>
  </div>
</template>

<style scoped>
.login-banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: fit-content;
  padding: 16px 12px;
  border-radius: 12px;
  background: rgba(217, 217, 217, 0.12);

  margin-inline: auto;
  margin-block: 20px;
  margin-bottom: 40px;

  & > h3 {
    font-size: 1.7rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  & > p {
    font-size: 1rem;
    margin-bottom: 16px;
  }

  & > div {
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-top: 24px;

    & > .button {
      padding: 4px 48px;
      border-radius: 8px;

      font-weight: bold;
      background: var(--primary);
    }
  }
}

</style>