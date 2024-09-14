document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('ft_list');
    const newTaskButton = document.getElementById('newTask');

    // Load existing tasks from cookies
    loadTasks();

    // Event listener for 'New' button
    newTaskButton.addEventListener('click', function () {
        const taskText = prompt('Enter a new TO DO:');
        if (taskText) {
            addTask(taskText);
            console.log('Prompt result:', taskText); // Log the result of the prompt
            saveTasks();
        }
    });

    // Function to add a new task to the DOM
    function addTask(taskText) {
        if (!taskText) return; // Avoid adding empty tasks

        const task = document.createElement('div');
        task.className = 'todo';
        task.textContent = taskText;

        // Add click event to remove task
        task.addEventListener('click', function () {
            const confirmDelete = confirm('Do you want to remove this TO DO?');
            if (confirmDelete) {
                task.remove();
                saveTasks();
            }
        });

        // Prepend to the list (add at the top)
        taskList.prepend(task);
    }

    // Save tasks to cookies
    function saveTasks() {
        const tasks = Array.from(taskList.children).map(task => task.textContent);
        const jsonTasks = JSON.stringify(tasks);
        console.log('Saving tasks:', jsonTasks); // ตรวจสอบข้อมูลที่บันทึก
        document.cookie = `tasks=${encodeURIComponent(jsonTasks)}; path=/; max-age=${60 * 60 * 24 * 7}`; // Save for 7 days
    }
    

    function loadTasks() {
        const cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith('tasks='))?.split('=')[1];
        
        if (cookieValue) {
            try {
                const decodedValue = decodeURIComponent(cookieValue);
                console.log('Cookie Value:', decodedValue); // ตรวจสอบข้อมูลในคุกกี้
                const tasks = JSON.parse(decodedValue);
                tasks.reverse().forEach(taskText => addTask(taskText));
            } catch (error) {
                console.error('Error parsing JSON from cookies:', error);
            }
        }
    }
    
});
