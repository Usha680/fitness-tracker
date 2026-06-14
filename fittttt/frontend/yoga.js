document.addEventListener("DOMContentLoaded", function () {
    const exercises = [
        {
            name: "Child's Pose",
            image: "images/Child's-pose.jpg",
            description: "A relaxing stretch that helps to release tension in the back and shoulders.",
            difficulty: "beginner",
            steps: [
                "Kneel on the floor with your big toes touching and sit back on your heels.",
                "Extend your arms forward and rest your forehead on the ground.",
                "Breathe deeply and hold the pose for 30-60 seconds."
            ]
        },
        {
            name: "Downward Dog",
            image: "images/Downdog.jpg",
            description: "A foundational yoga pose that stretches the back, shoulders, and hamstrings.",
            difficulty: "beginner",
            steps: [
                "Start in a plank position with hands shoulder-width apart.",
                "Lift your hips up towards the ceiling, forming an inverted V-shape.",
                "Press your heels toward the floor and relax your neck.",
                "Hold for 30 seconds while breathing deeply."
            ]
        },
        {
            name: "Warrior II",
            image: "images/warrior.jpg",
            description: "A strengthening pose that builds endurance and improves balance.",
            difficulty: "beginner",
            steps: [
                "Stand with your feet wide apart, turning one foot 90 degrees outward.",
                "Bend your front knee while keeping your back leg straight.",
                "Extend your arms parallel to the ground and hold for 30 seconds.",
                "Switch sides and repeat."
            ]
        },
        {
            name: "Tree Pose",
            image: "images/Treepose.jpg",
            description: "A balancing pose that strengthens the legs and core while improving focus.",
            difficulty: "beginner",
            steps: [
                "Stand tall and shift your weight onto one leg.",
                "Place the sole of the other foot on your inner thigh or calf (avoid the knee).",
                "Bring your hands to your chest or extend them overhead.",
                "Hold for 20-30 seconds, then switch sides."
            ]
        },
        {
            name: "Pigeon Pose",
            image: "images/pigeonpose.jpg",
            description: "A deep stretch for the hips that helps to release tension and improve flexibility.",
            difficulty: "advanced",
            steps: [
                "Start in a downward dog position.",
                "Bring one knee forward, placing it near your hands, while extending the other leg back.",
                "Lower your upper body over the front leg and hold for 30-60 seconds.",
                "Switch sides and repeat."
            ]
        },
        {
            name: "Camel Pose",
            image: "images/camelpose.jpg",
            description: "A deep backbend that opens up the chest, shoulders, and spine.",
            difficulty: "advanced",
            steps: [
                "Kneel on the floor with your knees hip-width apart.",
                "Place your hands on your lower back and slowly lean backward.",
                "If comfortable, reach your hands to your heels.",
                "Hold for 20-30 seconds while breathing deeply."
            ]
        },
        {
            name: "Crow Pose",
            image: "images/crow-pose.jpg",
            description: "An arm-balancing pose that strengthens the upper body and core.",
            difficulty: "advanced",
            steps: [
                "Start in a squat position with your palms flat on the ground.",
                "Bend your elbows slightly and place your knees on your upper arms.",
                "Shift your weight forward and lift your feet off the ground.",
                "Hold for 10-20 seconds before lowering down."
            ]
        },
        {
            name: "Seated Forward Bend",
            image: "images/seatedforward.jpg",
            description: "A deep hamstring and lower back stretch that promotes relaxation.",
            difficulty: "beginner",
            steps: [
                "Sit with your legs extended straight in front of you.",
                "Inhale and lengthen your spine, then exhale as you reach forward.",
                "Try to touch your toes while keeping your back straight.",
                "Hold for 30-60 seconds."
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
