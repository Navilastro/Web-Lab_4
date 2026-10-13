const loadTasksBtn = document.getElementById('loadTasksBtn');
const statusMessage = document.getElementById('statusMessage');
const taskList = document.getElementById('taskList');

const taskManager = new TaskManager();

loadTasksBtn.addEventListener('click', async () => 
    {
    statusMessage.textContent = "Loading tasks...";
    
    try 
    {
        const rawTasks = await fetchTasks();
        
        const jsonString = JSON.stringify(rawTasks);
        const parsedData = JSON.parse(jsonString);
        
        const taskInstances = parsedData.map(t => new Task(t.id, t.title, t.completed));
        
        taskManager.setTasks(taskInstances);
        console.log("Task instances ready in TaskManager:", taskManager.tasks);
        
        statusMessage.textContent = "Data processed. Ready to render.";
        
    } catch (error) 
    {
        statusMessage.textContent = "Error fetching tasks.";
    }
});