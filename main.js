document.addEventListener('DOMContentLoaded', () => {
    // Initialize color handlers
    setupColorHandlers();

    // Initialize expression handler
    const updateExpression = setupExpressionHandler();

    // Initialize accessory handler
    const updateAccessory = setupAccessoryHandler();

    // Initialize gallery handler
    setupGalleryHandler(updateExpression, updateAccessory);

    // Initial setup
    updateExpression();
    updateAccessory();
});