<template>
	<div class="contain">
    <header>
		<p>替你还</p>
		<a href="" class="application-record">
			<b></b>
			<span>申请记录</span>
		</a>
		<div class="connect" data-show="false">
			<strong></strong>
			<div class="connect-con" style="display: none;">
				<a href="">业务说明</a>	
			</div>
		</div>
	</header>
    <div class="main-con">
		<p class="quota-tip clrarfix">您当前可用借款额度10000.00元</p>
		<h2 class="apply-tip">申请金额</h2>
		<div class="input-apply">
			<label for="">金额：</label>
			<input type="text" 	:placeholder="'最低'+limitMin+'元，最高'+limitMax+'元'" :value="applyment" @blur="checkM" v-model="applyment"/>
			<span class="clearfix"><b></b>￥</span>
		</div>
		<p class="tips">温馨提示：实际到账金额以审批结果为准</p>

		<div class="apply-cycle">
			<h2>申请周期</h2>
			<div class="cycle-part">
				<div class="cycle-part-con clearfix">
					<span :class="{'selected' : (index == curIndex)}" v-for="(item, index) in product.data.ratelist" @click="chooseZq(index)">{{item.periods}}{{item.lenunit}}</span>
				</div>
			</div>
			<transition name="fade">
			<ul class="replay-det" v-if="showType">
				<li>
					<span>到账金额：</span>
					<strong class="red">{{dz}}元</strong>
				</li>
				<li>
					<span>一次性服务费：</span>
					<strong><em>{{fw}}元(</em>已抵扣<em>{{dk}}元</em>)</strong>
				</li>
				<li>
					<span>您需在{{sj}}一次性还款<em class="red">{{hk}}元</em></span>
				</li>
			</ul>
			</transition>
			<div class="usemoney">
				<span>红包</span>
				<strong><a bindtap="redpack">替你还红包<em class="red">12元</em></a></strong>
			</div>
			<!-- 还款明细 -->
		</div>

	</div>
	<div class="next-step" @click="submitClick">立即申请</div>
	</div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui'
export default{
	name: 'home',
	data() {
		return {
			curIndex: '-1',
			applyment: '',
			showType: false,
			limitMin: '',
			limitMax: '',
			dz: '',fw: '',dk: '',sj: '',hk: '',
			product: {"status":"success","errcode":"0000","errmsg":"成功","data":{"systime":"2016-11-01 13:39:47","sid":"886454F107A64A19BDD35E8E6D4E5890","ratelist":[{"periods":3,"rate":500.0,"productno":"PP01","periodlen":1,"lenunit":"Y"},{"periods":6,"rate":1000.0,"productno":"PP02","periodlen":1,"lenunit":"M"}],"hiappamt":1000000,"orgid":"orgfls","ismark":0,"hasdebt":"N","discrate":0,"lowappamt":10000,"mobile":"13534343434","busid":"queryproducts"}},
			plan: {
			    "status": "success",
			    "data": {
			        "accountMoney": "1110.60",
			        "eachMoneyBFredPacket": "0.00",
			        "eachMoney": "205.66",
			        "dueTime": "1",
			        "oneOffPayment": "123.40",
			        "totalMoney": "1234.00",
			        "discount": "0.00",
			        "feeFlag": "YCX",
			        "hongbao":"12.00",
			        "time":"20150202"
			    }
			},
		}
	},
	mounted() {
		let proData = this.$data.product.data;
		for(let i of Object.keys(proData.ratelist)) {
			switch(proData.ratelist[i].lenunit) {
			 	case 'D':proData.ratelist[i].lenunit = '天';break;
			 	case 'W':proData.ratelist[i].lenunit = '周';break;
			 	case 'M':proData.ratelist[i].lenunit = '月';break;
			 	case 'Y':proData.ratelist[i].lenunit = '年';break;
			}
		}
		this.$data.limitMin = proData.lowappamt;
		this.$data.limitMax = proData.hiappamt;
	},
	methods: {
		closeSType: function() {
			this.$data.showType = false;
			this.$data.curIndex = '-1';
		},
		checkM: function() {
			let $applyment = this.$data.applyment;
			if($applyment == '') {
				this.closeSType();
				return Toast({message: '请输入金额', duration: 1000});
			} else if($applyment > this.$data.limitMax || $applyment < this.$data.limitMin) {
				this.closeSType();
				return Toast({message: '超出金额范围', duration: 1000});
			}
		},
		checkZq: function() {
			if(this.$data.curIndex < 0){
				return Toast({message: '请选择周期', duration: 1500});
			}
		},
		chooseZq: function(index) {
			if(!this.checkM()){
				//Indicator.open();
				this.$data.curIndex = index;

				let plan = this.$data.plan.data;
				this.$data.dz = plan.accountMoney;
				this.$data.fw = plan.oneOffPayment;
				this.$data.dk = plan.hongbao;
				this.$data.sj = plan.time;
				this.$data.hk = plan.totalMoney;

				this.$data.showType = true;
				//Indicator.close();
			}
		},
		submitClick: function() {
			if(!this.checkM() && !this.checkZq()){
				this.$router.push("upload/abc");
			}
		}
	}
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
header {
	position: relative;
	height: 2.2rem;
	border-bottom: 1px solid #c3c3c3;
	background-color: #fff;
}
header p {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 2.2rem;
	font-size: 0.7rem;
	line-height: 2.2rem;
	text-align: center;
}
.application-record {
	position: absolute;
	left: 0.65rem;
	top: 0;
	padding-top: 0.2rem;
}
.application-record b {
	display: block;
	width: 1.15rem;
	height: 1.17rem;
	margin: 0 auto;
	background: url('../assets/images/record.png') no-repeat 0 0;
	-webkit-background-size: 100% 100%;
	-moz-background-size: 100% 100%;
	-ms-background-size: 100% 100%;
	-o-background-size: 100% 100%;
	background-size: 100% 100%;
}
.application-record span {
	display: block;
	height: 0.68rem;
	color: #15aee5;
	font-size: 0.5rem;
	line-height: 0.8rem;
	text-align: center;
}
.main-con {
	margin-bottom: 0.85rem;
	padding: 0.38rem 0.85rem 0;
	background-color: #fff;
}
.quota-tip {
	display: none;
	margin:0 0.2rem 0.1rem 0;
	color: #f00;
	font-size: 0.65rem;
	line-height: 1.15rem;
}
.quota-tip:before {
	float: left;
	width: 0.55rem;
	height: 100%;
	content: '\200B';
	background: url('../assets/images/light.png') no-repeat center center;
	-webkit-background-size: 82%;
	-moz-background-size: 82%;
	-ms-background-size: 82%;
	-o-background-size: 82%;
	background-size: 82%;
}
.apply-tip {
	font-size: 0.65rem;
	line-height: 1.4rem;
	color: #3c3c3c;
}
.input-apply {
	display: -webkit-box;
	display: -moz-box;
	display: -ms-box;
	display: -o-box;
	display: box;
	height: 2.15rem;
	margin-bottom: 0.25rem;
	padding: 0 0.5rem;
	border: 2px solid #c5c5c5;
}
.input-apply label,
.input-apply input,
.input-apply span {
	display: block;
	font-size: 0.6rem;
}
.input-apply label,
.input-apply span {
	line-height: 2.15rem;
}
.input-apply input {
	border: none;
	height: 2.15rem;
	padding: 0 0.5rem;
	line-height: normal;
	outline: none;
  -webkit-box-flex: 1;
	-moz-box-flex: 1;
	-ms-box-flex: 1;
}
.input-apply span b {
	float: left;
	width: 0.8rem;
	height: 2.15rem;
	margin-right: 0.25rem;
}
.remove {
	background: url('../assets/images/chacha.png') no-repeat center center;
	-webkit-background-size: 100%;
	-moz-background-size: 100%;
	-ms-background-size: 100%;
	-o-background-size: 100%;
	background-size: 100%;
}
.tips {
	font-size: 0.5rem;
	line-height: 1rem;
	padding-bottom: 0.6rem;
	border-bottom: 2px solid #c8c7cc;
	color:#b8b8b8;
}
/*申请周期*/
.apply-cycle {
	padding-top: 0.25rem;
}
.apply-cycle h2 {
	font-size: 0.6rem;
	line-height: 1.85rem;
}
.cycle-part {
	overflow: hidden;
}
.cycle-part-con {
	width: 107%;
}
.cycle-part span {
	float: left;
	width: 2.5rem;
	height: 1.85rem;
	margin: 0 1rem 0.7rem 0;
	border: 2px solid #03a7e4;
	font-size: 0.5rem;
	line-height: 1.85rem;
	text-align: center;
}
.cycle-part .selected {
	color: #fff;
	background-color: #03a7e4;
}
/*还款明细*/
.replay-det {
	padding: 0.45rem 0.45rem;
	border: 2px solid #0089f5;
}
.replay-det li {
	height: 0.82rem;
}
.replay-det li:after {
	display: block;
	height: 0;
	content: '\200B';
	clear: both;
}
.replay-det li span,
.replay-det li strong {
	color: #3c3c3c;
	height: 100%;
	font-size: 0.53rem;
	line-height: 0.82rem;
}
.replay-det strong em {
	color: #f00;
	font-weight: normal;
}
.replay-det li span {
	float: left;
}
.replay-det li strong {
	float: right;
}
.replay-det li a {
	float: right;
	height: 100%;
	color: #4d97e1;
	font-size: 0.53rem;
	line-height: 0.82rem;
}

.connect {
	position: absolute;
	right: 0.5rem;
	top: 0;
	width: 1.25rem;
	height: 100%;
}
.connect strong {
	display: block;
	width: 100%;
	height: 100%;
	background: url('../assets/images/nav_dot.png') no-repeat center center;
	-webkit-background-size: 100%;
	-moz-background-size: 100%;
	-ms-background-size: 100%;
	-o-background-size: 100%;
	background-size: 100%;
}
.connect-con {
	position: absolute;
	top:2.2rem;
	right: -0.5rem;
	width: 4rem;
	display: none;
	background-color: #eceff6;
}
.connect-con a,
.connect-con i {
	display: block;
	height: 1.5rem;
	color: #3c3c3c;
	font-size: 0.5rem;
	font-style: normal;
	text-align: center;
	line-height: 1.5rem;
}
.connect-con a {
	border-bottom: 1px solid #c3c3c3;
}
.usemoney{
    overflow: hidden;
    margin: 1rem -0.85rem 0;
    border-top: 1rem solid #efeff4;
    padding: 0 0.85rem;
    line-height:2rem;
	span{
		float:left;
	}
	strong{
		float:right;
		a:after{
			content:'';
			width:.5rem;
		    height:.5rem;
		    border-right:2px solid #c4c4c4;
		    border-bottom:2px solid #c4c4c4;
		    -moz-transform:rotate(-45deg);
		    -o-transform:rotate(-45deg);
		    -webkit-transform: rotate(-45deg);
		    -ms-transform: rotate(-45deg);
		    transform: rotate(-45deg);
		    display: inline-block;
		    margin: 0 .2rem;
		}
	}
}
</style>