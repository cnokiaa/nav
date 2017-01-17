<template>
    <div>
        <navpage :step="3" />
        <div class="tips">
            <div class="tip-tit">温馨提示：</div>
            <p>1、通过审核后，资金将实时转入您填写的信用卡中；</p>
            <p>2、到期还款日系统自动从您签约的储蓄卡中扣收。</p>
        </div>
        <div class="sub-inf subbank">
            <div class="part-con card-con">
                <span class="bar"></span>
                <h2 class="clearfix">信用卡信息</h2>
                <div class="input-con clearfix">
                    <label>姓名</label>
                    <div class="bankusernme">123</div>
                </div>
                <!-- 银行 -->
                <div class="input-con">
                    <label for="creditbank">银行</label>
                    <span class="cover-input">请选择银行</span>
                    <div class="arrow"></div>
                </div>
                <!-- 卡号 -->
                <div class="input-con">
                    <label for="creditcardnum">卡号</label>
                    <input id="creditcardnum" name="creditcard" type="tel" placeholder="本人信用卡卡号" autocomplete="off" maxlength="20">
                </div>
            </div>

            <div class="part-con card-con">
                <span class="bar"></span>
                <h2 class="clearfix">储蓄卡信息</h2>
                <div class="input-con clearfix">
                    <label>姓名</label>
                    <div class="bankusernme">222</div>
                </div>
                <!-- 银行 -->
                <div class="input-con">
                    <label for="debitbank">银行</label>
                    <input class="chose-input single-list" id="debitbank" name="debitbank" type="hidden" autocomplete="off">
                    <div class="arrow"></div>
                    <span class="cover-input">请选择银行</span>
                </div>
                <!-- 卡号 -->
                <div class="input-con">
                    <label for="bankcardnum">卡号</label>
                    <input id="bankcardnum" name="debitcard" type="tel" placeholder="本人储蓄卡卡号" autocomplete="off" maxlength="20">
                </div>
            </div>
        </div>
        <div class="agreement-list clearfix">
            <div class="agreement clearfix ellipsis"><i></i><a href="http://download.lakala.com.cn/lklmbl/html/lakala_zhengxing_chaxun.html">同意《个人征信查询及报送授权声明》</a></div>
            <div class="agreement clearfix ellipsis"><i></i><a href="http://download.lakala.com.cn/lklmbl/html/kuaijie_huankuan_ygd_server.html">同意《拉卡拉信贷还款委托服务协议》</a></div>
        </div>
        <div class="next-step" @click="submitClick">下一步</div>
    </div>
</template>
<script>
import Navpage from '../components/nav.vue'
export default{
    data() {
        return{}
    },
    methods: {
        submitClick: function() {
            this.$router.push("/apply");
        }
    },
    components: {
        navpage : Navpage
    }
}
</script>
<style>
.card-con {
	position: relative;
	overflow: hidden;
	width: 90.63%;
	margin: 0 auto 0.75rem;
	padding: 0 0.5rem;
	background-color: #fff;
	-webkit-border-radius: 0.2rem;
	-moz-border-radius: 0.2rem;
	-ms-border-radius: 0.2rem;
	-o-border-radius: 0.2rem;
	border-radius: 0.2rem;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
.card-con .input-con:last-child {
	border: none;
}
.bar {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 0.2rem;
	background-color: #007aff;
}
.sub-inf h2 span {
	float: right;
	color: #3cb3f9;
	height: 100%;
}
.sub-inf h2 {
	color: #3c3c3c;
	padding-top: 0.3rem;
	border-bottom: 1px dashed #5455ff;
	font-size: 0.7rem;
	line-height: 1.7rem;
}
.agreement-list{
	width: 90.63%;
    margin: 0 auto;
}
.agreement {
	height: 0.75rem;
	margin-bottom: 0.8rem;
	padding: 0 0.5rem;
	font-size: 0.5rem;
	line-height: 0.75rem;
}
.agreement-list .agreement:last-child {
	margin-bottom: 1.25rem;
}
.agreement i {
	float: left;
	width: 0.75rem;
	height: 0.75rem;
	margin-right: 0.2rem;
	background: url('../assets/images/agree.png') no-repeat center center;
	-webkit-background-size: 100% 100%;
	-moz-background-size: 100% 100%;
	-ms-background-size: 100% 100%;
	-o-background-size: 100% 100%;
	background-size: 100% 100%;
}
.agreement a {
	color: #007aff;
}
.disagree i {
	background: url('../assets/images/disagree.png') no-repeat center center;
	-webkit-background-size: 100% 100%;
	-moz-background-size: 100% 100%;
	-ms-background-size: 100% 100%;
	-o-background-size: 100% 100%;
	background-size: 100% 100%;
}
</style>