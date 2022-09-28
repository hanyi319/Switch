/**
 * 长按 switch，改变 icon 样式：
 * 按下计时，若超过 2s，则添加样式 circle-screw
 */
let switchLangPressTimer;
const switchMouseDown = (labelElement) => {
  let time = 0;
  switchLangPressTimer = setInterval(() => {
    time += 200;
    if (time > 200) {
      labelElement.classList.add("circle-screw");
      clearInterval(switchLangPressTimer);
    }
  }, 200);
};

/**
 * switch 的监听事件：
 * 鼠标按下时，添加一个新的 DOM 节点，并设置计时器，给该节点添加样式 circle-screw
 * 鼠标抬起时，取消计时器，移除样式 circle-screw
 * 点击时，根据是否被 checked ，添加或删除：日间模式/夜间模式
 */
const switchEl = document.getElementById("switch");
switchEl.addEventListener("mousedown", () => {
  const nextLabel = switchEl.nextElementSibling;
  switchMouseDown(nextLabel);
});
switchEl.addEventListener("mouseup", (event) => {
  clearInterval(switchLangPressTimer);
  switchEl.nextElementSibling.classList.remove("circle-screw");
});
switchEl.addEventListener("click", function (event) {
  const { checked } = event.target;
  if (checked) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});
