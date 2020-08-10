<template>
    <view class="page">
    <page-head title="AEMP UI" desc="AEMP UI 是一款基于 AEMP 框架开发的多端 UI 组件库"></page-head>
    <view class="page-content">
      <view v-for="(kind, kindIndex) in list" :key="kindIndex">
        <view class="kind-list-item">
          <view class="kind-list-item-head" @tap="triggerCollapse(kindIndex)">
            <view class="kind-list-item-name">{{kind.name}}</view>
            <template-platform target="h5">
              <image class="kind-list-item-img" :src="require('../common/images/kind/' + kind.id + '.png') "></image>
            </template-platform>
            <template-platform target="wx">
              <image class="kind-list-item-img" :src="'../common/images/kind/' + kind.id + '.png'"></image>
            </template-platform>
            <template-platform target="my">
              <image class="kind-list-item-img" :src="'../common/images/kind/' + kind.id + '.png'"></image>
            </template-platform>
            <template-platform target="swan">
              <image class="kind-list-item-img" :src="'../common/images/kind/' + kind.id + '.png'"></image>
            </template-platform>
             <template-platform target="tt">
              <image class="kind-list-item-img" :src="'../common/images/kind/' + kind.id + '.png'"></image>
            </template-platform>
             <template-platform target="qq">
              <image class="kind-list-item-img" :src="'../common/images/kind/' + kind.id + '.png'"></image>
            </template-platform>
             <template-platform target="app">
              <image class="kind-list-item-img" :src="require('../common/images/kind/' + kind.id + '.png')"></image>
            </template-platform>
          </view>
          <view class="kind-list-item-body" :class="{ 'kind-list-item-body-show': kind.open } ">
            <view v-for="(page, pageIndex) in kind.pages" :key="pageIndex">
              <view class="kind-list-cell" @tap="goDetailPage(page.path)">{{page.name}}</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import PageHead from "../components/PageHead";

  export default {
     config: {
      navigationBarTitleText: "AEMP UI"
    },
    components: {
      "page-head": PageHead
    },
    data() {
      return {
        list: [
          {
            id: "base",
            name: "基础组件",
            open: false,
            pages: [
              { name: "Icons 图标", path: "/pages/icons/icons" },
              { name: "Popup 弹出层", path: "/pages/popup/popup" },
            ]
          },
          {
            id: "view",
            name: "视图组件",
            open: false,
            pages: [
              { name: "Badge 数字角标", path: "/pages/badge/badge" },
              { name: "CountDown 倒计时", path: "/pages/countdown/countdown" },
              { name: "Tag 标签", path: "/pages/tag/tag" },
              { name: "Steps 步骤条", path: "/pages/steps/steps" },
              { name: "SwiperDot 轮播图指示点", path: "/pages/swiper-dot/swiper-dot" },
              { name: "LoadMore 加载更多", path: "/pages/load-more/load-more" },
              { name: "NoticeBar 通告栏", path: "/pages/notice-bar/notice-bar" }
            ]
          },
          {
            id: "form",
            name: "表单组件",
            open: false,
            pages: [
              { name: "Rate 评分", path: "/pages/rate/rate" },
              { name: "SearchBar 搜索栏", path: "/pages/search-bar/search-bar" },
              { name: "NumberBox 数字输入框", path: "/pages/number-box/number-box" },            
              { name: "Pagination 分页器", path: "/pages/pagination/pagination" },
              { name: "Combox 组合框", path: "/pages/combox/combox" }
            ]
          },
          {
            id: "layout",
            name: "布局组件",
            open: false,
            pages: [
              { name: "List 列表", path:"/pages/list/list" },
              { name: "Card 卡片", path:"/pages/card/card" },
              { name: "Grid 栅格布局", path:"/pages/grid/grid" }
              ]
          },
          {
            id: "nav",
            name: "导航组件",
            open: false,
            pages: [
              { name: "Drawer 抽屉", path: "/pages/drawer/drawer" },
              { name: "IndexedList 索引列表", path: "/pages/indexed-list/indexed-list" },
              { name: "SegmentedControl 分段器", path: "/pages/segmented-control/segmented-control" },
              { name: "NavBar 导航栏", path: "/pages/nav-bar/nav-bar" },
               { name: "Tabbar 标签栏", path: "/pages/tabbar/tabbar" }
            ]
          },
          {
            id:"high",
            name: "高阶组件",
            open: false,
            pages: [
                { name: "Calendar 日历", path: "/pages/calendar/calendar" },
                { name: "GoodsNav 商品导航", path: "/pages/goods-nav/goods-nav" },
                { name: "Fav 收藏按钮", path: "/pages/fav/fav" },
              ]
          },
          {
            id:"finance",
            name: "金融组件",
            open: false,
            pages: [
                { name: "支付密码", path: "/pages/payment-password/payment-password" },
                { name: "结果页", path: "/pages/result-page/result-page" },
                { name: "图表", path: "/pages/ucharts/ucharts" },
              ]
          }
        ]
      };
    },
    methods: {
      triggerCollapse(index) {
        for (let i = 0; i < this.list.length; i++) {
          let item = this.list[i];
          item.open = index === i ? !item.open : false;
          this.list[i] = item;
        }
      },
      goDetailPage(path) {
        this.$api.navigateTo({
          url: path
        });
      }
    }
  };
</script>

<style scoped>
 .page {
  background-color: #F8F8F8;
}

.page-content {
  padding: 30px;
}

.kind-list-item {
  margin: 20px 0;
  background-color: #fff;
  overflow: hidden;
}

.kind-list-item:first-child {
  margin-top: 0;
}

.kind-list-item-head {
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
  justify-content: space-between;
}

.kind-list-item-head-show {
  opacity: 0.4;
}

.kind-list-item-name {
  line-height: 60px;
}

.kind-list-item-img {
  width: 60px;
  height: 60px;
}

.kind-list-item-body {
  margin: 0 40px;
  height: 0;
  overflow: hidden;
}

.kind-list-item-body-show {
  height: auto;
}

.kind-list-cell {
  margin: 10px 0;
  height: 70px;
  line-height: 70px;
}

</style>