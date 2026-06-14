document.addEventListener("DOMContentLoaded", function () {
    const exercises = [
        {
            name: "Squats",
            image: "images/squats.jpg",
            description: "Squats help build leg strength and core stability.",
            difficulty: "beginner",
            steps: [
                "Stand with feet shoulder-width apart.",
                "Lower your body by bending your knees and pushing your hips back.",
                "Keep your chest up and back straight.",
                "Go down until your thighs are parallel to the floor.",
                "Push through your heels to return to the starting position."
            ]
        },
        {
            name: "Deadlifts",
            image: "images/deadlifts.jpg",
            description: "A compound movement that targets your lower back, glutes, and hamstrings.",
            difficulty: "advanced",
            steps: [
                "Stand with feet hip-width apart, barbell in front of you.",
                "Bend at the hips and knees, gripping the bar with both hands.",
                "Keep your back straight and core tight.",
                "Lift the bar by extending your hips and standing up straight.",
                "Slowly lower the bar back to the ground."
            ]
        },
        {
            name: "Bench Press",
            image: "images/benchpress.jpg",
            description: "Great for building upper body strength, targeting the chest, shoulders, and triceps.",
            difficulty: "beginner",
            steps: [
                "Lie on a bench with feet flat on the floor.",
                "Grip the bar slightly wider than shoulder-width.",
                "Lower the bar to your chest in a controlled manner.",
                "Push the bar back up until your arms are fully extended.",
                "Repeat for the desired number of reps."
            ]
        },
        {
            name: "Pull-ups",
            image: "images/pullups.jpg",
            description: "Pull-ups help develop upper body strength, mainly the back and arms.",
            difficulty: "advanced",
            steps: [
                "Grip a pull-up bar with hands slightly wider than shoulder-width.",
                "Hang with arms fully extended and engage your core.",
                "Pull your body up until your chin is above the bar.",
                "Lower yourself slowly to the starting position."
            ]
        },
        {
            name: "Overhead Press",
            image: "images/overhead-press.jpg",
            description: "A great movement for developing shoulder and upper body strength.",
            difficulty: "advanced",
            steps: [
                "Stand with feet shoulder-width apart and hold the barbell at shoulder height.",
                "Keep your core tight and press the bar straight up.",
                "Lower the bar back to shoulder height in a controlled manner.",
                "Repeat for the desired reps."
            ]
        },
        {
            name: "Lunges",
            image: "images/lunges.jpg",
            description: "Lunges improve leg strength, balance, and coordination.",
            difficulty: "beginner",
            steps: [
                "Stand with feet together.",
                "Step forward with one leg and lower your hips until both knees are at 90-degree angles.",
                "Keep your chest up and core engaged.",
                "Push through your front heel to return to the starting position.",
                "Repeat with the other leg."
            ]
        },
        {
            name: "Plank",
            image: "images/plank.jpg",
            description: "A core-strengthening exercise that improves stability.",
            difficulty: "beginner",
            steps: [
                "Get into a push-up position but rest on your forearms.",
                "Keep your body in a straight line from head to heels.",
                "Engage your core and hold the position for as long as possible.",
                "Avoid dropping your hips or lifting your butt too high."
            ]
        }
    ];

    
    function displayExercises(filter) {
        const container = document.getElementById("exercise-list");
        container.innerHTML = ""; // Clear previous content

        const filteredExercises = filter === "all" ? exercises : exercises.filter(ex => ex.difficulty === filter);

        filteredExercises.forEach(exercise => {
            const div = document.createElement("div");
            div.classList.add("exercise");

            let stepsList = "<ul>";
            exercise.steps.forEach(step => {
                stepsList += `<li>${step}</li>`;
            });
            stepsList += "</ul>";

            div.innerHTML = `
                <img src="${exercise.image}" alt="${exercise.name}">
                <h3>${exercise.name}</h3>
                <p>${exercise.description}</p>
                <h4>How to do it:</h4>
                ${stepsList}
            `;

            container.appendChild(div);
        });
    }

    // Display all exercises on page load
    displayExercises("all");

    // Function to filter exercises
    window.filterExercises = function (level) {
        displayExercises(level);
    };
});
