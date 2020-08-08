<template>
	<view>
		<view class="example-title">基本用法</view>
		<view class="example-body">
			<aemp-steps :options="list1" active-color="#007AFF" :active="active" />
		</view>
		<view class="example-title">纵向排列</view>
		<view class="example-body">
			<aemp-steps :options="list2" active-color="#007AFF" :active="active" direction="column" />
		</view>
		<button type="primary" @tap="change">改变状态</view>
	</view>
</template>

<script>
	import aempSteps from '../../components/aemp-steps/aemp-steps';
	export default {
		components: {
			aempSteps
		},
		config: {
			navigationBarTitleText: "步骤条 Steps"
		},
		data() {
			return {
				active: 1,
				list1: [{
					title: '事件一'
				}, {
					title: '事件二'
				}, {
					title: '事件三'
				}, {
					title: '事件四'
				}],
				list2: [{
					title: '买家下单',
					desc: '2018-11-11'
				}, {
					title: '卖家发货',
					desc: '2018-11-12'
				}, {
					title: '买家签收',
					desc: '2018-11-13'
				}, {
					title: '交易完成',
					desc: '2018-11-14'
				}]
			}
		},
		methods: {
			change() {
				if (this.active < this.list1.length - 1) {
					this.active += 1
				} else {
					this.active = 0
				}
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
		display: block;
		padding: 15px;
		flex-direction: row;
	}
</style>
