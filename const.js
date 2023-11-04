const renderlist = [
  {
    content: "// 这是一个简单的简历动画",
    style: false,
  },
  {
    content: "/* 先给全局加一个效果\n(css省略大括号) */",
    style: {
      "*": {
        transition: "all .3s linear;",
      },
    },
  },
  {
    content: "// 调整一下对话框样式",
    style: {
      "#content": {
        height: "90vh;",
        color: "#857F6B !important;",
      },
      "#style-text": {
        background: "#333;",
        width: "430px;",
        "min-height": "90vh;",
        padding: "10px;",
        border: "1px solid red;",
        "border-radius": "4px;",
        position: "absolute;",
        bottom: "0px;",
        overflow: "auto;",
      },
    },
  },
  {
    content: "// 换一个我喜欢的字体",
    style: {
      "#style-text": {
        "font-family": "catbite",
      },
    },
  },
  {
    content: "// ok 我们做一点调整 尽量让它看起来好看点",
    style: {
      "*": {
        margin: "0;",
      },
      p: {
        "margin-top": "10px;",
      },
      ".classkey": {
        color: "pink;",
        display: "block;",
        "margin-top": "10px;",
        "font-size": "14px;",
      },
      ".classattrkey": {
        color: "#16f979;",
        "padding-left": "12px;",
        "font-size": "12px;",
      },
      ".classattrvalue": {
        color: "#a3dff1;",
        "font-size": "12px;",
      },
    },
  },
  {
    content: "// 现在准备一个空白栏",
    style: {
      "#content": {
        width: "100vw;",
        display: "flex;",
        "justify-content": "space-between;",
      },
      "#work-text": {
        width: "720px;",
        "background-color": "#ddf4ff;",
        "border-radius": "4px;",
        opacity: "0.4;",
        "box-shadow": "inset 0 0 6px rgba(255, 255, 255);",
        position: "absolute;",
        left: "450px;",
        overflow: "auto;",
        padding: "10px;",
        "font-family": "catbite;",
      },
    },
  },
  {
    content: "// 现在可以开始写简历了",
    style: false,
  },
  {
    content: "// 我们先准备简历的整体布局",
    style: {
      "#work-text div": {
        padding: "10px;",
        background: "#eee;",
        "border-radius": "4px;",
        color: "#000 !important;",
      },
    },
  },
];
