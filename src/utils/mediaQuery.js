var u = navigator.userAgent;

//移动终端浏览器版本信息
export const trident = u.indexOf('Trident') > -1; //IE内核
export const presto = u.indexOf('Presto') > -1;//opera内核
export const webKit = u.indexOf('AppleWebKit') > -1; //苹果、谷歌内核
export const gecko = u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1; //火狐内核
export const isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
export const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;//android终端或者uc浏览器
export const iPhone = u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1; //是否为iPhone或者QQHD浏览器
export const iPad = u.indexOf('iPad') > -1; //是否iPad
export const webApp = u.indexOf('Safari') === -1;  //是否web应该程序，没有头部与底部
export const isMobile = isIos || isAndroid;//是否为移动终端


