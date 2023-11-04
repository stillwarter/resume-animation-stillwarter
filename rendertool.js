/**
 *
 * @param {Number} milliseconds
 * @returns
 * 停顿函数，若有需要手动调增加动画间隔
 */
function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

/**
 *
 * @param {String} word
 * @param {DocumentType} dom
 * @returns
 * 基础语句的增加函数
 */
function step(word, dom) {
  // intervalId = null;
  return new Promise((resolve, reject) => {
    const pdom = document.createElement("p");
    let i = 0;
    let len = word.length;
    intervalId = setInterval(() => {
      if (i < len) {
        pdom.innerHTML += word[i++];
        dom.appendChild(pdom);
      } else {
        clearInterval(intervalId);
        resolve("Step result");
      }
    }, 50);
  });
}

/**
 *
 * @param {String} word
 * @param {DocumentType} dom
 * @param {String} wordstyle
 * @returns
 * 增加元素的函数，往父元素dom里增加span元素（增加语句）
 */
function setpStyle(word, dom, wordstyle = "") {
  return new Promise((resolve, reject) => {
    const pdom = document.createElement("span");
    pdom.className = wordstyle;
    let i = 0;
    let len = word.length;
    intervalId = setInterval(() => {
      if (i < len) {
        pdom.innerHTML += word[i++];
        dom.appendChild(pdom);
      } else {
        clearInterval(intervalId);
        resolve("Step result");
      }
    }, 20);
  });
}

/**
 *
 * @param {String} word
 * @param {DocumentType} parentDom
 * @param {DocumentType } domType
 * @param {String} className
 * @returns
 * 不同于setpStyle，这个函数支持生成其他类型的type 比如div button等
 */
function stepDetail(word, parentDom, domType, className = "") {
  return new Promise((resolve, reject) => {
    const dom = document.createElement(domType);
    dom.className = className;
    let i = 0;
    const len = word.length;
    intervalId = setInterval(() => {
      if (i < len) {
        dom.innerHTML += word[i++];
        parentDom.appendChild(dom);
      } else {
        // 没有word传入，也将dom添加到父节点
        parentDom.appendChild(dom);
        clearInterval(intervalId);
        resolve("Step result");
      }
    }, 50);
  });
}

/**
 *
 * @param {DocumentType} parenDdom
 * @param {img url} url
 * @param {String} wordStyle
 * @returns
 * 针对img元素的函数
 */
function stepDetailImg(parenDdom, url, wordStyle = "") {
  return new Promise((resolve, reject) => {
    const dom = document.createElement("img");
    dom.className = wordStyle;
    dom.src = url;
    parenDdom.appendChild(dom);
    resolve("Step result");
  });
}

/**
 *
 * @param {*} stylecontent
 * 处理 特定style内容的函数 配合声明的stylelist
 */
function addHeadStyle(stylecontent) {
  stylecontent = JSON.stringify(stylecontent)
    .toString()
    .slice(1, -1)
    .replace(/"/g, "")
    .replace(/,/g, "");
  const sdom = document.createElement("style");
  sdom.type = "text/css";
  sdom.innerHTML = stylecontent;
  document.querySelector("head").appendChild(sdom);
}

/**
 *  默认传入的list是renderlist样子的
 * @param {*} stylelist
 * 循环处理stylelist的函数，用于简化code
 */
async function stepStyleList(stylelist) {
  for (const item of stylelist) {
    if (item.style) {
      await step(item.content, codedom);
      const stylelist = Object.entries(item.style);
      for (const styleitem of stylelist) {
        await setpStyle(styleitem[0] + "\n", codedom, "classkey");
        const attr = Object.entries(styleitem[1]);
        for (const attritem of attr) {
          await setpStyle(attritem[0] + ":", codedom, "classattrkey");
          await setpStyle(attritem[1] + "\n", codedom, "classattrvalue");
        }

        addHeadStyle(styleitem);
      }
    } else {
      await step(item.content, codedom);
    }
  }
}
