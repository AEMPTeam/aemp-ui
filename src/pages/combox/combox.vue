<template>
	<view>
		<view class="example-info">组合框一般用于可以选择也可以输入的表单项</view>
		<view class="example-title">基本用法</view>
		<view class="example-body">
			<aemp-combox label="所在城市" :candidates="candidates" placeholder="请选择所在城市" v-model="city"></aemp-combox>
			<view class="result-box">
				<text>所选城市为：{{city}}</text>
			</view>
		</view>
		<view class="example-title">设置label宽度</view>
		<view class="example-body">
			<aemp-combox label="所在城市" labelWidth="150px" :candidates="candidates" placeholder="请选择所在城市"></aemp-combox>
		</view>
		<view class="example-title">设置无匹配项时的提示语</view>
		<view class="example-body">
			<aemp-combox label="所在城市" emptyTips="这里啥都没有" placeholder="请选择所在城市"></aemp-combox>
		</view>
	</view>
</template>

<script>
	import aempCombox from '../../components/aemp-combox/aemp-combox';
	export default {
		components: {
			aempCombox
		},
		config: {
			navigationBarTitleText: "组合框 Combox"
		},
		data() {
			return {
				candidates: ['北京', '南京', '东京', '武汉', '天津', '上海', '海口'],
				city: ''
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
		padding: 0px 12px;
		background-color: #FFFFFF;
	}

	.result-box {
		text-align: center;
		padding: 20px 0px;
		font-size: 30px;
	}
</style>
