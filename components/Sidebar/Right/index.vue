<template>
  <div class="flex flex-col">
    <!-- preview card: what's happening -->
    <SidebarRightPreviewCard title="What's happening">
      <SidebarRightPreviewCardItem
        v-for="item in WhatshappeningItems"
        :key="item.title"
      >
        <div>
          <h2 class="font-bold text-gray-800 text-md dark:text-white">
            {{ item.title }}
          </h2>
          <p class="text-sm text-gray-400">
            {{ item.count }}
          </p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
    <!-- preview card: Who to follow -->
    <SidebarRightPreviewCard title="Who to follow">
      <SidebarRightPreviewCardItem
        v-for="item in WhoToFollowItems"
        :key="item.title"
      >
        <div class="flex flex-row justify-between items-center p-2">
          <div class="flex flex-row">
            <img
              class="w-10 h-10 rounded-full"
              :src="item.image"
              :alt="item.name"
            />
            <div class="flex flex-col ml-2">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">
                {{ item.name }}
              </h1>
              <p class="text-sm text-gray-400">
                {{ item.handle }}
              </p>
            </div>
          </div>
          <div class="flex h-full">
            <button
              class="px-4 py-2 text-xs font-bold rounded-full text-white bg-black dark:text-black dark:bg-white"
            >
              Follow
            </button>
          </div>
        </div>
      </SidebarRightPreviewCardItem></SidebarRightPreviewCard
    >
  </div>
</template>
<script setup>
const WhatshappeningItems = ref([
  {
    title: "SpaceX",
    count: "18.8k Tweets",
  },
  {
    title: "SpaceX",
    count: "18.8k Tweets",
  },
  {
    title: "SpaceX",
    count: "18.8k Tweets",
  },
]);

const WhoToFollowItems = ref([
  {
    name: "Phin Huynh",
    handle: "@phinhuynh",
    image: "https://picsum.photos/200/200",
  },
  {
    name: "Phin Huynh",
    handle: "@phinhuynh",
    image: "https://picsum.photos/200/200",
  },
  {
    name: "Phin Huynh",
    handle: "@phinhuynh",
    image: "https://picsum.photos/200/200",
  },
]);
</script>
