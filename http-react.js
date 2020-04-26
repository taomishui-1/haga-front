/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { Storage } from './utils';
import { extend } from 'umi-request';
import { Toast } from 'antd-mobile';
import router from 'umi/router';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  /* if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    // const { status, url } = response;
    // Toast.offline(`请求错误 ${status}: ${url},${errorText}`);
    Toast.offline(`系统忙`);
  } else if (!response) {
    Toast.offline('网络不给力');
  } */
  if (response && response.status === 401) {
    if (window.parent === window) {
      router.push('/user/login');
    } else {
      top.location.href = '#/user/login';
    }
  }
  return response;
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler, // 默认错误处理
  // credentials: 'include', // 默认请求是否带上cookie
  headers: {
    Accept: 'application/json, text/plain, */*',
    'App-Version': '1.0.0',
  },
});

request.use(async (ctx, next) => {
  const { req } = ctx;
  const { url, options } = req;

  // 判断是否需要添加前缀，如果是统一添加可通过 prefix、suffix 参数配置
  const headers = {
    'App-Channel': Storage.Channel() || '',
  };
  if (!/\/(login|reg)$/.test(url)) {
    headers['Authorization'] = Storage.Token() || '';
  }

  ctx.req.options.headers = {
    ...headers,
    ...options.headers,
  };

  await next();
  const { res } = ctx;
  if (res && res.errcode === 401) {
    // @HACK
    /* @ts-ignore */
    /*  window.g_app._store.dispatch({
       type: 'user/logout',
     }); */

    if (window.parent === window) {
      router.push('/user/login');
    } else {
      top.location.href = '#/user/login';
    }
    return;
  }

  /*  const { success = false } = res; // 假设返回结果为 : { success: false, errorCode: 'B001' }
  if (!success) {
    // 对异常情况做对应处理
  }  */
});

export default request;
