<template>
	<view>
		 <view class="wrapper">
		    <text class="example-info">这是抽屉式导航组件使用示例，可以指定菜单左侧或者右侧弹出（仅初始化生效），组件内部可以放置任何内容。点击页面按钮即可显示导航菜单。</text>
        </view>    
		<view>
			<view class="example-title">左侧滑出</view>
			<view class="example-body">
				<button type="primary" class="aemp-btn" @tap="showDrawer('showLeft')">
				 	显示Drawer
				 </buttton>
				<aemp-drawer ref="showLeft" mode="left"  @change="change($event,'showLeft')">
					<view class="close">
						<button type="primary" @tap="closeDrawer('showLeft')">关闭Drawer</view>
					</view>
				</aemp-drawer>
			</view>
			<view class="example-title">右侧滑出</view>
			<view class="example-body">
				<button type="primary" class="aemp-btn"
				 @tap="showDrawer('showRight')">显示Drawer
				 </button>
				<aemp-drawer ref="showRight" mode="right" :mask-click="false" @change="change($event,'showRight')">
					<view class="scroll-view">
						<scroll-view class="scroll-view-box" :scroll-y="true" >
							<view class="info">
								<text class="info-text">右侧遮罩只能通过按钮关闭，不能通过点击遮罩关闭</text>
							</view>
							<view class="close">
								<button type="primary" @tap="closeDrawer('showRight')">关闭Drawer</button>
							</view>
							<view class="info-content" v-for="item in 100" :key="item">
								<text>可滚动内容 {{item}}</text>
							</view>
						</scroll-view>
					</view>
				</aemp-drawer>
			</view>
		</view>
	</view>
</template>
<script>
	import aempDrawer from "../../components/aemp-drawer/aemp-drawer"
	export default {
		config: {
            navigationBarTitleText: "抽屉 Drawer"
        },
        components: {
            aempDrawer
        },
		data() {
			return {
				showRight: false,
				showLeft: false
			}
		},
		methods: {
			// 打开窗口
			showDrawer(e) {
				this.$refs[e].open()
			},
			// 关闭窗口
			closeDrawer(e) {
				this.$refs[e].close()
			},
			// 抽屉状态发生变化触发
			change(e, type) {
				console.log((type === 'showLeft' ? '左窗口' : '右窗口') + (e ? '打开' : '关闭'));
				this[type] = e
			}
		},
		onNavigationBarButtonTap(e) {
			if(this.showLeft){
				this.$refs.showLeft.close()
			}else{
				this.$refs.showLeft.open()
			}
		}
	}
</script>

<style lang="scss">
	 .wrapper{
		padding:15px 30px;
	}
    .example-info {
		color: #3b4144;
		background: #fff
	}

	.close {
		padding: 15px;
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
		display: flex;
		flex-direction: row;
		padding: 0;
	}

	.info {
		padding: 15px;
		color: #666;
	}

	.info-text {
		font-size: 20px;
		color: #666;
	}
	.scroll-view {
		width: 100%;
		height: 100%;
		flex:1
	}
	// 处理抽屉内容滚动
	.scroll-view-box {
		flex: 1;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	.info-content {
		padding: 5px 15px;
	}
	.aemp-btn {
		margin: 30px 20px;
		width: 100%;
	}
</style>
