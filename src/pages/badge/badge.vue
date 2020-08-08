<template>
    <view>
        <view class="example-info">数字角标通常用来标记重点信息使用，如接受到新消息、有未读消息等</view>
        <view class="example-title">基本用法</view>
        <view class="example-title-small">颜色可选，default（灰色）、primary（蓝色）、success（绿色）、warning(黄色)、error(红色)</view>
        <view class="example-body">
            <aemp-badge class="badge-left-margin" text="1"/>
            <aemp-badge class="badge-left-margin" text="2" type="primary" />
            <aemp-badge class="badge-left-margin" text="34" type="success" />
            <aemp-badge class="badge-left-margin" text="45" type="warning" />
            <aemp-badge class="badge-left-margin" text="123" type="error" />
        </view>
        <view class="example-title">无底色</view>
        <view class="example-title-small">inverted属性为true时，背景颜色将变为文字的字体颜色色</view>
        <view class="example-body">
            <aemp-badge class="badge-left-margin" :inverted="true" text="1" />
            <aemp-badge class="badge-left-margin" :inverted="true" text="2" type="primary" />
            <aemp-badge class="badge-left-margin" :inverted="true" text="34" type="success" />
            <aemp-badge class="badge-left-margin" :inverted="true" text="45" type="warning" />
            <aemp-badge class="badge-left-margin" :inverted="true" text="123" type="error" />
        </view>
        <view class="example-title">更改大小</view>
        <view class="example-title-small">迷你，可触发点击事件</view>
        <view class="example-body">
            <aemp-badge class="badge-left-margin" text="1" size="small" />
            <aemp-badge class="badge-left-margin" text="2" type="primary" size="small" />
            <aemp-badge class="badge-left-margin" text="34" type="success" size="small" />
            <aemp-badge class="badge-left-margin" text="45" type="warning" size="small" />
            <aemp-badge class="badge-left-margin" text="123" type="error" size="small" @click="clickBtn" />
        </view>
    </view>
</template>
<script>
    import aempBadge from "../../components/aemp-badge/aemp-badge"
    export default {
        config: {
            navigationBarTitleText: "数字角标 Badge"
        },
        components: {
            aempBadge
        },
        methods: {
            clickBtn(data) {
                this.$api.showToast({
                            title:"点击"
                        });
            }
        },
    }
</script>
<style scoped>
    .example-info {
		padding: 30px;
		color: #3b4144;
		background: #fff
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
		padding: 30px;
		background: #fff
	}

    .example-title-small {
        padding: 0 50px;
        color: #999;
    }

    .badge-left-margin {
        margin-left: 40px;
    }
</style>