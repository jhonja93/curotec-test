<template>
  <div>
    <div>
      <img class="rounded-full" width="40" height="40" src="{{url}}" alt="" />
    </div>
    <div>
      <div>{{ name }}</div>
      <div>{{ date }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  url: String,
  name: String,
  date: String
});
</script>
