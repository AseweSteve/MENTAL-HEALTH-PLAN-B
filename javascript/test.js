// DepressionTest array contains questions for the mental health assessment
var DepressionTest = [
    "No interest or pleasure in doing things",
    "Feeling down, depressed, or hopeless",
    "Trouble falling or staying asleep, or sleeping too much",
    "Poor appetite or overeating",
    "Feeling tired or having little energy",
    "Thoughts that you would be better off dead, or of hurting yourself",
    "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
    "Trouble concentrating on things, such as reading the newspaper or watching television",
    "Moving or speaking so slowly that other people could have noticed",
    "Do you ever feel to give such mental Health test",
    ""
];

var length = DepressionTest.length;
var currentQuestionIndex = -1;
var score = 0;
var finalScore = 0;

function startGame() {
    $(".start-btn").click(function() {
        $(this).toggleClass('hide');
        $("#question-container").removeClass('hide');
        $("#next-button").removeClass('hide');
        currentQuestionIndex = 0; // Reset index to start from the first question
        displayQuestion(); // Display the first question
    });
}

function displayQuestion() {
    if (currentQuestionIndex < length - 1) {
        $("#question").text(DepressionTest[currentQuestionIndex]);
        $("#question-count").text(`${currentQuestionIndex + 1}/${DepressionTest.length}`);
    } else {
        $("#next-button").addClass('hide');
        $("#result-button").removeClass('hide');
        $("#question-count").addClass('hide');
    }
}

$("#next-button").click(function() {
    // Save the score from the selected answer
    var selectedScore = parseInt($(".btn.active").attr('name'));
    finalScore += isNaN(selectedScore) ? 0 : selectedScore;

    currentQuestionIndex++;
    displayQuestion();
});

$("#result-button").click(function() {
    // Calculate and display the result based on the final score
    var averageScore = finalScore / (length - 2); // Excluding the last question
    var result = "";

    if (averageScore <= 0) {
        result = "You have severe Depression. 😫";
    } else if (averageScore > 0 && averageScore <= 1) {
        result = "You are in Depression. 😩";
    } else if (averageScore > 1 && averageScore <= 2) {
        result = "You are having Mild Depression. 😳";
    } else if (averageScore > 2 && averageScore <= 3) {
        result = "You are in the Middle. 😬";
    } else if (averageScore > 3 && averageScore <= 4) {
        result = "You are fine. 😊";
    } else if (averageScore > 4) {
        result = "Chill, you are perfectly fine. 😄";
    }

    $("#result").text(result);
    $("#result").show(); // Show the result
});

// Add event listeners for the answer buttons
$(".btn").click(function() {
    $(".btn").removeClass('active'); // Remove active class from other buttons
    $(this).addClass('active'); // Add active class to the clicked button
});

startGame();
