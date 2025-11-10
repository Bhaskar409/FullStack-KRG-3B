const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.getElementById("drawingArea");
    const colorPicker = document.getElementById("colorPicker");
    const undoBtn = document.getElementById("undoBtn");
    const clearBtn = document.getElementById("clearBtn");

    let isDrawing = false;
    let startX = 0;
    let startY = 0;
    let currentCircle = null;
    let undoStack = [];

   
    svg.addEventListener("mousedown", (e) => {
      isDrawing = true;
      const rect = svg.getBoundingClientRect();
      startX = e.clientX - rect.left;
      startY = e.clientY - rect.top;

      currentCircle = document.createElementNS(svgNS, "circle");
      currentCircle.setAttribute("cx", startX);
      currentCircle.setAttribute("cy", startY);
      currentCircle.setAttribute("r", 0);
      currentCircle.setAttribute("fill", colorPicker.value);
      svg.appendChild(currentCircle);
    });

   
    svg.addEventListener("mousemove", (e) => {
      if (!isDrawing) return;
      const rect = svg.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;
      const radius = Math.sqrt(Math.pow(currentX - startX, 2) + Math.pow(currentY - startY, 2));
      currentCircle.setAttribute("r", radius);
    });

   
    svg.addEventListener("mouseup", () => {
      if (isDrawing) {
        isDrawing = false;
        if (currentCircle) {
          undoStack.push(currentCircle);
          currentCircle = null;
        }
      }
    });

  
    undoBtn.addEventListener("click", () => {
      const last = undoStack.pop();
      if (last) {
        svg.removeChild(last);
      }
    });

 
    clearBtn.addEventListener("click", () => {
      undoStack.forEach(el => svg.removeChild(el));
      undoStack = [];
    });
