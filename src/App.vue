<template>
  <div>
    <Form
        @submit="nextStep"
        :validation-schema="currentSchema"
        keep-values
        :initial-values="initialValues"
        v-slot="{ values }"
        ref="forma"
    >
      <div>
        <button v-if="currentStep !== 0" type="button" @click="prevStep" style="float: left">
          Previous
        </button>

        <button v-if="currentStep !== 3" type="submit" style="float: right">Next</button>

        <button v-if="currentStep === 3" type="submit"  style="float: right">Finish</button>
      </div>
      <template v-if="currentStep === 0">
        <StepOne/>
      </template>

      <template v-if="currentStep === 1">
        <StepTwo/>
      </template>

      <template v-if="currentStep === 2">
        <StepThree/>
      </template>

      <template v-if="currentStep === 3">
        <StepFour/>
      </template>

      <div>
        <button v-if="currentStep !== 0" type="button" @click="prevStep" style="float: left">
          Previous
        </button>

        <button v-if="currentStep !== 3" type="submit" style="float: right">Next</button>

        <button v-if="currentStep === 3" type="submit"  style="float: right">Finish</button>
      </div>

      <pre>{{ values }}</pre>
    </Form>
  </div>
</template>

<script>

import { Form } from 'vee-validate';
import {useOneModel} from "@/models/one";
import {useTwoModel} from "@/models/two";
import {useThreeModel} from "@/models/three";
import {useFourModel} from "@/models/four";
import {ref, computed, onMounted} from 'vue';
import StepOne from "@/components/StepOne.vue";
import StepTwo from "@/components/StepTwo.vue";
import StepThree from "@/components/StepThree.vue";
import StepFour from "@/components/StepFour.vue";
import {useFormStore} from "@/stores/form";

export default {
  name: 'App',
  components: {StepFour, StepThree, StepTwo, StepOne, Form},
  setup() {

    const initialValues = ref({});
    const forma = ref(null);

    const store = useFormStore()

    onMounted(() => {
      let t = store.getFromStore;
      if (t) {
        forma.value.setValues(t);
      }
    })

    // Each step should have its own validation schema
    const schemas = [
      useOneModel(),
      useTwoModel(),
      useThreeModel(),
      useFourModel()
    ];

    const currentStep = ref(0);

    const currentSchema = computed(() => {
      return schemas[currentStep.value];
    });

    function nextStep(values) {
      if (currentStep.value === 3) {
        console.log('Done: ', JSON.stringify(values, null, 2));
        store.saveStore(values);
        return;
      }
      currentStep.value++;
    }

    function prevStep() {
      if (currentStep.value <= 0) {
        return;
      }
      currentStep.value--;
    }

    return {
      initialValues, currentStep, forma,
      currentSchema,
      nextStep, prevStep
    }
  }
}
</script>
