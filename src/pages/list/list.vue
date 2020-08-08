<template>
	<view>
		<view class="example-info">列表组件可以在其中使用图标、略缩图或放置任何你想放的元素，使用场景如：导航菜单、列表、设置中心排版等</view>
		<view class="example-title">基础用法</view>
		<aemp-list>
			<aemp-list-item title="列表文字"></aemp-list-item>
			<aemp-list-item title="列表文字" note="列表描述信息"></aemp-list-item>
			<aemp-list-item :disabled="true" title="列表禁用状态"></aemp-list-item>
		</aemp-list>
		<view class="example-title">点击反馈</view>
		<aemp-list>
			<aemp-list-item title="弹窗提示" clickable @click="onClick($event,0)"></aemp-list-item>
			<aemp-list-item title="页面跳转" link :to="chat" @click="onClick($event,1)"></aemp-list-item>
		</aemp-list>
		<view class="example-title">菜单列表</view>
		<aemp-list>
			<aemp-list-item title="列表右侧带箭头" link rightText="右侧文字"></aemp-list-item>
			<aemp-list-item :show-badge="true" title="列表右侧带箭头 + 角标" link badge-text="12"></aemp-list-item>
		</aemp-list>
		<aemp-list>
			<aemp-list-item title="列表左侧带略缩图" note="列表描述信息" link thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
			 thumb-size="lg" rightText="右侧文字"></aemp-list-item>
			<aemp-list-item :show-extra-icon="true" :extra-icon="extraIcon1" title="列表左侧带扩展图标"></aemp-list-item>
			<aemp-list-item :show-extra-icon="true" :extra-icon="extraIcon3" :show-switch="true" title="列表右侧带 switch"
			 @switchChange="switchChange"></aemp-list-item>
			<aemp-list-item :disabled="true" :show-extra-icon="true" :extra-icon="extraIcon2" :show-switch="true" :switch-checked="true"
			 title="禁用状态" @switchChange="switchChange"></aemp-list-item>
		</aemp-list>
		<view class="example-title">自定义插槽</view>
		<aemp-list>
			<aemp-list-item>
				<view class="slot-box">
					<template-platform target="h5">
						<image class="slot-image" :src="require('../../common/logo.png')" mode="widthFix"></image>
					</template-platform>
					<template-platform target="wx">
						<image class="slot-image" src="../../common/logo.png" mode="widthFix"></image>
					</template-platform>
					<template-platform target="my">
						<image class="slot-image" src="../../common/logo.png" mode="widthFix"></image>
					</template-platform>
					<template-platform target="swan">
						<image class="slot-image" src="../../common/logo.png" mode="widthFix"></image>
					</template-platform>
					<template-platform target="tt">
						<image class="slot-image" src="../../common/logo.png" mode="widthFix"></image>
					</template-platform>
					<template-platform target="qq">
						<image class="slot-image" src="../../common/logo.png" mode="widthFix"></image>
					</template-platform>
					<text class="slot-text">自定义左侧插槽</text>
				</view>
			</aemp-list-item>
			<aemp-list-item title="自定义右侧插槽">
				<view slot="right">
					<template-platform target="h5">
						<image class="slot-image" :src="require('../../common/logo.png')" mode="widthFix"></image>
					</template-platform>
					<template-platform target="wx">
						<image class="slot-image" src="../../common/logo.png" mode="widthFix"></image>
					</template-platform>
					<template-platform target="my">
						<image class="slot-image" src="../../common/logo.png" mode="widthFix"></image>
					</template-platform>
					<template-platform target="swan">
						<image class="slot-image" src="../../common/logo.png" mode="widthFix"></image>
					</template-platform>
					<template-platform target="tt">
						<image class="slot-image" src="../../common/logo.png" mode="widthFix"></image>
					</template-platform>
					<template-platform target="qq">
						<image class="slot-image" src="../../common/logo.png" mode="widthFix"></image>
					</template-platform>
				</view>
			</aemp-list-item>
		</aemp-list>
		<view class="example-title">列表扩展</view>
		<aemp-list>
			<aemp-list-item title="聊天列表" link :to="chat" @click="onClick($event,1)"></aemp-list-item>
		</aemp-list>
	</view>
</template>

<script>
import aempList from '../../components/aemp-list/aemp-list';
import aempListItem from '../../components/aemp-list-item/aemp-list-item';
	export default {
		components: {
			aempList,
			aempListItem
		},
		config: {
			navigationBarTitleText: "列表 List"
		},
		data() {
			return {
				chat:'/pages/api/openapi/share',
				extraIcon1: {
					color: '#007aff',
					size: '22',
					type: 'gear-filled'
				},
				extraIcon2: {
					color: '#4cd964',
					size: '22',
					type: 'image'
				},
				extraIcon3: {
					color: '#999',
					size: '22',
					type: 'mail-open'
				}
			}
		},
		methods: {
			onClick(event, type) {
				if (type === 0) {
					this.$api.showToast({
						title: '点击反馈'
					})
				} else {
					console.log(event.data);
				}
			},
			switchChange(e) {
				this.$api.showToast({
					title: 'change:' + e.value,
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

	.slot-box {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.slot-image {
		display: block;
		width: 30px;
		height: 30px;
	}

	.slot-text {
		font-size: 14px;
		margin-left: 10px;
		color: #4cd964;
	}
</style>
