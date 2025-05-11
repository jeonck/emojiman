function setupExpressionHandler() {
    const expressionSelect = document.getElementById('expression');
    expressionSelect.addEventListener('change', updateExpression);

    function updateExpression() {
        const expression = expressionSelect.value;
        const leftEye = document.querySelector('.emojiman-eye-left');
        const rightEye = document.querySelector('.emojiman-eye-right');
        const leftPupil = leftEye.querySelector('.emojiman-pupil');
        const rightPupil = rightEye.querySelector('.emojiman-pupil');
        const mouth = document.querySelector('.emojiman-mouth');
        const tongue = document.querySelector('.emojiman-tongue');
        const emojimanContainer = document.getElementById('emojimanContainer');

        // 모든 expression-xxx 클래스 제거
        emojimanContainer.classList.remove(
            'expression-happy', 'expression-sad', 'expression-surprised',
            'expression-angry', 'expression-wink', 'expression-cool',
            'expression-sleepy', 'expression-laugh'
        );
        // 선택된 표정 클래스 추가
        emojimanContainer.classList.add(`expression-${expression}`);

        // Reset transformations
        leftEye.style.transform = '';
        rightEye.style.transform = '';
        leftPupil.style.transform = 'translate(-50%, -50%)';
        rightPupil.style.transform = 'translate(-50%, -50%)';
        mouth.style.height = '40px';
        mouth.style.width = '80px';
        mouth.style.borderRadius = '0 0 80px 80px';
        mouth.style.bottom = '50px';
        mouth.style.transform = '';
        mouth.style.backgroundColor = '';
        tongue.style.display = 'block';
        leftEye.style.boxShadow = '';
        rightEye.style.boxShadow = '';
        // 눈 색상 항상 초기화 (쿨 표정에서만 덮어씀)
        leftEye.style.backgroundColor = 'white';
        rightEye.style.backgroundColor = 'white';
        leftEye.style.border = '3px solid black';
        rightEye.style.border = '3px solid black';
        // 눈썹 초기화
        document.querySelector('.emojiman-eyebrow-left').style.transform = '';
        document.querySelector('.emojiman-eyebrow-right').style.transform = '';

        switch (expression) {
            case 'happy':
                mouth.style.height = '40px';
                mouth.style.borderRadius = '0 0 80px 80px';
                tongue.style.display = 'block';
                break;
            case 'sad':
                mouth.style.height = '30px';
                mouth.style.borderRadius = '80px 80px 0 0';
                mouth.style.bottom = '40px';
                tongue.style.display = 'none';
                leftPupil.style.transform = 'translate(-50%, -70%)';
                rightPupil.style.transform = 'translate(-50%, -70%)';
                break;
            case 'surprised':
                mouth.style.height = '50px';
                mouth.style.width = '50px';
                mouth.style.borderRadius = '50%';
                tongue.style.display = 'none';
                leftEye.style.transform = 'scale(1.3)';
                rightEye.style.transform = 'scale(1.3)';
                break;
            case 'angry':
                leftEye.style.transform = 'rotate(-12deg)';
                rightEye.style.transform = 'rotate(12deg)';
                mouth.style.height = '25px';
                mouth.style.borderRadius = '80px 80px 0 0';
                mouth.style.bottom = '40px';
                tongue.style.display = 'none';
                break;
            case 'sleepy':
                mouth.style.height = '15px';
                mouth.style.borderRadius = '20px';
                mouth.style.bottom = '55px';
                tongue.style.display = 'none';
                break;
            case 'laugh':
                mouth.style.height = '45px';
                mouth.style.width = '90px';
                mouth.style.borderRadius = '0 0 100px 100px';
                mouth.style.bottom = '35px';
                tongue.style.display = 'block';
                break;
            case 'cool':
                mouth.style.height = '22px';
                mouth.style.width = '70px';
                mouth.style.borderRadius = '0 0 40px 40px';
                mouth.style.bottom = '53px';
                tongue.style.display = 'none';
                leftEye.style.backgroundColor = '#222';
                rightEye.style.backgroundColor = '#222';
                leftEye.style.border = '3px solid #111';
                rightEye.style.border = '3px solid #111';
                break;
            case 'excited':
                mouth.style.height = '55px';
                mouth.style.width = '95px';
                mouth.style.borderRadius = '0 0 120px 120px';
                mouth.style.bottom = '38px';
                tongue.style.display = 'block';
                leftEye.style.transform = 'translateY(-10px) scale(1.1)';
                rightEye.style.transform = 'translateY(-10px) scale(1.1)';
                break;
            case 'celebrate':
                mouth.style.height = '40px';
                mouth.style.width = '100px';
                mouth.style.borderRadius = '0 0 120px 120px';
                mouth.style.bottom = '40px';
                tongue.style.display = 'block';
                leftEye.style.boxShadow = '0 0 0 4px gold';
                rightEye.style.boxShadow = '0 0 0 4px gold';
                break;
            case 'resentful':
                mouth.style.height = '18px';
                mouth.style.width = '60px';
                mouth.style.borderRadius = '0 0 60px 60px / 0 0 40px 80px';
                mouth.style.bottom = '60px';
                mouth.style.transform = 'rotate(-10deg)';
                tongue.style.display = 'none';
                // 눈썹 비대칭
                document.querySelector('.emojiman-eyebrow-left').style.transform = 'rotate(20deg) translateY(4px)';
                document.querySelector('.emojiman-eyebrow-right').style.transform = 'rotate(-25deg) translateY(-6px)';
                // 눈동자 위치 비대칭
                leftPupil.style.transform = 'translate(-50%, -70%)';
                rightPupil.style.transform = 'translate(-50%, -30%)';
                break;
            case 'thinking':
                mouth.style.height = '8px';
                mouth.style.width = '65px';
                mouth.style.borderRadius = '0 0 60px 60px';
                mouth.style.bottom = '70px';
                mouth.style.transform = 'rotate(0deg)';
                mouth.style.backgroundColor = '#d32f2f';
                tongue.style.display = 'none';
                // 눈썹 더 강하게 기울이기
                document.querySelector('.emojiman-eyebrow-left').style.transform = 'rotate(-45deg)';
                document.querySelector('.emojiman-eyebrow-right').style.transform = 'rotate(45deg)';
                // 눈동자 더 위로
                leftPupil.style.transform = 'translate(-50%, -95%)';
                rightPupil.style.transform = 'translate(-50%, -95%)';
                break;
            // 나머지 표정은 CSS에서 처리
        }
    }

    return updateExpression;
}