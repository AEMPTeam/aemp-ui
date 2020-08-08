<template>
	<view>
		<view class="example-info">加载更多组件用于页面加载更多数据时，页面底部显示内容等场景。</view>
		<view class="example-title">基本用法</view>
		<view class="example-body">
			<aemp-load-more :status="status" />
		</view>
		<view class="example-title">修改默认文字</view>
		<view class="example-body">
			<aemp-load-more :status="status" :content-text="contentText" />
		</view>
		<view class="example-title">改变颜色</view>
		<view class="example-body">
			<aemp-load-more color="#007AFF" :status="status" />
		</view>
		<view class="example-title">指定加载图标样式 - 按平台自动选择样式</view>
		<view class="example-body">
			<aemp-load-more iconType="auto" :status="status" />
		</view>
		<view class="example-title">指定加载图标样式 - 环形</view>
		<view class="example-body">
			<aemp-load-more iconType="circle" :status="status" />
		</view>
		<view class="example-title">指定加载图标样式 - 雪花"</view>
		<view class="example-body">
			<aemp-load-more iconType="snow" :status="status" />
		</view>
		<view class="example-title">指定加载图标大小</view>
		<view class="example-body">
			<aemp-load-more iconType="snow" :iconSize="36" :status="status" />
		</view>
		<view class="example-title">点击事件</view>
		<view class="example-body">
			<aemp-load-more :status="status" @clickLoadMore="clickLoadMore" />
		</view>
		<view class="example-title">改变组件状态</view>
		<radio-group class="list" @change="onChange">
			<view v-for="(item, index) in statusTypes" :key="index" class="list-item">
				<view class="list-item__container">
					<view class="list-item__content">
						<text class="list-item__content-title">{{ item.text }}</text>
					</view>
					<view class="list-item__extra">
						<radio :value="item.value" :checked="item.checked" />
					</view>
				</view>
			</view>
		</radio-group>
	</view>
</template>
<script>
	import aempLoadMore from '../../components/aemp-load-more/aemp-load-more';
	export default {
		components: {
			aempLoadMore
		},
		config: {
			navigationBarTitleText: "加载更多 LoadMore"
		},
		data() {
			return {
				status: 'more',
				statusTypes: [{
					value: 'more',
					text: '加载前',
					checked: true
				}, {
					value: 'loading',
					text: '加载中',
					checked: false
				}, {
					value: 'noMore',
					text: '没有更多',
					checked: false
				}],
				contentText: {
					contentdown: '查看更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				}
			}
		},
		methods: {
			onChange(e) {
				this.status = e.detail.value
			},
			clickLoadMore(e) {
				this.$api.showToast({
					icon: 'none',
					title: "当前状态：" + e.detail.status
				})
			}
		}
	}
</script>

<style lang="scss">
	$border-color:#e5e5e5;
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

	.list {
		background-color: #fff;
	}

	.example-body {
		padding: 6px 15px;
		display: block;
	}

	.list-item {
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-bottom-color: $border-color;
	}

	.list-item__container {
		display: flex;
		width: 100%;
		box-sizing: border-box;
		padding: 12px 15px;
		flex: 1;
		position: relative;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.list-item__content-title {
		font-size: 25px;
	}
</style>
