<template>
	<view>
		<template-platform target="h5">
			<aemp-indexed-list class="content" :options="list" :show-select="true" @click="bindClick" />
		</template-platform>
		<template-platform target="wx">
			<aemp-indexed-list :options="list" :show-select="true" @click="bindClick" />
		</template-platform>
		<template-platform target="swan">
			<aemp-indexed-list :options="list" :show-select="true" @click="bindClick" />
		</template-platform>
		<template-platform target="my">
			<aemp-indexed-list :options="list" :show-select="true" @click="bindClick" />
		</template-platform>
		<template-platform target="tt">
			<aemp-indexed-list :options="list" :show-select="true" @click="bindClick" />
		</template-platform>
		<template-platform target="qq">
			<aemp-indexed-list :options="list" :show-select="true" @click="bindClick" />
		</template-platform>
	</view>
</template>

<script>
	import aempIndexedList from '../../components/aemp-indexed-list/aemp-indexed-list'
	import airport from '../../common/js/airport.js'
	export default {
		config: {
			navigationBarTitleText: "索引列表 IndexedList"
		},
		components: {
			aempIndexedList
		},
		data() {
			return {
				list: airport.list
			}
		},
		methods: {
			bindClick(e) {
				console.log('点击item，返回数据' + JSON.stringify(e))
			}
		}
	}
</script>

<style lang="scss">
	.content{
		margin-top:80px;
	}
</style>
