<script setup>
import { Field, ErrorMessage } from 'vee-validate';
</script>

<template>
  <label for="name">Name</label>
  <Field name="name" id="name" />
  <ErrorMessage name="name" />

  <label for="email">Email</label>
  <Field name="email" id="email" type="email" />
  <ErrorMessage name="email" />
</template>
