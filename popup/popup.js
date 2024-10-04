/* popup/: A directory containing files for the extension's popup interface.
popup.html: The HTML structure for the popup.
popup.js: JavaScript for popup functionality.
popup.css: Styles for the popup. */
document.getElementById('start-diff').addEventListener('click', async () => {
    const adyenUrl = document.getElementById('adyen-url').value;
    const integrationFolder = document.getElementById('integration-folder').value;
    const customizationsFolder = document.getElementById('customizations-folder').value;

    // Validate inputs
    if (!adyenUrl || !integrationFolder || !customizationsFolder) {
        alert('Please fill in all fields.');
        return;
    }

    // Start the diff process
    await startDiff(adyenUrl, integrationFolder, customizationsFolder);
});

async function startDiff(adyenUrl, integrationFolder, customizationsFolder) {
    // Logic to download, unzip, and compare files will go here
    // ...
}