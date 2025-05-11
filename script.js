document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const bodyColorInput = document.getElementById('bodyColor');
    const headColorInput = document.getElementById('headColor');
    const expressionSelect = document.getElementById('expression');
    const accessorySelect = document.getElementById('accessory');
    const emojimanContainer = document.getElementById('emojimanContainer');
    const accessoryContainer = document.getElementById('accessoryContainer');
    const downloadBtn = document.getElementById('downloadBtn');
    const gallery = document.getElementById('gallery');

    // Debugging: Check if elements are found
    console.log('Elements loaded:', {
        generateBtn,
        bodyColorInput,
        headColorInput,
        expressionSelect,
        accessorySelect,
        emojimanContainer,
        accessoryContainer,
        downloadBtn,
        gallery
    });

    // Apply colors from inputs
    bodyColorInput.addEventListener('input', () => {
        document.querySelectorAll('.emojiman-body, .emojiman-arm, .emojiman-leg').forEach(el => {
            el.style.backgroundColor = bodyColorInput.value;
        });
        document.querySelector('.emojiman-mouth').style.backgroundColor = bodyColorInput.value;
        const tongueColor = lightenColor(bodyColorInput.value, 20);
        document.querySelector('.emojiman-tongue').style.backgroundColor = tongueColor;
    });

    headColorInput.addEventListener('input', () => {
        document.querySelector('.emojiman-head').style.backgroundColor = headColorInput.value;
    });

    // Function to lighten a color
    function lightenColor(color, amount) {
        return '#' + color.replace(/^#/, '').replace(/../g, color => {
            const num = Math.min(255, Math.floor(parseInt(color, 16) + amount));
            return num.toString(16).padStart(2, '0');
        });
    }

    // Change expression based on selection
    expressionSelect.addEventListener('change', updateExpression);

    function updateExpression() {
        const expression = expressionSelect.value;
        const leftEye = document.querySelector('.emojiman-eye-left');
        const rightEye = document.querySelector('.emojiman-eye-right');
        const leftPupil = leftEye.querySelector('.emojiman-pupil');
        const rightPupil = rightEye.querySelector('.emojiman-pupil');
        const mouth = document.querySelector('.emojiman-mouth');
        const tongue = document.querySelector('.emojiman-tongue');

        // Reset transformations
        leftEye.style.transform = '';
        rightEye.style.transform = '';
        leftPupil.style.transform = 'translate(-50%, -50%)';
        rightPupil.style.transform = 'translate(-50%, -50%)';
        mouth.style.height = '40px';
        mouth.style.width = '80px';
        mouth.style.borderRadius = '0 0 80px 80px';
        mouth.style.bottom = '50px';
        tongue.style.display = 'block';

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
        }
    }

    // Change accessory based on selection
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

    // Generate Emojiman
    generateBtn.addEventListener('click', () => {
        console.log('Generate button clicked'); // Debugging

        // Update current Emojiman
        updateExpression();
        updateAccessory();

        try {
            // Clone the current Emojiman
            const clone = emojimanContainer.cloneNode(true);
            console.log('Clone created:', clone); // Debugging

            // Apply scaling to fit gallery
            const scaleFactor = 0.6;
            clone.style.transform = `scale(${scaleFactor})`;
            clone.style.transformOrigin = 'top center';
            clone.style.width = '250px';
            clone.style.height = '400px';
            clone.style.margin = '0 auto';

            // Copy inline styles to ensure colors are preserved
            const originalHead = emojimanContainer.querySelector('.emojiman-head');
            const originalBody = emojimanContainer.querySelector('.emojiman-body');
            const originalMouth = emojimanContainer.querySelector('.emojiman-mouth');
            const originalTongue = emojimanContainer.querySelector('.emojiman-tongue');
            const originalArms = emojimanContainer.querySelectorAll('.emojiman-arm');
            const originalLegs = emojimanContainer.querySelectorAll('.emojiman-leg');

            const clonedHead = clone.querySelector('.emojiman-head');
            const clonedBody = clone.querySelector('.emojiman-body');
            const clonedMouth = clone.querySelector('.emojiman-mouth');
            const clonedTongue = clone.querySelector('.emojiman-tongue');
            const clonedArms = clone.querySelectorAll('.emojiman-arm');
            const clonedLegs = clone.querySelectorAll('.emojiman-leg');

            if (clonedHead && originalHead) clonedHead.style.backgroundColor = originalHead.style.backgroundColor;
            if (clonedBody && originalBody) clonedBody.style.backgroundColor = originalBody.style.backgroundColor;
            if (clonedMouth && originalMouth) clonedMouth.style.backgroundColor = originalMouth.style.backgroundColor;
            if (clonedTongue && originalTongue) clonedTongue.style.backgroundColor = originalTongue.style.backgroundColor;
            clonedArms.forEach((arm, index) => {
                if (originalArms[index]) arm.style.backgroundColor = originalArms[index].style.backgroundColor;
            });
            clonedLegs.forEach((leg, index) => {
                if (originalLegs[index]) leg.style.backgroundColor = originalLegs[index].style.backgroundColor;
            });

            // Simplify accessory scaling
            const clonedAccessoryContainer = clone.querySelector('#accessoryContainer');
            if (clonedAccessoryContainer && clonedAccessoryContainer.children.length > 0) {
                const accessory = clonedAccessoryContainer.children[0];
                if (accessorySelect.value === 'headphones') {
                    accessory.style.width = `${200 * scaleFactor}px`;
                    accessory.style.height = `${50 * scaleFactor}px`;
                    accessory.style.top = `${0 * scaleFactor}px`;
                } else if (accessorySelect.value === 'star' || accessorySelect.value === 'heart') {
                    accessory.style.width = `${40 * scaleFactor}px`;
                    accessory.style.height = `${40 * scaleFactor}px`;
                    accessory.style.top = `${-40 * scaleFactor}px`;
                }
            }

            // Create a wrapper for the gallery item
            const wrapper = document.createElement('div');
            wrapper.className = 'p-4 border rounded-lg dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex flex-col items-center';

            // Add a delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'mt-2 py-1 px-3 bg-red-600 hover:bg-red-700 text-white text-sm rounded';
            deleteBtn.textContent = '삭제';
            deleteBtn.addEventListener('click', () => {
                wrapper.remove();
            });

            wrapper.appendChild(clone);
            wrapper.appendChild(deleteBtn);
            gallery.appendChild(wrapper);
            console.log('Gallery item added'); // Debugging

            // Show download button
            downloadBtn.classList.remove('hidden');
        } catch (error) {
            console.error('Error generating Emojiman:', error);
        }
    });

    // Download Emojiman as image
    downloadBtn.addEventListener('click', () => {
        console.log('Download button clicked'); // Debugging
        html2canvas(emojimanContainer).then(canvas => {
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = '나의_이모지맨.png';
            link.click();
        }).catch(error => {
            console.error('Error downloading Emojiman:', error);
        });
    });

    // Initialize with default settings
    updateExpression();
    updateAccessory();
});