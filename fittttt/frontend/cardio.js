document.addEventListener("DOMContentLoaded", function () {
    const exercises = [
        {
            name: "Jump Rope",
            image: "images/jump-rope.jpg",
            description: "A great full-body cardio workout that improves coordination and endurance.",
            difficulty: "beginner",
            steps: [
                "Hold the jump rope handles with both hands.",
                "Swing the rope over your head and jump as it passes under your feet.",
                "Maintain a steady rhythm and jump lightly.",
                "Continue for 30-60 seconds, then rest and repeat."
            ]
        },
        {
            name: "Sprints",
            image: "images/sprints.jpg",
            description: "Intense short bursts of running to enhance speed and cardiovascular fitness.",
            difficulty: "advanced",
            steps: [
                "Warm up with light jogging for 5 minutes.",
                "Sprint at full speed for 20-30 seconds.",
                "Walk or jog for 30-60 seconds to recover.",
                "Repeat for 5-10 rounds depending on fitness level."
            ]
        },
        {
            name: "Jumping Jacks",
            image: "images/Jumping-Jacks.jpg",
            description: "A simple yet effective cardio exercise that engages the whole body.",
            difficulty: "beginner",
            steps: [
                "Stand with feet together and arms at your sides.",
                "Jump up while spreading your legs and raising your arms.",
                "Return to the starting position and repeat for 30-60 seconds."
            ]
        },
        {
            name: "Burpees",
            image: "images/burpees.jpg",
            description: "A high-intensity full-body movement that builds endurance and strength.",
            difficulty: "advanced",
            steps: [
                "Start in a standing position.",
                "Drop into a squat and place your hands on the ground.",
                "Kick your feet back into a push-up position.",
                "Perform a push-up, then jump your feet back towards your hands.",
                "Explode upwards into a jump and repeat."
            ]
        },
        {
            name: "High Knees",
            image: "images/High-Knees.jpg",
            description: "A fast-paced cardio exercise that targets the legs and core.",
            difficulty: "beginner",
            steps: [
                "Stand with feet hip-width apart.",
                "Run in place while lifting your knees as high as possible.",
                "Keep your core engaged and pump your arms.",
                "Continue for 30-45 seconds per set."
            ]
        },
        {
            name: "Mountain Climbers",
            image: "images/Mountain-Climbers.jpg",
            description: "A full-body cardio move that improves endurance and agility.",
            difficulty: "advanced",
            steps: [
                "Start in a plank position with hands under shoulders.",
                "Bring your right knee towards your chest.",
                "Quickly switch legs, bringing the left knee forward while sending the right leg back.",
                "Continue alternating as fast as possible for 30-45 seconds."
            ]
        },
        {
            name: "Stair Climbing",
            image: "images/stair-climbing.jpg",
            description: "A great cardio workout that strengthens the legs and burns calories.",
            difficulty: "beginner",
            steps: [
                "Find a set of stairs or use a stair climber machine.",
                "Climb the stairs at a steady pace, using the railing if needed for support.",
                "Increase speed or take two steps at a time for a challenge.",
                "Continue for 1-3 minutes per set."
            ]
        },
        {
            name: "Box Jumps",
            image: "images/Box-Jumps1.jpg",
            description: "An explosive lower-body exercise that builds power and coordination.",
            difficulty: "advanced",
            steps: [
                "Stand in front of a sturdy box or platform.",
                "Bend your knees and jump onto the box, landing softly.",
                "Stand up fully, then step or jump back down.",
                "Repeat for 10-15 reps per set."
            ]
        }
    ];

    function displayExercises(filter) {
        const container = document.getElementById("exercise-list");
        container.innerHTML = "";

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

    displayExercises("all");

    window.filterExercises = function (level) {
        displayExercises(level);
    };
});
