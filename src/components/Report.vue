<template>
  <div
    class="report max-w-4xl  mx-auto bg-white px-4 py-5 border-b border-gray-200 sm:px-6"
  >
    <div
      class="text-left -ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap"
    >
      <div class="ml-4 mt-4">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Vessel Reports
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          Looking for an alternative way to consume dynamically generatable
          forms for Reports.
        </p>
        <p class="mt-1 text-sm text-gray-500">
          Note all dotted borders are for dev purposed only.
        </p>
      </div>
      <div class="ml-4 mt-4 flex-shrink-0">
        <button
          type="button"
          class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create new job
        </button>
      </div>
    </div>
    <div v-if="!formLoading" class="form">
      <div class="form-group" v-for="(group, index) in form" :key="group.unique_name">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {{ group.unique_name }}
        </h3>
        <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="username"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Username
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="max-w-lg flex rounded-md shadow-md">
                <input
                  type="text"
                  name="username"
                  :id="'username-' + index"
                  autocomplete="username"
                  class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-md sm:text-sm border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
        <div v-for="field in group.fields" :key="field.field_title">
          {{ field.field_title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import apollo from "@/apollo.js";
import { REPORT } from "@/gql/queries.js";
export default defineComponent({
  name: "Home",
  components: {
    // BaseRightSlideover,
  },
  setup() {
    const form = ref({});
    const formLoading = ref(true);
    const getForm = async () => {
      const result = await apollo.query({
        query: REPORT,
      });
      form.value = result.data.field_groups;
      formLoading.value = false;
    };

    onMounted(async () => {
      await getForm();
    });
    return {
      form,
      formLoading,
    };
  },
});
</script>

<style>
p {
  color: hsl(217deg 4% 40%);
}

.form {
  border: 1px dotted blue;
  height: 80vh;
}

.form-group {
  border: 1px dotted blue;
  height: 70vh;
}

.report {
  border: 2px dotted green;
}
</style>
