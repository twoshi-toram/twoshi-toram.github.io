<template>
  <v-container class="content">
    <v-row>
      <h1>
        ある冒険者の雑記帳へようこそ！
      </h1>
    </v-row>
    <SubContent title="このサイトについて">
      <p>
        <a
          href="http://toram.jp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="black--text">
            <strong>トーラムオンライン</strong>
            <v-icon>mdi-checkbox-multiple-blank-outline</v-icon>
          </span>
        </a>
        を冒険するにあたり学んだことを公開しているサイトです。<br>
        記載した内容が少しでも多くの冒険者の方の参考になれば幸いです。
      </p>
      <p>
        ※ あくまで個人的に収集した内容のため、記載した内容に誤りがあるかもしれません。<br>
        誤りを見つけられましたら、
        <a
          href="https://twitter.com/twoshi_toram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-btn
            x-small
            text
            color="blue"
          >
            <v-icon>mdi-twitter</v-icon>
            <strong>twitter</strong>
          </v-btn>
        </a>
        <!-- もしくは
        <a
          href="mailto:test@test.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-btn
            x-small
            text
            color="red"
          >
            <v-icon>mdi-email</v-icon>
            <strong>mail</strong>
          </v-btn>
        </a> -->
        まで、そっとお教えいただけるとありがたいです。
      </p>
    </SubContent>
    <SubContent title="サイトの更新について">
      <p>
        サイトの更新については<strong>不定期</strong>です。<br>
        少しずつ情報を増やしていきたいと考えていますので、お待ちいただければと思います。
      </p>
    </SubContent>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style>
.content {
  max-width: 1200px;
}

a {
  text-decoration: none;
}

h2 {
  margin: 45px 0 0.8em;
  padding-bottom: 0.7em;
  border-bottom: 1px solid #999;
  width: 100%
}
</style>
