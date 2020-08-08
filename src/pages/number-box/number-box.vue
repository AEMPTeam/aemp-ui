<template>
	<view>
		<view class="example-info">数字输入框组件多用于购物车加减商品等场景</view>
		<view class="example-title">基本用法</view>
		<view class="example-body">
			<aemp-number-box />
		</view>
		<view class="example-title">设置最小值和最大值</view>
		<view class="example-body">
			<aemp-number-box :min="2" :max="9" :value="5" />
		</view>
		<view class="example-title">设置步长（步长0.1)</view>
		<view class="example-body">
			<aemp-number-box :step="0.1" />
		</view>
		<view class="example-title">禁用状态</view>
		<view class="example-body">
			<aemp-number-box :disabled="true" />
		</view>
		<view class="example-title">获取输入的值 : {{numberValue}} </view>
		<view class="example-body">
			<aemp-number-box :value="numberValue" @change="change" />
		</view>
	</view>
</template>
<script>
	import aempNumberBox from '../../components/aemp-number-box/aemp-number-box';
	export default {
		components: {
			aempNumberBox
		},
		config: {
			navigationBarTitleText: "数字输入框 NumberBox"
		},
		data() {
			return {
				numberValue: 0
			}
		},
		methods: {
			change(value) {
				this.numberValue = value;
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
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
	}

	.example-info {
		padding: 30px;
		color: #3b4144;
		background: #fff;
	}
</style>
