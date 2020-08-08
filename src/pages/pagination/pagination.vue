<template>
	<view>
		<view class="example-title">默认样式</view>
		<view class="example-body">
			<aemp-pagination :total="50" title="标题文字" />
		</view>
		<view class="example-title">修改按钮文字</view>
		<view class="example-body">
			<aemp-pagination :total="50" title="标题文字" prev-text="前一页" next-text="后一页" />
		</view>
		<view class="example-title">图标样式</view>
		<view class="example-body">
			<aemp-pagination :show-icon="true" :total="50" title="标题文字" />
		</view>
		<view class="example-title">修改数据长度</view>
		<view class="example-body">
			<aemp-pagination :current="current" :total="total" title="标题文字" :show-icon="true" @change="change" />
		</view>
		<view class="btn-view">
			<view>
				<text class="example-info">当前页：{{ current }}，数据总量：{{ total }}条，每页数据：{{ pageSize }}</text>
			</view>
			<button class="button" type="primary" @tap="add">增加10条数据</button>
			<button class="button" type="default" @tap="reset">重置数据</button>
		</view>
	</view>
</template>

<script>
	import aempPagination from '../../components/aemp-pagination/aemp-pagination';
	export default {
		components: {
			aempPagination
		},
		config: {
			navigationBarTitleText: "分页器 Pagination"
		},
		data() {
			return {
				current: 1,
				total: 0,
				pageSize: 10
			}
		},
		methods: {
			add() {
				this.total += 10
			},
			reset() {
				this.total = 0
				this.current = 1
			},
			change(e) {
				console.log(e)
				this.current = e.current
			}
		}
	}
</script>

<style lang="scss" scoped>
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
		padding:10px;
	}

	.btn-view {
		display: flex;
		flex-direction: column;
		padding: 15px;
		text-align: center;
		background-color: #fff;
		justify-content: center;
		align-items: center;
	}

	.button {
		margin-bottom: 20px;
		width: 350px;
	}
</style>
