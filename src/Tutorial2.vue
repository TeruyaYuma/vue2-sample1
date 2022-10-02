<script>
export default {
  data() {
    return {
      title: 'MY new vue title',
      message: 'welcom to Vue',
      isRed: true,
      input: {
        first: "",
        last: "",
        isMember: true,
      },
      users: [
        {
          first: '1',
          last: 'user1',
          isMember: true
        },
        {
          first: '2',
          last: 'user2',
          isMember: false
        },
        {
          first: '3',
          last: 'user3',
          isMember: false
        }
      ]
    }
  },
  computed: {
    fullName() {
      return this.user.first + " " + this.user.last
    }
  },
  methods: {
    addUser() {
      this.user.push({
        first: 'more',
        last: 'userMore',
        isMember: true
      })
    }
  }
}
</script>

<template>
  <h1 :title="message" :class="{red: true}">{{title}}</h1>
  <input type="text" v-model="input.first" />
  <input type="text" v-model="input.last" />
  <input type="checkbox" v-model="input.isMember" />
  <button @click="addUser">ユーザーの追加</button>
  <h2>ユーザーデータ</h2>
  <div v-for="user in users">
    <p>Name: {{user.first + " " + user.last}}</p>
    <p v-if="user.isMember">メンバーです</p>
    <p v-else>メンバーではありません</p>
  </div>
</template>

<style scoped>
.red {
  color: red
}
</style>
