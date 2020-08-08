<template>
	<view>
		<view class="wrapper">
			<text class="example-info">卡片组件通用来显示完整独立的一段信息，同时让用户理解他的作用。例如一篇文章的预览图、作者信息、时间等，卡片通常是更复杂和更详细信息的入口点。</text>
		</view>
		<view class="example-title">基础卡片</view>
		<view class="example-body">
			<aemp-card @click="clickCard"><text class="content-box-text">这是一个基础卡片示例，内容较少，此示例不带边框阴影。</text></aemp-card>
			<aemp-card title="标题文字" isShadow @click="clickCard"><text class="content-box-text">这是一个基础卡片示例，内容比较多，内容样式可自定义，卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、时间等，此示例带边框阴影。</text></aemp-card>
			<aemp-card title="标题文字" extra="额外信息" isShadow isFooter @click="clickCard">
				<text class="content-box-text">这是一个相对比较完整的基础卡片示例，带有标题、额外信息以及底部信息，内容样式可自定义。</text>
				<view slot="footer">
					<text class="footer-text">Tips</text>	
				</view>
			</aemp-card>
		</view>
		<view class="example-title">通栏卡片</view>
		<view class="example-body">
			<view class="example-box">
				<aemp-card title="标题文字" :isFull="true" isShadow extra="额外信息" @click="clickCard">
					<text class="content-box-text">通栏卡片，左右上下没有间距，用户可自定义卡片距离等信息</text>
					<view slot="footer">
						<text class="footer-text">额外信息</text>	
					</view>
				</aemp-card>
			</view>
		</view>

		<view class="example-title">图文卡片</view>
		<view class="example-body">
			<aemp-card :is-shadow="true" title="标题文字" mode="style" thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg"
			 extra="额外信息" isFooter @click="clickCard">
				<text class="content-box-text">图文卡片支持传入一张图片，在最上方显示，标题作为图片描述，额外信息作为内容标题，通常作用为作者信息或发布时间描述，自行配置是否需要底部信息</text>
				<view slot="footer">
					<view class="footer-box">
						<view class="" @tap="footerClick('喜欢')"><text class="footer-box__item">喜欢</text></view>
						<view class="" @tap="footerClick('评论')"><text class="footer-box__item">评论</text></view>
						<view class="" @tap="footerClick('分享')"><text class="footer-box__item">分享</text></view>
					</view>
				</view>
			</aemp-card>
		</view>
		<view class="example-title">标题卡片</view>
		<view class="example-body">
			<aemp-card isShadow title="标题内容" subTitle="副标题" mode="title" thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
			 extra="技术没有上限" isFooter @click="clickCard">
				<view>
					<view class="image-box">
						<image class="image" mode="aspectFill" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" />
					</view>
					<view class="content-box">
						<text class="content-box-text">标题卡片带有一个双标题头部，右侧为额外描述信息 ，内容可自定义实现</text>
					</view>
				</view>
				<view slot="footer">
					<view class="footer-box">
						<view @tap="footerClick('喜欢')"><text class="footer-box__item">喜欢</text></view>
						<view @tap="footerClick('评论')"><text class="footer-box__item">评论</text></view>
						<view @tap="footerClick('分享')"><text class="footer-box__item">分享</text></view>
					</view>
				</view>
			</aemp-card>
		</view>
	</view>
</template>

<script>
	import aempCard from "../../components/aemp-card/aemp-card"
	export default {
		config: {
            navigationBarTitleText: "卡片 Card"
        },
		components: {
			aempCard
		},
		data() {
			return {
			}
		},
		methods: {
			clickCard() {
				this.$api.showToast({
					title: '点击卡片',
					icon: 'none'
				})
			},
			footerClick(types) {
				this.$api.showToast({
					title: types,
					icon: 'none'
				})
			}
		}
	}
</script>

<style scoped>

	.wrapper{
		padding:15px 30px;
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

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 1px 0;
	}

	.example-box {
		margin: 12px 0;
	}

	.image-box {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		height: 350px;
		overflow: hidden;
	}

	.image {
		/* #ifndef APP-NVUE */
		width: 100%;
		height: 100%;
		/* #endif */
		flex: 1;
	}

	.content-box {
		padding-top: 20px;
	}

	.content-box-text {
		font-size: 20px;
		line-height: 22px;
	}

	.footer-text {
		color: #999;
		font-size: 24px;
	}

	.footer-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: space-between;
		flex-direction: row;

	}

	.footer-box__item {
		align-items: center;
		padding: 2px 0;
		font-size: 20px;
		color: #666;
	}
</style>
