function lightenColor(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => {
        const num = Math.min(255, Math.floor(parseInt(color, 16) + amount));
        return num.toString(16).padStart(2, '0');
    });
}