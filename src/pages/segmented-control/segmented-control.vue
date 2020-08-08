<template>
	<view>
		<view class="padding-wrap common-mt">
			<aemp-segmented-control :current="current" :values="items" :style-type="styleType" :active-color="activeColor"
			 @clickItem="onClickItem" />
		</view>
		<view class="content">
			<view v-if="current === 0"><text class="content-text">选项卡1的内容</text></view>
			<view v-if="current === 1"><text class="content-text">选项卡2的内容</text></view>
			<view v-if="current === 2"><text class="content-text">选项卡3的内容</text></view>
		</view>
		<view class="example-title">style</view>
		<view class="example-body">
			<radio-group class="list " @change="styleChange">
				<view v-for="(item, index) in styles" :key="index" class="list-item">
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
		<view class="example-title">Color</view>
		<view class="example-body">
			<radio-group class="list" @change="colorChange">
				<view v-for="(item, index) in colors" :key="index" class="list-item">
					<view class="list-item__container">
						<view class="list-item__content">
							<view :style="{ backgroundColor: item }" class="color-tag" />
						</view>
						<view class="list-item__extra">
							<radio :value="item" :checked="index === colorIndex" />
						</view>
					</view>
				</view>
			</radio-group>
		</view>
	</view>
</template>

<script>
	import aempSegmentedControl from '../../components/aemp-segmented-control/aemp-segmented-control';
	export default {
		components: {
			aempSegmentedControl
		},
		config: {
			navigationBarTitleText: "分段器 SegmentedControl"
		},
		data() {
			return {
				items: ['选项卡1', '选项卡2', '选项卡3'],
				styles: [{
						value: 'button',
						text: '按钮',
						checked: true
					},
					{
						value: 'text',
						text: '文字'
					}
				],
				colors: ['#007aff', '#4cd964', '#dd524d'],
				current: 0,
				colorIndex: 0,
				activeColor: '#007aff',
				styleType: 'button'
			}
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			},
			styleChange(e) {
				if (this.styleType !== e.detail.value) {
					this.styleType = e.detail.value
				}
			},
			colorChange(e) {
				if (this.styleType !== e.detail.value) {
					console.log(e.detail.value);
					this.activeColor = e.detail.value
				}
			}
		}
	}
</script>

<style lang="scss">
	$text-color:#333;//基本色
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

	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 0;
	}

	.common-mt {
		margin-top: 30px;
	}

	.padding-wrap {
		width: 750rpx;
		padding: 0px 30px;
	}

	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 150px;
		text-align: center;
	}

	.content-text {
		font-size: 18px;
		color: $text-color;
	}

	.color-tag {
		width: 25px;
		height: 25px;
	}

	.list {
		flex: 1;
	}

	.list-item {
		display: flex;
		flex: 1;
		flex-direction: row;
		background-color: #FFFFFF;
	}


	.list-item__container {
		padding: 12px 15px;
		width: 100%;
		flex: 1;
		position: relative;
		display: flex;
		box-sizing: border-box;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-bottom-color: $border-color;
	}

	.list-item__content-title {
		font-size: 16px;
	}
</style>
