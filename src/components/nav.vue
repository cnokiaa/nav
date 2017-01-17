<template>
    <nav :class="'nav step'+step">
		<div class="nav-step">
			<div class="nav-inner">
				<div class="progress"></div>
				<ul>
					<li><b>1</b></li>
					<li><b>2</b></li>
					<li><b>3</b></li>
					<li><b>4</b></li>
				</ul>
			</div>
		</div>
		<ul class="nav-tit clearfix">
			<li>申请人照片</li>
			<li>个人资料</li>
			<li>银行卡信息</li>
			<li>提交信息</li>
		</ul>
	</nav>
</template>
<script>
export default{
    props: ['step']
}
</script>