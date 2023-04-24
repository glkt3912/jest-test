## Jest-Tutorialを参考に簡易のテスト環境

* Jestを用いてCLI上でのテスト環境を作成しました。
* ディレクトリ名はJestの推奨の名称でひとまず定義。
* 記述したテスト
  - ナップザック問題

### テスト実行までの手順

1. git clone https://github.com/glkt3912/jest-test.git // リポジトリのクローン
2. yarn install // パッケージのインストール
3. yarn jest // jestで__tests__ディレクトリ内のテストを実行

### 暫定ディレクトリ構成
適切なディレクトリ構成を確認できしだい、順次変更

* __tests__ ：テスト
* __mocks__ :クラスや関数
* __testcase__ : テストケース
* __interfase__: 作成の型もしくはinterface
