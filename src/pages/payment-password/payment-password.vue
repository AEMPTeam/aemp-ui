<template>
    <view>
        <view class="example-title">基本用法</view>
        <button type="primary" class="input-btn" @tap="setFlag">请输入密码</button>
        <aemp-payment-password :show="payFlag" :value="paymentPwd" digits="6" @submit="checkPwd"
            @cancel="togglePayment">
        </aemp-payment-password>
    </view>
</template>
<script>
    import aempPaymentPassword from "../../components/aemp-payment-password/aemp-payment-password";
    export default {
        config: {
            navigationBarTitleText: "PaymentPassword 支付密码"
        },
        components: {
            aempPaymentPassword
        },
        data() {
            return {
                payFlag: false,
                paymentPwd: ""
            }
        },
        methods: {
            setFlag() {
                this.payFlag = true;
            },
            togglePayment() {
                this.payFlag = false;
            },
            checkPwd(val) {
                console.log(val);
            }
        },
    }
</script>
<style scoped>
    .example-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 32px;
        color: #464e52;
        padding: 10px 10px 10px 40px;
        position: relative;
        background-color: #fdfdfd;
        border-bottom: 2px #c8c7cc solid;
    }

    .example-title__after {
        position: relative;
        color: #031e3c
    }

    .example-title:after {
        content: '';
        position: absolute;
        left: 20px;
        margin: auto;
        top: 0;
        bottom: 0;
        width: 6px;
        height: 32px;
        background-color: #ccc;
    }

    .input-btn {
        margin-top:20px;
    }
</style>