
    function calculateScore() {
        // Définir les réponses correctes
        const correctAnswers = {
            q1: 'c',
            q2: 'c',
            q3: 'a',
            q4: 'b',
            q5: 'c',
            q6: 'b',
            q7: 'b',
            q8: 'a',
            q9: 'a',
            q10: 'b',
            // Ajoutez d'autres réponses de manière similaire
        };

        // Initialiser le score
        let score = 0;

        // Vérifier les réponses
        for (let i = 1; i <= Object.keys(correctAnswers).length; i++) {
            const questionName = 'q' + i;
            const userAnswer = document.querySelector(`input[name="${questionName}"]:checked`);

            if (userAnswer) {
                if (userAnswer.value === correctAnswers[questionName]) {
                    score
                    score++;
                }
            }
        }

        // Afficher le résultat
        const resultContainer = document.getElementById('result');
        resultContainer.innerHTML = `Votre score est ${score} sur ${Object.keys(correctAnswers).length}.`;

        // Afficher les réponses correctes
        for (const question in correctAnswers) {
            resultContainer.innerHTML += `<p>Question ${question.slice(1)} : ${correctAnswers[question]}</p>`;
        }
    }
