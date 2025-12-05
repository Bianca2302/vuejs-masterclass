<template>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<script setup>
import { supabase } from '@/lib/supabaseClient.ts';

console.log(supabase);
</script>

