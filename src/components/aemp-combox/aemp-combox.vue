<template>
	<view class="combox">
		<view v-if="label" class="combox__label" :style="labelStyle">
			<text>{{label}}</text>
		</view>
		<view class="combox__input-box">
			<input class="combox__input" type="text" :placeholder="placeholder" v-model="inputVal" @input="onInput"
			 @focus="onFocus" @blur="onBlur" />
			<aemp-icons class="combox__input-arrow" type="arrowdown" size="14" @tap="toggleSelector"></aemp-icons>
			<view class="combox__selector" v-if="showSelector">
				<scroll-view :scroll-y="true" class="combox__selector-scroll">
					<view class="combox__selector-empty" v-if="filterCandidatesLength === 0">
						<text>{{emptyTips}}</text>
					</view>
					<view class="combox__selector-item" v-for="(item,index) in filterCandidates" :key="index" @tap="onSelectorClick(index)">
						<text>{{item}}</text>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import aempIcons from '../aemp-icons/aemp-icons.vue'
	/**
	 * Combox 组合输入框
	 * @description 组合输入框一般用于既可以输入也可以选择的场景
	 * @property {String} label 左侧文字
	 * @property {String} labelWidth 左侧内容宽度
	 * @property {String} placeholder 输入框占位符
	 * @property {Array} candidates 候选项列表
	 * @property {String} emptyTips 筛选结果为空时显示的文字
	 * @property {String} value 组合框的值
	 */
	export default {
		name: 'AempCombox',
		config: {
			component: true
		},
		components: {
			aempIcons
		},
		props: {
			label: {
				type: String,
				default: ''
			},
			labelWidth: {
				type: String,
				default: 'auto'
			},
			placeholder: {
				type: String,
				default: ''
			},
			candidates: {
				type: Array,
				default () {
					return []
				}
			},
			emptyTips: {
				type: String,
				default: '无匹配项'
			},
			value: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				showSelector: false,
				inputVal: ''
			}
		},
		computed: {
			labelStyle() {
				if (this.labelWidth === 'auto') {
					return {}
				}
				return {
					width: this.labelWidth
				}
			},
			filterCandidates() {
				return this.candidates.filter((item) => {
					return item.indexOf(this.inputVal) > -1
				})
			},
			filterCandidatesLength() {
				return this.filterCandidates.length
			}
		},
		watch: {
			value: {
				handler(newVal) {
					this.inputVal = newVal
				},
				immediate: true
			}
		},
		methods: {
			toggleSelector() {
				this.showSelector = !this.showSelector
			},
			onFocus() {
				this.showSelector = true
			},
			onBlur() {
				setTimeout(() => {
					this.showSelector = false
				},50)
			},
			onSelectorClick(index) {
				this.inputVal = this.filterCandidates[index]
				this.showSelector = false
				this.$emit('input', this.inputVal)
			},
			onInput() {
				setTimeout(() => {
					this.$emit('input', this.inputVal)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.combox {
		display: flex;
		height: 40px;
		flex-direction: row;
		align-items: center;
	}

	.combox__label {
		font-size: 30px;
		line-height: 22px;
		padding-right: 10px;
		color: #999999;
	}

	.combox__input-box {
		position: relative;
		display: flex;
		flex: 1;
		flex-direction: row;
		align-items: center;
	}

	.combox__input {
		flex: 1;
		font-size: 30px;
		height: 22px;
		line-height: 22px;
	}

	.combox__input-arrow {
		padding: 10px;
	}

	.combox__selector {
		box-sizing: border-box;
		position: absolute;
		top: 42px;
		left: 0;
		width: 100%;
		background-color: #FFFFFF;
		border-radius: 6px;
		box-shadow: #DDDDDD 4px 4px 8px, #DDDDDD -4px -4px 8px;
		z-index: 2;
	}

	.combox__selector-scroll {
		max-height: 200px;
		box-sizing: border-box;
	}

	.combox__selector::before {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		border-bottom: solid 6px #FFFFFF;
		border-right: solid 6px transparent;
		border-left: solid 6px transparent;
		left: 50%;
		top: -6px;
		margin-left: -6px;
	}

	.combox__selector-empty,
	.combox__selector-item {
		display: flex;
		line-height: 36px;
		font-size: 20px;
		text-align: center;
		border-bottom: solid 1px #DDDDDD;
		margin: 0px 10px;
	}

	.combox__selector-empty:last-child,
	.combox__selector-item:last-child {
		border-bottom: none;
	}
</style>
