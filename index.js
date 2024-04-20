console.log("hello");

let pre = document.querySelector(".pre");
let copy = document.querySelector(".copy");

console.log(pre, copy)

copy.addEventListener("click", () => {
  let a = navigator.clipboard.writeText(pre.textContent);

  if (a) {
    alert("text-copied");
  } else {
    alert("oops text not copied try again");
  }
});
