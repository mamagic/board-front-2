<template>
	<v-app-bar app color="blue-grey darken-1" dark>
		<v-btn @click="movePage('/home')" text>
			<span class="mr-2">Home</span>
		</v-btn>
		<v-btn @click="movePage('/list')" text>
			<span class="mr-2">Board</span>
		</v-btn>
		<v-btn @click="handleSignInOut" text :style="signInButtonStyle">
			<span class="mr-2">{{ signInLabel }}</span>
		</v-btn>
		<v-btn @click="movePage('/signUp')" text>
			<span class="mr-2">signUp</span>
		</v-btn>
		<v-spacer></v-spacer>
		<div v-if="userId" class="mr-2 white--text">{{ userId }}</div>
		<v-divider class="mx-4" inset vertical></v-divider>
		<Clock />
		<v-divider class="mx-4" inset vertical></v-divider>
		<Weather />
	</v-app-bar>
</template>

<script>
import Clock from '@/components/common/Clock'
import Weather from '@/components/common/Weather'
import { mapState } from 'vuex';

export default {
	name: 'AppHeader',
	components: {
		Clock,
		Weather,
	},
	computed: {
    ...mapState('userStore', ['userId']),
    signInLabel() {
      // userId 상태에 따라 버튼 레이블을 동적으로 설정
      return this.userId ? 'logout' : 'signIn';
    },
	signInButtonStyle() {
      // userId 상태에 따라 버튼 스타일을 동적으로 설정
      return this.userId ? { color: 'red' } : {};
    },
  },
  methods: {
    movePage(path) {
      // 페이지 이동 로직 추가
      this.$router.push(path);
    },
    handleSignInOut() {
      // userId 상태에 따라 로그인 또는 로그아웃 로직 추가
      if (this.userId) {
        // 로그아웃 처리
        this.$store.commit('userStore/logout');
      } else {
        // 로그인 처리
        this.movePage('/signIn'); // 로그인 페이지로 이동하거나 로그인 로직 추가
      }
    },
  },
}
</script>
