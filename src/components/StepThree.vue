<script setup>
import { Field, ErrorMessage } from 'vee-validate';
import {useFormStore} from "@/stores/form";

const store = useFormStore();

const someThing = (e) => {
  store.postal = e.target.value;
}

</script>

<template>
  <label for="address">Address</label>
  <Field as="textarea" name="address" id="address" />
  <ErrorMessage name="address" />

  <label for="postalCode">Postal Code</label>
  <Field name="postalCode" id="postalCode" @change="someThing"/>
  <ErrorMessage name="postalCode" />
</template>
