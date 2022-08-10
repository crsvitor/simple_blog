<script setup lang="ts">
/** 
  ref -> new data values, (useState)
  computed -> retrieve data that is somehow related to states (refs) (useEffect)
*/
import { usePosts } from "../store/posts";
import TimelineItem from "./TimelineItem.vue";
import { periods } from "../constants";

const postsStore = usePosts();

await postsStore.fetchPosts();
</script>

<template>
  <nav class="is-primary panel">
    <span class="panel-tabs">
      <a
        v-for="period of periods"
        :key="period"
        :class="{ 'is-active': period === postsStore.selectedPeriod }"
        @click="postsStore.setSelectedPeriod(period)"
      >
        {{ period }}
      </a>
    </span>

    <TimelineItem
      v-for="post of postsStore.filteredPosts"
      :key="post.id"
      :post="post"
    />
  </nav>
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
