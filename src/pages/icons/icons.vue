<template>
  <view class="page">
    <view class="example-info">图标组件方便用户在设计页面的时候，减少小图片的使用。可方便自定义图标单色、尺寸</view>
    <view class="example-title"><text>基础图标</text>
      <view class="right">
        <text>显示{{ checked?' code':'图标名' }}</text>
        <switch :checked="checked" class="switch" @change="change" />
      </view>
    </view>
    <view class="example-body">
      <view v-for="(item,index) in iconClassList" :key="index" class="icon-item">
        <aemp-icons :type="item.name" :color="activeIndex === index?'#007aff':'#8f8f94'" size="40"
          @tap="switchActive(index)" />
        <text :style="{color:activeIndex === index?'#007aff':'#8f8f94'}">{{ checked? item.code: item.name }}</text>
      </view>
    </view>
  </view>
</template>

<script>
  import aempIcons from '../../components/aemp-icons/aemp-icons'
  export default {
    config: {
      navigationBarTitleText: "图标 Icons"
    },
    components: {
      aempIcons
    },
    data() {
      return {
        iconClassList: [{
					"name": "arrowdown",
					"code": "e581"
				}, {
					"name": "arrowleft",
					"code": "e582"
				}, {
					"name": "arrowright",
					"code": "e583"
				}, {
					"name": "arrowup",
					"code": "e580"
				}, {
					"name": "arrowthindown",
					"code": "e585"
				}, {
					"name": "arrowthinleft",
					"code": "e586"
				}, {
					"name": "arrowthinright",
					"code": "e587"
				}, {
					"name": "arrowthinup",
					"code": "e584"
				}, {
					"name": "back",
					"code": "e471"
				}, {
					"name": "forward",
					"code": "e470"
				}, {
					"name": "camera",
					"code": "e301"
				}, {
					"name": "camera-filled",
					"code": "e7ef"
				}, {
					"name": "cart",
					"code": "e7f5"
				}, {
					"name": "cart-filled",
					"code": "e7f4"
				}, {
					"name": "chat",
					"code": "e263"
				}, {
					"name": "chat-filled",
					"code": "e847"
				}, {
					"name": "chatboxes",
					"code": "e203"
				}, {
					"name": "chatboxes-filled",
					"code": "e233"
				}, {
					"name": "chatbubble",
					"code": "e202"
				}, {
					"name": "chatbubble-filled",
					"code": "e232"
				}, {
					"name": "checkbox",
					"code": "e7fa"
				}, {
					"name": "checkbox-filled",
					"code": "e442"
				}, {
					"name": "close",
					"code": "e404"
				}, {
					"name": "clear",
					"code": "e434"
				}, {
					"name": "circle",
					"code": "e411"
				}, {
					"name": "circle-filled",
					"code": "e441"
				}, {
					"name": "checkmarkempty",
					"code": "e472"
				}, {
					"name": "closeempty",
					"code": "e460"
				}, {
					"name": "cloud-download",
					"code": "e8e4"
				}, {
					"name": "cloud-download-filled",
					"code": "e8e9"
				}, {
					"name": "cloud-upload",
					"code": "e8e6"
				}, {
					"name": "cloud-upload-filled",
					"code": "e8e5"
				}, {
					"name": "contact",
					"code": "e100"
				}, {
					"name": "contact-filled",
					"code": "e130"
				}, {
					"name": "download",
					"code": "e403"
				}, {
					"name": "download-filled",
					"code": "e8a4"
				}, {
					"name": "email",
					"code": "e201"
				}, {
					"name": "email-filled",
					"code": "e231"
				}, {
					"name": "mail-open",
					"code": "e84e"
				}, {
					"name": "mail-open-filled",
					"code": "e84d"
				}, {
					"name": "eye",
					"code": "e824"
				}, {
					"name": "eye-filled",
					"code": "e568"
				}, {
					"name": "eye-slash",
					"code": "e823"
				}, {
					"name": "eye-slash-filled",
					"code": "e822"
				}, {
					"name": "hand-thumbsdown",
					"code": "e83c"
				}, {
					"name": "hand-thumbsdown-filled",
					"code": "e83b"
				}, {
					"name": "hand-thumbsup",
					"code": "e83f"
				}, {
					"name": "hand-thumbsup-filled",
					"code": "e83d"
				}, {
					"name": "gear",
					"code": "e502"
				}, {
					"name": "gear-filled",
					"code": "e532"
				}, {
					"name": "flag",
					"code": "e508"
				}, {
					"name": "flag-filled",
					"code": "e825"
				}, {
					"name": "heart",
					"code": "e840"
				}, {
					"name": "heart-filled",
					"code": "e83e"
				}, {
					"name": "help",
					"code": "e505"
				}, {
					"name": "help-filled",
					"code": "e535"
				}, {
					"name": "image",
					"code": "e363"
				}, {
					"name": "image-filled",
					"code": "e877"
				}, {
					"name": "images",
					"code": "e87b"
				}, {
					"name": "images-filled",
					"code": "e87a"
				}, {
					"name": "home",
					"code": "e500"
				}, {
					"name": "home-filled",
					"code": "e530"
				}, {
					"name": "info",
					"code": "e504"
				}, {
					"name": "info-filled",
					"code": "e534"
				}, {
					"name": "location",
					"code": "e303"
				}, {
					"name": "location-filled",
					"code": "e333"
				}, {
					"name": "locked",
					"code": "e506"
				}, {
					"name": "locked-filled",
					"code": "e856"
				}, {
					"name": "map",
					"code": "e364"
				}, {
					"name": "map-filled",
					"code": "e85c"
				}, {
					"name": "map-pin",
					"code": "e85e"
				}, {
					"name": "map-pin-ellipse",
					"code": "e864"
				}, {
					"name": "mic",
					"code": "e302"
				}, {
					"name": "mic-filled",
					"code": "e332"
				}, {
					"name": "micoff",
					"code": "e360"
				}, {
					"name": "mic-slash-filled",
					"code": "e892"
				}, {
					"name": "minus",
					"code": "e410"
				}, {
					"name": "minus-filled",
					"code": "e440"
				}, {
					"name": "more",
					"code": "e507"
				}, {
					"name": "more-filled",
					"code": "e537"
				}, {
					"name": "navigate",
					"code": "e501"
				}, {
					"name": "navigate-filled",
					"code": "e884"
				}, {
					"name": "paperplane",
					"code": "e503"
				}, {
					"name": "paperplane-filled",
					"code": "e86e"
				}, {
					"name": "person",
					"code": "e101"
				}, {
					"name": "person-filled",
					"code": "e131"
				}, {
					"name": "personadd",
					"code": "e102"
				}, {
					"name": "personadd-filled",
					"code": "e132"
				}, {
					"name": "phone",
					"code": "e200"
				}, {
					"name": "phone-filled",
					"code": "e230"
				}, {
					"name": "plus",
					"code": "e409"
				}, {
					"name": "plus-filled",
					"code": "e439"
				}, {
					"name": "redo",
					"code": "e405"
				}, {
					"name": "redo-filled",
					"code": "e7d9"
				}, {
					"name": "undo",
					"code": "e406"
				}, {
					"name": "undo-filled",
					"code": "e7d6"
				}, {
					"name": "qq",
					"code": "e264"
				}, {
					"name": "weibo",
					"code": "e260"
				}, {
					"name": "weixin",
					"code": "e261"
				}, {
					"name": "pengyouquan",
					"code": "e262"
				}, {
					"name": "refresh",
					"code": "e407"
				}, {
					"name": "refresh-filled",
					"code": "e437"
				}, {
					"name": "refreshempty",
					"code": "e461"
				}, {
					"name": "reload",
					"code": "e462"
				}, {
					"name": "upload",
					"code": "e402"
				}, {
					"name": "upload-filled",
					"code": "e8b1"
				}, {
					"name": "smallcircle",
					"code": "e868"
				}, {
					"name": "smallcircle-filled",
					"code": "e801"
				}, {
					"name": "sound",
					"code": "e590"
				}, {
					"name": "sound-filled",
					"code": "e8a1"
				}, {
					"name": "trash",
					"code": "e401"
				}, {
					"name": "trash-filled",
					"code": "e8dc"
				}, {
					"name": "videocam",
					"code": "e300"
				}, {
					"name": "videocam-filled",
					"code": "e8af"
				}, {
					"name": "star",
					"code": "e408"
				}, {
					"name": "star-filled",
					"code": "e438"
				}, {
					"name": "starhalf",
					"code": "e463"
				}, {
					"name": "spinner-cycle",
					"code": "e465"
				}, {
					"name": "scan",
					"code": "e612"
				}, {
					"name": "search",
					"code": "e466"
				}, {
					"name": "settings",
					"code": "e560"
				}, {
					"name": "compose",
					"code": "e400"
				}, {
					"name": "bars",
					"code": "e563"
				}, {
					"name": "list",
					"code": "e562"
				}, {
					"name": "loop",
					"code": "e565"
				}, {
					"name": "paperclip",
					"code": "e567"
				}, {
					"name": "plusempty",
					"code": "e468"
				}, {
					"name": "pulldown",
					"code": "e588"
				}, {
					"name": "headphones",
					"code": "e8bf"
				}, {
					"name": "shop",
					"shop": "e609"
				}],
        activeIndex: -1,
        checked: false
      }
    },
    methods: {
      change(e) {
        if(e.detail){
          if(process.env.AEMP_ENV === "swan") {
            this.checked = e.detail.checked;
          } else{
            this.checked = e.detail.value;
          }
        } else{
          this.checked = e;  //h5
        }
      },
      switchActive(index) {
        this.activeIndex = index
      }
    }
  }
</script>

<style scoped>
  .page {
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #efeff4
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
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    padding: 30px;
    background: #fff
  }

  .example-info {
    padding: 30px;
    color: #3b4144;
    background: #fff
  }

  .right {
    display: flex;
    align-items: center;
    color: #666;
  }

  .switch {
    transform: scale(0.8);
    margin-left: 5px;
  }

  .icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 10px;
    width: 25%;
    text-align: center;
    white-space: normal;
    word-break: break-all;
    box-sizing: border-box;
  }
</style>
