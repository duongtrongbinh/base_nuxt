<template>
  <div class="blog__header">
    <img src="@/assets/images/blogs/header.png" alt="header">
    <div class="blog__header--title">
      <div class="blog__header-title--main">
        <h1>Blog nghề nghiệp</h1>
        <p>
          Khám phá thông tin hữu ích liên quan tới nghề nghiệp bạn quan tâm. Chia sẻ kinh nghiệm, kiến
          thức chuyên môn giúp bạn tìm được công việc phù hợp và phát triển bản thân.
        </p>
      </div>
    </div>
  </div>
  <section class="feature-list-blog">

    <el-col class="wrapper-feature-list-blog container-blog">
      <Carousel v-model="data.progress">
        <Slide v-for="(slide, index) in data.blogs" :key="index">
          <MoleculesItemBlog :blogs="slide" />
        </Slide>
      </Carousel>
      <AtomsPaginationBlog v-model="pagination" @change="onPageChange" />
    </el-col>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { chunkArray } from "@/utils/helpers"
import type { Blog, BlogResponse } from "@/types"
import { useBreakpoint } from '@/composables/useBreakpoint'
import { useBlog } from '@/api/useBlog'
import { PAGINATION_LIST_BLOG, PAGINATION_LIST_BLOG_DEFAULT } from "~/utils/constants"

const { breakpoint } = useBreakpoint()
const { getBlogs } = useBlog()
const dataBlogs = ref<BlogResponse>()
const data = ref<{ blogs: Blog[][]; progress: number, total: number }>({
  blogs: [],
  progress: 0,
  total: 0,
})

const itemsPerSlide = computed(() => {
  if (breakpoint.value === 'xl' || breakpoint.value === 'lg') return PAGINATION_LIST_BLOG
  if (breakpoint.value === 'md') return PAGINATION_LIST_BLOG_DEFAULT
  return PAGINATION_LIST_BLOG
})

const processJobChunks = (blogs: BlogResponse) => {
  const values = chunkArray(blogs.blogs, itemsPerSlide.value)
  data.value = {
    blogs: values,
    progress: 0,
    total: values.length,
  }
}

const fetchBlogs = async (page?: number) => {
  dataBlogs.value = await getBlogs(page)
  if (dataBlogs.value) {
    processJobChunks(dataBlogs.value)    
  }
}

const onPageChange = (page: number) => {
  fetchBlogs(page)
}

onMounted(() => {
  fetchBlogs()
})


const pagination = computed(() => {
  return dataBlogs.value?.pagination
    ? { progress: dataBlogs.value.pagination.current_page || 0, total: dataBlogs.value.pagination.last_page || 0 }
    : undefined
})
</script>

<style lang="scss" scoped>
@use "index.scss";
</style>
