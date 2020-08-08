<template>
	<view>
		<view class="example-info"> goods-nav 组件主要用于电商类应用底部导航，可自定义加入购物车，购买等操作</view>
		<view class="example-title">基础用法</view>
		<view class="example-body">
			<aemp-goods-nav class="goods-nav" @click="onClick"/>
		</view>

		<view class="example-title">自定义用法</view>
		<view class="example-body">
			<aemp-goods-nav class="goods-nav" :fill="true" :options="options" :button-group="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
		</view>
		<view class="goods-carts">
			<aemp-goods-nav class="goods-nav" :options="options" :fill="true" :button-group="buttonGroup" @click="onClick" @buttonClick="buttonClick"/>
		</view>

	</view>
</template>

<script>
	import aempGoodsNav from '../../components/aemp-goods-nav/aemp-goods-nav'
	export default {
		config: {
			navigationBarTitleText: "商品导航 GoodsNav"
		},
		components: {
			aempGoodsNav
		},
		data() {
			return {
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor:'#007aff',
					infoColor:"#f5f5f5"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ffa200',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ff0000',
						color: '#fff'
					}
				]
			}
		},
		methods: {
			onClick(e) {
				this.$api.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
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
	.goods-nav{
		width:100%;
	}

	.goods-carts {
		display: flex;
		flex-direction: column;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>
