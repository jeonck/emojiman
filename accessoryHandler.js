function setupAccessoryHandler() {
    const accessorySelect = document.getElementById('accessory');
    const accessoryContainer = document.getElementById('accessoryContainer');
    accessorySelect.addEventListener('change', updateAccessory);

    function updateAccessory() {
        const accessory = accessorySelect.value;
        accessoryContainer.innerHTML = '';

        switch (accessory) {
            case 'headphones':
                const headphones = document.createElement('div');
                headphones.style.position = 'absolute';
                headphones.style.top = '0px';
                headphones.style.left = '50%';
                headphones.style.transform = 'translateX(-50%)';
                headphones.style.width = '200px';
                headphones.style.height = '50px';
                headphones.style.zIndex = '10';

                const band = document.createElement('div');
                band.style.position = 'absolute';
                band.style.width = '200px';
                band.style.height = '15px';
                band.style.backgroundColor = '#333333';
                band.style.borderRadius = '15px';
                band.style.border = '3px solid black';
                band.style.top = '0';

                const leftEar = document.createElement('div');
                leftEar.style.position = 'absolute';
                leftEar.style.width = '40px';
                leftEar.style.height = '40px';
                leftEar.style.backgroundColor = '#333333';
                leftEar.style.borderRadius = '50%';
                leftEar.style.border = '3px solid black';
                leftEar.style.left = '-5px';
                leftEar.style.top = '10px';

                const rightEar = document.createElement('div');
                rightEar.style.position = 'absolute';
                rightEar.style.width = '40px';
                rightEar.style.height = '40px';
                rightEar.style.backgroundColor = '#333333';
                rightEar.style.borderRadius = '50%';
                rightEar.style.border = '3px solid black';
                rightEar.style.right = '-5px';
                rightEar.style.top = '10px';

                headphones.appendChild(band);
                headphones.appendChild(leftEar);
                headphones.appendChild(rightEar);
                accessoryContainer.appendChild(headphones);
                break;

            case 'star':
                const star = document.createElement('div');
                star.style.position = 'absolute';
                star.style.top = '-40px';
                star.style.left = '50%';
                star.style.transform = 'translateX(-50%)';
                star.style.width = '40px';
                star.style.height = '40px';
                star.style.backgroundColor = '#FFD700';
                star.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
                star.style.border = '3px solid black';
                star.style.zIndex = '10';
                accessoryContainer.appendChild(star);
                break;

            case 'heart':
                const heart = document.createElement('div');
                heart.style.position = 'absolute';
                heart.style.top = '-40px';
                heart.style.left = '50%';
                heart.style.transform = 'translateX(-50%)';
                heart.style.width = '40px';
                heart.style.height = '40px';
                heart.style.backgroundColor = '#FF4D4D';
                heart.style.clipPath = 'polygon(50% 80%, 100% 30%, 80% 0%, 20% 0%, 0% 30%)';
                heart.style.border = '3px solid black';
                heart.style.zIndex = '10';
                accessoryContainer.appendChild(heart);
                break;
        }
    }

    return updateAccessory;
}