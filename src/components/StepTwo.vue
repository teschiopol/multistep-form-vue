<script setup>
import { Field, ErrorMessage } from 'vee-validate';
</script>

<template>
  <label for="password">Password</label>
  <Field name="password" type="password" id="password" />
  <ErrorMessage name="password" />

  <label for="confirmation">Confirm Password</label>
  <Field name="confirmPassword" type="password" id="confirmation" />
  <ErrorMessage name="confirmPassword" />
</template>
