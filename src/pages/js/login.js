import Vue from 'vue';
import App from './login.vue';
// 导入 bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// 导入通用样式文件
import '@/styles/main.less';

// 于性能原因，popover提示框组件是可选的，所以 你必须自己将它们初始化才能启动生效
$(function(){  
    $('[data-toggle="popover"]').popover();  
});  

new Vue({ // 创建 vue 实例
  // 提供一个在页面上已经存在的 DOM 元素作为 Vue 实例挂载目标
  el: '#app', 
  // 声明了 html 中的内容
  render: h => h(App)
})
