<template>
	<view>
		<view class="example-info">标签组件多用于商品分类、重点内容显示等场景。</view>
		<view class="example-title">实心标签</view>
		<view class="example-body">
			<view class="tag-view">
				<aemp-tag text="标签" />
			</view>
			<view class="tag-view">
				<aemp-tag text="标签" type="primary" />
			</view>
			<view class="tag-view">
				<aemp-tag text="标签" type="success" />
			</view>
			<view class="tag-view">
				<aemp-tag text="标签" type="warning" />
			</view>
			<view class="tag-view">
				<aemp-tag text="标签" type="error" />
			</view>
		</view>
		<view class="example-title">空心标签</view>
		<view class="example-body">
			<view class="tag-view">
				<aemp-tag :inverted="true" text="标签" />
			</view>
			<view class="tag-view">
				<aemp-tag :inverted="true" text="标签" type="primary" />
			</view>
			<view class="tag-view">
				<aemp-tag :inverted="true" text="标签" type="success" />
			</view>
			<view class="tag-view">
				<aemp-tag :inverted="true" text="标签" type="warning" />
			</view>
			<view class="tag-view">
				<aemp-tag :inverted="true" text="标签" type="error" />
			</view>
		</view>
		<view class="example-title">圆角样式</view>
		<view class="example-body">
			<view class="tag-view">
				<aemp-tag :circle="true" text="标签" type="primary" size="small" />
			</view>
			<view class="tag-view">
				<aemp-tag :inverted="true" :circle="true" text="标签" type="success" size="small" />
			</view>
			<view class="tag-view">
				<aemp-tag :circle="true" text="标签" type="warning" />
			</view>
			<view class="tag-view">
				<aemp-tag :inverted="true" :circle="true" text="标签" type="error" />
			</view>
		</view>
		<view class="example-title">标记样式</view>
		<view class="example-body">
			<view class="tag-view">
				<aemp-tag :mark="true" text="标签" type="primary" size="small" />
			</view>
			<view class="tag-view">
				<aemp-tag :mark="true" text="标签" type="success" size="small" />
			</view>
			<view class="tag-view">
				<aemp-tag :mark="true" text="标签" type="warning" />
			</view>
			<view class="tag-view">
				<aemp-tag :mark="true" :circle="true" text="标签" type="error" />
			</view>
		</view>
		<view class="example-title">点击事件</view>
		<view class="example-body">
			<view class="tag-view">
				<aemp-tag :type="type" text="标签" @click="setType" />
			</view>
			<view class="tag-view">
				<aemp-tag :circle="true" :inverted="inverted" text="标签" type="primary" @click="setInverted" />
			</view>
		</view>

		<view class="example-title">小标签</view>
		<view class="example-body">
			<view class="tag-view">
				<aemp-tag text="标签" size="small" />
			</view>
			<view class="tag-view">
				<aemp-tag text="标签" type="primary" size="small" />
			</view>
			<view class="tag-view">
				<aemp-tag text="标签" type="success" size="small" />
			</view>
			<view class="tag-view">
				<aemp-tag :inverted="true" :mark="true" text="标签" type="warning" size="small" />
			</view>
			<view class="tag-view">
				<aemp-tag :inverted="true" :circle="true" text="标签" type="error" size="small" />
			</view>
		</view>

		<view class="example-title">不可点击状态</view>
		<view class="example-body">
			<view class="tag-view">
				<aemp-tag :disabled="true" text="标签" />
			</view>
			<view class="tag-view">
				<aemp-tag :disabled="true" text="标签" type="primary" />
			</view>
			<view class="tag-view">
				<aemp-tag :inverted="true" :disabled="true" text="标签" type="error" size="small" />
			</view>
		</view>
	</view>
</template>

<script>
	import aempTag from '../../components/aemp-tag/aemp-tag'
	export default {
		config: {
			navigationBarTitleText: "标签 Tag"
		},
		components: {
			aempTag
		},
		data() {
			return {
				type: 'default',
				inverted: false
			};
		},
		methods: {
			setType() {
				let types = ['default', 'primary', 'success', 'warning', 'error'];
				let index = types.indexOf(this.type);
				types.splice(index, 1);
				let randomIndex = Math.floor(Math.random() * 4);
				this.type = types[randomIndex];
			},
			setInverted() {
				this.inverted = !this.inverted;
			}
		}
	};
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

	.tag-view {
		display: flex;
		flex-direction: column;
		margin: 10px 15px;
		justify-content: center;
	}
</style>
