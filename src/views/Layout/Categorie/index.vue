<script setup>
import { getSubCategoryServer } from '@/api/categories'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import PageBanner from '../components/PageBanner.vue'
import GoodsCard from '../Home/components/GoodsCard.vue'

const categoryData = ref({})

onMounted(async () => {
  const route = useRoute()
  const res = await getSubCategoryServer(route.params.id)
  categoryData.value = res.result
})
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 轮播图 -->
      <PageBanner :distributionSite="2"></PageBanner>
    </div>
    <!-- 分类数据 -->
    <div class="sub-list">
      <h3>全部分类</h3>
      <ul>
        <li v-for="i in categoryData.children" :key="i.id">
          <RouterLink to="/">
            <img :src="i.picture" />
            <p>{{ i.name }}</p>
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="ref-goods" v-for="item in categoryData.children" :key="item.id">
      <div class="head">
        <h3>- {{ item.name }}-</h3>
      </div>
      <div class="body">
        <ul class="goods-list">
          <li v-for="good in item.goods" :key="good.id">
            <GoodsCard :good="good" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;

        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;

      .goods-list {
        width: 990px;
        display: flex;
        flex-wrap: wrap;

        li {
          width: 240px;
          height: 300px;
          margin-right: 10px;
          margin-bottom: 10px;

          &:nth-last-child(-n + 4) {
            margin-bottom: 0;
          }

          &:nth-child(4n) {
            margin-right: 0;
          }
        }
      }
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}
</style>
