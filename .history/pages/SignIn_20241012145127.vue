<template>
  <div>
    <p>Current User: {{ user?.name || "Not Signed In" }}</p>
    <GoogleSignInButton
      @success="onGoogleSignInSuccess"
      @error="onGoogleSignInError"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const user = ref(null);

const onGoogleSignInSuccess = (response) => {
  const credential = response.credential;

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
  const userName = userInfo.name;
  const userEmail = userInfo.email;
  const userPicture = userInfo.picture;

  // Set locale based on user's language or email domain
  let locale = "en";
  if (userEmail.endsWith(".sa") || userInfo.locale === "ar") {
    locale = "ar";
  }

  // Now you can use userName, userEmail, and userPicture in your UI
};

const onGoogleSignInError = (error) => {
  console.error("Google Sign-In Error:", error);
};
</script>
