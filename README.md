# normae-lint-html

normae-lint-html是适用于[normae](https://github.com/Lagou-Frontend/normae)的html静态代码检查插件，在[htmllint](https://github.com/htmllint/htmllint)的基础上配置扩展而成，代码规范依据于拉勾网前端的[Code Guide](https://github.com/Lagou-Frontend/Code-Guide)。

## 使用
fis-conf.js

```javascript
fis.match('*.html', {
    lint: fis.plugin('html')
});
```
shell

```shell
$ normae release -l
```

## 参数

### interrupt
* 表示在lint过程中检查到不合法的代码时，是否立即退出程序，停止release
* 默认值为false
	
	```javascript
	fis.match('*.html', {
	    lint: fis.plugin('html', {
	        interrupt: true
	    });
	});
```

### sets
* 表示lint检查的rule
* 默认值为

 ```javascript
 {
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
 ```
 
* 如果想修改以上htmllint默认的rule，请传入对应的rule和值以覆盖默认值，具体可以参考htmllint的[文档](https://github.com/htmllint/htmllint/wiki/Options)；如果想修改normae-lint-html自定义的rule，请传入对应的rule和false值以覆盖默认值，但是基本上不建议做修改。

	```javascript
	fis.match('*.html', {
	    lint: fis.plugin('html', {
	        sets: {
	            'tag-self-close': false
	        }
	    });
	});
	```
* 支持在html中通过内联语法来跳过某些rule的检查

	```html
	<!-- htmllint form-req-method-post="false" -->
   <form></form>
	```
	具体使用方法可以参考[htmllint文档](https://github.com/htmllint/htmllint/wiki/Inline-Configurations)，建议除非特殊情况，不要添加过多的这种跳过rule检查的代码。
