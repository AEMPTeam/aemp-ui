<script type="config">
{
    config: {
        pages: [
            "pages/index",
            "pages/badge/badge",
            "pages/calendar/calendar",
            "pages/card/card",
            "pages/grid/grid",
            "pages/countdown/countdown",
            "pages/drawer/drawer",
            "pages/icons/icons",
            "pages/fav/fav",
            "pages/goods-nav/goods-nav",
            "pages/indexed-list/indexed-list",
            "pages/tag/tag",
            "pages/search-bar/search-bar",
            "pages/list/list",
            "pages/rate/rate",
            "pages/number-box/number-box",
            "pages/pagination/pagination",
            "pages/segmented-control/segmented-control",
            "pages/steps/steps",
            "pages/swiper-dot/swiper-dot",
            "pages/nav-bar/nav-bar",
            "pages/tabbar/tabbar",
            "pages/combox/combox",
            "pages/payment-password/payment-password",
            "pages/popup/popup",
            "pages/load-more/load-more",
            "pages/notice-bar/notice-bar",
            "pages/result-page/result-page",
            "pages/ucharts/ucharts"
        ],
        "permission": {
          "scope.userLocation": {
            "desc": "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶持续后台定位
          }
        },
        window: {
            navigationBarBackgroundColor: "#3eaf7c",
            navigationBarTextStyle: "white"
        },
        networkTimeout: {
            request: 30000
        }
    }
}
</script>
<script>
export default {
  onLaunch() {
    console.log(this.$api);
  }
};
</script>

<style>
.aemp-flex {
  display: flex;
  flex-direction: row;
}

.aemp-flex-item {
  flex: 1;
}

.aemp-row {
  flex-direction: row;
}

.aemp-column {
  flex-direction: column;
}

.aemp-bg-red {
  background: #f76260;
  color: #fff;
}

.aemp-bg-green {
  background: #09bb07;
  color: #fff;
}

.aemp-bg-blue {
  background: #007aff;
  color: #fff;
}

.aemp-title {
  font-size: 30px;
  font-weight: 500;
  padding: 30px 0;
}

.aemp-little-title {
  display: block;
  font-size: 25px;
}

.aemp-button-group {
  padding: 10px 0;
}

.aemp-button-group button {
  margin: 20px 0;
  width: 100%;
}

.page-content {
  padding: 0 30px;
}
</style>
