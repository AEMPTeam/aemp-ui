<template>
	<view class="example">
		<aemp-nav-bar color="#ffffff" background-color="#007AFF" :status-bar="true" left-icon="arrowleft" left-text="返回" title="标题"
		 @clickLeft="back" />
		<view class="example-info">本导航栏为自定义组件，并非原生导航栏。除非原生导航栏无法满足需求，否则不推荐使用自定义导航栏组件。</view>
		<view class="example-title">基本用法</view>
		<view class="example-body">
			<aemp-nav-bar left-icon="arrowleft" title="标题" @clickLeft="back" />
		</view>

		<view class="example-title">左右显示文字</view>
		<view class="example-body">
			<aemp-nav-bar left-icon="arrowleft" right-text="菜单" left-text="返回" title="标题" @clickLeft="back" />
		</view>
		<view class="example-title">插入slot</view>
		<view class="example-body">
			<aemp-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-icon="scan" @clickLeft="showCity"
			 @clickRight="scan">
				<view slot="left">
					<view class="city">
						<view><text class="nav-bar-text">{{ city }}</text></view>
						<aemp-icons type="arrowdown" color="#333333" size="22" />
					</view>
				</view>
				<view class="input-view">
					<aemp-icons class="input-icon" type="search" size="22" color="#666666" />
					<input confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词" @confirm="confirm">
				</view>
			</aemp-nav-bar>
		</view>
	</view>
</template>

<script>
	import aempNavBar from '../../components/aemp-nav-bar/aemp-nav-bar';
	import aempIcons from '../../components/aemp-icons/aemp-icons';
	export default {
		components: {
			aempNavBar,
			aempIcons
		},
		config: {
			navigationBarTitleText: "导航栏 NavBar"
		},
		data() {
			return {
				city: '北京'
			}
		},
		methods: {
			back() {
				this.$api.navigateBack({
					delta: 1
				})
			},
			showMenu() {
				this.$api.showToast({
					title: '菜单'
				})
			},
			clickLeft() {

				this.$api.showToast({
					title: '左侧按钮'
				})
			},
			search() {
				this.$api.showToast({
					title: '搜索'
				})
			},
			showCity() {

				this.$api.showToast({
					title: '选择城市'
				})
			},
			scan() {
				this.$api.showToast({
					title: '扫码'
				})
			},
			confirm() {
				this.$api.showToast({
					title: '搜索'
				})
			}
		},
		onPullDownRefresh() {
			console.log('onPullDownRefresh')
			setTimeout(function() {
				this.$api.stopPullDownRefresh()
				console.log('stopPullDownRefresh')
			}, 1000)
		}
	}
</script>

<style lang="scss" scoped>
	$nav-height: 60px;
	$font-size-base:30px;
	$bg-color-grey:#f8f8f8;
	.example{
		background-color:$bg-color-grey;
	}

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

	.nav-bar-text {
		font-size: $font-size-base;
	}

	.city {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		margin-left: 4px;
	}

	.input-view {
		display: flex;
		flex-direction: row;
		flex: 1;
		background-color: $bg-color-grey;
		height: $nav-height;
		border-radius: 15px;
		padding: 0 15px;
		flex-wrap: nowrap;
		margin: 7px 0;
		line-height: $nav-height;
	}

	.input-icon {
		line-height: $nav-height;
	}

	.nav-bar-input {
		height: $nav-height;
		line-height: $nav-height;
		padding: 0 5px;
		font-size: $font-size-base;
		background-color: $bg-color-grey;
	}

	.example-body {
		display: block;
		padding: 0;
	}

	.example-info {
		padding: 30px;
		color: #3b4144;
		background: #fff
	}
</style>
