#  アプリの概要
  　
  自分が毎日、どんなお酒をどれだけ飲んでいるかを把握することで、
  飲み過ぎによる健康被害を防ぎたいとの想いで作りました。
  ---
  機能
- 飲酒量の記録、削除ができる
- 1日の飲酒したかがグラフで分かる
- 1週間の飲酒量がグラフで分かる

  # 使用技術一覧
-  フロントエンド
  vite react MUI

- バックエンド
  kotlin springboot

- データベース
  PostgreSQL

# バックエンドサーバーセットアップ
1.このリポジトリをクローンする
2.PC上でプロジェクトを開く
3.Gradleが自動で依存関係をダウンロード
4.Application.ktを起動

バックエンド
- build.gradle.ktsファイルに追加
```
    implementation("org.postgresql:postgresql:42.7.2")
    runtimeOnly("org.postgresql:postgresql:42.7.2")
```

- application.yamlファイルに追加
```
  datasource:
    url: jdbc:postgresql://localhost:5432/drink
    username: postgres
    password: postgres@123
    driver-class-name: org.postgresql.Driver

  jpa:
    hibernate:
       ddl-auto: update
```
# フロントエンドサーバーセットアップ
1.依存関係のインストール
2.開発用サーバーの起動

```node.js
$ npm install
```
```node.js
$ npm run dev
```
