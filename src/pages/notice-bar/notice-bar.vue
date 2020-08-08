<template>
	<view>
		<view class="example-info">通告栏组件多用于系统通知，广告通知等场景，可自定义图标，颜色，展现方式等。</view>
		<view class="example-title">基本用法</view>
		<view class="example-body">
			<aemp-notice-bar :single="true" text="[单行] AEMP小程序平台，开发一次、多端覆盖！" />
			<aemp-notice-bar text="[多行] AEMP小程序平台正式发布，开发一次，同时发布H5、微信小程序、支付宝小程序、百度小程序、头条小程序、QQ小程序等6大平台。" />
		</view>
		<view class="example-title">加图标</view>
		<view class="example-body">
			<aemp-notice-bar :single="true" :show-icon="true" text="AEMP小程序开发平台发布，开发一次、多端覆盖！" />
			<aemp-notice-bar :show-icon="true" text="AEMP小程序开发平台正式发布，开发一次，同时发布到H5、微信小程序、支付宝小程序、百度小程序、头条小程序、QQ小程序等6大平台。" />
		</view>
		<view class="example-title">文字滚动</view>
		<view class="example-body">
			<aemp-notice-bar :scrollable="true" :single="true" text="AEMP小程序开发平台发布，开发一次、多端覆盖！" />
			<aemp-notice-bar :show-icon="true" :scrollable="true" :single="true" text="AEMP小程序开发平台正式发布，开发一次，同时发布到H5、微信小程序、支付宝小程序、百度小程序、头条小程序、QQ小程序等6大平台。" />
			<aemp-notice-bar :scrollable="true" text="AEMP小程序开发平台正式发布，开发一次，同时发布到H5、微信小程序、支付宝小程序、百度小程序、头条小程序、QQ小程序等6大平台。" />
		</view>
		<view class="example-title">查看更多</view>
		<view class="example-body">
			<aemp-notice-bar :show-get-more="true" :single="true" text="AEMP小程序开发平台发布，开发一次、多端覆盖！" @getmore="getMore" />
			<aemp-notice-bar :show-get-more="true" :show-icon="true" :single="true" more-text="查看更多" text="AEMP小程序开发平台发布，开发一次、多端覆盖！"
			 @getmore="getMore" />
		</view>
		<view class="example-title">修改颜色</view>
		<view class="example-body">
			<aemp-notice-bar :single="true" more-text="查看更多" color="red" background-color="#eee" text="AEMP小程序开发平台正式发布，开发一次，同时发布到H5、微信小程序、支付宝小程序、百度小程序、头条小程序、QQ小程序等6大平台。" />
			<aemp-notice-bar :single="true" :show-get-more="true" more-text="查看更多" more-color="blue" color="red" background-color="#eee"
			 text="AEMP小程序开发平台正式发布，开发一次，同时发布到H5、微信小程序、支付宝小程序、百度小程序、头条小程序、QQ小程序等6大平台。" @getmore="getMore" />
			<aemp-notice-bar :show-icon="true" color="blue" text="AEMP小程序开发平台正式发布，开发一次，同时发布到H5、微信小程序、支付宝小程序、百度小程序、头条小程序、QQ小程序等6大平台。" />
		</view>
		<view class="example-title">关闭按钮</view>
		<view class="example-body">
			<aemp-notice-bar :show-close="true" :single="true" text="AEMP小程序开发平台发布，开发一次、多端覆盖！" />
			<aemp-notice-bar :show-close="true" :show-icon="true" more-text="查看更多" text="AEMP小程序开发平台发布，开发一次、多端覆盖！" />
			<aemp-notice-bar :show-close="true" :show-icon="true" text="AEMP小程序开发平台发布，开发一次、多端覆盖！" />
			<aemp-notice-bar :show-close="true" :show-icon="true" :single="true" text="AEMP小程序开发平台正式发布，开发一次，同时发布到H5、微信小程序、支付宝小程序、百度小程序、头条小程序、QQ小程序等6大平台。" />
		</view>
	</view>
</template>

<script>
	import aempNoticeBar from '../../components/aemp-notice-bar/aemp-notice-bar';
	export default {
		components: {
			aempNoticeBar
		},
		config: {
			navigationBarTitleText: "通告栏 NoticeBar"
		},
		methods: {
			getMore() {
				this.$api.showToast({
					title: '点击查看更多',
					icon: 'none'
				})
			}
		}
	}
</script>

<style lang="scss">
	.example-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32px;
		color: #464e52;
		padding: 30px 30px 30px 50px;
		margin: 40px 0;
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

	.example-info {
		padding: 30px;
		color: #3b4144;
		background: #fff
	}

	.example-body {
		padding: 5px 0;
		padding-top: 20px;
		flex-direction: column;
		display: block;
	}
</style>
