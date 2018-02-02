<template>
    <div class="sub-inf sub-step">
        <navpage :step="4" />
        <div class="part-con sub-step1">
            <!-- 手机号 -->
            <div class="input-con clearfix">
                <label for="userMobile">手机号</label>
                <input type="tel" id="userMobile" class="user-tel" placeholder="请输入手机号" autocomplete="off" maxlength="11" value="18617120544" readonly="readonly" />
            </div>
            <!-- 验证码 -->
            <div class="input-con clearfix">
                <label for="verification">验&nbsp;证&nbsp;码</label>
                <input id="verification" type="tel" placeholder="请输入短信验证码" autocomplete="off" maxlength="6" />
                <div class="send">点击发送</div>
                <div class="settime">59s后重发</div>
            </div>
        </div>
        <h2 class="h2">请确认您的申请信息</h2>
        <ul class="list">
            <li>
                <strong>申请人</strong>
                <span>呵呵</span>
            </li>
            <li>
                <strong>申请金额</strong>
                <span>1000元</span>
            </li>
            <li>
                <strong>一次性服务费</strong>
                <span><em class="red">60.00元</em>(红包已抵扣<em class="red">10.00元</em>)</span>
            </li>
            <li>
                <strong>到账金额</strong>
                <span>860.00元</span>
            </li>
            <li>
                <strong>申请周期</strong>
                <span>1周</span>
            </li>
            <li>
                <strong>信用卡号</strong>
                <span class="creditcard"></span>
            </li>
            <li>
                <strong>还款日</strong>
                <span>2015年08月08日(一次性还款)</span>
            </li>
            <li>
                <strong>储蓄卡号</strong>
                <span class="bankcard"></span>
            </li>
            <li>
                <strong>总还款金额</strong>
                <span class="red">1600.00元</span>
            </li>
        </ul>
        <div class="agreement clearfix ellipsis"><i></i>同意《拉卡拉“替你还”服务协议》</div>
        <div class="tips">
            <p>温馨提示：</p>
            <p>请您在到期还款日前存入足够资金，以免扣收不成功产生滞纳金及利息，影响您的信用记录。</p>
        </div>
        <div class="next-step" @click="submitClick">提交申请</div>
    </div>
</template>
<script>
import Navpage from '../components/nav.vue'
export default{
    data() {
        return {}
    },
    methods:{
        submitClick: function() {
            this.$router.push("/success");
        }
    },
    components: {
        navpage : Navpage
    }
}
</script>
<style>
.send,
.settime {
	position: absolute;
	right: 0.5rem;
	top: 0;
	bottom: 0;
	width: 3.35rem;
	height: 1.3rem;
	margin: auto 0;
	font-size: 0.57rem;
	font-weight: bold;
	line-height: 1.3rem;
	text-align: center;
	-webkit-border-radius: 0.2rem;
	-moz-border-radius: 0.2rem;
	-ms-border-radius: 0.2rem;
	-o-border-radius: 0.2rem;
	border-radius: 0.2rem;
}
.send {
	background-color: #007aff;
	color: #fff;
}
.settime {
	display: none;
	background-color: #c4c4c4;
	color: #fff;
}
.list {
	margin-bottom: 0.85rem;
	border: 1px solid #edecef;
	border-width: 1px 0;
	background-color: #fff;
}
.list li {
	height: 2rem;
	padding: 0 0.5rem;
	border-bottom: 1px solid #edecef;
	color: #3c3c3c;
	font-size: 0.65rem;
	line-height: 2rem;
    overflow: hidden;
}
.list li:after {
	display: block;
	height: 0;
	content: '\200B';
	clear: both;
}
.list li:last-child {
	border: none;
}
.list li strong{
	float: left;
    display: inline-block;
}
.list li span {
	float:right;
	text-align:right;
}
.list li a {
	position: relative;
	display: block;
	padding-right: 0.45rem;
}
.list li a:after {
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	content: '\200B';
	width: 0.45rem;
	height: 0.75rem;
	margin: auto 0;
	background: url('../assets/images/arrow.png') no-repeat 0 0;
	-webkit-background-size: 100% 100%;
	-moz-background-size: 100% 100%;
	-ms-background-size: 100% 100%;
	-o-background-size: 100% 100%;
	background-size: 100% 100%;
}
.red {
	color: #f00;
}
</style>