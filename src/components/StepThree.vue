<script setup>
import { Field, ErrorMessage } from 'vee-validate';
</script>

<template>
  <label for="address">Address</label>
  <Field as="textarea" name="address" id="address" />
  <ErrorMessage name="address" />

  <label for="postalCode">Postal Code</label>
  <Field name="postalCode" id="postalCode" />
  <ErrorMessage name="postalCode" />
</template>
