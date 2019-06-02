/**
 * 打赏二维码
 */
var moneyUrl ="http://ww1.sinaimg.cn/large/d81e62adgy1g3mzsszppnj20rd0rd758.jpg"

/**
 * 公众号二维码
 */
var wechatUrl ="http://ww1.sinaimg.cn/large/d81e62adgy1g3n0fky53zj20by0by0ti.jpg"

/**
 * 云开发环境
 */
var env ="candy-1314"

/**
 * 个人文章操作枚举
 */
var postRelatedType = {
    COLLECTION: 1,
    ZAN: 2,
    properties: {
        1: {
            desc: "收藏"
        },
        2: {
            desc: "点赞"
        }
    }
};

module.exports = {
    postRelatedType: postRelatedType,
    moneyUrl:moneyUrl,
    wechatUrl:wechatUrl,
    env:env
}