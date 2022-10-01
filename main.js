/**
 * 长按开关，改变按钮样式：
 * 按下计时，若超过 2s，则添加一个按钮形变的样式 circle-screw
 */
let switchLongPressTimer;
const switchMouseDown = (labelElement) => {
  let time = 0;
  switchLongPressTimer = setInterval(() => {
    time += 200;
    if (time > 200) {
      labelElement.classList.add("circle-screw");
      clearInterval(switchLongPressTimer);
    }
  }, 200);
};

/**
 * 默认开关的监听事件:
 * 1.鼠标按下时，添加一个新的 DOM 节点，并设置计时器，给该节点添加样式 circle-screw
 * 2.鼠标抬起时，取消计时器，移除样式 circle-screw
 */
const switchDefault = document.getElementById("default");
switchDefault.addEventListener("mousedown", () => {
  const nextLabel = switchDefault.nextElementSibling;
  switchMouseDown(nextLabel);
});
switchDefault.addEventListener("mouseup", (event) => {
  clearInterval(switchLongPressTimer);
  switchDefault.nextElementSibling.classList.remove("circle-screw");
});

/**
 * 样式开关的监听事件：
 * 1.鼠标按下时，添加一个新的 DOM 节点，并设置计时器，给该节点添加样式 circle-screw
 * 2.鼠标抬起时，取消计时器，移除样式 circle-screw
 * 3.点击时，根据是否被 checked ，添加或删除：日间模式/夜间模式
 */
const switchTheme = document.getElementById("theme");
switchTheme.addEventListener("mousedown", () => {
  const nextLabel = switchTheme.nextElementSibling;
  switchMouseDown(nextLabel);
});
switchTheme.addEventListener("mouseup", (event) => {
  clearInterval(switchLongPressTimer);
  switchTheme.nextElementSibling.classList.remove("circle-screw");
});
switchTheme.addEventListener("click", function (event) {
  const { checked } = event.target;
  if (checked) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});
