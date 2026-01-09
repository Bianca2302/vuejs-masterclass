<script setup lang="ts">
import {supabase} from '@/lib/supabaseClient';
import { ref } from 'vue';
import { Tables } from '../../../database.types.ts';

const projects = ref<Tables<'projects'>[] | null>(null);

(async () => {
  const { data, error } = await supabase.from('projects').select();

  if (error) console.log(error);

  projects.value = data;

  console.log('projects: ', projects);
})()
</script>

<template>
  <div>
    <h1>Projects Page</h1>
    <RouterLink to="/">go to home</RouterLink>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
