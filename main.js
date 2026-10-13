const loadTasksBtn = document.getElementById('loadTasksBtn');
const statusMessage = document.getElementById('statusMessage');
const taskList = document.getElementById('taskList');

const taskManager = new TaskManager();

loadTasksBtn.addEventListener('click', async () => {
    statusMessage.textContent = "Loading tasks...";
    
    try 
    {
        const rawTasks = await fetchTasks();
        
        const jsonString = JSON.stringify(rawTasks);
        const parsedData = JSON.parse(jsonString);
        
        const taskInstances = parsedData.map(t => new Task(t.id, t.title, t.completed));
        
        taskManager.setTasks(taskInstances);
        renderTasks();
        
        statusMessage.textContent = ""; 
    } catch (error) 
    {
        statusMessage.textContent = "Error fetching tasks.";
    }
});

function renderTasks() 
{
    taskList.innerHTML = ''; 
    
    taskManager.tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        if (task.completed) 
        {
            taskDiv.classList.add('completed');
        }
        
        const titleSpan = document.createElement('span');
        titleSpan.textContent = task.title;
        
        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = 'Toggle';
        toggleBtn.addEventListener('click', () => {
            taskManager.toggleTask(task.id);
            renderTasks(); 
        });
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            taskManager.removeTask(task.id);
            renderTasks(); 
        });
        
        taskDiv.appendChild(titleSpan);
        taskDiv.appendChild(toggleBtn);
        taskDiv.appendChild(deleteBtn);
        taskList.appendChild(taskDiv);
    });
}