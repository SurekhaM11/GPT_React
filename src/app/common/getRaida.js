import { Api } from "./Api";

const signalWrap = document.getElementById("signalWrap");

export const getRaida = async () => {
  try {
    const response = await Api.getEcho("/echo");
    if (response) {
      const data = await response.json();
      taskId = data.payload.id;
      console.log(taskId);
      doTaskPoll(taskId);
    }
  } catch (error) {
    console.error(error);
  }
};

// Get information about a previously created task

export const doTaskPoll = async (taskId) => {
  const response = await Api.getTaskId(taskId);
  if (response) {
    const data = await response.json();
    var latencies = data.payload?.data?.latencies;
    console.log(latencies);
    if (data.payload.status == "completed") {
      for (let d of latencies) {
        if (d != 0) {
          const signalDiv = document.createElement("div");
          signalDiv.style.backgroundColor = "#39D02B";
          signalDiv.style.width = "5px";
          signalDiv.style.height = "95%";
          // signalDiv.style.margin = '10px'
          signalWrap.appendChild(signalDiv);
        } else {
          const signalDiv = document.createElement("div");
          signalDiv.style.backgroundColor = "rgb(255, 60, 45)";
          signalDiv.style.width = "5px";
          signalDiv.style.height = "95%";
          signalWrap.appendChild(signalDiv);
        }
      }
      return;
    }
    setTimeout(() => {
      doTaskPoll(taskID);
    }, 500);
  } else {
    console.log("connection lost");
  }
};
