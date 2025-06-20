<script setup>
import { getCategoryFilterServer, getSubCategoryServer } from '@/api/categories'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import GoodsCard from '../Home/components/GoodsCard.vue'

// 获取面包屑
const router = useRoute()

const filterList = ref([])
const getCategoryFilter = async (id) => {
  const res = await getCategoryFilterServer(id)
  filterList.value = res.result
}

onMounted(() => {
  getCategoryFilter(router.params.id)
})

// 获取子分类
const subCategoryList = ref([])
const getSubCategory = async (data) => {
  const res = await getSubCategoryServer(data)
  subCategoryList.value = res.result
}
onMounted(() => {
  getSubCategory({
    categoryId: 1005000,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'
  })
})
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${filterList.parentId}` }"
          >{{ filterList.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ filterList.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs>
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body">
        <!-- 商品列表-->
        <GoodsCard
          v-for="item in subCategoryList.items"
          :good="item"
          :key="item.value"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
