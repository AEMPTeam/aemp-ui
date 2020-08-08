<template>
	<view>
		<view class="example-title">基本用法</view>
		<view class="example-body">
			<aemp-search-bar @confirm="search" @input="input" @cancel="cancel" />
			<view class="search-result">
				<text class="search-result-text">当前输入为：{{ searchVal }}</text>
			</view>
		</view>
		<view class="example-title">自定义样式</view>
		<view class="example-body">
			<aemp-search-bar placeholder="自定义placeholder" @confirm="search" />
			<aemp-search-bar placeholder="自定义背景色" bgColor="#EEEEEE" @confirm="search" />
			<aemp-search-bar radius="100" placeholder="自定义圆角" @confirm="search" />
		</view>
		<view class="example-title">控制清除/取消按钮</view>
		<view class="example-body">
			<aemp-search-bar radius="5" placeholder="一直显示" clearButton="always" cancelButton="always" @confirm="search" />
			<aemp-search-bar radius="5" placeholder="自动显示隐藏" clearButton="auto" cancelButton="auto" @confirm="search" />
			<aemp-search-bar radius="100" placeholder="一直不显示" clearButton="none" cancelButton="none" @confirm="search" />
		</view>
	</view>
</template>

<script>
	import aempSearchBar from '../../components/aemp-search-bar/aemp-search-bar'
	export default {
		config: {
			navigationBarTitleText: "搜索栏 SearchBar"
		},
		components: {
			aempSearchBar
		},
		data() {
			return {
				searchVal: ''
			}
		},
		methods: {
			search(res) {
				this.$api.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},
			input(res) {
				this.searchVal = res.value
			},
			cancel(res) {
				this.$api.showToast({
					title: '点击取消，输入值为：' + res.value,
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


	.example-body {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
	}

	.search-result {
		margin-top: 10px;
		margin-bottom: 20px;
		text-align: center;
	}

	.search-result-text {
		text-align: center;
		font-size: 20px;
	}
</style>
