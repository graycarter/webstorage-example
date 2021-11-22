let local = document.getElementById("local");
let local_btn = document.getElementById("local-btn");
let session_btn = document.getElementById("session-btn");

local_btn.onclick = () => {
  local.onsubmit = (event) => {
    var data = new FormData(local);

    for (let entry of data.entries()) {
      localStorage.setItem(entry[0], entry[1]);
    }
    event.preventDefault();
  };
};

session_btn.onclick = () => {
  local.onsubmit = (event) => {
    var data = new FormData(local);

    for (let entry of data.entries()) {
      sessionStorage.setItem(entry[0], entry[1]);
    }
    event.preventDefault();
  };
};
