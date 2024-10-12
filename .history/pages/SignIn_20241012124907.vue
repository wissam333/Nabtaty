<template>
    <div>
      <p>Current User: {{ user?.name || 'Not Signed In' }}</p>
      <GoogleSignInButton @success="onGoogleSignInSuccess" @error="onGoogleSignInError" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const user = ref(null)
  
  const onGoogleSignInSuccess = (response) => {
    user.value = response.profileObj // You get the Google user profile info here
    console.log('Google Sign-In Success:', response)
  }
  
  const onGoogleSignInError = (error) => {
    console.error('Google Sign-In Error:', error)
  }
  </script>
  