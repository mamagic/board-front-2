<template>
	<div>
		<v-container>
			<v-card class="mx-auto" max-width="500" tile>
				<v-card-title>
					Vue, Spring Boot Board
				</v-card-title>
				<v-card-text>
					<h2>Introduction</h2>
					<br />본 코드는 깃허브링크에 프론트엔드 부분만 실습용으로 다운받은 코드이며,
					<br />실습에 맞게 수정한 코드입니다 아래부분의 고양이아이콘을 누르면 원본소
					<br />스로 이동합니다.
					<br />
					<br />
					<h2>Development Environment</h2>
					<br />
					<h3>APP</h3>
					<ul>
						<li>Vue</li>
						<li>Vuetify</li>
						<li>Vuex</li>
						<li>Vue-Router</li>
						<li>Axios</li>
						<li>Toast UI Editor, Viewer</li>
						<li>OpenWeatherMap</li>
					</ul>
					<br />
					<h3>API</h3>
					<ul>
						<li>SpringBoot</li>
						<li>JPA</li>
						<li>MySQL</li>
					</ul>
				</v-card-text>
				<v-img height="100%" src="../assets/programmer.png">
					<v-row align="end" class="fill-height" style="margin: 0;">
						<v-col class="pa-1">
							<v-list-item color="rgba(0, 0, 0, .4)" dark class="pa-1">
								<v-list-item-content>
									<v-list-item-title class="title">
										<a href="mailto:***@***.com">
											<v-icon>mdi-email</v-icon>
										</a>
										<a href="https://dev-jsk.tistory.com" target="_blank">
											<v-icon>mdi-blogger</v-icon>
										</a>
										<a
											href="https://github.com/jinseogood/vue-springboot-board"
											target="_blank"
										>
											<v-icon>mdi-github</v-icon>
										</a>
										<br />
										2023.9.21
									</v-list-item-title>
									<v-list-item-subtitle>본 코드는 깃허브 링크에 모든 출처가있습니다</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
						</v-col>
					</v-row>
				</v-img>
			</v-card>
		</v-container>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'Home',
	components: {},
}
</script>

<style scoped>
a {
	text-decoration: none;
}
</style>
