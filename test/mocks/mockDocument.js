const createMockDocument = (value) => {
    document.body.innerHTML = `
      <input type="text" id="task-info" value=${value}/>
      <ul class="container">
        <li class="tasks"></li>
      </ul>
      `;
  };
  
  export default createMockDocument;