$(document).ready(function () {
    // GSAP animation for the header sticker
    gsap.from("img",{
        //  y: 50,
         x:-30,
         duration: 2,
         repeat : -1,
         yoyo: true
        });

    // GSAP animation for the title
    gsap.from("header h1", { x: -200, opacity: 0, duration: 1 });

    // Add task on button click
    $('#add-task').click(function () {
        const taskText = $('#new-task').val().trim();
        if (taskText !== '') {
            const newTask = $(`<li>${taskText} <button class="delete-task">Delete</button></li>`);
            
            // Append new task to the list
            $('#task-list').append(newTask);

            // Clear input field
            $('#new-task').val('');

            // Animate new task
            gsap.from(newTask, { opacity: 0, x: 100, duration: 0.5 });

            // Delete task functionality
            newTask.find('.delete-task').click(function () {
                // Animate task removal
                gsap.to(newTask, { x: 100, opacity: 0, duration: 0.5, onComplete: function () {
                    newTask.remove(); // Remove task after animation
                } });
            });
        }
    });

    // Add task on Enter key press
    $('#new-task').keypress(function (e) {
        if (e.which === 13) { // Enter key code
            $('#add-task').click(); // Trigger button click
        }
    });
});
