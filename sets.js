module.exports = {
     // htmllint default rule
    'indent-style': 'spaces',        // 缩进需使用空格
    'indent-width': 4,               // 缩进需4个空格的长度
    'tag-name-lowercase': true,      // 标签名需小写
    'tag-self-close': true,          // 无内容标签需自闭合
    'attr-quote-style': 'double',    // 属性值需使用双引号
    'attr-name-style': 'dash',       // 属性名只能使用中划线连接单词
    'attr-no-dup': true,             // 属性不能重复
    'id-class-no-ad': true,          // id/class中不能有ad单词
    'id-no-dup': true,               // id在html文档中不能重复
    'img-req-alt': true,             // img标签需要alt属性，且值不能为空
    'img-req-src': true,             // img标签需要src属性，且值不能为空

    // custom rule 
    'id-style-camel': true,          // id只能使用驼峰命名法
    'class-style-underscore': true,  // class只能使用下划线连接单词
    'css-js-no-type': true,          // link[rel=stylesheet]/style/script标签不需要type属性
    'boolean-attr-no-value': true,   // boolean类型的属性，不需要赋值
    'img-req-width-height': true,    // img标签需要width/height属性，且值不能为空
    'button-req-type': true,         // button标签需要type属性，且值不能为空
    'form-req-method-post': true     // form标签需要method属性，且值为post
};