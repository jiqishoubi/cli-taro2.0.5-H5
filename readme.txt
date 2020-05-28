taro-ui自定义主题可以通过修改 taro-ui/dist/style/variables/default.scss 设置

***

疑问：
奇怪，background-image写在less里，打包之后显示不出来，
解决办法：写在jsx里，使用require引入，就可以显示
