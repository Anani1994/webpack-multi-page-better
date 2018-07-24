// 导入 bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// 导入通用样式文件
import '@/styles/main.less';
// 导入私有样式文件
import '@/pages/css/index.less';
import './index/main.js';

// 于性能原因，popover提示框组件是可选的，所以 你必须自己将它们初始化才能启动生效
$(function(){  
    $('[data-toggle="popover"]').popover();  
});  