<template>
	<view class="warp">
		<view class="example-info">宫格组件主要使用场景如：商品推荐列表、热门内容等</view>
		<view class="example-title">默认样式（3列）</view>
		<view class="example-body">
			<aemp-grid :column="3" :highlight="true" @change="change" :data="list">
			</aemp-grid>
		</view>
		<view class="example-title">无边框（3列）</view>
		<view class="example-body">
			<aemp-grid :column="3" :show-border="false" :square="false" @change="change" :data="list">
			</aemp-grid>
		</view>

		<view class="example-title">矩形宫格（3列）</view>
		<view class="example-body">
			<aemp-grid :column="3" :square="false" :highlight="false" @change="change" :data="list">
			</aemp-grid>
		</view>
		<view class="example-title">边框颜色（4列）</view>
		<view class="example-body">
			<aemp-grid :column="4" border-color="#03a9f4" @change="change" :data="list">
			</aemp-grid>
		</view>
	</view>
</template>

<script>
	import aempGrid from '../../components/aemp-grid/aemp-grid';
	export default {
		config: {
			navigationBarTitleText: "Grid 栅格布局"
		},
		components: {
			aempGrid
		},
		data() {
			return {
				list: [{
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png',
						text: '新浪'
					},
					{
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png',
						text: '微信'
					},
					{
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png',
						text: 'QQ'
					},
					{
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-6.png',
						text: '抖音'
					},
					{
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-7.png',
						text: '百度'
					},
					{
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-8.png',
						text: '支付宝'
					},
					{
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-9.png',
						text: '字节跳动'
					},
					{
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-4.png',
						text: '手机'
					},
					{
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-5.png',
						text: '工具'
					}
				]
			}
		},
		methods: {
			change(e) {
				let {
					index
				} = e.detail
				this.$api.showToast({
							title:`点击第${index}项`
						});
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

	.image {
		width: 50px;
		height: 50px;
	}

	.text {
		font-size: 26px;
		margin-top: 10px;
	}
</style>