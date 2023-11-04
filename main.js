const codedom=document.querySelector('#style-text')
const textdom=document.querySelector('#work-text')

window.onload = async () => {
  try {
    // 初始化
    await stepStyleList(renderlist);

    // 调整头部栏布局
    // await step("// 调整头部栏布局", codedom);

    // 简历布局
    /**
     * 使用stepDetail 创建子元素
     */
    await stepDetail("", textdom, "div", "headbox");
    /**
     * 头部的照片和简介
     */
    const headStylelist = [
      {
        content: "// 简历头部",
        style: {
          ".headbox": {
            display: "flex;",
            "align-items": "center;",
            "justify-content": "space-between;",
            "margin-bottom": "20px;",
          },
          ".headboxleft": {
            "padding-left": "10px !important;",
          },
          ".headboxleft img": {
            "border-radius": "50%;",
          },
          ".headboxright": {
            "min-height": "160px;",
          },
          ".centerbox": {
            display: "flex;",
            "justify-content": "space-between;",
            "align-items": "center;",
            background: "none !important;",
            padding: "0 !important;",
            "margin-bottom": "20px;",
          },

          ".centerboxleft": {
            width: "48%;",
            "min-height": "200px;",
            padding: "10px !important;",
            "padding-left": "20px !important;",
          },
          ".centerboxright": {
            width: "48%;",
            "min-height": "200px;",
            padding: "10px !important;",
            "padding-left": "20px !important;",
          },
          ".exworkbox": {
            "min-height": "100px;",
            "margin-bottom": "20px;",
          },
          ".footerbox": {
            "min-height": "100px;",
          },
          ".normal": {
            "font-family": "normal;",
            "font-size": "14px;",
          },
        },
      },
    ];
    await stepStyleList(headStylelist);

    const headboxdom = document.querySelector(".headbox");
    await stepDetail("", headboxdom, "div", "headboxleft");
    await stepDetail("", headboxdom, "div", "headboxright");

    await stepDetail("", textdom, "div", "centerbox");
    const centerboxdom = document.querySelector(".centerbox");
    await stepDetail("", centerboxdom, "div", "centerboxleft");
    await stepDetail("", centerboxdom, "div", "centerboxright");

    await stepDetail("", textdom, "div", "exworkbox");

    await stepDetail("", textdom, "div", "footerbox");

    await step("// 现在开始填写简历内容......", codedom);

    const url =
      "https://file.fishpi.cn/2022/07/MOSHED2022621164630-1b1ec532.gif?imageView2/1/w/210/h/210/interlace/0/q/100";
    const headboxleftdom = document.querySelector(".headboxleft");
    await stepDetailImg(headboxleftdom, url);

    const headboxrightdom = document.querySelector(".headboxright");

    await stepDetail(
      "hi guys ，这是stillwarter的动画简历，",
      headboxrightdom,
      "p",
      ""
    );

    await stepDetail(
      "这是我工作的第二年，code的第四年，",
      headboxrightdom,
      "p",
      ""
    );

    await stepDetail(
      "我在前端这个领域工作2年了，但是还是觉得自己还是个新手，",
      headboxrightdom,
      "p",
      ""
    );

    await stepDetail(
      "偶尔我会用业余时间做点小玩意，这是我探索web的一种方式。",
      headboxrightdom,
      "p",
      ""
    );

    await stepDetail(
      "希望未来的某一天，我真的能成为理想的自己！",
      headboxrightdom,
      "p",
      ""
    );

    const centerboxleftdom = document.querySelector(".centerboxleft");
    await stepDetail("我的技能：", centerboxleftdom, "p", "");

    await stepDetail(
      "* javascript：  🌟🌟🌟🌟🌟",
      centerboxleftdom,
      "p",
      "normal"
    );

    await stepDetail("* vue2，vue3：  🌟🌟🌟", centerboxleftdom, "p", "normal");

    await stepDetail("* css：  🌟🌟🌟", centerboxleftdom, "p", "normal");

    await stepDetail(
      "* other：  正在熟悉node和py",
      centerboxleftdom,
      "p",
      "normal"
    );

    const centerboxrigthdom = document.querySelector(".centerboxright");
    await stepDetail("常用工具：", centerboxrigthdom, "p", "");

    await stepDetail(
      "*🏳️‍🌈 代码编辑器：  vscode",
      centerboxrigthdom,
      "p",
      "normal"
    );

    await stepDetail(
      "*🎏 协同工具(版本控制)：  Git，SourceTree",
      centerboxrigthdom,
      "p",
      "normal"
    );

    await stepDetail(
      "*💾 IDE：  HBuilder(偶尔做一下移动端需求)",
      centerboxrigthdom,
      "p",
      "normal"
    );

    await stepDetail(
      "*💼 包管理工具： npm，pnpm",
      centerboxrigthdom,
      "p",
      "normal"
    );

    const exworkboxdom = document.querySelector(".exworkbox");
    await stepDetail("项目经历(隐藏公司名和时间)：", exworkboxdom, "p", "");

    await stepDetail(
      "金融类后台管理项目：参与表单开发，这个时期做一些简单的页面和数据处理。",
      exworkboxdom,
      "p",
      ""
    );

    await stepDetail(
      "光纤电缆监控项目：对光缆数据进行监控，这个时期主要做一些简单的地图功能的实现。",
      exworkboxdom,
      "p",
      ""
    );

    await stepDetail(
      "企业官网项目：完成一个企业官网，包括移动端；包括SSR优化，页面优化等等。",
      exworkboxdom,
      "p",
      ""
    );

    await stepDetail(
      "app应用软件：答题类软件，支持双端。",
      exworkboxdom,
      "p",
      ""
    );

    await stepDetail(
      "企业后台管理项目：配套app的后台，包括一些表单渲染，数据分析等等。",
      exworkboxdom,
      "p",
      ""
    );

    const footerboxdom = document.querySelector(".footerbox");

    await stepDetail("后续规划：", footerboxdom, "p", "");

    await stepDetail(
      "继续学习前端领域的各种知识以及技巧；",
      footerboxdom,
      "p",
      ""
    );
    await stepDetail(
      "着手开发自己的服务，尝试做一些后端工作；",
      footerboxdom,
      "p",
      ""
    );
    await stepDetail(
      "做一些有意思的小玩意，可以的话尝试参与开源项目；",
      footerboxdom,
      "p",
      ""
    );

    await step("// 一份简历动画就完成了", codedom);

    await step("// 感谢您的观看", codedom);

    const exportStylelist = [
      {
        content: "// 彩蛋",
        style: {
          "#export-text": {
            background: "#333;",
            width: "calc(100vw - 1220px);",
            "min-height": "90vh;",
            padding: "10px;",
            border: "1px solid red;",
            "border-radius": "4px;",
            position: "absolute;",
            right: "0px;",
            overflow: "auto;",
            "font-family": "catbite",
          },
        },
      },
    ];

    await stepStyleList(exportStylelist);
    const exportdom = document.querySelector("#export-text");
    await step("// 这是一个简历动画", exportdom);
    await step("// 本来打算做一个简历动画生成器的", exportdom);
    await step("// 但想着，用js去生成dom，有没有更好的方法", exportdom);
    await step("// 所以，生成功能，就先搁置了", exportdom);
    await step("// 不过一定会完善，敬请期待！", exportdom);
  } catch (error) {
    console.log(error);
  }
};
