<template>
  <div class="container">
    <div class="card">
      <p>Current User: {{ user?.name || "Not Signed In" }}</p>
      <GoogleSignInButton
        @success="onGoogleSignInSuccess"
        @error="onGoogleSignInError"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const user = ref(null);

const onGoogleSignInSuccess = (response) => {
  const credential = response.credential;

  if (credential) {
    // JWT is split into three parts: header, payload, and signature
    const base64Url = credential.split(".")[1]; // Get the payload (second part)

    // Decode the base64 payload
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    // Parse the JSON payload to get user info
    const userInfo = JSON.parse(jsonPayload);

    console.log("User Info:", userInfo);

    // Example: Display user details
    localStorage.setItem("userName", userInfo.name);
    localStorage.setItem("userEmail", userInfo.email);

    navigateTo("/order");
  }
};

const onGoogleSignInError = (error) => {
  console.error("Google Sign-In Error:", error);
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  .card {
    padding: 40px 30px;
  }
}
</style>
