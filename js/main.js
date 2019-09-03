let l1 = document.querySelector("#id1");
let l2 = document.querySelector("#id2");


document.querySelector("#message").addEventListener("keyup", event => {
   l1.innerHTML = event.target.value;
   l2.innerHTML = event.target.value;
})
