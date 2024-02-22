<script setup>

import {ErrorMessage, Field} from "vee-validate";
</script>

<template>
  <label for="city">City</label>
  <Field as="textarea" name="city" id="city" />
  <ErrorMessage name="city" />
</template>
