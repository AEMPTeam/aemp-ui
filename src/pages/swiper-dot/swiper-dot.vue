<template>
	<view class="content">
		<aemp-swiper-dot :info="info" :current="current" :mode="mode" :dots-styles="dotsStyles" field="content">
			<swiper class="swiper-box" @change="change">
				<swiper-item v-for="(item, index) in info" :key="index">
					<view :class="item.colorClass" class="swiper-item">
						<image class="image" :src="item.url" mode="aspectFill" />
					</view>
				</swiper-item>
			</swiper>
		</aemp-swiper-dot>
		<view class="example-title">模式选择</view>
		<view class="example-body">
			<view :class="{ active: modeIndex === 0 }" class="example-body-item" @tap="selectMode('default', 0)"><text class="example-body-item-text">default</text></view>
			<view :class="{ active: modeIndex === 1 }" class="example-body-item" @tap="selectMode('dot', 1)"><text class="example-body-item-text">dot</text></view>
			<view :class="{ active: modeIndex === 2 }" class="example-body-item" @tap="selectMode('round', 2)"><text class="example-body-item-text">round</text></view>
			<view :class="{ active: modeIndex === 3 }" class="example-body-item" @tap="selectMode('nav', 3)"><text class="example-body-item-text">nav</text></view>
			<view :class="{ active: modeIndex === 4 }" class="example-body-item" @tap="selectMode('indexes', 4)"><text class="example-body-item-text">indexes</text></view>
		</view>
		<view class="example-title">颜色样式选择</view>
		<view class="example-body">
			<view v-if="mode !== 'nav'">
				<view v-for="(item, index) in dotStyle" :class="{ active: styleIndex === index }" :key="index" class="example-body-item"
				 @tap="selectStyle(index)">
					<view :style="{ 'background-color': item.selectedBackgroundColor, border: item.selectedBorder }" class="example-body-dots" />
					<view :style="{ 'background-color': item.backgroundColor, border: item.border }" class="example-body-dots" />
					<view :style="{ 'background-color': item.backgroundColor, border: item.border }" class="example-body-dots" />
				</view>
			</view>
			<view v-if="mode === 'nav'">
				<view v-for="(item, index) in dotStyle" :class="{ active: styleIndex === index }" :key="index" :style="{ 'background-color': item.selectedBackgroundColor }"
				 class="example-body-item" @tap="selectStyle(index)">
					<text class="example-body-item-text" :style="{ color: item.color }">内容</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import aempSwiperDot from '../../components/aemp-swiper-dot/aemp-swiper-dot';
	export default {
		components: {
			aempSwiperDot
		},
		config: {
			navigationBarTitleText: "轮播图指示点 SwiperDot"
		},
		data() {
			return {
				info: [{
						colorClass: 'bg-red',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						content: '内容 A'
					},
					{
						colorClass: 'bg-green',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
						content: '内容 B'
					},
					{
						colorClass: 'bg-blue',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						content: '内容 C'
					}
				],
				dotStyle: [{
						backgroundColor: 'rgba(0, 0, 0, .3)',
						border: '1px rgba(0, 0, 0, .3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(0, 0, 0, .9)',
						selectedBorder: '1px rgba(0, 0, 0, .9) solid'
					},
					{
						backgroundColor: 'rgba(255, 90, 95,0.3)',
						border: '1px rgba(255, 90, 95,0.3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(255, 90, 95,0.9)',
						selectedBorder: '1px rgba(255, 90, 95,0.9) solid'
					},
					{
						backgroundColor: 'rgba(83, 200, 249,0.3)',
						border: '1px rgba(83, 200, 249,0.3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
						selectedBorder: '1px rgba(83, 200, 249,0.9) solid'
					}
				],
				modeIndex: -1,
				styleIndex: -1,
				current: 0,
				mode: 'default',
				dotsStyles: {}
			}
		},
		methods: {
			change(e) {
				this.current = e.detail.current
			},
			selectStyle(index) {
				this.dotsStyles = this.dotStyle[index]
				this.styleIndex = index
			},
			selectMode(mode, index) {
				this.mode = mode
				this.modeIndex = index
				this.styleIndex = -1
				this.dotsStyles = this.dotStyle[0]
			}
		}
	}
</script>

<style lang="scss">
	$text-color-grey:#999;//辅助灰色，如加载更多的提示信息
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

	.swiper-box {
		height: 350px;
	}

	.swiper-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: $text-color-grey;
		color: #fff;
	}

	.image {
		width: 750px;
	}

	.bg-red {
		background-color: #ff5a5f;
	}

	.bg-green {
		background-color: #09bb07;
	}

	.bg-blue {
		background-color: #007aff;
	}

	.example-body {
		display: flex;
		flex-direction: row;
		padding: 20px;
	}

	.example-body-item {

		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 15px;
		padding: 15px;
		height: 60px;
		display: flex;
		padding: 0 15px;
		flex: 1;
		border-color: #e5e5e5;
		border-style: solid;
		border-width: 1px;
		border-radius: 5px;
	}

	.example-body-item-text {
		font-size: 28px;
		color: #333;
	}

	.example-body-dots {
		width: 16px;
		height: 16px;
		border-radius: 50px;
		background-color: #333333;
		margin-left: 10px;
	}

	.active {
		border-style: solid;
		border-color: #007aff;
		border-width: 1px;
	}
</style>
