<template>
	<div class="nav">
		<ul>
			<router-link to="/Home" tag="li" active-class="active">
				<a href="javascript:;">首页</a>
			</router-link>
			<router-link to="/Follow" tag="li" active-class="active">
				<a href="javascript:;">关注</a>
			</router-link>
			<router-link to="/Column" tag="li" active-class="active">
				<a href="javascript:;">栏目</a>
			</router-link>
		</ul>
	</div>
</template>
<script>
	export default {
		//name:'nav'
	}
</script>