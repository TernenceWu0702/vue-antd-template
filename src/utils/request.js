import axios from 'axios';
import { notification } from 'ant-design-vue';

function request(options) {
    return axios(options)
        .then(async (response) => {
            const res = await response.clone().json();
            if (res.status === 50002) {
                if (response.url.indexOf('info') === -1) {
                    Modal.info({
                        title: '登录过期',
                        content: '登录已失效,请重新登录',
                        okText: '确认',
                        cancelText: '取消',
                        maskClosable: false,
                        mask: false,
                        top: 0,
                        onOk() {
                            window.location.href = '/user/login';
                        },
                    });
                }
                return response;
            }
            if (res.status === 50003) {
                Modal.info({
                    title: '权限认证',
                    content: '抱歉，您没有访问权限',
                    okText: '确认',
                    cancelText: '取消',
                    maskClosable: false,
                    mask: false,
                    top: 0,
                });
                return response;
            }
            if (res.status === 50000) {
                Modal.info({
                    title: '提示',
                    content: (res.data && res.data.error) || '请求失败',
                    okText: '确认',
                    cancelText: '取消',
                    maskClosable: false,
                    mask: false,
                    top: 0,
                });
                return response;
            }
            return response
        })
        .catch(err => {
            const {
                response: { status, statusText }
            } = err;
            notification.error({
                message: status,
                description: statusText
            })
            return Promise.reject(err);
        })
}

export default request