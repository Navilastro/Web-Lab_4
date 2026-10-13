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
        
        console.log("Tasks fetched:", rawTasks);
        statusMessage.textContent = "Tasks fetched successfully (Ready for JSON process).";
        
    } catch (error) 
    {
        statusMessage.textContent = "Error fetching tasks.";
    }
});