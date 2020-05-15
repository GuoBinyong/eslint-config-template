module.exports = {
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "globalThis":"readonly"
    },
    "rules": {
        // 允许 debugger 运行在 开发 环境中
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        //提示 没用的变量；默认是 报错 "error"
        "no-unused-vars":"warn",
        // 关闭 var 关键字的提示
        "no-var":'off',
        // 警告 case 穿透
        "no-fallthrough":'warn'
    }
};
