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

import jwtDecode from "jwt-decode"; // You may need to install this package

const onGoogleSignInSuccess = (response) => {
  const credential = response.credential;

  // Decode the JWT token
  const userInfo = jwtDecode(credential);

  console.log("User Info:", userInfo);

  // Example: Display user details
  const userName = userInfo.name;
  const userEmail = userInfo.email;
  const userPicture = userInfo.picture;

  // Set the locale based on user email domain (or any other criteria)
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
