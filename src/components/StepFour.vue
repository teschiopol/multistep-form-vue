<script setup>
import { Field, ErrorMessage } from 'vee-validate';
</script>

<template>
  <label for="terms">Agree to terms and conditions</label>
  <Field name="terms" type="checkbox" id="terms" :value="true" />
  <ErrorMessage name="terms" />
</template>
