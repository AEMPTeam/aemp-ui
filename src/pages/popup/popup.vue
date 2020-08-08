<template>
  <view>
    <view class="example-info">弹出层组件用于弹出一个覆盖到页面上的内容，使用场景如：底部弹出分享弹窗、页面插屏广告等。</view>
    <view class="example-title">基本用法</view>
    <view class="example-body">
      <button class="button" size="default" @tap="togglePopup('top', 'popup')">顶部弹出 popup</button>
      <button class="button" type="default" @tap="togglePopup('center', 'popup')">中间弹出 popup</button>
      <button class="button" type="default" @tap="togglePopup('bottom', 'popup')">底部弹出 popup</button>
    </view>
    <view class="example-title">自定义弹出层</view>
    <view class="example-body">
      <button class="button" type="default" @tap="togglePopup('center', 'tip')">提示框</button>
      <button class="button" type="default" @tap="togglePopup('center', 'image')">插屏广告</button>
      <button class="button" type="default" @tap="togglePopup('bottom', 'share')">底部分享</button>
    </view>
    <aemp-popup ref="popup" :type="type" @change="change">{{ content }}</aemp-popup>
    <aemp-popup :show="show" :type="type" :custom="true" :mask-click="false" @change="change">
      <view class="tip">
        <view class="tip-title">警告</view>
        <view class="tip-content">这是一个通过自定义 popup，自由扩展的 警告弹窗。点击遮罩不会关闭弹窗。</view>
        <view class="tip-group-button">
          <view class="tip-button" @tap="cancel('tip')">取消</view>
          <view class="tip-button" @tap="cancel('tip')">确定</view>
        </view>
      </view>
    </aemp-popup>
    <!-- 插屏弹窗 -->
    <aemp-popup ref="image" :type="type" :custom="true" :mask-click="true" @change="change">
      <view class="image">
        <view class="image-close" @tap="cancel('image')">
          <view class="img-close">×</view>
        </view>
        <template-platform target="h5">
          <image class="image" :src="require('../../common/logo.png')"></image>
        </template-platform>
        <template-platform target="wx">
          <image class="image" :src="'../../common/logo.png'"></image>
        </template-platform>
        <template-platform target="swan">
          <image class="image" :src="'../../common/logo.png'"></image>
        </template-platform>
        <template-platform target="my">
          <image class="image" :src="'../../common/logo.png'"></image>
        </template-platform>
        <template-platform target="tt">
          <image class="image" :src="'../../common/logo.png'"></image>
        </template-platform>
        <template-platform target="qq">
          <image class="image" :src="'../../common/logo.png'"></image>
        </template-platform>
      </view>
    </aemp-popup>
    <!-- 底部分享弹窗 -->
    <aemp-popup ref="share" :type="type" :custom="true" @change="change">
      <view class="share">
        <view class="share-title">分享到</view>
        <view class="share-content">
          <view v-for="(item, index) in bottomData" :key="index" class="share-content-box">
            <view class="share-content-image">
              <image :src="item.icon" class="image" />
            </view>
            <view class="share-content-text">{{ item.text }}</view>
          </view>
        </view>
        <view class="share-btn" @tap="cancel('share')">取消分享</view>
      </view>
    </aemp-popup>
  </view>
</template>

<script>
  import aempPopup from '../../components/aemp-popup/aemp-popup'
  export default {
    config: {
      navigationBarTitleText: "弹出层 Popup"
    },
    components: {
      aempPopup
    },
    data() {
      return {
        show: false,  //是否显示提示框弹框
        type: '', //弹框类型
        content: '顶部弹 popup',  //弹框文字
        bottomData: [{  
            text: '微信',
            icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png',
            name: 'wx'
          },
          {
            text: '支付宝',
            icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-8.png',
            name: 'wx'
          },
          {
            text: 'QQ',
            icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png',
            name: 'qq'
          },
          {
            text: '新浪',
            icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png',
            name: 'sina'
          },
          {
            text: '百度',
            icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-7.png',
            name: 'copy'
          },
          {
            text: '其他',
            icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-5.png',
            name: 'more'
          } 
        ] //底部分享弹框数据
      }
    },
    methods: {
      // 弹出弹框
      togglePopup(type, open) {
        switch (type) {
          case 'top':
            this.content = '顶部弹出 popup'
            break
          case 'bottom':
            this.content = '底部弹出 popup'
            break
          case 'center':
            this.content = '居中弹出 popup'
            break
        }
        this.type = type
        if (open === 'tip') {
          this.show = true
        } else {
          this.$refs[open].open()
        }
      },
      // 隐藏弹框
      cancel(type) {
        if (type === 'tip') {
          this.show = false
          return
        }
        this.$refs[type].close()
      },

      change(e) {
        console.log(e.show)
      }
    }
  }
</script>
<style scoped>
  .page {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #efeff4
  }

  view {
    font-size: 28px;
    line-height: inherit
  }

  .example {
    padding: 0 30px 30px
  }

  .example-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 32px;
    color: #464e52;
    padding: 30px 30px 30px 50px;
    margin-top: 20px;
    position: relative;
    background-color: #fdfdfd;
    border-bottom: 1px #f5f5f5 solid
  }

  .example-title__after {
    position: relative;
    color: #031e3c
  }

  .example-title:after {
    content: '';
    position: absolute;
    left: 30px;
    margin: auto;
    top: 0;
    bottom: 0;
    width: 6px;
    height: 32px;
    background-color: #ccc
  }

  .example .example-title {
    margin: 40px 0
  }

  .example-body {
    padding: 30px;
    background: #fff
  }

  .example-info {
    padding: 30px;
    color: #3b4144;
    background: #fff
  }

  .example-body {
    padding: 10px 30px;
  }

  .button {
    margin: 20px 0;
  }

  /* 提示窗口 */
  .tip {
    padding: 30px;
    width: 600px;
    background: #fff;
    box-sizing: border-box;
    border-radius: 20px;
  }

  .tip-title {
    text-align: center;
    font-weight: bold;
    font-size: 32px;
    color: #333;
  }

  .tip-content {
    padding: 30px;
    font-size: 28px;
    color: #666;
    text-align: center;
  }

  .tip-group-button {
    margin-top: 20px;
    display: flex;
  }

  .tip-button {
    width: 100%;
    text-align: center;
    font-size: 28px;
    color: #3b4144;
  }

  /* 插屏广告 */
  .image {
    position: relative;
    width: 400px;
    height: 400px;
  }

  .image .image {
    width: 100%;
    height: 100%;
  }

  .image-close {
    position: absolute;
    right: -60px;
    top: -60px;
    z-index: 2;
  }
  .img-close{
    font-size: 60px;
    color: #fff;

  }

  /* 底部分享 */
  .share {
    background: #fff;
  }

  .share-title {
    line-height: 60px;
    font-size: 24px;
    padding: 15px 0;
    text-align: center;
  }

  .share-content {
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
  }

  .share-content-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    box-sizing: border-box;
  }

  .share-content-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    overflow: hidden;
    border-radius: 10px;
  }

  .share-content-image .image {
    width: 100%;
    height: 100%;
  }

  .share-content-text {
    font-size: 26px;
    color: #333;
    padding-top: 5px;
    padding-bottom: 10px;
  }

  .share-btn {
    height: 90px;
    line-height: 90px;
    border-top: 1px #f5f5f5 solid;
    text-align: center;
    color: #666;
    font-size: 30px;
  }
</style>