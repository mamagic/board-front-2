<template>
  <v-app id="app">
    <v-main>
      <v-container
        style="position: relative; top: 20%; margin-left: 20%"
        class="text-xs-center"
      >
        <v-layout row wrap class="text-xs-center">
          <v-flex>
            <v-card flat class="mx-auto" max-width="800">
              <v-row style="margin-top: 60px">
                <v-col>
                  <v-form style="width: 400px; height: 300px">
                    <div class="mx-3">
                      <v-icon color="black" size="30px">user</v-icon>
                      <div class="mx-1">
                        <v-text-field
                          placeholder="username"
                          v-model="username"
                          required
                        ></v-text-field>
                      </div>
                    </div>
                    <div class="mx-3">
                      <v-icon color="black" size="30px">password</v-icon>
                      <div class="mx-1">
                        <v-text-field
                          placeholder="password"
                          type="password"
                          v-model="password"
                          required
                        ></v-text-field>
                      </div>
                    </div>

                    <v-card-actions>
                      <v-btn
                        color="#2c4f91"
                        dark
                        large
                        block
                        @click="loginSubmit"
                        >Login</v-btn
                      >
                    </v-card-actions>
                  </v-form>
                </v-col>
              </v-row>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'

const instance = axios.create()

export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    loginSubmit() {
      let saveData = {};
      saveData.username = this.username;
      saveData.password = this.password;

      try {
        instance 
          .post("http://localhost:8081/login", JSON.stringify(saveData), {
            headers: {
              "Content-Type": `application/json`,
            }
          })
          .then((res) => {
            if (res.status === 200) {
              console.log(res.data)
              this.$store.commit("userStore/login", res.data.token);
              this.$router.push("/home");
            }
          });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>