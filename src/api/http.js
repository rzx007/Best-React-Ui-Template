import http from "./axios.js";

// request 拦截器
http.interceptors.request.use(
  config => {
    // config.baseURL = '0.0.0.0'
    if (!config.url.match('login') && !window.hiddenBar) {
      // 除开登录逻辑，其他接口自动添加token请求头
      config.headers["Authorization"] = "adsadasdwdqe12fqsq10";
    }
    return config;
  },
  error => {
    // eslint-disable-next-line no-console
    console.log(error); // for debug
    return Promise.reject(error)
  }
)

// respone 拦截器
http.interceptors.response.use(
  response => {
    const status = response.status;
    const res = response.data;
    if (status === 200) {
      return Promise.resolve(res);
    } else {
     console.log(res.msg );
      return Promise.reject(new Error(res.msg || "Error"));
    }
  },
  error => {
    console.log("服务异常");
    return Promise.reject(error);
  }
);
export default http;