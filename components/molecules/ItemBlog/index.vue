<template>
  <el-row v-if="props.blogs" :gutter="16">
    <el-col v-for="(item, index) in props.blogs" :key="index" :xl=6 :lg=6 :md=8 :sm=12 :xs=12 class="col-xxs-6">
      <section class="box-job">
        <nuxt-link :to="'/blogs/' + item.slug">
          <div class="box-job-item">
            <div class="box-body">
              <div class="box-body__logo">
                <img
                  :src="item.thumbnail"
                  alt="icon logo FM Supply"
                >
              </div>
              <div class="box-body__company">
                <h3>{{ item.author }}</h3>
                <NuxtLink>{{ item.title }}</NuxtLink>
                <span>ITMATE: {{ formatDate( item.created_at) }}</span>
                <p v-html="item.content" />
              </div>
            </div>
          </div>
        </nuxt-link>
      </section>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import type { Blog } from '@/types'
import { formatDate } from '@/utils/formatters'

const props = defineProps({
  blogs: {
    type: Object as PropType<Blog[]>,
    required: false,
  },
})
</script>
<style lang="scss" scoped>
@use "index.scss";
</style>
