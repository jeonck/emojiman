function setupGalleryHandler(updateExpression, updateAccessory) {
    const generateBtn = document.getElementById('generateBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const emojimanContainer = document.getElementById('emojimanContainer');
    const accessorySelect = document.getElementById('accessory');
    const gallery = document.getElementById('gallery');
    const expressionSelect = document.getElementById('expression');
    const headColorInput = document.getElementById('headColor');
    const bodyColorInput = document.getElementById('bodyColor');

    // 페이지 로드시 다운로드 버튼 항상 보이게
    downloadBtn.classList.remove('hidden');

    // 다양한 색상 조합 배열 (머리, 몸)
    const colorCombos = [
        { head: '#FFD700', body: '#FF6B6B' }, // 노랑-레드
        { head: '#A7FFEB', body: '#00B8D4' }, // 민트-블루
        { head: '#FFF59D', body: '#81C784' }, // 연노랑-연그린
        { head: '#FFB6C1', body: '#BA68C8' }, // 핑크-퍼플
    ];

    // 표정 변경 시 4개 자동 생성
    expressionSelect.addEventListener('change', () => {
        // 기존 갤러리 비우기
        gallery.innerHTML = '';
        // 미리보기 다운로드 버튼 항상 보이게
        downloadBtn.classList.remove('hidden');
        // 4가지 조합 생성
        colorCombos.forEach(combo => {
            // 색상 적용
            headColorInput.value = combo.head;
            bodyColorInput.value = combo.body;
            headColorInput.dispatchEvent(new Event('input'));
            bodyColorInput.dispatchEvent(new Event('input'));
            // 표정/액세서리 적용
            updateExpression();
            updateAccessory();
            // 클론 생성 및 갤러리 추가 (generateBtn 클릭과 동일)
            try {
                const clone = emojimanContainer.cloneNode(true);
                const scaleFactor = 0.6;
                clone.style.transform = `scale(${scaleFactor})`;
                clone.style.transformOrigin = 'top center';
                clone.style.width = '250px';
                clone.style.height = '400px';
                clone.style.margin = '0 auto';
                // 색상 복사
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
                // 액세서리 스케일
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
                // 갤러리 아이템 래퍼
                const wrapper = document.createElement('div');
                wrapper.className = 'p-2 border rounded-lg dark:border-gray-700 bg-gray-50 dark:bg-gray-800';
                // 삭제 버튼
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'mt-2 py-1 px-3 bg-red-600 hover:bg-red-700 text-white text-sm rounded';
                deleteBtn.textContent = '삭제';
                deleteBtn.addEventListener('click', () => {
                    wrapper.remove();
                });
                wrapper.appendChild(clone);
                wrapper.appendChild(deleteBtn);
                gallery.appendChild(wrapper);
            } catch (error) {
                console.error('Error generating Emojiman:', error);
            }
        });
    });

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

            // Copy head color
            if (clonedHead && originalHead) {
                clonedHead.style.backgroundColor = originalHead.style.backgroundColor;
                console.log('Head color copied:', originalHead.style.backgroundColor); // Debugging
            }
            // Copy body color
            if (clonedBody && originalBody) {
                clonedBody.style.backgroundColor = originalBody.style.backgroundColor;
                console.log('Body color copied:', originalBody.style.backgroundColor); // Debugging
            }
            // Copy mouth color
            if (clonedMouth && originalMouth) {
                clonedMouth.style.backgroundColor = originalMouth.style.backgroundColor;
                console.log('Mouth color copied:', originalMouth.style.backgroundColor); // Debugging
            }
            // Copy tongue color
            if (clonedTongue && originalTongue) {
                clonedTongue.style.backgroundColor = originalTongue.style.backgroundColor;
                console.log('Tongue color copied:', originalTongue.style.backgroundColor); // Debugging
            }
            // Copy arms color
            clonedArms.forEach((arm, index) => {
                if (originalArms[index]) {
                    arm.style.backgroundColor = originalArms[index].style.backgroundColor;
                    console.log(`Arm ${index} color copied:`, originalArms[index].style.backgroundColor); // Debugging
                }
            });
            // Copy legs color
            clonedLegs.forEach((leg, index) => {
                if (originalLegs[index]) {
                    leg.style.backgroundColor = originalLegs[index].style.backgroundColor;
                    console.log(`Leg ${index} color copied:`, originalLegs[index].style.backgroundColor); // Debugging
                }
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
            wrapper.className = 'p-2 border rounded-lg dark:border-gray-700 bg-gray-50 dark:bg-gray-800';

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
}